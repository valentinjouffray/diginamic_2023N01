/*
* @param {String} markupName
* @param {HTMLElement} parent
* @param {String} text
* @param {Object} attribute
* @returns {HTMLElement}
*/
function createMarkup(markupName, parent, text, attribute = {}) {

  //Creation de mon element
  const domElement = document.createElement(markupName);

  //Ajout texte
  domElement.innerText = text;

  //Affectation element à son parent
  parent.appendChild(domElement);

  //Ajout class
  for (key in attribute) {
      domElement.setAttribute(key, attribute[key]);
  }
  return domElement;
}
const header = createMarkup("header", document.body, "");
const nav = createMarkup("nav", header, "Texte dans le nav", { class: "container" });
//Ajout des 3 autres bouttons
for (let i = 0; i < 4; i++) {
  const buttonElement = createMarkup("button", nav, "Item " + (i + 1));
  if (i == 0) {
      buttonElement.style.color = "red";
  }
}

//document.querySelector("nav > button").style.color = "red";

console.log(`nav: `, nav);