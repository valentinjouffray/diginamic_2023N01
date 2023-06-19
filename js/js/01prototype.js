// fonction constructeur Person
/* function Person(lastname, firstname) {
  // Propriétés de l'objet
  this.lastname = lastname;
  this.firstname = firstname;
  this.introduceMySelf = function() {
    console.log("Bonjour, je m'appelle " +
    this.firstname + " " + this.lastname);
  }
}

// objet littéral
const bob = {
  lastname: "Dylan",
  firstname: "Bob",
  
}
const joe = {
  lastname: "L'indien",
  firstname: "Joe",
} */

/* const bob = new Person("Dylan", "Bob");
const joe = new Person("Dalton", "Joe"); */

/*bob.introduceMySelf();
 joe.introduceMySelf();

if(bob.introduceMySelf == joe.introduceMySelf) console.log("les méthodes sont identiques");
else console.log("les méthodes ne sont pas identiques"); */

class Person {
  constructor(lastname, firstname) {
    // Propriétés de l'objet
    this.lastname = lastname;
    this.firstname = firstname;
  }
  introduceMySelf() {
    console.log("Bonjour, je m'appelle " +
      this.firstname + " " + this.lastname);
  }
}
const bob = new Person("Dylan", "Bob");
const joe = new Person("Dalton", "Joe");

bob.introduceMySelf();
joe.introduceMySelf();

console.log(bob);

class Student extends Person {
  #studentId;// privée (obligé de passer par un getter et un setter)
  constructor(lastname, firstname, studentId) {
    super(lastname, firstname);
    this.studentId = studentId;
  }
  get studentId() {

    return this.#studentId;
  }
  set studentId(studentId) {
    console.log(`Dans set studentId`);
    // Je teste ici si l'uilisateur a le droit de modifier
    if (true) console.log(`Pas le droit`);
    else this.#studentId = studentId;
  }
}
const pedro = new Student("Almodovar", "Pedro", 5687);
console.log(`studentId : `, pedro.studentId);
pedro.introduceMySelf();
console.log(`pedro : `, pedro);

