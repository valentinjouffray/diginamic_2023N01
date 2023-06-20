const h1 = document.createElement("h1");
const a = document.createElement("a");
h1.innerText = "Titre de niveau 1";
a.innerText = "Test lien 1";
a.setAttribute("href", "https://diginamic.fr");
document.body.appendChild(h1);
document.body.appendChild(a);
h1.onclick = (event) => {handleClick(event,"Robert")};
a.onclick = (event) => {handleClick(event,"Robert")};
function handleClick(event, name) {
  console.log(`event.target`, event.target);
  console.log(`Hello ${name}`);
  event.preventDefault();
 /*  while (event) {
    event = Object.getPrototypeOf(event);
    if(event) console.log("classe : ",event.constructor.name);
  } */
}
console.log(`h1.onclick : `,h1.onclick);