webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/styles/main.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-7-2!./node_modules/resolve-url-loader??ref--5-oneOf-7-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./src/styles/main.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Hind\\\", sans-serif;\\n  box-sizing: border-box;\\n}\\n\\n.title {\\n  color: orange;\\n  font-size: 30px;\\n}\\n\\n.logo {\\n  text-decoration: none;\\n  color: white;\\n  font-weight: 600;\\n  font-size: 20px;\\n  padding-top: 10px;\\n}\\n\\n.main {\\n  display: grid;\\n  grid-template-columns: 1fr 10fr;\\n}\\n\\n.index {\\n  background: #202020;\\n  height: 100vh;\\n}\\n.index a.link-index, .index .title-index {\\n  color: #fff;\\n  text-decoration: none;\\n}\\n.index a.link-index {\\n  font-size: 20px;\\n}\\n.index a.link-index:hover {\\n  text-decoration: underline;\\n  color: #e23636;\\n}\\n.index .title-index {\\n  padding: 50px;\\n  font-size: 30px;\\n  text-align: center;\\n}\\n.index .opt {\\n  display: grid;\\n  justify-items: center;\\n  padding: 1rem 0;\\n}\\n\\nheader.header {\\n  background: #202020;\\n  position: relative;\\n}\\nheader.header .container-header {\\n  padding: 10px;\\n  position: fixed;\\n  display: grid;\\n  grid-template-rows: 2fr 1fr;\\n}\\nheader.header .options {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  justify-self: center;\\n  justify-items: center;\\n}\\nheader.header .options .option {\\n  padding-bottom: 1rem;\\n  color: #fff;\\n  font-size: 18px;\\n  font-weight: 500;\\n  text-decoration: none;\\n}\\nheader.header .options .option:hover {\\n  color: #e23636;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://main.scss\",\"webpack://components/index.scss\",\"webpack://var.scss\",\"webpack://components/header.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,SAAA;EACA,UAAA;EACA,+BAAA;EACA,sBAAA;AADF;;AAIA;EACE,aAAA;EACA,eAAA;AADF;;AAIA;EACE,qBAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AADF;;AAIA;EACE,aAAA;EACA,+BAAA;AADF;;ACvBA;EACE,mBCDM;EDEN,aAAA;AD0BF;ACxBE;EACE,WCJI;EDKJ,qBAAA;AD0BJ;ACvBE;EACE,eAAA;ADyBJ;ACxBI;EACE,0BAAA;EACA,cCXA;AFqCN;ACtBE;EACE,aAAA;EACA,eAAA;EACA,kBAAA;ADwBJ;ACtBE;EACE,aAAA;EACA,qBAAA;EACA,eAAA;ADwBJ;;AGjDA;EACE,mBDDM;ECEN,kBAAA;AHoDF;AGnDE;EACE,aAAA;EAEA,eAAA;EACA,aAAA;EACA,2BAAA;AHoDJ;AGjDE;EACE,aAAA;EACA,0BAAA;EACA,oBAAA;EACA,qBAAA;AHmDJ;AGlDI;EACE,oBAAA;EACA,WDjBE;ECkBF,eAAA;EACA,gBAAA;EACA,qBAAA;AHoDN;AGnDM;EACE,cDrBF;AF0EN\",\"sourcesContent\":[\"@import './var.scss';\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Hind', sans-serif;\\n  box-sizing: border-box;\\n}\\n\\n.title {\\n  color: orange;\\n  font-size: 30px;\\n}\\n\\n.logo{\\n  text-decoration: none;\\n  color: white;\\n  font-weight: 600;\\n  font-size: 20px;\\n  padding-top: 10px;\\n}\\n\\n.main {\\n  display: grid;\\n  grid-template-columns: 1fr 10fr ;\\n}\\n\\n@import './components/index.scss';\\n@import './components/header.scss';\",\".index {\\n  background: $black;\\n  height: 100vh;\\n\\n  a.link-index, .title-index {\\n    color: $white;\\n    text-decoration: none;\\n  }\\n\\n  a.link-index {\\n    font-size: 20px;\\n    &:hover {\\n      text-decoration: underline;\\n      color: $red;\\n    }\\n  }\\n\\n  .title-index {\\n    padding: 50px;\\n    font-size: 30px;\\n    text-align: center;\\n  }\\n  .opt {\\n    display: grid;\\n    justify-items: center;\\n    padding: 1rem 0;\\n  }\\n}\",\"$black: #202020;\\n$white: #fff;\\n$red: #e23636;\",\"header.header {\\n  background: $black;\\n  position: relative;\\n  .container-header{\\n    padding: 10px;\\n\\n    position: fixed;\\n    display: grid;\\n    grid-template-rows: 2fr 1fr;\\n  }\\n\\n  .options {\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    justify-self: center;\\n    justify-items: center;\\n    .option {\\n      padding-bottom: 1rem;\\n      color: $white;\\n      font-size: 18px;\\n      font-weight: 500;\\n      text-decoration: none;\\n      &:hover {\\n        color: $red;\\n      }\\n    }\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/ZmQ1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM0RjtBQUM1Riw4QkFBOEIsbUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsTUFBTSxjQUFjLGVBQWUsc0NBQXNDLDJCQUEyQixHQUFHLFlBQVksa0JBQWtCLG9CQUFvQixHQUFHLFdBQVcsMEJBQTBCLGlCQUFpQixxQkFBcUIsb0JBQW9CLHNCQUFzQixHQUFHLFdBQVcsa0JBQWtCLG9DQUFvQyxHQUFHLFlBQVksd0JBQXdCLGtCQUFrQixHQUFHLDRDQUE0QyxnQkFBZ0IsMEJBQTBCLEdBQUcsdUJBQXVCLG9CQUFvQixHQUFHLDZCQUE2QiwrQkFBK0IsbUJBQW1CLEdBQUcsdUJBQXVCLGtCQUFrQixvQkFBb0IsdUJBQXVCLEdBQUcsZUFBZSxrQkFBa0IsMEJBQTBCLG9CQUFvQixHQUFHLG1CQUFtQix3QkFBd0IsdUJBQXVCLEdBQUcsbUNBQW1DLGtCQUFrQixvQkFBb0Isa0JBQWtCLGdDQUFnQyxHQUFHLDBCQUEwQixrQkFBa0IsK0JBQStCLHlCQUF5QiwwQkFBMEIsR0FBRyxrQ0FBa0MseUJBQXlCLGdCQUFnQixvQkFBb0IscUJBQXFCLDBCQUEwQixHQUFHLHdDQUF3QyxtQkFBbUIsR0FBRyxPQUFPLG9LQUFvSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLCtDQUErQyxPQUFPLGNBQWMsZUFBZSxvQ0FBb0MsMkJBQTJCLEdBQUcsWUFBWSxrQkFBa0Isb0JBQW9CLEdBQUcsVUFBVSwwQkFBMEIsaUJBQWlCLHFCQUFxQixvQkFBb0Isc0JBQXNCLEdBQUcsV0FBVyxrQkFBa0IscUNBQXFDLEdBQUcsc0NBQXNDLHFDQUFxQyxXQUFXLHVCQUF1QixrQkFBa0Isa0NBQWtDLG9CQUFvQiw0QkFBNEIsS0FBSyxvQkFBb0Isc0JBQXNCLGVBQWUsbUNBQW1DLG9CQUFvQixPQUFPLEtBQUssb0JBQW9CLG9CQUFvQixzQkFBc0IseUJBQXlCLEtBQUssVUFBVSxvQkFBb0IsNEJBQTRCLHNCQUFzQixLQUFLLEdBQUcsbUJBQW1CLGVBQWUsZ0JBQWdCLGtCQUFrQix1QkFBdUIsdUJBQXVCLHNCQUFzQixvQkFBb0Isd0JBQXdCLG9CQUFvQixrQ0FBa0MsS0FBSyxnQkFBZ0Isb0JBQW9CLGlDQUFpQywyQkFBMkIsNEJBQTRCLGVBQWUsNkJBQTZCLHNCQUFzQix3QkFBd0IseUJBQXlCLDhCQUE4QixpQkFBaUIsc0JBQXNCLFNBQVMsT0FBTyxLQUFLLEdBQUcsbUJBQW1CO0FBQ25qSDtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vc3JjL3N0eWxlcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIkhpbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnI7XFxufVxcblxcbi5pbmRleCB7XFxuICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLmluZGV4IGEubGluay1pbmRleCwgLmluZGV4IC50aXRsZS1pbmRleCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmluZGV4IGEubGluay1pbmRleCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5pbmRleCBhLmxpbmstaW5kZXg6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogI2UyMzYzNjtcXG59XFxuLmluZGV4IC50aXRsZS1pbmRleCB7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaW5kZXggLm9wdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG5oZWFkZXIuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6ICMyMDIwMjA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbmhlYWRlci5oZWFkZXIgLmNvbnRhaW5lci1oZWFkZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxufVxcbmhlYWRlci5oZWFkZXIgLm9wdGlvbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbmhlYWRlci5oZWFkZXIgLm9wdGlvbnMgLm9wdGlvbiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuaGVhZGVyLmhlYWRlciAub3B0aW9ucyAub3B0aW9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZTIzNjM2O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vdmFyLnNjc3NcIixcIndlYnBhY2s6Ly9jb21wb25lbnRzL2hlYWRlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtBQURGOztBQ3ZCQTtFQUNFLG1CQ0RNO0VERU4sYUFBQTtBRDBCRjtBQ3hCRTtFQUNFLFdDSkk7RURLSixxQkFBQTtBRDBCSjtBQ3ZCRTtFQUNFLGVBQUE7QUR5Qko7QUN4Qkk7RUFDRSwwQkFBQTtFQUNBLGNDWEE7QUZxQ047QUN0QkU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEd0JKO0FDdEJFO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRHdCSjs7QUdqREE7RUFDRSxtQkRETTtFQ0VOLGtCQUFBO0FIb0RGO0FHbkRFO0VBQ0UsYUFBQTtFQUVBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUhvREo7QUdqREU7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FIbURKO0FHbERJO0VBQ0Usb0JBQUE7RUFDQSxXRGpCRTtFQ2tCRixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBSG9ETjtBR25ETTtFQUNFLGNEckJGO0FGMEVOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vdmFyLnNjc3MnO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAnSGluZCcsIHNhbnMtc2VyaWY7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgY29sb3I6IG9yYW5nZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmxvZ297XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyIDtcXG59XFxuXFxuQGltcG9ydCAnLi9jb21wb25lbnRzL2luZGV4LnNjc3MnO1xcbkBpbXBvcnQgJy4vY29tcG9uZW50cy9oZWFkZXIuc2Nzcyc7XCIsXCIuaW5kZXgge1xcbiAgYmFja2dyb3VuZDogJGJsYWNrO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIGEubGluay1pbmRleCwgLnRpdGxlLWluZGV4IHtcXG4gICAgY29sb3I6ICR3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgfVxcblxcbiAgYS5saW5rLWluZGV4IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICBjb2xvcjogJHJlZDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnRpdGxlLWluZGV4IHtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAub3B0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxuICB9XFxufVwiLFwiJGJsYWNrOiAjMjAyMDIwO1xcbiR3aGl0ZTogI2ZmZjtcXG4kcmVkOiAjZTIzNjM2O1wiLFwiaGVhZGVyLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiAkYmxhY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAuY29udGFpbmVyLWhlYWRlcntcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICB9XFxuXFxuICAub3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAub3B0aW9uIHtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgICBjb2xvcjogJHdoaXRlO1xcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAkcmVkO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/styles/main.scss\n");

/***/ })

})