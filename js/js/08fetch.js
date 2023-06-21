fetch("http://localhost:3000/tasks")
.then(response => {
  console.log(`statut de la reponse`, response.status);
  return response.json();
})
.then(tasks => {
  console.log(`tasks`, tasks);
})
.catch(error => {
  console.error(`Erreur attrapée : `, error);
})