import { Box, Container, Typography, Grid, TextField, Button } from "@mui/material";
import { useTranslations } from "next-intl";
import {sendEmail} from "@/app/api/send"
export default function Contact() {
  const t = useTranslations("Contact");
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={3}>
          {/* Sección de información de contacto */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography>
                {t("subtitle")},
              </Typography>
              <Typography variant="h3">
                {t("title")}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
                {t("text")}.
              </Typography>
              <Box>
                <form id="contactForm" action={sendEmail} method="POST" noValidate autoComplete="off">
                  <TextField
                    fullWidth
                    label={t("labelFormName")}
                    placeholder={t("placeholderFormName")}
                    name="name"
                    variant="outlined"
                    margin="normal"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label={t("labelFormEmail")}
                    placeholder={t("placeholderFormEmail")}
                    name="email"
                    type="email"
                    variant="outlined"
                    margin="normal"
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
                  />
                  <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                    {t("btnText")}
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
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
