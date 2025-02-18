import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import Button from "@mui/material/Button";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import IconButton from "@mui/material/IconButton";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

import DirectionsModal from "../../components/DirectionsModal";
import MultiplicationCard from "../../components/CardTable";
import buttonStyles from "../../utils/buttonStyles";

import img1 from "../../assets/img/uno.png";
import img2 from "../../assets/img/dos.png";
import img3 from "../../assets/img/tres.png";
import img4 from "../../assets/img/cuatro.png";
import img5 from "../../assets/img/cinco.png";
import img6 from "../../assets/img/seis.png";
import img7 from "../../assets/img/siete.png";
import img8 from "../../assets/img/ocho.png";
import img9 from "../../assets/img/nueve.png";
import img10 from "../../assets/img/diez.png";

const tables = [
  { id: 1, name: "Tabla del 1", image: img1 },
  { id: 2, name: "Tabla del 2", image: img2 },
  { id: 3, name: "Tabla del 3", image: img3 },
  { id: 4, name: "Tabla del 4", image: img4 },
  { id: 5, name: "Tabla del 5", image: img5 },
  { id: 6, name: "Tabla del 6", image: img6 },
  { id: 7, name: "Tabla del 7", image: img7 },
  { id: 8, name: "Tabla del 8", image: img8 },
  { id: 9, name: "Tabla del 9", image: img9 },
  { id: 10, name: "Tabla del 10", image: img10 },
];

const Tablas = () => {
  const [selectedTables, setSelectedTables] = useState([]);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleSelect = (table) => {
    setSelectedTables((prev) =>
      prev.some((t) => t.id === table.id)
        ? prev.filter((t) => t.id !== table.id)
        : [...prev, table]
    );
  };

  const handleStart = () => {
    if (selectedTables.length > 0) {
      navigate("/ejercicio", { state: { selectedTables } });
    } else {
      Swal.fire({
        icon: "error",
        text: "Debes seleccionar al menos una tabla antes de continuar.",
      });
    }
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "80px",
          color: "#951abe",
          fontWeight: "600px",
        }}
      >
        MathPlay
      </h1>
      <p>Donde aprendes jugando</p>
      <div className="d-flex justify-content-center align-items-center pb-5">
        <div className="mx-2">
          <Button size="large" sx={buttonStyles} onClick={() => setShow(true)}>
            Instrucciones
            <RocketLaunchRoundedIcon></RocketLaunchRoundedIcon>
          </Button>
        </div>
        <div className="mx-2">
          <Button
            variant="contained"
            size="large"
            onClick={handleStart}
            sx={buttonStyles}
          >
            Iniciar
            <PlayCircleOutlineRoundedIcon></PlayCircleOutlineRoundedIcon>
          </Button>
        </div>
        <div>
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
          href="/"
        >
          <HomeRoundedIcon/>
        </Button>
        </div>
      </div>

      <Grid container spacing={2} justifyContent="center">
        {tables.map((table) => (
          <Grid item key={table.id}>
            <MultiplicationCard
              image={table.image}
              tableName={table.name}
              selected={selectedTables.some((t) => t.id === table.id)}
              onSelect={() => handleSelect(table)}
            />
          </Grid>
        ))}
      </Grid>

      <DirectionsModal show={show} handleClose={() => setShow(false)}>
        <p>
          ¡Bienvenido! Este juego te ayudará a practicar las tablas de
          multiplicación de una forma divertida e interactiva. Sigue estas
          instrucciones para jugar:
        </p>
        <ol>
          <li>
            Elige las tablas que quieres practicar (del 1 al 10). Puedes
            seleccionar una o varias.
          </li>
          <li>Observa las preguntas que aparecen en pantalla.</li>
          <li>
            Escribe tu respuesta en el espacio indicado y presiona Validar
            Respuesta
          </li>
          <li>
            Recibe una respuesta inmediata:
            <ul>
              <li>
                🎉 Si tu respuesta es correcta, verás un mensaje motivador como
                ¡Excelente! o ¡Buen trabajo!.{" "}
              </li>
              <li>
                ❌ Si te equivocas, el juego te animará a intentarlo de nuevo
                con mensajes como No te rindas o Inténtalo otra vez.{" "}
              </li>
            </ul>
          </li>
          <li>Sigue respondiendo hasta completar todas las preguntas. </li>
        </ol>
        <hr />
        <p>
          <b>Recomendaciones</b>
        </p>
        <ul>
          <li>¡Juega varias veces para mejorar tu rapidez y precisión! </li>
          <li>
            Practica diferentes tablas para convertirte en un experto en
            multiplicaciones.
          </li>
        </ul>
      </DirectionsModal>
    </div>
  );
};

export default Tablas;
