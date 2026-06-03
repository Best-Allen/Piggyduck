const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const toast = document.querySelector('.toast');

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 1600);
}

navToggle?.addEventListener('click', () => {
  const open = navLinks?.classList.toggle('open') ?? false;
  navToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-copy]').forEach((control) => {
  control.addEventListener('click', async (event) => {
    event.preventDefault();
    const value = control.getAttribute('data-copy') || '';
    try {
      await navigator.clipboard.writeText(value);
      showToast(`已复制：${value}`);
    } catch (error) {
      showToast(value);
    }
  });
});
