// components/NavLink.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { forwardRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface NavLinkCompatProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  activeClassName?: string;
  pendingClassName?: string;
  /**
   * If true, treat href as exact match (pathname === href).
   * If false (default), treat href as prefix match (pathname.startsWith(href)).
   */
  exact?: boolean;
}

/**
 * NavLink replacement for Next.js.
 * - href: string (replaces `to` from react-router)
 * - activeClassName / pendingClassName are optional and get merged with className
 */
const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ href, className, activeClassName, pendingClassName, exact = false, onClick, children, ...props }, ref) => {
    const pathname = usePathname() ?? '/';
    const [isPending, setIsPending] = useState(false);

    // Active logic: exact or prefix match
    const isActive = exact ? pathname === href : pathname === href || pathname.startsWith(href.endsWith('/') ? href : `${href}/`) || (href === '/' && pathname === '/');

    // Clear pending whenever pathname changes (navigation finished)
    useEffect(() => {
      if (isPending) {
        setIsPending(false);
      }
      // we intentionally only want to run this when pathname changes
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
      // Mark this link as pending until pathname update
      setIsPending(true);

      // call user provided onClick if present
      if (onClick) {
        onClick(e);
      }
    };

    const mergedClassName = cn(
      className,
      isActive && activeClassName,
      isPending && pendingClassName,
    );

    // Note: using Link with legacy behavior to render a real <a> so ref forwarding works reliably.
    return (
      <Link href={href} legacyBehavior>
        <a ref={ref} className={mergedClassName} onClick={handleClick} {...props}>
          {children}
        </a>
      </Link>
    );
  },
);

NavLink.displayName = 'NavLink';

export { NavLink };
