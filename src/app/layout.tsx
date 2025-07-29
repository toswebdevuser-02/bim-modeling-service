import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Top BIM Service Provider in the World',
  description: 'Some of the leading BIM service provider offering neoteric BIM Services globally.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <meta name="google-site-verification" content="E9EIdQSB3rcHU7ze9U9YfdXWi0u3V2oayOjHhsYt_Rs" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
