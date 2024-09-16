import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import styles from "./Navbar.module.css";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "../btnLanguageChange/LanguageSwitcher";
import ThemeSwitcher from "../btnThemeChange/ThemeSwitcher";

const NavbarServer: React.FC = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale(); // Obtén el idioma actual

  const navLinks = [
    { href: `/${locale}/aboutme`, label: t("about") },
    { href: `/${locale}/projects`, label: t("portfolio") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <AppBar position="static" className={styles.navbar} elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
            className={styles.logo}
          >
            <Link href={`/${locale}`} passHref>
              <Typography
                component="span"
                className={styles.navbarLink}
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                LUDWING
              </Typography>
            </Link>
          </Typography>

          {/* Links de navegación */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4, // Mayor separación entre los enlaces
            }}
          >
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} passHref>
                <Typography
                  component="span"
                  className={styles.navbarLink}
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  {label}
                </Typography>
              </Link>
            ))}

            {/* LanguageSwitcher y ThemeSwitcher */}
            <LanguageSwitcher  />
            <ThemeSwitcher  />
          </Box>

          {/* Menú móvil */}
          <MobileMenu navLinks={navLinks} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavbarServer;
