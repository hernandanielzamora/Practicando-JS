/* Primer Desafío Complementario Javascript */
/* Crear un algoritmo que repita un bloque de instrucciones. En cada repetición debemos efectuar una operación o comparación para obtener una salida por alerta o consola. */

alert("Programa utilizado para ingresar entradas de texto, contabilizarlas y mostrarlas por pantallas en orden de ingreso. Por favor, a continuación ingrese su primera entrada de texto. El programa finaliza al ingresar 'ESC'.");



let texto = prompt("Ingrese una entrada de texto: ");
let ingresado = "";
let contador = 1;


while(texto != "ESC"){
    ingresado +=`La línea n° ${contador} ingresada fue: ${texto}. \n` ;
    texto = prompt("Ingrese una nueva entrada de texto: ");
    contador++;
}

if(ingresado === ""){
    ingresado = "Usted no ingresó texto.";
}

alert(ingresado);