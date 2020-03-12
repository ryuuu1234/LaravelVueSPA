(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Product.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/products/Product.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
  name: "DataProduct",
  created: function created() {
    //SEBELUM COMPONENT DI-LOAD, REQUEST DATA DARI SERVER
    this.getProducts();
  },
  data: function data() {
    return {
      //FIELD UNTUK B-TABLE, PASTIKAN KEY NYA SESUAI DENGAN FIELD DATABASE
      //AGAR OTOMATIS DI-RENDER
      fields: [{
        key: "name",
        sortable: true
      }, {
        key: "actions",
        label: "Aksi"
      }],
      search: ""
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("product", {
    products: function products(state) {
      return state.products;
    }
  }), {
    page: {
      get: function get() {
        //MENGAMBIL VALUE PAGE DARI VUEX MODULE product
        return this.$store.state.product.page;
      },
      set: function set(val) {
        //APABILA TERJADI PERUBAHAN VALUE DARI PAGE, MAKA STATE PAGE
        //DI VUEX JUGA AKAN DIUBAH
        this.$store.commit("product/SET_PAGE", val);
      }
    }
  }),
  watch: {
    page: function page() {
      //APABILA VALUE DARI PAGE BERUBAH, MAKA AKAN MEMINTA DATA DARI SERVER
      this.getProducts();
    },
    search: function search() {
      //APABILA VALUE DARI SEARCH BERUBAH MAKA AKAN MEMINTA DATA
      //SESUAI DENGAN DATA YANG SEDANG DICARI
      this.getProducts(this.search);
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("product", ["getProducts", "removeProduct"]), {
    //KETIKA TOMBOL HAPUS DICLICK, MAKA AKAN MENJALANKAN METHOD INI
    deleteProduct: function deleteProduct(id) {
      var _this = this;

      //AKAN MENAMPILKAN JENDELA KONFIRMASI
      this.$swal({
        title: "Kamu Yakin?",
        text: "Tindakan ini akan menghapus secara permanent!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Iya, Lanjutkan!"
      }).then(function (result) {
        //JIKA DISETUJUI
        if (result.value) {
          //MAKA FUNGSI removeproduct AKAN DIJALANKAN
          _this.removeProduct(id);
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Product.vue?vue&type=template&id=50cff623&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/products/Product.vue?vue&type=template&id=50cff623& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "col-md-12" }, [
    _c("div", { staticClass: "panel" }, [
      _c(
        "div",
        { staticClass: "panel-heading" },
        [
          _c(
            "b-link",
            {
              staticClass: "btn btn-dark btn-sm btn-flat",
              attrs: { to: { name: "products.add" } }
            },
            [_vm._v("Tambah")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "pull-right" }, [
            _c("div", { staticClass: "form-inline float-right has-search" }, [
              _c("span", { staticClass: "fa fa-search form-control-feedback" }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.search,
                    expression: "search"
                  }
                ],
                staticClass: "form-control-search",
                attrs: { type: "text", placeholder: "Search" },
                domProps: { value: _vm.search },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.search = $event.target.value
                  }
                }
              })
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "panel-body" },
        [
          _c("b-table", {
            attrs: {
              striped: "",
              hover: "",
              dark: "",
              items: _vm.products.data,
              fields: _vm.fields,
              "show-empty": "",
              responsive: "sm"
            },
            scopedSlots: _vm._u([
              {
                key: "cell(actions)",
                fn: function(row) {
                  return [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-warning btn-sm",
                        attrs: {
                          to: {
                            name: "products.edit",
                            params: { id: row.item.id }
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-pencil-alt" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger btn-sm",
                        on: {
                          click: function($event) {
                            return _vm.deleteProduct(row.item.id)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-trash" })]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _vm.products.data
                ? _c("p", [
                    _c("i", { staticClass: "fa fa-bars" }),
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.products.data.length) +
                        " item dari\n                        " +
                        _vm._s(_vm.products.total) +
                        " total data\n                    "
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c(
                "div",
                { staticClass: "pull-right" },
                [
                  _vm.products.data && _vm.products.data.length > 0
                    ? _c("b-pagination", {
                        attrs: {
                          "total-rows": _vm.products.total,
                          "per-page": _vm.products.per_page,
                          "aria-controls": "products"
                        },
                        model: {
                          value: _vm.page,
                          callback: function($$v) {
                            _vm.page = $$v
                          },
                          expression: "page"
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ])
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/products/Product.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/products/Product.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_50cff623___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=50cff623& */ "./resources/js/views/products/Product.vue?vue&type=template&id=50cff623&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/views/products/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_50cff623___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_50cff623___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/products/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/products/Product.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/products/Product.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/products/Product.vue?vue&type=template&id=50cff623&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/products/Product.vue?vue&type=template&id=50cff623& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_50cff623___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=50cff623& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Product.vue?vue&type=template&id=50cff623&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_50cff623___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_50cff623___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);