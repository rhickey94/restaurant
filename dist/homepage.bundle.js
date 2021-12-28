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

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction homepage() {\n  const section = document.createElement(\"section\");\n\n  section.appendChild(sectionHeader());\n  section.appendChild(reviewArticle());\n  section.appendChild(hoursArticle());\n  section.appendChild(address());\n\n  return section;\n}\n\nfunction sectionHeader() {\n  const sectionHeader = document.createElement(\"h1\");\n  sectionHeader.textContent = \"Restaurant for eating!\";\n\n  return sectionHeader;\n}\n\nfunction reviewArticle() {\n  const reviewArticle = document.createElement(\"article\");\n  const reviewArticlePara = document.createElement(\"p\");\n\n  const reviewArticleContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ratione, deserunt commodi\n  quam ducimus a eos ipsam tenetur quo ex, fugit mollitia dolores, quis esse sed nam sit\n  debitis dicta quos distinctio. Totam at exercitationem nulla libero facilis inventore\n  earum! Recusandae fugit in debitis et numquam ipsa minus non labore.`;\n\n  reviewArticlePara.textContent = reviewArticleContent;\n  reviewArticle.appendChild(reviewArticlePara);\n\n  return reviewArticle;\n}\n\nfunction hoursArticle() {\n  const daysOfTheWeek = [\n    \"Sunday\",\n    \"Monday\",\n    \"Tuesday\",\n    \"Wednesday\",\n    \"Thursday\",\n    \"Friday\",\n    \"Saturday\",\n  ];\n\n  const hoursArticle = document.createElement(\"article\");\n\n  const hoursHeader = document.createElement(\"h3\");\n  hoursHeader.textContent = \"Hours\";\n\n  hoursArticle.appendChild(hoursHeader);\n\n  const hoursList = document.createElement(\"ul\");\n  daysOfTheWeek.forEach((day) => {\n    const li = document.createElement(\"li\");\n    li.textContent = `${day}: 8am - 8pm`;\n\n    hoursList.appendChild(li);\n  });\n\n  hoursArticle.appendChild(hoursList);\n\n  return hoursArticle;\n}\n\nfunction address() {\n  const address = document.createElement(\"address\");\n\n  const addressHeader = document.createElement(\"h3\");\n  addressHeader.textContent = \"Location\";\n\n  address.appendChild(addressHeader);\n\n  const addressPara = document.createElement(\"p\");\n  addressPara.textContent = \"123 Yum St, Yumsville, NY\";\n\n  address.appendChild(addressPara);\n\n  return address;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepage);\n\n\n//# sourceURL=webpack://new-restaurant/./src/homepage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/homepage.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;