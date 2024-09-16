'use client';
import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from '@/themeContext';
import { IThemeContext, IThemeMode } from '@/themeContext/types';
import styles from '@/components/btnThemeChange/ThemeSwitcher.module.css';

const ThemeSwitcher: React.FunctionComponent = () => {
  const { themeMode, switchThemeMode } = useContext(ThemeContext) as IThemeContext;

  // Alterna entre los modos claro y oscuro
  const toggleThemeMode = () => {
    const newMode = themeMode === IThemeMode.LIGHT ? IThemeMode.DARK : IThemeMode.LIGHT;
    switchThemeMode(newMode);
  };

  return (
    <IconButton className={styles.btnTheme} onClick={toggleThemeMode}>
      {themeMode === IThemeMode.LIGHT ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ThemeSwitcher;
