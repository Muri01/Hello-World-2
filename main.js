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


// Objetos
const html = {
   nome: "html5",
   anoCriacao: 1991,
   usadaNoComponente: true,
   segmentoUsada: ["1ªsérie","2ªsérie","3ªsérie"]
}

const aluno1 = {
   nome: "Gabriel",
   idade: 13,
   turno: "tarde",
   anoLetivo: "3ºsérie",
   materiasFavoritas: ["Geografia","Matematica","Programação"]
}

const aluno2 = {
   nome: "Jessica",
   idade: 14,
   turno: "Manha",
   anoLetivo: "3ºsérie",
   materiasFavoritas: ["Filosófia","Portugûes"]
}


console.log(aluno1.nome) // “Gabriel”
console.log(aluno1.idade) // 13
console.log(aluno1.materiasFavoritas)
// "Geografia","Programação","Arte"
console.log(aluno1.materiasFavoritas[1])



// Adicionar valores da lista na página com DOM.
const aluno = document.querySelector("#aluno");  //seleciona elemento com id "aluno" e guarda na variável "aluno"
aluno.textContent = aluno1.nome; // altera o elemento HTML da variável "aluno" para o valor da propriedade "nome" do objeto "aluno1"
// aluno.textContent = aluno1.idade; // altera o elemento HTML da variável "aluno" para o valor da propriedade "idade" do objeto "aluno1"

// Acessando array dentro do objeto
item.textContent = aluno1.nome;

// aluno.textContent = aluno1.materiasFavoritas;
aluno.textContent = aluno1.materiasFavoritas[2];




// EM AÇÃO
//  strings(2ªserie)

const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    console.log(texto); //texto digitado no campo de entrada
    const campoResultado = document.querySelector('#resultado-palavrachave');
    console.log(campoResultado); // elemento HTML do campo onde será exibido o resultado
    const palavras = texto.split(" ");
    console.log(palavras); // array com as palavras separadas

    campoResultado.textContent = palavras.join(", "); // exibe as palavras separadas por vírgula no campo de resultado
}

// DESAFIO em ação (escrever no docs)
// mostrar o primeiro elemento do array na página
// campoResultado.textContent = palavras[0];

// mostar o terceiro elemento do array na página
// campoResultado.textContent = palavras[2];

// adicionar a palavra "Fim" no final do texto. DICA: use o método push()
// campoResultado.textContent = palavras.join(", ").push("FIM!")


// funções (3ªserie)
const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
];

const caixaPerguntas = document.querySelector(".caixa-perguntas");

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}


perguntas[2]
perguntas[1].alternativa[1]


// DESAFIO em ação (escrever no docs)
// o enunciado da pergunta 3
// perguntas[2].enunciado
// como acessar a pergunta 3 e suas alternativas?
// perguntas[2]
// como acessar a alternativa 2 da pergunta 4
// perguntas[3].alternativa[1]



// PARTE 2
// for (const linguagem of linguagens) {
//   const itemDaLista = document.createElement("li");
//   itemDaLista.textContent = linguagem;
//   lista.appendChild(itemDaLista);
// }



function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

for (const item in aluno1){
   console.log(item);
}
for (const item in aluno1){
   let propriedade = item
   console.log(aluno1.propriedade);
}