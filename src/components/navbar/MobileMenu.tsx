"use client"; // Directiva para componentes del lado del cliente

import React from "react";
import { Drawer, IconButton, Box, List, ListItem, ListItemText, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";
import LanguageSwitcher from "../btnLanguageChange/LanguageSwitcher";
import ThemeSwitcher from "../btnThemeChange/ThemeSwitcher";
interface MobileMenuProps {
  navLinks: { href: string; label: string }[];

}

const MobileMenu: React.FC<MobileMenuProps> = ({ navLinks }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <Divider />
      <List>
        {navLinks.map(({ href, label }) => (
          <ListItem button key={href} component="a" href={href} onClick={handleDrawerToggle}>
            <ListItemText primary={label} />
          </ListItem>
        ))}
        <LanguageSwitcher />
        <ThemeSwitcher />
      </List>


    </Box>
  );

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Mejora el rendimiento en dispositivos móviles.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
        className={styles.navbar}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default MobileMenu;
