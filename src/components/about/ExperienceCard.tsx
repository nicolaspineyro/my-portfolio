import Button from "@mui/material/Button/Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/system/Box/Box";
import { useState } from "react";
import { iconList } from "src/constants";
import { ExperienceObject } from "src/constants/interfaces";
import IconCarousel from "../IconCarousel";

const ExperienceCard = (experienceData: ExperienceObject) => {
  const { icon, company, position, date, stack } = experienceData;
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Box className={"card-container"} m={5} p={5}>
      <img className={"logo"} src={icon} />
      <Box textAlign={"center"}>
        <h2>{company}</h2>
        <span>{date}</span>
        <p>{position}</p>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
          officia doloribus, facilis adipisci tempore repellendus, sint nulla
          ipsum animi a eveniet, magni nam maxime repellat sunt consequatur
          quidem amet laboriosam.
        </span>
        <h5>Stack</h5>
        Icon Carousel...
      </Box>
    </Box>
  );
};

export default ExperienceCard;
