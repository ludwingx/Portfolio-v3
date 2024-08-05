// components/navbar/NavbarServer.tsx

import { useTranslations } from "next-intl";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import styles from "./Navbar.module.css";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "../btnLanguageChange/LanguageSwitcher";
import ThemeSwitcher from "../btnThemeChange/ThemeSwitcher";

const NavbarServer: React.FC = () => {
  const t = useTranslations("Navbar");

  const navLinks = [
    { href: "/", label: t("about") },
    { href: "/portfolio", label: t("portfolio") },
    { href: "/services", label: t("services") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <AppBar position="static" className={styles.navbar} sx={{ backgroundColor: "var(--navbar-background)", color: "var(--navbar-text)" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} className={styles.navbarLink}>
          <Link href="/" passHref>
            <Typography component="span" className={styles.navbarLink} sx={{ textDecoration: 'none', color: 'inherit' }}>
              LUDWING
            </Typography>
          </Link>
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} passHref>
              <Typography component="span" className={styles.navbarLink} sx={{ textDecoration: 'none', color: 'inherit' }}>
                {label}
              </Typography>
            </Link>
          ))}
          {/* Aquí puedes incluir LanguageSwitcher y ThemeSwitcher si son compatibles con renderizado del servidor */}
          <LanguageSwitcher />
          <ThemeSwitcher />
        </Box>
        <MobileMenu navLinks={navLinks} /> {/* Pasar las traducciones como propiedad */}
      </Toolbar>
    </AppBar>
  );
};

export default NavbarServer;
