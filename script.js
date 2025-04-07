const mobileNav = document.getElementById("mobile-nav");
const navLinks = document.getElementById("nav-links");
function toggoleMenu (){
    mobileNav.classList.toggle("open");
    navLinks.classList.toggle("open");    
}

function mail(){
    window.location.href = "mailto:asmaa.redovisning@gmail.com";
}
function call(){
    window.location.href = "tel:+46707576351";
}
window.onload = function(){ window.location.href ="#navHead";}

document.querySelector(".arrow").addEventListener("click", function() {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#arrowS").addEventListener("click", function() {
    document.getElementById("arrow2").scrollIntoView({ behavior: "smooth" });
});
   
document.querySelector("#arrow3").addEventListener("click", function() {
    document.querySelector(".cardCon").scrollBy( {left: 400, behavior: 'smooth'});
});
document.querySelector("#arrow4").addEventListener("click", function() {
    document.querySelector(".cardCon").scrollBy( {left: -400, behavior: 'smooth'});
});

        const cardGrid = document.querySelector('.cardCon');
        const arrowLeft = document.querySelector('.arrow4');
        const arrowRight = document.querySelector('.arrow3');
      
        cardGrid.addEventListener('scroll',function () {
          // Near the very left
          if (cardGrid.scrollLeft < 80) {
            arrowLeft.style.opacity = '0';
            arrowRight.style.opacity = '1';
          } else if (cardGrid.scrollLeft + cardGrid.clientWidth >= cardGrid.scrollWidth - 80) {
            // Fully scrolled to the right
            arrowLeft.style.opacity = '1';
            arrowRight.style.opacity = '0';
          } else {
            // In the middle, show both arrows (adjust as desired)
            arrowLeft.style.opacity = '1';
            arrowRight.style.opacity = '1';
          }
        });

        
/*
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    if(card.className.includes("flipped")){
        card.querySelector('.card-text>p').style.opacity = 1;
        card.querySelector('.card-image').style.opacity = 0;
        card.querySelector('.card-text>h5').style.opacity = 0;
    }else {  card.querySelector('.card-text>p').style.opacity = 0;
             card.querySelector('.card-image').style.opacity = 1;
             card.querySelector('.card-text>h5').style.opacity = 1;
    }
    });
});
*/