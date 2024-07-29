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

/* Lição de casa: Pesquisar sobre os vários tipos de eventos que podem ser ser adicionados. Hoje vamos só trabalhar com o evento "click" */

/* resumo do exemplo:
- Capturar o elemento do HTML e trazer para o JS
- Adicionar um evento de click para esse elemento
- Alterar o texto do elemento quando o evento for acionado
- Não tenha medo de ir no HTML e adicionar ID e CLASS nos elementos para poder capturar eles no JS

Faça o restante dos exercicios nessa pagina, apenas vá escrevendo um embaixo do outro, eles não vão se misturar.
*/
