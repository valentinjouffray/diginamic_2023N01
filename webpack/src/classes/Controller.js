export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Gestion des événements le formulaire via un callback
    this.view.bindForm(this.handleSubmitFormAdd);

    // Récupération asynchrone des tâches
    this.refreshTasksView();
  }
  async refreshTasksView() {
    try {
      // Récupération des tâches
      const tasks = await this.model.loadTasks();

      // Première visualisation de la liste
      this.view.renderTasks(this.model.tasks);

      // Gestion des événements sur une tâche via un callback
      this.view.bindTask(this.handleTaskEvent);
    } catch (error) {
      console.error(`Erreur attrapée : `, error);
    }
  }
  handleTaskEvent = async (action, taskId) => {
    console.log(`Dans handleTask`, action, taskId);
    switch (action) {
      case "delete":
        this.model.deleteLocalTask(taskId);
        this.view.resetTasksElt();
        this.view.renderTasks(this.model.tasks);
        // Gestion des événements via un callback
        this.view.bindTask(this.handleTaskEvent);
        try {
          await this.model.deleteRemoteTask(taskId);
        } catch (error) {
          console.error(
            `Erreur attrapée lors de la suppression de la tâche sur le serveur`,
            error
          );
        }
        break;
      case "validate":
        this.model.validateLocalTask(taskId);
        this.view.resetTasksElt();
        this.view.renderTasks(this.model.tasks);
        // Gestion des événements via un callback
        this.view.bindTask(this.handleTaskEvent);
        try {
          await this.model.validateRemoteTask(taskId);
        } catch (error) {
          console.error(
            `Erreur attrapée lors de la modification de la tâche sur le serveur`,
            error
          );
        }
        break;
      default:
        break;
    }
    // il suffit de traiter les données en fonction de l'action et de l'id de la tâche
  };
  handleSubmitFormAdd = async (task) => {
    console.log(`Dans handleSubmitFormAdd`, task);

    // Communication avec le modèle (ajout d'une tâche)
    await this.model.addTask(task);
    // On va chercher les nouvelles tasks
    await this.model.loadTasks();
    // On recharche la vue
    this.view.resetTasksElt();
    this.view.renderTasks(this.model.tasks);
    // On gère les événements sur les tâches
    this.view.bindTask(this.handleTaskEvent);
  };
}
