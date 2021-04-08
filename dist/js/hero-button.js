const arrowIcon = document.querySelector('.get-started-icon');
      const heroButton = document.querySelector('.btn-get-started');
      
      heroButton.addEventListener("mouseover", function(event) {
        arrowIcon.classList.remove("hoverHeroLeave");  
        arrowIcon.classList.add("hoverHero");
      
      });

      heroButton.addEventListener("mouseleave", function(event) {
       
        arrowIcon.classList.remove("hoverHero");
        arrowIcon.classList.add("hoverHeroLeave");
      })