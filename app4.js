//Variables
//------------------PRACTICA MATH.RANDOM Y MATH FLOOR y OPERADOR TERNARIO ----------//
/*let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;


while (numeroUsuario != numeroSecreto) {
  //ParseInt() convierte a un cadena de texto (tipo string), en un número(al tipo de number)
  numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));

  console.log(typeof (numeroUsuario));
  if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert('El número secreto es menor');
    } else {
      alert('El número secreto es mayor');
    }
    //Incrementamos el contador cuando no acierta
    //intentos = intentos + 1;
    intentos++;

    //palabraVeces = 'veces';
    if (intentos > maximosIntentos) {
      alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
      break;
    }
    //La condición no se cumplió
    //alert('Lo siento, no acertaste el número');
  }
}
//-------------------------- PRACTICANDO- OPERADOR  TERNARIO---------------------

/*let palabraPersona = "";

if (cantidadPersonas == 1) {
  palabraPersona = "persona";
} else {
  palabraPersona = "personas"
}
*/

//------------------------------------- PRACTICA MATH.RANDOM Y MATH FLOOR =Serenatto - Café & Bistró. ----------//

//Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

/*let saludo = alert("Bienvenido al juego");
console.log(saludo);*/

//Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
/*let nombre = "Nadia";
console.log(`"¡Hola ${nombre}!"`);
*/
//Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

/*let lenguaje = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(lenguaje);*/

/* Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.
 Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
 Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.*/
/*let valor1 = 12;
let valor2 = 14;

let resultado = valor1 + valor2;
console.log(resultado);
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`)
*/

/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
*/

/*let valor1 = 12;
let valor2 = 14;

let resultado = valor1 - valor2;
console.log(resultado);
console.log(`La diferencia de ${valor1} y ${valor2} es igual a ${resultado}.`)
*/
/*Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, 
utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
*/

/*let edad = prompt("Ingrese su edad");

if (edad >= 18) {
  alert("Usted es mayor de edad");
} else {
  alert("Usted NO es mayor de edad")
}*/

/*Crea una variable "numero" y solicita un valor con prompt. 
Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
*/
/*let numero = prompt("Ingrese cualquier número");
console.log(numero);
if (numero > 0) {
  alert("Su número es POSITIVO");
} else if (numero < 0) {
  alert("Su número es NEGATIVO");
} else {
  alert("Su número es CERO")
}*/

//Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let numbers = 10;
let contador = 0;

while (contador != numbers) {
  contador++;
  console.log(contador, "117");
}
let numero = 1;
while (numero <= 10) {
  console.log(numero);
  numero++;
}

/*Crea una variable "nota" y asígnale un valor numérico. 
Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
*/
let nota = 5;

if (nota >= 7 && nota <= 20) {
  console.log("Aprobado");
} else {
  console.log("Desaprobado");
}
// Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

let firstNumber = Math.random();
console.log(firstNumber);
// Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let secondNumber = Math.floor(Math.random() * 10) + 1;
console.log(secondNumber);
// Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.*/
let thirdNumber = Math.floor(Math.random() * 1000) + 1;
console.log(thirdNumber);

//----------------------------------------------------------------


