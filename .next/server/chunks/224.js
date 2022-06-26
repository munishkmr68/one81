"use strict";
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 5224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g3": () => (/* binding */ StoreProvider),
  "r8": () => (/* binding */ getStores),
  "lM": () => (/* binding */ useMobxStores)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./utils/isServer.js
const isServer = "undefined" === "undefined";

// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__(6211);
// EXTERNAL MODULE: external "mobx-persist-store"
var external_mobx_persist_store_ = __webpack_require__(2167);
;// CONCATENATED MODULE: ./stores/InstaProfile.js


class InstaProfile {
    insta_id = "";
    profile_image = "";
    email = "";
    plan = "";
    plan_type = "";
    insta_username = "";
    selected_posts = [];
    constructor(initialData = {}){
        (0,external_mobx_.makeAutoObservable)(this, {});
        if (false) {}
    }
    async fetch(id) {
    // const response = await fetchPost(id);
    // this.setPost(response);
    // this.setPostId(id);
    }
    setInstaId(data) {
        this.insta_id = data;
    }
    setInstaUserName(data) {
        this.insta_username = data;
    }
    setProfileImage(data) {
        this.profile_image = data;
    }
    setEmail(data) {
        this.email = data;
    }
    setPlan(data) {
        this.plan = data;
    }
    setPlanType(data) {
        this.plan_type = data;
    }
    setSelectedPosts(data) {
        this.selected_posts = data;
    }
    __data() {
        return {
            insta_id: this.insta_id,
            profile_image: this.profile_image,
            email: this.email,
            plan: this.plan,
            plan_type: this.plan_type,
            insta_username: this.insta_username,
            selected_posts: this.selected_posts
        };
    }
}
/* harmony default export */ const stores_InstaProfile = (InstaProfile);

;// CONCATENATED MODULE: ./stores/Plan.js

class Plan {
    plan_id = "";
    plan_type = "";
    constructor(initialData = {}){
        (0,external_mobx_.makeAutoObservable)(this, {});
    }
    async fetch(id) {
    // const response = await fetchPost(id);
    // this.setPost(response);
    // this.setPostId(id);
    }
    setPlanId(data) {
        this.plan_id = data;
    }
    setPlanType(data) {
        this.plan_type = data;
    }
    __data() {
        return {
            plan_id: this.plan_id
        };
    }
}
/* harmony default export */ const stores_Plan = (Plan);

;// CONCATENATED MODULE: ./stores/UIStore.js

class UIStore {
    searchOverlayOpen = false;
    constructor(){
        (0,external_mobx_.makeAutoObservable)(this);
    }
    setSearchOverlayOpen(value) {
        this.searchOverlayOpen = value;
    }
}
/* harmony default export */ const stores_UIStore = (UIStore);

;// CONCATENATED MODULE: ./stores/stores.js






let clientSideStores;
function getStores(initialData = {
    instaProfileInitialData: {}
}) {
    if (isServer) {
        return {
            instaProfile: new stores_InstaProfile(initialData.instaProfileInitialData),
            plan: new stores_Plan(initialData.planInitialData),
            uiStore: new stores_UIStore()
        };
    }
    if (!clientSideStores) {
        clientSideStores = {
            instaProfile: new stores_InstaProfile(initialData.instaProfileInitialData),
            plan: new stores_Plan(initialData.planInitialData),
            uiStore: new stores_UIStore()
        };
    }
    return clientSideStores;
}
const StoreContext = /*#__PURE__*/ external_react_default().createContext();
function StoreProvider(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(StoreContext.Provider, {
        value: props.value,
        children: props.children
    });
}
function useMobxStores() {
    return external_react_default().useContext(StoreContext);
}


/***/ })

};
;