import TypewriterText from "../../components/Typewriter";
import { Button, Container, Typography } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Index = () => {
  return (
    <div style={{ position: "relative", textAlign: "center", color: "black" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{ color: "#951abe", fontWeight: "600px", fontSize: "100px" }}
        >
          ¡Bienvenido <br /> a <br />
          MathPlay!
        </Typography>

        <Typography variant="h4" sx={{ mb: 2 }}>
          <TypewriterText />
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            mt: 2,
            backgroundColor: "#951abe",
            color: "white",
            fontWeight: "bold",
            textDecoration: "none",
            "&:hover": {
              backgroundColor: "#7d139e", 
              transform: "scale(1.05)",
              transition: "all 0.3s ease-in-out",
              color: "white",
            },
          }}
          href="/tablas"
        >
          <ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>
        </Button>
      </Container>
    </div>
  );
};

export default Index;
