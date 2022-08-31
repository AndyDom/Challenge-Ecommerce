import { productServices } from "../service/product-service.js";

export function valida(date){
    const dateType = date.dataset.tipo;
    console.log(dateType)

    if (date.validity.valid && (date.value.length <= 120)) {
        date.parentElement.querySelector(".validation-error").innerHTML = "";
    } else{
        date.parentElement.querySelector(".validation-error").innerHTML = mostrarMensajeDeError(dateType, date);
    }
}

const errorType = [
    "valueMissing",
    "patternMismatch",
    "typeMismatch",
]

const ErrorMessage = {
    name: {
        valueMissing: "El campo nombre no puede estar vacío",
        patternMismatch: "Se excedió el número de caracteres, máximo 40.",
    },
    message: {
        valueMissing: "El campo Mensaje no puede estar vacío",
        patternMismatch: "Se excedió el número de caracteres, máximo 120.",
    },
    user: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacío",
        patternMismatch: "Al menos 6 caracteres, maximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    },
    category:{
        valueMissing: "El campo categoria no puede estar vacío",
        patternMismatch: "Se excedió el número de caracteres, máximo 20.",
    },
    nameProduct:{
        valueMissing: "El campo categoria no puede estar vacío",
        patternMismatch: "Se excedió el número de caracteres, máximo 20.",
    },
    price:{
        valueMissing: "El campo categoria no puede estar vacío",
    },
    description:{
        valueMissing: "El campo categoria no puede estar vacío",
        patternMismatch: "Se excedió el número de caracteres, máximo 300.",
    },   
}

function mostrarMensajeDeError(dateType, date) {
    let mensaje = "";
    errorType.forEach( (error) =>{
        if (date.validity [error]) {
            mensaje = ErrorMessage[dateType][error];
        }
        if (date.value.length > 120 && dateType == "message") {
            mensaje = ErrorMessage[dateType]["patternMismatch"];
        }
        if (date.value.length > 300 && dateType == "description") {
            mensaje = ErrorMessage[dateType]["patternMismatch"];
            console.log(date.value.length)
        }

    });

    return mensaje;
}

//VALIDANDO EL USUARIO DEL LOGIN
export function validarLogin(){
    const dataForm = document.querySelector("[data-login]");
    dataForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const admin = document.querySelector("[data-user]").value;
        const pass = document.querySelector("[data-pass]").value;
        console.log(admin +"-"+pass)

        productServices.datas().then((data) => {
            data.forEach(({user, password}) => {
                if (user == admin && password == pass) {
                    window.location.href = "../screens/allProducts.html"
                }
            })
        })
    });
}