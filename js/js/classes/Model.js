export class Model {
  constructor() {
    this.tasks = [];
    this.getTasks();
  }
  getTasks() {
    fetch("http://localhost:3000/tasks")
      .then(response => {
        console.log(`statut de la reponse`, response.status);
        return response.json();
      })
      .then(tasks => {
        this.tasks = tasks;
      })
      .catch(error => {
        console.error(`Erreur attrapée : `, error);
      })
  }
  deleteTask(taskId) {
    const taskIndex = this.tasks.findIndex(task => {
      return task.id == taskId;
    });
    this.tasks.splice(taskIndex, 1);

  }
  addTask(task) {
    this.tasks.push(task);
  }
  validateTask(taskId) {
    const taskIndex = this.tasks.findIndex(task => {
      return task.id == taskId;
    });
    console.log(`Dans  validateTask - taskIndex - taskId - this  : `, taskIndex, taskId, this);
    this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
  }
}