function showFooter() {
  const mainContent = document.getElementById('main-content');
  const footer = document.getElementById('footer');
  if (mainContent && footer) {
    mainContent.style.display = 'none';
    footer.style.display = 'block';
  }
}

function showPage(page) {
  const mainContent = document.getElementById('main-content');
  const footer = document.getElementById('footer');
  if (mainContent && footer) {
    if (page === 'main') {
      mainContent.style.display = 'block';
      footer.style.display = 'block';
    } else {
      showFooter();
    }
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('open');
    sidebar.classList.toggle('close');
  }
}

function updateThemeIcon(isDark) {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

function initializeDarkMode() {
  const navbarThemeButton = document.getElementById('theme-switcher');
  const sidebarThemeButton = document.getElementById('theme-switcher-sidebar');
  
  const darkMode = localStorage.getItem('darkMode') === 'enabled';
  updateThemeIcon(darkMode);

  [navbarThemeButton, sidebarThemeButton].forEach(button => {
    if (button) {
      button.addEventListener('click', function() {
        const isDark = localStorage.getItem('darkMode') !== 'enabled';
        updateThemeIcon(isDark);
      });
    }
  });
}

// ---------------------------------------------------------------------------
// New function to load the partials (navbar.html, footer.html)
// once the DOM is ready, maintaining the same functionality
// ---------------------------------------------------------------------------
function loadDynamicPartials() {
  const navbarContainer = document.getElementById('navbar');
  const footerContainer = document.getElementById('footer');

  // Load navbar
  if (navbarContainer) {
    fetch('/navbar.html')
      .then(response => response.text())
      .then(data => {
        navbarContainer.innerHTML = data;
        // Initialize dark mode toggles within the loaded navbar
        initializeDarkMode();
      });
  }

  // Load footer
  if (footerContainer) {
    fetch('/footer.html')
      .then(response => response.text())
      .then(data => {
        footerContainer.innerHTML = data;
      });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const darkMode = localStorage.getItem('darkMode') === 'enabled';
  updateThemeIcon(darkMode);
  loadDynamicPartials();

  // Close sidebar when clicking outside of it
  const sidebar = document.getElementById('sidebar');
  document.addEventListener('click', function (event) {
    if (sidebar?.classList.contains('open') && 
        !sidebar.contains(event.target) && 
        !event.target.closest('.hamburger-menu button')) {
      toggleSidebar();
    }
  });
});