import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  //Navigate
}from "react-router-dom";
import Landing from "./pages/Landing";
import Tablas from "./pages/Tablas"
import Ejercicio from './pages/Ejercicios';
import Resumen from './pages/Resumen';

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define el tema con las fuentes
const theme = createTheme({
  typography: {
    fontFamily: "Gamja Flower, serif",
    h1: { fontFamily: "Rubik Puddles, serif" },
    h2: { fontFamily: "Rubik Puddles, serif" },
    
  },
  palette: {
    background: {
      
    },
    text: {
    },
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tablas" element={<Tablas />} />
          <Route path="/ejercicio" element={<Ejercicio />} />
          <Route path="/resumen" element={<Resumen />} />

        </Routes>
      </Router>
    </ThemeProvider>
      
    </>
  )
}

export default App
