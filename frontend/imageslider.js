
var slideIndex = 0;
showSlides();
// changeSlide(slideIndex)

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}

function CurrentSlide(n) {
  changeSlide(slideIndex = n);
}

function changeSlide(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


document.getElementById("calc-button").onclick = () =>{
    location.href = "reiknivel/index.html"
  }

document.getElementById("hreyfing-button").onclick = () =>{
    location.href = "hreyfing/index.html"
  }

document.getElementById("mataræði-button").onclick = () =>{
    location.href = "mataræði/index.html"
  }

document.getElementById("greining-button").onclick = () =>{
    location.href = "greining/index.html"
  }

document.getElementById("meðhöndlun-button").onclick = () =>{
    location.href = "meðhöndlun/index.html"
  }

document.getElementById("fræðsla-button").onclick = () =>{
    location.href = "fræðsla/index.html"
  }