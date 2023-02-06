
let close = document.querySelector(".popup-image span")
let popup = document.querySelector(".popup-image")
let popup_image = document.querySelector(".popup-image img")
let img = document.querySelectorAll(".img-container img")

img.forEach(item => {
    item.addEventListener("click", () => {           // click the images
        popup.style.display = "block";               // and see as popup
        popup_image.src = item.getAttribute("src");  // get image src you clicked.
    });
});

close.addEventListener("click", () => {              // when you click " X "
    popup.style.display = "none";                    // popup will close.
});

window.addEventListener('click', (e) => {                               // when you click the window
    if (popup.contains(e.target) && !popup_image.contains(e.target)) {  // if out of popup_image has a click, 
        popup.style.display = "none";                                   // then popup will close 
    }                                                                   // when you click the popup_image,
});                                                                     // it will not close.                                                    
