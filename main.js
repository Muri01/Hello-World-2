function inserirNome(){
   let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   elemento.textContent = nomeUsuario;
}

inserirNome();

//Lista de linguagens escritas:
const linguagens = [, "JavaScript", "python", "C"]

console.log(linguagens[0]) // “JavaScript”
console.log(linguagens[1]) // “Python”
console.log(linguagens[2]) // “C”


// Adicionar elemento da lista na página com DOM.
const item = document.querySelector("#lista");  //seleciona elemento com id "lista" e guarda na variável "item"
item.textContent = linguagens[0]; // altera o elemento da variável "item" para o valor 0 da lista "linguagens"



// for (const indice of linguagens) {
//   const item = document.createElement("li");
//   item.textContent = indice;
//   lista.appendChild(item);
// }



// Objetos
const html = {
   nome: "html5",
   anoCriacao: 1991,
   usadaNoComponente: true,
   segmentoUsada: ["1ªsérie","2ªsérie","3ªsérie"]
}