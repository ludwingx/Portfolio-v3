import { Box, Typography, Container } from "@mui/material";
import {useTranslations} from 'next-intl';
export default function Home() {
  const t = useTranslations('Home');
  return (
    <Container className="container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "120vh",
          textAlign: "center",
        }}
      >
        <Box gap={4} p={4} sx={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >{t('title')}

          </Typography>
          <Typography variant="h5">
            {t('subtitle')}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
