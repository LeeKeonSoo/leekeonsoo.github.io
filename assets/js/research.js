(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  if (!button) return;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let hasSavedTheme = false;
  try { hasSavedTheme = ['light', 'dark'].includes(localStorage.getItem('homepage-theme')); } catch {}

  function applyTheme(theme) {
    root.dataset.theme = theme;
    const next = theme === 'dark' ? 'light' : 'dark';
    const label = `Switch to ${next} mode`;
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
    button.querySelector('.theme-label').textContent = next === 'dark' ? 'Dark' : 'Light';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#161b22' : '#ffffff');
  }
  applyTheme(root.dataset.theme || (preference.matches ? 'dark' : 'light'));
  button.hidden = false;
  button.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    hasSavedTheme = true;
    applyTheme(theme);
    try { localStorage.setItem('homepage-theme', theme); } catch {}
  });
  preference.addEventListener('change', event => {
    if (!hasSavedTheme) applyTheme(event.matches ? 'dark' : 'light');
  });
})();
