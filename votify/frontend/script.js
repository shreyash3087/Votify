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

function applyDarkMode(isDark) {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

function syncDarkModeToggles(isDark) {
  const toggleDarkMode = document.getElementById('toggle-dark-mode');
  const toggleDarkModeSidebar = document.getElementById('toggle-dark-mode-sidebar');

  if (toggleDarkMode) toggleDarkMode.checked = isDark;
  if (toggleDarkModeSidebar) toggleDarkModeSidebar.checked = isDark;
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleDarkMode = document.getElementById('toggle-dark-mode');
  const toggleDarkModeSidebar = document.getElementById('toggle-dark-mode-sidebar');
  const sidebar = document.getElementById('sidebar');

  // Load dark mode preference from local storage
  const darkMode = localStorage.getItem('darkMode') === 'enabled';
  applyDarkMode(darkMode);
  syncDarkModeToggles(darkMode);

  // Add event listeners for dark mode toggles
  if (toggleDarkMode) {
    toggleDarkMode.addEventListener('change', function () {
      applyDarkMode(this.checked);
      syncDarkModeToggles(this.checked);
    });
  }

  if (toggleDarkModeSidebar) {
    toggleDarkModeSidebar.addEventListener('change', function () {
      applyDarkMode(this.checked);
      syncDarkModeToggles(this.checked);
    });
  }

  // Close sidebar when clicking outside of it
  document.addEventListener('click', function (event) {
    if (
      sidebar &&
      sidebar.classList.contains('open') &&
      !sidebar.contains(event.target) &&
      !event.target.closest('.hamburger-menu button')
    ) {
      toggleSidebar();
    }
  });
});
