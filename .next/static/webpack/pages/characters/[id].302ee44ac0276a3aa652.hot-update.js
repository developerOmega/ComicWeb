webpackHotUpdate_N_E("pages/characters/[id]",{

/***/ "./pages/characters/[id].js":
/*!**********************************!*\
  !*** ./pages/characters/[id].js ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/MainLayout */ \"./layouts/MainLayout.js\");\n/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/axios */ \"./config/axios.js\");\n/* harmony import */ var _components_CardMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CardMain */ \"./components/CardMain.js\");\n/* harmony import */ var _components_CardComic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/CardComic */ \"./components/CardComic.js\");\n\nvar _jsxFileName = \"/home/daniel/Escritorio/reactJS/comic_web/pages/characters/[id].js\";\n\n\n\n\n\n\nconst Character = ({\n  character,\n  comics\n}) => {\n  const getCimics = comics.map(comic => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CardComic__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    comic: comic\n  }, comic.id, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined));\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: \"container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      className: \"title\",\n      children: [\" \", character.name, \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CardMain__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      data: character\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: \" Comics \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"content\",\n      children: getCimics\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, undefined);\n};\n\n_c = Character;\nCharacter.Layout = _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);\n\nvar _c;\n\n$RefreshReg$(_c, \"Character\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVycy8uanM/OTUyYSJdLCJuYW1lcyI6WyJDaGFyYWN0ZXIiLCJjaGFyYWN0ZXIiLCJjb21pY3MiLCJnZXRDaW1pY3MiLCJtYXAiLCJjb21pYyIsImlkIiwibmFtZSIsIkxheW91dCIsIk1haW5MYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLENBQUM7QUFBQ0MsV0FBRDtBQUFZQztBQUFaLENBQUQsS0FBeUI7QUFFekMsUUFBTUMsU0FBUyxHQUFHRCxNQUFNLENBQUNFLEdBQVAsQ0FBWUMsS0FBSyxpQkFDakMscUVBQUMsNkRBQUQ7QUFBMEIsU0FBSyxFQUFFQTtBQUFqQyxLQUFnQkEsS0FBSyxDQUFDQyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGdCLENBQWxCO0FBSUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUMsV0FBbkI7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxPQUFkO0FBQUEsc0JBQXlCTCxTQUFTLENBQUNNLElBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUdFLHFFQUFDLDREQUFEO0FBQVUsVUFBSSxFQUFFTjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFNRTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUEsZ0JBQ0lFO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWFELENBbkJEOztLQUFNSCxTO0FBOENOQSxTQUFTLENBQUNRLE1BQVYsR0FBbUJDLDJEQUFuQjs7QUFFZVQsd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9jaGFyYWN0ZXJzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTWFpbkxheW91dCBmcm9tICcuLi8uLi9sYXlvdXRzL01haW5MYXlvdXQnO1xuaW1wb3J0IHsgcHVibGljS2V5LCBoYXNoLCB0cywgdXJsIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQgeyBnZXRSZXEsIGdldFBhcmFtcyB9IGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XG5cbmltcG9ydCBDYXJkTWFpbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhcmRNYWluJztcbmltcG9ydCBDYXJkQ29taWMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYXJkQ29taWMnO1xuXG5jb25zdCBDaGFyYWN0ZXIgPSAoe2NoYXJhY3RlciwgY29taWNzfSkgPT4ge1xuXG4gIGNvbnN0IGdldENpbWljcyA9IGNvbWljcy5tYXAoIGNvbWljID0+IFxuICAgIDxDYXJkQ29taWMga2V5PXtjb21pYy5pZH0gY29taWM9e2NvbWljfSAgLz5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj4geyBjaGFyYWN0ZXIubmFtZSB9IDwvaDE+XG4gICAgICBcbiAgICAgIDxDYXJkTWFpbiBkYXRhPXtjaGFyYWN0ZXJ9IC8+XG5cbiAgICAgIDxoMz4gQ29taWNzIDwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgeyBnZXRDaW1pY3MgfVxuICAgICAgPC9kaXY+XG5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBsaW5rID0gYCR7dXJsfS92MS9wdWJsaWMvY2hhcmFjdGVycz90cz0ke3RzfSZhcGlrZXk9JHtwdWJsaWNLZXl9Jmhhc2g9JHtoYXNofWA7XG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBhd2FpdCBnZXRSZXEobGluayk7XG4gIFxuICBjb25zdCBwYXRocyA9IGNoYXJhY3RlcnMubWFwKCBjaGFyYWN0ZXIgPT4gYC9jaGFyYWN0ZXJzLyR7Y2hhcmFjdGVyLmlkfWApO1xuICByZXR1cm4ge3BhdGhzLCBmYWxsYmFjazogZmFsc2V9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcblxuICBjb25zdCBsaW5rQ2hhcmFjdGVyID0gYCR7dXJsfS92MS9wdWJsaWMvY2hhcmFjdGVycy8ke3BhcmFtcy5pZH0/dHM9JHt0c30mYXBpa2V5PSR7cHVibGljS2V5fSZoYXNoPSR7aGFzaH1gO1xuICBjb25zdCBsaW5rQ29taWMgPSBgJHt1cmx9L3YxL3B1YmxpYy9jaGFyYWN0ZXJzLyR7cGFyYW1zLmlkfS9jb21pY3M/dHM9JHt0c30mYXBpa2V5PSR7cHVibGljS2V5fSZoYXNoPSR7aGFzaH1gO1xuXG4gIGNvbnN0IGNoYXJhY3RlciA9IGF3YWl0IGdldFJlcShsaW5rQ2hhcmFjdGVyKTtcbiAgY29uc3QgY29taWNzID0gYXdhaXQgZ2V0UmVxKGxpbmtDb21pYyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY2hhcmFjdGVyOiBjaGFyYWN0ZXJbMF0sXG4gICAgICBjb21pY3NcbiAgICB9XG4gIH1cbiAgXG59XG5cbkNoYXJhY3Rlci5MYXlvdXQgPSBNYWluTGF5b3V0O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/characters/[id].js\n");

/***/ })

})