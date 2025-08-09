function validarEnteroIngresado(valor){
    if(valor === null || valor.trim() === ""){
        alert("Entrada vacía. Por favor ingrese un número.");
        return false;
    }

    if(!esEntero(valor)){
        alert("Número inválido."); 
        return false; 
    }

    return true;
}

function terminaEn(numero, terminacion){
    let divisor = Math.pow(10, terminacion.toString().length)
    return numero%divisor === terminacion; 
}

function esEntero(valor){
    return Number.isInteger(Number(valor));
}

function tieneNDigitos(numero, digitos){
    return Math.abs(numero).toString().length === digitos; 
}












function esUnEntero(mensaje){
    let input; 
    let numero; 

    do{
        input = prompt(mensaje)
        if(input == null){
            alert("Operación cancelada."); 
            return null; 
        }
        numero = Number(input); 

        if(!Number.isInteger(numero)){
            alert("Ingresa un número válido.")
        }
    }while(!Number.isInteger(numero)); 
    return numero; 
}

function esPrimo(numero){
    if(numero <= 1){
        return false; 
    }
    for(let i = 2; i <= Math.sqrt(numero); i++){
        if(numero%i === 0){
            return false; 
        }
    }
    return true; 
}




function esDivisiblePor(numero, divisble){
    if(numero% divisble === 0){
        return true; 
    }
}


function hayRepetidos(arreglo){
    let unicos = new Set(arreglo);
    return unicos.size !== arreglo.length;
}

function factorial(numero){
    let factorial = 1; 
    for(let i = 1; i<= numero; i++){
        factorial *= i; 
    }
    return factorial
}