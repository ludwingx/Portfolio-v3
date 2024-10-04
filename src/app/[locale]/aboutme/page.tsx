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
    <Container    >
      {/* Foto de perfil centrada */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <Avatar
          sx={{
            width: { xs: 150, sm: 200 },
            height: { xs: 150, sm: 200 },
            border: "3px solid",
            boxShadow: 10,
          }}
          alt="Foto de perfil de Ludwing Armijo"
          src="/img/photoPerfil.svg"
        />
      </Box>

      {/* Título y subtítulo */}
      <Box sx={{ textAlign: "center", mt: 5,  mr:2, ml: 2 }}>
        <Typography sx={{ fontWeight: "bold" }} variant="h3">
          {t("title")}
        </Typography>
        <Typography
          sx={{ mt: 4, color: "text.secondary", fontSize: { xs: 16, sm: 20 } }}
          variant="h6"
        >
          {t("subtitle")}
        </Typography>
      </Box>

      {/* Botón para visualizar y descargar CV */}
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<VisibilityIcon />} // El ícono aparece al inicio del botón
          onClick={handleViewCv}
        >
          {t("buttonCv")}
        </Button>
      </Box>

      {/* Formación académica */}
      <Box sx={{ mt: 20,  }}>
        <Typography sx={{ fontWeight: "bold", textAlign: "center" }} variant="h4">
          {t("title3")} 🎓
        </Typography>

        <Box sx={{ mt: 1, mr:2, ml: 2 }}>
          {/* Primer título académico */}
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: { xs: 18, sm: 22 } }}>
                <span style={{ fontWeight: "bold" }}>✦ {t("nameAcademic")} </span>{" "}
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
            </Grid>
          </Grid>

          {/* Segundo título académico */}
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: { xs: 18, sm: 22 } }}>
                <span style={{ fontWeight: "bold" }}>✦ {t("nameAcademic2")}</span>{" "}
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
            </Grid>
          </Grid>
        </Box>
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
