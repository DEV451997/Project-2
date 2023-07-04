var images = ["/assets/images/ROME.jpg", "/assets/images/MEXICO.jpg", "/assets/images/JORDAN.jpg", "/assets/images/CHINA.jpg", "/assets/images/BRAZIL.jpg", "/assets/images/PERU.jpg", "/assets/images/INDIA.jpg"];
var currentIndex = 0;
var slideshowCard = document.querySelector(".slideshow-card");

function showSlide(index) {
    slideshowCard.style.opacity = 0;
    setTimeout(function () {
        slideshowCard.innerHTML = '<img src="' + images[index] + '" alt="Image ' + (index + 1) + '">';
        slideshowCard.style.opacity = 1;
    }, 500); // Transition duration
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function startSlideshow() {
    nextSlide();
}

setInterval(startSlideshow, 5000); // Transition every 3 seconds

showSlide(currentIndex);
