const slideRow = document.querySelector(".revrow");
const slideItems = document.getElementsByClassName("revitem");
const dots = document.getElementsByClassName("dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 1;
var width;

function slideWidth() {
    width = slideItems[0].clientWidth;
}
slideWidth();
window.addEventListener("resize", slideWidth);
slideRow.style.transform = "translateX(" + -width * index + "px)";

// next Slide
nextBtn.addEventListener("click", nextSlide);
function nextSlide() {
    if (index >= slideItems.length - 1) {
        return;
    }
    slideRow.style.transition = "transform 0.4s ease-out";
    index++;
    slideRow.style.transform = "translateX(" + -width * index + "px)";
    indicators();
}

// previous slide
prevBtn.addEventListener("click", prevSlide);
function prevSlide() {
    if (index <= 0) {
        return;
    }
    slideRow.style.transition = "transform 0.4s ease-out";
    index--;
    slideRow.style.transform = "translateX(" + -width * index + "px)";
    indicators();
}
//return to first slide when at the end
slideRow.addEventListener("transitionend", returnFunction);
function returnFunction() {
    if (slideItems[index].id === "firstslideduplicate") {
        slideRow.style.transition = "none";
        index = slideItems.length - index;
        slideRow.style.transform = "translateX(" + -width * index + "px)";
        indicators();
    }
    //return to last slide when at the end
    if (slideItems[index].id === "lastslideduplicate") {
        slideRow.style.transition = "none";
        index = slideItems.length - 2;
        slideRow.style.transform = "translateX(" + -width * index + "px)";
        indicators();
    }
}

//code for dots
function indicators() {
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[index - 1].className += " active";
}

//auto sliding
function autoSlide() {
    deleteInterval = setInterval(timer, 2000);
    function timer() {
        nextSlide();
        indicators();
    }
}
autoSlide();

//stop auto sliding when mouse is over the button
const btns = document.querySelectorAll(".buttons span");
btns[0].addEventListener("mouseover", pause);
btns[1].addEventListener("mouseover", pause);
function pause() {
    clearInterval(deleteInterval);
}

//start auto sliding when mouse is out of button
btns[0].addEventListener("mouseout", autoSlide);
btns[1].addEventListener("mouseout", autoSlide);
