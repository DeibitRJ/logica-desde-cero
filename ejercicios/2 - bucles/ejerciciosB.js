//Desarrollar un programa que lea un número entero positivo e imprima 
//todos los números enteros comprendidos entre 1 y dicho número (inclusive).
function ejercicio01B(){
    let numero = prompt("NÚMEROS DEL 1 AL N \nIngresar un número entero:");

    if(!/^-?\d+$/.test(numero)){
        alert("El valor ingresado no es un número")
        return;
    }
    numero = Number(numero)
    let resultado = "";

    for(let i = 1; i <= numero; i++){
        resultado += i + "\n";
    }
    alert("Números del 1 al " + numero + ":\n" + resultado);
}

//Desarrollar un programa que lea un número entero positivo e imprima 
//todos los números pares comprendidos entre 1 y dicho número (inclusive).
function ejercicio02B(){
    let numero = prompt("NÚMEROS PARES ENTRE 1 AL N \nIngresar un número entero:");

    if(!/^-?\d+$/.test(numero)){
        alert("El valor ingresado no es un número")
        return;
    }
    numero = Number(numero)
    let resultado = "";

    for(let i = 2; i <= numero; i+=2){
        resultado += i + "\n";
    }
    alert("Números pares entre 1 y " + numero + ":\n" + resultado);
}
