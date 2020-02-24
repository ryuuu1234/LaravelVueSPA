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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var expenses = [{
      'id': 1,
      'first_name': 'Jesse',
      'last_name': 'Simmons',
      'date': '2016-10-15 13:43:27',
      'gender': 'Male',
      'value': 100
    }, {
      'id': 2,
      'first_name': 'John',
      'last_name': 'Jacobs',
      'date': '2016-12-15 06:00:53',
      'gender': 'Male',
      'value': 100
    }, {
      'id': 3,
      'first_name': 'Tina',
      'last_name': 'Gilbert',
      'date': '2016-04-26 06:26:28',
      'gender': 'Female',
      'value': 100
    }, {
      'id': 4,
      'first_name': 'Clarence',
      'last_name': 'Flores',
      'date': '2016-04-10 10:28:46',
      'gender': 'Male',
      'value': 100
    }, {
      'id': 5,
      'first_name': 'Anne',
      'last_name': 'Lee',
      'date': '2016-12-06 14:38:38',
      'gender': 'Female',
      'value': 100
    }];
    return {
      expenses: expenses,
      copyOfExpenses: [],
      checkedRows: [],
      columns: [{
        field: 'id',
        label: 'ID',
        width: '40',
        numeric: true
      }, {
        field: 'first_name',
        label: 'First Name'
      }, {
        field: 'last_name',
        label: 'Last Name'
      }, {
        field: 'date',
        label: 'Date',
        centered: true
      }, {
        field: 'gender',
        label: 'Gender'
      }, {
        field: 'value',
        label: 'Value'
      }]
    };
  },
  methods: {
    toggleValue: function toggleValue() {
      for (var i = 0; i < this.copyOfExpenses.length; i++) {
        var found = false;

        for (var j = 0; j < this.checkedRows.length; j++) {
          if (this.copyOfExpenses[i].id === this.checkedRows[j].id) {
            this.copyOfExpenses[i].value = 0;
            found = true;
            break;
          }
        }

        if (!found) {
          this.copyOfExpenses[i].value = this.expenses[i].value;
        }
      }
    }
  },
  // mounted () {
  //   this.copyOfExpenses = _.cloneDeep(this.expenses) 
  // },
  watch: {
    checkedRows: function checkedRows() {
      this.toggleValue();
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
        "button",
        {
          staticClass: "button field is-danger",
          attrs: { disabled: !_vm.checkedRows.length },
          on: {
            click: function($event) {
              _vm.checkedRows = []
            }
          }
        },
        [
          _c("b-icon", { attrs: { icon: "close" } }),
          _vm._v(" "),
          _c("span", [_vm._v("Clear checked")])
        ],
        1
      ),
      _vm._v(" "),
      _c("b-table", {
        attrs: {
          striped: "",
          hover: "",
          small: "",
          data: _vm.copyOfExpenses,
          columns: _vm.columns,
          "checked-rows": _vm.checkedRows,
          "is-row-checkable": function(row) {
            return row.id !== 3
          },
          checkable: ""
        },
        on: {
          "update:checkedRows": function($event) {
            _vm.checkedRows = $event
          },
          "update:checked-rows": function($event) {
            _vm.checkedRows = $event
          }
        }
      })
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