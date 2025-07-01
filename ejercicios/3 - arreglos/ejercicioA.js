//Desarrollar un programa que genere aleatoriamente 8 números enteros, 
// los almacene en un arreglo y determine la posición en la que se 
// encuentra el número mayor dentro del vector.
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

//Desarrollar un programa que genere aleatoriamente 8 números enteros, 
// los almacene en un arreglo y determine la posición en la que se 
// encuentra el mayor número par dentro del vector.
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
