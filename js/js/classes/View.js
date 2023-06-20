import { createMarkup } from './../utils/utils.js';
export class View {
  constructor() {
    this.root = document.getElementById("root");
    this.domElements = this.render();

  }
  /**
   * Crée les premiers éléments de l'interface
   * @returns Object DOMElements
   */
  render() {
    const form = createMarkup("form", "", this.root);
    const label = createMarkup("label", "Tâche", form);
    const input = createMarkup("input", "", form, [{ type: "text" }]);
    const submit = createMarkup("input", "", form, [{ type: "submit" }, { value: "Envoyer" }]);
    const tasksSection = createMarkup("section", "", this.root, [{ id: "tasks" }]);
    return {
      form: form,
      label: label,
      input: input,
      label: label,
      tasksSection: tasksSection,
      submit: submit,
      todosElt: []
    }
  }
  renderTodos(tasks){
    // On fait le ménage
    this.domElements.tasksSection.innerHTML = "";
    // Création des tâches
    tasks.forEach(task => {
      const taskElt = createMarkup("section", "", this.domElements["tasksSection"],[{class:"task"}]);
      const taskLabel = createMarkup("h2", task.label, taskElt);
      const taskDelete = createMarkup("button", "Supprimer", taskElt);
      
    })
  }
}