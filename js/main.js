//  Slider *************************Start****************************

var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//  Slider *************************finish***************************



//  login ***************************start***************************

// Get the popup
var popup = document.getElementById("loginpop");

// When the user clicks anywhere outside of the popup, close it
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

//  login ***************************finish***************************


//  login ***************************start***************************

// Get the popup
var popup1 = document.getElementById("signup-pop");

// When the user clicks anywhere outside of the popup, close it
window.onclick = function (event) {
  if (event.target == popup1) {
    popup1.style.display = "none";
  }
};

//  login ***************************finish***************************