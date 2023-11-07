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

/***/ "./src/InitializeWeb.js":
/*!******************************!*\
  !*** ./src/InitializeWeb.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\nfunction createHeader() {\n  var header = document.createElement(\"header\");\n  header.classList.add(\"header\");\n  var restaurantName = document.createElement(\"h1\");\n  restaurantName.textContent = \"Pizza Factory\";\n  restaurantName.classList.add(\"restaurantName\");\n  header.appendChild(restaurantName);\n  header.appendChild(createNavbar());\n  return header;\n}\nfunction createNavbar() {\n  var navBar = document.createElement(\"nav\");\n  var homeButton = document.createElement(\"button\");\n  homeButton.classList.add(\"homeButton\");\n  homeButton.textContent = \"HOME\";\n  homeButton.addEventListener(\"click\", function () {\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n  var menuButton = document.createElement(\"button\");\n  menuButton.classList.add(\"menuButton\");\n  menuButton.textContent = \"Menu\";\n  menuButton.addEventListener(\"click\", function () {\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n  var contactButton = document.createElement(\"button\");\n  contactButton.classList.add(\"contactButton\");\n  contactButton.textContent = \"CONTACT\";\n  navBar.appendChild(homeButton);\n  navBar.appendChild(menuButton);\n  navBar.appendChild(contactButton);\n  return navBar;\n}\nfunction initializeWebsite() {\n  var content = document.getElementById(\"content\");\n  content.appendChild(createHeader());\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://project-restaurantpage/./src/InitializeWeb.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n  var home = document.createElement(\"div\");\n  home.classList.add(\"homeContainer\");\n  var homeImage = document.createElement(\"img\");\n  homeImage.src = \"images/chef.png\";\n  home.appendChild(Paragraph(\"Best pizza in your country\"));\n  home.appendChild(Paragraph(\"Made with passion since 1908\"));\n  home.appendChild(homeImage);\n  home.appendChild(Paragraph(\"Order online or visit us!\"));\n  return home;\n}\nfunction Paragraph(string) {\n  var paragraphText = document.createElement(\"p\");\n  paragraphText.textContent = string;\n  return paragraphText;\n}\nfunction loadHome() {\n  var content = document.querySelector(\".content\");\n  if (document.querySelector(\".menuItem\")) {\n    var removeMenuContent = document.querySelector(\".menuItem\");\n    removeMenuContent.textContent = \"\";\n  }\n  content.appendChild(createHome());\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://project-restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _InitializeWeb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InitializeWeb.js */ \"./src/InitializeWeb.js\");\n\n(0,_InitializeWeb_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://project-restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction MenuItems() {\n  var item = document.createElement(\"div\");\n  item.classList.add(\"menuItem\");\n  item.appendChild(createMenuItem(\"Salsiccia\", \"Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil\"));\n  item.appendChild(createMenuItem(\"Gamberi\", \"Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil\"));\n  item.appendChild(createMenuItem(\"Pepe\", \"Tomato sauce, Mozarella, Chilli flakes, Olives, Basil\"));\n  item.appendChild(createMenuItem(\"Disgustoso\", \"Tomato sauce, Bacon, Pineapple, Olives, Basil\"));\n  item.appendChild(createMenuItem(\"Colorato\", \"Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil\"));\n  item.appendChild(createMenuItem(\"Pomodoro\", \"Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli\"));\n  item.appendChild(createMenuItem(\"Crema\", \"White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil\"));\n  item.appendChild(createMenuItem(\"Carne\", \"Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli\"));\n  return item;\n}\nfunction createMenuItem(name, description) {\n  var menuItemItem = document.createElement(\"div\");\n  menuItemItem.classList.add(\"menuItem-item\");\n  var dishName = document.createElement(\"h2\");\n  dishName.textContent = name;\n  var dishDescription = document.createElement(\"p\");\n  dishDescription.textContent = description;\n  var dishImage = document.createElement(\"img\");\n  dishImage.src = \"./images/pizza/\".concat(name.toLowerCase(), \".png\");\n  dishImage.alt = \"\".concat(name);\n  menuItemItem.appendChild(dishImage);\n  menuItemItem.appendChild(dishName);\n  menuItemItem.appendChild(dishDescription);\n  return menuItemItem;\n}\nfunction loadMenuItem() {\n  var content = document.querySelector(\".homeContainer\");\n  content.textContent = \"\";\n  content.appendChild(MenuItems());\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuItem);\n\n//# sourceURL=webpack://project-restaurantpage/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;