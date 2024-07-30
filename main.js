const hamburguesa = document.querySelector(".bx");
const aside = document.querySelector(".aside");

hamburguesa.addEventListener("click", ()=>{
    aside.classList.toggle("activo");
})