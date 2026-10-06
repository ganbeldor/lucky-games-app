(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
    /***/
    "EGAO":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function EGAO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-list-header {\n  padding-left: 0;\n}\nion-list-header ion-label {\n  font-size: 1.1rem;\n  color: #6c6c6c;\n  font-weight: bold;\n}\nion-button {\n  margin: 20px 0;\n}\n.card-saldo {\n  background-color: #01173b;\n  color: #FFF;\n  height: 128px;\n  max-width: 300px;\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px;\n  text-align: center;\n  font-size: 32px;\n  font-weight: bold;\n}\n.cero-balance {\n  color: #a10606;\n}\n.poco-balance {\n  color: #ffa600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKO0FBQUk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVSO0FBRUE7RUFDSSxjQUFBO0FBQ0o7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFFQTtFQUNJLGNBQUE7QUFDSjtBQUVBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGNvbG9yOiAjNmM2YzZjO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbmlvbi1idXR0b24ge1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuXG4uY2FyZC1zYWxkbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTczYjtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBoZWlnaHQ6IDEyOHB4O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2Vyby1iYWxhbmNlIHtcbiAgICBjb2xvcjogcmdiKDE2MSwgNiwgNik7XG59XG5cbi5wb2NvLWJhbGFuY2Uge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAxNjYsIDApO1xufVxuIl19 */";
      /***/
    },

    /***/
    "JZ9U":
    /*!***********************************!*\
      !*** ./src/app/tab2/tab2.page.ts ***!
      \***********************************/

    /*! exports provided: Tab2Page */

    /***/
    function JZ9U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
        return Tab2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "e9nj");
      /* harmony import */


      var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab2.page.scss */
      "EGAO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../environments/environment.prod */
      "cxbk");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "wljF");
      /* harmony import */


      var _services_base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/base.service */
      "Do2H");
      /* harmony import */


      var _classes_classes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../classes/classes */
      "50N5");

      var Tab2Page = /*#__PURE__*/function () {
        function Tab2Page(navCtrl, storage, loadCtrl, oneSignal, baseService) {
          _classCallCheck(this, Tab2Page);

          this.navCtrl = navCtrl;
          this.storage = storage;
          this.loadCtrl = loadCtrl;
          this.oneSignal = oneSignal;
          this.baseService = baseService;
          this.VERSION = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].APP_VERSION;
          this.empleado = new _classes_classes__WEBPACK_IMPORTED_MODULE_9__["Empleado"]();
        }

        return _createClass(Tab2Page, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            // throw new Error('Method not implemented.');
            this.baseService.getEmpleado(true).then(function (d) {
              _this.empleado = new _classes_classes__WEBPACK_IMPORTED_MODULE_9__["Empleado"](d);
            });
          }
        }, {
          key: "logout",
          value: function logout(evt) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var loading;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.storage.remove('token');

                  case 1:
                    _context.n = 2;
                    return this.loadCtrl.create({
                      message: 'Cerrando sesión...',
                      duration: 1500
                    });

                  case 2:
                    loading = _context.v;
                    _context.n = 3;
                    return loading.present();

                  case 3:
                    _context.n = 4;
                    return loading.onDidDismiss();

                  case 4:
                    this.navCtrl.navigateRoot('/login');
                    this.oneSignal.removeExternalUserId;

                  case 5:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }]);
      }();

      Tab2Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"]
        }, {
          type: _services_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"]
        }];
      };

      Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab2Page);
      /***/
    },

    /***/
    "TUkU":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.module.ts ***!
      \*************************************/

    /*! exports provided: Tab2PageModule */

    /***/
    function TUkU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
        return Tab2PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab2.page */
      "JZ9U");

      var Tab2PageModule = /*#__PURE__*/_createClass(function Tab2PageModule() {
        _classCallCheck(this, Tab2PageModule);
      });

      Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
        }])],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
      })], Tab2PageModule);
      /***/
    },

    /***/
    "e9nj":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function e9nj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color='light'>\n        <ion-title class=\"ion-text-center\">\n            Menú\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <!-- <ion-item>\n    <p>Usuario</p>\n    <p slot=\"end\">Test</p>\n  </ion-item> -->\n\n    <ion-list>\n        <ng-container *ngIf=\"empleado.usuario.saldo != null\">\n            <ion-list-header>\n                <ion-label>Saldo para vender</ion-label>\n            </ion-list-header>\n            <div class=\"card-saldo\"\n                [ngClass]=\"{\n                    'poco-balance': empleado.usuario.saldo >= 1 && empleado.usuario.saldo < 100,\n                    'cero-balance': empleado.usuario.saldo <= 0\n                }\"\n            >\n                {{empleado.usuario.saldo | currency: 'C$ ' : 'symbol' : '1.0'}}\n            </div>\n        </ng-container>\n        <ion-list-header>\n            <ion-label>Configuración de la cuenta</ion-label>\n        </ion-list-header>\n\n        <ion-item detail routerLink='/perfil'>\n            <ion-avatar slot=\"start\">\n                <img src=\"assets/img/user.png\" alt=\"\">\n            </ion-avatar>\n            <ion-label>Perfil</ion-label>\n        </ion-item>\n\n        <ion-item detail routerLink='/cambiar-password'>\n            <ion-avatar slot=\"start\">\n                <img src=\"assets/img/password.png\" alt=\"\">\n            </ion-avatar>\n            <ion-label>Cambiar contraseña</ion-label>\n        </ion-item>\n\n\n        <ion-item disabled='true'>\n            <ion-avatar slot=\"start\">\n                <img src=\"assets/img/fingerprint.png\" alt=\"\">\n            </ion-avatar>\n            <ion-label>Huella digital</ion-label>\n            <ion-toggle color=\"primary\"></ion-toggle>\n        </ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-list-header>\n            <ion-label>Acerca de Lucky Games v{{VERSION}}</ion-label>\n        </ion-list-header>\n      <!--<ion-item detail routerLink='/desarrolladores'>\n            <ion-avatar slot=\"start\">\n                <img src=\"assets/img/programming.png\" alt=\"\">\n            </ion-avatar>\n            <ion-label>Créditos</ion-label>\n        </ion-item>/-->\n\n        <ion-item detail routerLink='/terms-conditions'>\n            <ion-avatar slot=\"start\">\n                <img src=\"assets/img/contract.png\" alt=\"\">\n            </ion-avatar>\n            <ion-label>Términos y condiciones</ion-label>\n        </ion-item>\n        <ion-item detail routerLink='/security-policy'>\n            <ion-avatar slot=\"start\">\n                <img src=\"assets/img/security.png\" alt=\"\">\n            </ion-avatar>\n            <ion-label>Politicas de seguridad</ion-label>\n        </ion-item>\n        <ion-item detail routerLink='/tech-support'>\n            <ion-avatar slot=\"start\">\n                <img src=\"assets/img/tech-support.png\" alt=\"\">\n            </ion-avatar>\n            <ion-label>Soporte técnico</ion-label>\n        </ion-item>\n    </ion-list>\n    <ion-button color='danger' style=\"display: block;\" (click)='logout($event)'>Cerrar sesión\n        <ion-icon name=\"log-out\"></ion-icon>\n    </ion-button>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab2-tab2-module-es5.js.map