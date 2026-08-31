const tablero = document.getElementById('tablero');
const movimientosTexto = document.getElementById('movimientos');
const reiniciarBoton = document.getElementById('reiniciar');
const mensaje = document.getElementById('mensaje');

const imagenes = [
  'Recursos/CartasRecursos/Carta1.png',
  'Recursos/CartasRecursos/Carta2.png',
  'Recursos/CartasRecursos/Carta3.png',
  'Recursos/CartasRecursos/Carta4.png',
  'Recursos/CartasRecursos/Carta5.png',
  'Recursos/CartasRecursos/Carta6.png',
  'Recursos/CartasRecursos/Carta7.png',
  'Recursos/CartasRecursos/Carta8.png',
];

let cartas = [...imagenes, ...imagenes];

function mezclar(array) {
  return array.sort(() => Math.random() - 0.5);
}

cartas = mezclar(cartas);

function crearTablero() {
  tablero.innerHTML = '';
  cartas.forEach((imagen, index) => {
    const carta = document.createElement('div');
    carta.classList.add('carta');
    carta.dataset.index = index;

    carta.innerHTML = `
      <div class="carta-interior">
        <div class="cara frente">
          <img src="${imagen}" alt="Carta">
        </div>
        <div class="cara reverso"></div>
      </div>
    `;

    carta.addEventListener('click', () => voltearCarta(carta, index));
    tablero.appendChild(carta);
  });
}


let primeraCarta = null;
let segundaCarta = null;
let bloqueo = false;

let movimientos = 0;
let aciertos = 0;

function voltearCarta(carta, index) {
  if (bloqueo) return;
  if (carta === primeraCarta) return;
  
  carta.classList.add('volteada');

  if (!primeraCarta) {
    primeraCarta = carta;
    primeraCarta.dataset.imagen = cartas[index];
    return;
  }

  segundaCarta = carta;
  segundaCarta.dataset.imagen = cartas[index];

  movimientos++;
  movimientosTexto.textContent = movimientos;

  comprobarPareja();
}

function comprobarPareja() {
  const coinciden = primeraCarta.dataset.imagen === segundaCarta.dataset.imagen;

  if (coinciden) {
    aciertos++;
    
    if (aciertos === imagenes.length) {
      mensaje.textContent = `¡FELICIDADES! Has completado el juego en ${movimientos} movimientos.`;
    }
    
    primeraCarta = null;
    segundaCarta = null;
  } else {
    bloqueo = true;
    setTimeout(() => {
      primeraCarta.classList.remove('volteada');
      segundaCarta.classList.remove('volteada');
      primeraCarta = null;
      segundaCarta = null;
      bloqueo = false;
    }, 1000);
  }
}

function reiniciarJuego() {
  cartas = mezclar([...imagenes, ...imagenes]);
  primeraCarta = null;
  segundaCarta = null;
  bloqueo = false;
  movimientos = 0;
  aciertos = 0;
  movimientosTexto.textContent = movimientos;
  mensaje.textContent = '';
  crearTablero();
}

reiniciarBoton.addEventListener('click', reiniciarJuego);

crearTablero();