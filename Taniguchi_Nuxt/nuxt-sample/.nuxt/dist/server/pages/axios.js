exports.ids = [2];
exports.modules = {

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/axios.vue?vue&type=template&id=2d4ec5e8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"text-align":"center"}},[_vm._ssrNode("<p>"+_vm._ssrEscape(_vm._s(_vm.ip))+"</p> <button>IPアドレスを取得</button>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/axios.vue?vue&type=template&id=2d4ec5e8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/axios.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var axiosvue_type_script_lang_js_ = ({
  data: function () {
    return {
      ip: "0.0.0.0"
    };
  },
  methods: {
    async getIp() {
      this.ip = await this.$axios.$get("http://icanhazip.com");
    }

  }
});
// CONCATENATED MODULE: ./pages/axios.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_axiosvue_type_script_lang_js_ = (axiosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/axios.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_axiosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3c6f3b84"
  
)

/* harmony default export */ var axios = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=axios.js.map