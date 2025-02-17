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

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define el tema con las fuentes
const theme = createTheme({
  typography: {
    fontFamily: "Schoolbell",
    h1: { fontFamily: "Schoolbell, serif" },
    h2: { fontFamily: "Schoolbell, serif" },
    h3: { fontFamily: "Righteous, cursive" },
    h4: { fontFamily: "Righteous, cursive" },
    h5: { fontFamily: "Righteous, cursive" },
    h6: { fontFamily: "Righteous, cursive" },
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
        </Routes>
      </Router>
    </ThemeProvider>
      
    </>
  )
}

export default App
