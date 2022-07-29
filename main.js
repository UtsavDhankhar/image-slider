
var currentIndex = 0;

displaySlides(currentIndex)

function setSlides(num){
    displaySlides(currentIndex +=num)
}

function displaySlides(num){

    var x;
    var slides = document.getElementsByClassName("slide");

    if(num<0){
        currentIndex = slides.length-1
    }
    
    else{
        console.log(num)
        currentIndex = (num % slides.length)
        console.log(currentIndex)
    }

    for(x = 0 ; x < slides.length ; x++){
        slides[x].style.display = "none"
    }

    slides[currentIndex].style.display = "flex"

}