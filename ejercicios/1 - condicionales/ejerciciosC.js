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

/*Ejercicio 06: 
    Desarrolla un programa que lea un número menor que 24 y determinar si es primo. 
*/
function ejercicio06C(){
    let numero = esUnEntero("Ingresar un número menor que 24: ")
    if(numero === null){
        return; 
    }

    if(numero >= 24){
        alert("Número excede el valor permitido")
    }else if(esPrimo(numero)){
        alert(numero + " es primo.")
    }else{
        alert(numero + " no es primo.")
    }
}

/*Ejercicio 07: 
    Desarrolla un programa queé lea un número de dos dígitos y determinar si es primo y adem+as si es negativo. 
*/
function ejercicio07C(){
    let numero = esUnEntero("Ingresar un número de dos dígitos"); 
    if(numero === null || numero  === undefined){
        return; 
    }
    
    if(!tieneNumeroDigitos(numero,2)){
        alert("Debe ingresar un número de dos dígitos."); 
        return; 
    }

    let esNegativo = numero <0; 
    let primo = esPrimo(numero); 

    if(primo && !esNegativo){
        alert("El número es primo y positivo."); 
    }else if(primo && esNegativo){
        alert("El número es negativo, y no puede ser considerado primo."); 
    }else if(!primo && esNegativo){
        alert("El número es negativo y no es primo."); 
    }else{
        alert("El número no es primo ni negativo");
    }

}

/*Ejercicio 08: 
    Desarrolla un programa que lea un número de dos dígitos y determinar si sus dígitos son primos. 
*/
function ejercicio08C(){
    let numero = esUnEntero("Ingrese un número de dos dígitos:");

    if(numero === null || numero  === undefined){
        return; 
    }
    
    if(!tieneNumeroDigitos(numero,2)){
        alert("Debe ingresar un número de dos dígitos."); 
        return; 
    }

    let absNumero = Math.abs(numero);
    const digitoUno = Math.floor(absNumero/10); 
    const digitoDos = absNumero%10;
    
    if(esPrimo(digitoUno) && esPrimo(digitoDos)){
        alert("Ambos dígitos son primos.");
    }else if(esPrimo(digitoUno)){
        alert("Solo el primer dígito es primo.");
    }else if(esPrimo(digitoDos)){
        alert("Solo el segundo dígito es primo.");
    }else{
        alert("Ninguno de sus dígitos es primo.");
    }

}

/*Ejercicio 09: 
    Desarrolla un programa que lea un número de dos dígitos y determinar si un dígito es múltiplo del otro. 
*/
function ejercicio09C(){
    let numero = esUnEntero("Ingrese un número de dos dígitos:");

    if(numero === null || numero  === undefined){
        return; 
    }

    if(!tieneNumeroDigitos(numero,2)){
        alert("Debe ingresar un número de dos dígitos."); 
        return; 
    }

    let absNumero = Math.abs(numero);
    const digitoUno = Math.floor(absNumero/10); 
    const digitoDos = absNumero%10;

    if(digitoUno === 0 || digitoDos === 0){
        alert("No se puede verificar múltiplos cuando uno de los dígitos es cero"); 
        return;
    }


    if(digitoUno%digitoDos === 0 && digitoDos%digitoUno === 0){
        alert("Ambos dígitos son multiplos del otro.");
    }else if(digitoUno%digitoDos === 0){
        alert("El primer dígito es multiplo del segundo dígito.");
    }else if(digitoDos%digitoUno === 0){
        alert("El segundo dígito es multiplo del primer dígito.");
    }else{
        alert("Sus dígitos no son multiplos.");
    }
}