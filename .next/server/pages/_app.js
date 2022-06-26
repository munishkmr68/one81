"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7544);
/* harmony import */ var _stores_stores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5224);

// add bootstrap css 




class CustomApp extends next_app__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static async getInitialProps(appContext) {
        // On server-side, this runs once and creates new stores
        // On client-side, this always reuses existing stores
        const mobxStores = (0,_stores_stores__WEBPACK_IMPORTED_MODULE_2__/* .getStores */ .r8)();
        // Make stores available to page's `getInitialProps`
        appContext.ctx.mobxStores = mobxStores;
        // Call "super" to run page's `getInitialProps`
        const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1__["default"].getInitialProps(appContext);
        // Gather serialization-friendly data from stores
        const initialData = {
            instaProfileInitialData: mobxStores.instaProfile.__data(),
            planInitialData: mobxStores.plan.__data()
        };
        // Send it to `render`
        return {
            ...appProps,
            initialData
        };
    }
    render() {
        const { Component , pageProps , initialData  } = this.props;
        const stores = (0,_stores_stores__WEBPACK_IMPORTED_MODULE_2__/* .getStores */ .r8)(initialData);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_stores_stores__WEBPACK_IMPORTED_MODULE_2__/* .StoreProvider */ .g3, {
            value: stores,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomApp);


/***/ }),

/***/ 6211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("mobx-persist-store");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [544,224], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();