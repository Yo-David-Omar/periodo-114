// script.js
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    var query = document.getElementById('searchInput').value.toLowerCase();
    var sections = document.querySelectorAll('section');

    // Recorre todas las secciones para encontrar una que coincida
    var found = false;
    sections.forEach(function(section) {
        if (section.id === query) {
            section.scrollIntoView({ behavior: 'smooth' });
            found = true;
        }
    });

    if (!found) {
        alert('No se encontró ninguna sección con ese nombre. Escribe exactamente asuntos-2/asuntos-3...');
    }
});

document.getElementById('searchInput').addEventListener('keyup', function() {
  const query = this.value.toLowerCase();
  const items = document.querySelectorAll('#infoList li');
  const sections = document.querySelectorAll('section'); // Selecciona todas las secciones

  // Filtrar elementos de la lista
  items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(query)) {
          item.style.display = 'list-item';
      } else {
          item.style.display = 'none';
      }
  });

  // Navegar a la primera sección que coincida
  sections.forEach(section => {
      const id = section.id.toLowerCase();
      if (id.includes(query)) {
          section.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
          return; // Detiene la búsqueda después de encontrar la primera coincidencia
      }
  });
});
