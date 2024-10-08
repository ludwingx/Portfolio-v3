"use client";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Link,
  Box,
  Stack,
  Chip,
  CardActions,
  CardHeader,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  technologies: string[];
  imageLogoUrl: string;
  name: string;
  type: string[];
  inDevelopment: boolean;
  favorite: boolean;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  imageLogoUrl,
  title,
  description,
  technologies,
  name,
  type,
  inDevelopment,
  favorite,
  url
}) => {
  // Mueve el hook useTranslations fuera de la condición
  const t = useTranslations('Home');

  return (
    <Card
      sx={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover .card-content": {
          opacity: 0,
        },
        "&:hover .overlay": {
          opacity: 1,
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
        },
      }}
    >
      <CardContent>
        <Stack direction="row" spacing={1}>
          {type.map((item, index) => (
            <Chip
              size="small"
              key={index}
              label={item}
              sx={{ backgroundColor: "var(--color-main)" }}
            />
          ))}
          {inDevelopment && (
            <Chip
              size="small"
              label="En desarrollo"
              color="warning"
            />
          )}
        </Stack>
      </CardContent>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
        sx={{
          filter: "none",
          transition: "filter 0.3s ease",
          "&:hover": {
            filter: "blur(10px)",
          },
        }}
      />
      <CardContent
        className="card-content"
        sx={{ transition: "opacity 0.3s ease" }}
      >
        <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
      </CardContent>
      <CardActions>
        <Typography variant="body2" color="text.secondary">
          {technologies.join(", ")}
        </Typography>
      </CardActions>
      <CardContent
        className="overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          opacity: 0,
          transition: "opacity 0.3s ease, backdrop-filter 0.3s ease",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" sx={{ marginBottom: 2, color: 'var(--color-main-light)' }}>
          {name}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, fontSize: 14 }}>
          {description}
        </Typography>
        <Image src={imageLogoUrl} alt="App" width={70} height={70} />
        {!inDevelopment && (
          <Link
            href={url}
            sx={{
              color: "#ffffff",
              marginTop: 2,
              "&:hover": {
                textDecoration: "underline",
                color: "#ffffff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            {t('linkApp')}
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
