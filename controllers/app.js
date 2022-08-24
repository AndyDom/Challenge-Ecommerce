import { valida, validarLogin } from "./validaciones.js";

const dates = document.querySelectorAll(".validar");

dates.forEach(date => {
    date.addEventListener("blur", (date) => {
        valida(date.target);
    });
});

validarLogin();