var i = 156;
window.console.log(`i : `, i);
console.log(`window.document`, window.document);
console.log(`window.document.location`, window.document.location);
console.log(`window.document.body`, window.document.body);
//window.document.body.hidden = true

// Récupération d'une référence vers le h1 d'id h1-test

let h1 = document.getElementById("h1-test");
console.log('h1 : ', h1);

h1.title = "Test de titre";

console.log('id de h1 : ', h1.id);

const spanTest = document.createElement("span");
spanTest.innerText = "Hello";

h1.prepend(spanTest);
