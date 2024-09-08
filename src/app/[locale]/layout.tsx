import { NextIntlClientProvider } from 'next-intl';
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { ThemeContexProvider } from '@/themeContext';
import { getLocale, getMessages } from 'next-intl/server';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages(); // Asegúrate de pasar el locale correcto

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeContexProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeContexProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
