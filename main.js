const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

const imageFlexbox = document.querySelector(".image-flexbox");
var buttonCounter = 0;
var activeImageCounter = 0;
const dot = document.querySelectorAll(".dot")

dot[activeImageCounter].classList.add("active-image")

rightBtn.addEventListener("click",()=>{
    buttonCounter = buttonCounter + 1;
    activeImageCounter = activeImageCounter + 1;
    if(buttonCounter == 3 && activeImageCounter == 3){
        buttonCounter = 0;
        activeImageCounter = 0;
    }

    dot[activeImageCounter].classList.add("active-image")
    
    if(buttonCounter == 0){
        dot[2].classList.remove("active-image")
    }else{
        dot[activeImageCounter - 1].classList.remove("active-image")
    }

    
    imageFlexbox.style.transform = `translateX(${-1020 * buttonCounter}px)`
})

leftBtn.addEventListener("click",()=>{
    buttonCounter = buttonCounter - 1;
    activeImageCounter = activeImageCounter - 1;
    if(buttonCounter == -1 && activeImageCounter == -1){
        buttonCounter = 2
        activeImageCounter = 2
    }

    dot[activeImageCounter].classList.add("active-image")

    if(buttonCounter == 2){
        dot[0].classList.remove("active-image")
    }else{
        dot[activeImageCounter + 1].classList.remove("active-image")
    }

    imageFlexbox.style.transform = `translateX(${-1020 * buttonCounter}px)`
})

