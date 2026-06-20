import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Luxmint Gold | Refined Access to Real Gold.',
  description: 'Authentic gold jewellery, precious accessories and investment-grade gold — curated for those who demand excellence.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-lux-base text-lux-offwhite antialiased font-sans" suppressHydrationWarning>{children}</body>
    </html>
  );
}
