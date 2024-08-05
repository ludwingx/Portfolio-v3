import { NextIntlClientProvider } from 'next-intl';
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { getLocale, getMessages } from 'next-intl/server';

export default async function RootLayout({

  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();


  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider enableSystem={true} attribute="class">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
