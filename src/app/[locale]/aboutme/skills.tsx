import { Box, Typography, Grid } from "@mui/material";
import {
  FaHtml5, FaCss3Alt,FaLaravel , FaJs, FaSass, FaPhp, FaGithub, FaGitAlt, FaBootstrap, FaAngular, FaNpm, FaReact,
} from "react-icons/fa";
import {
  SiTypescript, SiPython, SiExpo ,  SiMysql, SiAstro, SiNestjs , SiIonic, SiNotion, SiShadcnui, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiNextdotjs,
  SiVisualstudiocode,
  SiOpencv,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import Image from "next/image";
import { useTranslations } from "next-intl";
// Stack actual
const currentStack = [
  { name: "HTML5", icon: <FaHtml5 title="HTML5" style={{ color: "#E34F26", fontSize: '34px' }} /> },
  { name: "CSS3", icon: <FaCss3Alt title="CSS3" style={{ color: "#1572B6", fontSize: '34px' }} /> },
  { name: "JavaScript", icon: <FaJs title="JavaScript" style={{ color: "#F7DF1E", fontSize: '34px' }} /> },
  { name: "TypeScript", icon: <SiTypescript title="TypeScript" style={{ color: "#007ACC", fontSize: '34px' }} /> },
  { name: "React JS", icon: <FaReact title="React" style={{ color: "#61DBFB", fontSize: '34px' }} /> },
  { name: "Astro", icon: <SiAstro title="Astro" style={{ color: "#FF5D00", fontSize: '34px' }} /> },
  { name: "Next JS", icon: <SiNextdotjs title="Next.js" style={{ color: "var(--text-color)", fontSize: '34px' }} /> },
  { name: "Expo", icon: <SiExpo title="Expo" style={{ color: "#00A8E8", fontSize: '34px' }} /> },
  { name: "Nest JS", icon: <SiNestjs title="Nest.js" style={{ color: "#E0234E", fontSize: '34px' }} /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql title="PostgreSQL" style={{ color: "#336791", fontSize: '34px' }} /> },
  { name: "Material UI", icon: <Image src="/img/mui-icon.png" width={34} height={34} alt={"Material UI icon"} />
},
];

// Tecnologías aprendidas o usadas en su momento
const learnedStack = [
  { name: "Bootstrap", icon: <FaBootstrap title="Bootstrap" style={{ color: "#563D7C", fontSize: '34px' }} /> },
  { name: "Python", icon: <SiPython title="Python" style={{ color: "#306998", fontSize: '34px' }} /> },
  { name: "OpenCV", icon: <SiOpencv  title="OpenCV" style={{  color: "#0e0220", fontSize: '34px' }} /> },
  { name: "Sass/SCSS", icon: <FaSass title="Sass/SCSS" style={{ color: "#CC6699", fontSize: '34px' }} /> },
  { name: "PHP", icon: <FaPhp title="PHP" style={{ color: "#8993BE", fontSize: '34px' }} /> },
  { name: "Laravel", icon: <FaLaravel title="Laravel" style={{ color: "#F05340", fontSize: '34px' }} /> },
  { name: "Angular", icon: <FaAngular title="Angular" style={{ color: "#E23237", fontSize: '34px' }} /> },
  { name: "Ionic", icon: <SiIonic title="Ionic" style={{ color: "#3880FF", fontSize: '34px' }} /> },
  { name: "Shadcn", icon: <SiShadcnui title="Shadcn UI" style={{ color: "#563D7C", fontSize: '34px' }} /> },
  { name: "MySQL", icon: <SiMysql title="MySQL" style={{ color: "#4479A1", fontSize: '34px' }} /> },
];

// Otras herramientas
const otherTools = [
  { name: "GitHub", icon: <FaGithub title="GitHub" style={{ color: "var(--text-color)", fontSize: '34px' }} /> },
  { name: "Git", icon: <FaGitAlt title="Git" style={{ color: "#F05032", fontSize: '34px' }} /> },
  { name: "Notion", icon: <SiNotion title="Notion" style={{ color: "var(--text-color)", fontSize: '34px' }} /> },
  { name: "Figma", icon: <SiFigma title="Figma" style={{ color: "#F24E1E", fontSize: '34px' }} /> },
  { name: "Photoshop", icon: <SiAdobephotoshop title="Photoshop" style={{ color: "#31A8FF", fontSize: '34px' }} /> },
  { name: "Illustrator", icon: <SiAdobeillustrator title="Illustrator" style={{ color: "#FF9A00", fontSize: '34px' }} /> },
  { name: "After Effects", icon: <SiAdobeaftereffects title="After Effects" style={{ color: "#A10000", fontSize: '34px' }} /> },
  { name: "NPM", icon: <FaNpm title="NPM" style={{ color: "#CB3837", fontSize: '34px' }} /> },
  { name: "VS Code", icon: <SiVisualstudiocode title="VS Code" style={{ color: "#0078D7", fontSize: '34px' }} /> },
  { name: "Office", icon:  <Image src="/img/office.png" width={34} height={34} alt={"Office icon"} /> },
];

// Componente principal
const Skills = () => {
  const t = useTranslations("Aboutme");

  const renderSkills = (skillsArray: { name: string; icon: JSX.Element }[]) => {
    return skillsArray.map((skill, index) => (
      <Grid item xs={4} sm={4} md={4} lg={1.6} key={index} className="skill-icon" sx={{ textAlign: 'center', mb: 2 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {skill.icon}
          <Typography variant="body2" className="tech-name" sx={{ mt: 1, textAlign: 'center' }}>
            {skill.name}
          </Typography>
        </div>
      </Grid>
    ));
  };

  return (
    <Box className="content p-3 section" id="skills">
      {/* Sección de Stack Actual */}
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h6" align="center" mb={2} data-aos="fade-zoom-in">
            {t('subtitleSkill1')}
          </Typography>
          <Grid container justifyContent="center" spacing={3} data-aos="fade-up" data-aos-delay="100">
            {renderSkills(currentStack)}
          </Grid>
        </Grid>

        {/* Sección de Tecnologías Aprendidas */}
        <Grid item xs={12}>
          <Typography variant="h6" align="center" mb={2} data-aos="fade-zoom-in">
            {t('subtitleSkill2')}
          </Typography>
          <Grid container justifyContent="center" spacing={3} data-aos="fade-up" data-aos-delay="200">
            {renderSkills(learnedStack)}
          </Grid>
        </Grid>

        {/* Otras Herramientas */}
        <Grid item xs={12}>
          <Typography variant="h6" align="center" mb={2} data-aos="fade-zoom-in">
            {t('subtitleSkill3')}
          </Typography>
          <Grid container justifyContent="center" spacing={3} data-aos="fade-up" data-aos-delay="300">
            {renderSkills(otherTools)}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
