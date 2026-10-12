import { useState } from "react";
import "./TaTeTi.css";

const combinacionesGanadoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function comprobarGanador(tableroActual) {
  for (const combinacion of combinacionesGanadoras) {
    const [a, b, c] = combinacion;

    if (
      tableroActual[a] &&
      tableroActual[a] === tableroActual[b] &&
      tableroActual[a] === tableroActual[c]
    ) {
      return tableroActual[a];
    }
  }

  if (!tableroActual.includes("")) {
    return "empate";
  }

  return null;
}

function movimientoBot(tableroActual) {
  // Primero intenta ganar
  for (let i = 0; i < 9; i++) {
    if (tableroActual[i] === "") {
      const prueba = [...tableroActual];
      prueba[i] = "O";

      if (comprobarGanador(prueba) === "O") {
        return i;
      }
    }
  }

  // Después intenta bloquear al jugador
  for (let i = 0; i < 9; i++) {
    if (tableroActual[i] === "") {
      const prueba = [...tableroActual];
      prueba[i] = "X";

      if (comprobarGanador(prueba) === "X") {
        return i;
      }
    }
  }

  // Si puede, ocupa el centro
  if (tableroActual[4] === "") {
    return 4;
  }

  // Si no, elige una casilla libre al azar
  const disponibles = tableroActual
    .map((casilla, index) => (casilla === "" ? index : null))
    .filter((index) => index !== null);

  if (disponibles.length === 0) {
    return null;
  }

  return disponibles[Math.floor(Math.random() * disponibles.length)];
}

function TaTeTi() {
  const [tablero, setTablero] = useState(Array(9).fill(""));
  const [turno, setTurno] = useState("X");
  const [ganador, setGanador] = useState(null);
  const [pensando, setPensando] = useState(false);

  function jugarMovimiento(index) {
    if (
      tablero[index] !== "" ||
      ganador ||
      turno !== "X" ||
      pensando
    ) {
      return;
    }

    const nuevoTablero = [...tablero];
    nuevoTablero[index] = "X";

    const resultado = comprobarGanador(nuevoTablero);

    setTablero(nuevoTablero);

    if (resultado) {
      setGanador(resultado);
      return;
    }

    setTurno("O");
    setPensando(true);

    setTimeout(() => {
      const posicionBot = movimientoBot(nuevoTablero);

      const tableroBot = [...nuevoTablero];
      tableroBot[posicionBot] = "O";

      const resultadoBot = comprobarGanador(tableroBot);

      setTablero(tableroBot);

      if (resultadoBot) {
        setGanador(resultadoBot);
      } else {
        setTurno("X");
      }

      setPensando(false);
    }, 600);
  }

  function reiniciarJuego() {
    setTablero(Array(9).fill(""));
    setTurno("X");
    setGanador(null);
    setPensando(false);
  }

  return (
    <div className="ta-te-ti">
      <h2>Ta Te Ti</h2>

      <p className="subtitulo-tateti">
        Vos: ❌ &nbsp;&nbsp; Bot: ⭕
      </p>

      <p className="turno">
        {ganador === "empate"
          ? "¡Empate!"
          : ganador === "X"
          ? "¡Ganaste! 🎉"
          : ganador === "O"
          ? "¡Ganó el clanker!"
          : pensando
          ? "El clanker está pensando..."
          : "Tu turno"}
      </p>

      <div className="tablero-tres">
        {tablero.map((casilla, index) => (
          <button
            key={index}
            className={`casilla ${
              casilla === "X"
                ? "casilla-x"
                : casilla === "O"
                ? "casilla-o"
                : ""
            }`}
            onClick={() => jugarMovimiento(index)}
          >
            {casilla}
          </button>
        ))}
      </div>

      <button className="reiniciar-tres" onClick={reiniciarJuego}>
        Reiniciar juego
      </button>
    </div>
  );
}

export default TaTeTi;