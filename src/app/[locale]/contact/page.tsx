'use client'
import { Box, Container, Typography, Grid, TextField, Button, Alert, Link } from "@mui/material";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { sendEmail } from "@/app/api/send";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
export default function Contact() {
  const t = useTranslations("Contact");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);

    try {
      await sendEmail(formData);
      setIsSubmitted(true);
      if (event.currentTarget) {
        event.currentTarget.reset();
      }
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      console.error(err);
      setError("Hubo un error al enviar el formulario. Inténtalo de nuevo.");
      setIsSubmitted(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={3}>
          {/* Sección de información de contacto */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography>
                {t("subtitle")}, {/* Subtítulo de traducción */}
              </Typography>
              <Typography variant="h3">
                {t("title")} {/* Título de traducción */}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
                {t("text")} {/* Texto de traducción */}
              </Typography>
              <Box>
                {isSubmitted && (
                  <Alert severity="success" sx={{ mb: 2 }}>
                    {t("successMessage")} {/* Mensaje de éxito */}
                  </Alert>
                )}

                {error && (
                  <Alert severity="error" sx={{ mb: 2 }}>
                    {error} {/* Mostrar error si ocurre */}
                  </Alert>
                )}

                <form id="contactForm" onSubmit={handleSubmit} noValidate autoComplete="off">
                  <TextField
                    fullWidth
                    label={t("labelFormName")}
                    placeholder={t("placeholderFormName")}
                    name="name"
                    variant="outlined"
                    margin="normal"
                    sx={{ mb: 2 }}
                    required
                  />
                  <TextField
                    fullWidth
                    label={t("labelFormEmail")}
                    placeholder={t("placeholderFormEmail")}
                    name="email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label={t("labelFormPhone")}
                    placeholder={t("placeholderFormPhone")}
                    name="phone"
                    type="tel"
                    variant="outlined"
                    margin="normal"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label={t("labelFormMessage")}
                    placeholder={t("placeholderFormMessage")}
                    name="message"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    required
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{ mt: 2 }}
                    disabled={loading} // Deshabilitar el botón mientras se envía el formulario
                  >
                    {loading ? t("sending") : t("btnText")} {/* Mostrar texto de "Enviando" */}
                  </Button>
                </form>
              </Box>
            </Box>
          </Grid>

          {/* Sección del formulario de contacto */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h5" sx={{ textAlign: 'end' }} fontWeight="bold">Bolivia</Typography>
              <Typography variant="h6" sx={{ textAlign: 'end', color: 'text.secondary' }}>
                Santa Cruz de la Sierra, <span style={{ fontWeight: 'bold' }}>Santa Cruz</span>
              </Typography>
            </Box>
            <br />
            <br />
            <Box>
              <Typography variant="h5" sx={{ textAlign: 'start' }} fontWeight="bold">Redes Sociales</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'start', gap: 2, mt: 1 }}>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin size={32} color="#0e76a8" />
                </Link>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub size={32} color="#000" />
                </Link>
                <Link href="https://wa.me/+59175076889" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp size={32} color="#25D366" />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
