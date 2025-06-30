function inserirNome(){
   let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   elemento.textContent = nomeUsuario;
}

inserirNome();

//Lista de linguagens escritas:
const linguagens = ["JavaScript", "Python", "C++"]

console.log(linguagens[0]) // “JavaScript”
console.log(linguagens[1]) // “Python”
console.log(linguagens[2]) // “C++”


// Adicionar valores da lista na página com DOM.
const lista = document.querySelector("#lista");  //seleciona elemento com id "lista" e guarda na variável "lista"
lista.textContent = linguagens[0]; // altera o elemento HTML da variável "lista" para o valor 0 da lista "linguagens"
lista.textContent = linguagens[1]; 
lista.textContent = linguagens[2]; 


// R8 - objetos
let aluno1 = {
   nome: "Murilo",
   idade: 30,
   anoLetivo: "2º série",
   MateriasFavoritas: ["Matematica", "Geografia"]
}

console.log(aluno1.nome);
console.log(aluno1.MateriasFavoritas[0])

const objeto = document.querySelector("#alunos");
objeto.textContent = aluno1.nome
objeto.textContent = aluno1.idade


let perguntas = [
   {
      pergunta: "Pergunta1"
   }
]