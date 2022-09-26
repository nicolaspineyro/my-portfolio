import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Grid from "@mui/material/Grid/Grid";
import { IconCarousel } from "src/components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-container">
      <Grid container justifyContent={"space-between"}>
        <Grid item lg={5} md={7} xs={12}>
          <Box marginBottom={4}>
            <h3>Hello, World!</h3>
            <h1>My name is Nicolas &#129306;</h1>
            <h3>I’m a Software Developer from Mar del Plata, Argentina.</h3>
            <p>
              I been working with teams from all over the world to help build
              awesome interfaces and experiences for web and mobile using the
              latest trends and technologies in software development.
              <br />
              <br />
              I'm specializing in Frontend Development for the moment but that
              can change anytime soon!
            </p>
            <Link to={"/contact"}>
              <Button variant="contained" color="inherit">
                <p className="button-text"> Lets work together</p>
                <img
                  style={{ marginLeft: 10 }}
                  src={require("src/assets/home/intro-button.png")}
                  height={60}
                />
              </Button>
            </Link>
          </Box>
          <IconCarousel />
        </Grid>
        <Grid
          className={"images-container"}
          display={"flex"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          lg={6}
          md={12}
          item
        >
          <div className="main">
            <div className="circle"></div>
          </div>
          <img
            className="home-image"
            src={require("src/assets/home/intro3.png")}
            height={350}
          />
          <img
            className="home-image"
            src={require("src/assets/home/intro.png")}
            height={300}
          />
          <img
            className="home-image"
            src={require("src/assets/home/intro2.png")}
            height={300}
          />
        </Grid>
      </Grid>
    </main>
  );
};

export default Home;
