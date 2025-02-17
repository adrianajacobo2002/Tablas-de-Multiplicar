import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
      });
    }
  });
  return shuffleArray(exercises);
};

const Ejercicio = () => {
  const location = useLocation();
  const selectedTables = location.state?.selectedTables || [];
  const [exercises, setExercises] = useState(generateMultiplicationExercises(selectedTables));

  const handleChange = (index, value) => {
    const newExercises = [...exercises];
    newExercises[index].answer = value;
    setExercises(newExercises);
  };

  const handleSubmit = () => {
    let correct = 0;
    exercises.forEach((exercise) => {
      if (parseInt(exercise.answer) === exercise.result) {
        correct++;
      }
    });
    alert(`Respuestas correctas: ${correct} de ${exercises.length}`);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Ejercicio de Tablas</h1>
      <Grid container spacing={2} justifyContent="center">
        {exercises.map((exercise, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card variant="outlined" sx={{ padding: 2, textAlign: "center" }}>
              <CardContent>
                <Typography variant="h5">
                  {exercise.table} × {exercise.multiplier} =
                </Typography>
                <TextField
                  type="number"
                  variant="outlined"
                  value={exercise.answer}
                  onChange={(e) => handleChange(index, e.target.value)}
                  sx={{ marginTop: 1 }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="success"
        onClick={handleSubmit}
        style={{ display: "block", margin: "20px auto" }}
      >
        Enviar Respuestas
      </Button>
    </div>
  );
};

export default Ejercicio;
