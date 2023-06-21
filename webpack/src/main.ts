import { Model } from "./classes/Model"
import { View } from "./classes/View.js"
import { Controller } from "./classes/Controller.js"
import './css/tasks.scss';


const app = new Controller(new Model(), new View());