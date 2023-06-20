import { createMarkup } from './../utils/utils.js';
export class View {
  constructor(controller) {
    this.controller = controller;
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
      tasksElt: []
    }
  }
  renderTasks(tasks){
    // On fait le ménage
    this.domElements.tasksSection.innerHTML = "";
    // Création des tâches
    tasks.forEach(task => {
      const taskElt = createMarkup("section", "", this.domElements["tasksSection"],[{class:"task"},{id: task.id}]);
      const taskLabel = createMarkup("h2", task.label, taskElt,[{"class": "h2-task"}]);

      const taskDelete = createMarkup("button", "Supprimer", taskElt,[{"class": "button-delete"}]);

      const taskValidate = createMarkup("button", "Valider", taskElt,[{"class": "button-validate"}]);
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
        console.log(`event.target class`, event.target.getAttribute("class"));
        if(event.target.getAttribute("class") == "button-delete") {
          handler("delete", task.id);
        }
        if(event.target.getAttribute("class") == "button-validate") {
          handler("validate", task.id);
        }
       
      };
    })
    
  }
}