(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import {bus} from '../app';

/* harmony default export */ __webpack_exports__["default"] = ({
  // created() {
  //     //MAKA AKAN MENJALANKAN FUNGSI BERIKUT
  //     this.loadProfile()
  // },
  mounted: function mounted() {
    this.loadImage();
    this.loadProfile();
  },
  data: function data() {
    return {
      user: {},
      errors: [],
      displayImage: ''
    };
  },
  methods: {
    loadImage: function loadImage() {
      var image = this.$store.state.profile.image;

      if (image !== null) {
        return this.displayImage = "".concat(this.$store.state.serverPath, "/storage/").concat(image);
      }

      return this.displayImage = "".concat(this.$store.state.serverPath, "/storage/galleries_images/nouser.png");
    },
    attachImage: function () {
      var _attachImage = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var reader, formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.user.image = this.$refs.editAvatar.files[0];
                reader = new FileReader();
                reader.addEventListener("load", function () {
                  this.$refs.displayAvatarImage.src = reader.result;
                }.bind(this), false);
                reader.readAsDataURL(this.user.image);
                formData = new FormData();
                formData.append("image", this.user.image);
                formData.append('_method', 'put');
                _context.prev = 7;
                _context.next = 10;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["updateImage"](this.user.id, formData);

              case 10:
                response = _context.sent;
                this.flashMessage.success({
                  message: "Avatar has been updated successfully!",
                  time: 5000
                });
                this.user.image = response.data.image;
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](7);
                this.flashMessage.error({
                  message: _context.t0.response.data.message,
                  time: 5000
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 15]]);
      }));

      function attachImage() {
        return _attachImage.apply(this, arguments);
      }

      return attachImage;
    }(),
    // saveImage: async function(data) {
    // },
    loadProfile: function loadProfile() {
      var data = this.$store.state.profile;
      this.user = data;
      this.$store.state.errors;
    },
    togleUpdateForm: function () {
      var _togleUpdateForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["updateProfile"](this.user.id, this.user);

              case 3:
                response = _context2.sent;
                this.flashMessage.success({
                  message: "Profile Updated successfully!",
                  time: 5000
                });
                this.user.id = response.data.id, this.user.name = response.data.name, this.user.email = response.data.email, this.errors = [];
                _context2.next = 17;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 13 : 15;
                break;

              case 13:
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 17);

              case 15:
                this.flashMessage.error({
                  message: "Some error occured, Please Try Again!",
                  time: 5000
                });
                return _context2.abrupt("break", 17);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
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
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("div", { staticClass: "avatar-profile" }, [
                      _c("img", {
                        ref: "displayAvatarImage",
                        staticClass: "avatar-ku",
                        attrs: { src: _vm.displayImage, alt: "avatar" }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "edit-avatar" }, [
                        _c("input", {
                          ref: "editAvatar",
                          attrs: { type: "file", id: "image" },
                          on: { change: _vm.attachImage }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "image" } }, [
                          _vm._v(
                            " Change Avatar\n                                            "
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-8" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "tab-content",
                        attrs: { id: "myTabContent" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade show active",
                            attrs: {
                              id: "profile",
                              role: "tabpanel",
                              "aria-labelledby": "profile-tab"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "card",
                                staticStyle: { width: "80%" }
                              },
                              [
                                _c("div", { staticClass: "card-body" }, [
                                  _c(
                                    "h5",
                                    { staticClass: "card-title text-dark" },
                                    [_vm._v("Form Profile")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "h6",
                                    {
                                      staticClass:
                                        "card-subtitle mb-2 text-muted"
                                    },
                                    [_vm._v("Update informasi anda disini")]
                                  ),
                                  _vm._v(" "),
                                  _c("hr", { staticClass: "batas-dark" }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group-ku" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "lbl-form-ku text-dark",
                                        attrs: { for: "name" }
                                      },
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
                                          _vm.$set(
                                            _vm.user,
                                            "name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.name
                                      ? _c(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            _vm._v(
                                              "\n                                                    " +
                                                _vm._s(_vm.errors.name[0]) +
                                                "\n                                                "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group-ku" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "lbl-form-ku text-dark",
                                        attrs: { for: "email" }
                                      },
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
                                          _vm.$set(
                                            _vm.user,
                                            "email",
                                            $event.target.value
                                          )
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
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade",
                            attrs: {
                              id: "contact",
                              role: "tabpanel",
                              "aria-labelledby": "contact-tab"
                            }
                          },
                          [_vm._v("...")]
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
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
    return _c(
      "ul",
      { staticClass: "nav nav-tabs", attrs: { id: "myTab", role: "tablist" } },
      [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: {
                id: "profile-tab",
                "data-toggle": "tab",
                href: "#profile",
                role: "tab",
                "aria-controls": "profile",
                "aria-selected": "true"
              }
            },
            [_vm._v("Profile")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: {
                id: "contact-tab",
                "data-toggle": "tab",
                href: "#contact",
                role: "tab",
                "aria-controls": "contact",
                "aria-selected": "false"
              }
            },
            [_vm._v("Contact")]
          )
        ])
      ]
    )
  }
]
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