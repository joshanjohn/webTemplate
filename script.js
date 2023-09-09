let menuBtn = document.querySelector("#menu-icon");
let menu = document.querySelector("nav ul");



menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle("open");
})