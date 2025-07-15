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