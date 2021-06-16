var menuHorizontalRectanglesSmall =document.getElementsByClassName("menu-horizontal-rectangle-small");
var menuHorizontalRectanglesSmallColors = ["#0098D8", "#006FB9","#003D7C","#8B1878","#C51A1B","#EF7D00","#FBBA00"];

for( var i=0; i < menuHorizontalRectanglesSmall.length; i++){
    menuHorizontalRectanglesSmall[i].style.backgroundColor = menuHorizontalRectanglesSmallColors[i]
}


  $(document).ready(function(){
    $('.slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 2,
        infinite: false,
        dots:true
    //   setting-name: setting-value
    });
  });
      