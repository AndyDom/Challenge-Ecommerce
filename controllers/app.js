import { valida } from "./validacionesContacto.js";

const dates = document.querySelectorAll(".validar");

dates.forEach(date => {
    date.addEventListener("blur", (date) => {
        valida(date.target);
    });
});