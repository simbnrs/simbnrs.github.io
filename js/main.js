/**
 * Simon Ben Arous — Personal Website
 * Theme toggle & smooth scroll behavior
 */

(function () {
  'use strict';

  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // --- Theme state ---
  function getPreferredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Initialise
  setTheme(getPreferredTheme());

  // --- Toggle handler ---
  themeToggle.addEventListener('click', function () {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // --- Listen for OS-level changes ---
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
})();