export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Gestion des événements le formulaire via un callback
    this.view.bindForm(this.handleSubmitFormAdd);

    // Première visualisation de la liste
    this.view.renderTasks(this.model.tasks);

    // Gestion des événements sur une tâche via un callback
    this.view.bindTask(this.handleTaskEvent);


  }
  handleTaskEvent = (action, taskId) => {
    console.log(`Dans handleTask`, action, taskId);
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
  handleSubmitFormAdd = (task) => {
    console.log(`Dans handleSubmitFormAdd`, task);

    // Communication avec le modèle (ajout d'une tâche)
    console.log(`this`,this);
    this.model.addTask(task);
    // On recharche la vue
    this.view.resetTasksElt();
    this.view.renderTasks(this.model.tasks);
    // On gère les événements sur les tâches
    this.view.bindTask(this.handleTaskEvent);
  }

}