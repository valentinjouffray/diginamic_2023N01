const fruits = ['Apple', 'Banana'];
console.log(fruits.length);// 2[]
console.log("fruits : ", fruits);
// foreach est une higher order function
fruits.push('Orange');
fruits.forEach((fruit, index) => {
  console.log(`fruit : `, fruit);
  console.log(`index : `, index);
})

const users = [
  "Bob Dylan",
  "Steeve Job",
  "Frederic Boutchou"
];
// Je crée un nouveau tableau d'item de liste depuis users
const liUsers = users.map((user) => {
  return `<li>${user}</li>`;
});
console.log(`users`, users);
console.log(`liUsers`, liUsers);

// Filter les utilisateurs dont le nom ou le prénom comprend un "e"
// on peut utiliser includees
const usersWithE = users.filter((user) => user.includes("e"));
console.log(`usersWithE`, usersWithE);


const jc = {
  nom: "Dusse",
  prenom: "Jean-Claude",
  sePresenter: function(){
    console.log("Bonjour, je m'appelle " +
    this.prenom + " " + this.nom);
  }
}
for(let key in jc) {
  console.log(key + " : " + jc[key]);
}


