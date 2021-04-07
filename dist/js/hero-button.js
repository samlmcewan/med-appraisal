const arrowIcon = document.querySelector('.get-started-icon');
      const heroButton = document.querySelector('.btn-get-started');
      
      heroButton.addEventListener("mouseenter", function(event) {
        
        arrowIcon.classList.add("hoverHero");
      });

      heroButton.addEventListener("mouseleave", function(event) {
       
        arrowIcon.classList.remove("hoverHero");
      })