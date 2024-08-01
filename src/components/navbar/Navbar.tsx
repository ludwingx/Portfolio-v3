import { useTranslations } from "next-intl";
import Link from "next/link";
import ThemeSwitcher from "../btnThemeChange/ThemeSwitcher";
import LanguageSwitcher from "../btnLanguageChange/LanguageSwitcher";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const t = useTranslations("Navbar");

  const navLinks = [
    { href: "/", label: t("about") },
    { href: "/portfolio", label: t("portfolio") },
    { href: "/services", label: t("services") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <AppBar position="static" className={styles.navbar} sx={{ backgroundColor: "var(--navbar-background)", color: "var(--navbar-text)" }}>
      <Toolbar sx={{ backgroundColor: "var(--navbar-background)", color: "var(--navbar-text)" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref className={styles.navbarLink}>
            LUDWING
          </Link>
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} passHref>
              <Typography className={styles.navbarLink}>{label}</Typography>
            </Link>
          ))}
          <LanguageSwitcher />
          <ThemeSwitcher />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
