(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ganadores-ganadores-module"], {
    /***/
    "4bRc":
    /*!*****************************************************!*\
      !*** ./src/app/pages/ganadores/ganadores.module.ts ***!
      \*****************************************************/

    /*! exports provided: GanadoresPageModule */

    /***/
    function bRc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GanadoresPageModule", function () {
        return GanadoresPageModule;
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


      var _ganadores_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ganadores-routing.module */
      "Lw8v");
      /* harmony import */


      var _ganadores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ganadores.page */
      "6F99");

      var GanadoresPageModule = /*#__PURE__*/_createClass(function GanadoresPageModule() {
        _classCallCheck(this, GanadoresPageModule);
      });

      GanadoresPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ganadores_routing_module__WEBPACK_IMPORTED_MODULE_5__["GanadoresPageRoutingModule"]],
        declarations: [_ganadores_page__WEBPACK_IMPORTED_MODULE_6__["GanadoresPage"]]
      })], GanadoresPageModule);
      /***/
    },

    /***/
    "6F99":
    /*!***************************************************!*\
      !*** ./src/app/pages/ganadores/ganadores.page.ts ***!
      \***************************************************/

    /*! exports provided: GanadoresPage */

    /***/
    function F99(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GanadoresPage", function () {
        return GanadoresPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ganadores_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ganadores.page.html */
      "r98d");
      /* harmony import */


      var _ganadores_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ganadores.page.scss */
      "ix+G");
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


      var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/base.service */
      "Do2H");
      /* harmony import */


      var src_app_util_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/util/util */
      "JQC8");
      /* harmony import */


      var src_app_services_printer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/printer.service */
      "UbLU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! esc-pos-encoder */
      "oLKi");
      /* harmony import */


      var esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _boleto_boleto_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../boleto/boleto.page */
      "9ljF");

      var GanadoresPage = /*#__PURE__*/function () {
        function GanadoresPage(bs, util, alertCtrl, loadCtrl, modalCtrl, currencyPipe, printer, storage) {
          _classCallCheck(this, GanadoresPage);

          this.bs = bs;
          this.util = util;
          this.alertCtrl = alertCtrl;
          this.loadCtrl = loadCtrl;
          this.modalCtrl = modalCtrl;
          this.currencyPipe = currencyPipe;
          this.printer = printer;
          this.storage = storage;
          this.sorteos = [];
          this.sorteo_id = -1;
          this.data = null;
          this.cargando = false;
          this.actualizado = '';
          this.timer = null;
          this.refrescando = false;
        }

        return _createClass(GanadoresPage, [{
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
                    return this.cargarSorteos();

                  case 1:
                    this.iniciarRefresh();
                    _context.n = 3;
                    break;

                  case 2:
                    _context.p = 2;
                    _t = _context.v;
                    _context.n = 3;
                    return this.util.handleError(_t);

                  case 3:
                    return _context.a(2);
                }
              }, _callee, this, [[0, 2]]);
            }));
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            if (this.timer) {
              clearInterval(this.timer);
              this.timer = null;
            }
          } // el dueno fija el numero cuando sea: aca se va reflejando solo

        }, {
          key: "iniciarRefresh",
          value: function iniciarRefresh() {
            var _this = this;

            if (this.timer) clearInterval(this.timer);
            this.timer = setInterval(function () {
              return _this.cargarGanadores(true);
            }, 10000);
          }
        }, {
          key: "cargarSorteos",
          value: function cargarSorteos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this2 = this;

              var sorteos, conVenta, hoy, boletos, _t2;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.p = _context2.n) {
                  case 0:
                    this.cargando = true;
                    _context2.p = 1;
                    _context2.n = 2;
                    return this.bs.get(this.bs.SORTEO_URL + '/true', true);

                  case 2:
                    sorteos = _context2.v;
                    conVenta = null;
                    _context2.p = 3;
                    hoy = moment__WEBPACK_IMPORTED_MODULE_11___default()().format('YYYY/MM/DD');
                    _context2.n = 4;
                    return this.bs.post(this.bs.BOLETO_URL + '/get/true', {
                      from_date: hoy + ' 00:00:00.000000',
                      to_date: hoy + ' 23:59:59.999999'
                    }, true);

                  case 4:
                    boletos = _context2.v;
                    conVenta = new Set((boletos || []).map(function (b) {
                      return String(b.sorteo_id);
                    }));
                    _context2.n = 6;
                    break;

                  case 5:
                    _context2.p = 5;
                    _t2 = _context2.v;
                    conVenta = null;

                  case 6:
                    this.sorteos = (sorteos || []).filter(function (s) {
                      return !conVenta || conVenta.has(String(s.id));
                    }).sort(function (a, b) {
                      return String(a.hora || '').localeCompare(String(b.hora || ''));
                    });
                    if (this.sorteo_id == -1 || !this.sorteos.some(function (s) {
                      return s.id == _this2.sorteo_id;
                    })) this.sorteo_id = this.sorteos.length ? this.sorteos[0].id : -1;
                    _context2.n = 7;
                    return this.cargarGanadores(true);

                  case 7:
                    _context2.p = 7;
                    this.cargando = false;
                    return _context2.f(7);

                  case 8:
                    return _context2.a(2);
                }
              }, _callee2, this, [[3, 5], [1,, 7, 8]]);
            }));
          }
        }, {
          key: "sorteoChanged",
          value: function sorteoChanged() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    this.data = null;
                    _context3.n = 1;
                    return this.cargarGanadores(true);

                  case 1:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.p = _context4.n) {
                  case 0:
                    _context4.p = 0;
                    _context4.n = 1;
                    return this.cargarSorteos();

                  case 1:
                    _context4.p = 1;
                    if (ev && ev.target) ev.target.complete();
                    return _context4.f(1);

                  case 2:
                    return _context4.a(2);
                }
              }, _callee4, this, [[0,, 1, 2]]);
            }));
          }
        }, {
          key: "cargarGanadores",
          value: function cargarGanadores() {
            var silencioso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var url, _t3;

              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.p = _context5.n) {
                  case 0:
                    if (!(this.sorteo_id == -1)) {
                      _context5.n = 1;
                      break;
                    }

                    return _context5.a(2);

                  case 1:
                    if (!this.refrescando) {
                      _context5.n = 2;
                      break;
                    }

                    return _context5.a(2);

                  case 2:
                    this.refrescando = true;
                    _context5.p = 3;
                    url = this.bs.JUEGO_URL + '/ganadores?sorteo_id=' + encodeURIComponent(this.sorteo_id) + '&fecha=' + encodeURIComponent(moment__WEBPACK_IMPORTED_MODULE_11___default()().format('YYYY-MM-DD'));
                    _context5.n = 4;
                    return this.bs.get(url, true);

                  case 4:
                    this.data = _context5.v;
                    this.actualizado = moment__WEBPACK_IMPORTED_MODULE_11___default()().format('HH:mm:ss');
                    _context5.n = 6;
                    break;

                  case 5:
                    _context5.p = 5;
                    _t3 = _context5.v;

                    if (silencioso) {
                      _context5.n = 6;
                      break;
                    }

                    _context5.n = 6;
                    return this.util.handleError(_t3);

                  case 6:
                    _context5.p = 6;
                    this.refrescando = false;
                    return _context5.f(6);

                  case 7:
                    return _context5.a(2);
                }
              }, _callee5, this, [[3, 5, 6, 7]]);
            }));
          }
        }, {
          key: "money",
          value: function money(v) {
            return this.currencyPipe.transform(Number(v) || 0, 'C$') || 'C$0.00';
          }
        }, {
          key: "verBoleto",
          value: function verBoleto(b) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var boleto, modal, _t4;

              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.p = _context6.n) {
                  case 0:
                    _context6.p = 0;
                    _context6.n = 1;
                    return this.bs.get(this.bs.BOLETO_URL + '/' + b.id, true);

                  case 1:
                    boleto = _context6.v;
                    _context6.n = 2;
                    return this.modalCtrl.create({
                      component: _boleto_boleto_page__WEBPACK_IMPORTED_MODULE_12__["BoletoPage"],
                      componentProps: {
                        boleto: boleto
                      }
                    });

                  case 2:
                    modal = _context6.v;
                    _context6.n = 3;
                    return modal.present();

                  case 3:
                    _context6.n = 5;
                    break;

                  case 4:
                    _context6.p = 4;
                    _t4 = _context6.v;
                    _context6.n = 5;
                    return this.util.handleError(_t4);

                  case 5:
                    return _context6.a(2);
                }
              }, _callee6, this, [[0, 4]]);
            }));
          }
        }, {
          key: "imprimir",
          value: function imprimir() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              var _this3 = this;

              var encoder, result, d, hr;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    if (!(!this.data || !this.data.numero_ganador)) {
                      _context7.n = 1;
                      break;
                    }

                    return _context7.a(2);

                  case 1:
                    encoder = new esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10___default.a();
                    result = encoder.initialize(); // Sunmi: por defecto chino (multibyte). FS . cierra multibyte, ESC t 16 = Windows-1252

                    result.raw([0x1c, 0x2e]);
                    result.raw([0x1b, 0x74, 0x10]);
                    result._codepage = 'windows1252';
                    d = this.data;
                    hr = this.util.commands.HORIZONTAL_LINE.HR_58MM;
                    result.align('center').size('normal').bold(true).line('REPORTE DE GANADORES').bold(false).line('Fecha: ' + moment__WEBPACK_IMPORTED_MODULE_11___default()(d.fecha).format('DD/MM/YYYY')).line((d.sorteo_nombre || '') + (d.sorteo_hora ? ' - ' + d.sorteo_hora : '')).bold(true).line('Numero ganador: ' + d.numero_ganador).bold(false).line(hr);
                    (d.boletos || []).forEach(function (b) {
                      result.line('#' + b.id + '  ' + (b.hora || '') + '  ' + (b.cliente_nombre || ''));
                      if (b.empleado_nombre) result.line('  Maq: ' + b.empleado_nombre);
                      (b.numeros || []).forEach(function (n) {
                        result.line('  ' + n.numero + '  inv ' + _this3.money(n.inversion) + '  gana ' + _this3.money(n.ganancia));
                      });
                      result.bold(true).line('  PREMIO: ' + _this3.money(b.premio)).bold(false).line(hr);
                    });
                    result.bold(true).line('Boletos ganadores: ' + d.total_boletos).line('TOTAL PREMIOS:     ' + this.money(d.total_premios)).bold(false).align('center').newline().newline().newline();
                    this.mountAlertBt(result.encode());

                  case 2:
                    return _context7.a(2);
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "mountAlertBt",
          value: function mountAlertBt(data) {
            var _this4 = this;

            var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            this.printer.enableBluetooth().then(function () {
              if (_this4.util.IMPRESORA_ADDRESS == '') {
                _this4.printer.searchBluetooth().then(function (devices) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee9() {
                    var _this5 = this;

                    var inputs, alert;
                    return _regenerator().w(function (_context9) {
                      while (1) switch (_context9.n) {
                        case 0:
                          inputs = [];
                          devices.forEach(function (d) {
                            inputs.push({
                              name: 'printer',
                              value: d.address,
                              label: d.name,
                              type: 'radio'
                            });
                          });

                          if (!(inputs.length == 0)) {
                            _context9.n = 1;
                            break;
                          }

                          return _context9.a(2, window.alert('NO HAY IMPRESORA CONECTADA'));

                        case 1:
                          _context9.n = 2;
                          return this.alertCtrl.create({
                            header: 'Seleccione la impresora',
                            inputs: inputs,
                            buttons: [{
                              text: 'Cancelar',
                              role: 'cancel'
                            }, {
                              text: 'Seleccionar',
                              role: 'ok',
                              handler: function handler(device) {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
                                  return _regenerator().w(function (_context8) {
                                    while (1) switch (_context8.n) {
                                      case 0:
                                        if (!device) {
                                          _context8.n = 2;
                                          break;
                                        }

                                        _context8.n = 1;
                                        return this.storage.set('impresora_address', device);

                                      case 1:
                                        this.util.IMPRESORA_ADDRESS = device;
                                        this.print(device, data, total);
                                        _context8.n = 3;
                                        break;

                                      case 2:
                                        return _context8.a(2, window.alert('NO SE SELECCIONÓ LA IMPRESORA'));

                                      case 3:
                                        return _context8.a(2);
                                    }
                                  }, _callee8, this);
                                }));
                              }
                            }]
                          });

                        case 2:
                          alert = _context9.v;
                          _context9.n = 3;
                          return alert.present();

                        case 3:
                          return _context9.a(2);
                      }
                    }, _callee9, this);
                  }));
                })["catch"](function (error) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee0() {
                    return _regenerator().w(function (_context0) {
                      while (1) switch (_context0.n) {
                        case 0:
                          _context0.n = 1;
                          return this.util.presentAlert('Error', 'Error al conectar con la impresora #1.');

                        case 1:
                          return _context0.a(2);
                      }
                    }, _callee0, this);
                  }));
                });
              } else {
                _this4.print(_this4.util.IMPRESORA_ADDRESS, data, total);
              }
            })["catch"](function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee1() {
                return _regenerator().w(function (_context1) {
                  while (1) switch (_context1.n) {
                    case 0:
                      _context1.n = 1;
                      return this.util.presentAlert('Error', 'Error al conectar con la impresora. #2');

                    case 1:
                      return _context1.a(2);
                  }
                }, _callee1, this);
              }));
            });
          }
        }, {
          key: "print",
          value: function print(device, data, total) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee13() {
              var _this6 = this;

              var load, _t5;

              return _regenerator().w(function (_context13) {
                while (1) switch (_context13.p = _context13.n) {
                  case 0:
                    _context13.p = 0;
                    _context13.n = 1;
                    return this.printer.disconnectBluetooth();

                  case 1:
                    _context13.n = 3;
                    break;

                  case 2:
                    _context13.p = 2;
                    _t5 = _context13.v;

                  case 3:
                    _context13.n = 4;
                    return this.loadCtrl.create({
                      message: 'Imprimiendo...'
                    });

                  case 4:
                    load = _context13.v;
                    _context13.n = 5;
                    return load.present();

                  case 5:
                    this.printer.connectBluetooth(device).subscribe(function () {
                      _this6.printer.printData(data).then(function (printStatus) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee10() {
                          return _regenerator().w(function (_context10) {
                            while (1) switch (_context10.n) {
                              case 0:
                                _context10.n = 1;
                                return load.dismiss();

                              case 1:
                                return _context10.a(2);
                            }
                          }, _callee10);
                        }));
                      })["catch"](function (error) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee11() {
                          return _regenerator().w(function (_context11) {
                            while (1) switch (_context11.n) {
                              case 0:
                                _context11.n = 1;
                                return load.dismiss();

                              case 1:
                                _context11.n = 2;
                                return this.util.presentAlert('Error', 'Error al conectar la impresora.');

                              case 2:
                                return _context11.a(2);
                            }
                          }, _callee11, this);
                        }));
                      });
                    }, function (error) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee12() {
                        return _regenerator().w(function (_context12) {
                          while (1) switch (_context12.n) {
                            case 0:
                              _context12.n = 1;
                              return load.dismiss();

                            case 1:
                              _context12.n = 2;
                              return this.util.presentAlert('Error', 'Error al conectar la impresora.');

                            case 2:
                              return _context12.a(2);
                          }
                        }, _callee12, this);
                      }));
                    });

                  case 6:
                    return _context13.a(2);
                }
              }, _callee13, this, [[0, 2]]);
            }));
          }
        }]);
      }();

      GanadoresPage.ctorParameters = function () {
        return [{
          type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"]
        }, {
          type: src_app_util_util__WEBPACK_IMPORTED_MODULE_7__["Util"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"]
        }, {
          type: src_app_services_printer_service__WEBPACK_IMPORTED_MODULE_8__["PrinterService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }];
      };

      GanadoresPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ganadores',
        template: _raw_loader_ganadores_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ganadores_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GanadoresPage);
      /***/
    },

    /***/
    "Lw8v":
    /*!*************************************************************!*\
      !*** ./src/app/pages/ganadores/ganadores-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: GanadoresPageRoutingModule */

    /***/
    function Lw8v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GanadoresPageRoutingModule", function () {
        return GanadoresPageRoutingModule;
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


      var _ganadores_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ganadores.page */
      "6F99");

      var routes = [{
        path: '',
        component: _ganadores_page__WEBPACK_IMPORTED_MODULE_3__["GanadoresPage"]
      }];

      var GanadoresPageRoutingModule = /*#__PURE__*/_createClass(function GanadoresPageRoutingModule() {
        _classCallCheck(this, GanadoresPageRoutingModule);
      });

      GanadoresPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GanadoresPageRoutingModule);
      /***/
    },

    /***/
    "ix+G":
    /*!*****************************************************!*\
      !*** ./src/app/pages/ganadores/ganadores.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function ixG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".auto {\n  font-size: 11px;\n  color: darkgray;\n  white-space: nowrap;\n  text-align: right;\n  display: block;\n  padding: 0 12px 6px;\n}\n\n.fila {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 0;\n  font-size: 15px;\n}\n\n.fila strong {\n  color: #000080;\n}\n\n.fila.total {\n  font-size: 17px;\n  border-top: 2px solid #000080;\n  margin-top: 6px;\n  padding-top: 10px;\n}\n\n.vacio {\n  text-align: center;\n  color: gray;\n  margin-top: 12px;\n}\n\n.lista {\n  margin-top: 8px;\n}\n\n.ganador {\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 8px 10px;\n  margin-bottom: 8px;\n}\n\n.ganador .titulo {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n}\n\n.ganador .titulo strong {\n  color: #000080;\n}\n\n.ganador .titulo span {\n  flex: 1;\n}\n\n.ganador .titulo .premio {\n  color: green;\n}\n\n.ganador .detalle {\n  font-size: 12px;\n  color: gray;\n  margin-top: 2px;\n}\n\n.ganador .numeros {\n  margin-top: 4px;\n}\n\n.ganador .numeros .num {\n  display: inline-block;\n  background: #eef3ff;\n  border-radius: 5px;\n  padding: 2px 6px;\n  margin: 2px 4px 0 0;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dhbmFkb3Jlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDSTtFQUNJLGNBQUE7QUFDUjs7QUFFSTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFSOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBR0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQURSOztBQUdRO0VBQ0ksY0FBQTtBQURaOztBQUlRO0VBQ0ksT0FBQTtBQUZaOztBQUtRO0VBQ0ksWUFBQTtBQUhaOztBQU9JO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBTFI7O0FBUUk7RUFDSSxlQUFBO0FBTlI7O0FBUVE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQU5aIiwiZmlsZSI6ImdhbmFkb3Jlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0byB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiBkYXJrZ3JheTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAgMTJweCA2cHg7XG59XG5cbi5maWxhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDZweCAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcblxuICAgIHN0cm9uZyB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDgwO1xuICAgIH1cblxuICAgICYudG90YWwge1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDAwMDgwO1xuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cbn1cblxuLnZhY2lvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmxpc3RhIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5nYW5hZG9yIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAudGl0dWxvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcblxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwODA7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAucHJlbWlvIHtcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kZXRhbGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIH1cblxuICAgIC5udW1lcm9zIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuXG4gICAgICAgIC5udW0ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZjNmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgICAgICAgICBtYXJnaW46IDJweCA0cHggMCAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "r98d":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ganadores/ganadores.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function r98d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]='\"\"' defaultHref='/tabs/tab1'></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">Ganadores</ion-title>\n    </ion-toolbar>\n    <ion-toolbar color='light'>\n        <ion-item>\n            <ion-label>Sorteo:</ion-label>\n            <ion-select placeholder='Seleccione un sorteo' [(ngModel)]='sorteo_id' (ionChange)='sorteoChanged()'\n                [disabled]='cargando || sorteos.length == 0'>\n                <ion-select-option *ngFor='let s of sorteos' [value]='s.id'>\n                    {{s.sorteo_nombre}} - {{s.hora | date: 'hh:mm a'}}\n                </ion-select-option>\n            </ion-select>\n        </ion-item>\n        <span class=\"auto\">auto 10\"<br><span *ngIf=\"actualizado\">act. {{actualizado}}</span></span>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <div *ngIf='cargando' class=\"ion-text-center ion-padding\">\n        Cargando...\n    </div>\n\n    <ion-card *ngIf='!cargando && data'>\n        <ion-card-header>\n            <ion-card-title>{{data.sorteo_nombre || 'Sorteo'}}</ion-card-title>\n            <ion-card-subtitle>{{data.fecha | date: 'EEEE dd/MM/yyyy'}}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <div class=\"fila\">\n                <span>Número ganador</span>\n                <ion-badge [color]=\"data.numero_ganador ? 'success' : 'medium'\">\n                    {{data.numero_ganador ? data.numero_ganador : 'Pendiente'}}\n                </ion-badge>\n            </div>\n\n            <div class=\"fila\" *ngIf='data.numero_ganador'>\n                <span>Boletos ganadores</span>\n                <strong>{{data.total_boletos}}</strong>\n            </div>\n            <div class=\"fila total\" *ngIf='data.numero_ganador'>\n                <span>Total premios</span>\n                <strong>{{money(data.total_premios)}}</strong>\n            </div>\n\n            <p *ngIf='!data.numero_ganador' class=\"vacio\">\n                Esperando que se fije el número ganador... se actualiza solo.\n            </p>\n\n            <div class=\"lista\" *ngIf='data.numero_ganador'>\n                <div class=\"ganador\" *ngFor='let b of data.boletos' (click)='verBoleto(b)'>\n                    <div class=\"titulo\">\n                        <strong>#{{b.id}}</strong>\n                        <span>{{b.hora}} · {{b.cliente_nombre || 'Cliente de Contado'}}</span>\n                        <strong class=\"premio\">{{money(b.premio)}}</strong>\n                    </div>\n                    <div class=\"detalle\" *ngIf='b.empleado_nombre || b.usuario_nombre'>\n                        Máq: {{b.empleado_nombre}}<ng-container *ngIf='b.usuario_nombre'> ({{b.usuario_nombre}})</ng-container>\n                    </div>\n                    <div class=\"numeros\">\n                        <span *ngFor='let n of b.numeros' class=\"num\">\n                            {{n.numero}} · {{money(n.inversion)}} → {{money(n.ganancia)}}\n                        </span>\n                    </div>\n                </div>\n\n                <p *ngIf='data.boletos.length == 0' class=\"vacio\">\n                    Ningún boleto le ganó a este sorteo.\n                </p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n\n    <div *ngIf='!cargando && !data && sorteos.length == 0' class=\"ion-text-center ion-padding\">\n        No hubo ventas hoy en ningún sorteo.\n    </div>\n</ion-content>\n\n<ion-footer *ngIf='data && data.numero_ganador'>\n    <ion-toolbar>\n        <ion-button expand=\"block\" (click)=\"imprimir()\">Imprimir reporte</ion-button>\n    </ion-toolbar>\n</ion-footer>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-ganadores-ganadores-module-es5.js.map