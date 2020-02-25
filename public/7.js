(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Percobaan.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Percobaan.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
//
//
//
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
      modes: ['multi', 'single', 'range'],
      fields: [{
        key: 'index',
        label: 'index'
      }, {
        key: 'isActive'
      }, {
        key: 'age'
      }, {
        key: 'first_name'
      }, {
        key: 'last_name'
      }],
      items: [{
        isActive: true,
        age: 40,
        first_name: 'Dickerson',
        last_name: 'Macdonald'
      }, {
        isActive: false,
        age: 21,
        first_name: 'Larsen',
        last_name: 'Shaw'
      }, {
        isActive: false,
        age: 89,
        first_name: 'Geneva',
        last_name: 'Wilson'
      }, {
        isActive: true,
        age: 38,
        first_name: 'Jami',
        last_name: 'Carney'
      }],
      selectMode: 'multi',
      selectedItems: []
    };
  },
  methods: {
    selectAllRows: function selectAllRows() {
      if (this.selectedItems.length === this.items.length) {
        this.selectedItems = [];
      } else {
        this.selectedItems = this.items.slice();
      }
    },
    clearSelected: function clearSelected() {},
    hapusYgTerpilih: function hapusYgTerpilih(item) {
      // Rows are indexed from 0, so the third row is index 2
      item = this.selectedItems.map(function (val) {
        return val.age;
      });
      this.selectedItems = item;
      console.log(item);
    },
    unselectThirdRow: function unselectThirdRow() {// Rows are indexed from 0, so the third row is index 2
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Percobaan.vue?vue&type=template&id=076ef1e6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Percobaan.vue?vue&type=template&id=076ef1e6& ***!
  \*******************************************************************************************************************************************************************************************************/
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
      _c(
        "b-form-group",
        { attrs: { label: "Selection mode:", "label-cols-md": "4" } },
        [
          _c("b-form-select", {
            staticClass: "mb-3",
            attrs: { options: _vm.modes },
            model: {
              value: _vm.selectMode,
              callback: function($$v) {
                _vm.selectMode = $$v
              },
              expression: "selectMode"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("b-table", {
        attrs: { items: _vm.items, fields: _vm.fields, responsive: "sm" },
        scopedSlots: _vm._u([
          {
            key: "head(index)",
            fn: function() {
              return [
                _c("b-form-checkbox", {
                  attrs: {
                    name: "checkbox-validation",
                    checked: _vm.selectedItems.length === _vm.items.length
                  },
                  on: { change: _vm.selectAllRows }
                })
              ]
            },
            proxy: true
          },
          {
            key: "cell(index)",
            fn: function(row) {
              return [
                _c("b-form-checkbox", {
                  attrs: { name: "selected-items", value: row.item },
                  model: {
                    value: _vm.selectedItems,
                    callback: function($$v) {
                      _vm.selectedItems = $$v
                    },
                    expression: "selectedItems"
                  }
                })
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "p",
        [
          _c(
            "b-button",
            { attrs: { size: "sm" }, on: { click: _vm.selectAllRows } },
            [_vm._v("Select all")]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            { attrs: { size: "sm" }, on: { click: _vm.clearSelected } },
            [_vm._v("Clear selected")]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            { attrs: { size: "sm" }, on: { click: _vm.hapusYgTerpilih } },
            [_vm._v("hapus yg terpilih")]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            { attrs: { size: "sm" }, on: { click: _vm.unselectThirdRow } },
            [_vm._v("Unselect 3rd row")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("p", [
        _vm._v("\n    Selected Rows:"),
        _c("br"),
        _vm._v("\n    " + _vm._s(_vm.selectedItems) + "\n  ")
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Percobaan.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Percobaan.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Percobaan_vue_vue_type_template_id_076ef1e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Percobaan.vue?vue&type=template&id=076ef1e6& */ "./resources/js/views/Percobaan.vue?vue&type=template&id=076ef1e6&");
/* harmony import */ var _Percobaan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Percobaan.vue?vue&type=script&lang=js& */ "./resources/js/views/Percobaan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Percobaan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Percobaan_vue_vue_type_template_id_076ef1e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Percobaan_vue_vue_type_template_id_076ef1e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Percobaan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Percobaan.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Percobaan.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Percobaan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Percobaan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Percobaan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Percobaan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Percobaan.vue?vue&type=template&id=076ef1e6&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Percobaan.vue?vue&type=template&id=076ef1e6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Percobaan_vue_vue_type_template_id_076ef1e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Percobaan.vue?vue&type=template&id=076ef1e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Percobaan.vue?vue&type=template&id=076ef1e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Percobaan_vue_vue_type_template_id_076ef1e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Percobaan_vue_vue_type_template_id_076ef1e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);