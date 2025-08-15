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

/*Ejercicio 06: 
    Desarrolla un programa que lea dos números de tres dígitos e imprima todos los número comprendidos entre ellos.
*/
function ejercicio06B(){
    let primerNumero = esUnEntero("Ingrese el primer número: ")
    let segundoNumero = esUnEntero("Ingrese el segundo número: ")
    

    if (primerNumero === null || segundoNumero === null) return;
    if(!tieneNumeroDigitos(primerNumero, 3) || !tieneNumeroDigitos(segundoNumero,3)){
        alert("Ambos números deben tener exactamente 3 dígitos."); 
        return; 
    }

    let mayor = Math.max(primerNumero,segundoNumero); 
    let menor = Math.min(primerNumero, segundoNumero); 
    let numeros = [];

    for(let i = menor; i<=mayor; i ++){
        numeros.push(i);
    }

    if(numeros.length === 0){
        alert("Ambos números son iguales")
    }else{
        alert("Números entre " + primerNumero + " y " + segundoNumero
            + "\n" + numeros.join(", ")
        )
    }
}

/*Ejercicio 07: 
    Desarrolla un programa que imprima todos los números comprendidos entre 1 y 100. 
*/
function ejercicio07B(){
    let resultado = ""; 
    for(let i = 1; i<= 100; i++){
        resultado += i + (i < 100? ", " : "");
    }

    alert("Números comprendidos entre 1 y 100\n" + resultado);

}

/*Ejercicio 08: 
    Desarrolla un programa que imprima todos los números pares comprendidos entre 20 y 200.
*/
function ejercicio08B(){
    let resultado = ""; 
    for(let i = 20; i<= 200; i+=2){
        resultado += i + (i<200? ", ":".");
    }
    alert("Números pares comprendidos entre 20 y 200\n" + resultado);
}

/*Ejercicio 09: 
    Desarrolla un programa que imprima todos los números terminados en 6 comprendidos entre 25 y 205
*/
function ejercicio09B(){
    let resultado = ""; 
    for(let i = 26; i <= 205; i+=10){
        resultado += i + ", ";
    }

    resultado = resultado.slice(0, -2);
    alert("Números que terminan en 6 comprendidos entre 25 y 205\n" + resultado);
}

/*Ejercicio 10: 
    Desarrolla un programa que lea un número e imprima la suma de todos los números comprendidos entre 1 y el número.
*/
function ejercicio10B(){
    let numero = esUnEntero("Ingrese un número de dos dígitos:");

    if(numero === null || numero  === undefined){
        return; 
    }

    if(numero <= 1){
        alert("Debe ingresar un número mayor que 1.");
        return; 
    }

    let suma = 0; 
    for(let i = 2; i< numero; i++){
        suma += i;
    }

    alert("La suma de los números comprendidos entre 1 y " + numero + " es: \n" + suma);
}

/*Ejercicio 11: 
    Desarrolla un programa que lea un número de dos dígitos e imprima todos los enteros comprendidos entre sus dígitos.
*/
function ejercicio11B(){
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

    let mayor = Math.max(primerDigito,segundoDigito); 
    let menor = Math.min(primerDigito, segundoDigito); 

    if(mayor - menor <=1){
        alert("No hay números enteros comprendidos entre los dígitos.");
        return; 
    }

    let resultado = "";
    for(let i = menor +1; i<mayor; i++){
        resultado += i + ", ";
    }
    resultado = resultado.slice(0, -2);
    alert("Los numeros comprendidos entre los dígitos  son: " + resultado);
}

/*Ejercicio 12: 
    Desarrolla un programa que lea un número de tres dígitos y determine si tine el dígito 1.
*/
function ejercicio12B(){
    let numero = esUnEntero("Ingrese un número de tres dígitos:");

    if(numero === null || numero  === undefined){
        return; 
    }

    if(!tieneNumeroDigitos(numero,3)){
        alert("Debe ingresar un número de tres dígitos."); 
        return; 
    }

    const digitos = numero.toString().split('');

    /*if(digitos.includes("1")){
        alert("El número contiene el dígito 1.");
        return;
        
    }else{
        alert("El número no contiene el dígito 1.")
    }*/
    
    let tieneUno = false; 

    for(let i = 0; i <digitos.length; i++){
        if(digitos[i] === "1"){
            tieneUno = true; 
            break; 
        }
    }

    if(tieneUno){
        alert("El número contiene el dígito 1.");
    }else{
        alert("El número no contiene el dígito 1.");
    }

}

/*Ejercicio 13: 
    Desarrolla un programa que lea un número e imprima todos los múltiplos de 5 comprendidos entre 1 y el número leído.
*/
function ejercicio13B(){
    let numero = esUnEntero("Ingrese un número entero:");

    if(numero === null || numero  === undefined){
        return; 
    }

    let resultado = ""
    for(let i = 5; i<= numero; i+=5){
        resultado += i + ", "
    }
    alert("Números entre 1 y " + numero + " múltiplos de 5. \n" + resultado)
}

/*Ejercicio 14: 
    Desarrolla un programa que imprima los primeros 25 múltiplos de 3.
*/
function ejercicio14B(){
    let resultado = "";

    for(let i = 1; i<=25; i++){
        resultado += i*3; 
        if(i<25) resultado += ", ";
    }
    alert("Los primeros 25 múltiplos de 3 son: " + resultado);
}


/*Ejercicio 15: 
    Desarrolla un programa que imprima la suma de los primeros 25 múltiplos de 3.
*/
function ejercicio15B(){
    let resultado = "";
    let suma = 0; 
    for(let i = 1; i<=25; i++){
        let multiplo = i*3;
        resultado += multiplo; 
        if(i<25) resultado += ", ";
        suma += multiplo;
    
    }
    alert("Los primeros 25 múltiplos de 3 son: " + resultado + 
        "\nLa suma de los múltiplos de 3 es: " + suma);
}

/*Ejercicio 16: 
    Desarrolla un programa que imprima el promedio de los n primeros múltiplos de 3.
*/
function ejercicio16B(){
    let numero = esUnEntero("Ingresar un número entero:");
    if(numero === null || numero  === undefined){
        return; 
    }
    let resultado = "";
    let suma = 0; 
    for(let i = 0; i<numero; i++){
        let multiplo = i *3; 
        suma += multiplo; 
        resultado += multiplo; 
        if(i<numero-1) resultado += ", ";
    }
    let promedio = suma/numero;

    let texto = "Los primeros " + numero +  " múltiplos de 3 son: " + resultado
    texto += "\nEl promedio es: " + promedio;
    alert(texto)
}

/*Ejercicio 17: 
    Promediar los x primeros múltiplos de 2 y determinar si ese promedio es mayor que los primeros 
    múltiplos de 5 para valores de "x" y "y" leidos.
*/
function ejercicio17B(){
    let cantidadMultiplosDos = esUnEntero("Ingresar un número entero:"); 
    let cantidadMultiplosCinco = esUnEntero("Ingresar un número entero:")
    let suma1 = 0; 
    let suma2 = 0;
    
    if(cantidadMultiplosDos === null || cantidadMultiplosDos  === undefined){
        return; 
    }
    if(cantidadMultiplosCinco === null || cantidadMultiplosCinco  === undefined){
        return; 
    }

    for(let i = 1; i<cantidadMultiplosDos; i++){
        suma1 += i*2;
    }
    for(let i = 1; i<cantidadMultiplosCinco; i++){
        suma2 += i*5;
    }

    let promedio1 = suma1/cantidadMultiplosDos;
    let promedio2 = suma2/cantidadMultiplosCinco;

    if(promedio1> promedio2){
        alert("El promedio de los múltiplos de 2 es mayor.")
    }else if (promedio2 > promedio1){
        alert("El promedio de los múltiplos de 5 es mayor.")
    }else{
        alert("Ambos promedios son iguales.")
    }
}

/*Ejercicio 18: 
    Desarrolla un programa que lea dos números enteros e imprime todos los múltiplos de 5 comprendidos entre ellos.
*/
function ejercicio18B(){
    let primero = esUnEntero("Ingrese el primer número");
    if (primero === null || primero === undefined) return;
    let segundo = esUnEntero("Ingrese el segundo número");
    if (segundo === null || segundo === undefined) return;


    let mayor = Math.max(primero,segundo); 
    let menor = Math.min(primero, segundo); 
    let residuo = menor%5
    let inicio = (residuo <=2) ? (menor - residuo): (menor + (5-residuo));
    let numeros = [];

    if(inicio > mayor){
        alert("No hay múltiplos de 5 entre el " + primero + " y " + segundo)
    }
    for(let i = inicio; i<=mayor; i+=5){
        numeros.push(i);
    }
    alert("Múltiplos de 5 entre el " + primero + " y " + segundo
            + "\n" + numeros.join(", "))
        
}

/*Ejercicio 19: 
    Desarrolla un programa que lea un número entero y determinar si es primo. 
*/
function ejercicio19B(){

    let numero = esUnEntero("Ingresar un número entero:");
    if(numero === null || numero  === undefined){
        return; 
    }

    let esPrimo = true; 

    if(numero <= 1){
        esPrimo = false; 
    }else{
       for(let i = 2; i <= Math.sqrt(numero); i++){
            if(numero%i === 0){
                esPrimo = false; 
                break;
            }
        } 
    }
    
    if(esPrimo){
        alert("El número es primo")
    }else{
        alert("El número no es primo")
    }
}

/*Ejercicio 20: 
    Desarrolla un programa que lea un número entero y determinar cuántos dígitos tiene. 
*/
function ejercicio20B(){
    let numero = esUnEntero("Ingresar un número entero:");
    if(numero === null || numero  === undefined){
        return; 
    }

    let digitos = Math.abs(numero).toString().length

    alert("El número tiene: " + digitos + " dígitos.")
}

/*Ejercicio 21: 
    Desarrolla un programa que lea un número entero y determinar a cuanto es igual la suma de sus dígitos.
*/
function ejercicio21B(){
    let numero = esUnEntero("Ingresar un número entero:");
    if(numero === null || numero  === undefined){
        return; 
    }

    let sobrante = numero; 
    let suma = 0; 

    while(sobrante>0){
        let ultimoDigito = sobrante%10; 
        suma += ultimoDigito;
        sobrante = Math.floor(sobrante/10);
    }
    alert("La suma de los dígitos de " + numero + " es: " + suma);
}

/*Ejercicio 22: 
    Desarrolla un programa que lea un número entero y determinar cuántas veces tiene el dígito 1. 
*/
function ejercicio22B(){
    let numero = esUnEntero("Ingresar un número entero:");
    if(numero === null || numero  === undefined){
        return; 
    }

    let sobrante = Math.abs(numero);
    let contador = 0;  

    while(sobrante>0){
        let ultimoDigito = sobrante%10; 
        if(ultimoDigito === 1){
            contador++
        }
        sobrante = Math.floor(sobrante/10);
    }
    alert("El dígito 1 aparece: " + contador + " vez/veces.");
}

/*Ejercicio 23: 
    Desarrolla un programa que lea un número entero y determinar si la suma de sus dígitos es tambien primo. 
*/
function ejercicio23B(){
    let numero = esUnEntero("Ingresar un número entero:");
    if(numero === null || numero  === undefined){
        return; 
    }

    numero = Math.abs(numero);

    let sobrante = numero; 
    let suma = 0; 

    while(sobrante>0){
        let ultimoDigito = sobrante%10; 
        suma += ultimoDigito;
        sobrante = Math.floor(sobrante/10);
    }
    
    let mensaje = "La suma de los dígitos de " + numero + " es " + suma + " y esa suma " + 
    (esPrimo(suma)? " es primo.":" no es primo.");

    alert(mensaje);

}

/*Ejercicio 24: 
    Desarrolla un programa que lea un número entero y determinar a cuanto es igual la suma de sus dígitos pares. 
*/
function ejercicio24B(){
    let numero = esUnEntero("Ingresar un número entero:");
    if(numero === null || numero  === undefined){
        return; 
    }

    numero = Math.abs(numero);

    let sobrante = numero; 
    let suma = 0; 

    while(sobrante>0){
        let ultimoDigito = sobrante%10; 
        if(ultimoDigito%2 === 0){
            suma += ultimoDigito;
        }
        sobrante = Math.floor(sobrante/10);
    }
    
    let mensaje = "";
    if(suma > 0){
        mensaje = "La suma de los dígitos pares de " + numero + " es " + suma + ".";
    }else{
        mensaje = "El número " + numero + " no tiene dígitos pares."
    }

    alert(mensaje);
}

/*Ejercicio 25: 
    Desarrolla un programa que lea un número entero y determinar a cuanto es igual el promedio entero de sus dígitos. 
*/
function ejercicio25B(){
    let numero = esUnEntero("Ingresar un número entero:");
    if(numero === null || numero  === undefined){
        return; 
    }

    numero = Math.abs(numero);

    let sobrante = numero; 
    let suma = 0; 

    while(sobrante>0){
        let ultimoDigito = sobrante%10; 
        suma += ultimoDigito;
        sobrante = Math.floor(sobrante/10);
    }

    let promedio = Math.floor(suma/(numero.toString().length))
    
    let mensaje = "El promedio de sus dígitos es: " + promedio;
    
    alert(mensaje);
}

/*Ejercicio 26: 
    Desarrolla un programa que lea un número entero y determinar cual es el mayor de sus dígitos.
*/
function ejercicio26B(){
    let numero = esUnEntero("Ingresar un número entero:");
    if(numero === null || numero  === undefined){
        return; 
    }

    numero = Math.abs(numero);

    let sobrante = numero; 
    let digitos = []; 

    while(sobrante>0){
        let ultimoDigito = sobrante%10; 
        digitos.push(ultimoDigito);
        sobrante = Math.floor(sobrante/10);
    }

    let mayorDigito = Math.max(...digitos);
    
    let mensaje = "El mayor dígito del número es: " + mayorDigito;
    
    alert(mensaje);
}

/*Ejercicio 27: 
    Desarrolla un programa que lea dos números enteros y determinar cual de los dos tiene la mayor cantidad de dígitos.
*/
function ejercicio27B(){
    let numero1 = esUnEntero("Ingrese el primer número entero: ")
    let numero2 = esUnEntero("Ingrese el segundo número entero: ")

    let digitos1 = Math.abs(numero1).toString().length;
    let digitos2 = Math.abs(numero2).toString().length;

    if(digitos1 == digitos2){
        alert("Los dígitos de los dos números son iguales")
    }else if(digitos1> digitos2) {
        alert("El primer número tiene más dígitos que el segundo.")
    }else{
        alert("El segundo número tiene más dígitos quel el primero.")
    }
}

/*Ejercicio 28: 
    Desarrolla un programa que lea dos números enteros y determinar cual 
    de los dos tiene la mayor cantidad de dígitos primos.
*/
function ejercicio28B(){
    let numero1 = esUnEntero("Ingrese el primer número entero: ")
    let numero2 = esUnEntero("Ingrese el segundo número entero: ")

    let sobrante1 = Math.abs(numero1);
    let sobrante2 = Math.abs(numero2);

    let contadorN1 = 0; 
    let contadorN2 = 0; 

    while(sobrante1>0){
        let ultimoDigito = sobrante1%10; 
        if(esPrimo(ultimoDigito)){
            contadorN1++;
        }
        sobrante1 = Math.floor(sobrante1/10);
    }
    while(sobrante2>0){
        let ultimoDigito = sobrante2%10; 
        if(esPrimo(ultimoDigito)){
            contadorN2++;
        }
        sobrante2 = Math.floor(sobrante2/10);
    }

    if(contadorN1 === contadorN2){
        alert("Los números tiene la misma cantidad de dígitos primos")
    }else if(contadorN1>contadorN2){
        alert("El primer número tiene más dígitos primos que el segundo número.")
    }else{
        alert("El segundo número tiene más dígitos primos que el primer número.")
    }
}

/*Ejercicio 30: 
    Desarrolla un programa que lea un número entero y mostrar todos los dívisores del número. 
*/
function ejercicio30B(){
    let numero = esUnEntero("Ingrese un número entero")

    let divisores = ""; 
    for(let i = 1; i<= numero; i++){
        if(numero%i === 0){
            divisores += i + " "
        }
    }
    alert("Los divisores de " + numero + " son: \n" + divisores)
}

/*Ejercicio 31: 
    Desarrolla un programa que lea números hastas que digiten 0 y determinar a cuánto es igual el promedio 
    de los números terminado en 5. 
*/
function ejercicio31B(){
    let numero; 
    let suma = 0; 
    let contador = 0; 

    while(true){
        numero = esUnEntero("Ingres un número entero");
        if(numero === 0) break; 

        if(numero%10 === 5){
            suma += numero; 
            contador++;
        }
    }


    if(contador > 0){
        let promedio = suma/contador;
        alert("El promedio de los números que terminan en 5 es: " + promedio);
    }else{
        alert("No se ingresaron números que terminen en 5.")
    }
}

/*Ejercicio 32: 
    Desarrolla un programa que lea números hastas que digiten 0 y determinar a cuánto es igual el promedio 
    de los números primos leídos. 
*/
function ejercicio32B(){
    let numero; 
    let suma = 0; 
    let contador = 0; 

    while(true){
        numero = esUnEntero("Ingres un número entero");
        if(numero === null || numero  === undefined){
            return; 
        }   

        if(numero === 0) break; 

        if(esPrimo(numero)){
            suma += numero; 
            contador++;
        }
    }


    if(contador > 0){
        let promedio = suma/contador;
        alert("El promedio de los números primos es: " + promedio);
    }else{
        alert("No se ingresaron números primos.")
    }
}

/*Ejercicio 33: 
    Desarrolla un programa que determine el número primo más cercano al tope de los números enteros cortos (32768). 
*/
function ejercicio33B(){

    const numero = 32768;
    let arriba = numero+1; 
    let abajo = numero-1; 
    let primoArriba = null; 
    let primoAbajo = null; 

    while(arriba<Number.MAX_SAFE_INTEGER){
        if(esPrimo(arriba)){
            primoArriba = arriba; 
            break;
        }
        arriba++;
    }

    while(abajo>1){
        if(esPrimo(abajo)){
            primoAbajo = abajo; 
            break;
        }
        abajo--;
    }

    const distArriba = Math.abs(primoArriba-numero);
    const distAbajo = Math.abs(numero-primoAbajo);

    if(distArriba < distAbajo){
        alert("El número primo más cercano a " + numero + " es: " + primoArriba)
    }else if(distAbajo <distArriba){
        alert("El número primo más cercano a " + numero + " es: " + primoAbajo)
    }else{
        alert("Los dos números primos más cercanos a " + numero + "s on: " + primoAbajo + " y " + primoArriba);
    }
}

/*Ejercicio 34: 
    Desarrolla un programa que genere los números del 1 al 10 utilizanod un ciclo que vaya de 10 a 1. 
*/
function ejercicio34B(){
    let secuencia = [];
    for(let i = 10; i>0; i--){
        let numero = 11 - i
        secuencia.push(numero); 
    }
    alert("La secuencia obtenida es: " + secuencia.join(", "));
}

/*Ejercicio 35: 
    Desarrolla un programa que lea dos números enteros y calcule el producto entre el primer dígito de cada uno. 
*/
function ejercicio35B(){
    let numero1 = esUnEntero("Ingrese el primer número entero: ")
    let numero2 = esUnEntero("Ingrese el segundo número entero: ")
    
    let producto = primerDigito(numero1) * primerDigito(numero2);

    alert("El producto de el primer dígito de cada uno es: " + producto);
}

function primerDigito(n){
    let numero = Math.floor(n);
    while(numero > 10){
        numero = Math.floor(numero/10);  
    }
    return numero;
}

/*Ejercicio 36: 
    Desarrolla un programa que muestre la tabla de multiplicar del 5. 
*/
function ejercicio36B(){
    let tabla = "";
    for(let i = 0; i<=12; i++){
        tabla += "5 * " + i + " = " + (5*i) + "\n";
    }
    alert("La tabla del 5 \n" + tabla);
}

/*Ejercicio 37: 
    Desarrolla un programa que muestre la tabla de multiplicar del 1 al 10. 
*/
function ejercicio37B(){
    let resultado = ""
    for(let i = 1; i<= 10; i++){
        resultado += "Tabla del " + i + "\n"
        for(let j = 0;  j<= 12; j++){
            resultado += `${i} * ${j} = ${i*j} \n` 
        }
    }
    alert(resultado);
    console.log(resultado);
}

/*Ejercicio 38: 
    Desarrolla un programa que lea un número entero y muestre su tabla de múltiplicar. 
*/
function ejercicio38B(){
    let numero = esUnEntero("Ingrese un número entero: ");
    let resultado = ""

    resultado += "Tabla del " + numero + "\n"

    for(let i = 0;  i<= 12; i++){
        resultado += `${i} * ${numero} = ${i*numero} \n` 
    }
    alert(resultado);

}

/*Ejercicio 39: 
    Desarrolla un programa que muestre la serie de fibonacci hasta llegar o sobrepasar el número 10000. 
*/
function ejercicio39B(){
    let fibonacci = [0,1];

    while(true){
        let siguiente = fibonacci[fibonacci.length -1] + fibonacci[fibonacci.length-2];
        fibonacci.push(siguiente);
        if(siguiente >= 10000) break;
    }

    alert(fibonacci.join(", "))
}

/*Ejercicio 40: 
    Desarrolla un programa que lea un número entero de dos dígitos y determinar si pertenece a la serie 
    de fibonacci. 
*/
function ejercicio40B() {
    let numero = esUnEntero("Ingrese un número entero de dos dígitos: ")

    if (numero === null || !tieneNumeroDigitos(numero, 2)) {
        return;
    }

    if(esFibonacci(numero)){
        alert("El número pertenece a Fibonacci.")
    }else{
        alert("El número no pertence a Fibonacci.")
    }

}

/*Ejercicio 41: 
    Desarrolla un programa que determine a cuanto es igual la suma de los elementos de la
    serie de Fibonacci entre 0 y 100. 
*/
function ejercicio41B() {
    let fibonacci = [0,1];
    let suma = 0; 
    suma += fibonacci[0] + fibonacci[1];

    while(true){
        let siguiente = fibonacci[fibonacci.length -1] + fibonacci[fibonacci.length-2];
        fibonacci.push(siguiente);
        if(siguiente > 100) break;
        suma += siguiente; 
    }

    alert("La suma de los elementos de la serie de fibonacci entre 0 y 100 es: " + suma);

}


/*Ejercicio 42: 
    Desarrolla un programa que determine a cuanto es igual el promedio entero de los elementos de la
    serie de Fibonacci entre 0 y 1000. 
*/
function ejercicio42B() {
    let fibonacci = [0,1];
    let suma = 0; 
    
    suma += fibonacci[0] + fibonacci[1];

    while(true){
        let siguiente = fibonacci[fibonacci.length -1] + fibonacci[fibonacci.length-2];
        fibonacci.push(siguiente);
        if(siguiente > 1000) break;
        suma += siguiente; 
    }

    let promedio = Math.floor(suma/(fibonacci.length));

    alert("El promedio de los elementos de la serie de fibonacci entre 0 y 1000 es: " + promedio);

}

/*Ejercicio 43: 
    Desarrolla un programa que determine  cuantos elementos de la
    serie de Fibonacci hay entre 1000 y 2000. 
*/
function ejercicio43B() {
    let contador = 0; 
    for(let i = 1000; i<=2000; i++){
        if(esFibonacci(i)){
            contador++;
        }
    }

    alert("La cantidad de elementos que pertenencen a la serie de Fibonacci en el rango de 1000 a 2000 es: " + contador);
}

/*Ejercicio 44: 
    Desarrolla un programa que lea un número entero determine su factorial. 
*/
function ejercicio44B(){
    let numero = esUnEntero("Ingrese un número entero: ")
    if (numero === null || numero === undefined) {
        return;
    }
    let factorial = 1; 
    for(let i = 1; i<= numero; i++){
        factorial *= i; 
    }

    alert(`El factorial de ${numero} es: ${factorial}`)
}

/*Ejercicio 45: 
    Desarrolla un programa que lea un número y calcule el factorial a todos los enteros comprendidos
    entre 1 y el número leido. 
*/
function ejercicio45B(){
    let numero = esUnEntero("Ingrese un número entero: ")
    if (numero === null || numero === undefined) {
        return;
    }

    let mensaje = ""; 


    for(let i = 1; i<=numero; i++){
        let factorial = 1; 
        for(let j = 1; j<= i; j++){
            factorial *= j; 
        }
        mensaje += `\nFactorial de ${i}: ${factorial}`
    }

    alert(mensaje);
    
}

/*Ejercicio 46: 
    Desarrolla un programa que lea un número y calcule el promedio entero de los factoriales de todos los enteros comprendidos
    entre 1 y el número leido. 
*/
function ejercicio46B(){
    let numero = esUnEntero("Ingrese un número entero: ")
    if (numero === null || numero === undefined) {
        return;
    }

    let mensaje = ""; 
    let suma = 0; 

    for(let i = 1; i<=numero; i++){
        let factorial = 1; 
        for(let j = 1; j<= i; j++){
            factorial *= j; 
        }
        suma += factorial
    }

    let promedio = Math.floor(suma/numero);

    alert("El promedio entero de los factoriales entre 1 y el número leído es: " + promedio);
    
}

/*Ejercicio 47: 
    Desarrolla un programa que lea un número y calcule la sumatoria de todos los factoriales de todos los enteros comprendidos
    entre 1 y el número leido. 
*/
function ejercicio47B(){
    let numero = esUnEntero("Ingrese un número entero: ")
    if (numero === null || numero === undefined) {
        return;
    }
    let suma = 0; 

    for(let i = 1; i<=numero; i++){
        let factorial = 1; 
        for(let j = 1; j<= i; j++){
            factorial *= j; 
        }
        suma += factorial
    }
    alert("La sumatoria de los factoriales entre 1 y el número leído es: " + suma);
}