const themeSelect = document.getElementById('theme-select');
const root = document.documentElement;
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
const storedTheme = localStorage.getItem('profile-theme') || 'system';

function applyTheme(theme) {
  if (theme === 'system') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', theme);
  }

  const isDark = theme === 'dark' || (theme === 'system' && systemTheme.matches);
  document.querySelector('meta[name="theme-color"]').setAttribute('content', isDark ? '#171918' : '#ffffff');
}

themeSelect.value = storedTheme;
applyTheme(storedTheme);

themeSelect.addEventListener('change', () => {
  const theme = themeSelect.value;
  localStorage.setItem('profile-theme', theme);
  applyTheme(theme);
});

systemTheme.addEventListener('change', () => {
  if (themeSelect.value === 'system') {
    applyTheme('system');
  }
});

document.getElementById('current-year').textContent = new Date().getFullYear();
