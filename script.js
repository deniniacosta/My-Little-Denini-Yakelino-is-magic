const frases = {
  Deni: [
    "Denini: Lo haré malditos.",
    "Denini: Es una gran palabra.",
    "Denini: Impecable.",
    "Denini: 254.",
    "Denini: Si si siii.",
    "Denini: No, no, nooo.",
    "Denini: Ese es el nombre de mi banda de rock.",
    "Todos: Nos da igual."
  ],

  Saminini: [
    "Saminini: esto no me mola.",
    "Saminini: por qué son todos de mexico y menores.",
    "Saminini: ¿tienes algun defecto?",
    "Saminini: MI MÁS PRECIADO SALTAMONTE.",
    "Saminini: aaaaw, pequeño drogadicto."
  ],
  Indiana: [
    "Indiana: Añojaseo",
    "Indiana: Clip Forzado",
    "Indiana: Un perro lo persiguio a mi compañero.",
    "Indiana: Pense que te contesté.",
    "Indiana: Manda a Patitas a kilos mortales."
  ],

 Azul: [
    "Azul: Gracias",
    "Azul: SIX SEVEEEN",
    "Azul: Bebe te quito el admin.",
    "Azul: Oye que te pasa.",
    "Azul: Denini esto es fuego.",
    "Todos: Nos da igual."
  ],
  Flan: [
    "Flan: Lo mejor que me han dicho",
    "Flan: Es kin",
    "Flan: Si ok",
    "Flan: Eso sería erickcidio",
    "Todos: Nos da igual."
  ],
  Eri: [
    "Eri: Cállate Azul",
    "Eri: Te odio Azul",
    "Eri: Pq yo soy normal Azul, a diferencia de ti.",
    "Eri: Denini tienes un vocabulario agraciado en diversidad",
    "Eri: Son I'm crine",
    "Todos: Nos da igual."
  ],
  Patitas: [
    "Patitas: *Maullido de angustia* 🐱",
    "Patitas: *Maullido de hambre* 🐱",
    "Patitas: *Maullido de ira* 🐱"
  ]
};

function mostrarFrase(nombre) {
  const frasesAmigo = frases[nombre];
  const frase = frasesAmigo[Math.floor(Math.random() * frasesAmigo.length)];
  alert(frase);
}


document.querySelectorAll('.img-galeria,.img-stickers').forEach(img => {
  img.addEventListener('click', (e) => {
    e.stopPropagation();
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

function cerrarLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

let indiceActual = 0;
const track = document.getElementById('trackArte');
const slides = document.querySelectorAll('.carrusel-slide');
const totalSlides = slides.length;

function moverCarrusel(direccion) {
  indiceActual += direccion;
  
  if (indiceActual < 0) {
    indiceActual = totalSlides - 1;
  } else if (indiceActual >= totalSlides) {
    indiceActual = 0;
  }
  
  const desplazamiento = -indiceActual * 100;
  track.style.transform = `translateX(${desplazamiento}%)`;
}
const etiquetas = [
  { nombre: "Denini", img: "Recursos/DeniRecursos/Deni!.jpeg", desc: "Denini" },
  { nombre: "Denini", img: "Recursos/DeniRecursos/Deni!2.jpg", desc: "Denini by Flan" },
  { nombre: "Saminini", img: "Recursos/SamininiRecursos/Saminini!.jpg", desc: "Saminini" },
  { nombre: "Saminini", img: "Recursos/SamininiRecursos/SamininiYDenini.jpg", desc: "Saminini y Denini" },
  { nombre: "Canesita", img: "Recursos/SamininiRecursos/CanesitaSticker.png", desc: "Canesita!!" },
  { nombre: "Saminini", img: "Recursos/SamininiRecursos/SamininiYDeniniSticker.png", desc: "Sami y Deni!!" },
  { nombre: "Indi", img: "Recursos/IndiRecursos/Indi!.jpg", desc: "Indi" },
  { nombre: "Indi", img: "Recursos/IndiRecursos/IndiSticker.png", desc: "Indi uwu" },
  { nombre: "Indi", img: "Recursos/IndiRecursos/DeniYIndiSticker.png", desc: "Indi y Denini" },
  { nombre: "Kira", img: "Recursos/IndiRecursos/KiraSticker.png", desc: "Kira" },
  { nombre: "Azul", img: "Recursos/AzulRecursos/Azul!.jpg", desc: "Azul" },
  { nombre: "Azul", img: "Recursos/AzulRecursos/Azul!2.jpg", desc: "Vox Griffin" },
  { nombre: "Azul 67", img: "Recursos/AzulRecursos/AzulSticker.png", desc: "Azul six seven" },
  { nombre: "Azul", img: "Recursos/AzulRecursos/DeniYAzulSticker.png", desc: "Deni y Azul" },
  { nombre: "ChispasyBufanda", img: "Recursos/AzulRecursos/ChispasYBufandaSticker.png", desc: "Chispas y Bufanda" },
  { nombre: "Eri", img: "Recursos/EriRecursos/Eri!.jpeg", desc: "Eri" },
  { nombre: "Eri", img: "Recursos/EriRecursos/DeniYEriSticker.png", desc: "Eri y Denini" },
  { nombre: "Flan", img: "Recursos/FlanRecursos/Flan!.jpeg", desc: "Flan" },
  { nombre: "Flan", img: "Recursos/FlanRecursos/Flan!2.jpg", desc: "Flan queer" },
  { nombre: "Flan", img: "Recursos/FlanRecursos/DeniYFlanSticker.png", desc: "Flan y Denini" },
  { nombre: "SamYSpock", img: "Recursos/FlanRecursos/SamYSpockSticker.png", desc: "Sam y Spock" },
  { nombre: "Patitas", img: "Recursos/Patitas!.jpeg", desc: "Patitas" },
  { nombre: "Patitas", img: "Recursos/DeniRecursos/PatitasSticker.png", desc: "Patitas aww" },
];

function agregarTooltips() {
  etiquetas.forEach(etiqueta => {
    const selector = `img[src="${etiqueta.img}"]`;
    const imgElement = document.querySelector(selector);
    
    if (imgElement) {
      const wrapper = document.createElement('div');
      wrapper.className = 'tooltip-wrapper';
      
      const tooltipText = document.createElement('span');
      tooltipText.className = 'tooltip-text';
      tooltipText.textContent = etiqueta.desc;
      
      if (imgElement.parentNode) {
        imgElement.parentNode.insertBefore(wrapper, imgElement);
        wrapper.appendChild(imgElement);
        wrapper.appendChild(tooltipText);
      }
    } else {
      console.warn(`No se encontró la imagen: ${etiqueta.img}`);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', agregarTooltips);
} else {
  agregarTooltips();
}

