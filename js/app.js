console.log("Calculator App");
function sumar() {
  const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];
  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value); //parseInt() hace q los valores que esten dentros sean numericos
  if (isNaN(resultado)) {
    resultado = "La operacion no incluye numeros";
  }
  document.getElementById("resultado").innerHTML = `resultado: ${resultado}`;
  console.log(`resultado de la suma: ${resultado}`);
}
function restar() {
  const forma = document.getElementById("forma1");
  let operandoA1 = forma["operandoA1"];
  let operandoB1 = forma["operandoB1"];
  let resultado = parseInt(operandoA1.value) - parseInt(operandoB1.value); //parseInt() hace q los valores que esten dentros sean numericos
  if (isNaN(resultado)) {
    resultado = "La operacion no incluye numeros";
  }
  document.getElementById("resultado1").innerHTML = `resultado: ${resultado}`;
  console.log(`resultado de la resta: ${resultado}`);

}
function dividir() {
  const forma = document.getElementById("forma2");
  let operandoA2 = forma["operandoA2"];
  let operandoB2 = forma["operandoB2"];
  let resultado = parseInt(operandoA2.value) / parseInt(operandoB2.value); //parseInt() hace q los valores que esten dentros sean numericos
  if (isNaN(resultado)) {
    resultado = "La operacion no incluye numeros";
  }
  document.getElementById("resultado2").innerHTML = `resultado: ${resultado}`;
  console.log(`resultado de la division: ${resultado}`);
}
function multi() {
  const forma = document.getElementById("forma3");
  let operandoA3 = forma["operandoA3"];
  let operandoB3 = forma["operandoB3"];
  let resultado = parseInt(operandoA3.value) * parseInt(operandoB3.value); //parseInt() hace q los valores que esten dentros sean numericos
  if (isNaN(resultado)) {
    resultado = "La operacion no incluye numeros";
  }
  document.getElementById("resultado3").innerHTML = `resultado: ${resultado}`;
  console.log(`resultado de la multiplicacion: ${resultado}`);
}
document.getElementById("operandoA").addEventListener("focus", cambiar);
document.getElementById("operandoA").addEventListener("blur", volver);
document.getElementById("operandoB").addEventListener("focus", cambiar);
document.getElementById("operandoB").addEventListener("blur", volver);
function cambiar(evento) {
  evento.target.style.background = "#B5B2B2"; //evento.target = utilizar this (onfocus="mostrar(this)")
}
function volver(evento) {
  evento.target.style.background = "white";
}

