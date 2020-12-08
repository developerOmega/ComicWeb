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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/series/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: publicKey, ts, hash, url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"publicKey\", function() { return publicKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ts\", function() { return ts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hash\", function() { return hash; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"url\", function() { return url; });\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\n\nlet pvk = fs.readFileSync('keys/private.key', 'utf8');\nlet pbk = fs.readFileSync('keys/public.key', 'utf8');\nconst nodeEnv = \"development\" || false;\nconst url = 'https://gateway.marvel.com:443';\nconst publicKey = nodeEnv === 'development' ? pbk : process.env.PUBLIC_KEY;\nconst privateKey = nodeEnv === 'development' ? pvk : process.env.PRIVATE_KEY;\nconst ts = new Date().getTime();\nconst hash = Object(crypto_js__WEBPACK_IMPORTED_MODULE_0__[\"MD5\"])(ts + privateKey + publicKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvY29uZmlnLmpzPzM5YzYiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwicHZrIiwicmVhZEZpbGVTeW5jIiwicGJrIiwibm9kZUVudiIsInVybCIsInB1YmxpY0tleSIsInByb2Nlc3MiLCJlbnYiLCJQVUJMSUNfS0VZIiwicHJpdmF0ZUtleSIsIlBSSVZBVEVfS0VZIiwidHMiLCJEYXRlIiwiZ2V0VGltZSIsImhhc2giLCJNRDUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTUEsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLGNBQUQsQ0FBbEI7O0FBQ0E7QUFFQSxJQUFJQyxHQUFHLEdBQUdGLEVBQUUsQ0FBQ0csWUFBSCxDQUFnQixrQkFBaEIsRUFBb0MsTUFBcEMsQ0FBVjtBQUNBLElBQUlDLEdBQUcsR0FBR0osRUFBRSxDQUFDRyxZQUFILENBQWdCLGlCQUFoQixFQUFtQyxNQUFuQyxDQUFWO0FBRUEsTUFBTUUsT0FBTyxHQUFHLGlCQUF3QixLQUF4QztBQUVBLE1BQU1DLEdBQUcsR0FBRyxnQ0FBWjtBQUVBLE1BQU1DLFNBQVMsR0FBR0YsT0FBTyxLQUFLLGFBQVosR0FBNEJELEdBQTVCLEdBQWtDSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBaEU7QUFDQSxNQUFNQyxVQUFVLEdBQUdOLE9BQU8sS0FBSyxhQUFaLEdBQTRCSCxHQUE1QixHQUFrQ00sT0FBTyxDQUFDQyxHQUFSLENBQVlHLFdBQWpFO0FBRUEsTUFBTUMsRUFBRSxHQUFHLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFYO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxxREFBRyxDQUFDSixFQUFFLEdBQUdGLFVBQUwsR0FBa0JKLFNBQW5CLENBQWhCIiwiZmlsZSI6Ii4vY29uZmlnL2NvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmltcG9ydCB7IE1ENSB9IGZyb20gJ2NyeXB0by1qcyc7XG5cbmxldCBwdmsgPSBmcy5yZWFkRmlsZVN5bmMoJ2tleXMvcHJpdmF0ZS5rZXknLCAndXRmOCcpO1xubGV0IHBiayA9IGZzLnJlYWRGaWxlU3luYygna2V5cy9wdWJsaWMua2V5JywgJ3V0ZjgnKTtcblxuY29uc3Qgbm9kZUVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5cbmNvbnN0IHVybCA9ICdodHRwczovL2dhdGV3YXkubWFydmVsLmNvbTo0NDMnO1xuXG5jb25zdCBwdWJsaWNLZXkgPSBub2RlRW52ID09PSAnZGV2ZWxvcG1lbnQnID8gcGJrIDogcHJvY2Vzcy5lbnYuUFVCTElDX0tFWTtcbmNvbnN0IHByaXZhdGVLZXkgPSBub2RlRW52ID09PSAnZGV2ZWxvcG1lbnQnID8gcHZrIDogcHJvY2Vzcy5lbnYuUFJJVkFURV9LRVk7XG5cbmNvbnN0IHRzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5jb25zdCBoYXNoID0gTUQ1KHRzICsgcHJpdmF0ZUtleSArIHB1YmxpY0tleSk7XG5cbmV4cG9ydCB7XG4gIHB1YmxpY0tleSwgdHMsIGhhc2gsIHVybFxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/config.js\n");

/***/ }),

/***/ "./pages/series/[id].js":
/*!******************************!*\
  !*** ./pages/series/[id].js ***!
  \******************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ \"./config/config.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/daniel/Escritorio/reactJS/comic_web/pages/series/[id].js\";\n\n\n\n\nconst Story = ({\n  serie\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    id\n  } = router.query;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: [\" Serie: \", serie.title, \" \"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 10\n  }, undefined);\n};\n\nasync function getStaticPaths() {\n  const link = `${_config_config__WEBPACK_IMPORTED_MODULE_2__[\"url\"]}/v1/public/series?ts=${_config_config__WEBPACK_IMPORTED_MODULE_2__[\"ts\"]}&apikey=${_config_config__WEBPACK_IMPORTED_MODULE_2__[\"publicKey\"]}&hash=${_config_config__WEBPACK_IMPORTED_MODULE_2__[\"hash\"]}`;\n  const req = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(link);\n  const series = req.data.data.results;\n  const paths = series.map(serie => `/series/${serie.id}`);\n  return {\n    paths,\n    fallback: false\n  };\n}\nasync function getStaticProps({\n  params\n}) {\n  const link = `${_config_config__WEBPACK_IMPORTED_MODULE_2__[\"url\"]}/v1/public/series/${params.id}?ts=${_config_config__WEBPACK_IMPORTED_MODULE_2__[\"ts\"]}&apikey=${_config_config__WEBPACK_IMPORTED_MODULE_2__[\"publicKey\"]}&hash=${_config_config__WEBPACK_IMPORTED_MODULE_2__[\"hash\"]}`;\n  const req = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(link);\n  return {\n    props: {\n      serie: req.data.data.results[0]\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Story);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZXJpZXMvLmpzPzI0OGYiXSwibmFtZXMiOlsiU3RvcnkiLCJzZXJpZSIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ0aXRsZSIsImdldFN0YXRpY1BhdGhzIiwibGluayIsInVybCIsInRzIiwicHVibGljS2V5IiwiaGFzaCIsInJlcSIsImF4aW9zIiwiZ2V0Iiwic2VyaWVzIiwiZGF0YSIsInJlc3VsdHMiLCJwYXRocyIsIm1hcCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFhO0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBU0YsTUFBTSxDQUFDRyxLQUF0QjtBQUVBLHNCQUFPO0FBQUEsMkJBQWFKLEtBQUssQ0FBQ0ssS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUxEOztBQU9PLGVBQWVDLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsSUFBSSxHQUFJLEdBQUVDLGtEQUFJLHdCQUF1QkMsaURBQUcsV0FBVUMsd0RBQVUsU0FBUUMsbURBQUssRUFBL0U7QUFDQSxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVUCxJQUFWLENBQWxCO0FBQ0EsUUFBTVEsTUFBTSxHQUFHSCxHQUFHLENBQUNJLElBQUosQ0FBU0EsSUFBVCxDQUFjQyxPQUE3QjtBQUNBLFFBQU1DLEtBQUssR0FBR0gsTUFBTSxDQUFDSSxHQUFQLENBQVduQixLQUFLLElBQUssV0FBV0EsS0FBSyxDQUFDRyxFQUFJLEVBQTFDLENBQWQ7QUFDQSxTQUFPO0FBQUNlLFNBQUQ7QUFBUUUsWUFBUSxFQUFFO0FBQWxCLEdBQVA7QUFDRDtBQUVNLGVBQWVDLGNBQWYsQ0FBOEI7QUFBQ0M7QUFBRCxDQUE5QixFQUF3QztBQUM3QyxRQUFNZixJQUFJLEdBQUksR0FBRUMsa0RBQUkscUJBQW9CYyxNQUFNLENBQUNuQixFQUFHLE9BQU1NLGlEQUFHLFdBQVVDLHdEQUFVLFNBQVFDLG1EQUFLLEVBQTVGO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVVAsSUFBVixDQUFsQjtBQUNBLFNBQU87QUFDTGdCLFNBQUssRUFBRTtBQUNMdkIsV0FBSyxFQUFFWSxHQUFHLENBQUNJLElBQUosQ0FBU0EsSUFBVCxDQUFjQyxPQUFkLENBQXNCLENBQXRCO0FBREY7QUFERixHQUFQO0FBS0Q7QUFFY2xCLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc2VyaWVzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1cmwsIHRzLCBwdWJsaWNLZXksIGhhc2ggfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFN0b3J5ID0gKHtzZXJpZX0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICByZXR1cm4gPHA+IFNlcmllOiB7IHNlcmllLnRpdGxlIH0gPC9wPlxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGxpbmsgPSBgJHt1cmx9L3YxL3B1YmxpYy9zZXJpZXM/dHM9JHt0c30mYXBpa2V5PSR7cHVibGljS2V5fSZoYXNoPSR7aGFzaH1gO1xuICBjb25zdCByZXEgPSBhd2FpdCBheGlvcy5nZXQobGluayk7XG4gIGNvbnN0IHNlcmllcyA9IHJlcS5kYXRhLmRhdGEucmVzdWx0cztcbiAgY29uc3QgcGF0aHMgPSBzZXJpZXMubWFwKHNlcmllID0+IGAvc2VyaWVzLyR7IHNlcmllLmlkIH1gKTtcbiAgcmV0dXJuIHtwYXRocywgZmFsbGJhY2s6IGZhbHNlfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXN9KSB7XG4gIGNvbnN0IGxpbmsgPSBgJHt1cmx9L3YxL3B1YmxpYy9zZXJpZXMvJHtwYXJhbXMuaWR9P3RzPSR7dHN9JmFwaWtleT0ke3B1YmxpY0tleX0maGFzaD0ke2hhc2h9YDtcbiAgY29uc3QgcmVxID0gYXdhaXQgYXhpb3MuZ2V0KGxpbmspO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBzZXJpZTogcmVxLmRhdGEuZGF0YS5yZXN1bHRzWzBdXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3J5OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/series/[id].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG8tanNcIj9mZTZkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImNyeXB0by1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0by1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///crypto-js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

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