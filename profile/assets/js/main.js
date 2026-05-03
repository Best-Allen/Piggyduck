const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const toast = document.querySelector('.toast');

navToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 1500);
}

document.querySelectorAll('[data-copy]').forEach((link) => {
  link.addEventListener('click', async (event) => {
    event.preventDefault();
    const value = link.getAttribute('data-copy') || '';
    try {
      await navigator.clipboard.writeText(value);
      showToast(`已复制：${value}`);
    } catch (error) {
      showToast(value);
    }
  });
});
