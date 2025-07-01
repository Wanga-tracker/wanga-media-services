document.getElementById('menu-toggle').addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
});

// Animate cards on scroll
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transform = 'translateX(0)';
      entry.target.style.opacity = '1';
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  card.style.transform = 'translateX(-100px)';
  card.style.opacity = '0';
  observer.observe(card);
});

// Expand sub-menu
document.querySelectorAll('#sidebar li').forEach(item => {
  item.addEventListener('click', () => {
    const submenu = item.querySelector('.sub-menu');
    if (submenu) {
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    }
  });
});
