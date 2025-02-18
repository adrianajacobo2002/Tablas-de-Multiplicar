import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Confetti from "react-confetti";
import buttonStyles from "../../utils/buttonStyles";
import Button from "@mui/material/Button";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import feliz1 from "../../assets/img/feliz1.gif";
import feliz2 from "../../assets/img/feliz2.gif";
import feliz3 from "../../assets/img/feliz3.gif";
import feliz4 from "../../assets/img/feliz4.gif";
import feliz5 from "../../assets/img/feliz5.gif";

import estudiar1 from "../../assets/img/estudiar1.gif";
import estudiar2 from "../../assets/img/estudiar2.gif";
import estudiar3 from "../../assets/img/estudiar3.gif";
import estudiar4 from "../../assets/img/estudiar4.gif";
import estudiar5 from "../../assets/img/estudiar5.gif";

const Resumen = () => {
  const location = useLocation();
  const { accuracy, total, correctAnswers } = location.state || {};

  // Lista de imágenes
  const happyFaces = [feliz1, feliz2, feliz3, feliz4, feliz5];
  const studyingFaces = [estudiar1, estudiar2, estudiar3, estudiar4, estudiar5];

  // Lista de frases motivacionales
  const motivationPhrases = [
    "¡No te rindas! Cada intento te acerca más a la meta.",
    "Practica un poco más y verás grandes mejoras.",
    "Las matemáticas se aprenden con paciencia y esfuerzo. ¡Sigue así!",
    "Recuerda que el éxito es la suma de pequeños esfuerzos repetidos.",
    "¡Tú puedes! Cada día eres mejor en multiplicaciones."
  ];

  // Seleccionar una imagen y frase aleatoria
  const randomHappyFace = happyFaces[Math.floor(Math.random() * happyFaces.length)];
  const randomStudyingFace = studyingFaces[Math.floor(Math.random() * studyingFaces.length)];
  const randomPhrase = motivationPhrases[Math.floor(Math.random() * motivationPhrases.length)];

  return (
    <Box textAlign="center" mt={5} sx={{alignContent: "center"}}>
      {accuracy >= 75 && <Confetti />}

      {accuracy >= 75 ? (
        <img src={randomHappyFace} alt="Feliz" width="150" />
      ) : (
        <>
          <img src={randomStudyingFace} alt="Estudiando" width="150" />
          <Typography variant="h6" mt={2} color="black">
            {randomPhrase}
          </Typography>
        </>
      )}

      <Typography variant="h2" sx={{ color: "#951abe", fontWeight: "600px", fontSize: "100px" }}>
        {accuracy >= 75 ? "¡Felicidades! 🎉" : "¡Sigue practicando! 📚"}
      </Typography>

      <Typography variant="h5" mt={2}>
        Respuestas correctas: {correctAnswers} de {total}
      </Typography>

      <Typography variant="h5">
        Porcentaje de aciertos: {accuracy.toFixed(2)}%
      </Typography>

      <Button
          variant="contained"
          size="large"
          sx={buttonStyles}
          href="/tablas"
        >
          <ArrowBackRoundedIcon></ArrowBackRoundedIcon>
          Volver al inicio
      </Button>

      
    </Box>
  );
};

export default Resumen;
