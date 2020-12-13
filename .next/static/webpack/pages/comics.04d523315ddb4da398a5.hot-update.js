webpackHotUpdate_N_E("pages/comics",{

/***/ "./components/CardLink.js":
/*!********************************!*\
  !*** ./components/CardLink.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CardLink_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardLink.module.scss */ \"./components/CardLink.module.scss\");\n/* harmony import */ var _CardLink_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CardLink_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/daniel/Escritorio/reactJS/comic_web/components/CardLink.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nconst CardLink = ({\n  data\n}) => {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  const getLink = () => {\n    const path = router.pathname.split('/');\n    const pathname = path[1];\n    return `/${pathname}/${data.id}`;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: getLink(),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      className: _CardLink_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _CardLink_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.select,\n        children: data.name || data.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        className: \"image\",\n        src: data.thumbnail.path + '.' + data.thumbnail.extension,\n        width: \"100px\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(CardLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = CardLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardLink);\n\nvar _c;\n\n$RefreshReg$(_c, \"CardLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkTGluay5qcz8wNzU2Il0sIm5hbWVzIjpbIkNhcmRMaW5rIiwiZGF0YSIsInJvdXRlciIsInVzZVJvdXRlciIsImdldExpbmsiLCJwYXRoIiwicGF0aG5hbWUiLCJzcGxpdCIsImlkIiwic3R5bGVzIiwiY29udGFpbmVyIiwic2VsZWN0IiwibmFtZSIsInRpdGxlIiwidGh1bWJuYWlsIiwiZXh0ZW5zaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBWTtBQUFBOztBQUUzQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLFFBQU1DLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFVBQU1DLElBQUksR0FBR0gsTUFBTSxDQUFDSSxRQUFQLENBQWdCQyxLQUFoQixDQUFzQixHQUF0QixDQUFiO0FBQ0EsVUFBTUQsUUFBUSxHQUFHRCxJQUFJLENBQUMsQ0FBRCxDQUFyQjtBQUNBLFdBQVEsSUFBR0MsUUFBUyxJQUFHTCxJQUFJLENBQUNPLEVBQUcsRUFBL0I7QUFDRCxHQUpEOztBQU1BLHNCQUNFLHFFQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFHSixPQUFPLEVBQXBCO0FBQUEsMkJBQ0U7QUFBRyxlQUFTLEVBQUVLLDREQUFNLENBQUNDLFNBQXJCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFRCw0REFBTSxDQUFDRSxNQUF2QjtBQUFBLGtCQUNHVixJQUFJLENBQUNXLElBQUwsSUFBYVgsSUFBSSxDQUFDWTtBQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBdUIsV0FBRyxFQUFFWixJQUFJLENBQUNhLFNBQUwsQ0FBZVQsSUFBZixHQUFzQixHQUF0QixHQUE0QkosSUFBSSxDQUFDYSxTQUFMLENBQWVDLFNBQXZFO0FBQWtGLGFBQUssRUFBQztBQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELENBckJEOztHQUFNZixRO1VBRVdHLHFEOzs7S0FGWEgsUTtBQXVCU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmRMaW5rLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJkTGluay5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IENhcmRMaW5rID0gKHtkYXRhfSkgPT4ge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGdldExpbmsgPSAoKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IHJvdXRlci5wYXRobmFtZS5zcGxpdCgnLycpO1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aFsxXTtcbiAgICByZXR1cm4gYC8ke3BhdGhuYW1lfS8ke2RhdGEuaWR9YDsgIFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPXsgZ2V0TGluaygpIH0+XG4gICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdH0+XG4gICAgICAgICAge2RhdGEubmFtZSB8fCBkYXRhLnRpdGxlfSBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWFnZScgc3JjPXtkYXRhLnRodW1ibmFpbC5wYXRoICsgJy4nICsgZGF0YS50aHVtYm5haWwuZXh0ZW5zaW9ufSB3aWR0aD1cIjEwMHB4XCIgLz5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZExpbms7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CardLink.js\n");

/***/ })

})