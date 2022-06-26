"use strict";
(() => {
var exports = {};
exports.id = 95;
exports.ids = [95];
exports.modules = {

/***/ 549:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Followers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3015);
/* harmony import */ var _stores_stores__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5224);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(6982);
/* harmony import */ var _styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _components_SectionHeading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7146);
/* harmony import */ var _components_HowWork__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2983);
/* harmony import */ var _components_Testimonial__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4433);
/* harmony import */ var _components_Faq__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1454);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3389);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6077);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3255);
/* harmony import */ var _components_SubpageHeading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1388);
/* harmony import */ var _public_assets_pattern_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9767);
/* harmony import */ var _public_assets_people_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(637);
/* harmony import */ var _public_assets_home_how_it_works_1_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5772);
/* harmony import */ var _public_assets_home_how_it_works_2_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4363);
/* harmony import */ var _public_assets_home_how_it_works_3_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3623);
/* harmony import */ var _public_assets_testiImg1_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1458);
/* harmony import */ var _public_assets_testiImg2_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(546);
/* harmony import */ var _public_assets_testiImg3_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(6878);
/* harmony import */ var _public_assets_testiImg4_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(7244);
/* harmony import */ var _public_assets_testiImg5_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2823);
/* harmony import */ var _public_assets_testiImg6_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(5602);
/* harmony import */ var _public_assets_star_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(81);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_5__]);
swiper_react__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






























function Followers() {
    const pricing = __webpack_require__(8224);
    const { plan  } = (0,_stores_stores__WEBPACK_IMPORTED_MODULE_6__/* .useMobxStores */ .lM)();
    const { 0: isActiveModal , 1: setActiveModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const popupToggle = ()=>{
        setActiveModal(!isActiveModal);
    };
    const { 0: isActive , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const handleToggle = ()=>{
        setActive(!isActive);
    };
    const changePlan = (event)=>{
        if (event.target.checked) {
            plan.setPlanId(event.target.id);
            plan.setPlanType("followers");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Buy Instagram Followers - Fameoid"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_12__/* .Navigation */ .W, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "subpgBlock",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "dotLeftPatt",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            src: _public_assets_pattern_png__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
                            width: 195,
                            height: 159
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "doRightPatt",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            src: _public_assets_pattern_png__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
                            width: 195,
                            height: 159
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SubpageHeading__WEBPACK_IMPORTED_MODULE_15__/* .SubpageHeading */ .u, {
                            title: "Buy Instagram Followers",
                            titleGreen: "Delivered Instantly",
                            description: "Buy Instagram followers to grow your Instagram quickly, safely, and with effectively. Choose between high quality and active followers by toggling below."
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pricingContain",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                className: "row g-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                        className: "d-none d-lg-block",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planTableOuter),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Table, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {}),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                    className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().tdColSelcted),
                                                                    colSpan: 2,
                                                                    children: isActive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().activeSelect),
                                                                        children: "Selected "
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().inActiveSelect),
                                                                        children: "Selected"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().hdngTable),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: "High Quality"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: "Active"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: "High-Quality Followers"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().checkIcon),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "22",
                                                                            height: "22",
                                                                            fill: "#04CD6A",
                                                                            className: "bi bi-check-lg",
                                                                            viewBox: "0 0 16 16",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().checkIcon),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "22",
                                                                            height: "22",
                                                                            fill: "#04CD6A",
                                                                            className: "bi bi-check-lg",
                                                                            viewBox: "0 0 16 16",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: "Real Followers"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().closeIcon),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "22",
                                                                            height: "22",
                                                                            fill: "#B20505",
                                                                            className: "bi bi-x",
                                                                            viewBox: "0 0 16 16",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().checkIcon),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "22",
                                                                            height: "22",
                                                                            fill: "#04CD6A",
                                                                            className: "bi bi-check-lg",
                                                                            viewBox: "0 0 16 16",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: "30 Day Refills"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().closeIcon),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "22",
                                                                            height: "22",
                                                                            fill: "#B20505",
                                                                            className: "bi bi-x",
                                                                            viewBox: "0 0 16 16",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().checkIcon),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "22",
                                                                            height: "22",
                                                                            fill: "#04CD6A",
                                                                            className: "bi bi-check-lg",
                                                                            viewBox: "0 0 16 16",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: "Fast Delivery"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().checkIcon),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "22",
                                                                            height: "22",
                                                                            fill: "#04CD6A",
                                                                            className: "bi bi-check-lg",
                                                                            viewBox: "0 0 16 16",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().checkIcon),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "22",
                                                                            height: "22",
                                                                            fill: "#04CD6A",
                                                                            className: "bi bi-check-lg",
                                                                            viewBox: "0 0 16 16",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: "Instant Delivery"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "22",
                                                                            height: "22",
                                                                            fill: "#B20505",
                                                                            className: "bi bi-x",
                                                                            viewBox: "0 0 16 16",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "22",
                                                                            height: "22",
                                                                            fill: "#04CD6A",
                                                                            className: "bi bi-check-lg",
                                                                            viewBox: "0 0 16 16",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: "Priority Support"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "22",
                                                                            height: "22",
                                                                            fill: "#B20505",
                                                                            className: "bi bi-x",
                                                                            viewBox: "0 0 16 16",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "22",
                                                                            height: "22",
                                                                            fill: "#04CD6A",
                                                                            className: "bi bi-check-lg",
                                                                            viewBox: "0 0 16 16",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: "No Password Required"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "22",
                                                                            height: "22",
                                                                            fill: "#04CD6A",
                                                                            className: "bi bi-check-lg",
                                                                            viewBox: "0 0 16 16",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "22",
                                                                            height: "22",
                                                                            fill: "#04CD6A",
                                                                            className: "bi bi-check-lg",
                                                                            viewBox: "0 0 16 16",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: "Satisfaction Guarantee"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "22",
                                                                            height: "22",
                                                                            fill: "#04CD6A",
                                                                            className: "bi bi-check-lg",
                                                                            viewBox: "0 0 16 16",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            width: "22",
                                                                            height: "22",
                                                                            fill: "#04CD6A",
                                                                            className: "bi bi-check-lg",
                                                                            viewBox: "0 0 16 16",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioBoxOuter),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioBox),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioBoxHdr),
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                                                className: "row g-0 d-flex align-items-center justify-content-between",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                            children: "Active Followers"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                                        className: "col-auto",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                className: `${(_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().switchBtn)} ${isActive ? "switchActiveBtn" : null}`,
                                                                                onClick: handleToggle,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: `slider1 ${(_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().slider)} ${(_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().round)}`
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().popUpBtn),
                                                                                onClick: popupToggle,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    width: "17",
                                                                                    height: "17",
                                                                                    fill: "#000",
                                                                                    className: "bi bi-question-circle-fill",
                                                                                    viewBox: "0 0 16 16",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        isActive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioBoxBody),
                                                            children: pricing.followers.length > 0 ? pricing.followers.map((PricingPlan)=>{
                                                                if (PricingPlan.type != "active") return;
                                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `${(_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioCol)} ${PricingPlan.is_featured ? (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioHightlightCol) : ""}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            onChange: changePlan,
                                                                            type: "radio",
                                                                            className: `form-check-input ${(_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().formCheckInput)}`,
                                                                            name: "followers",
                                                                            id: `${PricingPlan.plan_id}`,
                                                                            value: `${PricingPlan.quantity} Followers`
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            className: `d-block form-check-label ${(_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().formCheckLabel)}`,
                                                                            htmlFor: `${PricingPlan.plan_id}`,
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                                                                className: "row g-0 d-flex align-items-center justify-content-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioTitle),
                                                                                            children: [
                                                                                                PricingPlan.quantity,
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                                "Followers"
                                                                                            ]
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                                                        className: "col-auto",
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioPrice),
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                    children: [
                                                                                                        "$",
                                                                                                        PricingPlan.sale_price
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
                                                                                                    children: [
                                                                                                        "$",
                                                                                                        PricingPlan.regular_price
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioInfo),
                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("u", {
                                                                                                            className: "capitalize",
                                                                                                            children: [
                                                                                                                "High Quality ",
                                                                                                                PricingPlan.plan_type
                                                                                                            ]
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("u", {
                                                                                                            children: PricingPlan.delivery_time
                                                                                                        })
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }, PricingPlan.plan_id);
                                                            }) : ""
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioBoxBody),
                                                            children: pricing.followers.length > 0 ? pricing.followers.map((PricingPlan)=>{
                                                                if (PricingPlan.type != "quality") return;
                                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `${(_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioCol)} ${PricingPlan.is_featured ? (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioHightlightCol) : ""}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            onChange: changePlan,
                                                                            type: "radio",
                                                                            className: `form-check-input ${(_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().formCheckInput)}`,
                                                                            name: "followers",
                                                                            id: `${PricingPlan.plan_id}`,
                                                                            value: `${PricingPlan.quantity} Followers`
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            className: `d-block form-check-label ${(_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().formCheckLabel)}`,
                                                                            htmlFor: `${PricingPlan.plan_id}`,
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                                                                className: "row g-0 d-flex align-items-center justify-content-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioTitle),
                                                                                            children: [
                                                                                                PricingPlan.quantity,
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                                "Followers"
                                                                                            ]
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                                                        className: "col-auto",
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioPrice),
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                    children: [
                                                                                                        "$",
                                                                                                        PricingPlan.sale_price
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
                                                                                                    children: [
                                                                                                        "$",
                                                                                                        PricingPlan.regular_price
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioInfo),
                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("u", {
                                                                                                            className: "capitalize",
                                                                                                            children: [
                                                                                                                "High Quality ",
                                                                                                                PricingPlan.plan_type
                                                                                                            ]
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("u", {
                                                                                                            children: PricingPlan.delivery_time
                                                                                                        })
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }, PricingPlan.plan_id);
                                                            }) : ""
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `text-center mt-4 ${(_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planBoxBtn)}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_13__/* .MainButton */ .c, {
                                                        title: "Buy Instagram Followers",
                                                        btnURL: "/enter-details",
                                                        customClass: "btnSmall"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "howWorkBlock py-5 d-none d-lg-block",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SectionHeading__WEBPACK_IMPORTED_MODULE_8__/* .SectionHeading */ .O, {
                            title: "How it Works",
                            description: "Fameoid makes it super simple to buy Instagram followers. All you have to do is choose the amount of followers you want, put in your username (no password), and watch your Instagram followers grow."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hwFameWorkOutr text-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                className: "g-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                        md: 4,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HowWork__WEBPACK_IMPORTED_MODULE_9__/* .HowWorkCard */ .a, {
                                            count: "1",
                                            imgSrc: _public_assets_home_how_it_works_1_jpg__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
                                            alt: "Choose Your Package",
                                            title: "Choose Your Package",
                                            description: "Fameoid offers Instagram followers, likes, or views. We also offer combo subscription packages for the serious user."
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                        md: 4,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HowWork__WEBPACK_IMPORTED_MODULE_9__/* .HowWorkCard */ .a, {
                                            count: "2",
                                            imgSrc: _public_assets_home_how_it_works_2_jpg__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
                                            alt: "Enter Your Details",
                                            title: "Enter Your Details",
                                            description: "We don't need your Instagram password. Simply enter your username and our world-class system will take care of the rest."
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                        md: 4,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HowWork__WEBPACK_IMPORTED_MODULE_9__/* .HowWorkCard */ .a, {
                                            count: "3",
                                            imgSrc: _public_assets_home_how_it_works_3_jpg__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,
                                            alt: "See The Results",
                                            title: "See The Results",
                                            description: "Kick back and see the results come in. Nobody likes to engage with an Instagram account with no social proof."
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "buyBtnBlk pt-md-3 pb-md-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "d-md-flex align-items-center justify-content-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    className: "d-none d-md-block",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "15.784",
                                    height: "18.483",
                                    viewBox: "0 0 17.784 20.483",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        id: "Icon_metro-fire",
                                        "data-name": "Icon metro-fire",
                                        d: "M9.708,22.411c-1.365-2.841-.638-4.468.411-6a9.561,9.561,0,0,0,1.445-3.342,3.926,3.926,0,0,1,.542,3.011,7.6,7.6,0,0,0,1.656-5.69,9.826,9.826,0,0,1,3.071,12.023c11.049-6.251,2.748-15.606,1.3-16.659.482,1.054.573,2.837-.4,3.7-1.647-6.246-5.72-7.527-5.72-7.527C12.5,5.149,10.269,8.672,8.121,11.3A6.962,6.962,0,0,0,7.29,7.9c-.152,2.333-1.935,4.236-2.418,6.573C4.218,17.643,5.362,19.962,9.708,22.411Z",
                                        transform: "translate(-4.701 -1.928)",
                                        fill: "#ea5858"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "px10",
                                    children: " 8,492 people used this service in the past 7 days"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "d-block d-md-inline-block mt-3 mt-md-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        className: "memberimage",
                                        src: _public_assets_people_jpg__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
                                        alt: "People",
                                        width: 200,
                                        height: 40
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "testimonialBlock py-5 mb-md-5",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SectionHeading__WEBPACK_IMPORTED_MODULE_8__/* .SectionHeading */ .O, {
                            title: "Our Testimonials",
                            description: "Check out what some of our favorite people are saying about us!"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                            className: "g-4 mt-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    md: 4,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "testiCol",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Testimonial__WEBPACK_IMPORTED_MODULE_10__/* .TestimonialCard */ .v, {
                                            description: "I was really struggling with getting Instagram likes. Fameoid turned it all around!",
                                            imgSrc: _public_assets_testiImg1_png__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,
                                            alt: "Jinny.os0",
                                            authorTitle: "Jinny.os0",
                                            authorDes: "Verified Review",
                                            imgRatingSrc: _public_assets_star_jpg__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    md: 4,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "testiCol mt-md-5",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Testimonial__WEBPACK_IMPORTED_MODULE_10__/* .TestimonialCard */ .v, {
                                            description: "Easy to buy, great prices, fast delivery\u2014 these guys are the best. I\u2019ll definitely buy from Fameoid again.",
                                            imgSrc: _public_assets_testiImg2_png__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,
                                            alt: "Bostongrip",
                                            authorTitle: "Bostongrip",
                                            authorDes: "Verified Review",
                                            imgRatingSrc: _public_assets_star_jpg__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    md: 4,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "testiCol",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Testimonial__WEBPACK_IMPORTED_MODULE_10__/* .TestimonialCard */ .v, {
                                            description: "I went for their automatic monthly package bundle and it\u2019s helped me get more natural growth. I\u2019m seeing highe",
                                            imgSrc: _public_assets_testiImg3_png__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
                                            alt: "Jinny.os0",
                                            authorTitle: "Jinny.os0",
                                            authorDes: "Verified Review",
                                            imgRatingSrc: _public_assets_star_jpg__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    md: 4,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "testiCol mt-md-5 pt-md-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Testimonial__WEBPACK_IMPORTED_MODULE_10__/* .TestimonialCard */ .v, {
                                            description: "Some companies are shady and I\u2019ve really had some bad experiences, and I didn\u2019t expect Fameoid to be different",
                                            imgSrc: _public_assets_testiImg4_png__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z,
                                            alt: "xTskdBBY",
                                            authorTitle: "xTskdBBY",
                                            authorDes: "Verified Review",
                                            imgRatingSrc: _public_assets_star_jpg__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    md: 4,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "testiCol mt-md-5",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Testimonial__WEBPACK_IMPORTED_MODULE_10__/* .TestimonialCard */ .v, {
                                            description: "Instagram is our primary social network for marketing. We were able to accomplish so much more with",
                                            imgSrc: _public_assets_testiImg5_png__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z,
                                            alt: "toSSBoss",
                                            authorTitle: "toSSBoss",
                                            authorDes: "Verified Review",
                                            imgRatingSrc: _public_assets_star_jpg__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    md: 4,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "testiCol mt-md-5 pt-md-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Testimonial__WEBPACK_IMPORTED_MODULE_10__/* .TestimonialCard */ .v, {
                                            description: "The followers I got with Fameoid were high quality as it said on their site, and they didn\u2019t drop off like with other",
                                            imgSrc: _public_assets_testiImg6_png__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z,
                                            alt: "SamBam10",
                                            authorTitle: "SamBam10",
                                            authorDes: "Verified Review",
                                            imgRatingSrc: _public_assets_star_jpg__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "faqBlock py-5 mt-md-5",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SectionHeading__WEBPACK_IMPORTED_MODULE_8__/* .SectionHeading */ .O, {
                            title: "Frequently Asked Questions",
                            description: "Social media is exploding and a revolution is going on that\u2019s changing the way consumers interact with businesses."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "faqRow mt-5 pt-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Why Should I Buy Instagram Followers?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Instagram followers hold a great deal of importance for your Instagram success. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Having a high follower count can impact your reputation, credibility, authority in your niche, and also get more people checking out your content on a regular basis.\xa0"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Just think about it\u2014 your account will look much more popular and enticing to new viewers when you have a lot of followers. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Not only that, if your goal is to get into influencing, you will definitely need to have a solid amount of IG followers.\xa0"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "The problem is that it can be really tough to grow your Instagram followers on your own without outside help, and it can also cut into your personal time, taking away from content creation opportunities and interaction with users.\xa0"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "The best thing you can do to give yourself a jump start in boosting your follower account is to buy followers from Fameoid. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "All of our followers are high-quality, offering you the chance to build your reputation and popularity without the busywork. "
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "What Kind Of Quality Are Fameoid Followers?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Fameoid only offers the highest quality Instagram followers. That means you\u2019ll get followers that have real profiles, including a profile picture, posts on their feed\u2014 the whole nine yards. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "This can help you to maintain a strong reputation as well as credibility. Fameoid knows that nothing is worse than a bunch of fake followers with weird usernames and no content at all."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "We have designed the perfect follower service to get you accounts that will actually help you. "
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "How Long Does It Take To Get My Followers?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "We waste no time getting to your order, so as soon as you place it, your order will be processed pretty much immediately."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "We\u2019ll then get started on delivering your order. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Fameoid wants to keep your account as safe and reputable as possible, so once your order begins delivery, we will drip your followers in naturally over a period to ensure that you keep things organic. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "The total delivery time will depend on the number of followers you order, but your followers will continue to arrive on your account until that quantity is reached!"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Can I Get Banned For Buying Instagram Followers?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Fameoid protects your Instagram account every step of the way."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "That\u2019s one of the reasons we also deliver with a drip delivery\u2014 to keep your account safe! "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "None of our clients have ever had their Instagram account banned or blocked from Instagram for using our services."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "We\u2019re totally compliant with the terms of use and you can rest assured that we deliver your order securely without risk."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "We\u2019re not like the other guys out there who send you whatever they can just to fulfill your order."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "We take pride in our services and will only send you the best of the best, keeping your Instagram on the up and up."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Which Instagram Follower Package Should I Choose?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "We have plenty of options to suit every goal and every budget!"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "That\u2019s one reason why Fameoid rocks\u2014 we take into account many different factors to provide packages that can work for you. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "The first thing you should consider is your current follower count and what your target follower count is."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Then, you can find a package that will help you hit your goal. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Remember that all of our packages are drip delivered, so it doesn\u2019t hurt to get more, as they will come in over a set period and not all at once."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "You can also save when you buy larger packages, which helps out the wallet!"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "What Information Do I need To Provide?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Fameoid keeps things simple and only asks for the most basic information needed to provide services."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "That includes stuff like your name, email, Instagram username or URL, and that\u2019s basically it!"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "You\u2018ll securely complete your purchase with your billing information, which we don\u2019t store, and you\u2019re good to go. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "We don\u2019t need to dig deep into your personal information to provide services\u2014 we get your order processing and can work without your Instagram password with secure delivery. "
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Are My Followers Going To Be Delivered All At Once?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Fameoid offers a variety of follower quantities, some of which are in the thousands."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "It would look pretty strange if you all of a sudden had an influx of 5,000 followers, and the Instagram algorithm may go a bit haywire."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "For that reason, we get your order processed straight away, but deliver your order naturally by dripping followers onto your account over a period of time."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "That way, Instagram stays happy, you are getting your followers naturally, and your reputation increases steadily along with your higher follower count. Win-win."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "At Fameoid, your security and credibility are of utmost importance!"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "We do everything to protect you and grow your account in the right way."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Do You Have A Subscription For Automatic Monthly Followers?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Yes, Fameoid offers not only one-time packages but also subscription Instagram packages that can bring you more followers on a monthly basis.  How could this benefit you? "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Well, there are a few things: "
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "You won\u2019t have to continually come back and repeat your purchase "
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Save time knowing that your Instagram followers are coming to you without fail every month"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Have growth that you know is coming to help your Instagram success"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Consistent growth will help your account look more authentic with continual Instagram follower growth."
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " You\u2019ll need to have that consistent growth if you want to get more brand partnerships and endorsements. It will also help to generate interest in your brand."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " People want to follow Instagram accounts that other people like! "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " That\u2019s the whole idea of social media, after all."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " You\u2019ll appear to be more credible to your followers and profile viewers, helping you grow naturally in the long term. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " What\u2019s more, we offer subscription services for Instagram likes and Instagram views as well!"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " That gives you a well-rounded Instagram presence with followers as well as engagement to go along with it. Check out our combo packages, giving you all three\u2014 followers, likes, and views. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " You\u2019ll have consistent followers with likes and views on your post to match."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "That\u2019s the ultimate way to boost your Instagram performance."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "8",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Do You Have A Bundle For Followers, Likes, & Views?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Here at Fameoid, one of our biggest priorities is to make sure that you have access to the top packages for Instagram growth."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "For that reason, we\u2019re proud to offer bundle packages of followers, likes, and views for Instagram so that you can take your profile to the next level. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "It\u2019s no secret that you need a healthy follower count, but did you know that you also need to have levels of engagement such as likes and views, that match your follower count? "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Imagine that you have 10,000 followers but hardly get any likes. This will lower your credibility and make you look bad. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " With bundle packages, you can ensure that you have a consistent reputation on Instagram\u2014 one that will continue to bring you growth in the long term. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "You can buy bundle packages as a one-time purchase or as a subscription, making it easier than ever before to stimulate your Instagram!"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_14__/* .Footer */ .$, {}),
            isActiveModal ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().modalView),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().cnclBtn),
                        onClick: popupToggle,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            fill: "currentColor",
                            className: "bi bi-x",
                            viewBox: "0 0 16 16",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "High Quality Followers"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "These followers have accounts with profile pictures and some uploads on their profile. They will help to build your reputation. Auto-refill is provided if you experience a dip in followers as per our guarantee."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "Active Followers"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Active followers are perfect for those who are ready and excited about substantial Instagram growth. These followers have highly developed profiles and offer virtually no drop at all!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "Subscription Packages"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "If you\u2019re ready to get continual Instagram growth and ensure that your numbers are always on the rise, a subscription package is perfect for you. You\u2019ll get Instagram followers automatically without having to purchase one-time packages repeatedly."
                    })
                ]
            }) : null
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("mobx-persist-store");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,767,571,433,454,224,423,522,926,712,109], () => (__webpack_exec__(549)));
module.exports = __webpack_exports__;

})();