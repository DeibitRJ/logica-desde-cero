/*Ejercicio 01: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine la posición en la que se 
    encuentra el número mayor dentro del vector.
*/
function ejercicio01A() {
    let numeros = [];

    //Genera números aleatorios
    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 100) + 1;
        numeros.push(aleatorio);
    }

    let mayor = numeros[0];
    let posicion = 0;
    //Buscar el número mayor y su posición 
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
            posicion = i;
        }
    }
    alert("Lista de números: " + numeros.join(", ") +
        "\nEl número  mayor es: " + mayor +
        "\nSe encuentra en la posición: " + posicion)
}

/*Ejercicio 02: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine la posición en la que se 
    encuentra el mayor número par dentro del vector.
*/
function ejercicio02A() {
    let numeros = [];

    //Genera números aleatorios
    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 100) + 1;
        numeros.push(aleatorio);
    }

    let mayor = 0;
    let posicion = -1;
    //Buscar el número mayor y su posición 
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0 && numeros[i] > mayor) {
            mayor = numeros[i];
            posicion = i;
        }
    }

    if (posicion === -1) {
        alert("Lista de números: " + numeros.join(", ") +
            "\nNo se encontró ningun número par.")
    } else {
        alert("Lista de números: " + numeros.join(", ") +
            "\nEl mayor número par es: " + mayor +
            "\nSe encuentra en la posición: " + posicion)
    }
}

/*Ejercicio 03: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine la posición en la que se 
    encuentra el mayor número primo dentro del vector.
*/
function ejercicio03A() {
    let numeros = [];
    let primos = [];

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 100) + 1;
        if (esPrimo(aleatorio)) {
            primos.push(aleatorio)
        }
        numeros.push(aleatorio);

    }

    if (primos.length != 0) {
        let primoMayor = Math.max(...primos);
        let posicion = numeros.indexOf(primoMayor);
        alert("Lista de números: " + numeros.join(", ") +
            "\nEl primo mayor es: " + primoMayor + "\nPosición: " + posicion)
    } else {
        alert("Lista de números: " + numeros.join(", ") +
            "\nNo hay primos.")
    }

}

/*Ejercicio 04: 
    Desarrollar un programa que genere los 8 primero elementos de la serie de Fibonacci 
    y los imprima.
*/
function ejercicio04A() {
    let fibonacci = [];

    for (let i = 0; i < 8; i++) {
        if (i < 2) {
            fibonacci.push(i);
        } else {
            let valor = fibonacci[i - 1] + fibonacci[i - 2];
            fibonacci.push(valor);
        }
    }
    alert("FIBONACCI\n" + fibonacci.join(", "));
}

/*Ejercicio 05: 
    Desarrollar un programa que almacene e imprima los números primos comprendidos entre 100 y 300.
*/
function ejercicio05A() {
    let primos = [];
    for (let i = 100; i <= 300; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    alert("NÚMEROS PRIMOS ENTRE 100 Y 300\n" + primos.join(", "));
}

/*Ejercicio 06: 
    Desarrollar un programa que lea dos números e imprima los primos comprendidos entre ellos. 
 */
function ejercicio06A() {
    let primos = [];
    let primerNumero = esUnEntero("Ingrese el primer número: ");
    let segundoNumero = esUnEntero("Ingrese el segundo número: ");

    if (primerNumero === null || segundoNumero === null) return;
    if (primerNumero === segundoNumero) {
        alert("Ambos números son iguales, no hay intervalo para evaluar.");
    }

    let mayor = Math.max(primerNumero, segundoNumero);
    let menor = Math.min(primerNumero, segundoNumero);

    for (let i = menor + 1; i < mayor; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }

    if (primos.length === 0) {
        alert("No hay números primos entre " + primerNumero + " y " + segundoNumero);
    } else {
        alert("Números primos entre " + primerNumero + " y " + segundoNumero
            + "\n" + primos.join(", ")
        );
    }
}

/*Ejercicio 07: 
    Desarrollar un programa que genere aleatoriamente 20 números enteros, 
    los almacene en un arreglo y determine en que posiciones se encuentra 
    el número mayor.
*/
function ejercicio07A() {
    let numeros = [];
    let mayores = [];
    let mayor = 0;

    for (let i = 0; i < 20; i++) {
        let aleatorio = Math.floor(Math.random() * 100) + 1;
        numeros.push(aleatorio);
        if (mayor < aleatorio) {
            mayores.length = 0;
            mayor = aleatorio;
            mayores.push(i);
        } else if (mayor === aleatorio) {
            mayores.push(i);
        }
    }

    alert("Lista de números: " + numeros.join(", ") +
        "\n" + "Posiciones de los mayores: " + mayores.join(", "));

}

/*Ejercicio 08: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine en qué posiciones se encuentran 
    los números terminados en 4.
*/
function ejercicio08A() {
    let numeros = [];
    let terminanEnCuatro = [];

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 100) + 1
        numeros.push(aleatorio);
        if (aleatorio % 10 === 4) {
            terminanEnCuatro.push(i);
        }
    }


    if (terminanEnCuatro.length === 0) {
        alert("En el arreglo no hay números que terminen en 4");
    } else {
        alert("Lista de números: " + numeros.join(", ") +
            "\n" + "Los números que se encuentran en las posiciones: "
            + terminanEnCuatro.join(", ") + " terminan en 4.");
    }
}

/*Ejercicio 09: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine cuantas veces se repite el mayor.
*/
function ejercicio09A() {
    let contador = 0;
    let numeros = [];
    let mayor = 0;

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 100) + 1
        numeros.push(aleatorio);
        if (mayor < aleatorio) {
            contador = 1;
            mayor = aleatorio;
        } else if (mayor === aleatorio) {
            contador++
        }
    }


    alert("Lista de números: " + numeros.join(", ") +
        "\n" + "Número de veces que se repite el mayor: "
        + contador);

}

/*Ejercicio 10: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine en qué posiciones se encuentran
    los números con mas de 3 dígitos.
*/
function ejercicio10A() {
    let numeros = [];
    let posiciones = [];

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 3000) + 1
        numeros.push(aleatorio);

        if (aleatorio >= 1000) {
            posiciones.push(i);
        }
    }

    if (posiciones.length === 0) {
        alert("En el arreglo no hay números con más de tres dígitos");
    } else {
        alert("Lista de números: " + numeros.join(", ") +
            "\n" + "Los números con más de tres dígitos se encuentran en las posiciones: "
            + posiciones.join(", "));
    }
}


/*Ejercicio 11: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine cuantos números tienen menos de 3 dígitos.
*/
function ejercicio11A() {
    let numeros = [];
    let contador = 0;

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 1000) + 1
        numeros.push(aleatorio);

        if (aleatorio < 100) {
            contador++;
        }
    }

    if (contador === 0) {
        alert("En el arreglo no hay números con menos de tres dígitos");
    } else {
        alert("Lista de números: " + numeros.join(", ") +
            "\n" + "La cantidad de números con menos de tres dígitos es: "
            + contador);
    }
}

/*Ejercicio 12: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine el promedio entero de los datos.
*/

function ejercicio12A() {
    let numeros = [];
    let suma = 0;
    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 100) + 1
        numeros.push(aleatorio);
        suma += aleatorio;
    }

    let promedio = Math.floor(suma / numeros.length);

    alert("Lista de números: " + numeros.join(", ") +
        "\n" + "El promedio entero de los números es: "
        + promedio);
}

/*Ejercicio 13: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine si el promedio entero de los datos
    está almacenado en el arreglo.
*/
function ejercicio13A() {
    let numeros = [];
    let suma = 0;
    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 100) + 1
        numeros.push(aleatorio);
        suma += aleatorio;
    }

    let promedio = Math.floor(suma / numeros.length);
    let incluye = numeros.includes(promedio)

    let mensaje = "Lista de números: " + numeros.join(", ") +
        "\nEl valor del promedio" + (incluye ? " está" : " no está") + " en el arreglo\n" + "El promedio entero de los números es: "
        + promedio;

    alert(mensaje);
}

/*Ejercicio 14: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine cuántas veces se repite el promedio entero de los datos
    en el arreglo.
*/
function ejercicio14A() {
    let numeros = [];
    let suma = 0;

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 100) + 1
        numeros.push(aleatorio);
        suma += aleatorio;
    }

    let promedio = Math.floor(suma / numeros.length);
    let contador = 0;

    for (let numero of numeros) {
        if (promedio === numero) {
            contador++;
        }
    }

    let mensaje = "Lista de números: " + numeros.join(", ") +
        "\nEl valor del promedio" + (contador > 0 ? " está" : " no está") + " en el arreglo\n" +
        "El promedio entero de los números es: " + promedio +
        "\nEl promedio se repite: " + contador + " vez" + (contador !== 1 ? "es" : "");

    alert(mensaje);
}

/*Ejercicio 15: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine cuántos datos almacenados son múltiplos de 3.
*/
function ejercicio15A() {
    let numeros = [];
    let contador = 0;

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 100) + 1
        numeros.push(aleatorio);
        if (aleatorio % 3 === 0) {
            contador++;
        }
    }
    alert("Números generados: " + numeros.join(", ") + "\nCantidad de múltiplos de 3: " + contador);
}

/*Ejercicio 16: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine cuáles son los datos almacenados múltiplos de 3.
*/
function ejercicio16A() {
    let numeros = [];
    let multiplos = [];

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 100) + 1
        numeros.push(aleatorio);
        if (aleatorio % 3 === 0) {
            multiplos.push(aleatorio);
        }
    }

    let mensaje = "Números generados: " + numeros.join(", ");
    mensaje += "\nMúltiplos de 3: " + (multiplos.length > 0 ? multiplos.join(", ") : "Ninguno.");
    alert(mensaje);
}


/*Ejercicio 17: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine cuáles números negativos hay.
*/
function ejercicio17A() {
    let numeros = [];
    let contador = 0;

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 101) - 50;
        numeros.push(aleatorio);
        if (aleatorio < 0) {
            contador++;
        }
    }

    let mensaje = "Números generados: " + numeros.join(", ");
    mensaje += "\nCantidad de negativos: " + (contador > 0 ? contador : "Ninguno.");
    alert(mensaje);

}

/*Ejercicio 18: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine en que posiciones estan los números positivos.
*/
function ejercicio18A() {
    let numeros = [];
    let posiciones = [];

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 101) - 50;
        numeros.push(aleatorio);
        if (aleatorio > 0) {
            posiciones.push(i);
        }
    }

    let mensaje = "Números generados: " + numeros.join(", ");
    mensaje += "\nPosiciones de los positivos: " + (posiciones.length > 0 ? posiciones.join(", ") : "Ninguna.");
    alert(mensaje);

}

/*Ejercicio 19: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine cuál es el número menor.
*/
function ejercicio19A() {
    let numeros = [];
    let menor = Infinity;

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 100) + 1;
        numeros.push(aleatorio);
        if (aleatorio < menor) {
            menor = aleatorio
        }
    }

    let mensaje = "Números generados: " + numeros.join(", ");
    mensaje += "\nEl número menor es: " + menor;
    alert(mensaje);

}

/*Ejercicio 20: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine en qué posición esta el menor número primo. 
*/
function ejercicio20A() {
    let numeros = [];
    let menor = Infinity;
    let posMenor = -1;

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 100) + 1;
        numeros.push(aleatorio);
        if (aleatorio < menor && esPrimo(aleatorio)) {
            menor = aleatorio
            posMenor = i;
        }
    }

    let mensaje = "Números generados: " + numeros.join(", ");
    mensaje += "\nEl número menor primo es: " + menor + "y esta en la posición: " + posMenor;
    alert(mensaje);
}

/*Ejercicio 21: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine en qué posición esta el número cuya suma de dígitos sea la mayor.
*/
function ejercicio21A() {
    let numeros = [];
    let posicion = -1;
    let mayorSumaDigitos = 0; 

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 100) + 1;
        numeros.push(aleatorio);

        let sobrante = aleatorio;
        let sumaDigitos = 0; 

        while (sobrante > 0) {
            let ultimoDigito = sobrante % 10;
            sumaDigitos += ultimoDigito;
            sobrante = Math.floor(sobrante / 10);
        }

        if(mayorSumaDigitos < sumaDigitos){
            mayorSumaDigitos = sumaDigitos; 
            posicion = i;
        }
    }

    let mensaje = "Números generados: " + numeros.join(", ");
    mensaje += "\nEl número con la mayor suma de dígitos esta en la posición: " +  posicion;
    alert(mensaje);
}

/*Ejercicio 22: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine cuáles son los múltiplos de 5 y en qué posiciones están. 
*/
function ejercicio22A(){
    let numeros = [];
    let multiplos = [];

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 100) + 1;
        numeros.push(aleatorio);
        if(aleatorio%5 === 0){
            multiplos.push({valor: aleatorio, posicion: i});
        }
    }

    let mensaje = "Números generados: \n" + numeros.join(", ");
    
    if(multiplos.length === 0){
        mensaje += "\nNo se encontraron múltiplos de 5."
    }else{
        mensaje += "\nMúltiplos de 5 y sus posiciones: ";
        multiplos.forEach(item => {
            mensaje += `\n  - Número: ${item.valor}, Posición: ${item.posicion}`;
        });
    }
    alert(mensaje);
}

/*Ejercicio 23: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine si existe al menos un número repetido. 
*/
function ejercicio23A(){
    let numeros = [];

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 100) + 1;
        numeros.push(aleatorio);
    }

    let repetidos = hayRepetidos(numeros);
    let mensaje = "El arreglo generado es: " + numeros.join(", ") +"\n"
    + (repetidos? "Sí hay números repetidos." : "No hay números repetidos.");

    alert(mensaje);
}

/*Ejercicio 24: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine en qué posición esta el número con más digitos. 
*/
function ejercicio24A(){
    let numeros = [];
    let mayor = -Infinity;
    let  posicion = -1;
    let maxDigitos = -1;
    let numeroConMasDigitos = -1; 

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 100) + 1;
        numeros.push(aleatorio);

        let cantidadDigitos = aleatorio.toString().length;

        if(cantidadDigitos > maxDigitos){
            maxDigitos = cantidadDigitos;
            numeroConMasDigitos = aleatorio;
            posicion = i; 
        }
    }

    let mensaje = "El arreglo generado es: " + numeros.join(", ") +"\n"
    + "El número con más dígitos es " + numeroConMasDigitos + " y esta en la posición " + posicion + ".";

    alert(mensaje);
}

/*Ejercicio 25: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine cúantos de los números leídos 
    son números primos terminados en 3.
*/
function ejercicio25A(){
    let numeros = [];
    let contador = 0; 

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 100) + 1;
        numeros.push(aleatorio);
        if(esPrimo(aleatorio) && aleatorio%10 === 3){
            contador++
        }
    }

    let mensaje = "Números generados: \n" + numeros.join(", ");
    
    if(contador === 0){
        mensaje += "\nNo se encontraron números primos terminados en 3."
    }else{
        mensaje += "\nCantidad de números primos terminados en 3: " + contador;
        
    }
    alert(mensaje);
}

/*Ejercicio 26: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine el factorial a cada uno de los números leídos 
    almacenandolos en otro vector. 
*/
function ejercicio26A(){
    let numeros = [];
    let factoriales = []; 

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 7) + 1;
        numeros.push(aleatorio);
        factoriales.push(factorial(aleatorio));
    }

    alert("Arreglo: " + numeros.join(", ") + "\nFactoriales: " + factoriales.join(", "));

}

/*Ejercicio 27: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine a cuanto es igual el promedio entero 
    de los factoriales de cada uno de los números leídos. 
*/
function ejercicio27A(){
    let numeros = []; 
    let suma = 0;

    for(let i = 0; i<8; i++){
        let aleatorio = Math.floor(Math.random()*7)+1; 
        numeros.push(aleatorio);
        suma += factorial(aleatorio);
    }

    let promedio = Math.floor(suma/(numeros.length));
    let mensaje = "Arreglo: " + numeros.join(", ")
    mensaje += "\nEl promedio de los factoriales de cada uno de los números leídos es: " + promedio
    alert(mensaje);
}

/*Ejercicio 28: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo e imprima todos los enteros comprendidos entre 1 y 
    cada uno de los números alamacenados en el vector. 
*/
function ejercicio28A(){
    let numeros = []; 
    let suma = 0;
    let listaNumeros = "";

    for(let i = 0; i<8; i++){
        let aleatorio = Math.floor(Math.random()*10)+1; 
        numeros.push(aleatorio);
        listaNumeros += "Posicion: " +  i+ ": " + secuenciaNumeros(aleatorio) + "\n"
    }
    alert("Arreglo: " + numeros.join(", ") + "\nLos enteros comprendidos entre 1 y cada uno de los números son: \n" + listaNumeros)
}

function secuenciaNumeros(numero){
    let secuencia = "";
    for(let i = 1; i<=numero; i++){
        secuencia += i + " "
    }
    return secuencia;
}

/*Ejercicio 29: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo e imprima todos los enteros comprendidos entre 1 y 
    cada uno de los dígios de cada uno de los números alamcenados en el vector. 
*/
function ejercicio29A(){
    let numeros = []; 

    for(let i = 0; i<8; i++){
        let aleatorio = Math.floor(Math.random()*100)+1; 
        numeros.push(aleatorio);

    }    

    let mensaje = "Números generados: " + numeros.join(", ");

    for(let num of numeros){
        let digitos = num.toString().split('').map(Number);

        mensaje+= "\nNúmero: " + num + "\n";

        for(let digito of digitos){
            let secuencia = '';
            for(let i = 1; i <= digito; i++){
                secuencia += i + ' ';
            }
            mensaje += "Dígito " + digito + ": " + secuencia + "\n";
        }
    }

    alert(mensaje)
}

