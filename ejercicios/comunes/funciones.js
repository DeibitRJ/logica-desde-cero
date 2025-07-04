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

function esprimo(numero){
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