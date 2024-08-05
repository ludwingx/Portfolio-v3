import { Box, Typography, Container } from "@mui/material";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <Container
      maxWidth="md" // Establece el ancho máximo del contenedor
      sx={{
        padding: 2, // Padding para evitar que el texto toque los bordes
        '@media (max-width: 600px)': { // Ajustar padding para móviles
          padding: 1,
        }
      }}
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
          gap={6} // Incrementa el espacio entre los elementos dentro del box
          p={4}
          sx={{ textAlign: "center", display: "flex", flexDirection: "column", maxWidth: "800px" }}
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
            mt: 8, // Aumenta el margen superior para más separación entre secciones
            textAlign: "center",
            maxWidth: "800px",
            paddingTop:5,
            paddingBottom:5,
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
            flexDirection: { xs: "column", md: "row" }, // Cambia la dirección en pantallas pequeñas y grandes
            gap: 6, // Incrementa el espacio entre las tarjetas
            mt: 8, // Aumenta el margen superior para más separación de la sección anterior
            maxWidth: "800px",
            mx: "auto",
            justifyContent: "center", // Centra las tarjetas horizontalmente
          }}
        >
          <Box
            sx={{
              flex: 1,
              p: 4, // Incrementa el padding para dar más espacio interno
              border: "1px solid #ddd",
              borderRadius: 2,
              boxShadow: 2, // Incrementa la sombra para mayor separación visual
              textAlign: "center",
              backgroundColor: "#fff",
              minWidth: { xs: "100%", md: "300px" }, // Aumenta el tamaño mínimo en móviles y desktop
              maxWidth: "400px", // Aumenta el tamaño máximo para evitar que se expandan demasiado
              '@media (max-width: 600px)': { // Ajustar el tamaño de la tarjeta en móviles
                width: "100%",
              }
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
              <i className="fa fa-code" aria-hidden="true"></i> {/* Puedes reemplazar esto con tu icono */}
              {t('service1Title')}
            </Typography>
            <Typography>
              {t('service1Description')}
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              p: 4, // Incrementa el padding para dar más espacio interno
              border: "1px solid #ddd",
              borderRadius: 2,
              boxShadow: 2, // Incrementa la sombra para mayor separación visual
              textAlign: "center",
              backgroundColor: "#fff",
              minWidth: { xs: "100%", md: "300px" }, // Aumenta el tamaño mínimo en móviles y desktop
              maxWidth: "400px", // Aumenta el tamaño máximo para evitar que se expandan demasiado
              '@media (max-width: 600px)': { // Ajustar el tamaño de la tarjeta en móviles
                width: "100%",
              }
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
              <i className="fa fa-pencil" aria-hidden="true"></i> {/* Puedes reemplazar esto con tu icono */}
              {t('service2Title')}
            </Typography>
            <Typography>
              {t('service2Description')}
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              p: 4, // Incrementa el padding para dar más espacio interno
              border: "1px solid #ddd",
              borderRadius: 2,
              boxShadow: 2, // Incrementa la sombra para mayor separación visual
              textAlign: "center",
              backgroundColor: "#fff",
              minWidth: { xs: "100%", md: "300px" }, // Aumenta el tamaño mínimo en móviles y desktop
              maxWidth: "400px", // Aumenta el tamaño máximo para evitar que se expandan demasiado
              '@media (max-width: 600px)': { // Ajustar el tamaño de la tarjeta en móviles
                width: "100%",
              }
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
              <i className="fa fa-cogs" aria-hidden="true"></i> {/* Puedes reemplazar esto con tu icono */}
              {t('service3Title')}
            </Typography>
            <Typography>
              {t('service3Description')}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
