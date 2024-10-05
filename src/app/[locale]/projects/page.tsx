import { Box, Typography, Grid, Container, Card, CardMedia, Stack, Button,CardActions, CardContent } from "@mui/material";
import { useMessages, useTranslations } from "next-intl";
import ProjectCard from './ProjectCard';

interface Project {
  imageUrl: string;
  imageLogoUrl: string;
  title: string;
  description: string;
  technologies: string[];
  name: string;
  type: string[];
  inDevelopment: boolean;
  favorite: boolean;
  url: string;
}

interface Messages {
  Projects: { [key: string]: Project[] };
}

export default function Projects() {
  const pt = useTranslations('ProjectPage');
  const t = useTranslations('Projects');
  const messages = useMessages() as unknown as Messages;
  const projects = Object.keys(messages.Projects);

  return (
    <Container>
    <Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h3">{pt('title')}</Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1">{pt('description')}</Typography>
      </Box>
    </Box>

    <Box sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item key={project} xs={12} sm={6} md={4}>
            <ProjectCard
              imageUrl={messages.Projects[project][0].imageUrl}
              imageLogoUrl={messages.Projects[project][0].imageLogoUrl}
              title={messages.Projects[project][0].title}
              description={messages.Projects[project][0].description}
              technologies={messages.Projects[project][0].technologies}
              name={messages.Projects[project][0].name}
              type={messages.Projects[project][0].type}
              inDevelopment={messages.Projects[project][0].inDevelopment}
              favorite={messages.Projects[project][0].favorite}
              url={messages.Projects[project][0].url}
            />
          </Grid>
        ))}
          {/* Tarjeta adicional como ProjectCard */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardMedia
                component="img"
                height="140"
                image="/img/githubPortada.PNG" // Asegúrate de usar la imagen deseada aquí
                alt="Proyectos Adicionales"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {pt('titleCard')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {pt('textCard')}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/contact">{pt('btnTxtCard')}</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
    </Box>
  </Container>
  )

}
