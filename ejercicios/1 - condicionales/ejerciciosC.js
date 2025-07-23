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

/*Ejercicio 10: 
    Desarrolla un programa que lea un número de dos dígitos y determinar si los dos dígitos son iguales. 
*/
function ejercicio10C(){
    let numero = esUnEntero("Ingrese un número de dos dígitos:");

    if(numero === null || numero  === undefined){
        return; 
    }

    if(!tieneNumeroDigitos(numero,2)){
        alert("Debe ingresar un número de dos dígitos."); 
        return; 
    }

    let absNumero = Math.abs(numero);
    const primerDigito = Math.floor(absNumero/10); 
    const segundoDigito = absNumero%10;

    if(primerDigito === segundoDigito){
        alert("Los dos dígitos son iguales.");
    }else{
        alert("Los dígitos tienen valores diferentes.");
    }
}

/*Ejercicio 11: 
    Desarrolla un programa que lea dos números enteros y determinar cuál es el mayor. 
*/
function ejercicio11C(){
    let primerNumero = esUnEntero("Ingrese el primer número: ");
    let segundoNumero = esUnEntero("Ingrese el segundo número: ");

    if (primerNumero === null || segundoNumero === null) return;

    
    if(primerNumero > segundoNumero){
        alert("El primer número es mayor.");
    }else if(primerNumero === segundoNumero){
        alert("Los números son iguales.");
    }else{
        alert("El segundo número es mayor.");
    }
}

/*Ejercicio 12: 
    Desarrolla un programa que lea dos números enteros de dos dígitos y determinar si tienen dígitos en común. 
*/
function ejercicio12C(){
    let primerNumero = esUnEntero("Ingrese el primer número de dos dígitos: ");
    let segundoNumero = esUnEntero("Ingrese el segundo número de dos dígitos: ");

    if (primerNumero === null || segundoNumero === null){
        alert("Se canceló la operación");
        return;
    } 

    if(!tieneNumeroDigitos(primerNumero,2) || !tieneNumeroDigitos(segundoNumero, 2)){
        alert("Debe ingresar un número de dos dígitos."); 
        return; 
    }

    const digitos1 = primerNumero.toString().split('');
    const digitos2 = segundoNumero.toString().split('');


    for(let digito of digitos1){
        if(digitos2.includes(digito)){
            alert("Tiene dígito(s) en común");
            return;
        }
    }

    alert("No tiene dígitos en común");
}

/*Ejercicio 13: 
    Desarrolla un programa que lea dos números enteros de dos dígitos y determine si la suma de los dos números 
    es par.  
*/
function ejercicio13C(){
    let primerNumero = esUnEntero("Ingrese el primer número de dos dígitos: ");
    let segundoNumero = esUnEntero("Ingrese el segundo número de dos dígitos: ");

    if (primerNumero === null || segundoNumero === null){
        alert("Se canceló la operación");
        return;
    } 

    if(!tieneNumeroDigitos(primerNumero,2) || !tieneNumeroDigitos(segundoNumero, 2)){
        alert("Debe ingresar un número de dos dígitos."); 
        return; 
    }

    let suma = primerNumero + segundoNumero;

    if(suma%2 === 0){
        alert("La suma es par.");
    }else{
        alert("La suma es impar.");
    }
}

/*Ejercicio 14: 
    Desarrolla un programa que lea dos números enteros de dos dígitos y determine a cuanto es 
    la suma de todos los dígitos.
*/
function ejercicio14C(){
    let primerNumero = esUnEntero("Ingrese el primer número de dos dígitos: ");
    let segundoNumero = esUnEntero("Ingrese el segundo número de dos dígitos: ");

    if (primerNumero === null || segundoNumero === null){
        alert("Se canceló la operación");
        return;
    } 

    if(!tieneNumeroDigitos(primerNumero,2) || !tieneNumeroDigitos(segundoNumero, 2)){
        alert("Debe ingresar un número de dos dígitos."); 
        return; 
    }

    let cadena = primerNumero.toString() + segundoNumero.toString(); 

    let suma = 0; 
    for(let i = 0; i<cadena.length; i++){
        suma += parseInt(cadena[i]);
    }

    alert("La suma de todos los dígitos es: " + suma);
}

/*Ejercicio 15: 
    Desarrolla un programa que lea un número entero de tres dígitos y determine a cuanto es 
    la suma de sus dígitos.
*/
function ejercicio15C(){
    let numero = esUnEntero("Ingrese un número de tres dígitos:");

    if(numero === null || numero  === undefined){
        return; 
    }

    if(!tieneNumeroDigitos(numero,3)){
        alert("Debe ingresar un número de tres dígitos."); 
        return; 
    }

    let cadena = Math.abs(numero).toString()
    let suma = 0; 
    for(let i = 0; i<cadena.length; i++){
        suma += parseInt(cadena[i]);
    }

    alert("La suma de todos los dígitos es: " + suma);
}

/*Ejercicio 16: 
    Desarrolla un programa que lea un número entero de tres dígitos y determine si al menos dos de sus tres 
    dígitos son iguales.
*/
function ejercicio16C(){
    let numero = esUnEntero("Ingrese un número de tres dígitos:");
    let contador = 0; 

    if(numero === null || numero  === undefined){
        return; 
    }

    if(!tieneNumeroDigitos(numero,3)){
        alert("Debe ingresar un número de tres dígitos."); 
        return; 
    }
    let cadena = Math.abs(numero).toString()
    let d1 = cadena[0];
    let d2 = cadena[1];
    let d3 = cadena[2];
    
    if(d1 === d2 || d1 === d3 || d2 === d3){
        alert("Hay al menos dos dígitos iguales.")
    }else{
        alert("Todos los dígitos son difernetes.")
    }
}

/*Ejercicio 17: 
    Desarrolla un programa que lea un número entero de tres dígitos y determine en que posición esta el mayor dígito.
*/
function ejercicio17C(){
    let numero = esUnEntero("Ingrese un número de tres dígitos:");
    let contador = 0; 

    if(numero === null || numero  === undefined){
        return; 
    }

    if(!tieneNumeroDigitos(numero,3)){
        alert("Debe ingresar un número de tres dígitos."); 
        return; 
    }
    
    let centena = Math.floor(numero/100); 
    let decena = Math.floor((numero/10)%10);
    let unidad = numero %10; 

    let mayor = Math.max(centena, Math.max(decena,unidad))
    let posiciones = [];
    if(centena === mayor) posiciones.push("centena");
    if(centena === mayor) posiciones.push("decena");
    if(centena === mayor) posiciones.push("unidad");

    let mensaje = posiciones.join(", ");

    alert("El dígito mayor se encuentra en la(s): " + mensaje);
}

/*Ejercicio 18: 
    Desarrolla un programa que lea un número entero de tres dígitos y determine si alguno de sus dígitos son múltiplo de otros.
*/
function ejercicio18C(){
    let numero = esUnEntero("Ingrese un número de tres dígitos:");
    let contador = 0; 

    if(numero === null || numero  === undefined){
        return; 
    }

    if(!tieneNumeroDigitos(numero,3)){
        alert("Debe ingresar un número de tres dígitos."); 
        return; 
    }
    
    let digitos = numero.toString().split('').map(Number);
    let hayMultiplo = false; 

    for(let i = 0; i<digitos.length; i++){
        for(let j = 0; j<digitos.length; j++){
            if(i !== j && digitos[j] !== 0 && digitos[i] % digitos[j] === 0){
                hayMultiplo = true; 
                break; 
            }
        }
        if(hayMultiplo) break;
    }

    alert(hayMultiplo? "Sí hay múltiplos entre los dígitos.": "No hay múltiplos entre los dígitos.");
}

/*Ejercicio 19: 
    Desarrolla un programa que lea tres números enteros y determinar cuál es el mayor. Usar solamente dos variables. 
*/
function ejercicio19C(){
    let mayor = esUnEntero("Ingrese el primer número: ");

    if (mayor === null){
        alert("Se canceló la operación");
        return;
    } 

    for(let i = 1; i<3; i++){
        let numero = esUnEntero("Ingrese otro número: ");

        if(numero === null){
            alert("Se canceló la operación");
            return; 
        }

        if(numero> mayor){
            mayor = numero; 
        }
    }

    alert("El número mayor es: " + mayor)

}

/*Ejercicio 20: 
    Desarrolla un programa que lea tres números enteros y mostrarlos ascendentemente.
*/
function ejercicio20C(){

    let numeros = [];

    for(let i = 0; i<3; i++){
        let numero = esUnEntero("Ingrese otro número: ");

        if(numero === null){
            alert("Se canceló la operación");
            return; 
        }

        numeros.push(numero);
    }

    numeros.sort((a,b) => a - b);

    alert("Lós números en forma ascendente son: " + numeros.join(", "))
}

/*Ejercicio 21: 
    Desarrolla un programa que lea tres números enteros de dos dígitos cada uno y determinar 
    en cuál de ellos se encuntra el mayor dígito.
*/
function ejercicio21C(){

    let primerDigito = -Infinity;
    let segundoDigito = -Infinity;
    let mayorDigitoGlobal = -Infinity;
    let posicion = 0; 

    for(let i = 1; i<4; i++){
        let numero = esUnEntero("Ingrese un número de dos dígitos:")
        if(numero === null || numero  === undefined){
        return; 
    }
        if(!tieneNumeroDigitos(numero,2)){
            alert("Debe ingresar un número de dos dígitos."); 
            return; 
        }

        primerDigito = Math.floor(numero/10); 
        segundoDigito = numero%10; 
        let mayorDigito = Math.max(primerDigito, segundoDigito);

        if(mayorDigitoGlobal < mayorDigito){
            mayorDigitoGlobal = mayorDigito;
            posicion = i;
        }
    }
    alert("El mayor dígito se encuentra en el " + posicion + " número");
}

/*Ejercicio 22: 
    Desarrolla un programa que lea un número enteros de tres dígitos y determinar si el 
    primer dígito es igual al último
*/
function ejercicio22C(){
    let numero = esUnEntero("Ingrese un número de tres dígitos:")
        if(numero === null || numero  === undefined){
        return; 
    }

    if(!tieneNumeroDigitos(numero,3)){
        alert("Debe ingresar un número de tres dígitos."); 
        return; 
    }

    let primerDigito = Math.floor(numero/100);
    let ultimoDigito = numero%10;

    if(primerDigito === ultimoDigito){
        alert("El primer y último dígito son iguales.")
    }else{
        alert("El primer y último dígito son diferentes.")
    }

}

/*Ejercicio 23: 
    Desarrolla un programa que lea un número enteros de tres dígitos y determinar 
    cuantos dígitos primos tiene.
*/
function ejercicio23C(){
    let numero = esUnEntero("Ingrese un número de tres dígitos:")
        if(numero === null || numero  === undefined){
        return; 
    }

    if(!tieneNumeroDigitos(numero,3)){
        alert("Debe ingresar un número de tres dígitos."); 
        return; 
    }

    let sobrante = Math.abs(numero);
    let contador = 0;  

    while(sobrante>0){
        let ultimoDigito = sobrante%10; 
        if(esPrimo(ultimoDigito)){
            contador++
        }
        sobrante = Math.floor(sobrante/10);
    }
    alert((contador>0)? "El número tiene " + contador + " dígitos primos": "El número no tiene dígitos primos.");
}