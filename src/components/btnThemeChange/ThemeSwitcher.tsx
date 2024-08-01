// src/components/btnThemeChange/ThemeSwitcher.tsx
'use client';
import { useTheme } from 'next-themes';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <IconButton
      className={styles.btnTheme}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <LightModeIcon />  : <DarkModeIcon />}
    </IconButton>
  );
};

export default ThemeSwitcher;
