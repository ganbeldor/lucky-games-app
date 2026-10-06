(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cambiar-password-cambiar-password-module"], {
    /***/
    "JDNl":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/cambiar-password/cambiar-password.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function JDNl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-icon {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhbWJpYXItcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJjYW1iaWFyLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "Mufl":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/cambiar-password/cambiar-password.page.ts ***!
      \*****************************************************************/

    /*! exports provided: CambiarPasswordPage */

    /***/
    function Mufl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CambiarPasswordPage", function () {
        return CambiarPasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cambiar_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cambiar-password.page.html */
      "o/NG");
      /* harmony import */


      var _cambiar_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cambiar-password.page.scss */
      "JDNl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/base.service */
      "Do2H");
      /* harmony import */


      var src_app_util_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/util/util */
      "JQC8");

      var CambiarPasswordPage = /*#__PURE__*/function () {
        function CambiarPasswordPage(bs, util) {
          _classCallCheck(this, CambiarPasswordPage);

          this.bs = bs;
          this.util = util;
          this.antigua_pass = '';
          this.nueva_pass = '';
          this.repetir_pass = '';
        }

        return _createClass(CambiarPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "isValid",
          value: function isValid() {
            return this.antigua_pass.trim() != '' && this.nueva_pass.trim() != '' && this.repetir_pass.trim() != '';
          }
        }, {
          key: "enviar",
          value: function enviar(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this = this;

              var _t;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.p = _context2.n) {
                  case 0:
                    _context2.p = 0;
                    _context2.n = 1;
                    return this.bs.put(this.bs.PASS_URL, {
                      antigua_pass: this.antigua_pass,
                      nueva_pass: this.nueva_pass,
                      repetir_pass: this.repetir_pass
                    }, true);

                  case 1:
                    this.antigua_pass = '';
                    this.nueva_pass = '';
                    this.repetir_pass = '';
                    setTimeout(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                        return _regenerator().w(function (_context) {
                          while (1) switch (_context.n) {
                            case 0:
                              _context.n = 1;
                              return this.util.presentAlert('Mensaje', 'Contraseña Actualizada.');

                            case 1:
                              return _context.a(2);
                          }
                        }, _callee, this);
                      }));
                    }, 100);
                    _context2.n = 3;
                    break;

                  case 2:
                    _context2.p = 2;
                    _t = _context2.v;
                    _context2.n = 3;
                    return this.util.handleError(_t);

                  case 3:
                    return _context2.a(2);
                }
              }, _callee2, this, [[0, 2]]);
            }));
          }
        }]);
      }();

      CambiarPasswordPage.ctorParameters = function () {
        return [{
          type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]
        }, {
          type: src_app_util_util__WEBPACK_IMPORTED_MODULE_5__["Util"]
        }];
      };

      CambiarPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cambiar-password',
        template: _raw_loader_cambiar_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cambiar_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CambiarPasswordPage);
      /***/
    },

    /***/
    "VX7/":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/cambiar-password/cambiar-password.module.ts ***!
      \*******************************************************************/

    /*! exports provided: CambiarPasswordPageModule */

    /***/
    function VX7_(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CambiarPasswordPageModule", function () {
        return CambiarPasswordPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _cambiar_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cambiar-password-routing.module */
      "fNqo");
      /* harmony import */


      var _cambiar_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cambiar-password.page */
      "Mufl");

      var CambiarPasswordPageModule = /*#__PURE__*/_createClass(function CambiarPasswordPageModule() {
        _classCallCheck(this, CambiarPasswordPageModule);
      });

      CambiarPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cambiar_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["CambiarPasswordPageRoutingModule"]],
        declarations: [_cambiar_password_page__WEBPACK_IMPORTED_MODULE_6__["CambiarPasswordPage"]]
      })], CambiarPasswordPageModule);
      /***/
    },

    /***/
    "fNqo":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/cambiar-password/cambiar-password-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: CambiarPasswordPageRoutingModule */

    /***/
    function fNqo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CambiarPasswordPageRoutingModule", function () {
        return CambiarPasswordPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _cambiar_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cambiar-password.page */
      "Mufl");

      var routes = [{
        path: '',
        component: _cambiar_password_page__WEBPACK_IMPORTED_MODULE_3__["CambiarPasswordPage"]
      }];

      var CambiarPasswordPageRoutingModule = /*#__PURE__*/_createClass(function CambiarPasswordPageRoutingModule() {
        _classCallCheck(this, CambiarPasswordPageRoutingModule);
      });

      CambiarPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CambiarPasswordPageRoutingModule);
      /***/
    },

    /***/
    "o/NG":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cambiar-password/cambiar-password.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function o_NG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color='light'>\n      <ion-buttons slot=\"start\">\n          <ion-back-button [text]='\"\"' defaultHref='/tabs/tab2'></ion-back-button>\n      </ion-buttons>\n      <ion-title class=\"center\">Cambiar Contraseña</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n  <ion-content class=\"ion-padding\">\n    <form #form='ngForm' (ngSubmit)='enviar(form)'>\n        <ion-item>\n            <ion-label position='floating'>Contraseña Antigüa</ion-label>\n            <ion-input name='nombre' type='password' [(ngModel)]='antigua_pass'></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position='floating'>Contraseña Nueva</ion-label>\n            <ion-input name='pass' type='password' [(ngModel)]='nueva_pass'></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position='floating'> Confirmar Nueva Contraseña</ion-label>\n          <ion-input name='pass2' type='password' [(ngModel)]='repetir_pass'></ion-input>\n      </ion-item>\n        <ion-button [disabled]='!isValid()' color='primary' style=\"display: block; margin-top: 20px;\" type='submit'>Actualizar\n            <ion-icon name=\"save\"></ion-icon>\n        </ion-button>\n    </form>\n</ion-content>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cambiar-password-cambiar-password-module-es5.js.map