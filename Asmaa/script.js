const mobileNav = document.getElementById("mobile-nav");
const navLinks = document.getElementById("nav-links");
function toggoleMenu (){
    mobileNav.classList.toggle("open");
    navLinks.classList.toggle("open");    
}

function mail(){
    window.location.href = "mailto:ibrahim.jumah0905@gmail.com";
}
function call(){
    window.location.href = "tel:+46707576351";
}
window.onload = function(){ window.location.href ="#navHead";}

document.querySelector(".arrow").addEventListener("click", function() {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".arrow2").addEventListener("click", function() {
    document.getElementById("arrow2").scrollIntoView({ behavior: "smooth" });
});
