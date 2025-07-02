//Desarrollar un programa que lea un número entero por teclado y 
// determine si dicho número termina en el dígito 5.
function ejercicio01C() {
    let numero = prompt("NÚMERO TERMINA EN 5 \nIngresa un número entero:")
    
    if(!/^\d+$/.test(numero)){
        alert("El valor ingresado no es un número")
        return;
    }
    numero = Number(numero);

    if (numero % 10 === 5) {
        alert("El número termina en 5.")
    } else {
        alert("El número no termina en 5.")
    }

}

//Desarollar un programa que lea un número entero y determine si tiene tres dígitos. 
function ejercicio02C(){
    let numero = prompt("Ingresar un número")
    
    if(!/^\d+$/.test(numero)){
        alert("El valor ingresado no es un número")
        return;
    }

    numero = Number(numero)

    if(numero.toString().length === 3){
        alert("El número tiene tres dígitos")
    }else{
        alert("El número no tiene tres dígitos")
    }
}

//Desarrollar un programa que lea un número entero y determinar si es negativo. 
function ejercicio03C(){
    let numero = prompt("Ingresar un número")

    if(!/^[-]?\d+$/.test(numero)){
        alert("El valor ingresado no es un número")
        return;
    }

    numero = Number(numero)

    if(numero < 0){
        alert("El número es negativo")
    }else{
        alert("El número no negativo")
    }
}