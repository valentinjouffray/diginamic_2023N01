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
    const input = createMarkup("input", "", form, [{ type: "text" }, { class: "" }, { id: "input-label" }]);
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
    tasks.sort((a,b)=>{
      return a.done - b.done;
    }).forEach(task => {
      const validateCssClass = task.done ? " text-decoration-line-through" : "";
      const validateLabelButton = task.done ? "Invalider" : "Valider";

      const taskElt = createMarkup("section", "", this.domElements["tasksSection"], [{ class: "task my-3" }, { id: task.id }]);
      const taskLabel = createMarkup("h2", task.label, taskElt, [{ "class": "h2-task" + validateCssClass }]);

      const taskDelete = createMarkup("button", "Supprimer", taskElt, [{ "class": "btn btn-danger" }, { "data-action": "delete" }]);

      const taskValidate = createMarkup("button", validateLabelButton, taskElt, [{ "class": "btn btn-success" }, { "data-action": "validate" }]);
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
            if (window.confirm("Voulez-vous supprimer cette tâche ?")) {
              handler("delete", task.id);
            }
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
  bindForm(handler) {
    // Gestion du sumbit sur le formulaire
    this.domElements.form.onsubmit = (event) => {
      event.preventDefault();
      const label = document.getElementById("input-label").value;
      document.getElementById("input-label").value = "";
      if(label) {
        const newTask = {
          id: parseInt(Math.random() * 1_000_000),
          label: label,
          done: false
        };
        handler(newTask);
      }
    }
  }
  resetTasksElt() {
    this.domElements.tasksElt = [];
  }
}