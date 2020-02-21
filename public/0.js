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
    }, 500),
    removeData: function removeData(index) {
      this.$emit('removedData', index); // kirim event removedTodo parent (itemnya)
    },
    editData: function editData(index) {
      this.$emit('editedData', index); // kirim event removedTodo parent (itemnya)
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/MyCurrencyInput.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/khusus/MyCurrencyInput.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      isInputActive: false
    };
  },
  props: ["value"],
  computed: {
    displayValue: {
      get: function get() {
        if (this.isInputActive) {
          // Cursor is inside the input field. unformat display value for user
          return this.value.toString();
        } else {
          // User is not modifying now. Format display value for user interface
          return "Rp " + this.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
        }
      },
      set: function set(modifiedValue) {
        // Recalculate value after ignoring "$" and "," in user input
        var newValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, "")); // Ensure that it is not NaN

        if (isNaN(newValue)) {
          newValue = 0;
        } // Note: we cannot set this.value as it is a "prop". It needs to be passed to parent component
        // $emit the event so that parent component gets it


        this.$emit('input', newValue);
      }
    }
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_khusus_Datatable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/khusus/Datatable.vue */ "./resources/js/components/khusus/Datatable.vue");
/* harmony import */ var _components_khusus_MyCurrencyInput_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/khusus/MyCurrencyInput.vue */ "./resources/js/components/khusus/MyCurrencyInput.vue");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/items_service */ "./resources/js/services/items_service.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

 // import axios from 'axios';


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'app-datatable': _components_khusus_Datatable_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    //REGISTER COMPONENT DATATABLE
    'my-currency-input': _components_khusus_MyCurrencyInput_vue__WEBPACK_IMPORTED_MODULE_2__["default"] //REGISTER COMPONENT DATATABLE

  },
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
        key: 'unit.nama',
        label: 'Satuan',
        sortable: true
      }, {
        key: 'harga_beli',
        label: 'Harga',
        formatter: function formatter(value, key, item) {
          return new Intl.NumberFormat().format(item.harga_beli);
        },
        sortable: true,
        "class": 'text-right'
      }, {
        key: 'stok_awal',
        sortable: true,
        "class": 'text-right'
      }, {
        key: 'actions',
        label: 'Actions',
        "class": 'text-right'
      }],
      items: [],
      //DEFAULT VALUE DARI ITEMS ADALAH KOSONG
      meta: [],
      //JUGA BERLAKU UNTUK META
      current_page: 1,
      //DEFAULT PAGE YANG AKTIF ADA PAGE 1
      per_page: 5,
      //DEFAULT LOAD PERPAGE ADALAH 5
      search: '',
      sortBy: 'created_at',
      //DEFAULT SORTNYA ADALAH CREATED_AT
      sortByDesc: false,
      //ASCEDING
      editItemData: {},
      errors: []
    };
  },
  computed: {},
  methods: {
    // format angka
    formatPrice: function formatPrice(value) {
      return new Intl.NumberFormat().format(value);
    },
    //METHOD INI AKAN MENGHANDLE REQUEST DATA KE API
    loadItemsData: function () {
      var _loadItemsData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var current_page, sorting, params, response, getData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                current_page = this.search == '' ? this.current_page : 1;
                sorting = this.sortByDesc ? 'DESC' : 'ASC'; // let

                params = {
                  params: {
                    page: current_page,
                    per_page: this.per_page,
                    q: this.search,
                    sortby: this.sortBy,
                    sortbydesc: sorting
                  }
                };
                _context.prev = 3;
                _context.next = 6;
                return _services_items_service__WEBPACK_IMPORTED_MODULE_3__["loadData"](params);

              case 6:
                response = _context.sent;
                // console.log(response);
                getData = response.data.data;
                this.items = getData.data; //MAKA ASSIGN DATA POSTINGAN KE DALAM VARIABLE ITEMS
                // console.log(this.items[0].nama);
                //DAN ASSIGN INFORMASI LAINNYA KE DALAM VARIABLE META

                this.meta = {
                  total: getData.total,
                  current_page: getData.current_page,
                  per_page: getData.per_page,
                  from: getData.from,
                  to: getData.to
                };
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);
                console.log('' + _context.t0);
                this.flashMessage.error({
                  message: "Some error occured, Please Refresh!",
                  time: 5000
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 12]]);
      }));

      function loadItemsData() {
        return _loadItemsData.apply(this, arguments);
      }

      return loadItemsData;
    }(),
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
    },
    removeData: function () {
      var _removeData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(item) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (window.confirm("Are you sure you want to delete ".concat(item.name, " ?"))) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.prev = 2;
                _context2.next = 5;
                return _services_items_service__WEBPACK_IMPORTED_MODULE_3__["deleteItem"](item.id);

              case 5:
                this.items = this.items.filter(function (obj) {
                  return obj.id != item.id;
                });
                this.flashMessage.success({
                  message: "Item DELETED successfully!",
                  time: 5000
                });
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);
                this.flashMessage.error({
                  message: _context2.t0.response.data.message,
                  time: 5000
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 9]]);
      }));

      function removeData(_x) {
        return _removeData.apply(this, arguments);
      }

      return removeData;
    }(),
    editData: function editData(item) {
      this.editItemData = _objectSpread({}, item);
      this.showEditDataModal();
    },
    showEditDataModal: function showEditDataModal() {
      this.$refs.editDataModal.show();
    },
    hideEditDataModal: function hideEditDataModal() {
      this.$refs.editDataModal.hide();
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
    _c("div", { staticClass: "col-md-4" }, [
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
        _c("label", { staticClass: "ml-2" }, [_vm._v("Entries")])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-4 offset-md-4 mb-3" }, [
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
          attrs: {
            striped: "",
            hover: "",
            small: "",
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
          },
          scopedSlots: _vm._u([
            {
              key: "cell(actions)",
              fn: function(row) {
                return [
                  _c(
                    "b-button",
                    {
                      attrs: { size: "sm", variant: "outline-info" },
                      on: {
                        click: function($event) {
                          return _vm.editData(row.item)
                        }
                      }
                    },
                    [_c("span", { staticClass: "fa fa-pencil-alt" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { size: "sm", variant: "outline-danger" },
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/MyCurrencyInput.vue?vue&type=template&id=09f17a3c&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/khusus/MyCurrencyInput.vue?vue&type=template&id=09f17a3c& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("input", {
    directives: [
      {
        name: "model",
        rawName: "v-model",
        value: _vm.displayValue,
        expression: "displayValue"
      }
    ],
    attrs: { type: "text" },
    domProps: { value: _vm.displayValue },
    on: {
      blur: function($event) {
        _vm.isInputActive = false
      },
      focus: function($event) {
        _vm.isInputActive = true
      },
      input: function($event) {
        if ($event.target.composing) {
          return
        }
        _vm.displayValue = $event.target.value
      }
    }
  })
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
    { staticClass: "container", staticStyle: { "padding-top": "20px" } },
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
                    sort: _vm.handleSort,
                    removedData: _vm.removeData,
                    editedData: _vm.editData
                  }
                })
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editDataModal",
          attrs: { "hide-footer": "", title: "Edit Item" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateData($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group-sm mb-2" }, [
                      _c("label", { attrs: { for: "nama" } }, [
                        _vm._v("Masukkan Nama Item")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.editItemData.nama,
                            expression: "editItemData.nama"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          type: "text",
                          id: "nama",
                          placeholder: "Enter Item Name"
                        },
                        domProps: { value: _vm.editItemData.nama },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.editItemData,
                              "nama",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.nama
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.errors.nama[0]) +
                                "\n                                "
                            )
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group-sm" },
                      [
                        _c("label", { attrs: { for: "harga_beli" } }, [
                          _vm._v("Harga Beli")
                        ]),
                        _vm._v(" "),
                        _c("my-currency-input", {
                          staticClass: "form-control form-control-sm",
                          attrs: {
                            id: "harga_beli",
                            placeholder: "Masukkan Harga Beli Item"
                          },
                          model: {
                            value: _vm.editItemData.harga_beli,
                            callback: function($$v) {
                              _vm.$set(_vm.editItemData, "harga_beli", $$v)
                            },
                            expression: "editItemData.harga_beli"
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.harga_beli
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(_vm.errors.harga_beli[0]) +
                                  "\n                                "
                              )
                            ])
                          : _vm._e()
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-dark btn-sm",
                      attrs: { type: "button" },
                      on: { click: _vm.hideEditDataModal }
                    },
                    [
                      _vm._v(
                        "\n                            Cancel\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-sm",
                      attrs: { type: "submit" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-check" }),
                      _vm._v(" Update\n                        ")
                    ]
                  )
                ])
              ]
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("Management Items")])
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

/***/ "./resources/js/components/khusus/MyCurrencyInput.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/khusus/MyCurrencyInput.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyCurrencyInput_vue_vue_type_template_id_09f17a3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyCurrencyInput.vue?vue&type=template&id=09f17a3c& */ "./resources/js/components/khusus/MyCurrencyInput.vue?vue&type=template&id=09f17a3c&");
/* harmony import */ var _MyCurrencyInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyCurrencyInput.vue?vue&type=script&lang=js& */ "./resources/js/components/khusus/MyCurrencyInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyCurrencyInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyCurrencyInput_vue_vue_type_template_id_09f17a3c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyCurrencyInput_vue_vue_type_template_id_09f17a3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/khusus/MyCurrencyInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/khusus/MyCurrencyInput.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/khusus/MyCurrencyInput.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCurrencyInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyCurrencyInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/MyCurrencyInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCurrencyInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/khusus/MyCurrencyInput.vue?vue&type=template&id=09f17a3c&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/khusus/MyCurrencyInput.vue?vue&type=template&id=09f17a3c& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCurrencyInput_vue_vue_type_template_id_09f17a3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyCurrencyInput.vue?vue&type=template&id=09f17a3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/MyCurrencyInput.vue?vue&type=template&id=09f17a3c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCurrencyInput_vue_vue_type_template_id_09f17a3c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCurrencyInput_vue_vue_type_template_id_09f17a3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/items_service.js":
/*!************************************************!*\
  !*** ./resources/js/services/items_service.js ***!
  \************************************************/
/*! exports provided: createCategory, loadData, deleteItem, updateCategory, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategory", function() { return createCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadData", function() { return loadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCategory", function() { return updateCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createCategory(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/categories', data); //ini diambil  dari Route category laravel nama routenya ('api/categies)...karena sdh di definisikan di store maka tgl ('/categories)
}
function loadData(params) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/items', params); //ini diambil  dari Route items laravel nama routenya ('api/categies)...karena sdh di definisikan di store maka tgl ('/categories)
}
function deleteItem(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/items/".concat(id)); //ini diambil  dari Route category laravel nama routenya ('api/categies)...karena sdh di definisikan di store maka tgl ('/categories)
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