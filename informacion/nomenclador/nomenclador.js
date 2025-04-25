document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el botón
    const button = document.querySelector('button[href="#scrollspyHeading"]');
  
    // Agrega un evento de clic al botón
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  
      // Busca el elemento con el id "scrollspyHeading"
      const target = document.querySelector('h4[id^="scrollspyHeading"]');
  
      if (target) {
        // Desplázate al elemento encontrado
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.error("Elemento con id 'scrollspyHeading' no encontrado.");
      }
    });
  });
  /*agregar imagenes*/
  // Arreglo con las imágenes
  const images = [
    "/imagenescudo/altabiblioteca.jpg",
    "/imagenescudo/114-periodoleg.png",
    "/imagenescudo/biblioantigua.jpg",
    "/imagenescudo/altabiblioteca.jpg"
];

const container = document.getElementById('carousel-items-container');

// Itera sobre el arreglo de imágenes y agrega cada una al carousel
images.forEach((imageSrc, index) => {
    // Crea el elemento carousel-item
    const item = document.createElement('div');
    item.classList.add('carousel-item');
    
    // Si es el primer item, lo marca como activo
    if (index === 0) {
        item.classList.add('active');
    }

    // Crea la imagen
    const img = document.createElement('img');
    img.src = imageSrc;
    img.classList.add('d-block', 'w-100');
    img.alt = `Imagen ${index + 1}`;

    // Agrega la imagen al item
    item.appendChild(img);

    // Agrega el item al contenedor
    container.appendChild(item);
});
