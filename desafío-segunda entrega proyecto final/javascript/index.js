/* Creación de objetos en el DOM */
let div = document.getElementById("cont");
div.classlist = "container text-center";
for (const product of arrayProducts) {
    let card = document.createElement("div")
    card.classList = "card bg-dark"
    card.innerHTML = `<div class="col">
                            <a href="" target="_blank"><img src="../image/${product.img}" class="card-img-top"></a>
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item bg-dark">FLOAT: ${product.float}</li>
                                <li class="list-group-item bg-dark">ESTADO: ${product.status} </li>
                                <li class="list-group-item bg-dark">PRECIO: ${product.price} </li>
                                <li class="list-group-item bg-dark"><button id="button${product.id}" type="button" class="btn btn-dark btn-comprar">Agregar al Carrito</li>
                            </ul>
                        </div>`
    div.appendChild(card)

    let buttonCard = document.getElementById(`button${product.id}`);
    buttonCard.addEventListener("click", () => {
        addToCart(product.id);
    })
}

/* BUTTON DISCOUNT */
let contador = 0

let btnDiscount = document.createElement("button");
btnDiscount.classList = "btn-index btn btn-dark";
btnDiscount.innerHTML = "Click for a Discount";

let containerDiscount = document.getElementById("sectionButton");

containerDiscount.appendChild(btnDiscount)

const addDiscount = (btn) => {
    let divDiscount = document.createElement("div")
    divDiscount.classList = "container-fluid"
    containerDiscount.append(divDiscount)

    let h3 = document.createElement("h3")
    h3.innerHTML = `Código 1 : ${dsc1} //
                    Código 2 : ${dsc2}`
    h3.classList = "main__minititle"
    divDiscount.appendChild(h3)

    btn.disabled = true;
    btn.disabled && (btn.innerHTML = "There you go!");
}

btnDiscount.addEventListener("click", () => {
    contador++
    contador === 3 ? addDiscount(btnDiscount) : btnDiscount.innerHTML = "Click Again!";
})




/* BUTTONS */
/* CLEAR BUTTON (CART) */
let clearBtn = document.getElementById("clear-cart")

clearBtn.addEventListener("click", () => {
    cart.length = 0;
    localStorage.clear()
    cardToCart();
})

/* CART BUTTON */
const cartButton = document.getElementById("cart-button")

/* INNER CART BUTTON */

const innerCartBtn = document.getElementById("inner-cart-button")
innerCartBtn.className = ("main__minititle");

