module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/blog/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/blog/[id].js":
/*!****************************!*\
  !*** ./pages/blog/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _posts_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../posts.json */ \"./posts.json\");\nvar _posts_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../posts.json */ \"./posts.json\", 1);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/nano/Developer/Next.js/nextjs-startup/pages/blog/[id].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Post = props => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }, props.post.title), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, \"Published on \", props.date), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, props.post.content));\n};\n\nPost.getInitialProps = async ({\n  query\n}) => {\n  const moment = (await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! moment */ \"moment\", 7))).default();\n  let date = moment.format('dddd D MMMM YYYY');\n  return {\n    date: moment.format('dddd D MMMM YYYY'),\n    post: _posts_json__WEBPACK_IMPORTED_MODULE_1__[query.id]\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLy5qcz8xOTU5Il0sIm5hbWVzIjpbIlBvc3QiLCJwcm9wcyIsInBvc3QiLCJ0aXRsZSIsImRhdGUiLCJjb250ZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJtb21lbnQiLCJkZWZhdWx0IiwiZm9ybWF0IiwicG9zdHMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHQyxLQUFLLElBQUk7QUFDbEIsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsS0FBaEIsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQWlCRixLQUFLLENBQUNHLElBQXZCLENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlILEtBQUssQ0FBQ0MsSUFBTixDQUFXRyxPQUFmLENBSEosQ0FESjtBQU9ILENBUkQ7O0FBVUFMLElBQUksQ0FBQ00sZUFBTCxHQUF1QixPQUFPO0FBQUVDO0FBQUYsQ0FBUCxLQUFxQjtBQUN4QyxRQUFNQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLGtHQUFQLEVBQXlCQyxPQUF6QixFQUFmO0FBQ0EsTUFBSUwsSUFBSSxHQUFHSSxNQUFNLENBQUNFLE1BQVAsQ0FBYyxrQkFBZCxDQUFYO0FBRUEsU0FBTztBQUNITixRQUFJLEVBQUVJLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLGtCQUFkLENBREg7QUFFSFIsUUFBSSxFQUFFUyx3Q0FBSyxDQUFDSixLQUFLLENBQUNLLEVBQVA7QUFGUixHQUFQO0FBSUgsQ0FSRDs7QUFVZVosbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9zdHMgZnJvbSAnLi4vLi4vcG9zdHMuanNvbidcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5jb25zdCBQb3N0ID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+e3Byb3BzLnBvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxwPlB1Ymxpc2hlZCBvbiB7cHJvcHMuZGF0ZX08L3A+XG4gICAgICAgICAgICA8cD57cHJvcHMucG9zdC5jb250ZW50fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgICBjb25zdCBtb21lbnQgPSAoYXdhaXQgaW1wb3J0KCdtb21lbnQnKSkuZGVmYXVsdCgpXG4gICAgbGV0IGRhdGUgPSBtb21lbnQuZm9ybWF0KCdkZGRkIEQgTU1NTSBZWVlZJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkYXRlOiBtb21lbnQuZm9ybWF0KCdkZGRkIEQgTU1NTSBZWVlZJyksXG4gICAgICAgIHBvc3Q6IHBvc3RzW3F1ZXJ5LmlkXVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[id].js\n");

/***/ }),

/***/ "./posts.json":
/*!********************!*\
  !*** ./posts.json ***!
  \********************/
/*! exports provided: test, second, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"test\\\":{\\\"title\\\":\\\"test post\\\",\\\"content\\\":\\\"Hey some post content\\\"},\\\"second\\\":{\\\"title\\\":\\\"second post\\\",\\\"content\\\":\\\"Hey this is the second post content\\\"}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Bvc3RzLmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./posts.json\n");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIj9iZDc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///moment\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });