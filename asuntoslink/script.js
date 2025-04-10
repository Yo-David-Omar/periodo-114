function search() {
    var input, filter, results, h2, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    results = document.querySelectorAll("#content h2");
  
    for (i = 0; i < results.length; i++) {
      h2 = results[i];
      txtValue = h2.textContent || h2.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        // Encuentra el primer resultado y navega a él
        window.location.href = "#" + h2.id;
        return; // Detiene la búsqueda después del primer resultado
      }
    }
  
    // Si no se encuentra ningún resultado, muestra un mensaje de alerta
    alert("No se encontraron resultados para la búsqueda: " + input.value);
  }
  
  /*imagenes por segundo para linkasuntos*/

  document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".slider-container img");
    let currentImageIndex = 0;

    function showNextImage() {
        images[currentImageIndex].style.display = "none";
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = "block";
    }

    setInterval(showNextImage, 5000); // Cambia la imagen cada segundo (1000 milisegundos)
});

//------------------------------------------
document.getElementById('searchInput').addEventListener('keyup', function() {
  const query = this.value.toLowerCase();
  const items = document.querySelectorAll('#infoList li');

  items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(query)) {
          item.style.display = 'list-item';
      } else {
          item.style.display = 'none';
      }
  });
});
