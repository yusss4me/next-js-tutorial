import '@/app/ui/global.css';
import { intern } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${intern.className} antialiased`}>{children}</body>
    </html>
  );
}
