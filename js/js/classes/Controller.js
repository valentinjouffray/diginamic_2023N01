export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Première visualisation de la liste
    this.view.renderTasks(this.model.tasks);

    // Gestion des événements via un callback
    this.view.bindTask(this.handleTaskEvent);
  }
  handleTaskEvent = (action, taskId) => {
    console.log(`Dans handleTask`, action, taskId);
    console.log(`this`, this);
    switch (action) {
      case "delete":
        this.model.deleteTask(taskId);
        this.view.resetTasksElt();
        this.view.renderTasks(this.model.tasks);
        // Gestion des événements via un callback
        this.view.bindTask(this.handleTaskEvent);
        break;
      case "validate":
        this.model.validateTask(taskId);
        this.view.resetTasksElt();
        this.view.renderTasks(this.model.tasks);
        // Gestion des événements via un callback
        this.view.bindTask(this.handleTaskEvent);
        break;
      default:
        break;
    }
    // il suffit de traiter les données en fonction de l'action et de l'id de la tâche
  }

}