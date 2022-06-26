"use strict";
(() => {
var exports = {};
exports.id = 572;
exports.ids = [572];
exports.modules = {

/***/ 3482:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Views)
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






























function Views() {
    const pricing = __webpack_require__(8224);
    const { plan  } = (0,_stores_stores__WEBPACK_IMPORTED_MODULE_5__/* .useMobxStores */ .lM)();
    const { 0: isActive , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const handleToggle = ()=>{
        setActive(!isActive);
    };
    const changePlan = (event)=>{
        if (event.target.checked) {
            plan.setPlanId(event.target.id);
            plan.setPlanType("views");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Buy Instagram Views - Fameoid"
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
                            title: "Buy Instagram Views",
                            titleGreen: "Delivered Instantly",
                            description: "Buy Instagram Views to grow your Instagram quickly, safely, and with effectively. Choose between high quality and active followers by toggling below."
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
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "",
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
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        children: "High-Quality Views"
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
                                                                        children: "Real Views"
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
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                children: "High Quality Views"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioBoxBody),
                                                            children: pricing.views.length > 0 ? pricing.views.map((PricingPlan, index)=>{
                                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `${(_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioCol)} ${PricingPlan.is_featured ? (_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().planRadioHightlightCol) : ""}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            onChange: changePlan,
                                                                            type: "radio",
                                                                            className: `form-check-input ${(_styles_BuyInstagram_module_css__WEBPACK_IMPORTED_MODULE_28___default().formCheckInput)}`,
                                                                            name: "views",
                                                                            id: `${PricingPlan.plan_id}`,
                                                                            value: `${PricingPlan.quantity} Views`
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
                                                                                                "Views"
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
                                                        title: "Buy Instagram Views",
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
                                                children: "Why Should I Buy Instagram Views?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Video is quickly becoming one of the most important elements of a successful Instagram content strategy."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "So, if you haven\u2019t begun to implement this content format into your profile, you\u2019d better get started!"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "58% of digital marketers are now incorporating video content for marketing purposes on Instagram, and Instagram video posts have been shown to get 2x as much engagement as normal posts. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "That means you need people to check out your videos, and the best way to do this is to have a high video view count."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "People follow trends and want to be a part of what is popular, so if your video only has a few views, users are likely to skip it. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Buy Instagram video views with Fameoid and we can get your video content soaring to new popularity. "
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "What Kind Of Quality Are Your Instagram Views?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Fameoid video views services are exclusively high-quality, real services."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "We know that many other companies on the market that offer IG video views resort to low-quality, robot-powered services, but we definitely have your success on our mind. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "When you buy instagram views from Fameoid, you can rest assured that you\u2019re only going to receive views that actually help the success of your account. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Fameoid has worked hard to offer you not just quantity, but also quality, helping your Instagram account to reach higher levels of success. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "You don\u2019t have to worry about spammy video views that might hurt your reputation."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Fameoid only deals with the best of the best so that your videos perform well."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "What Information Do I Need To Provide You?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Fameoid makes things as simple as possible, asking only for the necessary information at the time of purchase. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "That includes your basic contact information and the Instagram URL to your video."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "We will never ask you for your Instagram password!"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "We work to keep your account safe and will never require you to provide that sensitive information. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "You\u2019ll check out and complete your purchase with our secure payment gateway, and that\u2019s it!"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " It\u2019s quick and easy, and not invasive. "
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Can You Deliver As Soon As I Upload Videos?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " Yes, Fameoid knows the urgency of getting you your video views after your post goes live! "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " The Instagram algorithm doesn\u2019t only depend on the time that you upload, but it\u2019s been shown that videos recently uploaded will be favored in Instagram\u2019s feed. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " If you wait to get your video views, you may miss out."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " As soon as you upload your video, buy Instagram views and we\u2019ll get them over to you ASAP for best results."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Why Choose Fameoid To Buy Instagram Views?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "  Fameoid is the top choice in the industry, and with good reason!"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " We have developed the highest quality services so that you can buy Instagram video views that actually help your account grow. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " Many other companies are just looking out for their bottom line and send you low-quality video views that are generated by a bot."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " This can actually hurt your Instagram profile and we would never provide you with something like that. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " We take great pride in providing our clients with the best, and we also back up our services with a guarantee."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "We want you to feel secure when you buy from us, and we\u2019re always here for you!"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Can I Get Banned From Buying Instagram Views?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "  No, Fameoid is completely safe and will not put your Instagram at risk in any way when you use our services."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " When you buy Instagram views from Fameoid, your Instagram profile is safe and sound. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " The whole premise behind our services is to help your Instagram account flourish, not get banned or blocked."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " In fact, none of our clients have ever experienced negative impacts from using our services. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " Fameoid knows the ins and outs of the Instagram terms of use, and we abide by them to the letter."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " You have nothing to worry about when you work with Fameoid, that\u2019s a fact."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Can I Choose Which videos My Views Are Delivered To?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "  Yep, you betcha! We want your experience to be as valuable and beneficial as possible, and by allowing you to divvy up your views among different posts, you can get the best bang for your buck. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "  That means when you buy Instagram views from"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "  Fameoid, you\u2019ll be able to allocate your views as you wish, on anywhere from 1 to 10 different posts. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " Why would you want to do this?  Well, there are a few reasons. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " When you have a consistent number of views across all of your posts, it shows that your content is valuable on a regular basis to its viewers and that the success of a piece of content wasn\u2019t just a one-off. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " Better still, you can maintain a level of popularity that appears to be natural and seamless, giving you a better level of credibility and authority overall. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "  You don\u2019t have to repeatedly buy views for each of your posts; you can add views to your posts as you please, all at one time."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Do You Have A Subscription For Auto Monthly Views?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "  Yes, we offer the option to buy a subscription for automatic monthly views. This makes getting your views more convenient than ever before!"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "  You don\u2019t have to deal with coming back to the website all the time to get your views."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " You can simply buy a subscription, and we\u2019ll do the rest."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "  That way, you\u2019ll always have the views you need on your content without a second thought. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "  There are a couple reasons why having a views subscription package can be a game-changer: "
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "You don\u2019t have to remember to come back to the website to buy another views package "
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Your videos will consistently have a similar number of views, helping to build your reputation and authority in your niche. "
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "When you have more video views, the Instagram algorithm will value your content as more popular. That means your posts could end up on the Explore page, and you will get more reach to IG users, appearing more frequently and with priority in the feed."
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "It\u2019s automatic, so we\u2019ll do everything and you\u2019ll enjoy higher views all the time. "
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "  In order to help you have total Instagram growth that delivers on all metrics, we offer not only automatic monthly views subscriptions, but also subscriptions for Instagram followers and Instagram likes. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "You can keep all of your engagements as well as your follower count booming when you use a combo package!"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                        eventKey: "8",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                children: "Do You Have Bundles For Followers, Likes, & Views?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " Yes, Fameoid offers packages that bundle all elements together\u2014 Instagram followers, likes, and views."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " You can build your Instagram presence in a big way when you go beyond video views and also have a lot of followers and likes to back you up. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " If you only have high Instagram video views without followers or likes on your posts, people that view your content may think that people don\u2019t enjoy your videos and don\u2019t want to see what you post on a regular basis. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: " You can avoid this result by ensuring you always have a well-rounded Instagram presence, which is why bundle packages are great."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "You can get them on a one-time basis or even enroll in a monthly subscription to make sure you are always growing your Instagram reputation!"
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_14__/* .Footer */ .$, {})
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
var __webpack_exports__ = __webpack_require__.X(0, [895,61,767,571,433,454,224,423,522,926,712,109], () => (__webpack_exec__(3482)));
module.exports = __webpack_exports__;

})();