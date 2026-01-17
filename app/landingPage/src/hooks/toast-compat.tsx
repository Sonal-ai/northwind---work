// lib/toast-compat.ts
import { toast as sonner } from 'sonner';

/**
 * Rough compatibility wrapper for the previous toast API.
 *
 * Old usage:
 *   const t = toast({ title: 'Saved', description: 'Saved ok' });
 *   t.dismiss();
 *
 * New (wrapped) behavior:
 *   - title + description are combined into the Sonner toast content
 *   - returns an object with dismiss() to close the toast
 */

export type ToastOptions = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  // you can add other options (type: 'success'|'error'|'info', duration, etc.)
  type?: 'info' | 'success' | 'error' | 'loading';
  duration?: number; // ms
};

export function toast(opts: ToastOptions) {
  const content = (
    <div className="toast-compat">
      {opts.title ? <div className="toast-compat-title">{opts.title}</div> : null}
      {opts.description ? <div className="toast-compat-desc">{opts.description}</div> : null}
    </div>
  );

  // route to appropriate sonner function
  let id: unknown;
  const duration = opts.duration ?? 4000;

  switch (opts.type) {
    case 'success':
      id = sonner.success(content, { duration });
      break;
    case 'error':
      id = sonner.error(content, { duration });
      break;
    case 'loading':
      id = sonner.promise(new Promise(() => { }), {
        loading: content,
        success: content,
        error: content
      }); // minimal, you can customize
      break;
    default:
      id = sonner(content, { duration });
  }

  return {
    id,
    dismiss: () => {
      // sonner doesn't require an id for dismissing all toasts; 
      // calling `sonner.dismiss()` will close all toasts.
      // If you'd like to only dismiss by id, Sonner's API may vary by version.
      try {
        // @ts-expect-error -- Sonner types might differ across versions
        sonner.dismiss(id);
      } catch {
        // fallback: dismiss all
        // sonner.dismiss();
      }
    },
    // update not implemented — Sonner supports programmatic replacement via custom IDs,
    // but implementing exact update semantics requires more code and version-specific APIs.
    update: (newOpts: Partial<ToastOptions>) => {
      // Simple strategy: dismiss and re-show
      try {
        // @ts-expect-error -- Sonner types might differ across versions, or `id` might not be a valid Sonner ID type
        sonner.dismiss(id);
      } catch {
      }
      return toast({ ...opts, ...newOpts });
    },
  };
}

/**
 * Lightweight useToast() hook for compatibility.
 * Your original useToast returned the `toast` function and dismiss. We'll mimic that.
 */
export function useToast() {
  return {
    toast,
    dismiss: (/*toastId?: string*/) => {
      // sonner.dismiss() without arg dismisses all toasts
      // sonner may accept an id; if present in your version you can accept toastId and pass it
      sonner.dismiss();
    },
  };
}
