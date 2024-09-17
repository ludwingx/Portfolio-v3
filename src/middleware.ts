import createMiddleware from 'next-intl/middleware';
import {locales} from './config';

export default createMiddleware({
  locales,
  defaultLocale: 'es',
});

export const config = {
  // Coincidir solo con las rutas internacionalizadas, excluyendo favicon y archivos estáticos
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
    '/(es|en)(/.*)?'
  ],
};
