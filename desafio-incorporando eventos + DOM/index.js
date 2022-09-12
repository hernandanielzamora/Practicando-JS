function agregarAlCarrito(producto) {
    let totalCompra = 0;
    let totalSinIva = 0;
    let totalConIva = 0;
    totalSinIva = suma(totalSinIva, producto.precio);
    totalConIva = iva(totalSinIva);
    calculoIva = resta(totalConIva, totalSinIva);
    totalCompra = totalCompra + totalConIva;
    productChoice.push(producto);
    alert(
        `Usted eligió ${producto.nombre}, su total por esta compra es $ ${totalConIva} (donde el precio base del arma es $${producto.precio} y el IVA es $${calculoIva})`
    );
    return totalCompra
}

/* Funciones de muestra y búsqueda */
function mostrarFloat(array) {
    let pregunta = prompt("¿Desea conocer los Floats y los estados de los productos antes de continuar?").toLowerCase();
    if (pregunta === "si") {
        array.forEach((item) => alert(`Nombre: ${item.nombre}\t Float: ${item.float}\t Estado: ${item.estado}`));
    } else {
        alert("Usted decidió no conocer los Floats y Estados.");
    }
}

function encontrar(array) {
    let question = prompt("¿Desea buscar algún arma?").toLowerCase();
    while (question != "no") {
        if (question === "si") {
            let busqueda = prompt("Ingrese el nombre del arma que usted desea buscar");
            if (array.some((item) => item.nombre === busqueda)) {
                alert(`${busqueda} si se encuentra en nuestra tienda`);
            } else {
                alert("No fue posible encontrar el producto.");
            }
        }
        question = prompt("¿Desea buscar algún arma? (Ingrese no para terminar el proceso de búsqueda)").toLocaleLowerCase();
    }

    alert("No se inició una búsqueda");
}


/* Función de menú inicial */
function menu(usuario) {
    alert(
        `Bienvenido a ZetaStore ${usuario}!.\nDebajo encontrarás una lista de los productos disponibles y sus respectivos precios (los precios de la lista no tienen incluido el IVA):\n 1-  AK-47 | VENGANZA AQUAMARINA \t $ 3.200 \n 2-  AK-47 | PIZARRA \t $ 1.000 \n 3-  AWP | WILDFIRE \t $ 10.500 \n 4- AK-47 | FRENTE BRUMOSO \t $ 2000\n 5- M4A4 | EMPERADOR \t $2800 `
    );
    // mostrarFloat(arrayProductos);
    // encontrar(arrayProductos);
}

/* Función de selección y adición de objetos al carrito  */
function seleccion() {
    let totalCompra = 0;
    menu(usuario);
    let cantidad = parseInt(
        prompt(
            `Ingrese el número de producto que desea añadir al carrito. \n 1-  AK-47 | VENGANZA AQUAMARINA \t $ 3.200 \n 2-  AK-47 | PIZARRA \t $ 1.000 \n 3-  AWP | WILDFIRE \t $ 10.500 \n 4- AK-47 | FRENTE BRUMOSO \t $ 2000\n 5- M4A4 | EMPERADOR \t $2800 \n Para terminar de añadir productos al carrito, introduzca el '0': `
        )
    );

    while (cantidad != 0) {
        switch (cantidad) {
            // Se pueden ahorrar muchas líneas de código con la función que te dejé al principio del código
            case 1:
                totalCompra = agregarAlCarrito(arrayProductos[0])
                break;

            case 2:
                // Te quedarían así todos los cases
                totalCompra = agregarAlCarrito(arrayProductos[1]);
                break;

            case 3:
                totalCompra = agregarAlCarrito(arrayProductos[2])
                break;

            case 4:
                totalCompra = agregarAlCarrito(arrayProductos[3])
                break;

            case 5:
                totalCompra = agregarAlCarrito(arrayProductos[4])

            default:
                alert("Por favor introduzca un valor válido (1, 2, 3, 4, 5).");
                break;
        }

        cantidad = parseInt(
            prompt(
                `Ingrese el número de producto que desea añadir al carrito. \n 1-  AK-47 | VENGANZA AQUAMARINA \t $ 3.200 \n 2-  AK-47 | PIZARRA \t $ 1.000 \n 3-  AWP | WILDFIRE \t $ 10.500 \n 4- AK-47 | FRENTE BRUMOSO \t $ 2000\n 5- M4A4 | EMPERADOR \t $2800 \n Para terminar de añadir productos al carrito, introduzca el '0': `
            )
        );
    }

    return totalCompra;
}

/* Función de cálculo de descuento (si es que el cliente tiene el cupón) */
function descuento(totalCompra) {
    let totalNuevoCompra = 0;
    let descuento = prompt("¿Posee algún cupón de descuento (SI o NO)? (Los cupones de descuento no son acumulables).").toUpperCase();
    if (descuento === "SI") {
        let cualDescuento = prompt("Ingrese su cupón de descuento: ").toLowerCase();
        switch (cualDescuento) {
            case "zambrita":
                totalNuevoCompra = zambrita(totalCompra);
                alert(
                    `Su descuento fue de un 10%, el precio antiguo era de: $ ${totalCompra}, su nuevo precio a pagar es de: $ ${totalNuevoCompra}`
                );
                return totalNuevoCompra;

            case "cyclopscito":
                totalNuevoCompra = cyclopscito(totalCompra);
                alert(
                    `Su descuento fue de un 25%, el precio antiguo era de: $ ${totalCompra}, su nuevo precio a pagar es de: $ ${totalNuevoCompra}`
                );
                return totalNuevoCompra;

            default:
                alert("Su código de descuento no es válido.");
                totalNuevoCompra = totalCompra;
                return totalNuevoCompra;
        }
    } else {
        alert("Usted seleccionó que no tiene cupón de descuento.");
        totalNuevoCompra = totalCompra;
        return totalNuevoCompra;
    }
}

/* Arrow functions utilizadas para los cálculos matemáticos */

const suma = (a, b) => {
    return a + b;
};
const resta = (a, b) => {
    return a - b;
};
const iva = (precio) => {
    return precio * 1.21;
};
const zambrita = (precio) => {
    return resta(precio, precio * 0.1);
};
const cyclopscito = (precio) => {
    return resta(precio, precio * 0.25);
};

/* Creacion de class Productos */
class Producto {
    constructor(item) {
        this.id = item.id;
        this.nombre = item.nombre;
        this.precio = item.precio;
        this.float = item.float;
        this.estado = item.estado;
        this.imagen = item.imagen;
    }
}

/* Inicialización de variables globales */
let arrayProductos = [
    {id: 1,nombre: "AK-47 | AQUAMARINA", precio: 3200, float: 0.429, estado: "Algo Desgastado", imagen: "ak aquamarina.png"},
    {id: 2,nombre: "AK-47 | PIZARRA", precio: 1000, float: 0.093, estado: "Casi Nuevo", imagen: "ak pizarra.png" },
    {id: 3,nombre: "AWP | WILDFIRE", precio: 10500, float: 0.221, estado: "Algo desgastado", imagen: "awp wildfire.png" },
    {id: 4,nombre: "AK-47 | FRENTE BRUMOSO", precio: 2000, float: 0.527, estado: "Deplorable", imagen: "ak frente brumoso.png" },
    {id: 5,nombre: "M4A4 | EMPERADOR", precio: 2800, float: 0.217, estado: "Algo desgastado", imagen: "m4a4 emperador.png" },
];

/* Creación de objetos en el DOM */
let section = document.getElementById("cont");
section.classlist = "container text-center"
for(const producto of arrayProductos){
    let card = document.createElement("div")
    card.classList ="card bg-dark"
    card.innerHTML = `<div class="col">
                            <a href="" target="_blank"><img src="image/${producto.imagen}" class="card-img-top"></a>
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item bg-dark">FLOAT: ${producto.float}</li>
                                <li class="list-group-item bg-dark">ESTADO: ${producto.estado} </li>
                                <li class="list-group-item bg-dark">PRECIO: ${producto.precio} </li>
                                <li class="list-group-item bg-dark"><button id="${producto.id}" type="button" class="btn btn-dark btn-comprar">Comprar</li>
                            </ul>
                        </div>
                        `
   section.append(card)
}

/* Creación de boton */
let button = document.createElement("button")
button.classList = "btn-comprar btn btn-dark";
button.innerHTML = "Ver código de descuento";

let sectionButton = document.getElementById("sectionButton");
let divButton = document.createElement("div");

sectionButton.append(divButton)
divButton.append(button);

button.addEventListener("click", () => {
    const h3 = document.createElement("h3");
    h3.innerHTML = "cyclopscito";
    h3.classList = "main__minititle";
    divButton.append(h3)
    if (h3.innerHTML === "cyclopscito"){
        button.disabled = true;
    }
})

/* Inicio de programa con la variable global "usuario" */
// let usuario = prompt("Ingrese su nombre por favor: ");

/* Cálculo del primer total */
// let totalCompra = seleccion();
alert(`El total de su compra por el momento es de = $ ${totalCompra}`);
alert(`A continuación se mostrará uno por uno los objetos que ustéd añadió a su carrito (son/es ${productChoice.length} producto/s)`);
productChoice.forEach((item) => alert(`Arma: ${item.nombre}, Precio: ${item.precio}`));

/* Validación del total > 0 */
if (totalCompra > 0) {
    totalCompra = descuento(totalCompra);
    alert(`El monto final a pagar es de = $ ${totalCompra}`);
    alert(`Muchas gracias ${usuario} por confiar en nosotros, disfrute sus skins, nos vemos a la próxima!`);
} else {
    alert(`${usuario}, usted no colocó productos en su carrito de compras. Para volver a intentarlo reinicie el programa.`);
}
