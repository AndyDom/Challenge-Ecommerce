import { productServices } from "../service/product-service.js";

const form = document.querySelector("[data-form]");

const obtenerInformacion = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    /* window.location.href = "/screens/error.html"; */
    console.log("error")
  }

  const name = document.querySelector("[data-name]");
  const image = document.querySelector("[data-image]");
  const price = document.querySelector("[data-price]");
  const category = document.querySelector("[data-category]");
  const description = document.querySelector("[data-description]");

  productServices.detailCliente(id).then((perfil) => {
    name.value = perfil.name;
    image.value = perfil.image;
    price.value = perfil.price;
    category.value = perfil.category;
    description.value = perfil.description;
  });
};

obtenerInformacion();

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
  
    const image = document.querySelector("[data-image]").value;
    const category = document.querySelector('[data-category]').value;
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const description = document.querySelector('[data-description]').value;
    productServices.upgradeProduct(name,image,price,category,description,id).then(() => {
        window.location.href = "../screens/index.html";
        alert("EL PRODUCTO FUE EDITADO CON EXITO");
    });
  });