var menuHorizontalRectanglesSmall =document.getElementsByClassName("menu-horizontal-rectangle-small");
var menuHorizontalRectanglesSmallColors = ["#0098D8", "#006FB9","#003D7C","#8B1878","#C51A1B","#EF7D00","#FBBA00"];


for( var i=0; i < menuHorizontalRectanglesSmall.length; i++){
    menuHorizontalRectanglesSmall[i].style.backgroundColor = menuHorizontalRectanglesSmallColors[i];
}



$(document).ready(function(){
    $('.slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 2,
        infinite: false,
        dots:true
    });

});


var cylindres = document.getElementById("cylindres") ;
var selection1 = document.getElementById("cylindres-selection1");

var ebauches = document.getElementById("ebauches");
var selection2 = document.getElementById("cylindres-selection2");

var assa = document.getElementById("assa");
var selection3 = document.getElementById("cylindres-selection3");

var aside = document.getElementById("aside");
var menu = document.getElementById("menu")



cylindres.addEventListener("mouseenter", function () {
    selection1.classList.remove("hidden")
    aside.style.zIndex = 2;
})
  
selection1.addEventListener("mouseenter", function () {
    if(!selection2.classList.contains("hidden")){
        selection2.classList.add("hidden")
    }
    if(!selection3.classList.contains("hidden")){
        selection3.classList.add("hidden")
    }  
})
  
ebauches.addEventListener("mouseenter", function () {
    aside.style.zIndex = 4;
    if(selection2.classList.contains("hidden")){
       selection2.classList.remove("hidden")
    }
})
  
assa.addEventListener("mouseenter", function () {
    aside.style.zIndex = 2;
    if(selection3.classList.contains("hidden")){
       selection3.classList.remove("hidden")
    }else{
       selection3.classList.add("hidden")
    }
})
  
selection3.addEventListener("mouseenter", function () {
    selection3.classList.remove("hidden")
})
  
document.getElementById("aside").addEventListener("mouseleave", function () {
    if(!selection3.classList.contains("hidden")){
        selection3.classList.add("hidden")
    }
    if(!selection2.classList.contains("hidden")){
        selection2.classList.add("hidden")
    }
    if(!selection1.classList.contains("hidden")){
        selection1.classList.add("hidden")
    }
})


  

      