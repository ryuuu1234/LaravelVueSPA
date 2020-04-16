(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mitra/Mitra.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/mitra/Mitra.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
  name: "DataMitra",
  created: function created() {
    this.getMitra();
  },
  data: function data() {
    return {
      fields: [{
        key: 'name',
        label: 'Nama Mitra',
        sortable: true
      }, {
        key: 'actions',
        label: 'Options',
        "class": 'text-right'
      }],
      search: '',
      isPrimary: false,
      isInfo: false,
      isDanger: false,
      isSuccess: true,
      isWarning: false,
      method: 'Add',
      id_item: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("mitra", {
    items: function items(state) {
      return state.items;
    },
    meta: function meta(state) {
      return state.meta;
    }
  }), {
    page: {
      get: function get() {
        return this.$store.state.mitra.page;
      },
      set: function set(val) {
        this.SET_PAGE(val);
      }
    },
    per_page: {
      get: function get() {
        return this.$store.state.mitra.per_page;
      },
      set: function set(val) {
        this.SET_PER_PAGE(val);
      }
    },
    sortBy: {
      get: function get() {
        return this.$store.state.mitra.sortBy;
      },
      set: function set(val) {
        this.SET_SORT_BY(val);
      }
    },
    sortByDesc: {
      get: function get() {
        return this.$store.state.mitra.sortByDesc;
      },
      set: function set(val) {
        this.SET_SORT_BY_DESC(val);
      }
    }
  }),
  watch: {
    page: function page() {
      this.getMitra();
    },
    per_page: function per_page() {
      this.getMitra();
    },
    sortBy: function sortBy() {
      this.getMitra();
    },
    sortByDesc: function sortByDesc() {
      this.getMitra();
    },
    search: 'getMitra'
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('mitra', ['getMitra']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("mitra", ['SET_PAGE', 'SET_PER_PAGE', 'SET_SORT_BY', 'SET_SORT_BY_DESC']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mitra/Mitra.vue?vue&type=template&id=77ef7130&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/mitra/Mitra.vue?vue&type=template&id=77ef7130& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container-fluid mt-4" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "form-inline" }, [
              _c("label", { staticClass: "mr-2" }, [_vm._v("Showing")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.per_page,
                      expression: "per_page"
                    }
                  ],
                  staticClass: "custom-select custom-select-sm",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.per_page = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "10" } }, [_vm._v("10")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "20" } }, [_vm._v("20")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "50" } }, [_vm._v("50")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "100" } }, [_vm._v("100")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "200" } }, [_vm._v("200")])
                ]
              ),
              _vm._v(" "),
              _c("label", { staticClass: "ml-2" }, [_vm._v("Entries")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 mb-3" }, [
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
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-12" },
            [
              _c("b-table", {
                ref: "selectableTable",
                attrs: {
                  striped: "",
                  hover: "",
                  dark: "",
                  items: _vm.items.data,
                  fields: _vm.fields,
                  "sort-by": _vm.sortBy,
                  "sort-desc": _vm.sortByDesc,
                  "show-empty": "",
                  responsive: "sm"
                },
                on: {
                  "update:sortBy": function($event) {
                    _vm.sortBy = $event
                  },
                  "update:sort-by": function($event) {
                    _vm.sortBy = $event
                  },
                  "update:sortDesc": function($event) {
                    _vm.sortByDesc = $event
                  },
                  "update:sort-desc": function($event) {
                    _vm.sortByDesc = $event
                  }
                },
                scopedSlots: _vm._u([
                  {
                    key: "cell(actions)",
                    fn: function(row) {
                      return [
                        _c(
                          "router-link",
                          {
                            directives: [
                              {
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: { hover: true }
                              }
                            ],
                            staticClass: "btn btn-xxsm btn-flat btn-warning",
                            attrs: {
                              to: {
                                name: "item-detail.mitra",
                                params: { id: row.item.id }
                              },
                              title: "Stok Data"
                            }
                          },
                          [_vm._v("Stok Items Mitra")]
                        )
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("div", { staticClass: "box-bw-table" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6 text-right" }, [
                    _vm.items.data && _vm.items.data.length > 0
                      ? _c("div", [
                          _c(
                            "p",
                            {
                              staticStyle: {
                                color: "grey",
                                "font-size": "11px"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                        Halaman ke - " +
                                  _vm._s(_vm.meta.from) +
                                  " dari " +
                                  _vm._s(_vm.meta.to) +
                                  " data\n                                        ditemukan, dan dari " +
                                  _vm._s(_vm.meta.total) +
                                  " data\n                                        keseluruhan\n                                    "
                              )
                            ]
                          )
                        ])
                      : _c("div", [
                          _c(
                            "p",
                            {
                              staticStyle: {
                                color: "grey",
                                "font-size": "11px"
                              }
                            },
                            [_vm._v("Data is Empty")]
                          )
                        ])
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12" }, [
            _c(
              "div",
              { staticClass: "text-right" },
              [
                _vm.items.data && _vm.items.data.length > 0
                  ? _c("b-pagination", {
                      staticClass: "mt-4",
                      attrs: {
                        "total-rows": _vm.meta.total,
                        "per-page": _vm.meta.per_page,
                        align: "right",
                        "aria-controls": "dw-datatable",
                        size: "sm",
                        "first-text": "First",
                        "prev-text": "⏪",
                        "next-text": "⏩",
                        "last-text": "Last"
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
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/mitra/Mitra.vue":
/*!********************************************!*\
  !*** ./resources/js/views/mitra/Mitra.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mitra_vue_vue_type_template_id_77ef7130___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mitra.vue?vue&type=template&id=77ef7130& */ "./resources/js/views/mitra/Mitra.vue?vue&type=template&id=77ef7130&");
/* harmony import */ var _Mitra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mitra.vue?vue&type=script&lang=js& */ "./resources/js/views/mitra/Mitra.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Mitra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Mitra_vue_vue_type_template_id_77ef7130___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Mitra_vue_vue_type_template_id_77ef7130___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/mitra/Mitra.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/mitra/Mitra.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/mitra/Mitra.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mitra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Mitra.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mitra/Mitra.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mitra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/mitra/Mitra.vue?vue&type=template&id=77ef7130&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/mitra/Mitra.vue?vue&type=template&id=77ef7130& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mitra_vue_vue_type_template_id_77ef7130___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Mitra.vue?vue&type=template&id=77ef7130& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mitra/Mitra.vue?vue&type=template&id=77ef7130&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mitra_vue_vue_type_template_id_77ef7130___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mitra_vue_vue_type_template_id_77ef7130___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);