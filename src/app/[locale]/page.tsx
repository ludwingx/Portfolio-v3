import { Box, Typography, Container, Button, Grid, Divider } from "@mui/material";
import { useMessages, useTranslations } from "next-intl";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { FaLaptopCode, FaTools } from "react-icons/fa";
import { MdImagesearchRoller } from "react-icons/md";
import ProjectCard from "./projects/ProjectCard";

export default function Home() {
  const t = useTranslations("Home");
  const messages = useMessages() as { Projects: { [key: string]: any } };
  const projects = Object.keys(messages.Projects);
  return (
    <Container>
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
          sx={{
            gap: 6,
            p: 4,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            maxWidth: "800px",
          }}
        >
          <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
            {t("title")}
          </Typography>
          <Typography variant="h5">{t("subtitle")}</Typography>
        </Box>

        <Box
          sx={{
            mt: 8,
            textAlign: "center",
            maxWidth: "800px",
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          <Typography variant="h3">{t("title2")} <span className="title-effect">{t("title2r")}</span></Typography>
          <Typography variant="h5" mt={2}>{t("subtitle2")}</Typography>
        </Box>

        {/* Servicios */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            mt: 8,
            maxWidth: "800px",
            mx: "auto",
            justifyContent: "center",
          }}
        >
          {/* Servicio 1 */}
          <Box
            sx={{
              flex: 1,
              p: 4,
              border: "1px solid var(--color-main)",
              borderRadius: 2,
              boxShadow: 2,
              backgroundColor: "var(--background-color)",
              minWidth: { xs: "100%", md: "300px" },
              maxWidth: "400px",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "var(--navbar-background-hover)",
              },
            }}
          >
            <Box>
              <FaLaptopCode size={35} aria-label="Coding" />
            </Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textAlign: "start" }}
              gutterBottom
            >
              {t("service1Title")}
            </Typography>
            <Divider sx={{ mb: 2, borderColor: "var(--color-main)" }} />
            <Typography sx={{ textAlign: "start" }}>
              {t("service1Description")}
            </Typography>
          </Box>

          {/* Servicio 2 */}
          <Box
            sx={{
              flex: 1,
              p: 4,
              border: "1px solid var(--color-main)",
              borderRadius: 2,
              boxShadow: 2,
              backgroundColor: "var(--background-color)",
              minWidth: { xs: "100%", md: "300px" },
              maxWidth: "400px",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "var(--navbar-background-hover)",
              },
            }}
          >
            <Box>
              <MdImagesearchRoller size={35} aria-label="Design" />
            </Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textAlign: "start" }}
              gutterBottom
            >
              {t("service2Title")}
            </Typography>
            <Divider sx={{ mb: 2, borderColor: "var(--color-main)" }} />
            <Typography sx={{ textAlign: "start" }}>
              {t("service2Description")}
            </Typography>
          </Box>

          {/* Servicio 3 */}
          <Box
            sx={{
              flex: 1,
              p: 4,
              border: "1px solid var(--color-main)",
              borderRadius: 2,
              boxShadow: 2,
              backgroundColor: "var(--background-color)",
              minWidth: { xs: "100%", md: "300px" },
              maxWidth: "400px",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "var(--navbar-background-hover)",
              },
            }}
          >
            <Box>
              <FaTools size={32} aria-label="Tools" />
            </Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textAlign: "start" }}
              gutterBottom
            >
              {t("service3Title")}
            </Typography>
            <Divider sx={{ mb: 2, borderColor: "var(--color-main)" }} />
            <Typography sx={{ textAlign: "start" }}>
              {t("service3Description")}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", mt: 7, mb: 4 }}>
          <Typography variant="h4">{t("title3")}</Typography>
          <Typography>
            {t("subtitle3")}
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={4}>
              {projects
                .filter((project) => messages.Projects[project][0]?.favorite)
                .map((project, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <ProjectCard
                      imageUrl={messages.Projects[project][0].imageUrl}
                      imageLogoUrl={messages.Projects[project][0].imageLogoUrl}
                      title={messages.Projects[project][0].title}
                      description={messages.Projects[project][0].description}
                      technologies={messages.Projects[project][0].technologies}
                      name={messages.Projects[project][0].name}
                      type={messages.Projects[project][0].type}
                      inDevelopment={messages.Projects[project][0].inDevelopment}
                      url={messages.Projects[project][0].url} favorite={false}                    />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", mt: 7, mb: 4 }}>
          <Button
            variant="contained"
            href="/contact"
            startIcon={<AutoAwesomeIcon />}
            endIcon={<AutoAwesomeIcon />}
          >
            {t("btnText1")}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
