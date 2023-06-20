export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Première visualisation de la liste
    this.view.renderTodos(this.model.tasks);
  }

}