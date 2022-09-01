import { productServices } from "../service/product-service.js";

const newProduct = (name, price, image, id) => {
    const card = document.createElement("div");
    const container = `
        <img class="articles__card___img" src="${image}">
        <div class="articles__card___base">
            <div class="articles__card___header">
                <h5 class="articles__card___title">${name}</h5>
                <p class="articles__card___cost">$${price}</p>
                <button class="articles__card___see" id="boton">#111111</button>
                <a href="../screens/editProduct.html?id=${id}"><button class="articles__card___imgEdit" id="boton"><img class="edit" src="../assets/img/VectorEdit2.png" alt="editar"></button></a>
                <button class="articles__card___imgBin" type="button" id="boton" name="${id}" data-deleteProduct><img class="bin" src="../assets/img/VectorBin2.png" alt="desechar"></button>
            </div>
        </div>
    `;
    card.innerHTML = container;
    card.classList.add("articles__card");

    const btnDelete = card.querySelector(".articles__card___imgBin");
    btnDelete.addEventListener("click", () => {
        const id = btnDelete.name;
        productServices.deleteProduct(id).then((respuesta) => {
            console.log(respuesta);
          })
          .catch((err) => alert("Ocurrió un error"));
    });

    return card;
};


const render = async () => {
    try {
        const listProducts = await productServices.datas();

        listProducts.forEach(element => {
            if (element.id != 1) {
                const product = document.querySelector("[data-allProducts]");
                product.appendChild(newProduct(element.name, element.price, element.image,element.id));   
            }
        });
    }catch(error){
        console.log(error);
    }
}

render();

