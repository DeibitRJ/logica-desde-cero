//Desarrollar un programa que lea un número entero positivo e imprima 
//todos los números enteros comprendidos entre 1 y dicho número (inclusive).
function ejercicio01B(){
    let numero = prompt("NÚMEROS DEL 1 AL N \nIngresar un número entero:");

    if(isNaN(numero)){
        alert("El valor ingresado no es un número positivo válido.");
        return;
    }

    let resultado = "";

    for(let i = 1; i <= numero; i++){
        resultado += i + "\n";
    }
    alert("Números del 1 al " + numero + ":\n" + resultado);
}
