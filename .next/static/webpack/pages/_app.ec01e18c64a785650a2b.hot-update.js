webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/styles/main.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-7-2!./node_modules/resolve-url-loader??ref--5-oneOf-7-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./src/styles/main.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Hind\\\", sans-serif;\\n  box-sizing: border-box;\\n}\\n\\n.title {\\n  color: orange;\\n  font-size: 30px;\\n}\\n\\n.logo {\\n  text-decoration: none;\\n  color: white;\\n  font-weight: 600;\\n  font-size: 20px;\\n  padding-top: 1.5rem;\\n}\\n\\n.main {\\n  display: grid;\\n  grid-template-columns: 1fr 10fr;\\n}\\n\\n.index {\\n  background: #202020;\\n  height: 100vh;\\n}\\n.index a.link-index, .index .title-index {\\n  color: #fff;\\n  text-decoration: none;\\n}\\n.index a.link-index {\\n  font-size: 20px;\\n}\\n.index a.link-index:hover {\\n  text-decoration: underline;\\n  color: #e23636;\\n}\\n.index .title-index {\\n  padding: 50px;\\n  font-size: 30px;\\n  text-align: center;\\n}\\n.index .opt {\\n  display: grid;\\n  justify-items: center;\\n  padding: 1rem 0;\\n}\\n\\nheader.header {\\n  background: #202020;\\n  position: relative;\\n}\\nheader.header .container-header {\\n  padding: 10px;\\n  position: fixed;\\n  display: grid;\\n  grid-template-rows: 2fr 1fr;\\n}\\nheader.header .options {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  justify-self: center;\\n  justify-items: center;\\n}\\nheader.header .options .option {\\n  padding-bottom: 1rem;\\n  color: #fff;\\n  font-size: 18px;\\n  font-weight: 500;\\n  text-decoration: none;\\n}\\nheader.header .options .option:hover {\\n  color: #e23636;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://main.scss\",\"webpack://components/index.scss\",\"webpack://var.scss\",\"webpack://components/header.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,SAAA;EACA,UAAA;EACA,+BAAA;EACA,sBAAA;AADF;;AAIA;EACE,aAAA;EACA,eAAA;AADF;;AAIA;EACE,qBAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;AADF;;AAIA;EACE,aAAA;EACA,+BAAA;AADF;;ACvBA;EACE,mBCDM;EDEN,aAAA;AD0BF;ACxBE;EACE,WCJI;EDKJ,qBAAA;AD0BJ;ACvBE;EACE,eAAA;ADyBJ;ACxBI;EACE,0BAAA;EACA,cCXA;AFqCN;ACtBE;EACE,aAAA;EACA,eAAA;EACA,kBAAA;ADwBJ;ACtBE;EACE,aAAA;EACA,qBAAA;EACA,eAAA;ADwBJ;;AGjDA;EACE,mBDDM;ECEN,kBAAA;AHoDF;AGnDE;EACE,aAAA;EAEA,eAAA;EACA,aAAA;EACA,2BAAA;AHoDJ;AGjDE;EACE,aAAA;EACA,0BAAA;EACA,oBAAA;EACA,qBAAA;AHmDJ;AGlDI;EACE,oBAAA;EACA,WDjBE;ECkBF,eAAA;EACA,gBAAA;EACA,qBAAA;AHoDN;AGnDM;EACE,cDrBF;AF0EN\",\"sourcesContent\":[\"@import './var.scss';\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Hind', sans-serif;\\n  box-sizing: border-box;\\n}\\n\\n.title {\\n  color: orange;\\n  font-size: 30px;\\n}\\n\\n.logo{\\n  text-decoration: none;\\n  color: white;\\n  font-weight: 600;\\n  font-size: 20px;\\n  padding-top: 1.5rem;\\n}\\n\\n.main {\\n  display: grid;\\n  grid-template-columns: 1fr 10fr ;\\n}\\n\\n@import './components/index.scss';\\n@import './components/header.scss';\",\".index {\\n  background: $black;\\n  height: 100vh;\\n\\n  a.link-index, .title-index {\\n    color: $white;\\n    text-decoration: none;\\n  }\\n\\n  a.link-index {\\n    font-size: 20px;\\n    &:hover {\\n      text-decoration: underline;\\n      color: $red;\\n    }\\n  }\\n\\n  .title-index {\\n    padding: 50px;\\n    font-size: 30px;\\n    text-align: center;\\n  }\\n  .opt {\\n    display: grid;\\n    justify-items: center;\\n    padding: 1rem 0;\\n  }\\n}\",\"$black: #202020;\\n$white: #fff;\\n$red: #e23636;\",\"header.header {\\n  background: $black;\\n  position: relative;\\n  .container-header{\\n    padding: 10px;\\n\\n    position: fixed;\\n    display: grid;\\n    grid-template-rows: 2fr 1fr;\\n  }\\n\\n  .options {\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    justify-self: center;\\n    justify-items: center;\\n    .option {\\n      padding-bottom: 1rem;\\n      color: $white;\\n      font-size: 18px;\\n      font-weight: 500;\\n      text-decoration: none;\\n      &:hover {\\n        color: $red;\\n      }\\n    }\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/ZmQ1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM0RjtBQUM1Riw4QkFBOEIsbUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsTUFBTSxjQUFjLGVBQWUsc0NBQXNDLDJCQUEyQixHQUFHLFlBQVksa0JBQWtCLG9CQUFvQixHQUFHLFdBQVcsMEJBQTBCLGlCQUFpQixxQkFBcUIsb0JBQW9CLHdCQUF3QixHQUFHLFdBQVcsa0JBQWtCLG9DQUFvQyxHQUFHLFlBQVksd0JBQXdCLGtCQUFrQixHQUFHLDRDQUE0QyxnQkFBZ0IsMEJBQTBCLEdBQUcsdUJBQXVCLG9CQUFvQixHQUFHLDZCQUE2QiwrQkFBK0IsbUJBQW1CLEdBQUcsdUJBQXVCLGtCQUFrQixvQkFBb0IsdUJBQXVCLEdBQUcsZUFBZSxrQkFBa0IsMEJBQTBCLG9CQUFvQixHQUFHLG1CQUFtQix3QkFBd0IsdUJBQXVCLEdBQUcsbUNBQW1DLGtCQUFrQixvQkFBb0Isa0JBQWtCLGdDQUFnQyxHQUFHLDBCQUEwQixrQkFBa0IsK0JBQStCLHlCQUF5QiwwQkFBMEIsR0FBRyxrQ0FBa0MseUJBQXlCLGdCQUFnQixvQkFBb0IscUJBQXFCLDBCQUEwQixHQUFHLHdDQUF3QyxtQkFBbUIsR0FBRyxPQUFPLG9LQUFvSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLCtDQUErQyxPQUFPLGNBQWMsZUFBZSxvQ0FBb0MsMkJBQTJCLEdBQUcsWUFBWSxrQkFBa0Isb0JBQW9CLEdBQUcsVUFBVSwwQkFBMEIsaUJBQWlCLHFCQUFxQixvQkFBb0Isd0JBQXdCLEdBQUcsV0FBVyxrQkFBa0IscUNBQXFDLEdBQUcsc0NBQXNDLHFDQUFxQyxXQUFXLHVCQUF1QixrQkFBa0Isa0NBQWtDLG9CQUFvQiw0QkFBNEIsS0FBSyxvQkFBb0Isc0JBQXNCLGVBQWUsbUNBQW1DLG9CQUFvQixPQUFPLEtBQUssb0JBQW9CLG9CQUFvQixzQkFBc0IseUJBQXlCLEtBQUssVUFBVSxvQkFBb0IsNEJBQTRCLHNCQUFzQixLQUFLLEdBQUcsbUJBQW1CLGVBQWUsZ0JBQWdCLGtCQUFrQix1QkFBdUIsdUJBQXVCLHNCQUFzQixvQkFBb0Isd0JBQXdCLG9CQUFvQixrQ0FBa0MsS0FBSyxnQkFBZ0Isb0JBQW9CLGlDQUFpQywyQkFBMkIsNEJBQTRCLGVBQWUsNkJBQTZCLHNCQUFzQix3QkFBd0IseUJBQXlCLDhCQUE4QixpQkFBaUIsc0JBQXNCLFNBQVMsT0FBTyxLQUFLLEdBQUcsbUJBQW1CO0FBQ3ZqSDtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vc3JjL3N0eWxlcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIkhpbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmcjtcXG59XFxuXFxuLmluZGV4IHtcXG4gIGJhY2tncm91bmQ6ICMyMDIwMjA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uaW5kZXggYS5saW5rLWluZGV4LCAuaW5kZXggLnRpdGxlLWluZGV4IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uaW5kZXggYS5saW5rLWluZGV4IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmluZGV4IGEubGluay1pbmRleDpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiAjZTIzNjM2O1xcbn1cXG4uaW5kZXggLnRpdGxlLWluZGV4IHtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pbmRleCAub3B0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbmhlYWRlci5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogIzIwMjAyMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuaGVhZGVyLmhlYWRlciAuY29udGFpbmVyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG59XFxuaGVhZGVyLmhlYWRlciAub3B0aW9ucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuaGVhZGVyLmhlYWRlciAub3B0aW9ucyAub3B0aW9uIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5oZWFkZXIuaGVhZGVyIC5vcHRpb25zIC5vcHRpb246aG92ZXIge1xcbiAgY29sb3I6ICNlMjM2MzY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly9jb21wb25lbnRzL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly92YXIuc2Nzc1wiLFwid2VicGFjazovL2NvbXBvbmVudHMvaGVhZGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0FBREY7O0FDdkJBO0VBQ0UsbUJDRE07RURFTixhQUFBO0FEMEJGO0FDeEJFO0VBQ0UsV0NKSTtFREtKLHFCQUFBO0FEMEJKO0FDdkJFO0VBQ0UsZUFBQTtBRHlCSjtBQ3hCSTtFQUNFLDBCQUFBO0VBQ0EsY0NYQTtBRnFDTjtBQ3RCRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUR3Qko7QUN0QkU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEd0JKOztBR2pEQTtFQUNFLG1CRERNO0VDRU4sa0JBQUE7QUhvREY7QUduREU7RUFDRSxhQUFBO0VBRUEsZUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBSG9ESjtBR2pERTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUhtREo7QUdsREk7RUFDRSxvQkFBQTtFQUNBLFdEakJFO0VDa0JGLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FIb0ROO0FHbkRNO0VBQ0UsY0RyQkY7QUYwRU5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi92YXIuc2Nzcyc7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdIaW5kJywgc2Fucy1zZXJpZjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi50aXRsZSB7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4ubG9nb3tcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmciA7XFxufVxcblxcbkBpbXBvcnQgJy4vY29tcG9uZW50cy9pbmRleC5zY3NzJztcXG5AaW1wb3J0ICcuL2NvbXBvbmVudHMvaGVhZGVyLnNjc3MnO1wiLFwiLmluZGV4IHtcXG4gIGJhY2tncm91bmQ6ICRibGFjaztcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICBhLmxpbmstaW5kZXgsIC50aXRsZS1pbmRleCB7XFxuICAgIGNvbG9yOiAkd2hpdGU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIH1cXG5cXG4gIGEubGluay1pbmRleCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgICAgY29sb3I6ICRyZWQ7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50aXRsZS1pbmRleCB7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgLm9wdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbiAgfVxcbn1cIixcIiRibGFjazogIzIwMjAyMDtcXG4kd2hpdGU6ICNmZmY7XFxuJHJlZDogI2UyMzYzNjtcIixcImhlYWRlci5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogJGJsYWNrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLmNvbnRhaW5lci1oZWFkZXJ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcbiAgfVxcblxcbiAgLm9wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgLm9wdGlvbiB7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAgICAgY29sb3I6ICR3aGl0ZTtcXG4gICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogJHJlZDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/styles/main.scss\n");

/***/ })

})