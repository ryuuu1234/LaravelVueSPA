(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
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
  // props:['items', 'filterby'],
  props: {
    items: {
      type: Array,
      "default": []
    },
    filterby: {
      type: String
    } // placeholder: {
    //     type:String,
    //     default: "Search Item"
    // }

  },
  data: function data() {
    return {
      itemHeight: 29,
      item: '',
      modal: false,
      filteredItems: [],
      selectedItem: null,
      selected: 0
    };
  },
  // computed: {
  //     filteredItems(){
  //         if (this.item == '') {
  //             return [];
  //         }
  //         return this.items.filter((val) => val[this.filterby].toLowerCase().startsWith(this.item.toLowerCase()));
  //     },
  // },
  methods: {
    filterItems: function filterItems(newInputValue) {
      var _this = this;

      this.$emit('changeValue', newInputValue);
      this.modal = true;
      this.selected = 0;

      if (this.item == '') {
        this.filteredItems = [];
        this.modal = false;
      } // memfilter items pada inputan model item tanpa case sensitive


      this.filteredItems = this.items.filter(function (val) {
        return val[_this.filterby].toLowerCase().startsWith(_this.item.toLowerCase());
      });
    },
    setItem: function setItem(index) {
      this.selected = index;
      this.selectItem();
    },
    selectItem: function selectItem() {
      this.selectedItem = this.filteredItems[this.selected];
      this.item = this.selectedItem[this.filterby];
      this.modal = false;
      this.$emit('selected', JSON.parse(JSON.stringify(this.selectedItem)));
      this.$emit('change', JSON.parse(JSON.stringify(this.selectedItem)));
    },
    up: function up() {
      if (this.selected == 0) {
        return;
      }

      this.selected -= 1;
      this.scrolToItem();
    },
    down: function down() {
      if (this.selected >= this.filteredItems.length - 1) {
        return;
      }

      this.selected += 1;
      this.scrolToItem();
    },
    scrolToItem: function scrolToItem() {
      this.$refs.optionsList.scrollTop = this.selected * this.itemHeight;
    }
  } // watch: {
  //     item(){
  //         this.filterItems();
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Details.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/products/Details.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_khusus_AutocompleteTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/khusus/AutocompleteTwo */ "./resources/js/components/khusus/AutocompleteTwo.vue");
/* harmony import */ var _services_lists_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/lists.js */ "./resources/js/services/lists.js");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/items_service */ "./resources/js/services/items_service.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product_service */ "./resources/js/services/product_service.js");


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
// ini percobaan component
// import Autocomplete from '../../components/khusus/Autocomplete';




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Autocomplete: _components_khusus_AutocompleteTwo__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    //MAKA AKAN MENJALANKAN FUNGSI BERIKUT
    this.loadItemsData();
    this.getDetailsById(this.$route.params.id); // this.handleLoading(true)
  },
  // mounted(){
  //     this.items = customers;
  // },
  data: function data() {
    return {
      // invoice_subtotal: 0,
      // invoice_total: 0,
      // invoice_tax: 5,
      // invoice_products: [{
      //     product_no: '',
      //     product_name: '',
      //     product_price: '',
      //     product_qty: '',
      //     line_total: 0
      // }],
      // items:[],
      // filterby: '',
      items: [],
      product_items: [{
        item_id: '',
        nama: '',
        harga: 0,
        qty: 1,
        subtotal: 0,
        editing: false
      }],
      total_product: 0,
      product_item: {}
    };
  },
  methods: {
    selectedItem: function selectedItem(item) {
      // console.log(`Item Selected:\nid: ${item.id}\nname: ${item.name}`);
      console.log(item);
      this.product_items.harga = item.harga_beli;
      this.product_items.item_id = item.id;
      this.product_items.nama = item.nama; // console.log(this.harga);
      // this.product_item.harga = harga;
    },
    onChange: function onChange(row) {
      // do something with the current value
      // console.log(row.harga)
      row.item_id = this.product_items.item_id;
      row.harga = this.product_items.harga; // merubah subtotal juga

      var subtotal = this.product_items.harga * row.qty;
      row.subtotal = subtotal;
      row.nama = this.product_items.nama; // if (row.editing == false) {
      //     this.addNewData(row);
      // }
      // console.log(row.qty)
    },
    addNewData: function () {
      var _addNewData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(row) {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formData = new FormData();
                formData.append("item_id", row.item_id);
                formData.append("harga", row.harga);
                formData.append("qty", row.qty);
                _context.prev = 4;
                _context.next = 7;
                return _services_product_service__WEBPACK_IMPORTED_MODULE_4__["addDetailItem"](this.$route.params.id, formData);

              case 7:
                response = _context.sent;
                _context.next = 19;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](4);
                _context.t1 = _context.t0.response.status;
                _context.next = _context.t1 === 422 ? 15 : 17;
                break;

              case 15:
                this.errors = _context.t0.response.data.errors;
                return _context.abrupt("break", 19);

              case 17:
                this.flashMessage.error({
                  message: "Some error occured, Please Try Again!",
                  time: 5000
                });
                return _context.abrupt("break", 19);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 10]]);
      }));

      function addNewData(_x) {
        return _addNewData.apply(this, arguments);
      }

      return addNewData;
    }(),
    getDetailsById: function () {
      var _getDetailsById = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
        var response, getData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_product_service__WEBPACK_IMPORTED_MODULE_4__["getProductById"](id);

              case 3:
                response = _context2.sent;
                getData = response.data.data[0].detail_items; // console.log(getData)

                if (getData.length !== 0) {
                  this.product_items = getData; //MAKA ASSIGN DATA POSTINGAN KE DALAM VARIABLE ITEMS
                } // console.log(this.units)
                // console.log(this.items[0].nama);
                //DAN ASSIGN INFORMASI LAINNYA KE DALAM VARIABLE META


                _context2.next = 12;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.log('' + _context2.t0);
                this.flashMessage.error({
                  message: "Some error occured, Please Refresh!",
                  time: 5000
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function getDetailsById(_x2) {
        return _getDetailsById.apply(this, arguments);
      }

      return getDetailsById;
    }(),
    //METHOD INI AKAN MENGHANDLE REQUEST DATA KE API
    loadItemsData: function () {
      var _loadItemsData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response, getData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_items_service__WEBPACK_IMPORTED_MODULE_3__["getData"]();

              case 3:
                response = _context3.sent;
                getData = response.data.data; // console.log(getData)

                this.items = getData; //MAKA ASSIGN DATA POSTINGAN KE DALAM VARIABLE ITEMS
                // console.log(this.units)
                // console.log(this.items[0].nama);
                //DAN ASSIGN INFORMASI LAINNYA KE DALAM VARIABLE META

                _context3.next = 13;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                console.log('' + _context3.t0);
                this.flashMessage.error({
                  message: "Some error occured, Please Refresh!",
                  time: 5000
                });
                this.showLoading = false;

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8]]);
      }));

      function loadItemsData() {
        return _loadItemsData.apply(this, arguments);
      }

      return loadItemsData;
    }(),
    saveData: function saveData() {// console.log(JSON.stringify(this.product_items));
    },
    // calculateTotal() {
    //     var subtotal, total;
    //     subtotal = this.invoice_products.reduce(function (sum, product) {
    //         var lineTotal = parseFloat(product.line_total);
    //         if (!isNaN(lineTotal)) {
    //             return sum + lineTotal;
    //         }
    //     }, 0);
    //     this.invoice_subtotal = subtotal.toFixed(2);
    //     total = (subtotal * (this.invoice_tax / 100)) + subtotal;
    //     total = parseFloat(total);
    //     if (!isNaN(total)) {
    //         this.invoice_total = total.toFixed(2);
    //     } else {
    //         this.invoice_total = '0.00'
    //     }
    // },
    calculateLineTotal: function calculateLineTotal(product_item) {
      var total = parseInt(product_item.harga) * parseInt(product_item.qty);

      if (!isNaN(total)) {
        product_item.subtotal = total;
      } // this.calculateTotal();

    },
    deleteRow: function deleteRow(index, product_item) {
      var idx = this.product_items.indexOf(product_item);
      console.log(idx, index);

      if (idx > -1) {
        this.product_items.splice(idx, 1);
      } // this.calculateTotal();

    },
    addNewRow: function addNewRow() {
      this.product_items.push({
        harga: 0,
        qty: 1,
        subtotal: 0
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=style&index=0&id=b28ec68e&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=style&index=0&id=b28ec68e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pembungkus-dropdown[data-v-b28ec68e] {\n    max-height: 120px;\n    overflow-y: scroll;\n    border-bottom: 1px solid lightgrey;\n    border-radius: 3px;\n}\nul.drop-autocomplete[data-v-b28ec68e] {\n    border: 1px solid lightgrey;\n    border-radius: 3px;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\nli.list-autocomplete[data-v-b28ec68e] {\n    padding: 5px 12px;\n}\nli.list-autocomplete[data-v-b28ec68e]:hover, \nli.list-autocomplete[data-v-b28ec68e]:focus {\n    background: lightgrey;\n    color: black;\n    cursor:pointer;\n}\nli.list-autocomplete.selected[data-v-b28ec68e] {\n    background: #343a40;\n    color: white;\n}\n.click-out[data-v-b28ec68e] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 1;\n    /* background: red; */\n}\n.indx[data-v-b28ec68e] {\n    z-index: 10;\n    position: relative;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Details.vue?vue&type=style&index=0&id=309239f6&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/products/Details.vue?vue&type=style&index=0&id=309239f6&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.indx[data-v-309239f6] {\r\n        z-index: 10;\r\n        position: relative;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=style&index=0&id=b28ec68e&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=style&index=0&id=b28ec68e&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AutocompleteTwo.vue?vue&type=style&index=0&id=b28ec68e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=style&index=0&id=b28ec68e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Details.vue?vue&type=style&index=0&id=309239f6&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/products/Details.vue?vue&type=style&index=0&id=309239f6&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=style&index=0&id=309239f6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Details.vue?vue&type=style&index=0&id=309239f6&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=template&id=b28ec68e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=template&id=b28ec68e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    _c("div", {
      staticClass: "click-out",
      on: {
        click: function($event) {
          _vm.modal = false
        }
      }
    }),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.item,
          expression: "item"
        }
      ],
      staticClass: "form-control indx",
      attrs: { type: "text", placeholder: "Search Item .." },
      domProps: { value: _vm.item },
      on: {
        focus: function($event) {
          _vm.modal = true
        },
        input: [
          function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.item = $event.target.value
          },
          _vm.filterItems
        ],
        keydown: [
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])
            ) {
              return null
            }
            return _vm.up($event)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "down", 40, $event.key, [
                "Down",
                "ArrowDown"
              ])
            ) {
              return null
            }
            return _vm.down($event)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return _vm.selectItem($event)
          }
        ]
      }
    }),
    _vm._v(" "),
    _vm.filteredItems && _vm.modal
      ? _c(
          "div",
          { ref: "optionsList", staticClass: "pembungkus-dropdown indx" },
          [
            _c(
              "ul",
              { staticClass: "drop-autocomplete" },
              _vm._l(_vm.filteredItems, function(filteredItem, index) {
                return _c("li", {
                  key: index,
                  staticClass: "list-autocomplete",
                  class: { selected: _vm.selected == index },
                  domProps: { textContent: _vm._s(filteredItem[_vm.filterby]) },
                  on: {
                    click: function($event) {
                      return _vm.setItem(index)
                    }
                  }
                })
              }),
              0
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Details.vue?vue&type=template&id=309239f6&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/products/Details.vue?vue&type=template&id=309239f6&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
          _c("div", [
            _c("table", { staticClass: "table table-responsive" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.product_items, function(product_item, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: product_item.item_id,
                            expression: "product_item.item_id"
                          }
                        ],
                        attrs: { type: "hidden" },
                        domProps: { value: product_item.item_id },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              product_item,
                              "item_id",
                              $event.target.value
                            )
                          }
                        }
                      }),
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
                          staticClass: "btn btn-danger btn-sm indx",
                          attrs: { title: "Hapus Data" },
                          on: {
                            click: function($event) {
                              return _vm.deleteRow(index, product_item)
                            }
                          }
                        },
                        [_c("span", { staticClass: "fa fa-trash" })]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c("Autocomplete", {
                          attrs: { items: _vm.items, filterby: "nama" },
                          on: {
                            selected: _vm.selectedItem,
                            change: function($event) {
                              return _vm.onChange(product_item)
                            }
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: product_item.nama,
                            expression: "product_item.nama"
                          }
                        ],
                        staticClass: "form-control indx",
                        attrs: { readonly: "", type: "text" },
                        domProps: { value: product_item.nama },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(product_item, "nama", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: product_item.harga,
                            expression: "product_item.harga"
                          }
                        ],
                        staticClass: "form-control indx",
                        attrs: { type: "text" },
                        domProps: { value: product_item.harga },
                        on: {
                          change: function($event) {
                            return _vm.calculateLineTotal(product_item)
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(product_item, "harga", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: product_item.qty,
                            expression: "product_item.qty"
                          }
                        ],
                        staticClass: "form-control indx",
                        attrs: { type: "number" },
                        domProps: { value: product_item.qty },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(product_item, "qty", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: product_item.subtotal,
                            expression: "product_item.subtotal"
                          }
                        ],
                        staticClass: "form-control text-right",
                        attrs: { readonly: "", type: "text" },
                        domProps: { value: product_item.subtotal },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              product_item,
                              "subtotal",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                }),
                0
              ),
              _vm._v(" "),
              _c("tfoot", [
                _c("tr", [
                  _c("td", { attrs: { colspan: "5" } }, [_vm._v("xxxx")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.total_product,
                          expression: "total_product"
                        }
                      ],
                      staticClass: "form-control text-right",
                      attrs: { readonly: "", type: "text" },
                      domProps: { value: _vm.total_product },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.total_product = $event.target.value
                        }
                      }
                    })
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-info indx",
                attrs: { type: "button" },
                on: { click: _vm.addNewRow }
              },
              [
                _c("i", { staticClass: "fas fa-plus-circle" }),
                _vm._v("\n                        Add\n                    ")
              ]
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
              staticClass: "btn btn-danger btn-xsm indx",
              attrs: { type: "submit" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.saveData($event)
                }
              }
            },
            [_vm._v("Save Data")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-dark btn-xsm indx",
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cari Item")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nama Item")]),
        _vm._v(" "),
        _c("th", [_vm._v("Harga")]),
        _vm._v(" "),
        _c("th", [_vm._v("Qty")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Subtotal")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/khusus/AutocompleteTwo.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/khusus/AutocompleteTwo.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutocompleteTwo_vue_vue_type_template_id_b28ec68e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutocompleteTwo.vue?vue&type=template&id=b28ec68e&scoped=true& */ "./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=template&id=b28ec68e&scoped=true&");
/* harmony import */ var _AutocompleteTwo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutocompleteTwo.vue?vue&type=script&lang=js& */ "./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteTwo_vue_vue_type_style_index_0_id_b28ec68e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutocompleteTwo.vue?vue&type=style&index=0&id=b28ec68e&scoped=true&lang=css& */ "./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=style&index=0&id=b28ec68e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AutocompleteTwo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AutocompleteTwo_vue_vue_type_template_id_b28ec68e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AutocompleteTwo_vue_vue_type_template_id_b28ec68e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b28ec68e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/khusus/AutocompleteTwo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutocompleteTwo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AutocompleteTwo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutocompleteTwo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=style&index=0&id=b28ec68e&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=style&index=0&id=b28ec68e&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutocompleteTwo_vue_vue_type_style_index_0_id_b28ec68e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AutocompleteTwo.vue?vue&type=style&index=0&id=b28ec68e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=style&index=0&id=b28ec68e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutocompleteTwo_vue_vue_type_style_index_0_id_b28ec68e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutocompleteTwo_vue_vue_type_style_index_0_id_b28ec68e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutocompleteTwo_vue_vue_type_style_index_0_id_b28ec68e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutocompleteTwo_vue_vue_type_style_index_0_id_b28ec68e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutocompleteTwo_vue_vue_type_style_index_0_id_b28ec68e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=template&id=b28ec68e&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=template&id=b28ec68e&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutocompleteTwo_vue_vue_type_template_id_b28ec68e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AutocompleteTwo.vue?vue&type=template&id=b28ec68e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/khusus/AutocompleteTwo.vue?vue&type=template&id=b28ec68e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutocompleteTwo_vue_vue_type_template_id_b28ec68e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutocompleteTwo_vue_vue_type_template_id_b28ec68e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/items_service.js":
/*!************************************************!*\
  !*** ./resources/js/services/items_service.js ***!
  \************************************************/
/*! exports provided: createItem, loadData, getData, deleteItem, deleteAllSelected, updateItem, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createItem", function() { return createItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadData", function() { return loadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
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
function getData() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('user/items-data'); //ini diambil  dari Route items laravel nama routenya ('api/(prefix=user)/items)...karena sdh di definisikan di store maka tgl ('/items)
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

/***/ "./resources/js/services/lists.js":
/*!****************************************!*\
  !*** ./resources/js/services/lists.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 1,
  name: 'Mark Smith'
}, {
  id: 2,
  name: 'Josh Groben'
}, {
  id: 3,
  name: 'Marry Daniels'
}, {
  id: 4,
  name: 'Joshua Bark'
}, {
  id: 5,
  name: 'David Ferry'
}, {
  id: 6,
  name: 'Jonny Cage'
}, {
  id: 7,
  name: 'Abraham Lincoln'
}, {
  id: 8,
  name: 'Nathan Abramov'
}, {
  id: 9,
  name: 'Martin Luther'
}, {
  id: 10,
  name: 'King Davis'
}, {
  id: 11,
  name: 'Samuel Jackson'
}, {
  id: 12,
  name: 'Terry Roberts'
}, {
  id: 13,
  name: 'Rob Taylor'
}, {
  id: 14,
  name: 'Jack Kuba'
}, {
  id: 15,
  name: 'Anny Shultz'
}, {
  id: 16,
  name: 'Stephan Nord'
}, {
  id: 17,
  name: 'Danny Marks'
}, {
  id: 18,
  name: 'Roger Roberts'
}, {
  id: 19,
  name: 'George Michael'
}, {
  id: 20,
  name: 'Gerrard Nate'
}, {
  id: 21,
  name: 'Mama Nate'
}, {
  id: 22,
  name: 'Mami Nate'
}, {
  id: 23,
  name: 'Mom of Nate'
}]);

/***/ }),

/***/ "./resources/js/services/product_service.js":
/*!**************************************************!*\
  !*** ./resources/js/services/product_service.js ***!
  \**************************************************/
/*! exports provided: createItem, loadData, deleteItem, deleteAllSelected, updateItem, loadMore, getProductById, addDetailItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createItem", function() { return createItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadData", function() { return loadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAllSelected", function() { return deleteAllSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductById", function() { return getProductById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDetailItem", function() { return addDetailItem; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createItem(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('user/products', data); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/products)...karena sdh di definisikan di store maka tgl ('/products)
}
function loadData(params) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('user/products', params); //ini diambil  dari Route products laravel nama routenya ('api/(prefix=user)/products)...karena sdh di definisikan di store maka tgl ('/products)
}
function deleteItem(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("user/products/".concat(id)); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/products)...karena sdh di definisikan di store maka tgl ('/products)
}
function deleteAllSelected(params) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('user/products/delete', params); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/products/delete)...karena sdh di definisikan di store maka tgl ('/products)
}
function updateItem(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("user/products/".concat(id), data); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/products)...karena sdh di definisikan di store maka tgl ('/products)
}
function loadMore(page) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("user/products?page=".concat(page)); //
} // ini baru

function getProductById(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("user/products/".concat(id, "/edit"));
}
function addDetailItem(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("user/products-add-item/".concat(id), data); //ini diambil  dari Route item laravel nama routenya ('api/(prefix=user)/products)...karena sdh di definisikan di store maka tgl ('/products)
}

/***/ }),

/***/ "./resources/js/views/products/Details.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/products/Details.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Details_vue_vue_type_template_id_309239f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details.vue?vue&type=template&id=309239f6&scoped=true& */ "./resources/js/views/products/Details.vue?vue&type=template&id=309239f6&scoped=true&");
/* harmony import */ var _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.vue?vue&type=script&lang=js& */ "./resources/js/views/products/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Details_vue_vue_type_style_index_0_id_309239f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Details.vue?vue&type=style&index=0&id=309239f6&scoped=true&lang=css& */ "./resources/js/views/products/Details.vue?vue&type=style&index=0&id=309239f6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Details_vue_vue_type_template_id_309239f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Details_vue_vue_type_template_id_309239f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "309239f6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/products/Details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/products/Details.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/products/Details.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/products/Details.vue?vue&type=style&index=0&id=309239f6&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/products/Details.vue?vue&type=style&index=0&id=309239f6&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_309239f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=style&index=0&id=309239f6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Details.vue?vue&type=style&index=0&id=309239f6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_309239f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_309239f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_309239f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_309239f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_309239f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/products/Details.vue?vue&type=template&id=309239f6&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/products/Details.vue?vue&type=template&id=309239f6&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_309239f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=template&id=309239f6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Details.vue?vue&type=template&id=309239f6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_309239f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_309239f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);