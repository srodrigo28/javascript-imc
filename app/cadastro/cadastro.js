let btn = document.querySelector('#verSenha')
let btn2 = document.querySelector('#verConfirmSenha')

let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");

let usuario = document.querySelector("#usuario");
let labelUsuario = document.querySelector("#labelUsuario");

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha")
                                        
let confirmSenha = document.querySelector("#confirmSenha");
let labelConfirmSenha = document.querySelector("#labelConfirmSenha");
                                               
nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
  }else{
    labelNome.setAttribute('style', 'color: green')
  }
})

function cadastrar(){
  
}                                               

btn.addEventListener('click', ()=> {
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text');
  }else{
    inputSenha.setAttribute('type', 'password');
  }
})

btn2.addEventListener('click', ()=> {
  let inputSenha = document.querySelector('#confirmSenha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text');
  }else{
    inputSenha.setAttribute('type', 'password');
  }
})

