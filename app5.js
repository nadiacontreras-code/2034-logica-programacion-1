//------------------PRACTICA MATH.RANDOM Y MATH FLOOR y OPERADOR TERNARIO ----------//
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 15;


while (numeroUsuario != numeroSecreto) {
  //ParseInt() convierte a un cadena de texto (tipo string), en un número(al tipo de number)
  numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));

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