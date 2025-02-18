import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // ⬅️ Importar useNavigate
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import buttonStyles from "../../utils/buttonStyles";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

const correctMessages = [
  "¡Muy bien!",
  "¡Excelente!",
  "¡Buen trabajo!",
  "Keep up the good work!",
];
const incorrectMessages = [
  "No, inténtelo de nuevo",
  "Error, una vez más.",
  "Don't give up!",
  "No. Keep trying",
];

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const generateMultiplicationExercises = (selectedTables) => {
  let exercises = [];
  selectedTables.forEach((table) => {
    for (let i = 1; i <= 10; i++) {
      exercises.push({
        table: table.id,
        multiplier: i,
        result: table.id * i,
        answer: "",
        feedback: "",
        isDisabled: true,
        isCorrect: false,
      });
    }
  });

  exercises = shuffleArray(exercises);
  if (exercises.length > 0) exercises[0].isDisabled = false;
  return exercises;
};

const Ejercicio = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleFinish = () => {
    const total = exercises.length;
    const correctAnswers = exercises.filter(
      (exercise) => parseInt(exercise.answer) === exercise.result
    ).length;

    const accuracy = (correctAnswers / total) * 100;

    navigate("/resumen", { state: { accuracy, total, correctAnswers } });
  };
  const selectedTables = location.state?.selectedTables || [];
  const [exercises, setExercises] = useState(
    generateMultiplicationExercises(selectedTables)
  );

  const handleValidate = (index) => {
    const newExercises = [...exercises];
    const exercise = newExercises[index];

    if (exercise.answer.trim() === "") return;

    const isCorrect = parseInt(exercise.answer) === exercise.result;
    exercise.feedback = isCorrect
      ? correctMessages[Math.floor(Math.random() * correctMessages.length)]
      : incorrectMessages[Math.floor(Math.random() * incorrectMessages.length)];

    exercise.isDisabled = true;
    exercise.isCorrect = isCorrect;

    if (index + 1 < newExercises.length) {
      newExercises[index + 1].isDisabled = false;
    }

    setExercises(newExercises);
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="pe-3">
          <IconButton size="large" aria-label="back" sx={{ color: "#951abe" }} href="/tablas">
            <ArrowBackIosNewRoundedIcon />
          </IconButton>
        </div>
        <div>
          <h1
            style={{
              textAlign: "center",
              fontSize: "80px",
              color: "#951abe",
              fontWeight: "600px",
            }}
          >
            Ejercicio de Tablas
          </h1>
        </div>
      </div>

      <Grid container spacing={2} justifyContent="center">
        {exercises.map((exercise, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              variant="outlined"
              sx={{
                padding: 2,
                textAlign: "center",
                height: "300px",
                alignContent: "center",
              }}
            >
              <CardContent>
                <Typography variant="h5">
                  {exercise.table} × {exercise.multiplier} =
                </Typography>
                <TextField
                  type="number"
                  variant="outlined"
                  value={exercise.answer}
                  onChange={(e) => {
                    const value = e.target.value;

                    if (!exercise.isDisabled && Number(value) >= 0) {
                      const newExercises = [...exercises];
                      newExercises[index].answer = value;
                      setExercises(newExercises);
                    }
                  }}
                  disabled={exercise.isDisabled}
                  sx={{ marginTop: 1 }}
                  inputProps={{ min: 0 }}
                />
                <Button
                  variant="contained"
                  onClick={() => handleValidate(index)}
                  disabled={exercise.isDisabled}
                  size="large"
                  sx={buttonStyles}
                >
                  Validar Respuesta
                </Button>
                {exercise.feedback && (
                  <Box
                    mt={2}
                    p={1}
                    bgcolor={
                      parseInt(exercise.answer) === exercise.result
                        ? "green"
                        : "red"
                    }
                    color="white"
                  >
                    {exercise.feedback}
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        onClick={handleFinish}
        disabled={exercises.some((exercise) => exercise.answer.trim() === "")}
        size="large"
        sx={buttonStyles}
      >
        Finalizar Ejercicio
      </Button>
    </div>
  );
};

export default Ejercicio;
