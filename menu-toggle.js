document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('navList');

  if (btn) {
    btn.addEventListener('click', () => {
      const isOpen = nav.style.display === "flex";
      nav.style.display = isOpen ? "none" : "flex";
      btn.setAttribute("aria-expanded", !isOpen);
    });
  }
});
