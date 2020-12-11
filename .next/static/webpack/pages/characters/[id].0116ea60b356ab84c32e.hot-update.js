webpackHotUpdate_N_E("pages/characters/[id]",{

/***/ "./components/CardComic.js":
/*!*********************************!*\
  !*** ./components/CardComic.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CardComic_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardComic.module.scss */ \"./components/CardComic.module.scss\");\n/* harmony import */ var _CardComic_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CardComic_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/daniel/Escritorio/reactJS/comic_web/components/CardComic.js\";\n\n\nconst CardComic = ({\n  comic\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _CardComic_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      className: \"mainImg\",\n      src: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,\n      width: \"100px\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"section1\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n        children: \" Name: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\" \", comic.title, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"section2\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n        children: \" Description: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\" \", comic.description, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n_c = CardComic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardComic);\n\nvar _c;\n\n$RefreshReg$(_c, \"CardComic\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkQ29taWMuanM/ZDNjMCJdLCJuYW1lcyI6WyJDYXJkQ29taWMiLCJjb21pYyIsInN0eWxlcyIsImNvbnRhaW5lciIsInRodW1ibmFpbCIsInBhdGgiLCJleHRlbnNpb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLENBQUU7QUFBQ0M7QUFBRCxDQUFGLEtBQWU7QUFFL0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDZEQUFNLENBQUNDLFNBQXZCO0FBQUEsNEJBRUU7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUF5QixTQUFHLEVBQUcsR0FBRUYsS0FBSyxDQUFDRyxTQUFOLENBQWdCQyxJQUFLLElBQUdKLEtBQUssQ0FBQ0csU0FBTixDQUFnQkUsU0FBVSxFQUFuRjtBQUFzRixXQUFLLEVBQUM7QUFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUlFO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsd0JBQU1MLEtBQUssQ0FBQ00sS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBU0U7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSx3QkFBTU4sS0FBSyxDQUFDTyxXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFrQkQsQ0FwQkQ7O0tBQU1SLFM7QUFzQlNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJkQ29taWMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FyZENvbWljLm1vZHVsZS5zY3NzJztcblxuY29uc3QgQ2FyZENvbWljID0gKCB7Y29taWN9ICkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgXG4gICAgICA8aW1nIGNsYXNzTmFtZT1cIm1haW5JbWdcIiBzcmM9e2Ake2NvbWljLnRodW1ibmFpbC5wYXRofS4ke2NvbWljLnRodW1ibmFpbC5leHRlbnNpb259YH0gd2lkdGg9XCIxMDBweFwiIC8+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjFcIj5cbiAgICAgICAgPGI+IE5hbWU6IDwvYj5cbiAgICAgICAgPHA+IHsgY29taWMudGl0bGUgfSA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uMlwiPlxuICAgICAgICA8Yj4gRGVzY3JpcHRpb246IDwvYj5cbiAgICAgICAgPHA+IHsgY29taWMuZGVzY3JpcHRpb24gfSA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRDb21pYzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CardComic.js\n");

/***/ }),

/***/ "./config/axios.js":
false,

/***/ "./config/config.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/api.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/buffer.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/node.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/reporter.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/constants/der.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/constants/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/decoders/der.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/decoders/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/decoders/pem.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/encoders/der.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/encoders/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/encoders/pem.js":
false,

/***/ "./node_modules/asn1.js/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/brorand/index.js":
false,

/***/ "./node_modules/browserify-aes/aes.js":
false,

/***/ "./node_modules/browserify-aes/authCipher.js":
false,

/***/ "./node_modules/browserify-aes/browser.js":
false,

/***/ "./node_modules/browserify-aes/decrypter.js":
false,

/***/ "./node_modules/browserify-aes/encrypter.js":
false,

/***/ "./node_modules/browserify-aes/ghash.js":
false,

/***/ "./node_modules/browserify-aes/incr32.js":
false,

/***/ "./node_modules/browserify-aes/modes/cbc.js":
false,

/***/ "./node_modules/browserify-aes/modes/cfb.js":
false,

/***/ "./node_modules/browserify-aes/modes/cfb1.js":
false,

/***/ "./node_modules/browserify-aes/modes/cfb8.js":
false,

/***/ "./node_modules/browserify-aes/modes/ctr.js":
false,

/***/ "./node_modules/browserify-aes/modes/ecb.js":
false,

/***/ "./node_modules/browserify-aes/modes/index.js":
false,

/***/ "./node_modules/browserify-aes/modes/list.json":
false,

/***/ "./node_modules/browserify-aes/modes/ofb.js":
false,

/***/ "./node_modules/browserify-aes/streamCipher.js":
false,

/***/ "./node_modules/browserify-cipher/browser.js":
false,

/***/ "./node_modules/browserify-des/index.js":
false,

/***/ "./node_modules/browserify-des/modes.js":
false,

/***/ "./node_modules/browserify-rsa/index.js":
false,

/***/ "./node_modules/browserify-sign/algos.js":
false,

/***/ "./node_modules/browserify-sign/browser/algorithms.json":
false,

/***/ "./node_modules/browserify-sign/browser/curves.json":
false,

/***/ "./node_modules/browserify-sign/browser/index.js":
false,

/***/ "./node_modules/browserify-sign/browser/sign.js":
false,

/***/ "./node_modules/browserify-sign/browser/verify.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/errors-browser.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/async_iterator.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/buffer_list.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/end-of-stream.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/from-browser.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/pipeline.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/state.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/buffer-xor/index.js":
false,

/***/ "./node_modules/buffer/index.js":
false,

/***/ "./node_modules/cipher-base/index.js":
false,

/***/ "./node_modules/core-util-is/lib/util.js":
false,

/***/ "./node_modules/create-ecdh/browser.js":
false,

/***/ "./node_modules/create-ecdh/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/create-hash/browser.js":
false,

/***/ "./node_modules/create-hash/md5.js":
false,

/***/ "./node_modules/create-hmac/browser.js":
false,

/***/ "./node_modules/create-hmac/legacy.js":
false,

/***/ "./node_modules/crypto-browserify/index.js":
false,

/***/ "./node_modules/crypto-js/aes.js":
false,

/***/ "./node_modules/crypto-js/cipher-core.js":
false,

/***/ "./node_modules/crypto-js/core.js":
false,

/***/ "./node_modules/crypto-js/enc-base64.js":
false,

/***/ "./node_modules/crypto-js/enc-utf16.js":
false,

/***/ "./node_modules/crypto-js/evpkdf.js":
false,

/***/ "./node_modules/crypto-js/format-hex.js":
false,

/***/ "./node_modules/crypto-js/hmac.js":
false,

/***/ "./node_modules/crypto-js/index.js":
false,

/***/ "./node_modules/crypto-js/lib-typedarrays.js":
false,

/***/ "./node_modules/crypto-js/md5.js":
false,

/***/ "./node_modules/crypto-js/mode-cfb.js":
false,

/***/ "./node_modules/crypto-js/mode-ctr-gladman.js":
false,

/***/ "./node_modules/crypto-js/mode-ctr.js":
false,

/***/ "./node_modules/crypto-js/mode-ecb.js":
false,

/***/ "./node_modules/crypto-js/mode-ofb.js":
false,

/***/ "./node_modules/crypto-js/pad-ansix923.js":
false,

/***/ "./node_modules/crypto-js/pad-iso10126.js":
false,

/***/ "./node_modules/crypto-js/pad-iso97971.js":
false,

/***/ "./node_modules/crypto-js/pad-nopadding.js":
false,

/***/ "./node_modules/crypto-js/pad-zeropadding.js":
false,

/***/ "./node_modules/crypto-js/pbkdf2.js":
false,

/***/ "./node_modules/crypto-js/rabbit-legacy.js":
false,

/***/ "./node_modules/crypto-js/rabbit.js":
false,

/***/ "./node_modules/crypto-js/rc4.js":
false,

/***/ "./node_modules/crypto-js/ripemd160.js":
false,

/***/ "./node_modules/crypto-js/sha1.js":
false,

/***/ "./node_modules/crypto-js/sha224.js":
false,

/***/ "./node_modules/crypto-js/sha256.js":
false,

/***/ "./node_modules/crypto-js/sha3.js":
false,

/***/ "./node_modules/crypto-js/sha384.js":
false,

/***/ "./node_modules/crypto-js/sha512.js":
false,

/***/ "./node_modules/crypto-js/tripledes.js":
false,

/***/ "./node_modules/crypto-js/x64-core.js":
false,

/***/ "./node_modules/des.js/lib/des.js":
false,

/***/ "./node_modules/des.js/lib/des/cbc.js":
false,

/***/ "./node_modules/des.js/lib/des/cipher.js":
false,

/***/ "./node_modules/des.js/lib/des/des.js":
false,

/***/ "./node_modules/des.js/lib/des/ede.js":
false,

/***/ "./node_modules/des.js/lib/des/utils.js":
false,

/***/ "./node_modules/diffie-hellman/browser.js":
false,

/***/ "./node_modules/diffie-hellman/lib/dh.js":
false,

/***/ "./node_modules/diffie-hellman/lib/generatePrime.js":
false,

/***/ "./node_modules/diffie-hellman/lib/primes.json":
false,

/***/ "./node_modules/diffie-hellman/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/base.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/edwards.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/index.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/mont.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/short.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curves.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/ec/index.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/ec/key.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/ec/signature.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/index.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/key.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/signature.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/utils.js":
false,

/***/ "./node_modules/elliptic/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/elliptic/package.json":
false,

/***/ "./node_modules/events/events.js":
false,

/***/ "./node_modules/evp_bytestokey/index.js":
false,

/***/ "./node_modules/hash-base/index.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/errors-browser.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/async_iterator.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/buffer_list.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/end-of-stream.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/from-browser.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/pipeline.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/state.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/hash.js/lib/hash.js":
false,

/***/ "./node_modules/hash.js/lib/hash/common.js":
false,

/***/ "./node_modules/hash.js/lib/hash/hmac.js":
false,

/***/ "./node_modules/hash.js/lib/hash/ripemd.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/1.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/224.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/256.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/384.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/512.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/common.js":
false,

/***/ "./node_modules/hash.js/lib/hash/utils.js":
false,

/***/ "./node_modules/hmac-drbg/lib/hmac-drbg.js":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/md5.js/index.js":
false,

/***/ "./node_modules/miller-rabin/lib/mr.js":
false,

/***/ "./node_modules/miller-rabin/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/minimalistic-assert/index.js":
false,

/***/ "./node_modules/minimalistic-crypto-utils/lib/utils.js":
false,

/***/ "./node_modules/next/node_modules/webpack/buildin/global.js":
false,

/***/ "./node_modules/parse-asn1/aesid.json":
false,

/***/ "./node_modules/parse-asn1/asn1.js":
false,

/***/ "./node_modules/parse-asn1/certificate.js":
false,

/***/ "./node_modules/parse-asn1/fixProc.js":
false,

/***/ "./node_modules/parse-asn1/index.js":
false,

/***/ "./node_modules/pbkdf2/browser.js":
false,

/***/ "./node_modules/pbkdf2/lib/async.js":
false,

/***/ "./node_modules/pbkdf2/lib/default-encoding.js":
false,

/***/ "./node_modules/pbkdf2/lib/precondition.js":
false,

/***/ "./node_modules/pbkdf2/lib/sync-browser.js":
false,

/***/ "./node_modules/pbkdf2/lib/to-buffer.js":
false,

/***/ "./node_modules/process-nextick-args/index.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/public-encrypt/browser.js":
false,

/***/ "./node_modules/public-encrypt/mgf.js":
false,

/***/ "./node_modules/public-encrypt/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/public-encrypt/privateDecrypt.js":
false,

/***/ "./node_modules/public-encrypt/publicEncrypt.js":
false,

/***/ "./node_modules/public-encrypt/withPublic.js":
false,

/***/ "./node_modules/public-encrypt/xor.js":
false,

/***/ "./node_modules/randombytes/browser.js":
false,

/***/ "./node_modules/randomfill/browser.js":
false,

/***/ "./node_modules/readable-stream/duplex-browser.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/BufferList.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/readable-stream/node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/readable-stream/passthrough.js":
false,

/***/ "./node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/readable-stream/transform.js":
false,

/***/ "./node_modules/readable-stream/writable-browser.js":
false,

/***/ "./node_modules/ripemd160/index.js":
false,

/***/ "./node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/safer-buffer/safer.js":
false,

/***/ "./node_modules/sha.js/hash.js":
false,

/***/ "./node_modules/sha.js/index.js":
false,

/***/ "./node_modules/sha.js/sha.js":
false,

/***/ "./node_modules/sha.js/sha1.js":
false,

/***/ "./node_modules/sha.js/sha224.js":
false,

/***/ "./node_modules/sha.js/sha256.js":
false,

/***/ "./node_modules/sha.js/sha384.js":
false,

/***/ "./node_modules/sha.js/sha512.js":
false,

/***/ "./node_modules/stream-browserify/index.js":
false,

/***/ "./node_modules/string_decoder/lib/string_decoder.js":
false,

/***/ "./node_modules/util-deprecate/browser.js":
false,

/***/ 1:
false,

/***/ 10:
false,

/***/ 11:
false,

/***/ 12:
false,

/***/ 13:
false,

/***/ 14:
false,

/***/ 2:
false,

/***/ 3:
false,

/***/ 4:
false,

/***/ 5:
false,

/***/ 6:
false,

/***/ 7:
false,

/***/ 8:
false,

/***/ 9:
false

})