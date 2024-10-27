"use client";

import {
  Box,
  Container,
  Avatar,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { useTranslations } from "next-intl";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Skills from "./skills";

export default function AboutMe() {
  const t = useTranslations("Aboutme");

  const handleViewCv = () => {
    const cvUrl = "/cv_ludwing.pdf";
    window.open(cvUrl, "_blank");
  };

  return (
    <Container>
      {/* Estructura con Grid para imagen y texto */}
      <Grid container spacing={4} alignItems="center" mt={10}>
        {/* Foto de perfil */}
        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            sx={{
              width: { xs: 150, sm: 270 },
              height: { xs: 150, sm: 270 },
              border: "3px solid",
              boxShadow: 10,
            }}
            alt="Foto de perfil de Ludwing Armijo"
            src="/img/photoPerfil.svg"
          />
        </Grid>

        {/* Contenido de texto */}
        <Grid item xs={12} sm={6} md={8}>
          <Box sx={{ textAlign: "left" }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h3">
              {t("title")}
            </Typography>
            <Typography
              sx={{ mt: 4, color: "text.secondary", fontSize: { xs: 16, sm: 20 } }}
              variant="h6"
            >
              {t("subtitle")}
            </Typography>

            {/* Botón para visualizar y descargar CV */}
            <Box sx={{ textAlign: "left", mt: 5 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<VisibilityIcon />}
                onClick={handleViewCv}
              >
                {t("buttonCv")}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Formación académica */}
      <Box sx={{ mt: 20 }}>
        <Typography sx={{ fontWeight: "bold", textAlign: "center" }} variant="h4">
          {t("title3")} 🎓
        </Typography>

        <Grid container spacing={2} mt={2} justifyContent="center">
          {/* Primer título académico */}
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: "center", border: '1px solid', borderRadius: 2, p: 2 }}>
              <Typography sx={{ fontSize: { xs: 18, sm: 22 } }}>
                <span style={{ fontWeight: "bold" }}>{t("nameAcademic")}</span>{" "}
                <span style={{ color: "#393939" }}>{t("nameInstitution")}</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 16 },
                  color: "var(--color-main)",
                }}
              >
                {t("dates")} | {t("city")}
              </Typography>
            </Box>
          </Grid>

          {/* Segundo título académico */}
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: "center", border: '1px solid', borderRadius: 2, p: 2 }}>
              <Typography sx={{ fontSize: { xs: 18, sm: 22 } }}>
                <span style={{ fontWeight: "bold" }}>{t("nameAcademic2")}</span>{" "}
                <span style={{ color: "#393939" }}>{t("nameInstitution2")}</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 16 },
                  color: "var(--color-main)",
                }}
              >
                {t("dates2")} | {t("city2")}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Habilidades */}
      <Box sx={{ mt: 20, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {t("title4")}
        </Typography>
        <Skills />
      </Box>
    </Container>
  );
}
