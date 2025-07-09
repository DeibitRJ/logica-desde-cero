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
function ejercicio10A(){
    let numeros = [];
    let posiciones = [];

    for (let i = 0; i < 8; i++) {
        let aleatorio = Math.floor(Math.random() * 3000) + 1
        numeros.push(aleatorio);
        
        if(aleatorio >=1000){
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

