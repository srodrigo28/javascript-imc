var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
function montaTr(paciente){
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")
    
    pacienteTr.appendChild( montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild( montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild( montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))
    
    return pacienteTr
}
function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
function validaPaciente(paciente){

    var erros = [];
    validaNome = paciente.nome.length;


    // if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");
    // if(!validaAltura(paciente.altura)) erros.push("Altura é inválida");
    
    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }
    if(paciente.peso == ""){
        erros.push("Peso não pode ser em branco")
    }
    if( validaNome < 3 || validaNome == "" ){
        erros.push("O nome não pode ser em branco nem menor que 3 caracteres");
    }
    if(paciente.altura == ""){
        erros.push("Altura não pode ser em branco")
    }
    if( paciente.gordura.length == 0 && paciente.gordura.length <3){
        erros.push("Gordura é inválida");
    }
    return erros;
}