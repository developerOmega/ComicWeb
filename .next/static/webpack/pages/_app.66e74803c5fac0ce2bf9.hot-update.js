webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/styles/main.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-7-2!./node_modules/resolve-url-loader??ref--5-oneOf-7-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./src/styles/main.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Hind\\\", sans-serif;\\n  box-sizing: border-box;\\n}\\n\\n.title {\\n  color: orange;\\n  font-size: 30px;\\n}\\n\\n.logo {\\n  text-decoration: none;\\n  color: white;\\n  font-weight: 600;\\n  font-size: 20px;\\n}\\n\\n.main {\\n  display: grid;\\n  grid-template-columns: 1fr 10fr;\\n}\\n\\n.index {\\n  background: #202020;\\n  height: 100vh;\\n}\\n.index a.link-index, .index .title-index {\\n  color: #fff;\\n  text-decoration: none;\\n}\\n.index a.link-index {\\n  font-size: 20px;\\n}\\n.index a.link-index:hover {\\n  text-decoration: underline;\\n  color: #e23636;\\n}\\n.index .title-index {\\n  padding: 50px;\\n  font-size: 30px;\\n  text-align: center;\\n}\\n.index .opt {\\n  display: grid;\\n  justify-items: center;\\n  padding: 1rem 0;\\n}\\n\\nheader.header {\\n  background: #202020;\\n  padding: 10px;\\n  position: relative;\\n}\\nheader.header .container-header {\\n  position: fixed;\\n}\\nheader.header .options .option {\\n  color: #fff;\\n  font-size: 18px;\\n  font-weight: 500;\\n  text-decoration: none;\\n}\\nheader.header .options .option:hover {\\n  color: #e23636;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://main.scss\",\"webpack://components/index.scss\",\"webpack://var.scss\",\"webpack://components/header.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,SAAA;EACA,UAAA;EACA,+BAAA;EACA,sBAAA;AADF;;AAIA;EACE,aAAA;EACA,eAAA;AADF;;AAIA;EACE,qBAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;AADF;;AAIA;EACE,aAAA;EACA,+BAAA;AADF;;ACtBA;EACE,mBCDM;EDEN,aAAA;ADyBF;ACvBE;EACE,WCJI;EDKJ,qBAAA;ADyBJ;ACtBE;EACE,eAAA;ADwBJ;ACvBI;EACE,0BAAA;EACA,cCXA;AFoCN;ACrBE;EACE,aAAA;EACA,eAAA;EACA,kBAAA;ADuBJ;ACrBE;EACE,aAAA;EACA,qBAAA;EACA,eAAA;ADuBJ;;AGhDA;EACE,mBDDM;ECEN,aAAA;EACA,kBAAA;AHmDF;AGhDE;EACE,eAAA;AHkDJ;AG/CI;EACE,WDVE;ECWF,eAAA;EACA,gBAAA;EACA,qBAAA;AHiDN;AGhDM;EACE,cDdF;AFgEN\",\"sourcesContent\":[\"@import './var.scss';\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Hind', sans-serif;\\n  box-sizing: border-box;\\n}\\n\\n.title {\\n  color: orange;\\n  font-size: 30px;\\n}\\n\\n.logo{\\n  text-decoration: none;\\n  color: white;\\n  font-weight: 600;\\n  font-size: 20px;\\n}\\n\\n.main {\\n  display: grid;\\n  grid-template-columns: 1fr 10fr ;\\n}\\n\\n@import './components/index.scss';\\n@import './components/header.scss';\",\".index {\\n  background: $black;\\n  height: 100vh;\\n\\n  a.link-index, .title-index {\\n    color: $white;\\n    text-decoration: none;\\n  }\\n\\n  a.link-index {\\n    font-size: 20px;\\n    &:hover {\\n      text-decoration: underline;\\n      color: $red;\\n    }\\n  }\\n\\n  .title-index {\\n    padding: 50px;\\n    font-size: 30px;\\n    text-align: center;\\n  }\\n  .opt {\\n    display: grid;\\n    justify-items: center;\\n    padding: 1rem 0;\\n  }\\n}\",\"$black: #202020;\\n$white: #fff;\\n$red: #e23636;\",\"header.header {\\n  background: $black;\\n  padding: 10px;\\n  position: relative;\\n  // display: grid;\\n  // grid-template-rows: 0 1fr;\\n  .container-header{\\n    position: fixed;\\n  }\\n  .options {\\n    .option {\\n      color: $white;\\n      font-size: 18px;\\n      font-weight: 500;\\n      text-decoration: none;\\n      &:hover {\\n        color: $red;\\n      }\\n    }\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/ZmQ1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM0RjtBQUM1Riw4QkFBOEIsbUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsTUFBTSxjQUFjLGVBQWUsc0NBQXNDLDJCQUEyQixHQUFHLFlBQVksa0JBQWtCLG9CQUFvQixHQUFHLFdBQVcsMEJBQTBCLGlCQUFpQixxQkFBcUIsb0JBQW9CLEdBQUcsV0FBVyxrQkFBa0Isb0NBQW9DLEdBQUcsWUFBWSx3QkFBd0Isa0JBQWtCLEdBQUcsNENBQTRDLGdCQUFnQiwwQkFBMEIsR0FBRyx1QkFBdUIsb0JBQW9CLEdBQUcsNkJBQTZCLCtCQUErQixtQkFBbUIsR0FBRyx1QkFBdUIsa0JBQWtCLG9CQUFvQix1QkFBdUIsR0FBRyxlQUFlLGtCQUFrQiwwQkFBMEIsb0JBQW9CLEdBQUcsbUJBQW1CLHdCQUF3QixrQkFBa0IsdUJBQXVCLEdBQUcsbUNBQW1DLG9CQUFvQixHQUFHLGtDQUFrQyxnQkFBZ0Isb0JBQW9CLHFCQUFxQiwwQkFBMEIsR0FBRyx3Q0FBd0MsbUJBQW1CLEdBQUcsT0FBTyxvS0FBb0ssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsK0NBQStDLE9BQU8sY0FBYyxlQUFlLG9DQUFvQywyQkFBMkIsR0FBRyxZQUFZLGtCQUFrQixvQkFBb0IsR0FBRyxVQUFVLDBCQUEwQixpQkFBaUIscUJBQXFCLG9CQUFvQixHQUFHLFdBQVcsa0JBQWtCLHFDQUFxQyxHQUFHLHNDQUFzQyxxQ0FBcUMsV0FBVyx1QkFBdUIsa0JBQWtCLGtDQUFrQyxvQkFBb0IsNEJBQTRCLEtBQUssb0JBQW9CLHNCQUFzQixlQUFlLG1DQUFtQyxvQkFBb0IsT0FBTyxLQUFLLG9CQUFvQixvQkFBb0Isc0JBQXNCLHlCQUF5QixLQUFLLFVBQVUsb0JBQW9CLDRCQUE0QixzQkFBc0IsS0FBSyxHQUFHLG1CQUFtQixlQUFlLGdCQUFnQixrQkFBa0IsdUJBQXVCLGtCQUFrQix1QkFBdUIscUJBQXFCLGlDQUFpQyxzQkFBc0Isc0JBQXNCLEtBQUssY0FBYyxlQUFlLHNCQUFzQix3QkFBd0IseUJBQXlCLDhCQUE4QixpQkFBaUIsc0JBQXNCLFNBQVMsT0FBTyxLQUFLLEdBQUcsbUJBQW1CO0FBQ3ZrRztBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vc3JjL3N0eWxlcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIkhpbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyO1xcbn1cXG5cXG4uaW5kZXgge1xcbiAgYmFja2dyb3VuZDogIzIwMjAyMDtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbi5pbmRleCBhLmxpbmstaW5kZXgsIC5pbmRleCAudGl0bGUtaW5kZXgge1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5pbmRleCBhLmxpbmstaW5kZXgge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uaW5kZXggYS5saW5rLWluZGV4OmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6ICNlMjM2MzY7XFxufVxcbi5pbmRleCAudGl0bGUtaW5kZXgge1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmluZGV4IC5vcHQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuaGVhZGVyLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuaGVhZGVyLmhlYWRlciAuY29udGFpbmVyLWhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcbmhlYWRlci5oZWFkZXIgLm9wdGlvbnMgLm9wdGlvbiB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmhlYWRlci5oZWFkZXIgLm9wdGlvbnMgLm9wdGlvbjpob3ZlciB7XFxuICBjb2xvcjogI2UyMzYzNjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL21haW4uc2Nzc1wiLFwid2VicGFjazovL2NvbXBvbmVudHMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovL3Zhci5zY3NzXCIsXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9oZWFkZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0FBREY7O0FDdEJBO0VBQ0UsbUJDRE07RURFTixhQUFBO0FEeUJGO0FDdkJFO0VBQ0UsV0NKSTtFREtKLHFCQUFBO0FEeUJKO0FDdEJFO0VBQ0UsZUFBQTtBRHdCSjtBQ3ZCSTtFQUNFLDBCQUFBO0VBQ0EsY0NYQTtBRm9DTjtBQ3JCRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUR1Qko7QUNyQkU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEdUJKOztBR2hEQTtFQUNFLG1CRERNO0VDRU4sYUFBQTtFQUNBLGtCQUFBO0FIbURGO0FHaERFO0VBQ0UsZUFBQTtBSGtESjtBRy9DSTtFQUNFLFdEVkU7RUNXRixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBSGlETjtBR2hETTtFQUNFLGNEZEY7QUZnRU5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi92YXIuc2Nzcyc7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdIaW5kJywgc2Fucy1zZXJpZjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi50aXRsZSB7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4ubG9nb3tcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyIDtcXG59XFxuXFxuQGltcG9ydCAnLi9jb21wb25lbnRzL2luZGV4LnNjc3MnO1xcbkBpbXBvcnQgJy4vY29tcG9uZW50cy9oZWFkZXIuc2Nzcyc7XCIsXCIuaW5kZXgge1xcbiAgYmFja2dyb3VuZDogJGJsYWNrO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIGEubGluay1pbmRleCwgLnRpdGxlLWluZGV4IHtcXG4gICAgY29sb3I6ICR3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgfVxcblxcbiAgYS5saW5rLWluZGV4IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICBjb2xvcjogJHJlZDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnRpdGxlLWluZGV4IHtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAub3B0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxuICB9XFxufVwiLFwiJGJsYWNrOiAjMjAyMDIwO1xcbiR3aGl0ZTogI2ZmZjtcXG4kcmVkOiAjZTIzNjM2O1wiLFwiaGVhZGVyLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiAkYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLy8gZGlzcGxheTogZ3JpZDtcXG4gIC8vIGdyaWQtdGVtcGxhdGUtcm93czogMCAxZnI7XFxuICAuY29udGFpbmVyLWhlYWRlcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgfVxcbiAgLm9wdGlvbnMge1xcbiAgICAub3B0aW9uIHtcXG4gICAgICBjb2xvcjogJHdoaXRlO1xcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAkcmVkO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/styles/main.scss\n");

/***/ })

})