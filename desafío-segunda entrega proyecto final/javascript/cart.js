/* Función para agregar items al carrito */
let cart = [];
const cartContainer = document.getElementById("cart-container");

/* PRICES */
const totalPrice = document.getElementById("totalPrice");
const ivaPrice = document.getElementById("ivaPrice");

/* FUNCIONES MATEMÁTICAS */
const suma = (a, b) => {
    return a + b;
};
const iva = (precio) => {
    return precio * 1.21;
};

/* Local Storage */
document.addEventListener(`DOMContentLoaded`, () => {
    if (localStorage.getItem(`cart`)) {
        cart = JSON.parse(localStorage.getItem(`cart`));
        cardToCart();
    }
})


/* Agregar al carrito */
const addToCart = (productId) => {
    const exist = cart.some(product => product.id === productId)
    if (exist) {
        const item = cart.map(item => {
            if (item.id === productId) {
                item.quantity++
            }
        })
    } else {

        let product = arrayProducts.find(product => product.id == productId);
        cart.push(product);
    }

    cardToCart();
}

/* Crear Cards en el Offcanvas */
const cardToCart = () => {
    cartContainer.innerHTML = "";

    cart.forEach((product) => {
        let card = document.createElement("div")
        card.classList = "card bg-dark cart__card";
        card.innerHTML = `<div class="col cart__card__head">
                            <a href="" target="_blank"><img src="../image/${product.img}" class="card-img-top"></a>
                            <div class="card-body cart__card__body">
                                <h5 class="card-title">${product.name}</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item bg-dark">PRECIO (+IVA): ${iva(product.price)}</li>
                                <li class="list-group-item bg-dark">Cantidad: <span id="">${product.quantity}</span></li>
                                <li class="list-group-item bg-dark"><button class="btn btn-dark btn-cart-card text-center" onclick="deleteFromCart(${product.id})"><img src="https://img.icons8.com/dotty/25/000000/buy.png"/></button></li>
                            </ul>
                        </div>`
        cartContainer.appendChild(card)
        localStorage.setItem(`cart`, JSON.stringify(cart))
    })

    cartButton.innerText = `(${cart.length})`;
    innerCartBtn.innerText = `(${cart.length})`;
    totalPrice.innerText = cart.reduce((acum, product) => suma(acum, product.price) * product.quantity, 0);
    ivaPrice.innerText = iva(cart.reduce((acum, product) => suma(acum, product.price) * product.quantity, 0));

}

/* Eliminar elementos del carrito */
const deleteFromCart = (prodId) => {
    const item = cart.find((product) => product.id === prodId);
    let index = cart.indexOf(item);
    cart.splice(index, 1);
    cardToCart()
    if (cart.length === 0) {
        localStorage.clear();
        cardToCart()
    }
}


/* Arrow functions para utilizar una vez agregados los inputs que validen los códigos de descuento*/

/* const zambrita = (precio) => {
    return resta(precio, precio * 0.1);
};
const cyclopscito = (precio) => {
    return resta(precio, precio * 0.25);
}; */