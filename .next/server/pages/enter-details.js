"use strict";
(() => {
var exports = {};
exports.id = 920;
exports.ids = [920];
exports.modules = {

/***/ 9406:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EnterDetails)
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2584);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(735);
/* harmony import */ var _styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3119);
/* harmony import */ var _styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1258);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios_cache_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4699);
/* harmony import */ var _stores_stores__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5224);
/* harmony import */ var _public_assets_fameoidIcon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6261);
/* harmony import */ var _public_assets_pattern_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9767);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios_cache_interceptor__WEBPACK_IMPORTED_MODULE_8__]);
axios_cache_interceptor__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















function EnterDetails() {
    const { instaProfile  } = (0,_stores_stores__WEBPACK_IMPORTED_MODULE_9__/* .useMobxStores */ .lM)();
    const { plan  } = (0,_stores_stores__WEBPACK_IMPORTED_MODULE_9__/* .useMobxStores */ .lM)();
    const { 0: UsernameValid , 1: setUsernameValid  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: DisableOnAPICall , 1: setDisableOnAPICall  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: PricingPlan1 , 1: setPricingPlan  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const pricing = __webpack_require__(8224);
        switch(plan.plan_type){
            case "views":
                if (pricing.views) {
                    setPricingPlan(pricing.views);
                }
                break;
            case "likes":
                if (pricing.likes) {
                    setPricingPlan(pricing.likes);
                }
                break;
            case "followers":
                if (pricing.followers) {
                    setPricingPlan(pricing.followers);
                }
                break;
            default:
                if (pricing.views) {
                    setPricingPlan(pricing.views);
                }
                break;
        }
    }, [
        PricingPlan1
    ]);
    const buyInstagram = (event)=>{
        event.preventDefault(); // don't redirect the page
        setDisableOnAPICall(true);
        //fetch(`https://instagram130.p.rapidapi.com/account-info?username=${event.target.instagram_username.value}`, {
        fetch(`https://fameoid.com/api/?sanple_profile=${event.target.instagram_username.value}`, {
        }).then((res)=>res.json()
        ).then((data)=>{
            if (data.id) {
                instaProfile.setInstaId(data.id);
                instaProfile.setProfileImage(data.profile_pic_url);
                instaProfile.setEmail(event.target.user_email.value);
                instaProfile.setPlan(event.target.plan.value);
                instaProfile.setPlanType(event.target.plan_type.value);
                instaProfile.setInstaUserName(data.username);
                if (event.target.plan_type.value == "followers") {
                    router.push({
                        pathname: "/checkout"
                    });
                } else if (event.target.plan_type.value == "views") {
                    router.push({
                        pathname: "/select-posts"
                    });
                } else if (event.target.plan_type.value == "likes") {
                    router.push({
                        pathname: "/select-posts"
                    });
                }
            } else if (data.status == "fail") {
                setUsernameValid(false);
            }
        }).catch((err)=>{
            setUsernameValid(false);
        }).finally(()=>{
            setDisableOnAPICall(false);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Search Profile - enter-detail - Fameoid"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_12___default().checkoutSteps)} ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_12___default().firstStep)}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_12___default().logoIcon)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_12___default().chklogo)}`,
                                href: "/",
                                children: "\xa0"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_12___default().ckStepsLogo)}`,
                                src: _public_assets_fameoidIcon_png__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                                alt: "",
                                width: 55,
                                height: 51
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_12___default().active)}`,
                                children: "1. Add Username"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: "2. Choose Service"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: "3. Payment & Delivery"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "checkoutBlock subpgBlock py-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "dotLeftPatt",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            src: _public_assets_pattern_png__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                            width: 195,
                            height: 159
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "doRightPatt",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            src: _public_assets_pattern_png__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                            width: 195,
                            height: 159
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "dotLeftPatt"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "entrDetailPageBlck my-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_12___default().checkoutForm)} ${(_styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().contactForm)}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form, {
                                    className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_12___default().commonForm)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_14___default().commonForm)} ${DisableOnAPICall ? " disable" : ""}`,
                                    onSubmit: buyInstagram,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_14___default().formHdr)}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: "Get Started"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
                                            className: `form-group d-flex align-items-center ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_12___default().formGroup)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_14___default().formGroup)}`,
                                            controlId: "formContactName",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "18",
                                                    height: "18",
                                                    fill: "currentColor",
                                                    className: "bi bi-instagram",
                                                    viewBox: "0 0 16 16",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
                                                    className: `form-control ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_14___default().formControl)}`,
                                                    type: "text",
                                                    placeholder: "Instagram Username",
                                                    name: "instagram_username",
                                                    required: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
                                            className: `form-group d-flex align-items-center ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_12___default().formGroup)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_14___default().formGroup)}`,
                                            controlId: "formContactEmail",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "18",
                                                    height: "18",
                                                    fill: "currentColor",
                                                    className: "bi bi-envelope-fill",
                                                    viewBox: "0 0 16 16",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
                                                    className: `form-control ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_14___default().formControl)}`,
                                                    type: "email",
                                                    placeholder: "Email Address",
                                                    name: "user_email",
                                                    required: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
                                            className: `form-group d-flex align-items-center ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_12___default().formGroup)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_14___default().formGroup)}`,
                                            controlId: "formContactEmail",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "18",
                                                    height: "18",
                                                    fill: "currentColor",
                                                    className: "bi bi-person-fill",
                                                    viewBox: "0 0 16 16",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Select, {
                                                    className: `${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_14___default().formSelect)}`,
                                                    name: "plan",
                                                    defaultValue: plan.plan_id != "" ? plan.plan_id : "1",
                                                    children: PricingPlan1.length > 0 ? PricingPlan1.map((PricingPlan)=>{
                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                                            value: PricingPlan.plan_id,
                                                            selected: plan.plan_id == PricingPlan.plan_id ? "selected" : "",
                                                            children: [
                                                                PricingPlan.quantity,
                                                                " Active ",
                                                                PricingPlan.plan_type,
                                                                " -- $",
                                                                PricingPlan.sale_price
                                                            ]
                                                        }, PricingPlan.plan_id);
                                                    }) : ""
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
                                            type: "hidden",
                                            name: "plan_type",
                                            value: plan.plan_type != "" ? plan.plan_type : "views"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_12___default().formFtr)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_14___default().formFtr)}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                    className: `w-100 ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_12___default().mainFrmBtn)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_14___default().mainFrmBtn)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_14___default().w100)}`,
                                                    variant: "primary",
                                                    type: "submit",
                                                    children: "Continue"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "mt-3 mb-0 text-center",
                                                    children: [
                                                        "By clicking Continue, you agree to our ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            href: "/",
                                                            children: "Terms and Data Policy"
                                                        }),
                                                        "."
                                                    ]
                                                })
                                            ]
                                        }),
                                        UsernameValid === false ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_12___default().warning)}`,
                                            children: "Please add a valid username."
                                        }) : null
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1258:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ 4699:
/***/ ((module) => {

module.exports = import("axios-cache-interceptor");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,767,224,423,233], () => (__webpack_exec__(9406)));
module.exports = __webpack_exports__;

})();