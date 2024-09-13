'use client'
import React, { useContext, useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'; // Icono para el modo del sistema
import { ThemeContext } from '@/themeContext';
import { IThemeContext, IThemeMode } from '@/themeContext/types';
import styles from './themeSwitcher.module.css';
const ThemeSwitcher: React.FunctionComponent = () => {
  const { themeMode, switchThemeMode } = useContext(ThemeContext) as IThemeContext;

  // Estado para manejar el ancla del menú
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Abre el menú cuando el ícono es clicado
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Cierra el menú
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Alterna entre los temas cuando el usuario selecciona un nuevo modo
  const handleSwitchThemeMode = (mode: IThemeMode) => {
    switchThemeMode(mode);
    handleClose();
  };

  return (
    <div>
      <IconButton className={styles.btnTheme}
        aria-controls={open ? 'theme-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {themeMode === IThemeMode.LIGHT ? <LightModeIcon /> : themeMode === IThemeMode.DARK ? <DarkModeIcon /> : <SettingsBrightnessIcon />}
      </IconButton>
      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'theme-button',
        }}
      >
        <MenuItem onClick={() => handleSwitchThemeMode(IThemeMode.LIGHT)} selected={themeMode === IThemeMode.LIGHT}>
          <LightModeIcon /> Light Mode
        </MenuItem>
        <MenuItem onClick={() => handleSwitchThemeMode(IThemeMode.DARK)} selected={themeMode === IThemeMode.DARK}>
          <DarkModeIcon /> Dark Mode
        </MenuItem>
        <MenuItem onClick={() => handleSwitchThemeMode(IThemeMode.SYSTEM)} selected={themeMode === IThemeMode.SYSTEM}>
          <SettingsBrightnessIcon /> System Mode
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ThemeSwitcher;
