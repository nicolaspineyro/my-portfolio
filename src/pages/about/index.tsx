import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ExperienceCard from "src/components/about/ExperienceCard";
import { ExperienceObject } from "src/constants/interfaces";
import { CardData } from "src/constants";
import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { IconCarousel } from "src/components";

const About = () => {
  const [experienceSelected, setExperienceSelected] = useState<number>(0);
  return (
    <main className="about-container">
      <Grid
        display={"flex"}
        container
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Grid item display={"flex"}>
          <h1>My work experience</h1>
          <img src={require("src/assets/about/about-title.png")} height={100} />
        </Grid>
        <Grid item display={"flex"} justifyContent={"space-evenly"}>
          {CardData.map((experienceData: ExperienceObject) => (
            <ExperienceCard {...experienceData} />
          ))}
        </Grid>
        <Grid item display={"flex"}>
          <h1>Tech Stack</h1>
          <img src={require("src/assets/about/about-title.png")} height={100} />
        </Grid>
        <Box maxWidth={"100%"}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quasi
            necessitatibus fuga veritatis asperiores at maxime ducimus suscipit?
            Aspernatur voluptatum voluptate, ratione natus dolores sapiente
            molestias rem. Officia, deserunt tenetur.
          </p>
          <IconCarousel />
        </Box>
      </Grid>
    </main>
  );
};

export default About;
