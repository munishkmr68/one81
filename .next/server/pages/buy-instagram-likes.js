"use strict";
(() => {
var exports = {};
exports.id = 12;
exports.ids = [12];
exports.modules = {

/***/ 8886:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Likes)
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
/* harmony import */ var _stores_stores__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5224);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3015);
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_6__]);
swiper_react__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






























function Likes() {
    const { 0: isActiveModal , 1: setActiveModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const pricing = __webpack_require__(8224);
    const { plan  } = (0,_stores_stores__WEBPACK_IMPORTED_MODULE_5__/* .useMobxStores */ .lM)();
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
            plan.setPlanType("likes");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Buy Instagram Likes - Fameoid"
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
                            title: "Buy Instagram Likes",
                            titleGreen: "Delivered Instantly",
                            description: "Buy Instagram Likes to grow your Instagram quickly, safely, and with effectively. Choose between high quality and active followers by toggling below."
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
                                                                        children: "High-Quality Likes"
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
                                                                        children: "Real Likes"
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
                                                                            children: "Active Likes"
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
                                                            children: pricing.likes.length > 0 ? pricing.likes.map((PricingPlan)=>{
                                                                if (PricingPlan.type != "active") return;
                                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `${(_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioCol)} ${PricingPlan.is_featured ? (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioHightlightCol) : ""}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            onChange: changePlan,
                                                                            type: "radio",
                                                                            className: `form-check-input ${(_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().formCheckInput)}`,
                                                                            name: "likes",
                                                                            id: `${PricingPlan.plan_id}`,
                                                                            value: `${PricingPlan.quantity} Likes`
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
                                                                                                "Likes"
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
                                                            children: pricing.likes.length > 0 ? pricing.likes.map((PricingPlan)=>{
                                                                if (PricingPlan.type != "quality") return;
                                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `${(_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioCol)} ${PricingPlan.is_featured ? (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioHightlightCol) : ""}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            onChange: changePlan,
                                                                            type: "radio",
                                                                            className: `form-check-input ${(_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().formCheckInput)}`,
                                                                            name: "likes",
                                                                            id: `${PricingPlan.plan_id}`,
                                                                            value: `${PricingPlan.quantity} Likes`
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
                                                                                                "Likes"
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
                                                        title: "Buy Instagram Likes",
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
                            description: "Fameoid makes it easy to buy Instagram likes for any account. Simply choose the amount of likes you want, choose which images to send them to, and get them delivered right away."
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
                                            description: "Choose between active Instagram likes vs high quality Instagram likes to be delivered to your account."
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                        md: 4,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HowWork__WEBPACK_IMPORTED_MODULE_9__/* .HowWorkCard */ .a, {
                                            count: "2",
                                            imgSrc: _public_assets_home_how_it_works_2_jpg__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
                                            alt: "Enter Your Details",
                                            title: "Enter Your Details",
                                            description: "Simply input your username so that you can select which images you want to send the likes to (up to 10)."
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                        md: 4,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HowWork__WEBPACK_IMPORTED_MODULE_9__/* .HowWorkCard */ .a, {
                                            count: "3",
                                            imgSrc: _public_assets_home_how_it_works_3_jpg__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,
                                            alt: "See The Results",
                                            title: "See The Results",
                                            description: "Your Instagram likes will be delivered in a strategic manner which helps your account get more reach immediately."
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
                className: "testimonialBlock py-5 mb-lg-5",
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
                                            description: "Automatic likes saved my account! I don\u2019t have to worry about people double tapping my content now...",
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
                                            description: "Buying Fameoid likes gave me the confidence to experiment more with my content and I\u2019m more successful...",
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
                                            description: "It was incredibly cheap for the huge value that their likes packages bring, seriously! If you\u2019re not signed up for...",
                                            imgSrc: _public_assets_testiImg3_png__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
                                            alt: "sabrinafam",
                                            authorTitle: "sabrinafam",
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
                                            description: "The likes are real and they\u2019re good quality. I can see that my engagement has gotten a boost sin...",
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
                                            description: "Super professional services, quick delivery, and good prices. Will use again...",
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
                                            description: "Fameoid surpassed all of my expectations. I wasn\u2019t sure what I would be getting, and all of the likes...",
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
                            description: "Need some help? Check out the most asked questions below!"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "faqRow mt-5 pt-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Why Should I Buy Instagram Likes?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Instagram likes are one of the most important metrics on the platform. If you have a lot of likes, there are a couple things that will happen: "
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Your content will appear more popular"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "More people will trust you as an authority in your niche"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "You can secure more brand partnerships with high engagement"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Your Instagram content will rank higher against the algorithm and get more reach, being shown to more people."
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "You can\u2019t assure that your Instagram content will get more likes naturally, so you can give yourself a higher chance of success on the platform when you buy Instagram likes from Fameoid. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "With a lot of Instagram likes on a post, you\u2019ll give yourself a better chance of getting onto the Explore page, which will get exposure for your profile and lead to more long-term growth!"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Which Package Should I Choose?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Which Package Should I Choose?"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Aside from the mushy mushy stuff, our services are the best in the world and that's just the truth."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "You also want to consider how you are going to allocate your likes. How many posts would you like to use the likes for? Is it just one post, or are there multiple? "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "In addition, what is the average number of likes you get per post, and what is your target number? "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Asking yourself these questions can help you to determine which package of Fameoid Instagram likes is right for you."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Do You Offer Automatic Likes?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Yes, we offer convenient automatic likes packages that will allocate likes to your most recent uploads pretty much as soon as they go live. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "It\u2019s now easier than ever to get likes on every new upload right out of the gate. As soon as you upload a new post, our system will be able to detect it. Within just 30 seconds, we will start to send over your automatic likes. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "You\u2019ll never again have to worry about whether or not your post is going to perform well."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Fameoid is here to support you so that through automatic likes, you can gain more traction for your posts and get your followers to take action in the long term. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Our package of automatic likes will be good for all future uploads; if you want to add likes to posts that are already on your profile, you\u2019ll want to purchase one of our normal likes packages as well so that you can bring everything up to the same level. "
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "What Information Do I Need To Provide?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Fameoid offers services that are simple and on-demand, requiring little of your personal information. We only ask for the information that we need to deliver your package, and nothing more! "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "We don\u2019t need your Instagram password to provide you with high-quality Instagram likes, so you can be sure that your Instagram remains yours and only yours. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " We\u2019ll ask for things like your name, contact info, billion for your purchase through a secure terminal, and your Instagram username and/or post URL. Then, you\u2019re good to go!"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Why Is Fameoid The Best Place To Buy Instagram Likes?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Fameoid isn\u2019t like other Instagram growth companies out there today. We care about each and every one of our clients and do everything in our power to provide you with the highest quality Instagram growth. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " We take care of your account, ensuring that you stay safe, and we always guarantee our services."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " We want you to be completely satisfied when you work with Fameoid. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " All of the Instagram likes that you get from Fameoid will be from accounts that will help your reputation, not hurt them. We don\u2019t send you fake, spammy likes that other companies do. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " Fameoid delivers only the best of the best because we care about your success in the long run."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "How Long Does It Take For My Likes To Be Delivered?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Your order will be delivered near instantly, with a caveat. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " It does depend on the service that you select because Fameoid works to get your posts noticed by the Instagram algorithm as we fulfill your order."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " For instance, when you buy Instagram likes with Fameoid, we drip them onto your posts strategically so that they can gain more traction against the algorithm to enhance their reach and popularity. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Because everything is determined by the Instagram algorithm, we like to make sure you\u2019re getting the maximum benefit from the services we provide. "
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Can I Choose Which Images My Likes Are Sent To?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Yes, you can decide just how you want your likes to be distributed. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "That means you can buy likes post by post, or you can split them up over different posts\u2014 up to 10, to be exact. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "It\u2019s good to ensure that all of your posts have a consistent amount of likes. It would be confusing to viewers and to the algorithm if you have some posts with minimal likes and others with hundreds or thousands. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Having a solid amount of likes across all of your posts help you to generate more popularity and credibility on your Instagram, building a reputation that will continually build you social proof and get your content out to more users. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Your posts can even get featured on the Explore page, or the Top section of hashtag feeds (if you include them in your post), expanding the number of users that are going to see them and potentially follow you and interact with your post."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Do You Have A Subscription For Auto Monthly Likes?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "We sure do! Here at Fameoid our main goal is to give our clients the tools they need to build a strong Instagram presence, and buying a subscription for automatic monthly likes can help you do just that. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "You won\u2019t have to keep coming back and buying packages every now and then\u2014 Fameoid will automatically deliver your likes onto your posts, ensuring that you never miss a beat when it comes to engagement. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "This is one of the primary engagement metrics that brands and businesses will look at when choosing accounts to partner with, and it will also be a main way to get your content noticed in terms of the algorithm. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Not only that, imagine this\u2014 the most successful accounts on Instagram post at least once a day. That means you\u2019ll be worrying about getting likes on posts all the time. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "You can make things much more streamlined when you take advantage of a Fameoid subscription for Instagram likes. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "In fact, Fameoid offers subscription packages for all services\u2014 followers, likes, and views to make things easier for you."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "What\u2019s more, you could also bundle them up, giving you the greatest chance of Instagram success with high-performing posts and consistent follower growth."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "8",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Do You Have A Bundles For Followers, Likes, & Views?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Fameoid is glad to offer clients bundle packages that can fortify followers, likes, and views all at the same time!"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Your reputation on Instagram depends on many variables, and having strong overall numbers will create the authority you need to get noticed by potential partners, customers, and new followers."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Let\u2019s say that you take advantage of Fameoid Instagram likes packages."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Your Instagram will have posts with a lot of likes, but if your videos aren\u2019t getting a lot of views, people who check out your profile may start to think that your video content isn\u2019t so great. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "You may also find that it\u2019s tough to have consistent follower increase."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "All of these issues fall by the wayside when you buy bundle packages, making things easier and ensuring that all elements of your Instagram are performing well. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "We can help you with bundle packages on a one-time basis, or even on subscription, bringing you the growth monthly! It couldn\u2019t be easier."
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
                        children: "High Quality Likes"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Fameoid high quality likes are accounts with profile pictures and some uploads on their Instagram profile. They help you gain valuable engagement and if you experience a dip, auto-refill is provided as per our guarantee."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "Premium Likes"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Active likes, just like active followers, will take your Instagram to the next level with higher engagement that counts. These likes offer you virtually no drop at all!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "Premium Likes"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Content is king on Instagram, and since you\u2019ve always got to post content, you\u2019ll need to have continuous engagement coming in. That\u2019s exactly what our likes subscription package will offer you, saving you time and boosting your popularity."
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
var __webpack_exports__ = __webpack_require__.X(0, [895,61,767,571,433,454,224,423,522,926,712,109], () => (__webpack_exec__(8886)));
module.exports = __webpack_exports__;

})();