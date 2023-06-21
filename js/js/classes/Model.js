export class Model {
  constructor() {
    this.tasks = [
      {id: 10, label: "Faire le ménage", done: false},
      {id: 20, label: "Faire les courses", done: false},
    ]
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