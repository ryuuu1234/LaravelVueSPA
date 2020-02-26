(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/InputNumber.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/khusus/InputNumber.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    model: {
      get: function get() {
        // We extract decimal number, beacause toLocaleString will automagically
        // remove the dot and zeros after it while the user is still typing
        var value = this.value.split(".");
        var decimal = typeof value[1] !== "undefined" ? "." + value[1] : "";
        return Number(value[0]).toLocaleString("en-GB") + decimal;
      },
      set: function set(newValue) {
        this.$emit("input", newValue.replace(/,/g, ""));
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
/* harmony import */ var _components_khusus_InputNumber_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/khusus/InputNumber.vue */ "./resources/js/components/khusus/InputNumber.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// import MyCurrencyInput from '../components/khusus/MyCurrencyInput.vue'

 // import axios from 'axios';


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'app-datatable': _components_khusus_Datatable_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    //REGISTER COMPONENT DATATABLE
    // 'my-currency-input': MyCurrencyInput, //REGISTER COMPONENT DATATABLE
    'input-number': _components_khusus_InputNumber_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  //KETIKA COMPONENT INI DILOAD
  created: function created() {
    //MAKA AKAN MENJALANKAN FUNGSI BERIKUT
    this.loadItemsData();
    this.kosongkanForm(); // this.handleLoading(true)
  },
  data: function data() {
    return {
      //UNTUK VARIABLE FIELDS, DEFINISIKAN KEY UNTUK MASING-MASING DATA DAN SORTABLE BERNILAI TRUE JIKA INGIN MENAKTIFKAN FITUR SORTING DAN FALSE JIKA TIDAK INGIN MENGAKTIFKAN
      // input:"10000",
      methodForms: "Add",
      // labelButton: "",
      fields: [{
        key: 'index',
        label: 'index'
      }, {
        key: 'nama',
        sortable: true
      }, // {key: 'unit.nama', label:'Satuan'},
      {
        key: 'harga_beli',
        label: 'Harga',
        formatter: function formatter(value, key, item) {
          return "Rp " + new Intl.NumberFormat().format(item.harga_beli) + " / " + item.unit.nama;
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
      units: [],
      //DATA UNIT
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
      errors: [],
      currencyInput: '',
      // husus input angka
      isInputActive: false,
      selectedRowsId: [],
      // pengaturan tombol
      tombolAddNew: true,
      tombolEdit: true
    };
  },
  computed: {
    textButton: function textButton() {
      return this.methodForms == "Add" ? "Save" : "Update";
    }
  },
  methods: {
    selectedDataId: function selectedDataId(item) {// console.log('ok')
    },
    // remove select
    hapusDataTerseleksi: function () {
      var _hapusDataTerseleksi = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(val) {
        var _this = this;

        var params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (window.confirm("Are you sure you want to delete this selection data ?")) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                params = {
                  'items': val
                };
                _context.prev = 3;
                _context.next = 6;
                return _services_items_service__WEBPACK_IMPORTED_MODULE_3__["deleteAllSelected"](params);

              case 6:
                val.map(function (val) {
                  var index = _this.items.indexOf(val);

                  _this.items.splice(index, 1);
                }); // this.loadItemsData(); //DAN LOAD DATA BARU BERDASARKAN SORT

                this.flashMessage.success({
                  message: "Item DELETED successfully!",
                  time: 5000
                });
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                this.flashMessage.error({
                  message: _context.t0.response.data.message,
                  time: 5000
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 10]]);
      }));

      function hapusDataTerseleksi(_x) {
        return _hapusDataTerseleksi.apply(this, arguments);
      }

      return hapusDataTerseleksi;
    }(),
    //METHOD INI AKAN MENGHANDLE REQUEST DATA KE API
    loadItemsData: function () {
      var _loadItemsData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var current_page, sorting, params, response, getData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.isBusy = true; // this.handleLoading(true);

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
                _context2.prev = 4;
                _context2.next = 7;
                return _services_items_service__WEBPACK_IMPORTED_MODULE_3__["loadData"](params);

              case 7:
                response = _context2.sent;
                console.dir(response);
                getData = response.data.data;
                this.items = getData.data; //MAKA ASSIGN DATA POSTINGAN KE DALAM VARIABLE ITEMS

                this.units = response.data.data_unit; // console.log(this.units)
                // console.log(this.items[0].nama);
                //DAN ASSIGN INFORMASI LAINNYA KE DALAM VARIABLE META

                this.meta = {
                  total: getData.total,
                  current_page: getData.current_page,
                  per_page: getData.per_page,
                  from: getData.from,
                  to: getData.to
                };
                _context2.next = 19;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](4);
                console.log('' + _context2.t0);
                this.flashMessage.error({
                  message: "Some error occured, Please Refresh!",
                  time: 5000
                });

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 15]]);
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
    // handleLoading(val) {
    //     console.log(val);
    // },
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(item) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (window.confirm("Are you sure you want to delete ".concat(item.nama, " ?"))) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.prev = 2;
                _context3.next = 5;
                return _services_items_service__WEBPACK_IMPORTED_MODULE_3__["deleteItem"](item.id);

              case 5:
                // this.items = this.items.filter(obj => {
                //     return obj.id != item.id;
                // });
                this.loadItemsData(); //DAN LOAD DATA BARU BERDASARKAN SORT

                this.flashMessage.success({
                  message: "Item DELETED successfully!",
                  time: 5000
                });
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                this.flashMessage.error({
                  message: _context3.t0.response.data.message,
                  time: 5000
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 9]]);
      }));

      function removeData(_x2) {
        return _removeData.apply(this, arguments);
      }

      return removeData;
    }(),
    editData: function editData(item) {
      this.editItemData = _objectSpread({}, item); // this.currencyInput = this.editItemData.harga_beli;

      this.currencyInput = String(this.editItemData.harga_beli);
      this.methodForms = "Edit";
      this.showEditDataModal();
    },
    addData: function addData() {
      this.methodForms = "Add";
      this.kosongkanForm();
      this.showEditDataModal();
    },
    showEditDataModal: function showEditDataModal() {
      this.$refs.editDataModal.show();
    },
    hideEditDataModal: function hideEditDataModal() {
      this.$refs.editDataModal.hide();
    },
    kosongkanForm: function kosongkanForm() {
      this.editItemData.nama = "";
      this.editItemData.unit_id = "";
      this.editItemData.harga_beli = "";
      this.editItemData.stok_awal = "";
      this.currencyInput = "";
    },
    // create dan update data
    updateData: function () {
      var _updateData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(item) {
        var formData, response, _response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                formData = new FormData();
                formData.append("nama", this.editItemData.nama);
                formData.append("harga_beli", this.currencyInput);
                formData.append("unit_id", this.editItemData.unit_id);
                formData.append("stok_awal", this.editItemData.stok_awal);

                if (!(this.methodForms == 'Add')) {
                  _context4.next = 27;
                  break;
                }

                _context4.prev = 6;
                _context4.next = 9;
                return _services_items_service__WEBPACK_IMPORTED_MODULE_3__["createItem"](formData);

              case 9:
                response = _context4.sent;
                //    jika sukses
                //    this.items.unshift(response.data);
                this.loadItemsData();
                this.hideEditDataModal();
                this.kosongkanForm();
                this.flashMessage.success({
                  message: "Category stored successfully!",
                  time: 5000
                });
                _context4.next = 25;
                break;

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4["catch"](6);
                _context4.t1 = _context4.t0.response.status;
                _context4.next = _context4.t1 === 422 ? 21 : 23;
                break;

              case 21:
                this.errors = _context4.t0.response.data.errors;
                return _context4.abrupt("break", 25);

              case 23:
                this.flashMessage.error({
                  message: "Some error occured, Please Try Again!",
                  time: 5000
                });
                return _context4.abrupt("break", 25);

              case 25:
                _context4.next = 40;
                break;

              case 27:
                // ini untuk edit data
                formData.append('_method', 'put');
                _context4.prev = 28;
                _context4.next = 31;
                return _services_items_service__WEBPACK_IMPORTED_MODULE_3__["updateItem"](this.editItemData.id, formData);

              case 31:
                _response = _context4.sent;
                this.items.map(function (item) {
                  if (item.id === _response.data.id) {
                    for (var key in _response.data) {
                      item[key] = _response.data[key];
                    }
                  }
                }); // jika success tutup modal dan munculkan pesan

                this.hideEditDataModal();
                this.flashMessage.success({
                  message: "Item Updated successfully!",
                  time: 5000
                });
                _context4.next = 40;
                break;

              case 37:
                _context4.prev = 37;
                _context4.t2 = _context4["catch"](28);
                this.flashMessage.error({
                  message: _context4.t2.response.data.message,
                  time: 5000
                });

              case 40:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[6, 16], [28, 37]]);
      }));

      function updateData(_x3) {
        return _updateData.apply(this, arguments);
      }

      return updateData;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/InputNumber.vue?vue&type=template&id=52d81bb0&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/khusus/InputNumber.vue?vue&type=template&id=52d81bb0& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
        value: _vm.model,
        expression: "model"
      }
    ],
    attrs: { type: "string" },
    domProps: { value: _vm.model },
    on: {
      input: function($event) {
        if ($event.target.composing) {
          return
        }
        _vm.model = $event.target.value
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
    [
      _c("div", { staticClass: "container-fluid mt-4" }, [
        _c(
          "div",
          { staticClass: "col-md-12" },
          [
            _c("app-datatable", {
              attrs: {
                items: _vm.items,
                fields: _vm.fields,
                meta: _vm.meta,
                tombolAddNew: _vm.tombolAddNew,
                tombolEdit: _vm.tombolEdit
              },
              on: {
                per_page: _vm.handlePerPage,
                pagination: _vm.handlePagination,
                search: _vm.handleSearch,
                sort: _vm.handleSort,
                removedData: _vm.removeData,
                editedData: _vm.editData,
                createdData: _vm.addData,
                removedSelected: _vm.hapusDataTerseleksi,
                selectedId: _vm.selectedDataId
              }
            })
          ],
          1
        )
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
                        _vm._v("Nama Item")
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
                              "\n                                " +
                                _vm._s(_vm.errors.nama[0]) +
                                "\n                            "
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
                          _vm._v("Harga Beli ")
                        ]),
                        _vm._v(" "),
                        _c("input-number", {
                          staticClass: "form-control form-control-sm",
                          attrs: {
                            id: "harga_beli",
                            placeholder: "Masukkan Harga Beli Item"
                          },
                          model: {
                            value: _vm.currencyInput,
                            callback: function($$v) {
                              _vm.currencyInput = $$v
                            },
                            expression: "currencyInput"
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.harga_beli
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.errors.harga_beli[0]) +
                                  "\n                            "
                              )
                            ])
                          : _vm._e()
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group-sm mb-2" }, [
                      _c("label", { attrs: { for: "unit_id" } }, [
                        _vm._v("Satuan")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editItemData.unit_id,
                              expression: "editItemData.unit_id"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { name: "unit_id", id: "unit_id" },
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
                              _vm.$set(
                                _vm.editItemData,
                                "unit_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Pilih Satuan")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.units, function(unit) {
                            return _c(
                              "option",
                              { key: unit.id, domProps: { value: unit.id } },
                              [
                                _vm._v(
                                  _vm._s(unit.nama) +
                                    "\n                                "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.unit_id
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.errors.unit_id[0]) +
                                "\n                            "
                            )
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group-sm" }, [
                      _c("label", { attrs: { for: "stok_awal" } }, [
                        _vm._v("Stok Awal")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.editItemData.stok_awal,
                            expression: "editItemData.stok_awal"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          type: "number",
                          placeholder: "masukkan stok awal"
                        },
                        domProps: { value: _vm.editItemData.stok_awal },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.editItemData,
                              "stok_awal",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.stok_awal
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.errors.stok_awal[0]) +
                                "\n                            "
                            )
                          ])
                        : _vm._e()
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger btn-sm",
                      attrs: { type: "button" },
                      on: { click: _vm.hideEditDataModal }
                    },
                    [
                      _vm._v(
                        "\n                        Cancel\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-dark btn-sm",
                      attrs: { type: "submit" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-check" }),
                      _vm._v(
                        " " + _vm._s(_vm.textButton) + "\n                    "
                      )
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/khusus/InputNumber.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/khusus/InputNumber.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputNumber_vue_vue_type_template_id_52d81bb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputNumber.vue?vue&type=template&id=52d81bb0& */ "./resources/js/components/khusus/InputNumber.vue?vue&type=template&id=52d81bb0&");
/* harmony import */ var _InputNumber_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputNumber.vue?vue&type=script&lang=js& */ "./resources/js/components/khusus/InputNumber.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputNumber_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputNumber_vue_vue_type_template_id_52d81bb0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputNumber_vue_vue_type_template_id_52d81bb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/khusus/InputNumber.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/khusus/InputNumber.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/khusus/InputNumber.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputNumber_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputNumber.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/InputNumber.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputNumber_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/khusus/InputNumber.vue?vue&type=template&id=52d81bb0&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/khusus/InputNumber.vue?vue&type=template&id=52d81bb0& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputNumber_vue_vue_type_template_id_52d81bb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputNumber.vue?vue&type=template&id=52d81bb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/InputNumber.vue?vue&type=template&id=52d81bb0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputNumber_vue_vue_type_template_id_52d81bb0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputNumber_vue_vue_type_template_id_52d81bb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/items_service.js":
/*!************************************************!*\
  !*** ./resources/js/services/items_service.js ***!
  \************************************************/
/*! exports provided: createItem, loadData, deleteItem, deleteAllSelected, updateItem, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createItem", function() { return createItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadData", function() { return loadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAllSelected", function() { return deleteAllSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createItem(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('user/items', data); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/items)...karena sdh di definisikan di store maka tgl ('/items)
}
function loadData(params) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('user/items', params); //ini diambil  dari Route items laravel nama routenya ('api/(prefix=user)/items)...karena sdh di definisikan di store maka tgl ('/items)
}
function deleteItem(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("user/items/".concat(id)); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/items)...karena sdh di definisikan di store maka tgl ('/items)
}
function deleteAllSelected(params) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('user/items/delete', params); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/items/delete)...karena sdh di definisikan di store maka tgl ('/items)
}
function updateItem(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("user/items/".concat(id), data); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/items)...karena sdh di definisikan di store maka tgl ('/items)
}
function loadMore(page) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("user/items?page=".concat(page));
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