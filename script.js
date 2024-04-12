var slideIndex = 0;

showSlides();


function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    console.log("slides = ", slides);
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex >= slides.length) {slideIndex = 0}   
    slides[slideIndex].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}


let slideProfileIndex = 1;
showSlidesProfile(slideProfileIndex);

function plusSlides(n) {
  showSlidesProfile(slideProfileIndex += n);
}

function currentSlide(n) {
  showSlidesProfile(slideProfileIndex = n);
}

function showSlidesProfile(n) {
  let i;
  let slides = document.getElementsByClassName("myProfile");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideProfileIndex = 1}
  if (n < 1) {slideProfileIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideProfileIndex-1].style.display = "block";
  dots[slideProfileIndex-1].className += " active";
  captionText.innerHTML = dots[slideProfileIndex-1].alt;
}