document.addEventListener('DOMContentLoaded', function() {
  // Set active nav link based on current page
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.mantine-nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath === href || 
        (href === '/' && currentPath === '/') || 
        (href !== '/' && currentPath.startsWith(href))) {
      link.classList.add('active');
    }
  });
  
  // Mobile nav toggle functionality
  const navToggle = document.getElementById('nav-toggle');
  const navLinksContainer = document.getElementById('nav-links');
  
  if (navToggle && navLinksContainer) {
    navToggle.addEventListener('click', function() {
      navLinksContainer.classList.toggle('show');
    });
  }
});
