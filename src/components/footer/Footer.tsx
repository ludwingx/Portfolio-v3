import React from 'react'
import { Box, Typography, Container, IconButton, Link, useTheme } from "@mui/material";
const Footer = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
  <Box sx={{ textAlign: "center" }}>
    <Typography>
      Desarrollado por{" "}
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
      con mucho ❤️ y sin ☕
    </Typography>
    <Typography>© 2024</Typography>
  </Box>
</Container>

  )
}

export default Footer