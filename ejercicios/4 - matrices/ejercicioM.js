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

/*Ejercicio 06: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 4x4, y determine el promedio de los números mayores de cada fila.  
*/
function ejercicio06M(){
    let filas = 4; 
    let columnas = 4; 
    let matriz = []; 
    let numerosMayores = []; 

    for(let i = 0; i <filas; i++){
        let fila = []; 
        let mayorFila = 0; 
        for(let j = 0; j <columnas; j++){
            let numero = Math.floor(Math.random()*100)+1; 
            fila.push(numero)
        }
        matriz.push(fila); 
        numerosMayores.push(Math.max(...fila)); 
    }

    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
         
    }
    
    const suma = numerosMayores.reduce((a,b) => a + b, 0); 
    const promedio = (suma/numerosMayores.length).toFixed(2);

    texto += "Números Mayores:" + numerosMayores.join(", ") + "\n";
    texto += "Promedio de mayores: " + promedio;
    alert(texto)
}

/*Ejercicio 07: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 4x4, y determine en qué posiciones están los enteros terminados en 0.  
*/
function ejercicio07M(){
    let filas = 4; 
    let columnas = 4; 
    let matriz = []; 
    let terminanEnCero = []; 

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j<columnas; j++){
            let numero = Math.floor(Math.random() * 100) + 1; 
            fila.push(numero); 
            if(numero % 10 === 0){
                terminanEnCero.push({valor: numero, fila: i, columna: j});
            }
        }
        matriz.push(fila);
    }

    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
         
    }
    texto += "Posiciones de los números que terminan en 0: \n";
    if(terminanEnCero.length === 0){
        texto += "Ninguno\n";
    }else{
        for(let obj of terminanEnCero){
            texto += `Valor: ${obj.valor}, Fila: ${obj.fila}, Columna: ${obj.columna}\n`
        }
    }

    alert(texto);
}

/*Ejercicio 08: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 4x4, y determine cuántos enteros terminados en 0 hay almacenados en ella.  
*/
function ejercicio08M(){
    let filas = 4; 
    let columnas = 4; 
    let matriz = []; 
    let contador = 0; 

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j<columnas; j++){
            let numero = Math.floor(Math.random() * 100) + 1; 
            fila.push(numero); 
            if(numero % 10 === 0){
                contador ++;
            }
        }
        matriz.push(fila);
    }

    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
         
    }
    texto += "Cantidad de números que terminan en 0: " + contador;
    
    alert(texto);
}

/*Ejercicio 09: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 3x4, y determine cuántos son primos y terminan en 3.  
*/
function ejercicio09M(){
    let filas = 3; 
    let columnas = 4; 
    let matriz = []; 
    let contador = 0; 

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j<columnas; j++){
            let numero = Math.floor(Math.random() * 100) + 1; 
            fila.push(numero); 
            if(esPrimo(numero) && numero%10 === 3){
                contador++
            }
           
        }
        matriz.push(fila);
    }

    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
         
    }
    texto += "Cantidad de números que son primos y terminan en 3: " + contador;
    alert(texto);
    
}

/*Ejercicio 10: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 5x3, y determine en qué fila esta el mayor número primo.  
*/
function ejercicio10M(){
    let filas = 5; 
    let columnas = 3; 
    let matriz = [];  
    let filaMayor = -1;
    let mayor = -1;  

    for(let i = 0; i <filas; i++){
        let fila = []; 
        let mayorFila = 0;
        for(let j = 0; j<columnas; j++){
            let numero = Math.floor(Math.random() * 100) + 1; 
            fila.push(numero); 
            if(esPrimo(numero) && numero> mayor){
                mayor = numero;
                filaMayor = i;
            } 
        }
        matriz.push(fila);
    }

    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
         
    }
    
    if(mayor === -1){
        texto += "No se encontraron números primos en la matriz.";
    }else{
        texto += "El mayor número primo es " + mayor + " y esta en la fila: " + filaMayor;
    }
    alert(texto); 
    
}

/*Ejercicio 11: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 5x3, y determine en qué columna esta el menor número par.  
*/
function ejercicio11M(){
    let filas = 5; 
    let columnas = 3; 
    let matriz = [];  
    let columnaMenor = Infinity;
    let menor = Infinity;  

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j<columnas; j++){
            let numero = Math.floor(Math.random() * 100) + 1; 
            fila.push(numero); 
            if(numero%2 === 0 && numero < menor){
                menor = numero;
                columnaMenor = j;
            } 
        }
        matriz.push(fila);
    }

    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
         
    }
    
    if(menor === Infinity){
        texto += "No se encontraron números pares en la matriz.";
    }else{
        texto += "El menor número par es " + menor + " y esta en la columna " + columnaMenor;
    }
    alert(texto); 
    
}

/*Ejercicio 12: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 5x5, y determine en qué fila está el mayor número terminado en 6.  
*/
function ejercicio12M(){
    let filas = 5; 
    let columnas = 5; 
    let matriz = [];  
    let filaMayor = -1;
    let mayor = -1;  

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j<columnas; j++){
            let numero = Math.floor(Math.random() * 100) + 1; 
            fila.push(numero); 
            if(numero> mayor   && numero%10 === 6){
                mayor = numero;
                filaMayor = i;
            } 
        }
        matriz.push(fila);
    }

    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
         
    }
    
    if(mayor === -1){
        texto += "No se encontraron números terminados en 6 en la matriz.";
    }else{
        texto += "El mayor número terminado en 6 es " + mayor + " y esta en la fila: " + filaMayor;
    }
    alert(texto); 
    
}

/*Ejercicio 13: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 5x3, y determine en qué columna está el mayor número que inicia con el dígito 4.  
*/
function ejercicio13M(){
    let filas = 5; 
    let columnas = 3; 
    let matriz = [];  
    let columna = -1;
    let mayor = -Infinity;
    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j<columnas; j++){
            let numero = Math.floor(Math.random() * 100) + 1; 
            fila.push(numero); 
            if(numero.toString()[0] === '4' && numero> mayor){
                columna = j;
                mayor = numero;
            }
        }
        matriz.push(fila);
    }

    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
         
    }
    
    if(columna === -1){
        texto += "No se encontraron números que inician con 4 en la matriz.";
    }else{
        texto += "El mayor número iniciado en 4 es " + mayor + " y esta en la columna: " + columna;
    }
    alert(texto); 
    
}
/*Ejercicio 14: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 5x5, y determine cuantos números almacenados en ella tienen mas de 3 dígitos.  
*/
function ejercicio14M(){
    let filas = 5; 
    let columnas = 5; 
    let matriz = [];  
    let contador = 0; 
    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j<columnas; j++){
            let numero = Math.floor(Math.random() * 1500) + 1; 
            fila.push(numero); 
            if(numero > 999){
                contador++;
            }
        }
        matriz.push(fila);
    }

    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
         
    }
    
    if(contador === 0){
        texto += "No se encontraron números con más de tres dígitos.";
    }else{
        texto += "Cantidad de números con más de tres dígitos" + contador;
    }
    alert(texto); 
    
}

/*Ejercicio 15: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 5x4, y determine cuantos números almacenados en ella terminan en 34 dígitos.  
*/
function ejercicio15M(){
    let filas = 5; 
    let columnas = 4; 
    let matriz = [];
    let contador = 0; 
    for(let i = 0; i<filas; i++){
        let fila = [];
        for(let j = 0; j<columnas; j++){
            let numero = Math.floor(Math.random()*1500) + 1; 
            fila.push(numero);
            if(numero%100 === 34){
                contador++;
            }
        }
        matriz.push(fila);
    }

    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
         
    }
    
    if(contador === 0){
        texto += "No hay números que terminen en 34";
    }else{
        texto += contador + " números terminan en 34";
    }

    alert(texto); 
}

/*Ejercicio 16: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 5x4, y determine cuantos números almacenados tienen un solo dígito.  
*/
function ejercicio16M(){
    let filas = 5; 
    let columnas = 4; 
    let matriz = [];
    let contador = 0; 
    for(let i = 0; i<filas; i++){
        let fila = [];
        for(let j = 0; j<columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1; 
            fila.push(numero);
            if(numero>=0 && numero <10){
                contador++;
            }
        }
        matriz.push(fila);
    }

    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
         
    }
    
    if(contador === 0){
        texto += "No hay números de un dígito.";
    }else{
        texto += contador + (contador === 1? " número tiene un dígito.": " números tienen un dígito.");
    }

    alert(texto); 
}

/*Ejercicio 17: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 5x4, y determine cuantos multiplos de 5 almacenados tiene.  
*/
function ejercicio17M(){
    let filas = 5; 
    let columnas = 4; 
    let matriz = [];
    let contador = 0; 
    for(let i = 0; i<filas; i++){
        let fila = [];
        for(let j = 0; j<columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1; 
            fila.push(numero);
            if(numero%5 == 0){
                contador++;
            }
        }
        matriz.push(fila);
    }

    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
         
    }
    
    if(contador === 0){
        texto += "No hay múltiplos de 5.";
    }else{
        texto += contador + (contador === 1? " múltiplo de 5.": " múltiplos de 5.");
    }

    alert(texto); 
}

/*Ejercicio 18: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 5x5, y determine en que posición se encuentra el mayor múltiplo de 8.
*/
function ejercicio18M(){
    let filas = 5; 
    let columnas = 5; 
    let matriz = []; 
    let mayor = -1; 
    let posFila = -1; 
    let posCol = -1;

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
            if(numero%8 === 0 && numero > mayor){
                mayor = numero; 
                posFila = i; 
                posCol = j;
            }
        }
        matriz.push(fila)
    }

    //Salida de texto para mostrar la matriz y el resultado
    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
         
    }
    
    if(mayor !== -1){
        texto += "Mayor múltiplo de 8: " + mayor + " en la posición [" + posFila +"] ["+ posCol + "]";
    }else{
        texto += "No se encontraron múltiplos de 8.";
    }
    alert(texto);

}

/*Ejercicio 19: 
    Desarrollar un programa que lea los valores enteros de dos matrices de 
    tamaño 4x5, y determine si sus contenidos son exactamente iguales. 
*/
function ejercicio19M(){
    let filas = 4; 
    let columnas = 5; 
    let matriz1 = []; 
    let matriz2 = [];

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
        }
        matriz1.push(fila)
    }

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
        }
        matriz2.push(fila)
    }


    //Salida de texto para mostrar la matriz y el resultado
    let texto = "Primera matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz1[i].join(", ") + "\n";
         
    }

    texto += "Segunda matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz2[i].join(", ") + "\n";
         
    }
    
    let sonIguales = true; 

    for(let i = 0; i <filas; i++){
        for(let j = 0; j < columnas; j++){
            if(matriz1[i][j] !== matriz2[i][j]){
                sonIguales = false; 
                break;
            }
        }
        if(!sonIguales) break;  
    }

    texto += "\n" + (sonIguales? "Las matrices son iguales": "Las matrices son diferentes");
    alert(texto);
}

/*Ejercicio 20: 
    Desarrollar un programa que lea los valores enteros de dos matrices de 
    tamaño 4x5, luego leer un número entero y determinar si cada uno de los elementos de una 
    de las matrices es igual a cada uno de los elementos de la otra matriz múltiplicado por el 
    entero leído. 
*/
function ejercicio20M(){
    let filas = 4; 
    let columnas = 5; 
    let matriz1 = []; 
    let matriz2 = [];

    let numero = esUnEntero("Ingrese otro número: ");
    if (numero === null){
        alert("Se canceló la operación");
        return;
    } 


    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let aleatorio = (Math.floor(Math.random()*100) + 1) 
            fila.push(aleatorio)
        }
        matriz1.push(fila)
    }

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let aleatorio = Math.floor(Math.random()*100) + 1 
            fila.push(aleatorio)
        }
        matriz2.push(fila)
    }


    //Salida de texto para mostrar la matriz y el resultado
    let texto = "Primera matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz1[i].join(", ") + "\n";
         
    }

    texto += "Segunda matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz2[i].join(", ") + "\n";
         
    }
    
    let sonIguales = true; 

    for(let i = 0; i <filas; i++){
        for(let j = 0; j < columnas; j++){
            if(matriz1[i][j] !== matriz2[i][j] * numero){
                sonIguales = false; 
                break;
            }
        }
        if(!sonIguales) break;  
    }

    texto += "\n" + (sonIguales? "Las matrices son iguales": "Las matrices son diferentes");
    alert(texto);
}

/*Ejercicio 21: 
    Desarrollar un programa que lea los valores enteros de dos matrices de 
    tamaño 4x5 y determinar cuántos datos tiene en común. 
*/
function ejercicio21M(){
    let filas = 4; 
    let columnas = 5; 
    let matriz1 = []; 
    let matriz2 = [];

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
        }
        matriz1.push(fila)
    }

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
        }
        matriz2.push(fila)
    }


    //Salida de texto para mostrar la matriz y el resultado
    let texto = "Primera matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz1[i].join(", ") + "\n";
         
    }

    texto += "Segunda matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz2[i].join(", ") + "\n";
         
    }
    
    let plano1 = matriz1.flat();
    let plano2 = matriz2.flat();
    let numerosComun = [];

    for(let i = 0; i<plano1.length; i++){
        if(plano2.includes(plano1[i]) && !numerosComun.includes(plano1[i])){
            numerosComun.push(plano1[i]);
        }
    }

    texto += "Números comunes: " + numerosComun.join(", ");
    texto += "\nCantidad de números en común: " +  numerosComun.length;
    alert(texto);
}

/*Ejercicio 22: 
    Desarrollar un programa que lea los valores enteros de dos matrices de 
    tamaño 4x5 y determinar si el número mayor almacenado en la primer está en la segunda. 
*/
function ejercicio22M(){
    let filas = 4; 
    let columnas = 5; 
    let matriz1 = []; 
    let matriz2 = [];

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
        }
        matriz1.push(fila)
    }

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
        }
        matriz2.push(fila)
    }

    let maximo = Math.max(...matriz1.flat()); 
    let encontrado = matriz2.flat().includes(maximo);


    //Salida de texto para mostrar la matriz y el resultado
    let texto = "Primera matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz1[i].join(", ") + "\n";
         
    }

    texto += "Segunda matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz2[i].join(", ") + "\n";
         
    }

    texto += "El número mayor de la primera matriz es: " + maximo + "\n";
    texto += encontrado
        ? "Este número sí se encuentra en la segunda matriz."
        : "Este número no se encuentra en la segunda matriz.";
    
    alert(texto)
}

/*Ejercicio 23: 
    Desarrollar un programa que lea los valores enteros de dos matrices de 
    tamaño 4x5 y determinar si el número mayor de una de las matrices es igual al 
    número mayor de la otra matriz. 
*/
function ejercicio23M(){
    let filas = 4; 
    let columnas = 5; 
    let matriz1 = []; 
    let matriz2 = [];

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
        }
        matriz1.push(fila)
    }

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
        }
        matriz2.push(fila)
    }

    let max1 = Math.max(...matriz1.flat()); 
    let max2 = Math.max(...matriz2.flat());
    let sonIguales = (max1 === max2);


    //Salida de texto para mostrar la matriz y el resultado
    let texto = "Primera matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz1[i].join(", ") + "\n";
         
    }

    texto += "Segunda matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz2[i].join(", ") + "\n";
         
    }

    texto += "El número mayor de la primera matriz es: " + max1 + "\n";
    texto += "El número mayor de la primera matriz es: " + max2 + "\n";
    texto += sonIguales
        ? "Ambos números mayores son iguales."
        : "Los números mayores son diferentes.";
    
    alert(texto);
}

/*Ejercicio 24: 
    Desarrollar un programa que lea los valores enteros de dos matrices de 
    tamaño 4x5 y determinar si el mayor número primo de una de las matrices tambien 
    se encuentra en la otra matriz. 
*/
function ejercicio24M(){
    let filas = 4; 
    let columnas = 5; 
    let matriz1 = []; 
    let matriz2 = [];
    let mayorPrimo = -Infinity; 

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
            if(mayorPrimo < numero && esPrimo(numero)){
                mayorPrimo = numero
            }
        }
        matriz1.push(fila)

    }

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
        }
        matriz2.push(fila)
    }

    let encontrado = matriz2.flat().includes(mayorPrimo);


    //Salida de texto para mostrar la matriz y el resultado
    let texto = "Primera matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz1[i].join(", ") + "\n";
         
    }

    texto += "Segunda matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz2[i].join(", ") + "\n";
         
    }

    texto += "El mayor número primo de la primera matriz es: " + mayorPrimo + "\n";
    texto += encontrado
        ? "Este número sí se encuentra en la segunda matriz."
        : "Este número no se encuentra en la segunda matriz.";
    
    alert(texto)
}

/*Ejercicio 25: 
    Desarrollar un programa que lea los valores enteros de dos matrices de 
    tamaño 4x5 y determinar si el mayor número primo de una de las matrices tambien 
    es también el mayor número primo de la otra matriz.. 
*/
function ejercicio25M(){
    let filas = 4; 
    let columnas = 5; 
    let matriz1 = []; 
    let matriz2 = [];
    let mayorMatriz1 = -Infinity; 
    let mayorMatriz2 = -Infinity; 

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
            if(mayorMatriz1 < numero && esPrimo(numero)){
                mayorMatriz1 = numero
            }
        }
        matriz1.push(fila)

    }

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
            if(mayorMatriz2 < numero && esPrimo(numero)){
                mayorMatriz2 = numero
            }
        }
        matriz2.push(fila)
    }

    //Salida de texto para mostrar la matriz y el resultado
    let texto = "Primera matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz1[i].join(", ") + "\n";
         
    }

    texto += "Segunda matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz2[i].join(", ") + "\n";
         
    }

    
    if(mayorMatriz1 === mayorMatriz2){
        texto += "Las dos matrices tiene el mismo número mayor y primo."
    }else{
        texto += "Los números mayores y primos de cada matriz son diferentes."
    }

    alert(texto)
}

/*Ejercicio 26: 
    Desarrollar un programa que lea los valores enteros de dos matrices de 
    tamaño 4x5 y determinar la cantidad de números pares almacenados en una matriz 
    es igual a la cantidad de números pares almacenados en la otra matriz.
*/
function ejercicio26M(){
    let filas = 4; 
    let columnas = 5; 
    let matriz1 = []; 
    let matriz2 = [];
    let pares1 = 0; 
    let pares2 = 0; 


    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
            if(numero%2 === 0){
                pares1++
            }
        }
        matriz1.push(fila)

    }

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
            if(numero%2 === 0){
                pares2++
            }
        }
        matriz2.push(fila)
    }

    //Salida de texto para mostrar la matriz y el resultado
    let texto = "Primera matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz1[i].join(", ") + "\n";
         
    }

    texto += "Segunda matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz2[i].join(", ") + "\n";
         
    }

    
    if(pares1 === pares2){
        texto += "Las dos matrices tiene la misma cantidad de pares."
    }else{
        texto += "Las cantidad de pares de las dos matrices es diferente."
    }

    alert(texto)
}

/*Ejercicio 27: 
    Desarrollar un programa que lea los valores enteros de dos matrices de 
    tamaño 4x5 y determinar la cantidad de números primos almacenados en una matriz 
    es igual a la cantidad de números primos almacenados en la otra matriz.
*/
function ejercicio27M(){
    let filas = 4; 
    let columnas = 5; 
    let matriz1 = []; 
    let matriz2 = [];
    let primos1 = 0; 
    let primos2 = 0; 


    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
            if(esPrimo(numero)){
                primos1++
            }
        }
        matriz1.push(fila)

    }

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
            if(esPrimo(numero)){
                primos2++
            }
        }
        matriz2.push(fila)
    }

    //Salida de texto para mostrar la matriz y el resultado
    let texto = "Primera matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz1[i].join(", ") + "\n";
         
    }

    texto += "Segunda matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz2[i].join(", ") + "\n";
         
    }

    
    if(primos1 === primos2){
        texto += "Las dos matrices tiene la misma cantidad de números primos."
    }else{
        texto += "Las cantidad de primos de las dos matrices es diferente."
    }

    alert(texto)
}

/*Ejercicio 28: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 4x6 y determinar en que posición se encuentran los números cuyo 
    penúltimo dígito sea el 5.  
*/
function ejercicio28M(){
    let filas = 4; 
    let columnas = 6; 
    let matriz = []; 
    let posiciones = [];

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
            if(obtenerPenultimoNumero(numero) === 5){
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

    texto += "Números que su penultimo número es 5: \n"

    if(posiciones.length === 0){
        texto += "No hay números con penúltimo dígito igual a 5."
    }else{
        for(let i = 0; i <posiciones.length; i++){
        texto += posiciones[i].numero + ", posición: [" + posiciones[i].fila + "] [" + posiciones[i].columna+ "]\n";
    }
    }
    
    alert(texto);
}

function obtenerPenultimoNumero(numero){
    numero = Math.abs(numero);
    if(numero < 10) return null; 
    return Math.floor((numero%100)/10);
}

/*Ejercicio 29: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 4x6 y determinar si alguno de sus números está repetido al menos 3 veces. 
*/
function ejercicio29M(){
    let filas = 4; 
    let columnas = 6; 
    let matriz = []; 
    let conteo = {}; 
    let encontrado = false; 
    let numeroRepetido = null; 

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
            
            conteo[numero] = (conteo[numero] || 0) + 1; 

            if(conteo[numero] === 3){
                encontrado = true; 
                numeroRepetido = numero; 
            }
        }
        matriz.push(fila)
    }


    //Salida de texto para mostrar la matriz y el resultado
    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
         
    }

    if(encontrado){
        texto += "\nEl número " + numeroRepetido + " se repite al menos 3 veces."
    }else{
        texto += "\nNingún número se repite al menos 3 veces.";
    }

    
    
    alert(texto);
}

/*Ejercicio 30: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 4x6 y determinar cuántas veces está en ella el número menor.  
*/
function ejercicio30M(){
    let filas = 4; 
    let columnas = 6; 
    let matriz = []; 
    let conteo = {}; 

    for(let i = 0; i <filas; i++){
        let fila = []; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
        }
        matriz.push(fila)
    }

    let aplanada = matriz.flat()
    let menor = Math.min(...aplanada)
    
    conteo = aplanada.filter(num => num === menor).length; 

    //Salida de texto para mostrar la matriz y el resultado
    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
         
    }
    
    texto += "\nEl número menor en la matriz es: " + menor + " y aparece " + conteo + " vez/veces";
    
    alert(texto);
}

/*Ejercicio 31: 
    Desarrollar un programa que lea los valores enteros de una matriz de 
    tamaño 4x6 y determinar en que posición están los menores por fila. 
*/
function ejercicio31M(){
    let filas = 4; 
    let columnas = 6; 
    let matriz = []; 
    let posicionesMenores = [];

    for(let i = 0; i <filas; i++){
        let fila = []; 
        let menorFila = Infinity; 
        let posicionMenor = -1; 
        for(let j = 0; j < columnas; j++){
            let numero = Math.floor(Math.random()*100) + 1 
            fila.push(numero)
            if(menorFila > numero){
                menorFila = numero; 
                posicionMenor = j; 
            }
        }
        matriz.push(fila)
        posicionesMenores.push(posicionMenor);
    }

    //Salida de texto para mostrar la matriz y el resultado
    let texto = "Matriz generada: \n";
    for(let i = 0; i <filas; i++){
        texto += "fila "  + i +": " + matriz[i].join(", ") + "\n";
    }

    texto += "Menores por fila: \n";
    for(let i = 0; i <filas; i++){
        texto += "Fila " + "(" +  i + ")  -> posicion: " + posicionesMenores[i] + "\n"; 
    }

    alert(texto);
}