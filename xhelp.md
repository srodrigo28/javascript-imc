# link https://cursos.alura.com.br/course/javascript-programando-na-linguagem-web/task/24665

# paginação
* https://www.youtube.com/watch?v=6-VDE3H9-WU&t=2s

# compreendendo o javascript

# Funão querySelector('');

# buscando por tag
* imprime pega toda a tag e guarda na variavel titulo
    var titulo = document.querySelector("h1");
    console.log(titulo);
* imprime somente o valor encontrado
    var titulo = document.querySelector("h1").textContext;
    console.log(titulo);
* var titulo = document.querySelector("h1").textContent;
    titulo = "Aparecida 2";
    console.log(titulo);
* var titulo = document.querySelector("h1");
    titulo.textContent = "Aparecida 2";
    console.log(titulo);
# buscando por class
    var elem = document.querySelectorAll('.warning');
# buscando por id
    var elem = document.querySelectorAll('#nav');