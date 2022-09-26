import Box from "@mui/material/Box/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button/Button";

const Footer = () => {
  return (
    <Box
      className="footer-container"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        width={"100vh"}
        py={2}
      >
        <Button
          target="_blank"
          color="inherit"
          href="https://www.instagram.com/nicolaspineyro/"
        >
          <InstagramIcon sx={{ fontSize: 50 }} />
        </Button>
        <Button
          target="_blank"
          color="inherit"
          href={"https://www.linkedin.com/in/nicolaspi%C3%B1eyro"}
        >
          <LinkedInIcon sx={{ fontSize: 50 }} />
        </Button>
        <Button
          href="https://github.com/nicolaspineyro"
          target="_blank"
          color="inherit"
        >
          <GitHubIcon sx={{ fontSize: 50 }} />
        </Button>
      </Box>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <img src={require("src/assets/home/intro2.png")} height={60} />
        <p>Developed With React.js</p>
        <span>
          Copyright {new Date().getFullYear()}
        </span>
      </Box>
    </Box>
  );
};

export default Footer;
