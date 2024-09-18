import { Box, Container, Typography, Grid, TextField, Button } from "@mui/material";
import { useTranslations } from "next-intl";

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
              <Box component="form" noValidate autoComplete="off">
                <TextField
                  fullWidth
                  label={t("labelFormName")}
                  placeholder={t("placeholderFormName")}
                  variant="outlined"
                  margin="normal"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label={t("labelFormEmail")}
                  placeholder={t("placeholderFormEmail")}
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label={t("labelFormPhone")}
                  placeholder={t("placeholderFormPhone")}
                  variant="outlined"
                  margin="normal"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label={t("labelFormMessage")}
                  placeholder={t("placeholderFormMessage")}
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                />
                <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                  {t("btnText")}
                </Button>
              </Box>
            </Box>
            </Box>
          </Grid>

          {/* Sección del formulario de contacto */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h5" sx={{textAlign: 'end'}} fontWeight="bold">Bolivia</Typography>
              <Typography variant="h6" sx={{textAlign: 'end', color: 'text.secondary'}} >
                Santa Cruz de la Sierra, <span style={{ fontWeight: 'bold' }}>
                  Santa Cruz
                </span>
              </Typography>

            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
