var titulo = document.querySelector(".titulo");
    titulo.textContent = "Aparecida 2";

var guia = document.querySelector("title");
    guia.textContent = "Seb Soluções"

var pacientes = document.querySelectorAll(".paciente");
console.log();
    /**
        0 -> info-nome,
        1 -> info-peso,
        2 -> info-altura,
        3 -> info-gordura,
        4 -> info-imc
    */
for( var i=0; i<pacientes.length; i++){
var paciente = pacientes[i];

var tdNome = paciente.querySelector(".info-nome");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdGordura = paciente.querySelector(".info-gordura");
var tdImc = paciente.querySelector(".info-imc");

var alturaEhValida = true;
var pesoEhValido = true;

if(peso <=0 || peso >= 500){
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
}
if(altura <=0 || altura >= 3){
    console.log('Altura inválida');
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
    // paciente.style.backgroundColor = "red"
    // paciente.style.color = "white"
}
if(alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
}
console.log(paciente); //tr
}
/**



*/