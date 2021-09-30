var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutiçãoo";

var paciente = document.querySelector(".paciente");
var td_peso = paciente.querySelector(".info-peso");
var peso = td_peso.textContent;

var td_altura = paciente.querySelector(".info-altura");
var altura = td_altura.textContent;

var td_imc = paciente.querySelector(".info-imc");

var peso_valido = true;
var altura_valida = true;

if (peso <= 0 || peso >= 350) {
  console.log("Peso Inválido");
  peso_valido = false;
  td_imc.textContent = "Peso inválido";
}

if (altura <= 0 || altura >= 3) {
  console.log("Altura Inválida");
  altura_valida = false;
  td_imc.textContent = "Altura inválida";
}

if (peso_valido && altura_valida) {
  var imc = peso / (altura * altura);
  td_imc.textContent = imc;
}
