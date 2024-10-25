function mostrarMensajeNVeces(mensaje, N) {
    for (let i = 0; i < N; i++) {
        console.log(mensaje);
    }
}
mostrarMensajeNVeces("Hola", 5); // Muestra "Hola" 5 veces

function multiplosDe7HastaN(N) {
    for (let i = 1; i <= N; i++) {
        if (i % 7 === 0) {
            console.log(i);
        }
    }
}
multiplosDe7HastaN(50); // Muestra múltiplos de 7 hasta 50

function multiplosDeCualquierNumero(numero, N) {
    for (let i = 1; i <= N; i++) {
        if (i % numero === 0) {
            console.log(i);
        }
    }
}
multiplosDeCualquierNumero(5, 50); // Muestra múltiplos de 5 hasta 50

function numerosPositivos(N) {
    for (let i = 1; i <= N; i++) {
        console.log(i);
    }
}
numerosPositivos(10); // Muestra números del 1 al 10

function numerosPares(N) {
    for (let i = 1; i <= N; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
numerosPares(20); // Muestra los números pares hasta 20

function divisoresDeNumero(numero) {
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            console.log(i);
        }
    }
}
divisoresDeNumero(6); // Muestra divisores del número 6

function tablaDeSumar10() {
    for (let i = 1; i <= 12; i++) {
        console.log(`${i} + 10 = ${i + 10}`);
    }
}
tablaDeSumar10(); // Muestra la tabla de sumar con el 10 desde 1 hasta 12

function tablaDeMultiplicar(numero, inicio, fin) {
    for (let i = inicio; i <= fin; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
tablaDeMultiplicar(5, 1, 10); // Muestra la tabla de multiplicar del 5 desde 1 hasta 10

function numerosEntreDosNumeros(num1, num2) {
    for (let i = num1; i <= num2; i++) {
        console.log(i);
    }
}
numerosEntreDosNumeros(5, 15); // Muestra los números entre 5 y 15

function numerosParesEntreDosNumeros(num1, num2) {
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
numerosParesEntreDosNumeros(4, 20); // Muestra los números pares entre 4 y 20
