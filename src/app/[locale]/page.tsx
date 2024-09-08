import { Box, Typography, Container, Button, Link } from "@mui/material";
import { useTranslations } from 'next-intl';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import styles from '@/styles/Button.module.css';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <Container
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          textAlign: "center",
          paddingTop: 10,
        }}
      >
        {/* Títulos y Descripción General */}
        <Box
          sx={{
            gap: 6,
            p: 4,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            maxWidth: "800px",
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            {t('title')}
          </Typography>
          <Typography variant="h5">
            {t('subtitle')}
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 8,
            textAlign: "center",
            maxWidth: "800px",
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          <Typography variant="h3">
            {t('title2')}
          </Typography>
          <Typography variant="h5">
            {t('subtitle2')}
          </Typography>
        </Box>
        {/* Servicios */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            mt: 8,
            maxWidth: "800px",
            mx: "auto",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              flex: 1,
              p: 4,
              border: "1px solid var(--navbar-background)", // Aplicar borde del tema
              borderRadius: 2,
              boxShadow: 2,
              textAlign: "center",
              backgroundColor: "var(--background-color)", // Aplicar color de fondo del tema
              minWidth: { xs: "100%", md: "300px" },
              maxWidth: "400px",
              transition: "background-color 0.3s",
              '&:hover': {
                backgroundColor: 'var(--navbar-background-hover)', // Aplicar color de fondo al pasar el ratón
              },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
              <i className="fa fa-code" aria-hidden="true"></i>
              {t('service1Title')}
            </Typography>
            <Typography>
              {t('service1Description')}
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              p: 4,
              border: "1px solid var(--navbar-background)", // Aplicar borde del tema
              borderRadius: 2,
              boxShadow: 2,
              textAlign: "center",
              backgroundColor: "var(--background-color)", // Aplicar color de fondo del tema
              minWidth: { xs: "100%", md: "300px" },
              maxWidth: "400px",
              transition: "background-color 0.3s",
              '&:hover': {
                backgroundColor: 'var(--navbar-background-hover)', // Aplicar color de fondo al pasar el ratón
              },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
              <i className="fa fa-pencil" aria-hidden="true"></i>
              {t('service2Title')}
            </Typography>
            <Typography>
              {t('service2Description')}
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              p: 4,
              border: "1px solid var(--navbar-background)", // Aplicar borde del tema
              borderRadius: 2,
              boxShadow: 2,
              textAlign: "center",
              backgroundColor: "var(--background-color)", // Aplicar color de fondo del tema
              minWidth: { xs: "100%", md: "300px" },
              maxWidth: "400px",
              transition: "background-color 0.3s",
              '&:hover': {
                backgroundColor: 'var(--navbar-background-hover)', // Aplicar color de fondo al pasar el ratón
              },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
              <i className="fa fa-cogs" aria-hidden="true"></i>
              {t('service3Title')}
            </Typography>
            <Typography>
              {t('service3Description')}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" , mt: 7, mb: 4 }} >
          <Typography variant="h4">
            Obras escogidas
          </Typography>
          <Typography>
            Explora mis proyectos, cada uno realizado con pasión y entregado a tiempo, superando las expectativas.
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" , mt: 7, mb: 4 }}>
            <Button variant="contained" href="/contact" startIcon={<AutoAwesomeIcon />} endIcon={<AutoAwesomeIcon />}>
              Trabajemos Juntos
            </Button>
        </Box>
      </Box>
    </Container>
  );
}
