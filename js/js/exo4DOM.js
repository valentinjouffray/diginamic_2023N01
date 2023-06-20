console.log(``);
const header = document.createElement("header");
window.document.body.appendChild(header);
header.innerText = "Test de texte dans mon header";
header.setAttribute("class","header");
/**
 * 
 * @param {String} markupName 
 * @param {HTMLElement} parent 
 * @param {String} text 
 * @param {Object} attribute 
 * @returns {HTMLElement} 
 */
function createMarkup(markupName, parent, text, attribute) {
  const domElement = document.createElement(markupName);
  domElement.innerText = text;
  parent.appendChild(domElement);
  for( key in attribute) {
    domElement.setAttribute(key,attribute[key]);
  }
  return domElement;
}

const main = createMarkup("main", document.body, "Texte dans le main", {class: "container"});
console.log(`main : `, main);  