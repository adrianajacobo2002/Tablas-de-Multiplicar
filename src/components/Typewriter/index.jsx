import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypewriterText = () => {
  const [text] = useTypewriter({
    words: ["Aprende a multiplicar", "Diversión mientras aprendes"],
    loop: 0, // 0 = loop infinito
    delaySpeed: 2000, // Tiempo de espera antes de cambiar de palabra
    typeSpeed: 70, // Velocidad de escritura
    deleteSpeed: 50, // Velocidad de borrado
  });

  return (
    <span>
      {text}
      <Cursor cursorStyle="|" />
    </span>
  );
};

export default TypewriterText;
