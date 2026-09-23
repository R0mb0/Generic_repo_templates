(function () {
  var STORAGE_KEY = 'generic_repo_templates_theme';
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  var toggleBtn;

  function systemTheme() {
    return mq.matches ? 'dark' : 'light';
  }

  function storedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (toggleBtn) {
      toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || systemTheme();
    var next = current === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {}
    applyTheme(next);
  }

  document.addEventListener('DOMContentLoaded', function () {
    toggleBtn = document.getElementById('theme-toggle');
    var stored = storedTheme();
    applyTheme(stored || systemTheme());
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }
  });

  mq.addEventListener('change', function () {
    if (!storedTheme()) {
      applyTheme(systemTheme());
    }
  });
})();
