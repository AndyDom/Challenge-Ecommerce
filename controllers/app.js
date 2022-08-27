import { valida } from "./validaciones.js";

const dates = document.querySelectorAll(".validar");

dates.forEach(date => {
    date.addEventListener("blur", (date) => {
        console.log(date.target)
        valida(date.target);
    });
});