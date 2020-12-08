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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/stories/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/stories/[id].js":
/*!*******************************!*\
  !*** ./pages/stories/[id].js ***!
  \*******************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/daniel/Escritorio/reactJS/comic_web/pages/stories/[id].js\";\n\n\nconst Story = ({\n  serie\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    id\n  } = router.query;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: [\" Serie: \", serie.title, \" \"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 10\n  }, undefined);\n};\n\nasync function getStaticPaths() {\n  const link = `${url}/v1/public/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`;\n  const req = await axios.get(link);\n  const series = req.data.data.results;\n  const paths = series.map(serie => `/stories/${serie.id}`);\n  return {\n    paths,\n    fallback: false\n  };\n}\nasync function getStaticProps({\n  params\n}) {\n  const link = `${url}/v1/public/series/${params.id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;\n  const req = await axios.get(link);\n  return {\n    props: {\n      series: req.data.data.results[0]\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Story);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdG9yaWVzLy5qcz82ODg5Il0sIm5hbWVzIjpbIlN0b3J5Iiwic2VyaWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidGl0bGUiLCJnZXRTdGF0aWNQYXRocyIsImxpbmsiLCJ1cmwiLCJ0cyIsInB1YmxpY0tleSIsImhhc2giLCJyZXEiLCJheGlvcyIsImdldCIsInNlcmllcyIsImRhdGEiLCJyZXN1bHRzIiwicGF0aHMiLCJtYXAiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFhO0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBU0YsTUFBTSxDQUFDRyxLQUF0QjtBQUVBLHNCQUFPO0FBQUEsMkJBQWFKLEtBQUssQ0FBQ0ssS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUxEOztBQU9PLGVBQWVDLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsSUFBSSxHQUFJLEdBQUVDLEdBQUksd0JBQXVCQyxFQUFHLFdBQVVDLFNBQVUsU0FBUUMsSUFBSyxFQUEvRTtBQUNBLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNDLEdBQU4sQ0FBVVAsSUFBVixDQUFsQjtBQUNBLFFBQU1RLE1BQU0sR0FBR0gsR0FBRyxDQUFDSSxJQUFKLENBQVNBLElBQVQsQ0FBY0MsT0FBN0I7QUFDQSxRQUFNQyxLQUFLLEdBQUdILE1BQU0sQ0FBQ0ksR0FBUCxDQUFXbkIsS0FBSyxJQUFLLFlBQVlBLEtBQUssQ0FBQ0csRUFBSSxFQUEzQyxDQUFkO0FBQ0EsU0FBTztBQUFDZSxTQUFEO0FBQVFFLFlBQVEsRUFBRTtBQUFsQixHQUFQO0FBQ0Q7QUFFTSxlQUFlQyxjQUFmLENBQThCO0FBQUNDO0FBQUQsQ0FBOUIsRUFBd0M7QUFDN0MsUUFBTWYsSUFBSSxHQUFJLEdBQUVDLEdBQUkscUJBQW9CYyxNQUFNLENBQUNuQixFQUFHLE9BQU1NLEVBQUcsV0FBVUMsU0FBVSxTQUFRQyxJQUFLLEVBQTVGO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ0MsR0FBTixDQUFVUCxJQUFWLENBQWxCO0FBQ0EsU0FBTztBQUNMZ0IsU0FBSyxFQUFFO0FBQ0xSLFlBQU0sRUFBRUgsR0FBRyxDQUFDSSxJQUFKLENBQVNBLElBQVQsQ0FBY0MsT0FBZCxDQUFzQixDQUF0QjtBQURIO0FBREYsR0FBUDtBQUtEO0FBRWNsQixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3N0b3JpZXMvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgU3RvcnkgPSAoe3NlcmllfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIHJldHVybiA8cD4gU2VyaWU6IHsgc2VyaWUudGl0bGUgfSA8L3A+XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgbGluayA9IGAke3VybH0vdjEvcHVibGljL3Nlcmllcz90cz0ke3RzfSZhcGlrZXk9JHtwdWJsaWNLZXl9Jmhhc2g9JHtoYXNofWA7XG4gIGNvbnN0IHJlcSA9IGF3YWl0IGF4aW9zLmdldChsaW5rKTtcbiAgY29uc3Qgc2VyaWVzID0gcmVxLmRhdGEuZGF0YS5yZXN1bHRzO1xuICBjb25zdCBwYXRocyA9IHNlcmllcy5tYXAoc2VyaWUgPT4gYC9zdG9yaWVzLyR7IHNlcmllLmlkIH1gKTtcbiAgcmV0dXJuIHtwYXRocywgZmFsbGJhY2s6IGZhbHNlfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXN9KSB7XG4gIGNvbnN0IGxpbmsgPSBgJHt1cmx9L3YxL3B1YmxpYy9zZXJpZXMvJHtwYXJhbXMuaWR9P3RzPSR7dHN9JmFwaWtleT0ke3B1YmxpY0tleX0maGFzaD0ke2hhc2h9YDtcbiAgY29uc3QgcmVxID0gYXdhaXQgYXhpb3MuZ2V0KGxpbmspO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBzZXJpZXM6IHJlcS5kYXRhLmRhdGEucmVzdWx0c1swXVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yeTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/stories/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });