webpackHotUpdate_N_E("pages/series/[id]",{

/***/ "./components/CardComic.js":
/*!*********************************!*\
  !*** ./components/CardComic.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CardComic_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardComic.module.scss */ \"./components/CardComic.module.scss\");\n/* harmony import */ var _CardComic_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CardComic_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/daniel/Escritorio/reactJS/comic_web/components/CardComic.js\";\n\n\nconst CardComic = ({\n  comic\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _CardComic_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _CardComic_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mainImage,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,\n        width: \"100px\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _CardComic_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.name,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n        children: \" Name: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\" \", comic.title, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _CardComic_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.description,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n        children: \" Description: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\" \", comic.description, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n_c = CardComic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardComic);\n\nvar _c;\n\n$RefreshReg$(_c, \"CardComic\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkQ29taWMuanM/ZDNjMCJdLCJuYW1lcyI6WyJDYXJkQ29taWMiLCJjb21pYyIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW5JbWFnZSIsInRodW1ibmFpbCIsInBhdGgiLCJleHRlbnNpb24iLCJuYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFNBQVMsR0FBRyxDQUFFO0FBQUNDO0FBQUQsQ0FBRixLQUFlO0FBRS9CLHNCQUNFO0FBQUssYUFBUyxFQUFFQyw2REFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUVFO0FBQUssZUFBUyxFQUFFRCw2REFBTSxDQUFDRSxTQUF2QjtBQUFBLDZCQUNFO0FBQU0sV0FBRyxFQUFHLEdBQUVILEtBQUssQ0FBQ0ksU0FBTixDQUFnQkMsSUFBSyxJQUFHTCxLQUFLLENBQUNJLFNBQU4sQ0FBZ0JFLFNBQVUsRUFBaEU7QUFBbUUsYUFBSyxFQUFDO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBT0U7QUFBSyxlQUFTLEVBQUVMLDZEQUFNLENBQUNNLElBQXZCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLHdCQUFNUCxLQUFLLENBQUNRLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQVlFO0FBQUssZUFBUyxFQUFFUCw2REFBTSxDQUFDUSxXQUF2QjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSx3QkFBTVQsS0FBSyxDQUFDUyxXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFxQkQsQ0F2QkQ7O0tBQU1WLFM7QUF5QlNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJkQ29taWMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FyZENvbWljLm1vZHVsZS5zY3NzJztcblxuY29uc3QgQ2FyZENvbWljID0gKCB7Y29taWN9ICkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5JbWFnZX0+XG4gICAgICAgIDxpbWcgIHNyYz17YCR7Y29taWMudGh1bWJuYWlsLnBhdGh9LiR7Y29taWMudGh1bWJuYWlsLmV4dGVuc2lvbn1gfSB3aWR0aD1cIjEwMHB4XCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+XG4gICAgICAgIDxiPiBOYW1lOiA8L2I+XG4gICAgICAgIDxwPiB7IGNvbWljLnRpdGxlIH0gPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICA8Yj4gRGVzY3JpcHRpb246IDwvYj5cbiAgICAgICAgPHA+IHsgY29taWMuZGVzY3JpcHRpb24gfSA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRDb21pYzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CardComic.js\n");

/***/ })

})