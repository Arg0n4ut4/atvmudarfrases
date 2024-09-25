// Selecionando pelo ID do título
const title = document.getElementById("titulo");

//obter botão e frases
const m1 = document.getElementsByClassName("mensagem2");

//const m2 = document.getElementsByClassName("mensagem3");

//const m3 = document.getElementsByClassName("mensagem4");

const mdfr = document.getElementById("btnfrasesrdl");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

mdfr.addEventListener("click", function () {

    for (let i = 0; i < m1.length; i++){
        m1[i].textContent = `frase modficada ${i} utilizando JS`
    }
});