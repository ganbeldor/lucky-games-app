(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-editar-informacion-editar-informacion-module"], {
    /***/
    "71qn":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/editar-informacion/editar-informacion-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: EditarInformacionPageRoutingModule */

    /***/
    function qn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditarInformacionPageRoutingModule", function () {
        return EditarInformacionPageRoutingModule;
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


      var _editar_informacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editar-informacion.page */
      "DmbL");

      var routes = [{
        path: '',
        component: _editar_informacion_page__WEBPACK_IMPORTED_MODULE_3__["EditarInformacionPage"]
      }];

      var EditarInformacionPageRoutingModule = /*#__PURE__*/_createClass(function EditarInformacionPageRoutingModule() {
        _classCallCheck(this, EditarInformacionPageRoutingModule);
      });

      EditarInformacionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditarInformacionPageRoutingModule);
      /***/
    },

    /***/
    "CaCY":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/editar-informacion/editar-informacion.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function CaCY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  font-weight: bold;\n  width: 140px;\n}\n\n.btn-container {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VkaXRhci1pbmZvcm1hY2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiZWRpdGFyLWluZm9ybWFjaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgd2lkdGg6IDE0MHB4O1xufVxuXG4uYnRuLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "DmbL":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/editar-informacion/editar-informacion.page.ts ***!
      \*********************************************************************/

    /*! exports provided: EditarInformacionPage */

    /***/
    function DmbL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditarInformacionPage", function () {
        return EditarInformacionPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_editar_informacion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./editar-informacion.page.html */
      "oats");
      /* harmony import */


      var _editar_informacion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editar-informacion.page.scss */
      "CaCY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/classes/classes */
      "50N5");
      /* harmony import */


      var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/base.service */
      "Do2H");
      /* harmony import */


      var src_app_util_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/util/util */
      "JQC8");

      var EditarInformacionPage = /*#__PURE__*/function () {
        function EditarInformacionPage(bs, util) {
          var _this = this;

          _classCallCheck(this, EditarInformacionPage);

          this.bs = bs;
          this.util = util;
          this.empleado = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["Empleado"]();
          this.guardando = false;
          bs.getEmpleado().then(function (e) {
            return _this.empleado = e;
          })["catch"](function (err) {
            return _this.util.handleError(err);
          });
        }

        return _createClass(EditarInformacionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "normalizarCelular",
          value: function normalizarCelular() {
            var digitos = (this.empleado.celular || '').replace(/\D/g, '');
            this.empleado.celular = digitos.length == 8 ? digitos.substring(0, 4) + '-' + digitos.substring(4) : digitos;
          }
        }, {
          key: "guardar",
          value: function guardar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var primer_nombre, primer_apellido, digitos, _t;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    if (!this.guardando) {
                      _context.n = 1;
                      break;
                    }

                    return _context.a(2);

                  case 1:
                    primer_nombre = (this.empleado.primer_nombre || '').trim();
                    primer_apellido = (this.empleado.primer_apellido || '').trim();

                    if (!(!primer_nombre || !primer_apellido)) {
                      _context.n = 3;
                      break;
                    }

                    _context.n = 2;
                    return this.util.presentAlert('Mensaje', 'El nombre y el apellido no pueden quedar vacíos.');

                  case 2:
                    return _context.a(2, _context.v);

                  case 3:
                    this.normalizarCelular();
                    digitos = (this.empleado.celular || '').replace(/\D/g, '');

                    if (!(digitos && digitos.length < 7)) {
                      _context.n = 5;
                      break;
                    }

                    _context.n = 4;
                    return this.util.presentAlert('Mensaje', 'El número de celular no es válido.');

                  case 4:
                    return _context.a(2, _context.v);

                  case 5:
                    this.guardando = true;
                    _context.p = 6;
                    _context.n = 7;
                    return this.bs.put(this.bs.MY_PROFILE_URL, {
                      primer_nombre: primer_nombre,
                      segundo_nombre: (this.empleado.segundo_nombre || '').trim(),
                      primer_apellido: primer_apellido,
                      segundo_apellido: (this.empleado.segundo_apellido || '').trim(),
                      celular: this.empleado.celular,
                      direccion: (this.empleado.direccion || '').trim()
                    }, true);

                  case 7:
                    _context.n = 8;
                    return this.bs.getEmpleado(true);

                  case 8:
                    this.empleado = _context.v;
                    _context.n = 9;
                    return this.util.presentToast('Perfil actualizado con éxito.');

                  case 9:
                    _context.n = 11;
                    break;

                  case 10:
                    _context.p = 10;
                    _t = _context.v;
                    _context.n = 11;
                    return this.util.handleError(_t);

                  case 11:
                    _context.p = 11;
                    this.guardando = false;
                    return _context.f(11);

                  case 12:
                    return _context.a(2);
                }
              }, _callee, this, [[6, 10, 11, 12]]);
            }));
          }
        }]);
      }();

      EditarInformacionPage.ctorParameters = function () {
        return [{
          type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]
        }, {
          type: src_app_util_util__WEBPACK_IMPORTED_MODULE_6__["Util"]
        }];
      };

      EditarInformacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editar-informacion',
        template: _raw_loader_editar_informacion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editar_informacion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditarInformacionPage);
      /***/
    },

    /***/
    "oats":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editar-informacion/editar-informacion.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oats(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]='\"\"' defaultHref='/tabs/tab2'></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">Perfil</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n    <form #form='ngForm' (ngSubmit)='guardar()'>\n        <ion-item *ngIf='empleado.id != -1'>\n            <ion-label position=\"stack\">ID:</ion-label>\n            <ion-input readonly='true' name='id' [(ngModel)]=\"empleado.id\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stack\">Primer nombre:</ion-label>\n            <ion-input name='primer_nombre' [(ngModel)]=\"empleado.primer_nombre\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stack\">Segundo nombre:</ion-label>\n            <ion-input name='segundo_nombre' [(ngModel)]=\"empleado.segundo_nombre\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stack\">Primer apellido:</ion-label>\n            <ion-input name='primer_apellido' [(ngModel)]=\"empleado.primer_apellido\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stack\">Segundo apellido:</ion-label>\n            <ion-input name='segundo_apellido' [(ngModel)]=\"empleado.segundo_apellido\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stack\">Usuario:</ion-label>\n            <ion-input readonly='true' name='usuario' [(ngModel)]=\"empleado.usuario.nombre\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stack\">Celular:</ion-label>\n            <ion-input type='tel' name='celular' (ionBlur)='normalizarCelular()' [(ngModel)]=\"empleado.celular\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stack\">Dirección:</ion-label>\n            <ion-input name='direccion' [(ngModel)]='empleado.direccion'></ion-input>\n        </ion-item>\n        <div class=\"btn-container\">\n            <ion-button type='submit' [disabled]='guardando'>\n                {{guardando ? 'Guardando...' : 'Guardar cambios'}}\n                <ion-icon name=\"save\"></ion-icon>\n            </ion-button>\n        </div>\n    </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "tJAp":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/editar-informacion/editar-informacion.module.ts ***!
      \***********************************************************************/

    /*! exports provided: EditarInformacionPageModule */

    /***/
    function tJAp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditarInformacionPageModule", function () {
        return EditarInformacionPageModule;
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


      var _editar_informacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./editar-informacion-routing.module */
      "71qn");
      /* harmony import */


      var _editar_informacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./editar-informacion.page */
      "DmbL");

      var EditarInformacionPageModule = /*#__PURE__*/_createClass(function EditarInformacionPageModule() {
        _classCallCheck(this, EditarInformacionPageModule);
      });

      EditarInformacionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editar_informacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditarInformacionPageRoutingModule"]],
        declarations: [_editar_informacion_page__WEBPACK_IMPORTED_MODULE_6__["EditarInformacionPage"]]
      })], EditarInformacionPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-editar-informacion-editar-informacion-module-es5.js.map