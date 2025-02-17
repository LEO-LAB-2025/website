import { Open_Sans } from "next/font/google";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'L.E.O. Lab',
  description: 'Laboratory for Empirical Observations',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
