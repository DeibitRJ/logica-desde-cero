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
    //Buscar el número mayor su posición 
    for (let i = 1; i <numeros.length; i++){
        if(numeros[i] > mayor){
            mayor = numeros[i]; 
            posicion = i; 
        }
    }
    alert("Lista de números: " + numeros.join(", ") + 
    "\nEl número  mayor es: " + mayor + 
    "\nSe encuentra en la posición: " + posicion)
}