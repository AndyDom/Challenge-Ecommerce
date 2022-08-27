import { productServices } from "../service/product-service.js";

const newProduct = (name, price, image) => {
    const card = document.createElement("div");
    const container = `
        <img class="articles__card___img" src="${image}" alt="mate de stormtroopers">
        <div class="articles__card___base">
            <div class="articles__card___header">
                <h5 class="articles__card___title">${name}</h5>
                <p class="articles__card___cost">$${price}</p>
                <button class="articles__card___see" id="boton">Ver producto</button>
            </div>
        </div>
    `;
    card.innerHTML = container;
    card.classList.add("articles__card");
    return card;
};


const render = async () => {
    try {
        const listProducts = await productServices.datas();

        listProducts.forEach(element => {
            if (element.id != 1 && element.category == "Star Wars") {
                const product = document.querySelector("[data-starWars]");
                product.appendChild(newProduct(element.name, element.price, element.image));
            }else{
                if (element.id != 1 && element.category == "Consolas") {
                    const product = document.querySelector("[data-consola]");
                    product.appendChild(newProduct(element.name, element.price, element.image));
                }else{
                    if (element.id != 1 && element.category == "Diversos") {
                        const product = document.querySelector("[data-diversos]");
                        product.appendChild(newProduct(element.name, element.price, element.image));
                    }
                }
            }
        });
    }catch(error){
        console.log(error);
    }
}

render();
