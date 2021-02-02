module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/TipModal.js":
/*!********************************!*\
  !*** ./components/TipModal.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @xstate/react */ \"@xstate/react\");\n/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_xstate_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _machines_tipMachine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../machines/tipMachine */ \"./machines/tipMachine.js\");\n\n\nvar _jsxFileName = \"/home/davoodfox/Code/playground/formex/src/components/TipModal.js\";\n\n\n\n\n\nfunction TipModal({\n  info\n}) {\n  var {\n    name,\n    value\n  } = info;\n  var {\n    0: tip,\n    1: setTip\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  var {\n    0: percent,\n    1: setPercent\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  var [state, send] = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_3__[\"useMachine\"])(_machines_tipMachine__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: state.matches(\"final\") && `$${tip} sended to ${name}`\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      type: \"primary\",\n      onClick: () => {\n        send(\"OPEN\");\n      },\n      children: \"Open Modal\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"], {\n      title: \"Options\",\n      visible: state.matches(\"options\"),\n      okText: \"Continue\",\n      onOk: () => {\n        console.log(tip);\n\n        if (tip) {\n          send(\"CONTINUE\");\n        } else {\n          return;\n        }\n      },\n      onCancel: () => {\n        send(\"CLOSE\");\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: [\"Product is $\", value]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"Tip for \", name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        type: percent == 5 && \"primary\",\n        onClick: () => {\n          setTip(value * 5 / 100);\n          setPercent(5);\n        },\n        children: \"5%\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        type: percent == 10 && \"primary\",\n        onClick: () => {\n          setTip(value * 10 / 100);\n          setPercent(10);\n        },\n        children: \"10%\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        type: percent == 15 && \"primary\",\n        onClick: () => {\n          setTip(value * 15 / 100);\n          setPercent(15);\n        },\n        children: \"15%\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        type: percent == 20 && \"primary\",\n        onClick: () => {\n          setTip(value * 20 / 100);\n          setPercent(20);\n        },\n        children: \"20%\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n        addonBefore: \"$\",\n        type: \"number\",\n        placeholder: \"custom value\",\n        onFocus: () => {\n          setPercent(null);\n        },\n        onChange: e => {\n          setTip(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"], {\n      title: \"Details\",\n      visible: state.matches(\"details\"),\n      okText: \"Confirm\",\n      onOk: () => {\n        send(\"CONTINUE\");\n      },\n      onCancel: () => {\n        send(\"CLOSE\");\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"Tip for \", name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: [\"$\", tip]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TipModal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RpcE1vZGFsLmpzPzVkYTIiXSwibmFtZXMiOlsiVGlwTW9kYWwiLCJpbmZvIiwibmFtZSIsInZhbHVlIiwidGlwIiwic2V0VGlwIiwidXNlU3RhdGUiLCJwZXJjZW50Iiwic2V0UGVyY2VudCIsInN0YXRlIiwic2VuZCIsInVzZU1hY2hpbmUiLCJ0aXBNYWNoaW5lIiwibWF0Y2hlcyIsImNvbnNvbGUiLCJsb2ciLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQjtBQUFFQztBQUFGLENBQWxCLEVBQTRCO0FBQzFCLE1BQUk7QUFBRUMsUUFBRjtBQUFRQztBQUFSLE1BQWtCRixJQUF0QjtBQUNBLE1BQUk7QUFBQSxPQUFDRyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQkMsc0RBQVEsQ0FBQyxJQUFELENBQTVCO0FBQ0EsTUFBSTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRixzREFBUSxDQUFDLElBQUQsQ0FBcEM7QUFDQSxNQUFJLENBQUNHLEtBQUQsRUFBUUMsSUFBUixJQUFnQkMsZ0VBQVUsQ0FBQ0MsNERBQUQsQ0FBOUI7QUFFQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtILEtBQUssQ0FBQ0ksT0FBTixDQUFjLE9BQWQsS0FBMkIsSUFBR1QsR0FBSSxjQUFhRixJQUFLO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLDJDQUFEO0FBQ0UsVUFBSSxFQUFDLFNBRFA7QUFFRSxhQUFPLEVBQUUsTUFBTTtBQUNiUSxZQUFJLENBQUMsTUFBRCxDQUFKO0FBQ0QsT0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBVUUscUVBQUMsMENBQUQ7QUFDRSxXQUFLLEVBQUMsU0FEUjtBQUVFLGFBQU8sRUFBRUQsS0FBSyxDQUFDSSxPQUFOLENB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O0FBNkZEOztBQUVjSix1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGlwTW9kYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlTWFjaGluZSB9IGZyb20gXCJAeHN0YXRlL3JlYWN0XCI7XG5pbXBvcnQgdGlwTWFjaGluZSBmcm9tIFwiLi4vbWFjaGluZXMvdGlwTWFjaGluZVwiO1xuXG5mdW5jdGlvbiBUaXBNb2RhbCh7IGluZm8gfSkge1xuICB2YXIgeyBuYW1lLCB2YWx1ZSB9ID0gaW5mbztcbiAgdmFyIFt0aXAsIHNldFRpcF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgdmFyIFtwZXJjZW50LCBzZXRQZXJjZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICB2YXIgW3N0YXRlLCBzZW5kXSA9IHVzZU1hY2hpbmUodGlwTWFjaGluZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPntzdGF0ZS5tYXRjaGVzKFwiZmluYWxcIikgJiYgYCQke3RpcH0gc2VuZGVkIHRvICR7bmFtZX1gfTwvaDE+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNlbmQoXCJPUEVOXCIpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBPcGVuIE1vZGFsXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxNb2RhbFxuICAgICAgICB0aXRsZT1cIk9wdGlvbnNcIlxuICAgICAgICB2aXNpYmxlPXtzdGF0ZS5tYXRjaGVzKFwib3B0aW9uc1wiKX1cbiAgICAgICAgb2tUZXh0PVwiQ29udGludWVcIlxuICAgICAgICBvbk9rPXsoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2codGlwKTtcbiAgICAgICAgICBpZiAodGlwKSB7XG4gICAgICAgICAgICBzZW5kKFwiQ09OVElOVUVcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgc2VuZChcIkNMT1NFXCIpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aDM+UHJvZHVjdCBpcyAke3ZhbHVlfTwvaDM+XG4gICAgICAgIDxoMT5UaXAgZm9yIHtuYW1lfTwvaDE+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPXtwZXJjZW50ID09IDUgJiYgXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0VGlwKCh2YWx1ZSAqIDUpIC8gMTAwKTtcbiAgICAgICAgICAgIHNldFBlcmNlbnQoNSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDUlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT17cGVyY2VudCA9PSAxMCAmJiBcInByaW1hcnlcIn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaXAoKHZhbHVlICogMTApIC8gMTAwKTtcbiAgICAgICAgICAgIHNldFBlcmNlbnQoMTApO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAxMCVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPXtwZXJjZW50ID09IDE1ICYmIFwicHJpbWFyeVwifVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldFRpcCgodmFsdWUgKiAxNSkgLyAxMDApO1xuICAgICAgICAgICAgc2V0UGVyY2VudCgxNSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDE1JVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9e3BlcmNlbnQgPT0gMjAgJiYgXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0VGlwKCh2YWx1ZSAqIDIwKSAvIDEwMCk7XG4gICAgICAgICAgICBzZXRQZXJjZW50KDIwKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgMjAlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBhZGRvbkJlZm9yZT1cIiRcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY3VzdG9tIHZhbHVlXCJcbiAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRQZXJjZW50KG51bGwpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRUaXAoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L01vZGFsPlxuICAgICAgPE1vZGFsXG4gICAgICAgIHRpdGxlPVwiRGV0YWlsc1wiXG4gICAgICAgIHZpc2libGU9e3N0YXRlLm1hdGNoZXMoXCJkZXRhaWxzXCIpfVxuICAgICAgICBva1RleHQ9XCJDb25maXJtXCJcbiAgICAgICAgb25Paz17KCkgPT4ge1xuICAgICAgICAgIHNlbmQoXCJDT05USU5VRVwiKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICBzZW5kKFwiQ0xPU0VcIik7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxoMT5UaXAgZm9yIHtuYW1lfTwvaDE+XG4gICAgICAgIDxoMz4ke3RpcH08L2gzPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGlwTW9kYWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TipModal.js\n");

/***/ }),

/***/ "./machines/tipMachine.js":
/*!********************************!*\
  !*** ./machines/tipMachine.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate */ \"xstate\");\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xstate__WEBPACK_IMPORTED_MODULE_0__);\n\nconst tipMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"Machine\"])({\n  context: {\n    amount: null\n  },\n  id: \"tip\",\n  initial: \"idle\",\n  states: {\n    idle: {\n      on: {\n        OPEN: {\n          target: \"options\"\n        }\n      }\n    },\n    options: {\n      on: {\n        CONTINUE: {\n          target: \"details\"\n        },\n        CLOSE: {\n          target: \"idle\"\n        }\n      }\n    },\n    details: {\n      on: {\n        CONTINUE: {\n          target: \"final\"\n        },\n        BACK: {\n          target: \"options\"\n        },\n        CLOSE: {\n          target: \"idle\"\n        }\n      }\n    },\n    final: {}\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (tipMachine);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWNoaW5lcy90aXBNYWNoaW5lLmpzPzI1OGUiXSwibmFtZXMiOlsidGlwTWFjaGluZSIsIk1hY2hpbmUiLCJjb250ZXh0IiwiYW1vdW50IiwiaWQiLCJpbml0aWFsIiwic3RhdGVzIiwiaWRsZSIsIm9uIiwiT1BFTiIsInRhcmdldCIsIm9wdGlvbnMiLCJDT05USU5VRSIsIkNMT1NFIiwiZGV0YWlscyIsIkJBQ0siLCJmaW5hbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxVQUFVLEdBQUdDLHNEQUFPLENBQUM7QUFDekJDLFNBQU8sRUFBRTtBQUNQQyxVQUFNLEVBQUU7QUFERCxHQURnQjtBQUl6QkMsSUFBRSxFQUFFLEtBSnFCO0FBS3pCQyxTQUFPLEVBQUUsTUFMZ0I7QUFNekJDLFFBQU0sRUFBRTtBQUNOQyxRQUFJLEVBQUU7QUFDSkMsUUFBRSxFQUFFO0FBQ0ZDLFlBQUksRUFBRTtBQUNKQyxnQkFBTSxFQUFFO0FBREo7QUFESjtBQURBLEtBREE7QUFRTkMsV0FBTyxFQUFFO0FBQ1BILFFBQUUsRUFBRTtBQUNGSSxnQkFBUSxFQUFFO0FBQ1JGLGdCQUFNLEVBQUU7QUFEQSxTQURSO0FBSUZHLGFBQUssRUFBRTtBQUNMSCxnQkFBTSxFQUFFO0FBREg7QUFKTDtBQURHLEtBUkg7QUFrQk5JLFdBQU8sRUFBRTtBQUNQTixRQUFFLEVBQUU7QUFDRkksZ0JBQVEsRUFBRTtBQUNSRixnQkFBTSxFQUFFO0FBREEsU0FEUjtBQUlGSyxZQUFJLEVBQUU7QUFDSkwsZ0JBQU0sRUFBRTtBQURKLFNBSko7QUFPRkcsYUFBSyxFQUFFO0FBQ0xILGdCQUFNLEVBQUU7QUFESDtBQVBMO0FBREcsS0FsQkg7QUErQk5NLFNBQUssRUFBRTtBQS9CRDtBQU5pQixDQUFELENBQTFCO0FBeUNlaEIseUVBQWYiLCJmaWxlIjoiLi9tYWNoaW5lcy90aXBNYWNoaW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFjaGluZSB9IGZyb20gXCJ4c3RhdGVcIjtcblxuY29uc3QgdGlwTWFjaGluZSA9IE1hY2hpbmUoe1xuICBjb250ZXh0OiB7XG4gICAgYW1vdW50OiBudWxsLFxuICB9LFxuICBpZDogXCJ0aXBcIixcbiAgaW5pdGlhbDogXCJpZGxlXCIsXG4gIHN0YXRlczoge1xuICAgIGlkbGU6IHtcbiAgICAgIG9uOiB7XG4gICAgICAgIE9QRU46IHtcbiAgICAgICAgICB0YXJnZXQ6IFwib3B0aW9uc1wiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9uOiB7XG4gICAgICAgIENPTlRJTlVFOiB7XG4gICAgICAgICAgdGFyZ2V0OiBcImRldGFpbHNcIixcbiAgICAgICAgfSxcbiAgICAgICAgQ0xPU0U6IHtcbiAgICAgICAgICB0YXJnZXQ6IFwiaWRsZVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRldGFpbHM6IHtcbiAgICAgIG9uOiB7XG4gICAgICAgIENPTlRJTlVFOiB7XG4gICAgICAgICAgdGFyZ2V0OiBcImZpbmFsXCIsXG4gICAgICAgIH0sXG4gICAgICAgIEJBQ0s6IHtcbiAgICAgICAgICB0YXJnZXQ6IFwib3B0aW9uc1wiLFxuICAgICAgICB9LFxuICAgICAgICBDTE9TRToge1xuICAgICAgICAgIHRhcmdldDogXCJpZGxlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZmluYWw6IHt9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRpcE1hY2hpbmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./machines/tipMachine.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_TipModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TipModal */ \"./components/TipModal.js\");\n\nvar _jsxFileName = \"/home/davoodfox/Code/playground/formex/src/pages/index.js\";\n\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_TipModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        info: {\n          name: \"Joe\",\n          value: \"100\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        children: [\"Powered by\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/vercel.svg\",\n          alt: \"Vercel Logo\",\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwibmFtZSIsInZhbHVlIiwiZm9vdGVyIiwibG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLHNCQUNFO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQU0sZUFBUyxFQUFFRCw4REFBTSxDQUFDRSxJQUF4QjtBQUFBLDZCQUNFLHFFQUFDLDREQUFEO0FBQVUsWUFBSSxFQUFFO0FBQUVDLGNBQUksRUFBRSxLQUFSO0FBQWVDLGVBQUssRUFBRTtBQUF0QjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBVUU7QUFBUSxlQUFTLEVBQUVKLDhEQUFNLENBQUNLLE1BQTFCO0FBQUEsNkJBQ0U7QUFDRSxZQUFJLEVBQUMsd0dBRFA7QUFFRSxjQUFNLEVBQUMsUUFGVDtBQUdFLFdBQUcsRUFBQyxxQkFITjtBQUFBLGlDQUthLEdBTGIsZUFNRTtBQUFLLGFBQUcsRUFBQyxhQUFUO0FBQXVCLGFBQUcsRUFBQyxhQUEzQjtBQUF5QyxtQkFBUyxFQUFFTCw4REFBTSxDQUFDTTtBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVCRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFRpcE1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL1RpcE1vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8VGlwTW9kYWwgaW5mbz17eyBuYW1lOiBcIkpvZVwiLCB2YWx1ZTogXCIxMDBcIiB9fT48L1RpcE1vZGFsPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2MzM2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "@xstate/react":
/*!********************************!*\
  !*** external "@xstate/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@xstate/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAeHN0YXRlL3JlYWN0XCI/NmQ3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAeHN0YXRlL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHhzdGF0ZS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@xstate/react\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "xstate":
/*!*************************!*\
  !*** external "xstate" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"xstate\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ4c3RhdGVcIj9hYTgzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InhzdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInhzdGF0ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///xstate\n");

/***/ })

/******/ });