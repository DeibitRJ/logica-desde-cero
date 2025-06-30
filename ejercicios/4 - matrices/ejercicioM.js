//Desarrollar un programa que lea los valores enteros de una matriz de 
// tamaño 4x4 y determine la posición (fila y columna) en la que se 
// encuentra el número mayor dentro de la matriz.
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