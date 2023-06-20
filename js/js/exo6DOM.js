/**
   * Crée un élément du dom, lui ajoute du texte, le place comme dernier
   * enfant de parent et ajoute un attribut en utilisant le paramètre attribute
   * @param {String} markup_name 
   * @param {String} text 
   * @param {domElement} parent 
   * @param {Array[Object]} attributes  (doit comprendre les propriétés name et value)
   * @returns domElement
   */
function createMarkup(markupElements) {
  const markup = document.createElement(markupElements[0]);
  markup.textContent = markupElements[1];
  markupElements[2].appendChild(markup);
  for (const attribute of markupElements[3]) {
      console.log("validé");
      for(let key in attribute) {
          markup.setAttribute(key, attribute[key]);
      }
  }
  return markup;
}

// markup_name, text, parent, attributes = []

const paramHeader = ["header", "Header", window.document.body, [{ class: "header" }, {id: "header"}]];

const header = createMarkup(paramHeader);
// const nav = createMarkup("nav", undefined, header, [{ class: "nav" }]);
// const button1 = createMarkup("button", "Item 1", nav, [{ id: "button1" }, {class: "button"}]);
// const button2 = createMarkup("button", "Item 2", nav, [{ id: "button2" }, {class: "button"}]);
// const button3 = createMarkup("button", "Item 3", nav, [{ id: "button3" }, {class: "button"}]);
// const button4 = createMarkup("button", "Item 4", nav, [{ id: "button4" }, {class: "button"}]);

document.querySelector("button").style.color = "red";