"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/file/[id]",{

/***/ "./components/pages/FilePage/FileContent/SearchAndReplace/index.js":
/*!*************************************************************************!*\
  !*** ./components/pages/FilePage/FileContent/SearchAndReplace/index.js ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/http */ \"./utils/http.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SearchAndReplace = (param)=>{\n    let { debounceSearchFile  } = param;\n    _s();\n    const [replaceMode, setReplaceMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleReplace = async ()=>{\n        try {\n            const body = {\n                searchValue,\n                replaceValue,\n                replaceAll: true,\n                row: [],\n                fileId\n            };\n            await _utils_http__WEBPACK_IMPORTED_MODULE_2__[\"default\"].patch(\"/file/replace\", body);\n        } catch (err) {\n            var _err_response, _err_response_data;\n            console.log(\"Error\", err);\n            antd__WEBPACK_IMPORTED_MODULE_3__.notification.error({\n                message: ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || \"Error: unable to replace\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-4 mt-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                className: \"w-fit ml-4 \",\n                placeholder: \"Search\",\n                onChange: (param)=>{\n                    let { target: { value  }  } = param;\n                    return debounceSearchFile(value);\n                },\n                prefix: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.SearchOutlined, {}, void 0, false, void 0, void 0)\n            }, void 0, false, {\n                fileName: \"/Users/fetch/Documents/gnosis/components/pages/FilePage/FileContent/SearchAndReplace/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {\n                onChange: ()=>setReplaceMode(!replaceMode),\n                children: \"Replace\"\n            }, void 0, false, {\n                fileName: \"/Users/fetch/Documents/gnosis/components/pages/FilePage/FileContent/SearchAndReplace/index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fetch/Documents/gnosis/components/pages/FilePage/FileContent/SearchAndReplace/index.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchAndReplace, \"HEyH/meR6jmNk2//L6d9TfU7BAU=\");\n_c = SearchAndReplace;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchAndReplace);\nvar _c;\n$RefreshReg$(_c, \"SearchAndReplace\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZ2VzL0ZpbGVQYWdlL0ZpbGVDb250ZW50L1NlYXJjaEFuZFJlcGxhY2UvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFxRDtBQUNGO0FBQ2xCO0FBRUQ7QUFFaEMsTUFBTU0sbUJBQW1CLFNBQTRCO1FBQTNCLEVBQUVDLG1CQUFrQixFQUFFOztJQUM5QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUNwRCxNQUFNTSxnQkFBZ0IsVUFBWTtRQUNoQyxJQUFJO1lBQ0YsTUFBTUMsT0FBTztnQkFDWEM7Z0JBQ0FDO2dCQUNBQyxZQUFZLElBQUk7Z0JBQ2hCQyxLQUFLLEVBQUU7Z0JBQ1BDO1lBQ0Y7WUFDQSxNQUFNWCx5REFBVSxDQUFFLGlCQUFnQk07UUFDcEMsRUFBRSxPQUFPTyxLQUFLO2dCQUdEQTtZQUZYQyxRQUFRQyxHQUFHLENBQUMsU0FBU0Y7WUFDckJoQixvREFBa0IsQ0FBQztnQkFDakJvQixTQUFTSixDQUFBQSxDQUFBQSxnQkFBQUEsSUFBSUssUUFBUSxjQUFaTCwyQkFBQUEsS0FBQUEsSUFBQUEsc0JBQUFBLGNBQWNNLGtEQUFkTixLQUFBQSx1QkFBb0JJLE9BQUYsS0FBYTtZQUMxQztRQUNGO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUN6Qix1Q0FBS0E7Z0JBQ0p5QixXQUFVO2dCQUNWQyxhQUFZO2dCQUNaQyxVQUFVLFNBQTJCckI7d0JBQTFCLEVBQUVzQixRQUFRLEVBQUVDLE1BQUssRUFBRSxHQUFFOzJCQUFLdkIsbUJBQW1CdUI7Z0JBQUs7Z0JBQzdEQyxzQkFBUSw4REFBQzVCLDZEQUFjQTs7Ozs7OzBCQUV6Qiw4REFBQ0gsMENBQVFBO2dCQUFDNEIsVUFBVSxJQUFNbkIsZUFBZSxDQUFDRDswQkFBYzs7Ozs7Ozs7Ozs7O0FBRzlEO0dBOUJNRjtLQUFBQTtBQWdDTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGFnZXMvRmlsZVBhZ2UvRmlsZUNvbnRlbnQvU2VhcmNoQW5kUmVwbGFjZS9pbmRleC5qcz8zNjA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoZWNrYm94LCBJbnB1dCwgbm90aWZpY2F0aW9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IFNlYXJjaE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgaHR0cCBmcm9tIFwiQC91dGlscy9odHRwXCI7XG5cbmNvbnN0IFNlYXJjaEFuZFJlcGxhY2UgPSAoeyBkZWJvdW5jZVNlYXJjaEZpbGUgfSkgPT4ge1xuICBjb25zdCBbcmVwbGFjZU1vZGUsIHNldFJlcGxhY2VNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlUmVwbGFjZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgc2VhcmNoVmFsdWUsXG4gICAgICAgIHJlcGxhY2VWYWx1ZSxcbiAgICAgICAgcmVwbGFjZUFsbDogdHJ1ZSxcbiAgICAgICAgcm93OiBbXSxcbiAgICAgICAgZmlsZUlkLFxuICAgICAgfTtcbiAgICAgIGF3YWl0IGh0dHAucGF0Y2goYC9maWxlL3JlcGxhY2VgLCBib2R5KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3JcIiwgZXJyKTtcbiAgICAgIG5vdGlmaWNhdGlvbi5lcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6IGVyci5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSB8fCBcIkVycm9yOiB1bmFibGUgdG8gcmVwbGFjZVwiLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgbXQtNFwiPlxuICAgICAgPElucHV0XG4gICAgICAgIGNsYXNzTmFtZT1cInctZml0IG1sLTQgXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gZGVib3VuY2VTZWFyY2hGaWxlKHZhbHVlKX1cbiAgICAgICAgcHJlZml4PXs8U2VhcmNoT3V0bGluZWQgLz59XG4gICAgICAvPlxuICAgICAgPENoZWNrYm94IG9uQ2hhbmdlPXsoKSA9PiBzZXRSZXBsYWNlTW9kZSghcmVwbGFjZU1vZGUpfT5SZXBsYWNlPC9DaGVja2JveD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEFuZFJlcGxhY2U7XG4iXSwibmFtZXMiOlsiQ2hlY2tib3giLCJJbnB1dCIsIm5vdGlmaWNhdGlvbiIsIlNlYXJjaE91dGxpbmVkIiwidXNlU3RhdGUiLCJodHRwIiwiU2VhcmNoQW5kUmVwbGFjZSIsImRlYm91bmNlU2VhcmNoRmlsZSIsInJlcGxhY2VNb2RlIiwic2V0UmVwbGFjZU1vZGUiLCJoYW5kbGVSZXBsYWNlIiwiYm9keSIsInNlYXJjaFZhbHVlIiwicmVwbGFjZVZhbHVlIiwicmVwbGFjZUFsbCIsInJvdyIsImZpbGVJZCIsInBhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSIsInJlc3BvbnNlIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZWZpeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/pages/FilePage/FileContent/SearchAndReplace/index.js\n"));

/***/ })

});