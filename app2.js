/*
let numeroSecreto = 2;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);
//Este código realiza la comparación
if (numeroUsuario == numeroSecreto) {
  //Acertamos, fue verdadera la condición
  alert(`Acertaste, el número es: ${numeroUsuario}`);
  // alert(`Acertaste, el número es: numeroUsuario`);
} else {
  //La condición no se cumplió
  alert('Lo siento, no acertaste el número');
}*/

//--------------------------RETO DETRAN----------------------

/*let edad = prompt("Ingrese su edad:");

if (edad >= 18) {
  console.log("Eres mayor de edad.");
  // alert("Eres mayor de edad");
} else {
  console.log("Eres menor de edad.");
  //alert("Eres mayor de edad");
}*/

//--------------------------MEDICA VOL----------------------

/*alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

console.log(intento == numeroSecreto);
if (intento == numeroSecreto) {
  alert('Acertaste');
  // alert(`tu número es: ${intento}`)

} else {
  alert('El número secreto era ' + numeroSecreto + ' y elegiste ' + intento);
  //alert(`El número secreto era  ''${numeroSecreto}'', y elegiste "${intento}"`);
}*/

//--------------------------   JORNADA MILLAS ----------------------------------
/*let porcentajeDescuento = 0;

let cantidadMillas = prompt("Ingrese la cantidad de millas");

if (cantidadMillas >= 30000) {
  alert('El porcentaje de descuento que le corresponde es 20%');
} else if (cantidadMillas >= 5000 && cantidadMillas < 30000) {
  alert('El porcentaje de descuento que le corresponde es 10%');
} else {
  alert('El porcentaje de descuento que le corresponde esporcentaje es 0');

}*/

//--------------------------   PRACTICA DE CONSOLE.LOG ----------------------------------

/*alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
  alert('Adivinaste');
} else {
  // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
  console.log('Valor del número secreto:', numeroSecreto);
  alert('El número secreto era ' + numeroSecreto);
}*/
//-------------------------------------   PRACTICA COMPLEMENTARIA----------------------------------

//Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
/*let diaDeSemana = prompt('Bienvenido, qué dia de la semana es:');

if (diaDeSemana == "Sábado" || diaDeSemana == "Domingo") {
  alert("Buen fin de Semana")
} else {
  alert("¡Buena semana ")
}*/

// Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
/*let valorNumero = prompt("Ingrese un número");

if (valorNumero < 0) {
  alert(`Su número ${valorNumero} es negativo `)
} else if {
  alert(`su número ${valorNumero} es positivo`)
} else {
  alert (`su número ${valorNumero} es cero`)
}

//Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
/*Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.*/