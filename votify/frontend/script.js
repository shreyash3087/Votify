function showFooter() {
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('footer').style.display = 'block';
}

function showPage(page) {
  if (page === 'main') {
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('footer').style.display = 'block';
  } else {
    // Fallback for other pages
    showFooter();
  }
}
