webpackHotUpdate_N_E("pages/index",{

/***/ "./components/TipModal.js":
/*!********************************!*\
  !*** ./components/TipModal.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_davoodfox_Code_playground_formex_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"../node_modules/antd/es/index.js\");\n/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @xstate/react */ \"../node_modules/@xstate/react/es/index.js\");\n/* harmony import */ var _machines_tipMachine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../machines/tipMachine */ \"./machines/tipMachine.js\");\n\n\n\n\nvar _jsxFileName = \"/home/davoodfox/Code/playground/formex/src/components/TipModal.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction TipModal(_ref) {\n  _s();\n\n  var info = _ref.info;\n  var name = info.name,\n      value = info.value;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isModalVisible = _useState[0],\n      setIsModalVisible = _useState[1];\n\n  var showModal = function showModal() {\n    setIsModalVisible(true);\n  };\n\n  var _useMachine = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_4__[\"useMachine\"])(_machines_tipMachine__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      _useMachine2 = Object(_home_davoodfox_Code_playground_formex_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useMachine, 2),\n      state = _useMachine2[0],\n      send = _useMachine2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: state.value\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      type: \"primary\",\n      onClick: showModal,\n      children: \"Open Modal\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Modal\"], {\n      title: \"Basic Modal\",\n      visible: isModalVisible,\n      onOk: function onOk() {},\n      onCancel: function onCancel() {},\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"Tip for \", name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: [\"$\", value]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(TipModal, \"Oc9xwClk5VpAybL/FHqBkgt4+sY=\", false, function () {\n  return [_xstate_react__WEBPACK_IMPORTED_MODULE_4__[\"useMachine\"]];\n});\n\n_c = TipModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TipModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"TipModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaXBNb2RhbC5qcz81ZGEyIl0sIm5hbWVzIjpbIlRpcE1vZGFsIiwiaW5mbyIsIm5hbWUiLCJ2YWx1ZSIsInVzZVN0YXRlIiwiaXNNb2RhbFZpc2libGUiLCJzZXRJc01vZGFsVmlzaWJsZSIsInNob3dNb2RhbCIsInVzZU1hY2hpbmUiLCJ0aXBNYWNoaW5lIiwic3RhdGUiLCJzZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUFBLE1BQ3BCQyxJQURvQixHQUNKRCxJQURJLENBQ3BCQyxJQURvQjtBQUFBLE1BQ2RDLEtBRGMsR0FDSkYsSUFESSxDQUNkRSxLQURjOztBQUFBLGtCQUdrQkMsc0RBQVEsQ0FBQyxLQUFELENBSDFCO0FBQUEsTUFHbkJDLGNBSG1CO0FBQUEsTUFHSEMsaUJBSEc7O0FBSTFCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJELHFCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDRCxHQUZEOztBQUowQixvQkFRTkUsZ0VBQVUsQ0FBQ0MsNERBQUQsQ0FSSjtBQUFBO0FBQUEsTUFRckJDLEtBUnFCO0FBQUEsTUFRZEMsSUFSYzs7QUFVMUIsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLGdCQUFLRCxLQUFLLENBQUNQO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsMkNBQUQ7QUFBUSxVQUFJLEVBQUMsU0FBYjtBQUF1QixhQUFPLEVBQUVJLFNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFLRSxxRUFBQywwQ0FBRDtBQUNFLFdBQUssRUFBQyxhQURSO0FBRUUsYUFBTyxFQUFFRixjQUZYO0FBR0UsVUFBSSxFQUFFLGdCQUFNLENBQUUsQ0FIaEI7QUFJRSxjQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQUpwQjtBQUFBLDhCQU1FO0FBQUEsK0JBQWFILElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRTtBQUFBLHdCQUFNQyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUEsa0JBREY7QUFpQkQ7O0dBM0JRSCxRO1VBUWFRLHdEOzs7S0FSYlIsUTtBQTZCTUEsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RpcE1vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlTWFjaGluZSB9IGZyb20gXCJAeHN0YXRlL3JlYWN0XCI7XG5pbXBvcnQgdGlwTWFjaGluZSBmcm9tIFwiLi4vbWFjaGluZXMvdGlwTWFjaGluZVwiO1xuXG5mdW5jdGlvbiBUaXBNb2RhbCh7IGluZm8gfSkge1xuICB2YXIgeyBuYW1lLCB2YWx1ZSB9ID0gaW5mbztcblxuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xuICAgIHNldElzTW9kYWxWaXNpYmxlKHRydWUpO1xuICB9O1xuXG4gIHZhciBbc3RhdGUsIHNlbmRdID0gdXNlTWFjaGluZSh0aXBNYWNoaW5lKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+e3N0YXRlLnZhbHVlfTwvaDE+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17c2hvd01vZGFsfT5cbiAgICAgICAgT3BlbiBNb2RhbFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8TW9kYWxcbiAgICAgICAgdGl0bGU9XCJCYXNpYyBNb2RhbFwiXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlfVxuICAgICAgICBvbk9rPXsoKSA9PiB7fX1cbiAgICAgICAgb25DYW5jZWw9eygpID0+IHt9fVxuICAgICAgPlxuICAgICAgICA8aDE+VGlwIGZvciB7bmFtZX08L2gxPlxuICAgICAgICA8aDM+JHt2YWx1ZX08L2gzPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGlwTW9kYWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TipModal.js\n");

/***/ })

})