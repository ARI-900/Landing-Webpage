let menu = document.getElementById("menu");
let cross = document.getElementById("close");
let nav = document.querySelector("#nav .menu-items");
let layer = document.querySelector("#layer");



menu.addEventListener("click", (dets)=> {
    nav.classList.toggle("active");
    layer.classList.add("overlay");
})

cross.addEventListener("click", (dets) => {
    nav.classList.remove("active");
    layer.classList.remove("overlay");
})