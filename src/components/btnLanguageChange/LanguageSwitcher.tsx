'use client';
import React from 'react';
import { useRouter, usePathname } from '../../navigation'; // Ajusta según tu estructura de proyecto
import { IconButton, Typography } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import { useLocale, useTranslations } from 'next-intl'; // Asegúrate de que 'next-intl' esté correctamente configurado para manejar locales

// Define un tipo para las claves de locales
type Locale = 'en' | 'es';

const LanguageSwitcher = () => {
  const locale = useLocale() as Locale; // Asegúrate de que useLocale devuelva un valor válido para el tipo Locale
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('LanguageSwitcher');

  // Define el objeto locales con las claves específicas
  const locales: { [key in Locale]: string } = {
    en: 'EN',
    es: 'ES'
  };

  const handleLocaleChange = (newLocale: Locale) => {
    router.push(pathname, { locale: newLocale }); // Pasar el objeto de opciones correctamente
  };

  return (
      <IconButton
        color="inherit"
        aria-label="language"
        onClick={() => handleLocaleChange(locale === 'en' ? 'es' : 'en')} // Cambia entre inglés y español
      >
        <TranslateIcon />
        <Typography variant="body2" style={{ marginLeft: 8 }}>
          {locales[locale]}
        </Typography>
      </IconButton>
  );
};

export default LanguageSwitcher;
