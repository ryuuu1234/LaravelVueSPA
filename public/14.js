(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/orders/Status.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/orders/Status.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DetailStatusOrder",
  created: function created() {
    this.getOrderById(this.$route.params.id);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("order", {
    order: function order(state) {
      return state.order;
    },
    status_orders: function status_orders(state) {
      return state.status_orders;
    }
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("order", ["getOrderById", "updateStatusOrder"]), {
    submit: function submit() {
      var _this = this;

      this.updateStatusOrder(this.$route.params.id).then(function () {
        //APABILA BERHASIL MAKA AKAN DI-DIRECT KEMBALI
        _this.flashMessage.success({
          message: "Status Update Succesfully!",
          time: 5000
        });
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/orders/Status.vue?vue&type=template&id=b7cd03e6&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/orders/Status.vue?vue&type=template&id=b7cd03e6& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body" }, [
        _c("h5", { staticClass: "card-title text-dark" }, [
          _vm._v(_vm._s(_vm.$route.meta.title))
        ]),
        _vm._v(" "),
        _c("h6", { staticClass: "card-subtitle mb-2 text-muted" }, [
          _vm._v(_vm._s(_vm.$route.meta.subtitle))
        ]),
        _vm._v(" "),
        _c("hr", { staticClass: "batas-dark" }),
        _vm._v(" "),
        _c("div", { staticClass: "px-4" }, [
          _c("table", [
            _c("tr", [
              _c("td", { attrs: { width: "150px" } }, [_vm._v("no Reff")]),
              _vm._v(" "),
              _c("td", [_vm._v(": " + _vm._s(_vm.order.reff))])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("Pemesan")]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  ": " +
                    _vm._s(_vm.order.user_role) +
                    " - " +
                    _vm._s(_vm.order.user)
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("Total Rp")]),
              _vm._v(" "),
              _c("td", [
                _vm._v(": " + _vm._s(_vm._f("numeral")(_vm.order.total, "0,0")))
              ])
            ]),
            _vm._v(" "),
            _c(
              "tr",
              [
                _c("td", [_vm._v("Status Order")]),
                _vm._v(" "),
                _c(
                  "b-form-select",
                  {
                    staticClass: "mt-3",
                    attrs: { size: "sm" },
                    model: {
                      value: _vm.order.status_id,
                      callback: function($$v) {
                        _vm.$set(_vm.order, "status_id", $$v)
                      },
                      expression: "order.status_id"
                    }
                  },
                  _vm._l(_vm.status_orders, function(status) {
                    return _c(
                      "b-form-select-option",
                      { key: status.id, attrs: { value: status.id } },
                      [_vm._v(_vm._s(status.name))]
                    )
                  }),
                  1
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("hr", { staticClass: "batas-dark" }),
        _vm._v(" "),
        _c("div", { staticClass: "text-right" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-danger btn-xsm",
              attrs: { type: "submit" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [_vm._v("Update Status")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-dark btn-xsm",
              attrs: { type: "submit" },
              on: {
                click: function($event) {
                  return _vm.$router.go(-1)
                }
              }
            },
            [_vm._v("Kembali")]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/orders/Status.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/orders/Status.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Status_vue_vue_type_template_id_b7cd03e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Status.vue?vue&type=template&id=b7cd03e6& */ "./resources/js/views/orders/Status.vue?vue&type=template&id=b7cd03e6&");
/* harmony import */ var _Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Status.vue?vue&type=script&lang=js& */ "./resources/js/views/orders/Status.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Status_vue_vue_type_template_id_b7cd03e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Status_vue_vue_type_template_id_b7cd03e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/orders/Status.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/orders/Status.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/orders/Status.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Status.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/orders/Status.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/orders/Status.vue?vue&type=template&id=b7cd03e6&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/orders/Status.vue?vue&type=template&id=b7cd03e6& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Status_vue_vue_type_template_id_b7cd03e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Status.vue?vue&type=template&id=b7cd03e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/orders/Status.vue?vue&type=template&id=b7cd03e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Status_vue_vue_type_template_id_b7cd03e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Status_vue_vue_type_template_id_b7cd03e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);