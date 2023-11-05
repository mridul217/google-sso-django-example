"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar user_credential = [];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        }), \n    ],\n    callbacks: {\n        async jwt (token, user, account, profile, isNewUser) {\n            var user_token = token.token.account;\n            return token;\n        },\n        async session ({ session , token , user  }) {\n            user_credential = {\n                \"provider\": token.token.account.provider\n            };\n            if (token.token.account.access_token) {\n                user_credential[\"auth_token\"] = token.token.account.access_token;\n            }\n            if (token.token.account.id_token) {\n                user_credential[\"auth_token\"] = token.token.account.id_token;\n            }\n            return user_credential;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBQ3NCO0FBRXZELElBQUlFLGVBQWUsR0FBRyxFQUFFO0FBRXhCLGlFQUFlRixnREFBUSxDQUFDO0lBQ3BCRyxTQUFTLEVBQUU7UUFDUEYsaUVBQWMsQ0FBQztZQUNYRyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxhQUFhO1NBQzFDLENBQUM7S0FDTDtJQUNEQyxTQUFTLEVBQUU7UUFDUCxNQUFNQyxHQUFHLEVBQUNDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFO1lBQ2hELElBQUlDLFVBQVUsR0FBR0wsS0FBSyxDQUFDQSxLQUFLLENBQUNFLE9BQU87WUFDcEMsT0FBT0YsS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsTUFBTU0sT0FBTyxFQUFDLEVBQUVBLE9BQU8sR0FBRU4sS0FBSyxHQUFFQyxJQUFJLEdBQUUsRUFBRTtZQUNwQ1gsZUFBZSxHQUFHO2dCQUNkLFVBQVUsRUFBRVUsS0FBSyxDQUFDQSxLQUFLLENBQUNFLE9BQU8sQ0FBQ0ssUUFBUTthQUMzQztZQUNELElBQUlQLEtBQUssQ0FBQ0EsS0FBSyxDQUFDRSxPQUFPLENBQUNNLFlBQVksRUFBRTtnQkFDbENsQixlQUFlLENBQUMsWUFBWSxDQUFDLEdBQUdVLEtBQUssQ0FBQ0EsS0FBSyxDQUFDRSxPQUFPLENBQUNNLFlBQVk7YUFDbkU7WUFDRCxJQUFJUixLQUFLLENBQUNBLEtBQUssQ0FBQ0UsT0FBTyxDQUFDTyxRQUFRLEVBQUU7Z0JBQzlCbkIsZUFBZSxDQUFDLFlBQVksQ0FBQyxHQUFHVSxLQUFLLENBQUNBLEtBQUssQ0FBQ0UsT0FBTyxDQUFDTyxRQUFRO2FBQy9EO1lBQ0QsT0FBT25CLGVBQWU7U0FDekI7S0FDSjtDQUNKLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcblxudmFyIHVzZXJfY3JlZGVudGlhbCA9IFtdXG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCxcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgYXN5bmMgand0KHRva2VuLCB1c2VyLCBhY2NvdW50LCBwcm9maWxlLCBpc05ld1VzZXIpIHtcbiAgICAgICAgICAgIHZhciB1c2VyX3Rva2VuID0gdG9rZW4udG9rZW4uYWNjb3VudFxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgICAgICAgdXNlcl9jcmVkZW50aWFsID0ge1xuICAgICAgICAgICAgICAgIFwicHJvdmlkZXJcIjogdG9rZW4udG9rZW4uYWNjb3VudC5wcm92aWRlcixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0b2tlbi50b2tlbi5hY2NvdW50LmFjY2Vzc190b2tlbikge1xuICAgICAgICAgICAgICAgIHVzZXJfY3JlZGVudGlhbFtcImF1dGhfdG9rZW5cIl0gPSB0b2tlbi50b2tlbi5hY2NvdW50LmFjY2Vzc190b2tlblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRva2VuLnRva2VuLmFjY291bnQuaWRfdG9rZW4pIHtcbiAgICAgICAgICAgICAgICB1c2VyX2NyZWRlbnRpYWxbXCJhdXRoX3Rva2VuXCJdID0gdG9rZW4udG9rZW4uYWNjb3VudC5pZF90b2tlblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVzZXJfY3JlZGVudGlhbFxuICAgICAgICB9XG4gICAgfSxcbn0pOyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwidXNlcl9jcmVkZW50aWFsIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX1NFQ1JFVCIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciIsImFjY291bnQiLCJwcm9maWxlIiwiaXNOZXdVc2VyIiwidXNlcl90b2tlbiIsInNlc3Npb24iLCJwcm92aWRlciIsImFjY2Vzc190b2tlbiIsImlkX3Rva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();