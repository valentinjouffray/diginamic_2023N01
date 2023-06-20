import { createMarkup } from "./utils/utils.js";

let counter = 0;
const button = createMarkup("button", "Ajouter un paragraphe", document.body);
const section = createMarkup("section", "", document.body);



// Gestion de l'événement clic sur le boutton
button.onclick = () => {
  counter ++;
  const p = createMarkup("p", `Paragraphe ${counter}` , section);
  // Ajout d'un bouton à chaque paragraphe qui permet de le supprimer 
  const deleteParagraph = createMarkup("button", "Supprimer le paragraphe", p);
  deleteParagraph.onclick = () => {
    p.remove();
  }
  // Ajout d'un bouton qui permet de déplacer vers le bas le paragraphe
  const moveDownParagraph = createMarkup("button", " V ", p);
  moveDownParagraph.onclick = () => {
    // Récupération de la référence de l'élement du dom qui se trouve 2 positions plus bas
   const pNextTwo = p?.nextSibling?.nextSibling;
   console.log(`pNextTwo`, pNextTwo);
   section.insertBefore(p, pNextTwo);
  }
}