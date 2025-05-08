document.addEventListener('DOMContentLoaded', function() {
  // Set up Intersection Observer for scroll animations
  const dashboardSections = document.querySelectorAll('.dashboard-section');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Once the animation is triggered, we can stop observing this element
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Start observing each dashboard section
  dashboardSections.forEach(section => {
    observer.observe(section);
  });
  
  // Initialize Tableau dashboards
  initTableauViz();
});

function initTableauViz() {
  // For each tableau placeholder, initialize the viz
  const tableauPlaceholders = document.querySelectorAll('.tableauPlaceholder');
  
  tableauPlaceholders.forEach(function(placeholder) {
    const divElement = placeholder;
    const vizElement = divElement.getElementsByTagName('object')[0];
    
    if (divElement.offsetWidth > 800) {
      vizElement.style.width = '100%';
      vizElement.style.height = '700px';
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = '100%';
      vizElement.style.height = '700px';
    } else {
      vizElement.style.width = '100%';
      vizElement.style.height = '900px';
    }
  });
}
