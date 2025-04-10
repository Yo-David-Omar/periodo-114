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
