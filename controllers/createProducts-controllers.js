import { productServices } from "../service/product-service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const image = document.querySelector("[data-image]").value;
    const category = document.querySelector('[data-category]').value;
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const description = document.querySelector('[data-description]').value;

    productServices.createProduct(name,image,price,category,description).then(respuesta => {
        window.location.href = "../screens/index.html";
        alert("EL PRODUCTO FUE CREADO CON EXITO");

        console.log(respuesta)
    }).catch(err =>{
        console.log(err)
    })

})