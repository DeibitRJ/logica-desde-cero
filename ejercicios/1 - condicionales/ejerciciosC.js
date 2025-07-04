/*Ejercicio 01: 
    Desarrollar un programa que lea un número entero por teclado y 
    determine si dicho número termina en el dígito 5.
*/
function ejercicio01C() {
    let numero = esUnEntero("NÚMERO TERMINA EN 5 \nIngresa un número entero:")

    if(numero === null){
        return; 
    }

    if (numero % 10 === 5) {
        alert("El número termina en 5.");
    } else {
        alert("El número no termina en 5.");
    }

}

/*Ejercicio 02: 
    Desarollar un programa que lea un número entero y determine si tiene tres dígitos. 
*/ 

function ejercicio02C(){
    let numero = esUnEntero("TIENE TRES DIGITOS\nIngresar un número entero:")
    if(numero === null){
        return; 
    }

    if(numero.toString().length === 3){
        alert("El número tiene tres dígitos");
    }else{
        alert("El número no tiene tres dígitos");
    }
}

/*Ejercicio 03: 
    Desarrollar un programa que lea un número entero y determinar si es negativo. 
*/
function ejercicio03C(){
    let numero = esUnEntero("NÚMEROS NEGATIVOS\nIngresar un número entero:")
    if(numero === null){
        return; 
    }
    if(numero < 0){
        alert("El número es negativo.");
    }else{
        alert("El número no negativo.");
    }
}

/*Ejercicio 04: 
    Desarrolla un programa que lea un número de dos dígitos y determinar la suma de sus dígitos.
 */
function ejercicio04C(){
    let numero = esUnEntero("SUMA DE DOS DIGITOS\nIngresar un número entero:")
    if(numero === null){
        return; 
    }

    if((numero >= 10 && numero <= 99) || (numero <= -10 && numero >= -99)){
        let absNumero = Math.abs(numero);
        let suma = Math.floor(absNumero/10) + absNumero%10; 
        alert("La suma de sus dígitos es: " + suma)
    }else{
        alert("El número no tiene dos dígitos." + numero)
    }
}

/*Ejercicio 05: 
    Desarrolla un programa que lea un número de dos dígitos y determinar si ambos dígitos son pares. 
 */
function ejercicio05C(){
    let numero = esUnEntero("DÍGITOS PARES\nIngresar un número de dos dígitos:"); 
    if(numero === null || !tieneNumeroDigitos(numero, 2)){
        return; 
    }

    primerDigito = Math.floor(numero/10);
    segundoDigito = numero%10;
    if(primerDigito%2 === 0 && segundoDigito%2 === 0){
        alert("Ambos dígitos son pares.")
    }else if(primerDigito%2 === 0){
        alert("El primer dígito es par.")
    }else if(segundoDigito%2 === 0){
        alert("El segundo dígito es par.")
    }else{
        alert("Ninguno de los dos dígitos es par.")
    }

}