"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home(param) {\n    var providers = param.providers;\n    var backendapi = function backendapi(auth_token) {\n        // var tag = document.getElementById(\"user_token\").innerHTML = auth_token\n        fetch(\"http://127.0.0.1:4000/accounts/google/\", {\n            method: \"post\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"auth_token\": auth_token\n            })\n        }).then(function(data) {\n            return data.json();\n        }).then(function(res) {\n            if (res.tokens) {\n                document.getElementById(\"email_id\").innerText = res.email;\n                document.getElementById(\"token\").innerText = res.tokens;\n            }\n        });\n    };\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(), session = ref.data, loading = ref.loading;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (session) {\n            if (session.provider === \"google\") {\n                var auth_token = session.auth_token;\n                backendapi(auth_token);\n            }\n        }\n    }, [\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"google-login-btn\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    type: \"submit\",\n                    id: \"googlelogin\",\n                    onClick: function() {\n                        return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"google\");\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            type: \"text/css\",\n                            href: \"//fonts.googleapis.com/css?family=Open+Sans\"\n                        }, void 0, false, {\n                            fileName: \"/home/mridul/Desktop/google_sso_django_nextjs_example/google_sso_django_nextjs_example/frontend/pages/index.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"google-btn\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"google-icon-wrapper\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        className: \"google-icon\",\n                                        src: \"/Google__G__Logo (1).svg\",\n                                        layout: \"fill\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/mridul/Desktop/google_sso_django_nextjs_example/google_sso_django_nextjs_example/frontend/pages/index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/mridul/Desktop/google_sso_django_nextjs_example/google_sso_django_nextjs_example/frontend/pages/index.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"btn-text\",\n                                        style: \"color: white;\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"Sign in with Google\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/mridul/Desktop/google_sso_django_nextjs_example/google_sso_django_nextjs_example/frontend/pages/index.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 59\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/mridul/Desktop/google_sso_django_nextjs_example/google_sso_django_nextjs_example/frontend/pages/index.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/mridul/Desktop/google_sso_django_nextjs_example/google_sso_django_nextjs_example/frontend/pages/index.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mridul/Desktop/google_sso_django_nextjs_example/google_sso_django_nextjs_example/frontend/pages/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mridul/Desktop/google_sso_django_nextjs_example/google_sso_django_nextjs_example/frontend/pages/index.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                    id: \"user_token\"\n                }, void 0, false, {\n                    fileName: \"/home/mridul/Desktop/google_sso_django_nextjs_example/google_sso_django_nextjs_example/frontend/pages/index.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Email Id :\"\n                        }, void 0, false, {\n                            fileName: \"/home/mridul/Desktop/google_sso_django_nextjs_example/google_sso_django_nextjs_example/frontend/pages/index.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            id: \"email_id\"\n                        }, void 0, false, {\n                            fileName: \"/home/mridul/Desktop/google_sso_django_nextjs_example/google_sso_django_nextjs_example/frontend/pages/index.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mridul/Desktop/google_sso_django_nextjs_example/google_sso_django_nextjs_example/frontend/pages/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Auth token :\"\n                        }, void 0, false, {\n                            fileName: \"/home/mridul/Desktop/google_sso_django_nextjs_example/google_sso_django_nextjs_example/frontend/pages/index.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            id: \"token\"\n                        }, void 0, false, {\n                            fileName: \"/home/mridul/Desktop/google_sso_django_nextjs_example/google_sso_django_nextjs_example/frontend/pages/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mridul/Desktop/google_sso_django_nextjs_example/google_sso_django_nextjs_example/frontend/pages/index.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mridul/Desktop/google_sso_django_nextjs_example/google_sso_django_nextjs_example/frontend/pages/index.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Home, \"ZAoQzd9RVZaUR2XO1kTgmDGJeaY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNOLDhEQUFDRCxLQUFHOztzQ0FDRiw4REFBQ2MsT0FBSztzQ0FBQyxjQUFZOzs7OztnQ0FBUTtzQ0FDM0IsOERBQUNBLE9BQUs7NEJBQUNiLEVBQUUsRUFBQyxPQUFPOzs7OztnQ0FBUzs7Ozs7O3dCQUN0Qjs7Ozs7O2dCQUNGO3FCQUNMLENBQ0o7Q0FDRjtHQTVEdUJ2QixJQUFJOztRQUNTSCx1REFBVTs7O0FBRHZCRyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHByb3ZpZGVycyB9KSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgbG9hZGluZyB9ID0gdXNlU2Vzc2lvbigpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlc3Npb24pIHtcbiAgICAgIGlmIChzZXNzaW9uLnByb3ZpZGVyID09PSBcImdvb2dsZVwiKSB7XG4gICAgICAgIHZhciBhdXRoX3Rva2VuID0gc2Vzc2lvbi5hdXRoX3Rva2VuXG4gICAgICAgIGJhY2tlbmRhcGkoYXV0aF90b2tlbilcbiAgICAgIH1cblxuICAgIH1cblxuICB9LCBbc2Vzc2lvbl0pXG4gIGZ1bmN0aW9uIGJhY2tlbmRhcGkoYXV0aF90b2tlbikge1xuICAgIC8vIHZhciB0YWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJfdG9rZW5cIikuaW5uZXJIVE1MID0gYXV0aF90b2tlblxuICAgIGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjQwMDAvYWNjb3VudHMvZ29vZ2xlL2AsIHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXCJhdXRoX3Rva2VuXCI6IGF1dGhfdG9rZW4gfSksXG4gICAgfSkudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMudG9rZW5zKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbF9pZFwiKS5pbm5lclRleHQgPSByZXMuZW1haWxcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRva2VuXCIpLmlubmVyVGV4dCA9IHJlcy50b2tlbnNcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG5cbiAgICAgIDxkaXYgaWQ9J2dvb2dsZS1sb2dpbi1idG4nPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgaWQ9J2dvb2dsZWxvZ2luJ1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25JbihcImdvb2dsZVwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiLy9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuc1wiIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2dsZS1idG5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29vZ2xlLWljb24td3JhcHBlclwiPlxuICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiZ29vZ2xlLWljb25cIiBzcmM9XCIvR29vZ2xlX19HX19Mb2dvICgxKS5zdmdcIiBsYXlvdXQ9J2ZpbGwnIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJidG4tdGV4dFwiIHN0eWxlPVwiY29sb3I6IHdoaXRlO1wiPjxiPlNpZ24gaW4gd2l0aCBHb29nbGU8L2I+PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoNiBpZD0ndXNlcl90b2tlbic+PC9oNj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWw+RW1haWwgSWQgOjwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGlkPSdlbWFpbF9pZCc+PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgPlxuICAgICAgICAgIDxsYWJlbD5BdXRoIHRva2VuIDo8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBpZD0ndG9rZW4nPjwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJzaWduSW4iLCJJbWFnZSIsIkhvbWUiLCJwcm92aWRlcnMiLCJiYWNrZW5kYXBpIiwiYXV0aF90b2tlbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsImRhdGEiLCJqc29uIiwicmVzIiwidG9rZW5zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyVGV4dCIsImVtYWlsIiwic2Vzc2lvbiIsImxvYWRpbmciLCJwcm92aWRlciIsImRpdiIsImlkIiwidHlwZSIsIm9uQ2xpY2siLCJsaW5rIiwicmVsIiwiaHJlZiIsImNsYXNzTmFtZSIsInNyYyIsImxheW91dCIsInAiLCJzdHlsZSIsImIiLCJoNiIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});