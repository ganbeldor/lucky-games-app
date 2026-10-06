(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-set-ganador-set-ganador-module"], {
    /***/
    "+q5g":
    /*!*******************************************************!*\
      !*** ./src/app/pages/set-ganador/set-ganador.page.ts ***!
      \*******************************************************/

    /*! exports provided: SetGanadorPage */

    /***/
    function q5g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetGanadorPage", function () {
        return SetGanadorPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_set_ganador_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./set-ganador.page.html */
      "U1DN");
      /* harmony import */


      var _set_ganador_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./set-ganador.page.scss */
      "StCw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/base.service */
      "Do2H");
      /* harmony import */


      var src_app_util_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/util/util */
      "JQC8");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

      var SetGanadorPage = /*#__PURE__*/function () {
        function SetGanadorPage(bs, util, navCtrl, route) {
          var _this = this;

          _classCallCheck(this, SetGanadorPage);

          this.bs = bs;
          this.util = util;
          this.navCtrl = navCtrl;
          this.route = route;
          this.sorteos = [];
          this.ganadores = {};
          this.sorteo_id = -1;
          this.numero = '';
          this.cargando = false;
          this.guardando = false;
          this.isAdmin = false;
          this.bs.getEmpleado().then(function (e) {
            _this.isAdmin = !!(e && e.usuario && e.usuario.isadmin);
            if (!_this.isAdmin) _this.salir('Solo el administrador puede establecer el número ganador.');
          })["catch"](function () {
            return _this.isAdmin = false;
          });
          this.route.queryParams.subscribe(function (p) {
            return _this.cargar(p && p.sorteo_id ? +p.sorteo_id : null);
          });
        }

        return _createClass(SetGanadorPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "cargar",
          value: function cargar(sorteoId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this2 = this;

              var sorteos, conVenta, hoy, boletos, activos, _t, _t2;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    this.cargando = true;
                    _context.p = 1;
                    _context.n = 2;
                    return this.bs.get(this.bs.SORTEO_URL + '/true', true);

                  case 2:
                    sorteos = _context.v;
                    // solo los sorteos que tuvieron venta hoy: evita la lista larga de
                    // sorteos repetidos (CR, HN, NICA...) en los que no hay nada que fijar
                    conVenta = null;
                    _context.p = 3;
                    hoy = moment__WEBPACK_IMPORTED_MODULE_8___default()().format('YYYY/MM/DD');
                    _context.n = 4;
                    return this.bs.post(this.bs.BOLETO_URL + '/get/true', {
                      from_date: hoy + ' 00:00:00.000000',
                      to_date: hoy + ' 23:59:59.999999'
                    }, true);

                  case 4:
                    boletos = _context.v;
                    conVenta = new Set((boletos || []).map(function (b) {
                      return String(b.sorteo_id);
                    }));
                    _context.n = 6;
                    break;

                  case 5:
                    _context.p = 5;
                    _t = _context.v;
                    conVenta = null; // sin lista de ventas mostramos todos, mejor eso que nada

                  case 6:
                    this.sorteos = (sorteos || []).filter(function (s) {
                      return !conVenta || conVenta.has(String(s.id));
                    }).sort(function (a, b) {
                      return String(a.hora || '').localeCompare(String(b.hora || ''));
                    });
                    _context.n = 7;
                    return this.bs.get(this.bs.JUEGO_URL + '/activos', true);

                  case 7:
                    activos = _context.v;
                    this.ganadores = {};
                    (activos || []).forEach(function (grupo) {
                      return (grupo || []).forEach(function (j) {
                        if (j && j.id != null) _this2.ganadores[j.id] = j;
                      });
                    });
                    if (sorteoId && this.sorteos.some(function (s) {
                      return s.id == sorteoId;
                    })) this.sorteo_id = sorteoId;else if (this.sorteos.length) this.sorteo_id = this.sorteos[0].id;
                    _context.n = 9;
                    break;

                  case 8:
                    _context.p = 8;
                    _t2 = _context.v;
                    _context.n = 9;
                    return this.util.handleError(_t2);

                  case 9:
                    _context.p = 9;
                    this.cargando = false;
                    return _context.f(9);

                  case 10:
                    return _context.a(2);
                }
              }, _callee, this, [[3, 5], [1, 8, 9, 10]]);
            }));
          }
        }, {
          key: "sorteo",
          get: function get() {
            var _this3 = this;

            return this.sorteos.find(function (s) {
              return s.id == _this3.sorteo_id;
            });
          }
        }, {
          key: "ganadorActual",
          get: function get() {
            var j = this.sorteo_id > -1 ? this.ganadores[this.sorteo_id] : null;
            return j && j.numero_ganador ? j.numero_ganador : '';
          }
        }, {
          key: "sorteoChanged",
          value: function sorteoChanged() {
            this.numero = '';
          }
        }, {
          key: "numeroLimpio",
          get: function get() {
            var n = (this.numero || '').replace(/\D/g, '');
            return n.length == 1 ? '0' + n : n;
          }
        }, {
          key: "isValid",
          value: function isValid() {
            if (!this.sorteo || this.guardando) return false;
            var n = parseInt(this.numeroLimpio, 10);
            return this.numeroLimpio.length > 0 && !isNaN(n) && n >= 0 && n <= 99;
          }
        }, {
          key: "guardar",
          value: function guardar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var r, j, _t3;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.p = _context2.n) {
                  case 0:
                    if (this.isValid()) {
                      _context2.n = 2;
                      break;
                    }

                    _context2.n = 1;
                    return this.util.presentAlert('Mensaje', 'Número no es válido para este tipo de sorteo.');

                  case 1:
                    return _context2.a(2, _context2.v);

                  case 2:
                    this.guardando = true;
                    _context2.p = 3;
                    _context2.n = 4;
                    return this.bs.put(this.bs.ESTABLECER_GANADOR_URL, {
                      juegos_id: JSON.stringify([this.sorteo_id]),
                      numero_ganador: this.numeroLimpio
                    }, true);

                  case 4:
                    r = _context2.v;
                    j = this.ganadores[this.sorteo_id] || {
                      id: this.sorteo_id
                    };
                    j.numero_ganador = r && r.numero_ganador || this.numeroLimpio;
                    j.iscompleted = true;
                    this.ganadores[this.sorteo_id] = j;
                    this.numero = '';
                    _context2.n = 5;
                    return this.util.presentAlert('Mensaje', 'Se estableció el número ganador con éxito.');

                  case 5:
                    _context2.n = 7;
                    break;

                  case 6:
                    _context2.p = 6;
                    _t3 = _context2.v;
                    _context2.n = 7;
                    return this.util.handleError(_t3);

                  case 7:
                    _context2.p = 7;
                    this.guardando = false;
                    return _context2.f(7);

                  case 8:
                    return _context2.a(2);
                }
              }, _callee2, this, [[3, 6, 7, 8]]);
            }));
          }
        }, {
          key: "salir",
          value: function salir(mensaje) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.util.presentAlert('Mensaje', mensaje);

                  case 1:
                    this.navCtrl.navigateRoot('/tabs/tab1');

                  case 2:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }]);
      }();

      SetGanadorPage.ctorParameters = function () {
        return [{
          type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]
        }, {
          type: src_app_util_util__WEBPACK_IMPORTED_MODULE_6__["Util"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      SetGanadorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-set-ganador',
        template: _raw_loader_set_ganador_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_set_ganador_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SetGanadorPage);
      /***/
    },

    /***/
    "/isP":
    /*!*********************************************************!*\
      !*** ./src/app/pages/set-ganador/set-ganador.module.ts ***!
      \*********************************************************/

    /*! exports provided: SetGanadorPageModule */

    /***/
    function _isP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetGanadorPageModule", function () {
        return SetGanadorPageModule;
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


      var _set_ganador_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./set-ganador-routing.module */
      "Sw+S");
      /* harmony import */


      var _set_ganador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./set-ganador.page */
      "+q5g");

      var SetGanadorPageModule = /*#__PURE__*/_createClass(function SetGanadorPageModule() {
        _classCallCheck(this, SetGanadorPageModule);
      });

      SetGanadorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _set_ganador_routing_module__WEBPACK_IMPORTED_MODULE_5__["SetGanadorPageRoutingModule"]],
        declarations: [_set_ganador_page__WEBPACK_IMPORTED_MODULE_6__["SetGanadorPage"]]
      })], SetGanadorPageModule);
      /***/
    },

    /***/
    "StCw":
    /*!*********************************************************!*\
      !*** ./src/app/pages/set-ganador/set-ganador.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function StCw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-container {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n\nion-label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NldC1nYW5hZG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6InNldC1nYW5hZG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "Sw+S":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/set-ganador/set-ganador-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: SetGanadorPageRoutingModule */

    /***/
    function SwS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetGanadorPageRoutingModule", function () {
        return SetGanadorPageRoutingModule;
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


      var _set_ganador_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./set-ganador.page */
      "+q5g");

      var routes = [{
        path: '',
        component: _set_ganador_page__WEBPACK_IMPORTED_MODULE_3__["SetGanadorPage"]
      }];

      var SetGanadorPageRoutingModule = /*#__PURE__*/_createClass(function SetGanadorPageRoutingModule() {
        _classCallCheck(this, SetGanadorPageRoutingModule);
      });

      SetGanadorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SetGanadorPageRoutingModule);
      /***/
    },

    /***/
    "U1DN":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/set-ganador/set-ganador.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function U1DN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]='\"\"' defaultHref='/tabs/tab1'></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">Establecer ganador</ion-title>\n    </ion-toolbar>\n    <ion-toolbar color='light'>\n        <ion-item>\n            <ion-label>Sorteo:</ion-label>\n            <ion-select placeholder='Seleccione un sorteo' [(ngModel)]='sorteo_id' (ionChange)='sorteoChanged()'\n                [disabled]='cargando || sorteos.length == 0'>\n                <ion-select-option *ngFor='let s of sorteos' [value]='s.id'>\n                    {{s.sorteo_nombre}} - {{s.hora | date: 'hh:mm a'}}\n                </ion-select-option>\n            </ion-select>\n        </ion-item>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div *ngIf='cargando' class=\"ion-text-center ion-padding\">\n        Cargando...\n    </div>\n\n    <ion-card *ngIf='!cargando && sorteo'>\n        <ion-card-header>\n            <ion-card-title>{{sorteo.sorteo_nombre}}</ion-card-title>\n            <ion-card-subtitle>{{sorteo.hora | date: 'EEEE dd/MM/yyyy hh:mm a'}}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-item lines='none'>\n                <ion-label>Número ganador actual:</ion-label>\n                <ion-badge slot=\"end\" [color]=\"ganadorActual ? 'success' : 'medium'\">\n                    {{ganadorActual ? ganadorActual : 'Sin ganador'}}\n                </ion-badge>\n            </ion-item>\n            <form (ngSubmit)='guardar()'>\n                <ion-item>\n                    <ion-label position='floating'>Nuevo número ganador (00 - 99)</ion-label>\n                    <ion-input name='numero' inputmode='numeric' maxlength='2' [(ngModel)]='numero'></ion-input>\n                </ion-item>\n                <div class=\"btn-container\">\n                    <ion-button type='submit' [disabled]='!isValid()'>\n                        {{guardando ? 'Guardando...' : 'Establecer'}}\n                        <ion-icon name=\"trophy\"></ion-icon>\n                    </ion-button>\n                </div>\n            </form>\n        </ion-card-content>\n    </ion-card>\n\n    <div *ngIf='!cargando && sorteos.length == 0' class=\"ion-text-center ion-padding\">\n        No hubo ventas hoy en ningún sorteo.\n    </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-set-ganador-set-ganador-module-es5.js.map