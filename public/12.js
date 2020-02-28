(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProfileUser.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProfileUser.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth_service */ "./resources/js/services/auth_service.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    //MAKA AKAN MENJALANKAN FUNGSI BERIKUT
    this.loadProfile();
  },
  data: function data() {
    return {
      user: {},
      errors: []
    };
  },
  methods: {
    loadProfile: function loadProfile() {
      var data = this.$store.state.profile;
      this.user = data;
      this.$store.state.errors;
    },
    togleUpdateForm: function () {
      var _togleUpdateForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["updateProfile"](this.user.id, this.user);

              case 3:
                response = _context.sent;
                this.flashMessage.success({
                  message: "Profile Updated successfully!",
                  time: 5000
                });
                this.user = {
                  name: response.data.name,
                  email: response.data.email
                };
                this.errors = [];
                _context.next = 18;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                _context.t1 = _context.t0.response.status;
                _context.next = _context.t1 === 422 ? 14 : 16;
                break;

              case 14:
                this.errors = _context.t0.response.data.errors;
                return _context.abrupt("break", 18);

              case 16:
                this.flashMessage.error({
                  message: "Some error occured, Please Try Again!",
                  time: 5000
                });
                return _context.abrupt("break", 18);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function togleUpdateForm(_x) {
        return _togleUpdateForm.apply(this, arguments);
      }

      return togleUpdateForm;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProfileUser.vue?vue&type=template&id=dd5f3a76&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProfileUser.vue?vue&type=template&id=dd5f3a76& ***!
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
  return _c("main", [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "content-dark mt-3" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("div", { staticClass: "avatar-profile" }, [
                      _c("img", {
                        staticClass: "avatar-ku",
                        attrs: {
                          src:
                            _vm.$store.state.serverPath +
                            "/storage/galleries_images/nouser.png",
                          alt: "avatar"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-8" }, [
                    _c("div", { staticClass: "form-group-ku" }, [
                      _c(
                        "label",
                        { staticClass: "lbl-form-ku", attrs: { for: "name" } },
                        [_vm._v("Nama")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.name,
                            expression: "user.name"
                          }
                        ],
                        staticClass: "form-control-customku",
                        attrs: {
                          type: "text",
                          id: "name",
                          placeholder: "Nama User"
                        },
                        domProps: { value: _vm.user.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "name", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.name
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                                            " +
                                _vm._s(_vm.errors.name[0]) +
                                "\n                                        "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group-ku" }, [
                      _c(
                        "label",
                        { staticClass: "lbl-form-ku", attrs: { for: "email" } },
                        [_vm._v("Email")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.email,
                            expression: "user.email"
                          }
                        ],
                        staticClass: "form-control-customku",
                        attrs: {
                          type: "text",
                          id: "email",
                          placeholder: "Email"
                        },
                        domProps: { value: _vm.user.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "email", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("hr", { staticClass: "batas-dark" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-right" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger btn-xsm",
                          attrs: { type: "submit" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.togleUpdateForm($event)
                            }
                          }
                        },
                        [_vm._v("Simpan Perubahan")]
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [_vm._v("isinya tabel")])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/ProfileUser.vue":
/*!********************************************!*\
  !*** ./resources/js/views/ProfileUser.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileUser_vue_vue_type_template_id_dd5f3a76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileUser.vue?vue&type=template&id=dd5f3a76& */ "./resources/js/views/ProfileUser.vue?vue&type=template&id=dd5f3a76&");
/* harmony import */ var _ProfileUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileUser.vue?vue&type=script&lang=js& */ "./resources/js/views/ProfileUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileUser_vue_vue_type_template_id_dd5f3a76___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileUser_vue_vue_type_template_id_dd5f3a76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ProfileUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ProfileUser.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/ProfileUser.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProfileUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ProfileUser.vue?vue&type=template&id=dd5f3a76&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/ProfileUser.vue?vue&type=template&id=dd5f3a76& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileUser_vue_vue_type_template_id_dd5f3a76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileUser.vue?vue&type=template&id=dd5f3a76& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProfileUser.vue?vue&type=template&id=dd5f3a76&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileUser_vue_vue_type_template_id_dd5f3a76___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileUser_vue_vue_type_template_id_dd5f3a76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);