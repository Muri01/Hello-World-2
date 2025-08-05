// Reunião 6
function inserirNome(){
   let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   elemento.textContent = nomeUsuario;
}

inserirNome();

//Reunião 7- Lista de linguagens escritas:
const linguagens = ["JavaScript", "Python", "C++", "Ruby"]

console.log(linguagens[0]) // “JavaScript”
console.log(linguagens[1]) // “Python”
console.log(linguagens[2]) // “C++”


// Adicionar valores da lista na página com DOM.
const item = document.querySelector("#lista");  //seleciona elemento com id "lista" e guarda na variável "lista"
// item.textContent = linguagens[0]; // altera o elemento HTML da variável "lista" para o valor 0 da lista "linguagens"
// item.textContent = linguagens[1]; 
// item.textContent = linguagens[2];

//Solução 1: Criar vários elemento com id diferentes para 
//atribuir cada item da lista um de cada vez
const item1 = document.querySelector("#lista1"); 
 item1.textContent = linguagens[0]; 

 const item2 = document.querySelector("#lista2"); 
 item2.textContent = linguagens[1]; 

 const item3 = document.querySelector("#lista3"); 
 item3.textContent = linguagens[2]; 

 const item4 = document.querySelector("#lista4"); 
 item4.textContent = linguagens[3]; 


//Solução 2: Usar laço de repetição "for of"
for (const linguagem of linguagens) {
  const itemDaLista = document.createElement("li");
  itemDaLista.textContent = linguagem;
  item.appendChild(itemDaLista); // "item" foi criada mais acima
}




// Reunião 8 - objetos
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




//codigo da aula 2 da unidade Funções: criando uma missão sobre IA
let perguntas = [
 {
   enunciado: "Pergunta 1",
  alternativas: ["alternativa1","alternativa2","alternativa3"]
 },
 {
  enunciado: "Pergunta 2",
  alternativas: ["alternativa1","alternativa2","alternativa3"]
 }
]
