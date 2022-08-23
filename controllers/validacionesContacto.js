export function valida(date){
    const dateType = date.dataset.tipo;
    console.log(dateType);
    console.log(date);

    if (date.validity.valid && (date.value.length <= 120)) {
        date.parentElement.querySelector(".utilities__contact-error").innerHTML = "";
    } else{
        date.parentElement.querySelector(".utilities__contact-error").innerHTML = mostrarMensajeDeError(dateType, date);
    }
}

const errorType = [
    "valueMissing",
    "patternMismatch",
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
}

function mostrarMensajeDeError(dateType, date) {
    let mensaje = "";
    errorType.forEach( (error) =>{
        if (date.validity [error]) {
            mensaje = ErrorMessage[dateType][error];
        }
        console.log(date.value.length)
        if (date.value.length > 120 && dateType == "message") {
            mensaje = ErrorMessage[dateType]["patternMismatch"];
            console.log(mensaje)
        }

    });

    return mensaje;
}