// MENÚ HAMBURGUESA
const menuToggle = document.getElementById('menuToggle');
const mainMenu = document.getElementById('mainMenu');

menuToggle.addEventListener('click', () => {
  mainMenu.classList.toggle('active');
});

// CARRUSEL AUTOMÁTICO
const carousel = document.getElementById('carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showItem(index) {
  items.forEach((item, i) => {
    item.classList.remove('active');
    if (i === index) {
      item.classList.add('active');
    }
  });
}

function nextItem() {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
}

function prevItem() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
}

// Botones
nextBtn.addEventListener('click', nextItem);
prevBtn.addEventListener('click', prevItem);

// Carrusel automático cada 5 segundos
setInterval(nextItem, 5000);

// Asegurar que el primer ítem esté activo al cargar
showItem(currentIndex);