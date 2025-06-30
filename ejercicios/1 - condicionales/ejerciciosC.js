//Desarrollar un programa que lea un número entero por teclado y 
// determine si dicho número termina en el dígito 5.
function ejercicio01C() {
    let numero = prompt("NÚMERO TERMINA EN 5 \nIngresa un número entero:")
    numero = parseInt(numero);

    if(isNaN(numero)){
        alert("El valor ingresado no es un número positivo válido")
        return;
    }

    if (numero % 10 === 5) {
        alert("El número termina en 5.")
    } else {
        alert("El número no termina en 5.")
    }

}


