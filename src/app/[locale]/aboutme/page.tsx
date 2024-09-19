import { Box, Container, Avatar, Typography, Button } from "@mui/material";
import { useTranslations } from "next-intl";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function AboutMe() {
  const t = useTranslations("Aboutme");

  return (
    <Container maxWidth="md"> {/* Ajusta el maxWidth para centrar el contenido */}
      {/* Foto de perfil centrada dentro de un Box usando Material UI */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Avatar
          sx={{ width: 200, height: 200, border: '3px solid', boxShadow: 10 }}
          alt="Foto de perfil de Ludwing Armijo"
          src="/img/photoPerfil.svg"
        />
      </Box>

      {/* Título y subtítulo */}
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography sx={{ fontWeight: 'bold' }} variant="h4">
          {t("title")}
        </Typography>
        <Typography sx={{ mt: 4, color: 'text.secondary' }} variant="subtitle1">
          {t("subtitle")}
        </Typography>
      </Box>

      {/* Botón para descargar CV */}
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Button variant="contained" color="primary" startIcon={<FileDownloadIcon />}>
          {t("buttonCv")}
        </Button>
      </Box>

      {/* Historia de tecnologías */}
      <Box sx={{ mt: 8 }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: 24}}>
          {t("title2")}
        </Typography>
        <Typography sx={{ mt: 2, fontSize: 16 }}>
          {t("subtitle2")}
        </Typography>

        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 16 }}>
            {t("technologies.programmingLanguagesTitle")}
            <span style={{ fontWeight: 'normal' }}>{t("technologies.programmingLanguagesText")}</span>
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: 'bold', fontSize: 16 }}>
            {t("technologies.frontendTitle")}
            <span style={{ fontWeight: 'normal' }}>{t("technologies.frontendText")}</span>
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: 'bold', fontSize: 16 }}>
            {t("technologies.backendTitle")}
            <span style={{ fontWeight: 'normal' }}>{t("technologies.backendText")}</span>
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: 'bold', fontSize: 16 }}>
            {t("technologies.databasesTitle")}
            <span style={{ fontWeight: 'normal' }}>{t("technologies.databasesText")}</span>
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: 'bold', fontSize: 16 }}>
            {t("technologies.mobileDevelopmentTitle")}
            <span style={{ fontWeight: 'normal' }}>{t("technologies.mobileDevelopmentText")}</span>
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: 'bold', fontSize: 16 }}>
            {t("technologies.toolsTitle")}
            <span style={{ fontWeight: 'normal' }}>{t("technologies.toolsText")}</span>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
