document.addEventListener("DOMContentLoaded", () => {
  // Sidebar toggle
  const menuBtn = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });

  // Simulate loading
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 1500);

  // Animate cards on scroll
  const cards = document.querySelectorAll(".card");

  const animateOnScroll = () => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add("show-card");
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll();
});
