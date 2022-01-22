var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Buscando pacientes ...");
    var xhr = new XMLHttpRequest();

    xhr.open("get", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach( function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    });
    xhr.send();
});