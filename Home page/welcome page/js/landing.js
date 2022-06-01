let menu = document.querySelector(".header .menu");
let hidden = document.querySelector(".header .menu");
let add = document.querySelector(".landing .container");
menu.addEventListener("click", (e) => {
    menu.classList.toggle("open");
}
)
hidden.addEventListener("click", (e) => {
    add.classList.toggle("open");
}
)
document.body.addEventListener("click", (e) => {
    if(!e.target.classList.contains("menu")){
        menu.classList.remove("open");
    }
})
document.body.addEventListener("click", (e) => {
    if(!e.target.classList.contains("menu")){
        hidden.classList.remove("open");
    }
})

