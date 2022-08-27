/* 
SIMULADOR INTERACTIVO - VENTA DE SKINS DE CSGO 
El programa posee el siguiente algoritmo: 

1) Pedir un nombre al usuario.
2) Mostrar por pantalla un menú de selección de productos.
3) Preguntar cuales productos (detallando siempre las opciones disponibles).
4) Mostrar por pantalla el total y el detalle de dicha operación, es decir, cada vez que se añade un objeto al carrito(neto y por otro lado impuestos).
5) Muestra por pantalla el total parcial, es decir, la suma de todos los totales obtenidos hasta el momento (despues de que se añade el objeto) .
6) Preguntar si el cliente tiene o no un cupón de descuentos (tiene 2 cupones de descuento "zambrita", "cyclopscito").
7) Calcular y mostrar el total.
*/


/* Función de menú inicial */
function menu(usuario) {
    alert(`Bienvenido a ZetaStore ${usuario}!.\nDebajo encontrarás una lista de los productos disponibles y sus respectivos precios (los precios de la lista no tienen incluido el IVA):\n 1-  AK-47 | VENGANZA AQUAMARINA \t $ 3.200 \n 2-  AK-47 | PIZARRA \t $ 1.000 \n 3-  AWP   | WILDFIRE \t $ 10.500 \n`);
}


/* Función de selección y adición de objetos al carrito  */
function seleccion() {
    menu(usuario);
    let totalCompra = 0;
    let totalSinIva = 0;
    let totalConIva = 0;
    let cantidad = parseInt(prompt(`Ingrese el número de producto que desea añadir al carrito. \n 1-  AK-47 | VENGANZA AQUAMARINA \t $ 3.200 \n 2-  AK-47 | PIZARRA \t $ 1.000 \n 3-  AWP   | WILDFIRE \t $ 10.500 \n Para terminar de añadir productos al carrito, introduzca el '0': `));

    while (cantidad != 0) {
        switch (cantidad) {

            case 1:
                totalSinIva = suma(totalSinIva, arma1);
                totalConIva = iva(totalSinIva);
                calculoIva = resta(totalConIva, totalSinIva);
                alert(`Usted eligió AK-47 | VENGANZA AQUAMARINA, su total por esta compra es $ ${totalConIva} (donde el precio base del arma es $ ${arma1} y el IVA es $ ${calculoIva})`);
                totalCompra = totalCompra + totalConIva;
                totalSinIva = 0;
                totalConIva = 0;
                calculoIva = 0;
                alert(`Su total por el momento es de: $ ${totalCompra}`);
                break

            case 2:
                totalSinIva = suma(totalSinIva, arma2);
                totalConIva = iva(totalSinIva);
                calculoIva = resta(totalConIva, totalSinIva);
                alert(`Usted eligió AK-47 | PIZARRA, su total por esta compra es $ ${totalConIva} (donde el precio base del arma es $ ${arma2} y el IVA es $ ${calculoIva})`);
                totalCompra = totalCompra + totalConIva;
                totalSinIva = 0;
                totalConIva = 0;
                calculoIva = 0;
                alert(`Su total por el momento es de: $ ${totalCompra}`);
                break

            case 3:
                totalSinIva = suma(totalSinIva, arma3);
                totalConIva = iva(totalSinIva);
                calculoIva = resta(totalConIva, totalSinIva);
                alert(`Usted eligió AWP   | WILDFIRE, su total por esta compra es $ ${totalConIva} (donde el precio base del arma es $ ${arma3} y el IVA es $ ${calculoIva})`);
                totalCompra = totalCompra + totalConIva;
                totalSinIva = 0;
                totalConIva = 0;
                calculoIva = 0;
                alert(`Su total por el momento es de: $ ${totalCompra}`);
                break

            default:
                alert("Por favor introduzca un valor válido (1, 2 o 3).");
                break
        }

        cantidad = parseInt(prompt(`Ingrese el número de producto que desea añadir al carrito. \n 1-  AK-47 | VENGANZA AQUAMARINA \t $ 3.200 \n 2-  AK-47 | PIZARRA \t $ 1.000 \n 3-  AWP   | WILDFIRE \t $ 10.500 \n Para terminar de añadir productos al carrito, introduzca el '0': `));
    }

    return totalCompra;
}


/* Función de cálculo de descuento (si es que el cliente tiene el cupón) */

function descuento(totalCompra) {
    let totalNuevoCompra = 0;
    let descuento = prompt("¿Posee algún cupón de descuento (SI o NO)? (Los cupones de descuento no son acumulables).");
    if (descuento === "SI") {
        let cualDescuento = prompt("Ingrese su cupón de descuento (Todo en minúsculas): ");
        switch (cualDescuento) {

            case "zambrita":
                totalNuevoCompra = zambrita(totalCompra);
                alert(`Su descuento fue de un %10, el precio antiguo era de: $ ${totalCompra}, su nuevo precio a pagar es de: $ ${totalNuevoCompra}`);
                return totalNuevoCompra;

            case "cyclopscito":
                totalNuevoCompra = cyclopscito(totalCompra);
                alert(`Su descuento fue de un %25, el precio antiguo era de: $ ${totalCompra}, su nuevo precio a pagar es de: $ ${totalNuevoCompra}`);
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



/* Inicialización de variables globales */

let arma1 = 3200;
let arma2 = 1000;
let arma3 = 10500;



/* Inicio de programa con la variable global "usuario" */
let usuario = prompt("Ingrese su nombre por favor: ");



/* Cálculo del primer total */
let totalCompra = seleccion();
alert(`El total de su compra por el momento es de = $ ${totalCompra}`);


/* Validación del total != 0 */
if (totalCompra != 0) {
    totalCompra = descuento(totalCompra);
    alert(`El monto final a pagar es de = $ ${totalCompra}`);
    alert(`Muchas gracias ${usuario} por confiar en nosotros, disfrute sus skins, nos vemos a la próxima!`);

} else {
    alert(`${usuario}, usted no colocó productos en su carrito de compras. Para volver a intentarlo reinicie el programa.`);
}


/* Fin del programa */






