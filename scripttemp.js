/* Image Slider */

let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) { //This allows the slider to loop back to the first slide when it reaches the end.

        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds (3000ms)
}

showSlides();







// JavaScript for sliding testimonial cards in sets of 3 with looping
document.addEventListener("DOMContentLoaded", function () {  //JavaScript code executes after the HTML document has been fully loaded
    const testimonialList = document.querySelectorAll(".Card");
    const numCards = testimonialList.length;
    const cardsPerSet = 3; //This line specifies the number of cards to display in each set 
    let currentIndex = 0;

    // Function to show a set of 3 testimonials starting from the given index
    function showTestimonialSet(startIndex) {  //displaying a set of testimonials starting from the given index.
        testimonialList.forEach((testimonial, i) => {
            if (i >= startIndex && i < startIndex + cardsPerSet) {
                testimonial.style.display = "block";
            } else {
                testimonial.style.display = "none";
            }
        });
    }

    // Function to go to the next set of testimonials
    function nextTestimonialSet() {
        currentIndex = (currentIndex + cardsPerSet) % numCards;
        showTestimonialSet(currentIndex);
    }

    // Automatic sliding interval
    const slideInterval = 5000; // Change this to adjust the interval (in milliseconds)
    let intervalId;

    function startSlideInterval() {
        intervalId = setInterval(nextTestimonialSet, slideInterval); //This function starts the automatic sliding interval. It uses setInterval to repeatedly call nextTestimonialSet at the specified slideInterval.
    }

    function stopSlideInterval() {
        clearInterval(intervalId);
    }

    // Initial display and start automatic sliding
    showTestimonialSet(currentIndex);   //This line initially displays the first set of testimonials.
    startSlideInterval();   

    // Reset the sliding process when all cards have been displayed
    setInterval(() => {
        if (currentIndex === 0) {
            startSlideInterval();
        }
    }, numCards * slideInterval);
});


