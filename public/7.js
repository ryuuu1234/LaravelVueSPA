(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/LineChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/khusus/LineChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  props: ['data', 'options', 'labels'],
  //KETIKA COMPONENT INI DIGUNAKAN, AKAN MEMINTA DATA SEBAGAI PROPS
  mounted: function mounted() {
    this.lineRenderChart(); //KETIKA COMPONENT DI-LOAD JALANKAN METHOD INI
  },
  watch: {
    //KETIKA TERJADI PERUBAHAN VALUE DARI PROPS DATA
    data: {
      handler: function handler() {
        this._data._chart.destroy(); //MAKA HAPUS CHART


        this.lineRenderChart(); //DAN RENDER KEMBALI DENGAN DATA YANG BARU
      },
      deep: true
    }
  },
  methods: {
    lineRenderChart: function lineRenderChart() {
      //FUNGSI UNTUK MERENDER CHART
      this.renderChart({
        labels: this.labels,
        //LABELS NYA BERDASARKAN PROPS LABELS (VALUENYA AKAN KITA ISI LIST TANGGAL SELAMA 1 BULAN)
        datasets: [{
          label: 'Statistik Penjualan',
          data: this.data,
          //DATA YANG AKAN MENJADI CHART (TOTAL TRANSAKSI PERHARI)
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
          borderWidth: 1
        }]
      }, this.options);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_data_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/data_menu */ "./resources/js/services/data_menu.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_khusus_LineChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/khusus/LineChart */ "./resources/js/components/khusus/LineChart.vue");
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




 //IMPORT COMPONENT CHART 

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Dashboard",
  components: {
    'line-chart': _components_khusus_LineChart__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  //DEFINISIKAN CUSTOM TAG UNTUK COMPONENT YANG DIBUAT SEBELUMNYA
  mounted: function mounted() {
    this.menus = _services_data_menu__WEBPACK_IMPORTED_MODULE_0__["default"]; // console.log(this.penjualan_products)
  },
  created: function created() {
    this.getPackingAll();
    this.getMitraAll();
    this.thisMonth();
    this.getLaporanPenjualanProduct();
  },
  data: function data() {
    return {
      menus: [],
      fromTgl: moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf('month')._d,
      toTgl: moment__WEBPACK_IMPORTED_MODULE_1___default()().endOf('month')._d,
      height: 300
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])("mitra", ["jumlah_mitra"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])("packing", ["jumlah_packing"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])("laporan", ["charts_penjualan"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])("laporan", ["penjualan_products"]), {
    tgl_awal: {
      get: function get() {
        return this.$store.state.laporan.tgl_awal;
      },
      set: function set(val) {
        this.SET_TGL_AWAL(val);
      }
    },
    tgl_akhir: {
      get: function get() {
        return this.$store.state.laporan.tgl_akhir;
      },
      set: function set(val) {
        this.SET_TGL_AKHIR(val);
      }
    },
    labels: function labels() {
      //KARENA FORMAT DATANYA BERISI TOTAL DAN DATE, MAKA KITA FILTER HANYA AKAN MENGAMBIL DATENYA SAJA
      return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(this.penjualan_products, function (o) {
        return moment__WEBPACK_IMPORTED_MODULE_1___default()(o.created_at).format('DD MMM');
      });
    },
    //DATA TOTAL TRANSAKSI YANG DITERIMA DARI SERVER
    transaction_data: function transaction_data() {
      //KITA FILTER KARENA HANYA AKAN MENGAMBIL TOTAL VALUENYA SAJA
      return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(this.penjualan_products, function (o) {
        return o.total;
      });
    },
    myStyles: function myStyles() {
      return {
        height: "".concat(this.height, "px"),
        position: 'relative'
      };
    },
    chartOptions: function chartOptions() {}
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])("mitra", ["getMitraAll"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])("packing", ["getPackingAll"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])("laporan", ["getLaporanPenjualanProduct"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapMutations"])("laporan", ["SET_TGL_AWAL", "SET_TGL_AKHIR"]), {
    thisMonth: function thisMonth() {
      this.tgl_awal = moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf('month')._d;
      this.tgl_akhir = moment__WEBPACK_IMPORTED_MODULE_1___default()().endOf('month')._d;
    },
    increase: function increase() {
      this.height += 10;
    }
  }) // watch:{
  //     tgl_awal(){
  //         return this.
  //     },
  // }

});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&id=1f79daf6&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=style&index=0&id=1f79daf6&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-nya[data-v-1f79daf6] {\n  background-color: #fff;\n  padding: 20px;\n}\na.router-link-exact-active[data-v-1f79daf6] {\n  text-decoration: none !important;\n}\na[data-v-1f79daf6] {\n  text-decoration: none !important;\n}\n.bg-cyan[data-v-1f79daf6] {\n  background-color: #27A9E3;\n}\n.box[data-v-1f79daf6] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-radius: 3px;\n  box-shadow: inset 0 0 0 0 #343A40;\n  transition: ease-out 0.4s;\n}\n.box[data-v-1f79daf6]:hover {\n  box-shadow: inset 0 0 0 60px #343A40;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&id=1f79daf6&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=style&index=0&id=1f79daf6&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=1f79daf6&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&id=1f79daf6&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true& ***!
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
  return _c("main", [
    _c("div", { staticClass: "container-fluid mt-3" }, [
      _c(
        "div",
        { staticClass: "row justify-content-between" },
        [
          _vm._l(_vm.menus, function(menu, row) {
            return _c(
              "div",
              { key: row, staticClass: "mb-2", class: menu.colMd },
              [
                _c("router-link", { attrs: { to: { name: menu.link } } }, [
                  _c("div", { staticClass: "card card-hover" }, [
                    _c(
                      "div",
                      { staticClass: "box text-center", class: menu.color_bg },
                      [
                        _c("h1", { staticClass: "font-light text-white" }, [
                          _c("i", { class: menu.icon })
                        ]),
                        _vm._v(" "),
                        _c("h6", { staticClass: "text-white" }, [
                          _vm._v(_vm._s(menu.title))
                        ])
                      ]
                    )
                  ])
                ])
              ],
              1
            )
          }),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12 mt-4" }, [
            _c("div", { staticClass: "card-nya" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-md-8" },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _vm.penjualan_products.length > 0
                      ? _c("line-chart", {
                          attrs: {
                            data: _vm.transaction_data,
                            options: _vm.chartOptions,
                            labels: _vm.labels
                          }
                        })
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "row justify-content-between" }, [
                    _c("div", { staticClass: "col-md-6 col-sm-6 col-6 mb-3" }, [
                      _c("div", { staticClass: "card card-hover" }, [
                        _c("div", { staticClass: "box text-center bg-dark" }, [
                          _vm._m(1),
                          _vm._v(" "),
                          _c("h6", { staticClass: "text-white mb-0" }, [
                            _vm._v(_vm._s(_vm.jumlah_mitra))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-white mt-0 mb-0" }, [
                            _vm._v("Jumlah Mitra")
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 col-sm-6 col-6" }, [
                      _c("div", { staticClass: "card card-hover" }, [
                        _c("div", { staticClass: "box text-center bg-dark" }, [
                          _vm._m(2),
                          _vm._v(" "),
                          _c("h6", { staticClass: "text-white mb-0" }, [
                            _vm._v(_vm._s(_vm.jumlah_packing))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-white mt-0 mb-0" }, [
                            _vm._v("Jumlah Packing")
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _vm._m(4)
                  ])
                ])
              ])
            ])
          ])
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-2" }, [
      _c("h6", [_c("i", [_vm._v("Penjualan Product Bulan ini")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "font-light text-white" }, [
      _c("i", { staticClass: "fa fa-user" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "font-light text-white" }, [
      _c("i", { staticClass: "fa fa-user" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6 col-sm-6 col-6" }, [
      _c("div", { staticClass: "card card-hover" }, [
        _c("div", { staticClass: "box text-center bg-dark" }, [
          _c("h5", { staticClass: "font-light text-white" }, [
            _c("i", { staticClass: "fa fa-user" })
          ]),
          _vm._v(" "),
          _c("h6", { staticClass: "text-white mb-0" }, [_vm._v("15")]),
          _vm._v(" "),
          _c("p", { staticClass: "text-white mt-0 mb-0" }, [
            _vm._v("Jumlah User")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6 col-sm-6 col-6" }, [
      _c("div", { staticClass: "card card-hover" }, [
        _c("div", { staticClass: "box text-center bg-dark" }, [
          _c("h5", { staticClass: "font-light text-white" }, [
            _c("i", { staticClass: "fa fa-user" })
          ]),
          _vm._v(" "),
          _c("h6", { staticClass: "text-white mb-0" }, [_vm._v("15")]),
          _vm._v(" "),
          _c("p", { staticClass: "text-white mt-0 mb-0" }, [
            _vm._v("Jumlah User")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/khusus/LineChart.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/khusus/LineChart.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChart.vue?vue&type=script&lang=js& */ "./resources/js/components/khusus/LineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/khusus/LineChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/khusus/LineChart.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/khusus/LineChart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LineChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/LineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/services/data_menu.js":
/*!********************************************!*\
  !*** ./resources/js/services/data_menu.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  no: 1,
  title: "Dashborad",
  icon: "fas fa-tachometer-alt",
  link: "dashboard",
  color_bg: "bg-cyan",
  colMd: "col-md-2 col-sm-4 col-6"
}, {
  no: 2,
  title: "Data Register",
  icon: "fas fa-registered",
  link: "register-list",
  color_bg: "bg-success",
  colMd: "col-md-2 col-sm-4 col-6"
}, {
  no: 3,
  title: "Data User",
  icon: "fas fa-users",
  link: "users-list",
  color_bg: "bg-primary",
  colMd: "col-md-4 col-sm-4 col-6"
}, {
  no: 4,
  title: "Data Mitra",
  icon: "fas fa-handshake",
  link: "mitra.data",
  color_bg: "bg-warning",
  colMd: "col-md-2 col-sm-4 col-6"
}, {
  no: 5,
  title: "Data Packing",
  icon: "fas fa-truck",
  link: "packing.data",
  color_bg: "bg-danger",
  colMd: "col-md-2 col-sm-4 col-6"
}, {
  no: 6,
  title: "Data Items",
  icon: "fas fa-archive",
  link: "data-items",
  color_bg: "bg-warning",
  colMd: "col-md-2 col-sm-4 col-6"
}, {
  no: 7,
  title: "Data Products",
  icon: "fas fa-tags",
  link: "products.data",
  color_bg: "bg-secondary",
  colMd: "col-md-4 col-sm-4 col-6"
}, {
  no: 8,
  title: "Data Bubuk",
  icon: "fas fa-award",
  link: "bubuk.data",
  color_bg: "bg-cyan",
  colMd: "col-md-2 col-sm-4 col-6"
}, {
  no: 9,
  title: "Orders",
  icon: "fas fa-shopping-cart",
  link: "orders.data",
  color_bg: "bg-primary",
  colMd: "col-md-2 col-sm-4 col-6"
}, {
  no: 10,
  title: "Pengeluaran Kas",
  icon: "fas fa-paper-plane",
  link: "transaksi.pengeluaran-kas",
  color_bg: "bg-secondary",
  colMd: "col-md-2 col-sm-4 col-6"
}, {
  no: 11,
  title: "Lap. Penj. Mitra",
  icon: "fas fa-book",
  link: "laporan-penjualan.mitra",
  color_bg: "bg-danger",
  colMd: "col-md-4 col-sm-4 col-6"
}, {
  no: 12,
  title: "Lap. Penj. Product",
  icon: "fas fa-book",
  link: "laporan-penjualan.admin",
  color_bg: "bg-success",
  colMd: "col-md-4 col-sm-4 col-6"
}, {
  no: 13,
  title: "Lap. Keuangan",
  icon: "fas fa-money-check",
  link: "laporan-keuangan.admin",
  color_bg: "bg-secondary",
  colMd: "col-md-4 col-sm-4 col-6"
}]);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true& */ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_1f79daf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=1f79daf6&lang=scss&scoped=true& */ "./resources/js/views/Dashboard.vue?vue&type=style&index=0&id=1f79daf6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f79daf6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=style&index=0&id=1f79daf6&lang=scss&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=style&index=0&id=1f79daf6&lang=scss&scoped=true& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_1f79daf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=1f79daf6&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&id=1f79daf6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_1f79daf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_1f79daf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_1f79daf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_1f79daf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_1f79daf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);