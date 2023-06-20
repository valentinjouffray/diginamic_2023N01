import { createMarkup } from "../utils/utils.js";
export class Task {
  constructor(label, id, done) {
    this.label = label;
    this.id = id;
    this.done = done;

    
  }
  render() {
    const section = createMarkup("section", "", document.getElementById("tasks"));
  }
}