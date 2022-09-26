import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { iconList } from "src/constants";
import Box from "@mui/system/Box";
import Paper from "@mui/material/Paper";

const IconCarousel = () => {
  return (
    <Paper elevation={24}>
      <Slider
        slidesToShow={4}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={1500}
        arrows={false}
        swipe={false}
        pauseOnHover={false}
        className={"carousel-container"}
      >
        {iconList.map(({ name }) => {
          return (
            <Box display={"flex !important"} justifyContent={"center"}>
              <img
                src={require(`src/assets/home/icons/${name}.png`)}
                height="75"
                key={`${name}-icon`}
              />
            </Box>
          );
        })}
      </Slider>
    </Paper>
  );
};

export default IconCarousel;
