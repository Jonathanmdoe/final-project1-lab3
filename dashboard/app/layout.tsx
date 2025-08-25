import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Dashboard',
  description: 'Dashboard UI built with Next.js and Tailwind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg text-ink">
        {children}
      </body>
    </html>
  );
}

