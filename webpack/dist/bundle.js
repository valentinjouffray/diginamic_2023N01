/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Model.js */ \"./src/classes/Model.js\");\n/* harmony import */ var _classes_View_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/View.js */ \"./src/classes/View.js\");\n/* harmony import */ var _classes_Controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Controller.js */ \"./src/classes/Controller.js\");\n\n\n\nconst app = new _classes_Controller_js__WEBPACK_IMPORTED_MODULE_2__.Controller(new _classes_Model_js__WEBPACK_IMPORTED_MODULE_0__.Model(), new _classes_View_js__WEBPACK_IMPORTED_MODULE_1__.View());\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/classes/Controller.js":
/*!***********************************!*\
  !*** ./src/classes/Controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Controller: () => (/* binding */ Controller)\n/* harmony export */ });\nclass Controller {\r\n  constructor(model, view) {\r\n    this.model = model;\r\n    this.view = view;\r\n\r\n    // Gestion des événements le formulaire via un callback\r\n    this.view.bindForm(this.handleSubmitFormAdd);\r\n\r\n    // Récupération asynchrone des tâches\r\n    this.getTasks();\r\n  }\r\n  async getTasks() {\r\n    try {\r\n      // Récupération des tâches\r\n      await this.model.getTasks();\r\n\r\n      // Première visualisation de la liste\r\n      this.view.renderTasks(this.model.tasks);\r\n\r\n      // Gestion des événements sur une tâche via un callback\r\n      this.view.bindTask(this.handleTaskEvent);\r\n    } catch (error) {\r\n      console.error(`Erreur attrapée : `, error);\r\n    }\r\n\r\n  }\r\n  handleTaskEvent = async (action, taskId) => {\r\n    console.log(`Dans handleTask`, action, taskId);\r\n    switch (action) {\r\n      case \"delete\":\r\n        this.model.deleteLocalTask(taskId);\r\n        this.view.resetTasksElt();\r\n        this.view.renderTasks(this.model.tasks);\r\n        // Gestion des événements via un callback\r\n        this.view.bindTask(this.handleTaskEvent);\r\n        try {\r\n          await this.model.deleteRemoteTask(taskId);\r\n        } catch (error) {\r\n          console.error(`Erreur attrapée lors de la suppression de la tâche sur le serveur`, error);\r\n        }\r\n        break;\r\n      case \"validate\":\r\n        this.model.validateLocalTask(taskId);\r\n        this.view.resetTasksElt();\r\n        this.view.renderTasks(this.model.tasks);\r\n        // Gestion des événements via un callback\r\n        this.view.bindTask(this.handleTaskEvent);\r\n        try {\r\n          await this.model.validateRemoteTask(taskId);\r\n        } catch (error) {\r\n          console.error(`Erreur attrapée lors de la modification de la tâche sur le serveur`, error);\r\n        }\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n    // il suffit de traiter les données en fonction de l'action et de l'id de la tâche\r\n  }\r\n  handleSubmitFormAdd = async (task) => {\r\n    console.log(`Dans handleSubmitFormAdd`, task);\r\n\r\n    // Communication avec le modèle (ajout d'une tâche)\r\n    await this.model.addTask(task);\r\n    // On va chercher les nouvelles tasks\r\n    await this.model.getTasks();\r\n    // On recharche la vue\r\n    this.view.resetTasksElt();\r\n    this.view.renderTasks(this.model.tasks);\r\n    // On gère les événements sur les tâches\r\n    this.view.bindTask(this.handleTaskEvent);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/classes/Controller.js?");

/***/ }),

/***/ "./src/classes/Model.js":
/*!******************************!*\
  !*** ./src/classes/Model.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Model: () => (/* binding */ Model)\n/* harmony export */ });\nclass Model {\r\n  constructor() {\r\n    this.tasks = [];\r\n    this.getTasks();\r\n  }\r\n  getTasks() {\r\n    return fetch(\"http://localhost:3000/tasks\")\r\n      .then(response => {\r\n        console.log(`statut de la reponse`, response.status);\r\n        return response.json();\r\n      })\r\n      .then(tasks => {\r\n        this.tasks = tasks;\r\n      })\r\n  }\r\n  deleteLocalTask(taskId) {\r\n    const taskIndex = this.tasks.findIndex(task => {\r\n      return task.id == taskId;\r\n    });\r\n    this.tasks.splice(taskIndex, 1);\r\n  }\r\n  async deleteRemoteTask(taskId) {\r\n    // on supprime sur le serveur\r\n    return fetch(`http://localhost:3000/tasks/${taskId}`,\r\n      {\r\n        headers: {\r\n          'Accept': 'application/json',\r\n          'Content-Type': 'application/json'\r\n        },\r\n        method: \"DELETE\"\r\n      })\r\n      .then((response) => {\r\n        return response.json();\r\n      })\r\n      .then(function (data) { console.log(\"data après suppression : \", data) });\r\n  }\r\n  addTask(task) {\r\n    //this.tasks.push(task);\r\n    return fetch(\"http://localhost:3000/tasks\",\r\n      {\r\n        headers: {\r\n          'Accept': 'application/json',\r\n          'Content-Type': 'application/json'\r\n        },\r\n        method: \"POST\",\r\n        body: JSON.stringify(task)\r\n      })\r\n      .then(function (res) { console.log(\"Tout s'est bien passé\", res) })\r\n      .catch(function (res) { console.error(\"Erreur attrapée\", res) })\r\n  }\r\n  validateLocalTask(taskId) {\r\n    const taskIndex = this.tasks.findIndex(task => {\r\n      return task.id == taskId;\r\n    });\r\n    console.log(`Dans  validateTask - taskIndex - taskId - this  : `, taskIndex, taskId, this);\r\n    this.tasks[taskIndex].done = !this.tasks[taskIndex].done;\r\n  }\r\n  async validateRemoteTask(taskId) {\r\n    const taskIndex = this.tasks.findIndex(task => {\r\n      return task.id == taskId;\r\n    });\r\n    // on modifie sur le serveur\r\n    return fetch(`http://localhost:3000/tasks/${taskId}`,\r\n      {\r\n        headers: {\r\n          'Accept': 'application/json',\r\n          'Content-Type': 'application/json'\r\n        },\r\n        method: \"PUT\",\r\n        body: JSON.stringify(this.tasks[taskIndex])\r\n      })\r\n      .then((response) => {\r\n        return response.json();\r\n      })\r\n      .then(function (data) { console.log(\"data après modification : \", data) });\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/classes/Model.js?");

/***/ }),

/***/ "./src/classes/View.js":
/*!*****************************!*\
  !*** ./src/classes/View.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   View: () => (/* binding */ View)\n/* harmony export */ });\n/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/utils.js */ \"./src/utils/utils.js\");\n\r\nclass View {\r\n  constructor() {\r\n    this.root = document.getElementById(\"root\");\r\n    this.domElements = this.render();\r\n  }\r\n  /**\r\n   * Crée les premiers éléments de l'interface\r\n   * @returns Object DOMElements\r\n   */\r\n  render() {\r\n    const form = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.createMarkup)(\"form\", \"\", this.root, [{ \"class\": \"my-2 d-flex justify-content-start gap-3 border-bottom pb-3 \" }]);\r\n    const label = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.createMarkup)(\"label\", \"Tâche : \", form, [{ \"class\": \"form-label\" }]);\r\n    const input = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.createMarkup)(\"input\", \"\", form, [{ type: \"text\" }, { class: \"\" }, { id: \"input-label\" }]);\r\n    const submit = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.createMarkup)(\"input\", \"\", form, [{ type: \"submit\" }, { value: \"Envoyer\" }]);\r\n    const tasksSection = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.createMarkup)(\"section\", \"\", this.root, [{ id: \"tasks\" }]);\r\n    return {\r\n      form: form,\r\n      label: label,\r\n      input: input,\r\n      label: label,\r\n      tasksSection: tasksSection,\r\n      submit: submit,\r\n      tasksElt: []\r\n    }\r\n  }\r\n  renderTasks(tasks) {\r\n    // On fait le ménage\r\n    this.domElements.tasksSection.innerHTML = \"\";\r\n    // Création des tâches\r\n    tasks.sort((a,b)=>{\r\n      return a.done - b.done;\r\n    }).forEach(task => {\r\n      const validateCssClass = task.done ? \" text-decoration-line-through\" : \"\";\r\n      const validateLabelButton = task.done ? \"Invalider\" : \"Valider\";\r\n\r\n      const taskElt = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.createMarkup)(\"section\", \"\", this.domElements[\"tasksSection\"], [{ class: \"task my-3\" }, { id: task.id }]);\r\n      const taskLabel = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.createMarkup)(\"h2\", task.label, taskElt, [{ \"class\": \"h2-task\" + validateCssClass }]);\r\n\r\n      const taskDelete = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.createMarkup)(\"button\", \"Supprimer\", taskElt, [{ \"class\": \"btn btn-danger\" }, { \"data-action\": \"delete\" }]);\r\n\r\n      const taskValidate = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.createMarkup)(\"button\", validateLabelButton, taskElt, [{ \"class\": \"btn btn-success\" }, { \"data-action\": \"validate\" }]);\r\n      this.domElements.tasksElt.push(taskElt);\r\n    })\r\n  }\r\n  /**\r\n   * \r\n   * @param {Function} handler // se situe dans le controller\r\n   */\r\n  bindTask(handler) {\r\n    this.domElements.tasksElt.forEach(task => {\r\n      task.onclick = (event) => {\r\n        switch (event.target.getAttribute(\"data-action\")) {\r\n          case \"delete\":\r\n            if (window.confirm(\"Voulez-vous supprimer cette tâche ?\")) {\r\n              handler(\"delete\", task.id);\r\n            }\r\n            break;\r\n          case \"validate\":\r\n            handler(\"validate\", task.id);\r\n            break;\r\n          default:\r\n            break;\r\n        }\r\n\r\n      };\r\n    })\r\n\r\n  }\r\n  bindForm(handler) {\r\n    // Gestion du sumbit sur le formulaire\r\n    this.domElements.form.onsubmit = (event) => {\r\n      event.preventDefault();\r\n      const label = document.getElementById(\"input-label\").value;\r\n      document.getElementById(\"input-label\").value = \"\";\r\n      if(label) {\r\n        const newTask = {\r\n          id: parseInt(Math.random() * 1_000_000),\r\n          label: label,\r\n          done: false\r\n        };\r\n        handler(newTask);\r\n      }\r\n    }\r\n  }\r\n  resetTasksElt() {\r\n    this.domElements.tasksElt = [];\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/classes/View.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMarkup: () => (/* binding */ createMarkup)\n/* harmony export */ });\n/**\r\n   * Crée un élément du dom, lui ajoute du texte, le place comme dernier\r\n   * enfant de parent et ajoute un attribut en utilisant le paramètre attribute\r\n   * @param {String} markup_name \r\n   * @param {String} text \r\n   * @param {domElement} parent \r\n   * @param {Array[Object]} attributes  (doit comprendre les propriétés name et value)\r\n   * @returns domElement\r\n   */\r\nfunction createMarkup(markupname, text, parent, attributes = []) {\r\n  const markup = document.createElement(markupname);\r\n  markup.textContent = text;\r\n  parent.appendChild(markup);\r\n  for (const attribute of attributes) {\r\n    for (let key in attribute) {\r\n      markup.setAttribute(key, attribute[key]);\r\n    }\r\n  }\r\n  return markup;\r\n}\n\n//# sourceURL=webpack:///./src/utils/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;