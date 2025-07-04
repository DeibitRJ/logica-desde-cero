/*Ejercicio 01: 
    Desarrollar un programa que genere aleatoriamente 8 números enteros, 
    los almacene en un arreglo y determine la posición en la que se 
    encuentra el número mayor dentro del vector.
*/
function ejercicio01A(){
    let numeros = [];

    //Genera números aleatorios
    for(let i = 0; i < 8; i++){
        let aleatorio = Math.floor(Math.random() * 100) + 1; 
        numeros.push(aleatorio);
    }

    let mayor = numeros[0]; 
    let posicion = 0; 
    //Buscar el número mayor y su posición 
    for (let i = 0; i <numeros.length; i++){
        if(numeros[i] > mayor){
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
function ejercicio02A(){
    let numeros = [];

    //Genera números aleatorios
    for(let i = 0; i < 8; i++){
        let aleatorio = Math.floor(Math.random() * 100) + 1; 
        numeros.push(aleatorio);
    }

    let mayor = 0; 
    let posicion = -1; 
    //Buscar el número mayor y su posición 
    for (let i = 0; i <numeros.length; i++){
        if(numeros[i]%2 === 0 && numeros[i] > mayor){
            mayor = numeros[i]; 
            posicion = i; 
        }
    }

    if(posicion === -1){
        alert("Lista de números: " + numeros.join(", ") +
        "\nNo se encontró ningun número par.")
    }else{
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
function ejercicio03A(){
    let numeros = []; 
    let primos = [];

    for(let i = 0; i <8; i ++){
        let aleatorio = Math.floor(Math.random()*100)+1;
        if(esPrimo(aleatorio)){
            primos.push(aleatorio)
        } 
        numeros.push(aleatorio);
        
    }

    if(primos.length != 0){
        let primoMayor = Math.max(...primos); 
        let posicion = numeros.indexOf(primoMayor);
        alert("Lista de números: " + numeros.join(", ") + 
        "\nEl primo mayor es: " + primoMayor + "\nPosición: " + posicion)
    }else{
        alert("Lista de números: " + numeros.join(", ") + 
        "\nNo hay primos.")
    }
    
}

/*Ejercicio 04: 
    Desarrollar un programa que genere los 8 primero elementos de la serie de Fibonacci 
    y los imprima.
*/
function ejercicio04A(){
    let fibonacci = []; 

    for(let i = 0; i<8; i++){
        if(i < 2){
            fibonacci.push(i);
        }else{
            let valor = fibonacci[i-1] + fibonacci[i-2];
            fibonacci.push(valor);
        }
    }
    alert("FIBONACCI\n" + fibonacci.join(", "));
}

/*Ejercicio 05: 
    Desarrollar un programa que almacene e imprima los números primos comprendidos entre 100 y 300.
*/
function ejercicio05A(){
    let primos = []; 
    for(let i = 100; i<=300; i++){
        if(esPrimo(i)){
            primos.push(i)
        }
    }
    alert("NÚMEROS PRIMOS ENTRE 100 Y 300\n" + primos.join(", "));
}