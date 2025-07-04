/*Ejercicio 01: 
    Desarrollar un programa que lea un número entero positivo e imprima 
    todos los números enteros comprendidos entre 1 y dicho número (inclusive).
*/
function ejercicio01B(){
    let numero = prompt("NÚMEROS DEL 1 AL N \nIngresar un número entero:");

    if(!/^-?\d+$/.test(numero)){
        alert("El valor ingresado no es un número");
        return;
    }
    numero = Number(numero);
    let resultado = "";

    for(let i = 1; i <= numero; i++){
        resultado += i + "\n";
    }
    alert("Números del 1 al " + numero + ":\n" + resultado);
}

/*Ejercicio 02: 
    Desarrollar un programa que lea un número entero positivo e imprima 
    todos los números pares comprendidos entre 1 y dicho número (inclusive).
*/
function ejercicio02B(){
    let numero = prompt("NÚMEROS PARES ENTRE 1 AL N \nIngresar un número entero:");

    if(!/^-?\d+$/.test(numero)){
        alert("El valor ingresado no es un número");
        return;
    }
    numero = Number(numero);
    let resultado = "";

    for(let i = 2; i <= numero; i+=2){
        resultado += i + "\n";
    }
    alert("Números pares entre 1 y " + numero + ":\n" + resultado);
}

/*Ejercicio 03: 
    Desarrollar un  programa que lea un número entero e imprima todos los divisores comprendidos 
    entre 1 y dicho número (inclusive).
// */
function ejercicio03B(){
    let numero = prompt("DIVISORES EXACTOS \nIngresar un número entero: "); 
    
    if(!/^-?\d+$/.test(numero)){
        alert("El valor ingresado no es un número");
        return;
    }

    numero = Number(numero);
    if(numero === 0){     
        alert("0 no tiene divisores");
        return;
    }
    
    divisores = []; 
    for(let i = 1; i<=numero; i++){
        if(numero%i === 0){
            divisores.push(i);
        }
    }
    alert("Divisores de " + numero + ":\n" + divisores.join(", "));
}

/*Ejercicio 04: 
    Desarrollar un  programa que lea dos números e imprima todos enteros comprendidos entre ellos. 
*/
function ejercicio04B(){
    let primero = esUnEntero("Ingrese el primer número");
    if (primero === null) return;
    let segundo = esUnEntero("Ingrese el segundo número");
    if (segundo === null) return;

    let mayor = Math.max(primero,segundo); 
    let menor = Math.min(primero, segundo); 
    let numeros = [];

    for(let i = menor+1; i<mayor; i++){
        numeros.push(i);
    }

    if(numeros.length === 0){
        alert("No hay números comprendidos entre " + primero + " y " + segundo)
    }else{
        alert("Número comprendidos entre " + primero + " y " + segundo
            + "\n" + numeros.join(", ")
        )
    }
}

/*Ejercicio 05: 
    Desarrolla un programa que lea dos números e imprima todos los número terminados en 4 comprendidos entre ellos.
*/
function ejercicio05B(){
    let primerNumero = esUnEntero("Ingrese el primer número: ")
    if (primerNumero === null) return;
    let segundoNumero = esUnEntero("Ingrese el segundo número: ")
    if (segundoNumero === null) return;

    let mayor = Math.max(primerNumero,segundoNumero); 
    let menor = Math.min(primerNumero, segundoNumero); 
    let numeros = [];
    let inicio; 
    if(menor%10 <= 4){
        inicio = menor + (4 - (menor%10))
    }else{
        inicio = menor + (14 - (menor%10)); 
    }
    for(let i = inicio; i<mayor; i+=10){
        numeros.push(i);
    }

    if(numeros.length === 0){
        alert("No hay números que terminen en 4 entre " + primerNumero + " y " + segundoNumero)
    }else{
        alert("Números que terminan en 4 entre " + primerNumero + " y " + segundoNumero
            + "\n" + numeros.join(", ")
        )
    }
    
}