let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showItem(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });

    // Ocultar la información al navegar entre ítems
    const infoSections = document.querySelectorAll('.info');
    infoSections.forEach(info => info.style.display = 'none');

    // Mostrar la información correspondiente al título activo
    const activeLink = items[index].querySelector('a');
    const targetId = activeLink.getAttribute('href');
    const targetInfo = document.querySelector(targetId);
    if (targetInfo) {
        targetInfo.style.display = 'block';
    }
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
});

// Mostrar el primer ítem al cargar la página
showItem(currentIndex);

// Mostrar información al hacer clic en un enlace
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        currentIndex = [...items].findIndex(item => item.querySelector('a').getAttribute('href') === targetId);
        showItem(currentIndex);
    });
});
