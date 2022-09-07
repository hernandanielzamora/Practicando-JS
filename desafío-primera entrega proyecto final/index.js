/* Funciones de muestra y búsqueda */
function mostrarFloat(array) {
    let pregunta = prompt("¿Desea conocer los Floats y los estados de los productos antes de continuar?").toLowerCase();
    if (pregunta === "si") {
        array.forEach(item => alert(`Nombre: ${item.nombre}\t Float: ${item.float}\t Estado: ${item.estado}`));
    } else {
        alert("Usted decidió no conocer los Floats y Estados.");
    }
}

function encontrar(array) {
    let question = prompt("¿Desea buscar algún arma?").toLowerCase();
    if (question === "si"){
        let busqueda = prompt("Ingrese el nombre del arma que usted desea buscar")
        if (array.some(item => item.nombre === busqueda)) {
            alert(`${busqueda} si se encuentra en nuestra tienda`)
        } else {
            alert("No fue posible encontrar el producto.")
        }
    }else{
        alert("No se inició una búsqueda")
    }
}

/* Función de menú inicial */
function menu(usuario) {
    alert(`Bienvenido a ZetaStore ${usuario}!.\nDebajo encontrarás una lista de los productos disponibles y sus respectivos precios (los precios de la lista no tienen incluido el IVA):\n 1-  AK-47 | VENGANZA AQUAMARINA \t $ 3.200 \n 2-  AK-47 | PIZARRA \t $ 1.000 \n 3-  AWP | WILDFIRE \t $ 10.500 \n 4- AK-47 | FRENTE BRUMOSO \t $ 2000\n 5- M4A4 | EMPERADOR \t $2800 `);
    mostrarFloat(arrayProductos);
    encontrar(arrayProductos);
}

/* Función de selección y adición de objetos al carrito  */
function seleccion() {
    menu(usuario);
    let totalCompra = 0;
    let totalSinIva = 0;
    let totalConIva = 0;
    let cantidad = parseInt(prompt(`Ingrese el número de producto que desea añadir al carrito. \n 1-  AK-47 | VENGANZA AQUAMARINA \t $ 3.200 \n 2-  AK-47 | PIZARRA \t $ 1.000 \n 3-  AWP | WILDFIRE \t $ 10.500 \n 4- AK-47 | FRENTE BRUMOSO \t $ 2000\n 5- M4A4 | EMPERADOR \t $2800 \n Para terminar de añadir productos al carrito, introduzca el '0': `));

    while (cantidad != 0) {
        switch (cantidad) {

            case 1:
                totalSinIva = suma(totalSinIva, arrayProductos[0].precio);
                totalConIva = iva(totalSinIva);
                calculoIva = resta(totalConIva, totalSinIva);
                alert(`Usted eligió AK-47 | VENGANZA AQUAMARINA, su total por esta compra es $ ${totalConIva} (donde el precio base del arma es $ ${arrayProductos[0].precio} y el IVA es $ ${calculoIva})`);
                productChoice.push(arrayProductos[0])
                totalCompra = totalCompra + totalConIva;
                totalSinIva = 0;
                totalConIva = 0;
                calculoIva = 0;
                break

            case 2:
                totalSinIva = suma(totalSinIva, arrayProductos[1].precio);
                totalConIva = iva(totalSinIva);
                calculoIva = resta(totalConIva, totalSinIva);
                alert(`Usted eligió AK-47 | PIZARRA, su total por esta compra es $ ${totalConIva} (donde el precio base del arma es $ ${arrayProductos[1].precio} y el IVA es $ ${calculoIva})`);
                productChoice.push(arrayProductos[1])
                totalCompra = totalCompra + totalConIva;
                totalSinIva = 0;
                totalConIva = 0;
                calculoIva = 0;
                break

            case 3:
                totalSinIva = suma(totalSinIva, arrayProductos[2].precio);
                totalConIva = iva(totalSinIva);
                calculoIva = resta(totalConIva, totalSinIva);
                alert(`Usted eligió AWP | WILDFIRE, su total por esta compra es $ ${totalConIva} (donde el precio base del arma es $ ${arrayProductos[2].precio} y el IVA es $ ${calculoIva})`);
                productChoice.push(arrayProductos[2])
                totalCompra = totalCompra + totalConIva;
                totalSinIva = 0;
                totalConIva = 0;
                calculoIva = 0;
                break

            case 4:
                totalSinIva = suma(totalSinIva, arrayProductos[3].precio);
                totalConIva = iva(totalSinIva);
                calculoIva = resta(totalConIva, totalSinIva);
                alert(`Usted eligió AK-47 | FRENTE BRUMOSO, su total por esta compra es $ ${totalConIva} (donde el precio base del arma es $ ${arrayProductos[3].precio} y el IVA es $ ${calculoIva})`);
                productChoice.push(arrayProductos[3])
                totalCompra = totalCompra + totalConIva;
                totalSinIva = 0;
                totalConIva = 0;
                calculoIva = 0;
                break

            case 5:
                totalSinIva = suma(totalSinIva, arrayProductos[4].precio);
                totalConIva = iva(totalSinIva);
                calculoIva = resta(totalConIva, totalSinIva);
                alert(`Usted eligió M4A4 | EMPERADOR, su total por esta compra es $ ${totalConIva} (donde el precio base del arma es $ ${arrayProductos[4].precio} y el IVA es $ ${calculoIva})`);
                productChoice.push(arrayProductos[4])
                totalCompra = totalCompra + totalConIva;
                totalSinIva = 0;
                totalConIva = 0;
                calculoIva = 0;
                break

            default:
                alert("Por favor introduzca un valor válido (1, 2, 3, 4, 5).");
                break
        }

        cantidad = parseInt(prompt(`Ingrese el número de producto que desea añadir al carrito. \n 1-  AK-47 | VENGANZA AQUAMARINA \t $ 3.200 \n 2-  AK-47 | PIZARRA \t $ 1.000 \n 3-  AWP | WILDFIRE \t $ 10.500 \n 4- AK-47 | FRENTE BRUMOSO \t $ 2000\n 5- M4A4 | EMPERADOR \t $2800 \n Para terminar de añadir productos al carrito, introduzca el '0': `));
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
                alert(`Su descuento fue de un 10%, el precio antiguo era de: $ ${totalCompra}, su nuevo precio a pagar es de: $ ${totalNuevoCompra}`);
                return totalNuevoCompra;

            case "cyclopscito":
                totalNuevoCompra = cyclopscito(totalCompra);
                alert(`Su descuento fue de un 25%, el precio antiguo era de: $ ${totalCompra}, su nuevo precio a pagar es de: $ ${totalNuevoCompra}`);
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

const suma = (a, b) => { return a + b };
const resta = (a, b) => { return a - b };
const iva = (precio) => { return precio * 1.21 };
const zambrita = (precio) => { return resta(precio, (precio * 0.10)) };
const cyclopscito = (precio) => { return resta(precio, (precio * 0.25)) };

/* Creacion de class Productos */
class Producto {
    constructor(item) {
        this.nombre = item.nombre;
        this.precio = item.precio;
        this.float = item.float;
        this.estado = item.estado;
    }
}


/* Inicialización de variables globales */
let arrayProductos = [{ nombre: "AK-47 | VENGANZA AQUAMARINA", precio: 3200, float: 0.429, estado: "Bastante Desgastado", }, { nombre: "AK-47 | PIZARRA", precio: 1000, float: 0.093, estado: "Casi Nuevo" }, { nombre: "AWP | WILDFIRE", precio: 10500, float: 0.221, estado: "Algo desgastado" }, { nombre: "AK-47 | FRENTE BRUMOSO", precio: 2000, float: 0.527, estado: "Deplorable" }, { nombre: "M4A4 | EMPERADOR", precio: 2800, float: 0.217, estado: "Algo desgastado" },];
const productChoice = [];

/* Inicio de programa con la variable global "usuario" */
let usuario = prompt("Ingrese su nombre por favor: ");



/* Cálculo del primer total */
let totalCompra = seleccion();
alert(`El total de su compra por el momento es de = $ ${totalCompra}`);
alert(`A continuación se mostrará uno por uno los objetos que ustéd añadió a su carrito (son/es ${productChoice.length} producto/s)`);
productChoice.forEach(item => alert(`Arma: ${item.nombre}, Precio: ${item.precio}`))


/* Validación del total != 0 */
if (totalCompra > 0) {
    totalCompra = descuento(totalCompra);
    alert(`El monto final a pagar es de = $ ${totalCompra}`);
    alert(`Muchas gracias ${usuario} por confiar en nosotros, disfrute sus skins, nos vemos a la próxima!`);
} else {
    alert(`${usuario}, usted no colocó productos en su carrito de compras. Para volver a intentarlo reinicie el programa.`);
}


/* Fin del programa */