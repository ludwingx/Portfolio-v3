import React from 'react'
import { Box, Typography, Container, IconButton, Link, useTheme } from "@mui/material";
import { useTranslations } from 'next-intl';
const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
  <Box sx={{ textAlign: "center" }}>
    <Typography>
      {t("text")}{" "}
      <Link
        href="https://ludwing.dev"
        target="_blank"
        rel="noreferrer"
        sx={{
          textDecoration: "underline",
          textDecorationColor: "black", // Color del subrayado
          textDecorationThickness: "2px", // Grosor del subrayado
          textUnderlineOffset: "4px", // Distancia entre texto y subrayado
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Ludwing
      </Link>{" "}
      {t("text2")}
    </Typography>
    <Typography>© 2024</Typography>
  </Box>
</Container>

  )
}

export default Footer