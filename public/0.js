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
 //IMPORT LODASH, DIMANA AKAN DIGUNAKAN UNTUK MEMBUAT DELAY KETIKA KOLOM PENCARIAN DIISI

/* harmony default export */ __webpack_exports__["default"] = ({
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
    }
  },
  data: function data() {
    return {
      //VARIABLE INI AKAN MENGHADLE SORTING DATA
      sortBy: null,
      //FIELD YANG AKAN DISORT AKAN OTOMATIS DISIMPAN DISINI
      sortDesc: false //SEDANGKAN JENISNYA ASCENDING ATAU DESC AKAN DISIMPAN DISINI

    };
  },
  watch: {
    //KETIKA VALUE DARI VARIABLE sortBy BERUBAH
    sortBy: function sortBy(val) {
      //MAKA KITA EMIT DENGAN NAMA SORT DAN DATANYA ADALAH OBJECT BERUPA VALUE DARI SORTBY DAN SORTDESC
      //EMIT BERARTI MENGIRIMKAN DATA KEPADA PARENT ATAU YANG MEMANGGIL COMPONENT INI
      //SEHINGGA DARI PARENT TERSEBUT, KITA BISA MENGGUNAKAN VALUE YANG DIKIRIMKAN
      this.$emit('sort', {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc
      });
    },
    //KETIKA VALUE DARI SORTDESC BERUBAH
    sortDesc: function sortDesc(val) {
      //MAKA CARA YANG SAMA AKAN DIKERJAKAN
      this.$emit('sort', {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc
      });
    }
  },
  methods: {
    //JIKA SELECT BOX DIGANTI, MAKA FUNGSI INI AKAN DIJALANKAN
    loadPerPage: function loadPerPage(val) {
      //DAN KITA EMIT LAGI DENGAN NAMA per_page DAN VALUE SESUAI PER_PAGE YANG DIPILIH
      this.$emit('per_page', this.meta.per_page);
    },
    //KETIKA PAGINATION BERUBAH, MAKA FUNGSI INI AKAN DIJALANKAN
    changePage: function changePage(val) {
      //KIRIM EMIT DENGAN NAMA PAGINATION DAN VALUENYA ADALAH HALAMAN YANG DIPILIH OLEH USER
      this.$emit('pagination', val);
    },
    //KETIKA KOTAK PENCARIAN DIISI, MAKA FUNGSI INI AKAN DIJALANKAN
    //KITA GUNAKAN DEBOUNCE UNTUK MEMBUAT DELAY, DIMANA FUNGSI INI AKAN DIJALANKAN
    //500 MIL SECOND SETELAH USER BERHENTI MENGETIK
    search: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(function (e) {
      //KIRIM EMIT DENGAN NAMA SEARCH DAN VALUE SESUAI YANG DIKETIKKAN OLEH USER
      this.$emit('search', e.target.value);
    }, 500)
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ItemsViewPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ItemsViewPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_khusus_Datatable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/khusus/Datatable.vue */ "./resources/js/components/khusus/Datatable.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/items_service */ "./resources/js/services/items_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //IMPORT COMPONENT DATATABLENYA



/* harmony default export */ __webpack_exports__["default"] = ({
  //KETIKA COMPONENT INI DILOAD
  created: function created() {
    //MAKA AKAN MENJALANKAN FUNGSI BERIKUT
    this.loadItemsData();
  },
  data: function data() {
    return {
      //UNTUK VARIABLE FIELDS, DEFINISIKAN KEY UNTUK MASING-MASING DATA DAN SORTABLE BERNILAI TRUE JIKA INGIN MENAKTIFKAN FITUR SORTING DAN FALSE JIKA TIDAK INGIN MENGAKTIFKAN
      fields: [{
        key: 'nama',
        sortable: true
      }, {
        key: 'harga_beli',
        sortable: true
      }, {
        key: 'stok_awal',
        sortable: true
      }, {
        key: 'created_at',
        sortable: true
      }],
      items: [],
      //DEFAULT VALUE DARI ITEMS ADALAH KOSONG
      meta: [],
      //JUGA BERLAKU UNTUK META
      current_page: 1,
      //DEFAULT PAGE YANG AKTIF ADA PAGE 1
      per_page: 10,
      //DEFAULT LOAD PERPAGE ADALAH 10
      search: '',
      sortBy: 'created_at',
      //DEFAULT SORTNYA ADALAH CREATED_AT
      sortByDesc: false //ASCEDING

    };
  },
  components: {
    'app-datatable': _components_khusus_Datatable_vue__WEBPACK_IMPORTED_MODULE_0__["default"] //REGISTER COMPONENT DATATABLE

  },
  methods: {
    //METHOD INI AKAN MENGHANDLE REQUEST DATA KE API
    loadItemsData: function loadItemsData() {
      var _this = this;

      var current_page = this.search == '' ? this.current_page : 1; //LAKUKAN REQUEST KE API UNTUK MENGAMBIL DATA POSTINGAN

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/items", {
        //KIRIMKAN PARAMETER BERUPA PAGE YANG SEDANG DILOAD, PENCARIAN, LOAD PERPAGE DAN SORTING.
        params: {
          page: current_page,
          per_page: this.per_page,
          q: this.search,
          sortby: this.sortBy,
          sortbydesc: this.sortByDesc ? 'DESC' : 'ASC'
        }
      }).then(function (response) {
        //JIKA RESPONSENYA DITERIMA
        var getData = response.data.data;
        _this.items = getData.data; //MAKA ASSIGN DATA POSTINGAN KE DALAM VARIABLE ITEMS
        //DAN ASSIGN INFORMASI LAINNYA KE DALAM VARIABLE META

        _this.meta = {
          total: getData.total,
          current_page: getData.current_page,
          per_page: getData.per_page,
          from: getData.from,
          to: getData.to
        };
      });
    },
    //JIKA ADA EMIT TERKAIT LOAD PERPAGE, MAKA FUNGSI INI AKAN DIJALANKAN
    handlePerPage: function handlePerPage(val) {
      this.per_page = val; //SET PER_PAGE DENGAN VALUE YANG DIKIRIM DARI EMIT

      this.loadItemsData(); //DAN REQUEST DATA BARU KE SERVER
    },
    //JIKA ADA EMIT PAGINATION YANG DIKIRIM, MAKA FUNGSI INI AKAN DIEKSEKUSI
    handlePagination: function handlePagination(val) {
      this.current_page = val; //SET CURRENT PAGE YANG AKTIF

      this.loadItemsData();
    },
    //JIKA ADA DATA PENCARIAN
    handleSearch: function handleSearch(val) {
      this.search = val; //SET VALUE PENCARIAN KE VARIABLE SEARCH

      this.loadItemsData(); //REQUEST DATA BARU
    },
    //JIKA ADA EMIT SORT
    handleSort: function handleSort(val) {
      //MAKA SET SORT-NYA
      this.sortBy = val.sortBy;
      this.sortByDesc = val.sortDesc;
      this.loadItemsData(); //DAN LOAD DATA BARU BERDASARKAN SORT
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
    _c("div", { staticClass: "col-md-4 mb-2" }, [
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
            staticClass: "form-control",
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
        _c("label", { staticClass: "ml-2" }, [_vm._v("Entries")])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-4 offset-md-4" }, [
      _c("div", { staticClass: "form-inline float-right" }, [
        _c("label", { staticClass: "mr-2" }, [_vm._v("Search")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text" },
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
          attrs: {
            striped: "",
            hover: "",
            items: _vm.items,
            fields: _vm.fields,
            "sort-by": _vm.sortBy,
            "sort-desc": _vm.sortDesc,
            "show-empty": ""
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
            }
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-6" }, [
      _c("p", [
        _vm._v(
          "Showing " +
            _vm._s(_vm.meta.from) +
            " to " +
            _vm._s(_vm.meta.to) +
            " of " +
            _vm._s(_vm.meta.total) +
            " items"
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-6" },
      [
        _c("b-pagination", {
          attrs: {
            "total-rows": _vm.meta.total,
            "per-page": _vm.meta.per_page,
            align: "right",
            "aria-controls": "dw-datatable"
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ItemsViewPage.vue?vue&type=template&id=bf70f3b6&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ItemsViewPage.vue?vue&type=template&id=bf70f3b6& ***!
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
  return _c(
    "div",
    { staticClass: "container", staticStyle: { "padding-top": "30px" } },
    [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("app-datatable", {
                  attrs: {
                    items: _vm.items,
                    fields: _vm.fields,
                    meta: _vm.meta
                  },
                  on: {
                    per_page: _vm.handlePerPage,
                    pagination: _vm.handlePagination,
                    search: _vm.handleSearch,
                    sort: _vm.handleSort
                  }
                })
              ],
              1
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("VueJS Datatables")])
    ])
  }
]
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



/***/ }),

/***/ "./resources/js/services/items_service.js":
/*!************************************************!*\
  !*** ./resources/js/services/items_service.js ***!
  \************************************************/
/*! exports provided: createCategory, loadCategories, deleteCategory, updateCategory, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategory", function() { return createCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return loadCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCategory", function() { return deleteCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCategory", function() { return updateCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createCategory(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/categories', data); //ini diambil  dari Route category laravel nama routenya ('api/categies)...karena sdh di definisikan di store maka tgl ('/categories)
}
function loadCategories() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/items'); //ini diambil  dari Route items laravel nama routenya ('api/categies)...karena sdh di definisikan di store maka tgl ('/categories)
}
function deleteCategory(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/categories/".concat(id)); //ini diambil  dari Route category laravel nama routenya ('api/categies)...karena sdh di definisikan di store maka tgl ('/categories)
}
function updateCategory(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("/categories/".concat(id), data); //ini diambil  dari Route category laravel nama routenya ('api/categies)...karena sdh di definisikan di store maka tgl ('/categories)
}
function loadMore(page) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/categories?page=".concat(page));
}

/***/ }),

/***/ "./resources/js/views/ItemsViewPage.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/ItemsViewPage.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemsViewPage_vue_vue_type_template_id_bf70f3b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemsViewPage.vue?vue&type=template&id=bf70f3b6& */ "./resources/js/views/ItemsViewPage.vue?vue&type=template&id=bf70f3b6&");
/* harmony import */ var _ItemsViewPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemsViewPage.vue?vue&type=script&lang=js& */ "./resources/js/views/ItemsViewPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemsViewPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemsViewPage_vue_vue_type_template_id_bf70f3b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemsViewPage_vue_vue_type_template_id_bf70f3b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ItemsViewPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ItemsViewPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/ItemsViewPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemsViewPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemsViewPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ItemsViewPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemsViewPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ItemsViewPage.vue?vue&type=template&id=bf70f3b6&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/ItemsViewPage.vue?vue&type=template&id=bf70f3b6& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemsViewPage_vue_vue_type_template_id_bf70f3b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemsViewPage.vue?vue&type=template&id=bf70f3b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ItemsViewPage.vue?vue&type=template&id=bf70f3b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemsViewPage_vue_vue_type_template_id_bf70f3b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemsViewPage_vue_vue_type_template_id_bf70f3b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);