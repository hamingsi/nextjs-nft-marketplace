/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/graphExample"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fhamingsi%2Fnextjs-nft-marketplace-thegraph-fcc%2Fpages%2FgraphExample.js&page=%2FgraphExample!":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fhamingsi%2Fnextjs-nft-marketplace-thegraph-fcc%2Fpages%2FgraphExample.js&page=%2FgraphExample! ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/graphExample\",\n      function () {\n        return __webpack_require__(/*! ./pages/graphExample.js */ \"./pages/graphExample.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/graphExample\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZob21lJTJGaGFtaW5nc2klMkZuZXh0anMtbmZ0LW1hcmtldHBsYWNlLXRoZWdyYXBoLWZjYyUyRnBhZ2VzJTJGZ3JhcGhFeGFtcGxlLmpzJnBhZ2U9JTJGZ3JhcGhFeGFtcGxlISIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLHdEQUF5QjtBQUNoRDtBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/MTNlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL2dyYXBoRXhhbXBsZVwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvZ3JhcGhFeGFtcGxlLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9ncmFwaEV4YW1wbGVcIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fhamingsi%2Fnextjs-nft-marketplace-thegraph-fcc%2Fpages%2FgraphExample.js&page=%2FgraphExample!\n"));

/***/ }),

/***/ "./pages/graphExample.js":
/*!*******************************!*\
  !*** ./pages/graphExample.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ graphExample; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  {\\n    activeItems(\\n      first: 5\\n      where: { buyer: \"0x0000000000000000000000000000000000000000\" }\\n    ) {\\n      id\\n      buyer\\n      seller\\n      nftAddress\\n      tokenId\\n      price\\n    }\\n  }\\n'\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\nconst GET_ACTIVE_ITEM = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject());\nfunction graphExample() {\n    _s();\n    const { loading, error, data } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(GET_ACTIVE_ITEM);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"hi\"\n    }, void 0, false, {\n        fileName: \"/home/hamingsi/nextjs-nft-marketplace-thegraph-fcc/pages/graphExample.js\",\n        lineNumber: 22,\n        columnNumber: 10\n    }, this);\n}\n_s(graphExample, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ncmFwaEV4YW1wbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUUsa0JBQWtCRixtREFBR0E7QUFnQlosU0FBU0c7O0lBQ3RCLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRSxHQUFHTCx3REFBUUEsQ0FBQ0M7SUFDMUNLLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixxQkFBTyw4REFBQ0c7a0JBQUk7Ozs7OztBQUNkO0dBSndCTjs7UUFDV0Ysb0RBQVFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dyYXBoRXhhbXBsZS5qcz85NGY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuY29uc3QgR0VUX0FDVElWRV9JVEVNID0gZ3FsYFxuICB7XG4gICAgYWN0aXZlSXRlbXMoXG4gICAgICBmaXJzdDogNVxuICAgICAgd2hlcmU6IHsgYnV5ZXI6IFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCIgfVxuICAgICkge1xuICAgICAgaWRcbiAgICAgIGJ1eWVyXG4gICAgICBzZWxsZXJcbiAgICAgIG5mdEFkZHJlc3NcbiAgICAgIHRva2VuSWRcbiAgICAgIHByaWNlXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBncmFwaEV4YW1wbGUoKSB7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9BQ1RJVkVfSVRFTSk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gPGRpdj5oaTwvZGl2Pjtcbn1cbiJdLCJuYW1lcyI6WyJncWwiLCJ1c2VRdWVyeSIsIkdFVF9BQ1RJVkVfSVRFTSIsImdyYXBoRXhhbXBsZSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/graphExample.js\n"));

/***/ }),

/***/ "./node_modules/@swc/helpers/esm/_tagged_template_literal.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/esm/_tagged_template_literal.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   _: function() { return /* binding */ _tagged_template_literal; },\n/* harmony export */   _tagged_template_literal: function() { return /* binding */ _tagged_template_literal; }\n/* harmony export */ });\nfunction _tagged_template_literal(strings, raw) {\n    if (!raw) raw = strings.slice(0);\n\n    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2VzbS9fdGFnZ2VkX3RlbXBsYXRlX2xpdGVyYWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTztBQUNQOztBQUVBLDREQUE0RCxPQUFPLDZCQUE2QjtBQUNoRztBQUN5QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2VzbS9fdGFnZ2VkX3RlbXBsYXRlX2xpdGVyYWwuanM/Mzg5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gX3RhZ2dlZF90ZW1wbGF0ZV9saXRlcmFsKHN0cmluZ3MsIHJhdykge1xuICAgIGlmICghcmF3KSByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuXG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywgeyByYXc6IHsgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KSB9IH0pKTtcbn1cbmV4cG9ydCB7IF90YWdnZWRfdGVtcGxhdGVfbGl0ZXJhbCBhcyBfIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/esm/_tagged_template_literal.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fhamingsi%2Fnextjs-nft-marketplace-thegraph-fcc%2Fpages%2FgraphExample.js&page=%2FgraphExample!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);