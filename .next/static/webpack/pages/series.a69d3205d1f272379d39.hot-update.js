webpackHotUpdate_N_E("pages/series",{

/***/ "./pages/series.js":
/*!*************************!*\
  !*** ./pages/series.js ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/MainLayout */ \"./layouts/MainLayout.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/axios */ \"./config/axios.js\");\n/* harmony import */ var _components_CardLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CardLink */ \"./components/CardLink.js\");\n\n\nvar _jsxFileName = \"/home/daniel/Escritorio/reactJS/comic_web/pages/series.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Series = ({\n  series\n}) => {\n  _s();\n\n  const {\n    0: seriesData,\n    1: setSeriesData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(series);\n  const getSeries = seriesData.map(serie => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CardLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    data: serie\n  }, serie.id, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined));\n\n  const searchSerie = async event => {\n    event.preventDefault();\n    const title = event.target.search.value;\n    const link = `${_config_config__WEBPACK_IMPORTED_MODULE_3__[\"url\"]}/v1/public/series?title=${title}&ts=${_config_config__WEBPACK_IMPORTED_MODULE_3__[\"ts\"]}&apikey=${_config_config__WEBPACK_IMPORTED_MODULE_3__[\"publicKey\"]}&hash=${_config_config__WEBPACK_IMPORTED_MODULE_3__[\"hash\"]}`;\n    const series = await Object(_config_axios__WEBPACK_IMPORTED_MODULE_4__[\"getReq\"])(link);\n    setSeriesData(series);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: \"container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      className: \"title\",\n      children: \"Series\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      className: \"search\",\n      onSubmit: searchSerie,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"search\",\n          name: \"search\",\n          placeholder: \"Search serie\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"grid-content\",\n      children: [\" \", getSeries, \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Series, \"WzpVQeXTI0k+y0i2zu1/NYQcvnQ=\");\n\n_c = Series;\nSeries.Layout = _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Series);\n\nvar _c;\n\n$RefreshReg$(_c, \"Series\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VyaWVzLmpzP2NiZjYiXSwibmFtZXMiOlsiU2VyaWVzIiwic2VyaWVzIiwic2VyaWVzRGF0YSIsInNldFNlcmllc0RhdGEiLCJ1c2VTdGF0ZSIsImdldFNlcmllcyIsIm1hcCIsInNlcmllIiwiaWQiLCJzZWFyY2hTZXJpZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0aXRsZSIsInRhcmdldCIsInNlYXJjaCIsInZhbHVlIiwibGluayIsInVybCIsInRzIiwicHVibGljS2V5IiwiaGFzaCIsImdldFJlcSIsIkxheW91dCIsIk1haW5MYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWM7QUFBQTs7QUFFM0IsUUFBTTtBQUFBLE9BQUVDLFVBQUY7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxzREFBUSxDQUFDSCxNQUFELENBQTlDO0FBRUEsUUFBTUksU0FBUyxHQUFHSCxVQUFVLENBQUNJLEdBQVgsQ0FBZ0JDLEtBQUssaUJBQ3JDLHFFQUFDLDREQUFEO0FBQVUsUUFBSSxFQUFFQTtBQUFoQixLQUE0QkEsS0FBSyxDQUFDQyxFQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGdCLENBQWxCOztBQUlBLFFBQU1DLFdBQVcsR0FBRyxNQUFPQyxLQUFQLElBQWlCO0FBQ25DQSxTQUFLLENBQUNDLGNBQU47QUFDQSxVQUFNQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxNQUFiLENBQW9CQyxLQUFsQztBQUNBLFVBQU1DLElBQUksR0FBSSxHQUFFQyxrREFBSSwyQkFBMEJMLEtBQU0sT0FBTU0saURBQUcsV0FBVUMsd0RBQVUsU0FBUUMsbURBQUssRUFBOUY7QUFDQSxVQUFNbkIsTUFBTSxHQUFHLE1BQU1vQiw0REFBTSxDQUFDTCxJQUFELENBQTNCO0FBQ0FiLGlCQUFhLENBQUVGLE1BQUYsQ0FBYjtBQUNELEdBTkQ7O0FBUUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUMsV0FBbkI7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBR0U7QUFBTSxlQUFTLEVBQUMsUUFBaEI7QUFBeUIsY0FBUSxFQUFFUSxXQUFuQztBQUFBLDZCQUNFO0FBQUEsK0JBQ0U7QUFBTyxjQUFJLEVBQUMsUUFBWjtBQUFxQixjQUFJLEVBQUMsUUFBMUI7QUFBbUMscUJBQVcsRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFTRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsc0JBQWdDSixTQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFhRCxDQTdCRDs7R0FBTUwsTTs7S0FBQUEsTTtBQXVDTkEsTUFBTSxDQUFDc0IsTUFBUCxHQUFnQkMsMkRBQWhCOztBQUVldkIscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zZXJpZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTWFpbkxheW91dCc7XG5pbXBvcnQge3VybCwgdHMsIHB1YmxpY0tleSwgaGFzaH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQgeyBnZXRSZXEgfSBmcm9tICcuLi9jb25maWcvYXhpb3MnO1xuXG5pbXBvcnQgQ2FyZExpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkTGluayc7XG5cbmNvbnN0IFNlcmllcyA9ICh7c2VyaWVzfSkgPT4ge1xuXG4gIGNvbnN0IFsgc2VyaWVzRGF0YSwgc2V0U2VyaWVzRGF0YSBdID0gdXNlU3RhdGUoc2VyaWVzKTtcblxuICBjb25zdCBnZXRTZXJpZXMgPSBzZXJpZXNEYXRhLm1hcCggc2VyaWUgPT4gIFxuICAgIDxDYXJkTGluayBkYXRhPXtzZXJpZX0ga2V5PXtzZXJpZS5pZH0gLz4gIFxuICApO1xuXG4gIGNvbnN0IHNlYXJjaFNlcmllID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZSA9IGV2ZW50LnRhcmdldC5zZWFyY2gudmFsdWU7ICAgIFxuICAgIGNvbnN0IGxpbmsgPSBgJHt1cmx9L3YxL3B1YmxpYy9zZXJpZXM/dGl0bGU9JHt0aXRsZX0mdHM9JHt0c30mYXBpa2V5PSR7cHVibGljS2V5fSZoYXNoPSR7aGFzaH1gO1xuICAgIGNvbnN0IHNlcmllcyA9IGF3YWl0IGdldFJlcShsaW5rKTtcbiAgICBzZXRTZXJpZXNEYXRhKCBzZXJpZXMgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5TZXJpZXM8L2gxPlxuXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2hcIiBvblN1Ym1pdD17c2VhcmNoU2VyaWV9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggc2VyaWVcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPiB7Z2V0U2VyaWVzfSA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgbGluayA9IGAke3VybH0vdjEvcHVibGljL3Nlcmllcz90cz0ke3RzfSZhcGlrZXk9JHtwdWJsaWNLZXl9Jmhhc2g9JHtoYXNofWA7XG4gIGNvbnN0IHNlcmllcyA9IGF3YWl0IGdldFJlcShsaW5rKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBzZXJpZXMgfVxuICB9XG59XG5cblNlcmllcy5MYXlvdXQgPSBNYWluTGF5b3V0O1xuXG5leHBvcnQgZGVmYXVsdCBTZXJpZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/series.js\n");

/***/ })

})