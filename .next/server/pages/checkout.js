"use strict";
(() => {
var exports = {};
exports.id = 222;
exports.ids = [222];
exports.modules = {

/***/ 8:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/noUser.dbcce010.jpg","height":340,"width":340,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAq4P/xAAZEAACAwEAAAAAAAAAAAAAAAACEgAREzH/2gAIAQEAAT8AzNHUtn7c/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="});

/***/ }),

/***/ 1574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/paymentImg.a6ad7bab.png","height":25,"width":158,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAK0lEQVR4nGP8fvHIrv8SEs+e/xAUFub5/+Pz19//k+c/Fq7yEH5rpCHIDwBJHRGMKaTevwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 2043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2584);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(735);
/* harmony import */ var _styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3119);
/* harmony import */ var _styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Testimonial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4433);
/* harmony import */ var _stores_stores__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5224);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_assets_fameoidIcon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6261);
/* harmony import */ var _public_assets_pattern_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9767);
/* harmony import */ var _public_assets_noUser_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8);
/* harmony import */ var _public_assets_paymentImg_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1574);
















function isNumeric(value) {
    return /^-?\d+$/.test(value);
}
function EnterDetails() {
    const { instaProfile  } = (0,_stores_stores__WEBPACK_IMPORTED_MODULE_7__/* .useMobxStores */ .lM)();
    const { 0: ProfilePic , 1: setProfilePic  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: InstaUsername , 1: setInstaUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: DisplayPricing , 1: setDisplayPricing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: Total , 1: setTotal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: SubscriptionPlanQuantity , 1: setSubscriptionPlanQuantity  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: SubscriptionPlanType , 1: setSubscriptionPlanType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: Upsell , 1: setUpsell  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: UpsellSelected , 1: setUpsellSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: SelectedPosts , 1: setSelectedPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: CardDetails , 1: setCardDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: DisableOnAPICall , 1: setDisableOnAPICall  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: CheckoutSuccess , 1: setCheckoutSuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    let flag = false;
    const toggleUpsell = (event)=>{
        event.preventDefault(); // don't redirect the page
        if (!UpsellSelected) {
            Upsell.forEach((upsell_item)=>{
                setTotal((DisplayPricing + upsell_item.sale_price).toFixed(2));
            });
        } else {
            Upsell.forEach((upsell_item)=>{
                setTotal(DisplayPricing);
            });
        }
        setUpsellSelected(!UpsellSelected);
    };
    const onInputChange = (event)=>{
        console.log(event.target.value);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const insta_id = instaProfile.insta_id;
        if (!flag && insta_id !== null) {
            const pricing = __webpack_require__(8224);
            const profile_image = instaProfile.profile_image;
            const email = instaProfile.email;
            const plan = instaProfile.plan;
            const plan_type = instaProfile.plan_type;
            const instagram_username = instaProfile.insta_username;
            const selected_posts = instaProfile.selected_posts;
            setSubscriptionPlanType(plan_type);
            let selected_plan = "";
            switch(plan_type){
                case "views":
                    pricing.views.forEach(function(item) {
                        if (item.plan_id == plan) {
                            selected_plan = item;
                        }
                    });
                    break;
                case "likes":
                    pricing.likes.forEach(function(item) {
                        if (item.plan_id == plan) {
                            selected_plan = item;
                        }
                    });
                    break;
                case "followers":
                    pricing.followers.forEach(function(item) {
                        if (item.plan_id == plan) {
                            selected_plan = item;
                        }
                    });
                    break;
            }
            if (selected_plan != "") {
                setDisplayPricing(selected_plan.sale_price);
                setTotal(selected_plan.sale_price);
                setSubscriptionPlanQuantity(selected_plan.quantity);
                if (selected_plan.upsell) {
                    setUpsell(selected_plan.upsell);
                }
            }
            if (profile_image != "") {
                setProfilePic(profile_image);
            }
            if (selected_posts != "") {
                setSelectedPosts(selected_posts);
            }
            if (instagram_username != "") {
                setInstaUsername(`@ ${instagram_username}`);
            }
        }
        flag = true;
    //setInstaProfile()
    }, []);
    const checkoutRequest = (event)=>{
        event.preventDefault(); // don't redirect the page
        setDisableOnAPICall(true);
        const card_name = event.target.card_name.value;
        const card_number = event.target.card_number.value;
        const card_cvv = event.target.card_cvv.value;
        const selected_posts = instaProfile.selected_posts;
        const email = instaProfile.email;
        const instagram_username = instaProfile.insta_username;
        const card_expiry = event.target.card_expiry.value;
        const card_expiry_month = "";
        const card_expiry_year = "";
        const plan = instaProfile.plan;
        card_expiry = card_expiry.split("/");
        if (card_expiry.length > 0) {
            card_expiry_month = card_expiry[0];
        }
        if (card_expiry.length > 1) {
            card_expiry_year = card_expiry[1];
        }
        fetch(`http://localhost:3100/api/payments`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "payments": {
                    "card_number": card_number,
                    "expiry_month": card_expiry_month,
                    "expiry_year": card_expiry_year,
                    "cvv": card_cvv
                },
                "items": [
                    plan
                ],
                "selected_posts": selected_posts,
                "insta_username": instagram_username,
                "email": email
            })
        }).then((res)=>res.json()
        ).then((data)=>{
            if (data.status == true) {
                if (isNumeric(data.message)) {
                    if (parseInt(data.message) <= 19999) {
                        setCheckoutSuccess("");
                        router.push({
                            pathname: "/thank-you"
                        });
                    } else {
                        setCheckoutSuccess("Error in payments.");
                    }
                } else {
                    setCheckoutSuccess("Something went wrong.");
                }
            } else {
                const message = data.message.replace("_", " ");
                message = message.replace("_", " ");
                message = message.replace("_", " ");
                setCheckoutSuccess(message);
            }
        }).catch((err)=>{
            setCheckoutSuccess("Something went wrong. Please try again");
        }).finally(()=>{
            setDisableOnAPICall(false);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Checkout - Fameoid"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().checkoutSteps)} ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().firstStep)}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().logoIcon)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().chklogo)}`,
                                href: "/",
                                children: "\xa0"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().ckStepsLogo)}`,
                                src: _public_assets_fameoidIcon_png__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                alt: "",
                                width: 55,
                                height: 51
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: "1. Add Username"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: "2. Choose Service"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().active)}`,
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
                            src: _public_assets_pattern_png__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                            width: 195,
                            height: 159
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "doRightPatt",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            src: _public_assets_pattern_png__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                            width: 195,
                            height: 159
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "dotLeftPatt"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `my-3 ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().checkoutPageBlck)}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `mb-2 ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().pymntImg)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: _public_assets_paymentImg_png__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
                                        alt: "",
                                        width: 260,
                                        height: 40
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                    className: "g-4 g-md-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                            md: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().chckoutCol)}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().checkoutForm)} ${(_styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_14___default().contactForm)}`,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form, {
                                                        className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().commonForm)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().commonForm)} ${DisableOnAPICall ? " disable" : ""}`,
                                                        onSubmit: checkoutRequest,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().formHdr)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().formHdr)}`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    children: "Checkout with Credit Card"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
                                                                className: `form-group ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().formGroup)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().formGroup)}`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
                                                                    className: `form-control ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().formControl)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().formControl)}`,
                                                                    value: "Test User",
                                                                    type: "text",
                                                                    placeholder: "Cardholder Name",
                                                                    name: "card_name",
                                                                    minlength: "3",
                                                                    required: true
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().formHdr)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().formHdr)}`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    children: "Credit Card Details"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
                                                                className: `form-group d-flex align-items-center ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().formGroup)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().formGroup)}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        width: "24",
                                                                        height: "24",
                                                                        fill: "currentColor",
                                                                        className: "bi bi-credit-card",
                                                                        viewBox: "0 0 16 16",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
                                                                        className: `form-control ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().formControl)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().formControl)}`,
                                                                        value: "4242424242424242",
                                                                        type: "text",
                                                                        name: "card_number",
                                                                        placeholder: "Card number",
                                                                        minlength: "16",
                                                                        maxlength: "16",
                                                                        required: true
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
                                                                className: `form-group d-flex align-items-center p-0 ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().formGroup)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().formGroup)}`,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                                                    className: "g-0",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
                                                                                className: `form-group d-flex align-items-center ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().formGroup)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().formGroup)}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        width: "24",
                                                                                        height: "24",
                                                                                        fill: "currentColor",
                                                                                        className: "bi bi-calendar2-event",
                                                                                        viewBox: "0 0 16 16",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                d: "M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                d: "M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
                                                                                        className: `form-control ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().formControl)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().formControl)}`,
                                                                                        name: "card_expiry",
                                                                                        value: "6/29",
                                                                                        type: "text",
                                                                                        placeholder: "MM/YY",
                                                                                        onChange: onInputChange,
                                                                                        required: true
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
                                                                                className: `form-group d-flex align-items-center ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().formGroup)} ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().brdrLeft)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().formGroup)}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        width: "28",
                                                                                        height: "28",
                                                                                        fill: "currentColor",
                                                                                        className: "bi bi-credit-card",
                                                                                        viewBox: "0 0 16 16",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                d: "M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, {
                                                                                        type: "text",
                                                                                        placeholder: "CVV",
                                                                                        name: "card_cvv",
                                                                                        value: "100",
                                                                                        required: true
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().formFtr)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().formFtr)}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                                        className: `w-100 ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().mainFrmBtn)} ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().payBtn)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().mainFrmBtn)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().w100)}`,
                                                                        variant: "primary",
                                                                        type: "submit",
                                                                        children: [
                                                                            "Pay $",
                                                                            Total
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "mt-3 mb-0 text-center",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                                                            children: [
                                                                                "By completing your order, you agree to the ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                                    className: "colorBlack",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                                        href: "/",
                                                                                        children: "terms of service"
                                                                                    })
                                                                                }),
                                                                                " and ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                                    className: "colorBlack",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                                        href: "/",
                                                                                        children: "privacy policy"
                                                                                    })
                                                                                }),
                                                                                "."
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            CheckoutSuccess != "" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().warning)}`,
                                                                children: [
                                                                    CheckoutSuccess,
                                                                    "."
                                                                ]
                                                            }) : null
                                                        ]
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                            md: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().chckoutRightCol)}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().checkoutForm)} ${(_styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_14___default().contactForm)}`,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form, {
                                                        className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().commonForm)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().commonForm)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().formHdr)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().formHdr)}`,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `d-flex align-items-center ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().userInfo)}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "d-inline-block me-4",
                                                                            children: ProfilePic == "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                src: _public_assets_noUser_jpg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                                                                                alt: "",
                                                                                width: 50,
                                                                                height: 50
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                src: `https://fameoid.com/api?get_instagram_image=${encodeURIComponent(ProfilePic)}`,
                                                                                alt: "",
                                                                                width: 50,
                                                                                height: 50
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                                    children: InstaUsername
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                                        href: "/enter-details",
                                                                                        children: "Change Username"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
                                                                className: `form-group ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().formGroup)} ${(_styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_14___default().formGroup)}`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().priceInfo)}`,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                                                        className: "g-0 align-items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            width: "16",
                                                                                            height: "16",
                                                                                            fill: "currentColor",
                                                                                            className: "bi bi-suit-heart-fill",
                                                                                            viewBox: "0 0 16 16",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                d: "M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                                                                                            })
                                                                                        }),
                                                                                        " ",
                                                                                        SubscriptionPlanQuantity,
                                                                                        " ",
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            className: "capitalize",
                                                                                            children: SubscriptionPlanType
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                                                className: "col-auto",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                                                    children: [
                                                                                        "$",
                                                                                        DisplayPricing
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            }),
                                                            UpsellSelected ? Upsell.length > 0 ? Upsell.map((upsell)=>{
                                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
                                                                    className: `form-group ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().formGroup)} ${(_styles_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_14___default().formGroup)} ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().offer)}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().priceInfo)}`,
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                                                            className: "g-0 align-items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                width: "16",
                                                                                                height: "16",
                                                                                                fill: "currentColor",
                                                                                                className: "bi bi-suit-heart-fill",
                                                                                                viewBox: "0 0 16 16",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                    d: "M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                                                                                                })
                                                                                            }),
                                                                                            " ",
                                                                                            upsell.quantity,
                                                                                            " ",
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                className: "capitalize",
                                                                                                children: upsell.plan_type
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                                                    className: "col-auto",
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                                                        children: [
                                                                                            "$",
                                                                                            upsell.sale_price
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                }, upsell.plan_id);
                                                            }) : "" : "",
                                                            Upsell.length > 0 ? Upsell.map((upsell)=>{
                                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: !UpsellSelected ? `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().offerBox)}` : `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().offerBox)} ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().offerBoxGray)}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                                            children: [
                                                                                "Add ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                                    children: upsell.quantity
                                                                                }),
                                                                                " ",
                                                                                upsell.plan_type,
                                                                                " and ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                                    children: upsell.offer
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                                            className: `w-100 ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().mainFrmBtn)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().mainFrmBtn)} ${(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_15___default().btnWhite)}`,
                                                                            onClick: toggleUpsell,
                                                                            variant: "primary",
                                                                            type: "submit",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                    children: !UpsellSelected ? "+ Add for $" + upsell.sale_price + " " : "- Remove"
                                                                                }),
                                                                                !UpsellSelected ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
                                                                                    children: [
                                                                                        "$",
                                                                                        upsell.regular_price
                                                                                    ]
                                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                                            ]
                                                                        })
                                                                    ]
                                                                }, upsell.plan_id);
                                                            }) : "",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().pymntInfo)}`,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().priceInfo)}`,
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                                                            className: "g-0 align-items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                        children: "Today\u2019s Total:"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                                                    className: "col-auto",
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                                                        children: [
                                                                                            "$",
                                                                                            Total
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `my-3 ${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().dcntDiv)}`,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "planRadioDis"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                        className: `${(_styles_CheckoutForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().listFull)}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                children: [
                                                                                    "High-Quality ",
                                                                                    SubscriptionPlanType,
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
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
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                children: [
                                                                                    "Instant delivery",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
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
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                children: [
                                                                                    "24/7 Support",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
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
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                children: [
                                                                                    "Automatic Refill",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
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
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,767,433,224,423,233], () => (__webpack_exec__(2043)));
module.exports = __webpack_exports__;

})();