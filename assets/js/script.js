$(document).ready(function(){
  var img = new Image;
  console.log("var img = new Image; ");
  console.log(img.src);

  img.src = "pic1.jpg";
  console.log("src :"+$('.bg').css('background-image'));
  console.log("New :"+img.src);
  var bgImgWidth = img.width;
  var bgImgHeight = img.height;

  console.log(bgImgHeight+' '+bgImgWidth);

});
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
