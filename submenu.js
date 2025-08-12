document.addEventListener('DOMContentLoaded', function() {
  const submenuToggle = document.querySelector('.nav-item-with-submenu > .nav-link');
  const submenu = document.querySelector('.submenu');
  
  if (submenuToggle && submenu) {
    // Handle click/touch events for submenu toggle
    submenuToggle.addEventListener('click', function(e) {
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
        e.preventDefault();
        submenu.classList.toggle('show');
      }
    });
    
    // Close submenu when clicking outside (only on mobile)
    document.addEventListener('click', function(e) {
      const isMobile = window.innerWidth <= 768;
      if (isMobile && !e.target.closest('.nav-item-with-submenu')) {
        submenu.classList.remove('show');
      }
    });
    
    // Close submenu and entire mobile menu when clicking on submenu links
    const submenuLinks = document.querySelectorAll('.submenu-link');
    const navToggle = document.querySelector('.nav-toggle');
    
    submenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        // Close the submenu
        submenu.classList.remove('show');
        
        // Close the entire mobile navigation menu by unchecking the toggle
        if (navToggle) {
          navToggle.checked = false;
        }
      });
    });
    
    // Handle window resize to ensure proper behavior
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        submenu.classList.remove('show');
      }
    });
  }
});
