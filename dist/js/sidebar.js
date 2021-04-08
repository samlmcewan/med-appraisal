const listItem = document.querySelectorAll('.list-group-item');

listItem.forEach(item => {
  item.addEventListener("mouseover", function(event) {
    item.classList.remove("hoverList-leave");
    item.classList.add("hoverList-go");
    
  });

  item.addEventListener("mouseleave", function(event) {
    item.classList.remove("hoverList-go");
    item.classList.add("hoverList-leave");
  })
  
});
      
      
// listItem.addEventListener("mouseover", function(event) {
//   listItem.classList.remove("hoverHeroLeave");  
//   listItem.classList.add("hoverList-go");
      
//       });

//       listItem.addEventListener("mouseleave", function(event) {
       
//         listItem.classList.remove("hoverList-go");
//         arrowIcon.classList.add("hoverHeroLeave");
//       })