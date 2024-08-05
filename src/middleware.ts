import createMiddleware from 'next-intl/middleware';
import {locales} from './config';

export default createMiddleware({
  // Lista de todos los locales soportados
  locales,

  // Local por defecto cuando no se encuentra coincidencia
  defaultLocale: 'en'
});

export const config = {
  // Coincidir solo con los nombres de ruta internacionalizados
  matcher: ['/', '/(es|en)/:path*']
};
