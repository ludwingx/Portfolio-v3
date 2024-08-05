import { Box, Typography, Container } from "@mui/material";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <Container className="container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh", // Ajustado para cubrir la pantalla
          textAlign: "center",
          padding: 2, // Agregar padding para evitar que el texto toque los bordes
          '@media (max-width: 600px)': { // Ajustar padding para móviles
            padding: 1,
          }
        }}
      >
        <Box gap={4} p={4} sx={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
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

          {/* Nueva sección añadida aquí */}
          <Box mt={4} sx={{ textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
              {t('title2')}
            </Typography>
            <Typography variant="body1">
              {t('subtitle2')}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
