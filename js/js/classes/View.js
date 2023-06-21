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
    const form = createMarkup("form", "", this.root, [{ "class": "my-2 d-flex justify-content-start gap-3 border-bottom pb-3 " }]);
    const label = createMarkup("label", "Tâche : ", form, [{ "class": "form-label" }]);
    const input = createMarkup("input", "", form, [{ type: "text" }, { class: "" }]);
    const submit = createMarkup("input", "", form, [{ type: "submit" }, { value: "Envoyer" }]);
    const tasksSection = createMarkup("section", "", this.root, [{ id: "tasks" }]);
    return {
      form: form,
      label: label,
      input: input,
      label: label,
      tasksSection: tasksSection,
      submit: submit,
      tasksElt: []
    }
  }
  renderTasks(tasks) {
    // On fait le ménage
    this.domElements.tasksSection.innerHTML = "";
    // Création des tâches
    tasks.forEach(task => {
      const validate = task.done ? " text-decoration-line-through" : "";
      const taskElt = createMarkup("section", "", this.domElements["tasksSection"], [{ class: "task my-3" }, { id: task.id }]);
      const taskLabel = createMarkup("h2", task.label, taskElt, [{ "class": "h2-task" + validate }]);

      const taskDelete = createMarkup("button", "Supprimer", taskElt, [{ "class": "btn btn-danger" }, { "data-action": "delete" }]);

      const taskValidate = createMarkup("button", "Valider", taskElt, [{ "class": "btn btn-success" }, { "data-action": "validate" }]);
      this.domElements.tasksElt.push(taskElt);
    })
  }
  /**
   * 
   * @param {Function} handler // se situe dans le controller
   */
  bindTask(handler) {
    this.domElements.tasksElt.forEach(task => {
      task.onclick = (event) => {
        switch (event.target.getAttribute("data-action")) {
          case "delete":
            handler("delete", task.id);
            break;
          case "validate":
            handler("validate", task.id);
            break;
          default:
            break;
        }

      };
    })

  }
  resetTasksElt() {
    this.domElements.tasksElt = [];
  }
}