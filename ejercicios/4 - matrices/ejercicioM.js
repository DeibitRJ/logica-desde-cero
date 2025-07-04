/*Ejercicio 01: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 4x4 y determine la posición (fila y columna) en la que se 
    encuentra el número mayor dentro de la matriz.
*/
function ejercicio01M(){
    let filas = 4; 
    let columnas = 4; 
    let matriz = []; 
    let mayor = 0; 
    let filaMayor = 0; 
    let columnaMayor = 0; 

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j <columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1; 
            fila.push(numero)
            if(numero > mayor){
                mayor = numero; 
                filaMayor = i; 
                columnaMayor = j;
            }
        }
        matriz.push(fila)
    }

    //Salida de texto para mostrar la matriz y el resultado
    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
    }

    texto += "\n Número mayor: " + mayor; 
    texto += "\n Fila: " + filaMayor + "    Columna: " + columnaMayor; 
    alert(texto);

}

/*Ejercicio 02: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 4x4 y determine cuantas veces se repite el número mayor
*/
function ejercicio02M(){
    let filas = 4; 
    let columnas = 4; 
    let matriz = []; 
    let mayor = 0; 
    let contador = 0; 

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j <columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1; 
            fila.push(numero)
            if(numero > mayor){
                mayor = numero; 
                contador = 1; 
            }else if(numero === mayor){
                contador++;
            }
            
        }
        matriz.push(fila)
    }
    //Salida de texto para mostrar la matriz y el resultado
    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
    }

    texto += "\n Número mayor: " + mayor; 
    texto += "\n Repite: " + contador; 
    alert(texto);
}

/*Ejercicio 03: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 3x4 y determine en qué posiciones se encuentran los números pares. 
*/
function ejercicio03M(){
    let filas = 3; 
    let columnas = 4; 
    let matriz = []; 
    let posiciones = [];
    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j <columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1; 
            fila.push(numero)
            if(numero%2 === 0){
                posiciones.push({numero: numero,fila: i, columna: j});
            }
        }
        matriz.push(fila)
    }
    //Salida de texto para mostrar la matriz y el resultado
    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
         
    }
    texto += "Números pares\n"
    for(let i = 0; i <posiciones.length; i++){
        texto += posiciones[i].numero + ", posición: [" + posiciones[i].fila + "] [" + posiciones[i].columna+ "]\n";
    }
    alert(texto);
}

/*Ejercicio 04: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 4x3 y determine en qué posiciones se encuentran los números primos. 
*/
function ejercicio04M(){
    let filas = 4; 
    let columnas = 3; 
    let matriz = []; 
    let posiciones = []; 
    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
            if(esprimo(numero)){
                posiciones.push({numero: numero, fila: i, columna: j});
            }
        }
        matriz.push(fila)
    }

    //Salida de texto para mostrar la matriz y el resultado
    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
         
    }
    texto += "Números primos\n"
    for(let i = 0; i <posiciones.length; i++){
        texto += posiciones[i].numero + ", posición: [" + posiciones[i].fila + "] [" + posiciones[i].columna+ "]\n";
    }
    alert(texto);

}

/*Ejercicio 05: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 4x3, sume los números de cada fila y determine cuál es la fila que tiene mayor suma. 
*/
function ejercicio05M(){
    let filas = 4; 
    let columnas = 3; 
    let matriz = []; 
    let mayorSuma = 0; 
    let filaMayor = -1; 

    for(let i = 0; i <filas; i++){
        let fila = []; 
        let sumaFila = 0; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
            sumaFila += numero; 
        }
        matriz.push(fila)
        if(sumaFila > mayorSuma){
            mayorSuma = sumaFila; 
            filaMayor = i;
        }
    }
    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
         
    }
    texto += "Suma de filas\n" + "La fila con mayor suma es la fila:" + filaMayor + " con suma:" + mayorSuma
    alert(texto)
}