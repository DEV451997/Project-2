// Slideshow of images

var images = ["/assets/images/ROME.jpg", "/assets/images/MEXICO.jpg", "/assets/images/JORDAN.jpg", "/assets/images/CHINA.jpg", "/assets/images/BRAZIL.jpg", "/assets/images/PERU.jpg", "/assets/images/INDIA.jpg"];
var currentIndex = 0;
var slideshowCard = document.querySelector(".slideshow-card");

function showSlide(index) {
    slideshowCard.style.opacity = 0;
    setTimeout(function () {
        slideshowCard.innerHTML = '<img src="' + images[index] + '" alt="Image ' + (index + 1) + '">';
        slideshowCard.style.opacity = 1;
    }, 500); 
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function startSlideshow() {
    nextSlide();
}

setInterval(startSlideshow, 5000); 

showSlide(currentIndex);

// Clock function

function startTime() {
    const today = new Date();
    const options = {
        timeZone: 'Europe/Rome', // Specify the desired timezone here
        hour12: true, // Set to true for 12-hour format, false for 24-hour format
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    const timeString = today.toLocaleTimeString('en-US', options);

    document.getElementById("clock").innerHTML = timeString;
    setTimeout(startTime, 1000);
}

startTime();