var titulo = document.querySelector(".titulo");
    titulo.textContent = "Aparecida 2";

var guia = document.querySelector("title");
    guia.textContent = "Seb Soluções"

var paciente = document.querySelector("#primeiro-paciente");
/** Todas tds
    0 - info-nome,
    1 - info-peso,
    2 - info-altura,
    3 - info-gordura,
    4 - info-imc
*/
var tdNome = paciente.querySelector(".info-nome");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent = 86.600;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent = 1.70;

var tdGordura = paciente.querySelector(".info-gordura");
var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);
tdImc.textContent = imc.toFixed(1);

console.log(paciente); //tr
console.log(tdNome.textContent = "Bastião"); //td peso
console.log(tdPeso.textContent = 87); //td peso
    
