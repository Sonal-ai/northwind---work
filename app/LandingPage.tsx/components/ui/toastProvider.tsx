'use client'; // if using Next.js App Router; remove for plain React
import React from 'react';
import { Toaster } from 'sonner';

export default function ToastProvider() {
  return <Toaster position="top-right" />;
}
