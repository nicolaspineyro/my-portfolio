import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import { Link } from "react-router-dom";
import { RoutesArray } from "src/constants";
import { RouteObject } from "src/constants/interfaces";

const Header = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      marginY={2}
      marginX={10}
    >
      <img src={require("src/assets/home/intro2.png")} height={100} />
      <Box display={"flex"} justifyContent={"space-around"}>
        {RoutesArray.map(({ name, path }: RouteObject) => (
          <Box mx={5}>
            <Link to={path} key={`page-${name}`}>
              {name}
            </Link>
          </Box>
        ))}
        <Button
          href={require("src/assets/header/nicolas-pineyro-resume.pdf")}
          download="Nicolas Piñeyro Resume"
          variant="contained"
          size="small"
          color="success"
        >
          Download Resume
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
