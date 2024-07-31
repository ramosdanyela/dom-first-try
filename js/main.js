/* PESQUISAR SOBRE O QUERYSELECTOR 
- O querySelector() é um método do objeto document que retorna o primeiro elemento que corresponde a um ou mais seletores CSS especificados no argumento do método. Se não houver correspondência, o método retornará null.
- Regras do querySelector():
   - Capturar um elemento por sua classe: .nome-da-classe ex: querySelector('.exemplo')
   - Capturar um elemento por seu id: #nome-do-id ex: querySelector('#exemplo')
   - Capturar um elemento por seu atributo: [atributo=valor] ex: querySelector('[type="submit"]')
   - Capturar um elemento por seu tipo (tag): input, button, div, span, etc. ex: querySelector('button')

   Perceba que o queryselector respeita as mesmas regras de seleção de elementos do CSS.
   https://www.w3schools.com/js/js_htmldom_document.asp
   https://webdesign.tutsplus.com/javascript-cheatsheet-event-listeners-and-dom-manipulation--cms-107006a

Você também pode capturar elementos usando o querySelectorAll(), que retorna todos os elementos que correspondem a um ou mais seletores CSS especificados no argumento do método. Se não houver correspondência, o método retornará um NodeList vazio.
Outra opção é usar o .getElementById(), que retorna uma referência ao elemento pelo ID do elemento. Se não houver correspondência, o método retornará null.
Outro método é o .getElementsByClassName(), que retorna uma coleção HTMLCollection de elementos com a classe especificada. Se não houver correspondência, o método retornará um HTMLCollection vazio.
Outro método é o .getElementsByTagName(), que retorna uma coleção HTMLCollection de elementos com a tag especificada. Se não houver correspondência, o método retornará um HTMLCollection vazio.

Indicado usar: querySelector() e querySelectorAll()
*/

/* exemplo de manipulaçao - Capturando o elemento do HTML e trazendo guardando ele dentro de uma variável no JS*/
const btn = document.querySelector(".exemplo_button");
console.log(btn); // retornará o elemento do HTML confira no console do navegador (Inspecionar > console)
/* Eu quero alterar o texto dentro do h1 que diz: <h1>Exemplo de manipulação de DOM</h1> então preciso capturar esse elemento de html também */
const h1 = document.querySelector("#exemplo");
/* Agora eu preciso adicionar um Evento de click para eu saber quando esse botão foi clicado */
btn.addEventListener("click", () => {
  console.log("Botão clicado!"); // retornará no console do navegador
  /* Agora eu consigo alterar o innerText desse H1 quando o botão for clicado */
  h1.innerText = "Texto alterado com sucesso! Manipular dom é facil demais.";
});

const btne1 = document.querySelector(".button_e1");
console.log(btne1); // retornará o elemento do HTML confira no console do navegador (Inspecionar > console)
btne1.addEventListener("click", () => {
  console.log("Botão clicado!");
  alert("Botão foi clicado.");
});
//--------->OK

const btne2 = document.querySelector(".button_e2");
console.log(btne2);
btne2.addEventListener("click", () => {
  console.log("Botão clicado!");
  document.createElement("h1");
  h1.style.fontWeight = "bold";
  h1.textContent = "Danyela Ramos";
  const fatherElement = document.getElementById("exercicio2");
  fatherElement.appendChild(h1);
});
//-------> OK
//deu erro porque tava digitando Context

const btne3 = document.querySelector(".button_e3");
console.log(btne3);
btne3.addEventListener("click", () => {
  console.log("Botão clicado!");
  const myEl3 = document.querySelector("#exercicio3 h3");
  myEl3.textContent = "Marília Mendonça é rainha";
});

//-----> OK
//deu erro só pq existe o #

const btne4 = document.querySelector(".button_e4");
console.log(btne4);
btne4.addEventListener("click", () => {
  console.log("Botão clicado!");
  const list4 = document.getElementById("exercicio4");
  const lastFromList = list4.lastChild;
  list4.removeChild(lastFromList);
});
//----------> OK!

const btne41 = document.querySelector(".button_e41");
console.log(btne41);
btne41.addEventListener("click", () => {
  console.log("Botão clicado!");
  const list41 = document.getElementById("exercicio4");
  const newName = document.createElement("li");
  newName.textContent = "Defante";
  list41.appendChild(newName);
});
//----->OK!

const btne42 = document.querySelector(".button_e42");
console.log(btne42);
btne42.addEventListener("click", () => {
  console.log("Botão clicado!");
  const list42 = document.getElementById("exercicio4");
  list42.textContent = "";
});
//-----> OK!

const btne43 = document.querySelector(".button_e43");
console.log(btne43);
btne43.addEventListener("click", () => {
  console.log("Botão clicado!");
  const list43 = document.getElementById("exercicio4");
  const firstEl43 = list43.firstElementChild;
  firstEl43.textContent = "Zé da Horta";
});
//------> OK!

const btne44 = document.querySelector(".button_e44");
console.log(btne44);
btne44.addEventListener("click", () => {
  console.log("Botão clicado!");
  const band = [
    "Aline Wirley",
    "Fantine Thó",
    "Lu Andrade",
    "Karin Hils",
    "Li Martins",
  ];
  const addedNewNames = band.map(function (member) {
    const list44 = document.getElementById("exercicio4");
    newName1 = document.createElement("li");
    newName1.textContent = [member];
    list44.appendChild(newName1);
    return list44;
  });
  return addedNewNames;
});
////---->OK!

const btne5 = document.querySelector(".button_e5");
console.log(btne5);
btne5.addEventListener("click", () => {
  console.log("Botão clicado!");
  const myEl5 = document.querySelector("#exercicio5 h3");
  myEl5.style.color = "red";
});
//----------> OK!
