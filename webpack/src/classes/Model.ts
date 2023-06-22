import { Task } from "../interfaces/Task";

export class Model {
  tasks: Task[];
  constructor() {
    this.tasks = [];
    this.loadTasks();
  }
  loadTasks(): Promise<void> {
    return fetch("http://localhost:3000/tasks")
      .then(response => {
        console.log(`statut de la reponse`, response.status);
        return response.json();
      })
      .then(tasks => {
        this.tasks = tasks;
      })
  }
  deleteLocalTask(taskId) {
    const taskIndex = this.tasks.findIndex(task => {
      return task.id == taskId;
    });
    this.tasks.splice(taskIndex, 1);
  }
  async deleteRemoteTask(taskId) {
    // on supprime sur le serveur
    return fetch(`http://localhost:3000/tasks/${taskId}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE"
      })
      .then((response) => {
        return response.json();
      })
      .then(function (data) { console.log("data après suppression : ", data) });
  }
  addTask(task) {
    //this.tasks.push(task);
    return fetch("http://localhost:3000/tasks",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(task)
      })
      .then(function (res) { console.log("Tout s'est bien passé", res) })
      .catch(function (res) { console.error("Erreur attrapée", res) })
  }
  validateLocalTask(taskId) {
    const taskIndex = this.tasks.findIndex(task => {
      return task.id == taskId;
    });
    console.log(`Dans  validateTask - taskIndex - taskId - this  : `, taskIndex, taskId, this);
    this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
  }
  async validateRemoteTask(taskId) {
    const taskIndex = this.tasks.findIndex(task => {
      return task.id == taskId;
    });
    // on modifie sur le serveur
    return fetch(`http://localhost:3000/tasks/${taskId}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(this.tasks[taskIndex])
      })
      .then((response) => {
        return response.json();
      })
      .then(function (data) { console.log("data après modification : ", data) });
  }
}