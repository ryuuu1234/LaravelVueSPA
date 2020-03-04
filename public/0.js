(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/Datatable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/khusus/Datatable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
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
 //IMPORT LODASH, DIMANA AKAN DIGUNAKAN UNTUK MEMBUAT DELAY KETIKA KOLOM PENCARIAN DIISI

/* harmony default export */ __webpack_exports__["default"] = ({
  // computed: {
  //     tombolAdd: function() {
  //         return this.isVisible? 'd-block': 'd-none';
  //     }
  // },
  //PROPS INI ADALAH DATA YANG AKAN DIMINTA DARI PENGGUNA COMPONENT DATATABLE YANG KITA BUAT
  props: {
    //ITEMS STRUKTURNYA ADALAH ARRAY, KARENA BAGIAN INI BERISI DATA YANG AKAN DITAMPILKAN DAN SIFATNYA WAJIB DIKIRIMKAN KETIKA COMPONENT INI DIGUNAKAN
    items: {
      type: Array,
      required: true
    },
    //FIELDS JUGA SAMA DENGAN ITEMS
    fields: {
      type: Array,
      required: true
    },
    //ADAPUN META, TYPENYA ADALAH OBJECT YANG BERISI INFORMASI MENGENAL CURRENT PAGE, LOAD PERPAGE, TOTAL DATA, DAN LAIN SEBAGAINYA.
    meta: {
      required: true
    },
    tombolAddNew: {
      type: Boolean,
      required: true
    },
    tombolEdit: {
      type: Boolean,
      required: true
    },
    isBusy: {
      type: Boolean,
      reguired: true
    }
  },
  data: function data() {
    return {
      //VARIABLE INI AKAN MENGHADLE SORTING DATA
      sortBy: null,
      //FIELD YANG AKAN DISORT AKAN OTOMATIS DISIMPAN DISINI
      sortDesc: false,
      //SEDANGKAN JENISNYA ASCENDING ATAU DESC AKAN DISIMPAN DISINI
      selectMode: "multi",
      selected: [],
      checkedId: [],
      selectedItems: [],
      allSelected: false,
      selectedRow: false,
      booleanValue: false,
      isVisible: false // isBusy : true,

    };
  },
  watch: {
    //KETIKA VALUE DARI VARIABLE sortBy BERUBAH
    sortBy: function sortBy(val) {
      this.$emit("sort", {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc
      });
    },
    //KETIKA VALUE DARI SORTDESC BERUBAH
    sortDesc: function sortDesc(val) {
      this.$emit("sort", {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc
      });
    } // isBusy(val) {
    //     this.$emit("busy", {
    //         isBusy: this.isBusy
    //     });
    // }

  },
  methods: {
    // toggleBusy() {
    //     this.isBusy != this.isBusy
    // },
    selectAllRows: function selectAllRows() {
      this.items.forEach(function (item) {
        return item = event.target.checked;
      });

      if (this.selectedItems.length === this.items.length) {
        this.selectedItems = [];
      } else {
        this.selectedItems = this.items.slice();
      }
    },
    // onRowSelected(e, index) {
    //     this.selected = [];
    //     if (e.length > 0) {
    //         this.selected = e.map(val=>val)
    //         this.allSelected = true;
    //     }else {
    //         this.allSelected = false;
    //     }
    // // this.selected = items // ini yg awal
    // },
    removeSelected: function removeSelected(item) {
      item = this.selectedItems; // ambil idnya

      this.$emit("removedSelected", item);
    },
    togleAll: function togleAll() {
      return this.allSelected ? this.selectAllRows() : this.clearSelected();
    },
    // clearSelected() {
    //     this.$refs.selectableTable.clearSelected()
    // },
    //JIKA SELECT BOX DIGANTI, MAKA FUNGSI INI AKAN DIJALANKAN
    loadPerPage: function loadPerPage(val) {
      //DAN KITA EMIT LAGI DENGAN NAMA per_page DAN VALUE SESUAI PER_PAGE YANG DIPILIH
      this.$emit("per_page", this.meta.per_page);
    },
    //KETIKA PAGINATION BERUBAH, MAKA FUNGSI INI AKAN DIJALANKAN
    changePage: function changePage(val) {
      //KIRIM EMIT DENGAN NAMA PAGINATION DAN VALUENYA ADALAH HALAMAN YANG DIPILIH OLEH USER
      this.$emit("pagination", val);
    },
    //KETIKA KOTAK PENCARIAN DIISI, MAKA FUNGSI INI AKAN DIJALANKAN
    //KITA GUNAKAN DEBOUNCE UNTUK MEMBUAT DELAY, DIMANA FUNGSI INI AKAN DIJALANKAN
    //500 MIL SECOND SETELAH USER BERHENTI MENGETIK
    search: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(function (e) {
      //KIRIM EMIT DENGAN NAMA SEARCH DAN VALUE SESUAI YANG DIKETIKKAN OLEH USER
      this.$emit("search", e.target.value);
    }, 500),
    removeData: function removeData(index) {
      this.$emit("removedData", index); // kirim event removedTodo parent (itemnya)
    },
    editData: function editData(index) {
      this.$emit("editedData", index); // kirim event editedData parent (itemnya)
    },
    addNew: function addNew() {
      this.$emit("createdData"); // kirim event createdData parent (itemnya)
    },
    konfirmStatus: function konfirmStatus(index) {
      this.$emit('konfirmasiStatus', index);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/Datatable.vue?vue&type=template&id=6925cb99&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/khusus/Datatable.vue?vue&type=template&id=6925cb99& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
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
                value: _vm.meta.per_page,
                expression: "meta.per_page"
              }
            ],
            staticClass: "custom-select custom-select-sm",
            on: {
              change: [
                function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.meta,
                    "per_page",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                },
                _vm.loadPerPage
              ]
            }
          },
          [
            _c("option", { attrs: { value: "5" } }, [_vm._v("5")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "10" } }, [_vm._v("10")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "25" } }, [_vm._v("25")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "50" } }, [_vm._v("50")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "100" } }, [_vm._v("100")])
          ]
        ),
        _vm._v(" "),
        _c("label", { staticClass: "ml-2" }, [_vm._v("Entries")]),
        _vm._v(" "),
        _c(
          "span",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.tombolAddNew,
                expression: "tombolAddNew"
              }
            ]
          },
          [
            _c(
              "b-button",
              {
                staticClass: "ml-2",
                attrs: { pill: "", variant: "outline-secondary", size: "sm" },
                on: { click: _vm.addNew }
              },
              [_c("i", { staticClass: "fa fa-plus" }), _vm._v(" Create New")]
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-6 mb-3" }, [
      _c("div", { staticClass: "form-inline float-right has-search" }, [
        _c("span", { staticClass: "fa fa-search form-control-feedback" }),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control-search",
          attrs: { type: "text", placeholder: "Search" },
          on: { input: _vm.search }
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
            items: _vm.items,
            fields: _vm.fields,
            "sort-by": _vm.sortBy,
            "sort-desc": _vm.sortDesc,
            "show-empty": "",
            responsive: "sm",
            busy: _vm.isBusy
          },
          on: {
            "update:sortBy": function($event) {
              _vm.sortBy = $event
            },
            "update:sort-by": function($event) {
              _vm.sortBy = $event
            },
            "update:sortDesc": function($event) {
              _vm.sortDesc = $event
            },
            "update:sort-desc": function($event) {
              _vm.sortDesc = $event
            },
            "update:busy": function($event) {
              _vm.isBusy = $event
            }
          },
          scopedSlots: _vm._u([
            {
              key: "table-busy",
              fn: function() {
                return [
                  _c(
                    "div",
                    { staticClass: "text-center my-2" },
                    [
                      _c("b-spinner", { staticClass: "align-middle" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v("Loading...")])
                    ],
                    1
                  )
                ]
              },
              proxy: true
            },
            {
              key: "head(index)",
              fn: function() {
                return [
                  _c(
                    "label",
                    {
                      staticClass: "custom-control fill-checkbox-grey",
                      staticStyle: { "min-height": "0.8rem !important" }
                    },
                    [
                      _c("input", {
                        staticClass: "fill-control-input",
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: _vm.selectedItems.length === _vm.items.length
                        },
                        on: { change: _vm.selectAllRows }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "fill-control-indicator" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "fill-control-description" })
                    ]
                  )
                ]
              },
              proxy: true
            },
            {
              key: "cell(index)",
              fn: function(row) {
                return [
                  _c(
                    "label",
                    {
                      staticClass: "custom-control fill-checkbox-grey",
                      staticStyle: { "min-height": "0.8rem !important" }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selectedItems,
                            expression: "selectedItems"
                          }
                        ],
                        staticClass: "fill-control-input",
                        attrs: { type: "checkbox", name: "selected-items" },
                        domProps: {
                          value: row.item,
                          checked: Array.isArray(_vm.selectedItems)
                            ? _vm._i(_vm.selectedItems, row.item) > -1
                            : _vm.selectedItems
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.selectedItems,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = row.item,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  (_vm.selectedItems = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (_vm.selectedItems = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.selectedItems = $$c
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "fill-control-indicator" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "fill-control-description" })
                    ]
                  )
                ]
              }
            },
            {
              key: "cell(status)",
              fn: function(row) {
                return [
                  row.item.status == 0
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-danger btn-xxsm",
                          on: {
                            click: function($event) {
                              return _vm.konfirmStatus(row.item)
                            }
                          }
                        },
                        [_vm._v("inActive")]
                      )
                    : _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-xxsm",
                          on: {
                            click: function($event) {
                              return _vm.konfirmStatus(row.item)
                            }
                          }
                        },
                        [_vm._v("Active\n                 ")]
                      )
                ]
              }
            },
            {
              key: "cell(actions)",
              fn: function(row) {
                return [
                  _c(
                    "button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.tombolEdit,
                          expression: "tombolEdit"
                        },
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover",
                          modifiers: { hover: true }
                        }
                      ],
                      staticClass: "tombol-di-table",
                      attrs: { title: "Edit Data" },
                      on: {
                        click: function($event) {
                          return _vm.editData(row.item)
                        }
                      }
                    },
                    [_c("span", { staticClass: "fa fa-edit" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover",
                          modifiers: { hover: true }
                        }
                      ],
                      staticClass: "tombol-di-table",
                      attrs: { title: "Hapus Data" },
                      on: {
                        click: function($event) {
                          return _vm.removeData(row.item)
                        }
                      }
                    },
                    [_c("span", { staticClass: "fa fa-trash" })]
                  )
                ]
              }
            }
          ])
        }),
        _vm._v(" "),
        _c("div", { staticClass: "box-bw-table" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c(
                "button",
                {
                  staticClass: "tombol-di-bw-table",
                  attrs: { disabled: !_vm.selectedItems.length },
                  on: { click: _vm.removeSelected }
                },
                [
                  _c("i", { staticClass: "fa fa-trash" }),
                  _vm._v(" Delete Selected Table Data\n                    ")
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6 text-right" }, [
              _c("p", { staticStyle: { color: "white" } }, [
                _vm._v(
                  "\n                        Halaman ke - " +
                    _vm._s(_vm.meta.from) +
                    " dari " +
                    _vm._s(_vm.meta.to) +
                    " data ditemukan, dan dari\n                        " +
                    _vm._s(_vm.meta.total) +
                    " data keseluruhan\n                    "
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
          _c("b-pagination", {
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
            on: { change: _vm.changePage },
            model: {
              value: _vm.meta.current_page,
              callback: function($$v) {
                _vm.$set(_vm.meta, "current_page", $$v)
              },
              expression: "meta.current_page"
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/khusus/Datatable.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/khusus/Datatable.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Datatable_vue_vue_type_template_id_6925cb99___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Datatable.vue?vue&type=template&id=6925cb99& */ "./resources/js/components/khusus/Datatable.vue?vue&type=template&id=6925cb99&");
/* harmony import */ var _Datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Datatable.vue?vue&type=script&lang=js& */ "./resources/js/components/khusus/Datatable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Datatable_vue_vue_type_template_id_6925cb99___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Datatable_vue_vue_type_template_id_6925cb99___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/khusus/Datatable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/khusus/Datatable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/khusus/Datatable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Datatable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/Datatable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/khusus/Datatable.vue?vue&type=template&id=6925cb99&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/khusus/Datatable.vue?vue&type=template&id=6925cb99& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_template_id_6925cb99___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Datatable.vue?vue&type=template&id=6925cb99& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/Datatable.vue?vue&type=template&id=6925cb99&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_template_id_6925cb99___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_template_id_6925cb99___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);