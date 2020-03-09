(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Order.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/products/Order.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http_service */ "./resources/js/services/http_service.js");
//
//
//
//
//
//
//
//
//
//
//
//  import { mapActions, mapState } from 'vuex'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'OrderProduct',
  created: function created() {
    this.getProductById(this.$route.params.id);
  },
  data: function data() {
    return {
      id: '',
      name: '',
      harga: '',
      qty: ''
    };
  },
  methods: {
    getProductById: function getProductById(id) {
      var _this = this;

      //MELAKUKAN REQUEST DENGAN MENGIRIMKAN CODE product DI URL
      Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("user/products/".concat(id, "/edit")).then(function (response) {
        console.log(response);
        var getData = response.data.data;
        _this.id = getData.id;
        _this.name = getData.name;
        _this.harga = getData.harga;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    purchaseOrder: function purchaseOrder() {
      var formData = new FormData();
      formData.append("name", this.name);
      formData.append("harga", this.harga);
      formData.append("qty", this.qty);
      Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/user/orders", formData).then(function (response) {
        //APABILA BERHASIL KITA MELAKUKAN REQUEST LAGI
        //UNTUK MENGAMBIL DATA TERBARU
        dispatch('getProducts').then(function () {
          resolve(response.data);
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Order.vue?vue&type=template&id=87f77ffc&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/products/Order.vue?vue&type=template&id=87f77ffc& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "col-md-6", staticStyle: { padding: "20px" } },
    [
      _c("h1", [_vm._v("id: " + _vm._s(this.id))]),
      _vm._v(" "),
      _c("h1", [_vm._v("name: " + _vm._s(this.name))]),
      _vm._v(" "),
      _c("h1", [_vm._v("harga: " + _vm._s(this.harga))]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.qty,
            expression: "qty"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "number" },
        domProps: { value: _vm.qty },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.qty = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.purchaseOrder($event)
            }
          }
        },
        [_vm._v("Order")]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/products/Order.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/products/Order.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Order_vue_vue_type_template_id_87f77ffc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Order.vue?vue&type=template&id=87f77ffc& */ "./resources/js/views/products/Order.vue?vue&type=template&id=87f77ffc&");
/* harmony import */ var _Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order.vue?vue&type=script&lang=js& */ "./resources/js/views/products/Order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Order_vue_vue_type_template_id_87f77ffc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Order_vue_vue_type_template_id_87f77ffc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/products/Order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/products/Order.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/products/Order.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Order.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/products/Order.vue?vue&type=template&id=87f77ffc&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/products/Order.vue?vue&type=template&id=87f77ffc& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_87f77ffc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Order.vue?vue&type=template&id=87f77ffc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Order.vue?vue&type=template&id=87f77ffc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_87f77ffc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_87f77ffc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);