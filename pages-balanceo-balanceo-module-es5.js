(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-balanceo-balanceo-module"], {
    /***/
    "+x+U":
    /*!***********************************************************!*\
      !*** ./src/app/pages/balanceo/balanceo-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: BalanceoPageRoutingModule */

    /***/
    function xU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BalanceoPageRoutingModule", function () {
        return BalanceoPageRoutingModule;
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


      var _balanceo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./balanceo.page */
      "Ep+Z");

      var routes = [{
        path: '',
        component: _balanceo_page__WEBPACK_IMPORTED_MODULE_3__["BalanceoPage"]
      }];

      var BalanceoPageRoutingModule = /*#__PURE__*/_createClass(function BalanceoPageRoutingModule() {
        _classCallCheck(this, BalanceoPageRoutingModule);
      });

      BalanceoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BalanceoPageRoutingModule);
      /***/
    },

    /***/
    "Ep+Z":
    /*!*************************************************!*\
      !*** ./src/app/pages/balanceo/balanceo.page.ts ***!
      \*************************************************/

    /*! exports provided: BalanceoPage */

    /***/
    function EpZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BalanceoPage", function () {
        return BalanceoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_balanceo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./balanceo.page.html */
      "rp/t");
      /* harmony import */


      var _balanceo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./balanceo.page.scss */
      "MxSJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/base.service */
      "Do2H");
      /* harmony import */


      var src_app_util_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/util/util */
      "JQC8");
      /* harmony import */


      var src_app_classes_classes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/classes/classes */
      "50N5");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);

      var BalanceoPage = /*#__PURE__*/function () {
        function BalanceoPage(bs, util, alertCtrl, currencyPipe) {
          _classCallCheck(this, BalanceoPage);

          this.bs = bs;
          this.util = util;
          this.alertCtrl = alertCtrl;
          this.currencyPipe = currencyPipe;
          this.cargando = false;
          this.loaded = false;
          this.isAdmin = false;
          this.guardando = false;
          this.me = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_8__["Empleado"]();
          this.fecha = moment__WEBPACK_IMPORTED_MODULE_9___default()().format('YYYY-MM-DD');
          this.banca = 0;
          this.riesgo = 0;
          this.premio_max = 0;
          this.actualizado = '';
          this.data = {
            activado: false,
            banca: 0,
            riesgo: 0,
            fecha: '',
            n_vendedores: 0,
            tope_automatico: null,
            vendedores: []
          };
        }

        return _createClass(BalanceoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _t;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    _context.p = 0;
                    _context.n = 1;
                    return this.bs.getEmpleado();

                  case 1:
                    this.me = _context.v;
                    this.isAdmin = !!(this.me && this.me.usuario && this.me.usuario.isadmin);
                    _context.n = 2;
                    return this.cargar();

                  case 2:
                    _context.n = 4;
                    break;

                  case 3:
                    _context.p = 3;
                    _t = _context.v;
                    _context.n = 4;
                    return this.util.handleError(_t);

                  case 4:
                    return _context.a(2);
                }
              }, _callee, this, [[0, 3]]);
            }));
          }
        }, {
          key: "cargar",
          value: function cargar() {
            var silencioso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var r, _t2;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.p = _context2.n) {
                  case 0:
                    if (!silencioso) this.cargando = !this.loaded;
                    _context2.p = 1;
                    _context2.n = 2;
                    return this.bs.get(this.bs.BALANCEO_URL + '?fecha=' + encodeURIComponent(this.fecha), true);

                  case 2:
                    r = _context2.v;
                    this.aplicar(r);
                    this.loaded = true;
                    _context2.n = 4;
                    break;

                  case 3:
                    _context2.p = 3;
                    _t2 = _context2.v;

                    if (silencioso) {
                      _context2.n = 4;
                      break;
                    }

                    _context2.n = 4;
                    return this.util.handleError(_t2);

                  case 4:
                    _context2.p = 4;
                    this.cargando = false;
                    return _context2.f(4);

                  case 5:
                    return _context2.a(2);
                }
              }, _callee2, this, [[1, 3, 4, 5]]);
            }));
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.p = _context3.n) {
                  case 0:
                    _context3.p = 0;
                    _context3.n = 1;
                    return this.cargar();

                  case 1:
                    _context3.p = 1;
                    if (ev && ev.target) ev.target.complete();
                    return _context3.f(1);

                  case 2:
                    return _context3.a(2);
                }
              }, _callee3, this, [[0,, 1, 2]]);
            }));
          }
        }, {
          key: "aplicar",
          value: function aplicar(r) {
            if (!r) return;
            this.data = r;
            this.banca = Number(r.banca) || 0;
            this.riesgo = Number(r.riesgo) || 0;
            this.premio_max = Number(r.premio_max) || 0;
            this.actualizado = moment__WEBPACK_IMPORTED_MODULE_9___default()().format('HH:mm:ss');
          }
        }, {
          key: "money",
          value: function money(v) {
            return this.currencyPipe.transform(Number(v) || 0, 'C$') || 'C$0.00';
          }
        }, {
          key: "vendedores",
          get: function get() {
            return this.data && this.data.vendedores || [];
          }
        }, {
          key: "topePorNumero",
          get: function get() {
            return (Number(this.premio_max) || 0) / 80;
          }
        }, {
          key: "premioActivo",
          get: function get() {
            return (Number(this.premio_max) || 0) > 0;
          }
        }, {
          key: "hayLimite",
          get: function get() {
            return this.premioActivo || !!(this.data && this.data.activado);
          }
        }, {
          key: "estadoTexto",
          get: function get() {
            var partes = [];
            if (this.premioActivo) partes.push('premio por número');
            if (this.data && this.data.activado) partes.push('tope por vendedor');
            return partes.length ? 'Límite ACTIVO: ' + partes.join(' + ') : 'Sin límites';
          }
        }, {
          key: "totalVendido",
          get: function get() {
            return this.vendedores.reduce(function (a, v) {
              return a + (Number(v.vendido) || 0);
            }, 0);
          }
        }, {
          key: "guardar",
          value: function guardar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var r, _t3;

              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.p = _context4.n) {
                  case 0:
                    if (this.isAdmin) {
                      _context4.n = 1;
                      break;
                    }

                    return _context4.a(2);

                  case 1:
                    this.guardando = true;
                    _context4.p = 2;
                    _context4.n = 3;
                    return this.bs.put(this.bs.BALANCEO_URL, {
                      banca: Number(this.banca) || 0,
                      riesgo: Number(this.riesgo) || 0,
                      premio_max: Number(this.premio_max) || 0
                    }, true);

                  case 3:
                    r = _context4.v;
                    this.aplicar(r);
                    _context4.n = 4;
                    return this.util.presentToast('Balanceo guardado');

                  case 4:
                    _context4.n = 6;
                    break;

                  case 5:
                    _context4.p = 5;
                    _t3 = _context4.v;
                    _context4.n = 6;
                    return this.util.handleError(_t3);

                  case 6:
                    _context4.p = 6;
                    this.guardando = false;
                    return _context4.f(6);

                  case 7:
                    return _context4.a(2);
                }
              }, _callee4, this, [[2, 5, 6, 7]]);
            }));
          }
        }, {
          key: "guardarTope",
          value: function guardarTope(v) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var monto, ajustes, r, _t4;

              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.p = _context5.n) {
                  case 0:
                    if (this.isAdmin) {
                      _context5.n = 1;
                      break;
                    }

                    return _context5.a(2);

                  case 1:
                    monto = Math.max(0, Number(v.tope) || 0);
                    _context5.p = 2;
                    ajustes = {};
                    ajustes[String(v.id)] = monto;
                    _context5.n = 3;
                    return this.bs.put(this.bs.BALANCEO_URL, {
                      ajustes: ajustes
                    }, true);

                  case 3:
                    r = _context5.v;
                    this.aplicar(r);
                    _context5.n = 4;
                    return this.util.presentToast('Tope de ' + (v.nombre || '') + ': ' + this.money(monto));

                  case 4:
                    _context5.n = 7;
                    break;

                  case 5:
                    _context5.p = 5;
                    _t4 = _context5.v;
                    _context5.n = 6;
                    return this.util.handleError(_t4);

                  case 6:
                    _context5.n = 7;
                    return this.cargar(true);

                  case 7:
                    return _context5.a(2);
                }
              }, _callee5, this, [[2, 5]]);
            }));
          }
        }, {
          key: "topeAutomatico",
          value: function topeAutomatico(v) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var ajustes, r, _t5;

              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.p = _context6.n) {
                  case 0:
                    if (this.isAdmin) {
                      _context6.n = 1;
                      break;
                    }

                    return _context6.a(2);

                  case 1:
                    _context6.p = 1;
                    ajustes = {};
                    ajustes[String(v.id)] = null;
                    _context6.n = 2;
                    return this.bs.put(this.bs.BALANCEO_URL, {
                      ajustes: ajustes
                    }, true);

                  case 2:
                    r = _context6.v;
                    this.aplicar(r);
                    _context6.n = 3;
                    return this.util.presentToast('Tope automático de ' + (v.nombre || ''));

                  case 3:
                    _context6.n = 5;
                    break;

                  case 4:
                    _context6.p = 4;
                    _t5 = _context6.v;
                    _context6.n = 5;
                    return this.util.handleError(_t5);

                  case 5:
                    return _context6.a(2);
                }
              }, _callee6, this, [[1, 4]]);
            }));
          }
        }, {
          key: "sumarRecaudado",
          value: function sumarRecaudado() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
              var _this = this;

              var alert;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    if (this.isAdmin) {
                      _context8.n = 1;
                      break;
                    }

                    return _context8.a(2);

                  case 1:
                    _context8.n = 2;
                    return this.alertCtrl.create({
                      header: 'Sumar recaudado',
                      message: 'Cuánto sumamos al tope de venta de todos?',
                      inputs: [{
                        name: 'monto',
                        type: 'number',
                        placeholder: 'Ejemplo 10000'
                      }],
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel'
                      }, {
                        text: 'Sumar',
                        handler: function handler(e) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
                            var monto, r, _t6;

                            return _regenerator().w(function (_context7) {
                              while (1) switch (_context7.p = _context7.n) {
                                case 0:
                                  monto = Number(String(e && e.monto || '').replace(/[^0-9.]/g, '')) || 0;

                                  if (!(monto <= 0)) {
                                    _context7.n = 2;
                                    break;
                                  }

                                  _context7.n = 1;
                                  return this.util.presentAlert('Monto no válido', 'Escribe un monto mayor que cero.');

                                case 1:
                                  return _context7.a(2, false);

                                case 2:
                                  _context7.p = 2;
                                  _context7.n = 3;
                                  return this.bs.post(this.bs.BALANCEO_URL + '/sumar', {
                                    monto: monto
                                  }, true);

                                case 3:
                                  r = _context7.v;
                                  this.aplicar(r);
                                  _context7.n = 4;
                                  return this.util.presentToast('Sumado ' + this.money(monto) + ' al tope');

                                case 4:
                                  _context7.n = 6;
                                  break;

                                case 5:
                                  _context7.p = 5;
                                  _t6 = _context7.v;
                                  _context7.n = 6;
                                  return this.util.handleError(_t6);

                                case 6:
                                  return _context7.a(2, true);
                              }
                            }, _callee7, this, [[2, 5]]);
                          }));
                        }
                      }]
                    });

                  case 2:
                    alert = _context8.v;
                    _context8.n = 3;
                    return alert.present();

                  case 3:
                    return _context8.a(2);
                }
              }, _callee8, this);
            }));
          }
        }]);
      }();

      BalanceoPage.ctorParameters = function () {
        return [{
          type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"]
        }, {
          type: src_app_util_util__WEBPACK_IMPORTED_MODULE_7__["Util"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]
        }];
      };

      BalanceoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-balanceo',
        template: _raw_loader_balanceo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_balanceo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BalanceoPage);
      /***/
    },

    /***/
    "MF0o":
    /*!***************************************************!*\
      !*** ./src/app/pages/balanceo/balanceo.module.ts ***!
      \***************************************************/

    /*! exports provided: BalanceoPageModule */

    /***/
    function MF0o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BalanceoPageModule", function () {
        return BalanceoPageModule;
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


      var _balanceo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./balanceo-routing.module */
      "+x+U");
      /* harmony import */


      var _balanceo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./balanceo.page */
      "Ep+Z");

      var BalanceoPageModule = /*#__PURE__*/_createClass(function BalanceoPageModule() {
        _classCallCheck(this, BalanceoPageModule);
      });

      BalanceoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _balanceo_routing_module__WEBPACK_IMPORTED_MODULE_5__["BalanceoPageRoutingModule"]],
        declarations: [_balanceo_page__WEBPACK_IMPORTED_MODULE_6__["BalanceoPage"]]
      })], BalanceoPageModule);
      /***/
    },

    /***/
    "MxSJ":
    /*!***************************************************!*\
      !*** ./src/app/pages/balanceo/balanceo.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function MxSJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".estado {\n  font-size: 14px;\n  color: #000080;\n  margin-bottom: 8px;\n}\n.estado.apagado {\n  color: #b00020;\n}\n.campo {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.campo label {\n  font-size: 14px;\n  color: #444;\n}\n.campo input {\n  width: 150px;\n  border: 1px solid #d7d7d7;\n  border-radius: 6px;\n  padding: 8px;\n  font-size: 15px;\n  text-align: right;\n  color: #000;\n  background: #fff;\n}\n.nota {\n  font-size: 13px;\n  color: darkgray;\n  margin: 6px 0 10px;\n}\n.resumen {\n  background: #fff;\n  border: 1px solid #e6e6e6;\n  border-radius: 8px;\n  padding: 8px 12px;\n  margin-bottom: 8px;\n}\n.resumen .fila {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 0;\n  font-size: 15px;\n}\n.resumen .fila strong {\n  color: #000080;\n}\n.aviso {\n  font-size: 13px;\n  color: #7a4b00;\n  background: #fff6e5;\n  border: 1px solid #ffe0a8;\n  border-radius: 6px;\n  padding: 8px 10px;\n  margin-bottom: 10px;\n}\n.aviso.ok {\n  color: #14532d;\n  background: #e9f7ef;\n  border-color: #bfe6cf;\n}\nion-item.bloqueado {\n  --background: #fff1f1;\n}\nion-item .usuario {\n  color: darkgray;\n  font-size: 13px;\n  font-weight: normal;\n}\n.tope-caja {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n  margin-right: 8px;\n}\n.tope-caja input {\n  width: 110px;\n  border: 1px solid #d7d7d7;\n  border-radius: 6px;\n  padding: 6px 8px;\n  font-size: 15px;\n  text-align: right;\n  color: #000;\n  background: #fff;\n}\n.tope-caja .auto {\n  border: none;\n  background: none;\n  color: #000080;\n  font-size: 12px;\n  text-decoration: underline;\n  cursor: pointer;\n  padding: 0;\n}\nion-badge {\n  --background: #e9f7ef;\n  color: #14532d;\n}\nion-badge.rojo {\n  --background: #fde2e2;\n  color: #b00020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JhbGFuY2VvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0ksY0FBQTtBQUNSO0FBR0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUFSO0FBR0k7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUtBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUZKO0FBS0E7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFJSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFGUjtBQUlRO0VBQ0ksY0FBQTtBQUZaO0FBT0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU1JO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFKUjtBQVNJO0VBQ0kscUJBQUE7QUFOUjtBQVNJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVBSO0FBV0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQVJKO0FBVUk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBUlI7QUFXSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQVRSO0FBYUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFWSjtBQVlJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBVlIiLCJmaWxlIjoiYmFsYW5jZW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVzdGFkbyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDAwMDgwO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgICYuYXBhZ2FkbyB7XG4gICAgICAgIGNvbG9yOiAjYjAwMDIwO1xuICAgIH1cbn1cblxuLmNhbXBvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q3ZDdkNztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cbn1cblxuLm5vdGEge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogZGFya2dyYXk7XG4gICAgbWFyZ2luOiA2cHggMCAxMHB4O1xufVxuXG4ucmVzdW1lbiB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAuZmlsYSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNnB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcblxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwODA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hdmlzbyB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjN2E0YjAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY2ZTU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZTBhODtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICYub2sge1xuICAgICAgICBjb2xvcjogIzE0NTMyZDtcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZjdlZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjYmZlNmNmO1xuICAgIH1cbn1cblxuaW9uLWl0ZW0ge1xuICAgICYuYmxvcXVlYWRvIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmMWYxO1xuICAgIH1cblxuICAgIC51c3VhcmlvIHtcbiAgICAgICAgY29sb3I6IGRhcmtncmF5O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxufVxuXG4udG9wZS1jYWphIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGdhcDogMnB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuXG4gICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkN2Q3ZDc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgcGFkZGluZzogNnB4IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgfVxuXG4gICAgLmF1dG8ge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjMDAwMDgwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxufVxuXG5pb24tYmFkZ2Uge1xuICAgIC0tYmFja2dyb3VuZDogI2U5ZjdlZjtcbiAgICBjb2xvcjogIzE0NTMyZDtcblxuICAgICYucm9qbyB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZkZTJlMjtcbiAgICAgICAgY29sb3I6ICNiMDAwMjA7XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "rp/t":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/balanceo/balanceo.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function rp_t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\" [text]='\"\"'></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">Balanceo</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-card *ngIf=\"!isAdmin\">\n        <ion-card-content>\n            Solo el dueño puede ver el balanceo.\n        </ion-card-content>\n    </ion-card>\n\n    <div *ngIf=\"isAdmin\">\n\n        <div class=\"estado\" [class.apagado]=\"!hayLimite\">\n            <strong>{{estadoTexto}}</strong>\n            <span *ngIf=\"actualizado\"> · act. {{actualizado}}</span>\n        </div>\n\n        <ion-card>\n            <ion-card-header>\n                <ion-card-title>Mi riesgo del día</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n                <div class=\"campo\">\n                    <label>Banca (efectivo que tengo)</label>\n                    <input type=\"number\" min=\"0\" [(ngModel)]=\"banca\" (change)=\"guardar()\">\n                </div>\n                <div class=\"campo\">\n                    <label>Lo que puedo perder en 1 premio</label>\n                    <input type=\"number\" min=\"0\" [(ngModel)]=\"premio_max\" (change)=\"guardar()\">\n                </div>\n                <p class=\"nota\" *ngIf=\"premioActivo\">\n                    Un número no se paga de más: máximo <strong>{{money(premio_max)}</strong> en premio\n                    por número (en el sorteo ×80 eso deja vender <strong>{{money(topePorNumero)}}</strong>\n                    por número). Si alguien intenta pasarse, la venta se bloquea.\n                </p>\n                <p class=\"nota\" *ngIf=\"!premioActivo\">\n                    Con <strong>0</strong> no hay límite de premio: cualquier número se puede vender sin tope.\n                </p>\n\n                <div class=\"campo\">\n                    <label>Tope entre vendedores (opcional)</label>\n                    <input type=\"number\" min=\"0\" [(ngModel)]=\"riesgo\" (change)=\"guardar()\">\n                </div>\n                <p class=\"nota\">\n                    Se reparte en partes iguales entre los vendedores activos para que nadie\n                    se lleve todo el día. Con <strong>0</strong> está apagado.\n                </p>\n                <ion-button expand=\"block\" (click)=\"guardar()\" [disabled]=\"guardando\">Guardar</ion-button>\n                <ion-button expand=\"block\" fill=\"outline\" (click)=\"sumarRecaudado()\">Sumar recaudado</ion-button>\n            </ion-card-content>\n        </ion-card>\n\n        <div class=\"resumen\" *ngIf=\"data.activado\">\n            <div class=\"fila\">\n                <span>Vendedores</span>\n                <strong>{{data.n_vendedores}}</strong>\n            </div>\n            <div class=\"fila\">\n                <span>Tope automático c/u</span>\n                <strong>{{money(data.tope_automatico)}}</strong>\n            </div>\n            <div class=\"fila\">\n                <span>Vendido hoy</span>\n                <strong>{{money(totalVendido)}}</strong>\n            </div>\n        </div>\n\n        <div class=\"aviso\" *ngIf=\"premioActivo\">\n            Si un número llega a su tope, la venta se bloquea y el vendedor ve\n            \"el número ha pasado su límite\".\n        </div>\n\n        <div class=\"aviso\" *ngIf=\"data.activado\">\n            Al llegar a su tope, la venta de ese vendedor se bloquea hasta que subas el tope.\n        </div>\n\n        <div class=\"aviso ok\" *ngIf=\"!hayLimite\">\n            Sin límites: nadie está bloqueado. Poné un monto arriba para activarlos.\n        </div>\n\n        <ion-list *ngIf=\"data.activado && vendedores.length\">\n            <ion-list-header>\n                <ion-label>Reparto entre vendedores</ion-label>\n            </ion-list-header>\n\n            <ion-item *ngFor=\"let v of vendedores\" lines=\"full\" [class.bloqueado]=\"v.bloqueado\">\n                <ion-label class=\"ion-text-wrap\">\n                    <h2>\n                        {{v.nombre}}\n                        <span class=\"usuario\" *ngIf=\"v.usuario\">({{v.usuario}})</span>\n                    </h2>\n                    <p>\n                        Vendido {{money(v.vendido)}} ·\n                        Falta {{money(v.disponible)}}\n                        <span *ngIf=\"!v.automatico\"> · tope a mano</span>\n                    </p>\n                </ion-label>\n\n                <div slot=\"end\" class=\"tope-caja\">\n                    <input type=\"number\" min=\"0\" [(ngModel)]=\"v.tope\" (change)=\"guardarTope(v)\">\n                    <button type=\"button\" class=\"auto\" *ngIf=\"!v.automatico\" (click)=\"topeAutomatico(v)\">Auto</button>\n                </div>\n\n                <ion-badge slot=\"end\" [class.rojo]=\"v.bloqueado\">\n                    {{v.bloqueado ? 'BLOQUEADO' : 'OK'}}\n                </ion-badge>\n            </ion-item>\n        </ion-list>\n\n    </div>\n\n    <div *ngIf=\"cargando\" class=\"ion-text-center\" style=\"padding: 24px;\">\n        <ion-spinner></ion-spinner>\n    </div>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-balanceo-balanceo-module-es5.js.map