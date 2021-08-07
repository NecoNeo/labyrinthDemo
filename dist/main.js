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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst GRID_WIDTH = 35;\r\nconst CANVAS_PADDING = 50;\r\nfunction draw(data, canvas) {\r\n    const context = canvas.getContext('2d');\r\n    // 默认入口出口\r\n    const grids = data.grids.map(grid => Object.assign({}, grid));\r\n    grids[0].top = true;\r\n    grids[grids.length - 1].bottom = true;\r\n    for (let row = 0; row < data.rows; row++) {\r\n        for (let col = 0; col < data.cols; col++) {\r\n            const index = data.cols * row + col;\r\n            const grid = grids[index];\r\n            context.lineWidth = 2;\r\n            if (!grid.top) {\r\n                context.moveTo(CANVAS_PADDING + col * GRID_WIDTH, CANVAS_PADDING + row * GRID_WIDTH);\r\n                context.lineTo(CANVAS_PADDING + (col + 1) * GRID_WIDTH, CANVAS_PADDING + row * GRID_WIDTH);\r\n                context.stroke();\r\n            }\r\n            if (!grid.right) {\r\n                context.moveTo(CANVAS_PADDING + (col + 1) * GRID_WIDTH, CANVAS_PADDING + row * GRID_WIDTH);\r\n                context.lineTo(CANVAS_PADDING + (col + 1) * GRID_WIDTH, CANVAS_PADDING + (row + 1) * GRID_WIDTH);\r\n                context.stroke();\r\n            }\r\n            if (!grid.bottom) {\r\n                context.moveTo(CANVAS_PADDING + (col + 1) * GRID_WIDTH, CANVAS_PADDING + (row + 1) * GRID_WIDTH);\r\n                context.lineTo(CANVAS_PADDING + col * GRID_WIDTH, CANVAS_PADDING + (row + 1) * GRID_WIDTH);\r\n                context.stroke();\r\n            }\r\n            if (!grid.left) {\r\n                context.moveTo(CANVAS_PADDING + col * GRID_WIDTH, CANVAS_PADDING + (row + 1) * GRID_WIDTH);\r\n                context.lineTo(CANVAS_PADDING + col * GRID_WIDTH, CANVAS_PADDING + row * GRID_WIDTH);\r\n                context.stroke();\r\n            }\r\n        }\r\n    }\r\n}\r\nexports.draw = draw;\r\n\n\n//# sourceURL=webpack:///./src/draw.ts?");

/***/ }),

/***/ "./src/generate.ts":
/*!*************************!*\
  !*** ./src/generate.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// dfs\r\nfunction generate(rows, cols) {\r\n    const grids = new Array(rows * cols).fill(0).map(() => ({ visited: false }));\r\n    const pathStack = [0];\r\n    grids[0].visited = true;\r\n    const makePath = (fromIndex, toIndex) => {\r\n        grids[toIndex].visited = true;\r\n        pathStack.push(toIndex);\r\n        if (toIndex - fromIndex === 1) {\r\n            grids[fromIndex].right = true;\r\n            grids[toIndex].left = true;\r\n        }\r\n        else if (fromIndex - toIndex === 1) {\r\n            grids[fromIndex].left = true;\r\n            grids[toIndex].right = true;\r\n        }\r\n        else if (toIndex > fromIndex) {\r\n            grids[fromIndex].bottom = true;\r\n            grids[toIndex].top = true;\r\n        }\r\n        else {\r\n            grids[fromIndex].top = true;\r\n            grids[toIndex].bottom = true;\r\n        }\r\n    };\r\n    do {\r\n        const index = pathStack[pathStack.length - 1];\r\n        const nextGridIndexes = [\r\n            index + cols,\r\n            index - cols,\r\n            ...(() => (index + 1) % cols !== 0 ? [index + 1] : [])(),\r\n            ...(() => index % cols !== 0 ? [index - 1] : [])()\r\n        ]\r\n            .filter(i => grids[i] && grids[i].visited === false);\r\n        if (nextGridIndexes.length) {\r\n            let r = Math.floor(Math.random() * nextGridIndexes.length);\r\n            r = r !== nextGridIndexes.length ? r : r - 1;\r\n            makePath(index, nextGridIndexes[r]);\r\n        }\r\n        else {\r\n            pathStack.pop();\r\n        }\r\n    } while (pathStack.length);\r\n    return {\r\n        rows,\r\n        cols,\r\n        grids: grids.map(grid => {\r\n            return {\r\n                top: grid.top,\r\n                left: grid.left,\r\n                right: grid.right,\r\n                bottom: grid.bottom\r\n            };\r\n        })\r\n    };\r\n}\r\nexports.generate = generate;\r\n\n\n//# sourceURL=webpack:///./src/generate.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst draw_1 = __webpack_require__(/*! ./draw */ \"./src/draw.ts\");\r\nconst generate_1 = __webpack_require__(/*! ./generate */ \"./src/generate.ts\");\r\nconst canvas = document.getElementById('canvas');\r\n// const mock = {\r\n//   rows: 2,\r\n//   cols: 2,\r\n//   grids: [\r\n//     { right: true },\r\n//     { left: true, bottom: true },\r\n//     { right: true },\r\n//     { top: true, left: true }\r\n//   ]\r\n// }\r\n// draw(mock, canvas)\r\nconst data = generate_1.generate(20, 35);\r\ndraw_1.draw(data, canvas);\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });