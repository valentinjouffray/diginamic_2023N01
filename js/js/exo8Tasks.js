import { Model } from "./classes/Model.js"
import { View } from "./classes/View.js"
import { Controller } from "./classes/Controller.js"


const app = new Controller(new Model(), new View());