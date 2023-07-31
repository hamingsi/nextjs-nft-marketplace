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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* harmony import */ var _components_NFTBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NFTBox */ \"./components/NFTBox.js\");\n/* harmony import */ var _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/networkMapping.json */ \"./constants/networkMapping.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst PRICE = \"100000000000000000\";\nconst nftAddress = \"0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512\";\nconst TOKEN_ID = 0;\nconst marketplaceAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\nconst seller = \"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266\";\nfunction Home() {\n    _s();\n    const { isWeb3Enabled, chainId } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis)();\n    const chainString = chainId ? parseInt(chainId).toString() : \"31337\";\n    const marketplaceAddress = _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_4__[chainString].NftMarketplace;\n    // show listed NFT recently\n    // will index the events !!!\n    // server to listen for those events to be fired, and we will add then to a\n    // TheGraph does this in a decentralized way\n    // Moralis does it in a centralized way\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"py-4 px-4 font-bold text-2xl\",\n                children: \"recently listed\"\n            }, void 0, false, {\n                fileName: \"/home/hamingsi/nextjs-nft-marketplace-thegraph-fcc/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap\",\n                children: isWeb3Enabled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NFTBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        price: PRICE,\n                        nftAddress: nftAddress,\n                        tokenId: TOKEN_ID,\n                        marketplace: marketplaceAddress,\n                        seller: seller\n                    }, void 0, false, {\n                        fileName: \"/home/hamingsi/nextjs-nft-marketplace-thegraph-fcc/pages/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/hamingsi/nextjs-nft-marketplace-thegraph-fcc/pages/index.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"web3 currently not enabled\"\n                }, void 0, false, {\n                    fileName: \"/home/hamingsi/nextjs-nft-marketplace-thegraph-fcc/pages/index.js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/hamingsi/nextjs-nft-marketplace-thegraph-fcc/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hamingsi/nextjs-nft-marketplace-thegraph-fcc/pages/index.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"uGrKZmZJN1CLo7MWqkNHglhiauE=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDZ0I7QUFDVjtBQUN1QjtBQUNsQjtBQUNvQjtBQUU5RCxNQUFNTyxRQUFRO0FBQ2QsTUFBTUMsYUFBYTtBQUNuQixNQUFNQyxXQUFXO0FBQ2pCLE1BQU1DLHFCQUFxQjtBQUMzQixNQUFNQyxTQUFTO0FBRUEsU0FBU0M7O0lBQ3RCLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxPQUFPLEVBQUUsR0FBR1gseURBQVVBO0lBQzdDLE1BQU1ZLGNBQWNELFVBQVVFLFNBQVNGLFNBQVNHLFFBQVEsS0FBSztJQUM3RCxNQUFNUCxxQkFBcUJKLDJEQUFjLENBQUNTLFlBQVksQ0FBQ0csY0FBYztJQUVyRSwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDJFQUEyRTtJQUUzRSw0Q0FBNEM7SUFDNUMsdUNBQXVDO0lBRXZDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQStCOzs7Ozs7MEJBQzdDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWlAsOEJBQ0MsOERBQUNNO29CQUFJQyxXQUFXbkIsMEVBQWdCOzhCQUM5Qiw0RUFBQ0ksMERBQU1BO3dCQUNMa0IsT0FBT2hCO3dCQUNQQyxZQUFZQTt3QkFDWmdCLFNBQVNmO3dCQUNUZ0IsYUFBYWY7d0JBQ2JDLFFBQVFBOzs7Ozs7Ozs7O3lDQUlaLDhEQUFDUTs4QkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZjtHQWhDd0JQOztRQUNhVCxxREFBVUE7OztLQUR2QlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IENvbnRyYWN0IH0gZnJvbSBcIndlYjN1aWtpdFwiO1xuaW1wb3J0IHsgdXNlTW9yYWxpcywgdXNlTW9yYWxpc1F1ZXJ5IH0gZnJvbSBcInJlYWN0LW1vcmFsaXNcIjtcbmltcG9ydCBORlRCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvTkZUQm94XCI7XG5pbXBvcnQgbmV0d29ya01hcHBpbmcgZnJvbSBcIi4uL2NvbnN0YW50cy9uZXR3b3JrTWFwcGluZy5qc29uXCI7XG5cbmNvbnN0IFBSSUNFID0gXCIxMDAwMDAwMDAwMDAwMDAwMDBcIjtcbmNvbnN0IG5mdEFkZHJlc3MgPSBcIjB4ZTdmMTcyNUU3NzM0Q0UyODhGODM2N2UxQmIxNDNFOTBiYjNGMDUxMlwiO1xuY29uc3QgVE9LRU5fSUQgPSAwO1xuY29uc3QgbWFya2V0cGxhY2VBZGRyZXNzID0gXCIweDVGYkRCMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M0Y2NDJmNjQxODBhYTNcIjtcbmNvbnN0IHNlbGxlciA9IFwiMHhmMzlGZDZlNTFhYWQ4OEY2RjRjZTZhQjg4MjcyNzljZmZGYjkyMjY2XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgaXNXZWIzRW5hYmxlZCwgY2hhaW5JZCB9ID0gdXNlTW9yYWxpcygpO1xuICBjb25zdCBjaGFpblN0cmluZyA9IGNoYWluSWQgPyBwYXJzZUludChjaGFpbklkKS50b1N0cmluZygpIDogXCIzMTMzN1wiO1xuICBjb25zdCBtYXJrZXRwbGFjZUFkZHJlc3MgPSBuZXR3b3JrTWFwcGluZ1tjaGFpblN0cmluZ10uTmZ0TWFya2V0cGxhY2U7XG5cbiAgLy8gc2hvdyBsaXN0ZWQgTkZUIHJlY2VudGx5XG4gIC8vIHdpbGwgaW5kZXggdGhlIGV2ZW50cyAhISFcbiAgLy8gc2VydmVyIHRvIGxpc3RlbiBmb3IgdGhvc2UgZXZlbnRzIHRvIGJlIGZpcmVkLCBhbmQgd2Ugd2lsbCBhZGQgdGhlbiB0byBhXG5cbiAgLy8gVGhlR3JhcGggZG9lcyB0aGlzIGluIGEgZGVjZW50cmFsaXplZCB3YXlcbiAgLy8gTW9yYWxpcyBkb2VzIGl0IGluIGEgY2VudHJhbGl6ZWQgd2F5XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwicHktNCBweC00IGZvbnQtYm9sZCB0ZXh0LTJ4bFwiPnJlY2VudGx5IGxpc3RlZDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgIHtpc1dlYjNFbmFibGVkID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxORlRCb3hcbiAgICAgICAgICAgICAgcHJpY2U9e1BSSUNFfVxuICAgICAgICAgICAgICBuZnRBZGRyZXNzPXtuZnRBZGRyZXNzfVxuICAgICAgICAgICAgICB0b2tlbklkPXtUT0tFTl9JRH1cbiAgICAgICAgICAgICAgbWFya2V0cGxhY2U9e21hcmtldHBsYWNlQWRkcmVzc31cbiAgICAgICAgICAgICAgc2VsbGVyPXtzZWxsZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+d2ViMyBjdXJyZW50bHkgbm90IGVuYWJsZWQ8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVzIiwiQ29udHJhY3QiLCJ1c2VNb3JhbGlzIiwidXNlTW9yYWxpc1F1ZXJ5IiwiTkZUQm94IiwibmV0d29ya01hcHBpbmciLCJQUklDRSIsIm5mdEFkZHJlc3MiLCJUT0tFTl9JRCIsIm1hcmtldHBsYWNlQWRkcmVzcyIsInNlbGxlciIsIkhvbWUiLCJpc1dlYjNFbmFibGVkIiwiY2hhaW5JZCIsImNoYWluU3RyaW5nIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIk5mdE1hcmtldHBsYWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJjb250YWluZXIiLCJwcmljZSIsInRva2VuSWQiLCJtYXJrZXRwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});