/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/draw.ts":
/*!*********************!*\
  !*** ./src/draw.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst GRID_WIDTH = 35;\r\nconst CANVAS_PADDING = 50;\r\nfunction draw(data, canvas) {\r\n    const context = canvas.getContext('2d');\r\n    // 默认入口出口\r\n    const grids = data.grids.map(grid => Object.assign({}, grid));\r\n    grids[0].top = true;\r\n    grids[grids.length - 1].bottom = true;\r\n    for (let row = 0; row < data.rows; row++) {\r\n        for (let col = 0; col < data.cols; col++) {\r\n            const index = data.cols * row + col;\r\n            const grid = grids[index];\r\n            console.log(grid);\r\n            context.lineWidth = 2;\r\n            if (!grid.top) {\r\n                context.moveTo(CANVAS_PADDING + col * GRID_WIDTH, CANVAS_PADDING + row * GRID_WIDTH);\r\n                context.lineTo(CANVAS_PADDING + (col + 1) * GRID_WIDTH, CANVAS_PADDING + row * GRID_WIDTH);\r\n                context.stroke();\r\n            }\r\n            if (!grid.right) {\r\n                context.moveTo(CANVAS_PADDING + (col + 1) * GRID_WIDTH, CANVAS_PADDING + row * GRID_WIDTH);\r\n                context.lineTo(CANVAS_PADDING + (col + 1) * GRID_WIDTH, CANVAS_PADDING + (row + 1) * GRID_WIDTH);\r\n                context.stroke();\r\n            }\r\n            if (!grid.bottom) {\r\n                context.moveTo(CANVAS_PADDING + (col + 1) * GRID_WIDTH, CANVAS_PADDING + (row + 1) * GRID_WIDTH);\r\n                context.lineTo(CANVAS_PADDING + col * GRID_WIDTH, CANVAS_PADDING + (row + 1) * GRID_WIDTH);\r\n                context.stroke();\r\n            }\r\n            if (!grid.left) {\r\n                context.moveTo(CANVAS_PADDING + col * GRID_WIDTH, CANVAS_PADDING + (row + 1) * GRID_WIDTH);\r\n                context.lineTo(CANVAS_PADDING + col * GRID_WIDTH, CANVAS_PADDING + row * GRID_WIDTH);\r\n                context.stroke();\r\n            }\r\n        }\r\n    }\r\n}\r\nexports.draw = draw;\r\n\n\n//# sourceURL=webpack:///./src/draw.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst draw_1 = __webpack_require__(/*! ./draw */ \"./src/draw.ts\");\r\nconst canvas = document.getElementById('canvas');\r\nconst mock = {\r\n    rows: 2,\r\n    cols: 2,\r\n    grids: [\r\n        { right: true },\r\n        { left: true, bottom: true },\r\n        { right: true },\r\n        { top: true, left: true }\r\n    ]\r\n};\r\ndraw_1.draw(mock, canvas);\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });