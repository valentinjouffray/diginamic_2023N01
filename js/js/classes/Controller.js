export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Première visualisation de la liste
    this.view.renderTasks(this.model.tasks);

    // Gestion des événements via un callback
    this.view.bindTask(this.handleTask);
  }
  handleTask(action, taskId) {
    console.log(`Dans handleTask`, action, taskId);
    // il suffit de traiter les données en fonction de l'action et de l'id de la tâche
  }

}