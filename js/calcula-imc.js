var titulo = document.querySelector(".titulo");
    titulo.textContent = "Aparecida 2";

var guia = document.querySelector("title");
    guia.textContent = "Seb Soluções"

var pacientes = document.querySelectorAll(".paciente");

for( var i=0; i<pacientes.length; i++){
    var paciente = pacientes[i];

    var tdNome = paciente.querySelector(".info-nome");

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdGordura = paciente.querySelector(".info-gordura");
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    if(!validaAltura){
        console.log('Altura inválida');
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}
function validaPeso(peso){
    if( peso >= 0 && peso < 300){
        return true;
    }else{
        return false;
    }
}
function validaAltura(altura){
    if( altura >= 0.5 && altura <= 3.0 ){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

titulo.addEventListener("click", function(){
    console.log('Olha só posso chamar uma função anonima.')
});
