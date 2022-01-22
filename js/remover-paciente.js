var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("tbody");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(()=>{
        event.target.parentNode.remove();
    }, 500);
})



// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         //paciente.textContent = "";
//         console.log(" Fui clicado com o duplo click");
//         this.remove();
//     })
// })
