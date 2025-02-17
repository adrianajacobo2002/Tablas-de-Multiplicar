import MultiplicationCard from "../../components/CardTable"; // Ajusta la ruta si es necesario
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";


// Importar imágenes locales
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

// Array con la información de las tablas
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
      alert("Selecciona al menos una tabla para continuar.");
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Selecciona las Tablas</h1>
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
      <Button
        variant="contained"
        color="primary"
        onClick={handleStart}
        style={{ display: "block", margin: "20px auto" }}
      >
        Iniciar Ejercicio
      </Button>
    </div>
  );
};

export default Tablas;
