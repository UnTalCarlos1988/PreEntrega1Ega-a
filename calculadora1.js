let numero1 = parseInt(prompt("Ingresa tu primer número"));
let numero2 = parseInt(prompt("Ingresa tu segundo número"));

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

function dividir(numero1, numero2) {
    if (numero2 === 0) {
        return "No es posible dividir por cero.";
    }
    return numero1 / numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

let opcion = parseInt(prompt("¿Qué deseas hacer?\n1. Sumar\n2. Restar\n3. Dividir\n4. Multiplicar\n5. Salir"));

while (opcion !== 5) {
    switch (opcion) {
        case 1:
            alert("El resultado de la suma es: " + sumar(numero1, numero2));
            break;
        case 2:
            alert("El resultado de la resta es: " + restar(numero1, numero2));
            break;
        case 3:
            alert("El resultado de la división es: " + dividir(numero1, numero2));
            break;
        case 4:
            alert("El resultado de la multiplicación es: " + multiplicar(numero1, numero2));
            break;
        default:
            alert("Opción no válida.");
    }
    
    opcion = parseInt(prompt("¿Qué deseas hacer?\n1. Sumar\n2. Restar\n3. Dividir\n4. Multiplicar\n5. Salir"));
}

alert("Se ha iniciado el proceso para salir de la calculadora.");



