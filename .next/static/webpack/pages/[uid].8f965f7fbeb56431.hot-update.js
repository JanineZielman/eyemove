"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[uid]",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this2 = undefined, _this1 = undefined;\nvar Header = function(param) {\n    var menuLinks = param.menuLinks;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"header\", {\n        __source: {\n            fileName: \"/Users/janinezielman/Documents/Sites/Prismic/eyemove/components/Header.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        },\n        __self: _this2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                href: \"/\",\n                className: \"logo\",\n                __source: {\n                    fileName: \"/Users/janinezielman/Documents/Sites/Prismic/eyemove/components/Header.js\",\n                    lineNumber: 7,\n                    columnNumber: 7\n                },\n                __self: _this2,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                    src: \"/images/logo.svg\",\n                    __source: {\n                        fileName: \"/Users/janinezielman/Documents/Sites/Prismic/eyemove/components/Header.js\",\n                        lineNumber: 7,\n                        columnNumber: 36\n                    },\n                    __self: _this2\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Links, {\n                menuLinks: menuLinks,\n                __source: {\n                    fileName: \"/Users/janinezielman/Documents/Sites/Prismic/eyemove/components/Header.js\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                },\n                __self: _this2\n            })\n        ]\n    }));\n};\n_c = Header;\nvar Links = function(param) {\n    var menuLinks = param.menuLinks;\n    console.log(menuLinks);\n    if (menuLinks) {\n        var _this = _this1;\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"nav\", {\n            __source: {\n                fileName: \"/Users/janinezielman/Documents/Sites/Prismic/eyemove/components/Header.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            },\n            __self: _this1,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                __source: {\n                    fileName: \"/Users/janinezielman/Documents/Sites/Prismic/eyemove/components/Header.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                },\n                __self: _this1,\n                children: menuLinks.map(function(menuLink, index) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                        __source: {\n                            fileName: \"/Users/janinezielman/Documents/Sites/Prismic/eyemove/components/Header.js\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__.Link.url(menuLink.link),\n                            __source: {\n                                fileName: \"/Users/janinezielman/Documents/Sites/Prismic/eyemove/components/Header.js\",\n                                lineNumber: 21,\n                                columnNumber: 15\n                            },\n                            __self: _this,\n                            children: prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__.RichText.asText(menuLink.label)\n                        })\n                    }, \"menulink-\".concat(index));\n                })\n            })\n        }));\n    }\n    return null;\n};\n_c1 = Links;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"Links\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDdUI7O0FBRWhELEdBQUssQ0FBQ0csTUFBTSxHQUFHLFFBQVEsUUFBVyxDQUFDO1FBQWpCQyxTQUFTLFNBQVRBLFNBQVM7SUFDekIsTUFBTSx1RUFDSEMsQ0FBTTs7Ozs7Ozs7aUZBQ0pDLENBQUM7Z0JBQUNDLElBQUksRUFBQyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBTTs7Ozs7OzsrRkFBRUMsQ0FBRztvQkFBQ0MsR0FBRyxFQUFDLENBQWtCOzs7Ozs7Ozs7aUZBQ3ZEQyxLQUFLO2dCQUFDUCxTQUFTLEVBQUVBLFNBQVM7Ozs7Ozs7Ozs7QUFHakMsQ0FBQztLQVBLRCxNQUFNO0FBU1osR0FBSyxDQUFDUSxLQUFLLEdBQUcsUUFBUSxRQUFXLENBQUM7UUFBakJQLFNBQVMsU0FBVEEsU0FBUztJQUN4QlEsT0FBTyxDQUFDQyxHQUFHLENBQUNULFNBQVM7SUFDckIsRUFBRSxFQUFFQSxTQUFTLEVBQUUsQ0FBQzs7UUFDZCxNQUFNLHNFQUNIVSxDQUFHOzs7Ozs7OzJGQUNEQyxDQUFFOzs7Ozs7OzBCQUNBWCxTQUFTLENBQUNZLEdBQUcsQ0FBQyxRQUFRLENBQVBDLFFBQVEsRUFBRUMsS0FBSztrQ0FDN0IsTUFBTSx3REFBTEMsQ0FBRTs7Ozs7Ozt1R0FDQWIsQ0FBQzs0QkFBQ0MsSUFBSSxFQUFFTCxxREFBUSxDQUFDZSxRQUFRLENBQUNJLElBQUk7Ozs7Ozs7c0NBQzVCcEIsNERBQWUsQ0FBQ2dCLFFBQVEsQ0FBQ00sS0FBSzs7dUJBRnpCLENBQVMsV0FBUSxPQUFOTCxLQUFLOzs7O0lBU3BDLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBSTtBQUNiLENBQUM7TUFsQktQLEtBQUs7QUFvQlgsK0RBQWVSLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJpY2hUZXh0LCBMaW5rIH0gZnJvbSBcInByaXNtaWMtcmVhY3Rqc1wiO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBtZW51TGlua3MgfSkgPT4ge1xuICByZXR1cm4oXG4gICAgPGhlYWRlcj5cbiAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibG9nb1wiPjxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnN2Z1wiLz48L2E+XG4gICAgICA8TGlua3MgbWVudUxpbmtzPXttZW51TGlua3N9IC8+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cblxuY29uc3QgTGlua3MgPSAoeyBtZW51TGlua3MgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhtZW51TGlua3MpXG4gIGlmIChtZW51TGlua3MpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG5hdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHttZW51TGlua3MubWFwKChtZW51TGluaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2BtZW51bGluay0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICA8YSBocmVmPXtMaW5rLnVybChtZW51TGluay5saW5rKX0+XG4gICAgICAgICAgICAgICAge1JpY2hUZXh0LmFzVGV4dChtZW51TGluay5sYWJlbCl9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJpY2hUZXh0IiwiTGluayIsIkhlYWRlciIsIm1lbnVMaW5rcyIsImhlYWRlciIsImEiLCJocmVmIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiTGlua3MiLCJjb25zb2xlIiwibG9nIiwibmF2IiwidWwiLCJtYXAiLCJtZW51TGluayIsImluZGV4IiwibGkiLCJ1cmwiLCJsaW5rIiwiYXNUZXh0IiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});