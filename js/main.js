window.onload = function () { 
    let burger = document.querySelector (".burger");
    let nav = document.querySelector(".nav");
    let body = document.querySelector("body");

    burger.addEventListener("click", function(){
        burger.classList.toggle("active")
        nav.classList.toggle("open")
        body.classList.toggle("hidden")
    })
 }