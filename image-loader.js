// Image loading animation handler
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  
  images.forEach(function(img) {
    // If image is already loaded (cached), trigger animation immediately
    if (img.complete && img.naturalHeight !== 0) {
      img.classList.add('loaded');
    } else {
      // Add load event listener for images that haven't loaded yet
      img.addEventListener('load', function() {
        this.classList.add('loaded');
      });
      
      // Handle error case - still show the image area but without animation
      img.addEventListener('error', function() {
        this.classList.add('loaded');
      });
    }
  });
});
