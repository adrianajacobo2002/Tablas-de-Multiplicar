import TypewriterText from "../../components/Typewriter";
import { Button, Container, Typography } from "@mui/material";

const Index = () => {
  return (
    <div style={{ position: "relative", textAlign: "center", color: "black" }}>
      {/* Fondo de partículas */}

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2">
          ¡Bienvenido a MathPlay!
        </Typography>

        <Typography variant="h4" sx={{ mb: 2 }}>
          <TypewriterText />
        </Typography>

        <Button variant="contained" color="primary" sx={{ mt: 2 }} href="/about">
          ¡Empecemos!
        </Button>
      </Container>
    </div>
  );
};

export default Index;
