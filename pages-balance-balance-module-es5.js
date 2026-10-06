(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-balance-balance-module"], {
    /***/
    "0JcB":
    /*!***********************************************!*\
      !*** ./src/app/pages/balance/balance.page.ts ***!
      \***********************************************/

    /*! exports provided: BalancePage */

    /***/
    function JcB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BalancePage", function () {
        return BalancePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_balance_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./balance.page.html */
      "LM0h");
      /* harmony import */


      var _balance_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./balance.page.scss */
      "QBJw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/base.service */
      "Do2H");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ion2-calendar */
      "zTSL");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_util_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/util/util */
      "JQC8");
      /* harmony import */


      var _detalle_balance_detalle_balance_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../detalle-balance/detalle-balance.page */
      "6ASw");
      /* harmony import */


      var esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! esc-pos-encoder */
      "oLKi");
      /* harmony import */


      var esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var src_app_services_printer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/printer.service */
      "UbLU");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../shared/sub-menu/sub-menu.page */
      "YY6p");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _balance_filtro_balance_filtro_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../balance-filtro/balance-filtro.page */
      "ngqc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var BalancePage = /*#__PURE__*/function () {
        function BalancePage(bs, modalCtrl, loadCtrl, util, popoverCtrl, currencyPipe, printer, alertCtrl, storage, toastCtrl) {
          var _this = this;

          _classCallCheck(this, BalancePage);

          this.bs = bs;
          this.modalCtrl = modalCtrl;
          this.loadCtrl = loadCtrl;
          this.util = util;
          this.popoverCtrl = popoverCtrl;
          this.currencyPipe = currencyPipe;
          this.printer = printer;
          this.alertCtrl = alertCtrl;
          this.storage = storage;
          this.toastCtrl = toastCtrl;
          this.sorteosDict = {
            'r': 'Regular',
            'j2': 'Juega 2',
            'j3': 'Juega 3',
            'f': 'Fechas'
          };
          this.searchTerm = '';
          this.empleados = [];
          this.original = [];
          this.vb = false;
          this.tv = 0;
          this.loaded = false;
          this.isAdmin = false;
          this.allEmployees = [];
          this.empleadoSelected = {
            id: -1,
            nombre: ''
          };
          this.agente = {
            id: -1,
            nombre: ''
          };
          this.sorteo_tipo = '';
          this.sort = '';
          this.pais_id = null;
          this.refreshTimer = null;
          this.refreshing = false;
          this.lastSig = '';
          this.turnos = ['10:00 AM', '11:00 AM', '12:50 PM', '03:00 PM', '04:30 PM', '06:00 PM', '07:30 PM', '09:00 PM', 'TODOS'];
          this.secondPage = false;

          this.sumVendido = function (balances) {
            return balances.sumBy(function (x) {
              return x.vendido;
            });
          };

          this.sumPagado = function (balances) {
            return balances.sumBy(function (x) {
              return x.ganancia;
            });
          };

          this.sumComision = function (balances) {
            return balances.sumBy(function (x) {
              return x.comision;
            });
          };

          this.sumBalance = function (balances) {
            return balances.sumBy(function (x) {
              return x.balance;
            });
          };

          this.totalVendido = function () {
            return _this.empleado ? _this.empleado.balances.sumBy(function (x) {
              return x.vendido;
            }) : _this.empleados.sumBy(function (x) {
              return x.balances.sumBy(function (y) {
                return y.vendido;
              });
            });
          };

          this.totalPagado = function () {
            return _this.empleado ? _this.empleado.balances.sumBy(function (x) {
              return x.ganancia;
            }) : _this.empleados.sumBy(function (x) {
              return x.balances.sumBy(function (y) {
                return y.ganancia;
              });
            });
          };

          this.totalBalance = function () {
            return _this.empleado ? _this.empleado.balances.sumBy(function (x) {
              return x.balance;
            }) : _this.empleados.sumBy(function (x) {
              return x.balances.sumBy(function (y) {
                return y.balance;
              });
            });
          };

          this.totalComision = function () {
            return _this.empleados.sumBy(function (x) {
              return x.balances.sumBy(function (y) {
                return y.comision;
              });
            });
          };

          this.itemHeightFn = function (item, index) {
            return 240;
          };

          this.itemHeightFn2 = function (item, index) {
            return 170;
          };

          this.itemHeightFn3 = function (item, index) {
            return 280;
          };

          this.toAbs = function (number) {
            return Math.abs(number);
          };

          this.isPos = false;
          this.supervisor = {
            id: -1,
            nombre: '',
            agentes: []
          }; // bs.get(bs.BALANCE_URL)

          this.from_date = moment__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY/MM/DD');
          this.to_date = moment__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY/MM/DD');
          this.bs.getEmpleado().then(function (e) {
            _this.isAdmin = e.usuario.isadmin;
            _this.vb = e.usuario.isadmin ? true : e.usuario.vb;
            _this.tv = e.usuario.isadmin ? 0 : e.usuario.tv;
          });
        }

        return _createClass(BalancePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.load();
            this.startAutoRefresh();
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.stopAutoRefresh();
          }
        }, {
          key: "startAutoRefresh",
          value: function startAutoRefresh() {
            var _this2 = this;

            this.stopAutoRefresh();
            this.refreshTimer = setInterval(function () {
              if (_this2.secondPage || _this2.refreshing) return; // no refrescar mientras el usuario tiene un modal/filtro/calendario abierto

              if (document.querySelector('ion-modal, ion-popover, ion-alert, ion-action-sheet, ion-loading')) return;

              _this2.load(true);
            }, 5000);
          }
        }, {
          key: "stopAutoRefresh",
          value: function stopAutoRefresh() {
            if (this.refreshTimer) {
              clearInterval(this.refreshTimer);
              this.refreshTimer = null;
            }
          }
        }, {
          key: "load",
          value: function load() {
            var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this3 = this;

              var load, d, sig, _t;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    if (!this.refreshing) {
                      _context.n = 1;
                      break;
                    }

                    return _context.a(2);

                  case 1:
                    this.refreshing = true;
                    load = null;

                    if (silent) {
                      _context.n = 3;
                      break;
                    }

                    this.loaded = false;
                    _context.n = 2;
                    return this.loadCtrl.create({
                      message: 'Cargando...'
                    });

                  case 2:
                    load = _context.v;
                    _context.n = 3;
                    return load.present();

                  case 3:
                    _context.p = 3;
                    _context.n = 4;
                    return this.bs.get(this.bs.BALANCE_URL + '/' + this.from_date.replace(/\//g, "-") + '/' + this.to_date.replace(/\//g, "-"), true);

                  case 4:
                    d = _context.v;
                    // Ordenar por balance de menor a mayor
                    d.sort(function (x, y) {
                      return _this3.sumBalance(x.balances) > _this3.sumBalance(y.balances) ? 1 : -1;
                    });
                    sig = JSON.stringify(d);

                    if (!(silent && sig === this.lastSig)) {
                      _context.n = 5;
                      break;
                    }

                    return _context.a(2);

                  case 5:
                    this.lastSig = sig;
                    this.empleados = d;
                    this.original = d.clone();
                    this.allEmployees = this.empleados.filter(function (x) {
                      return x.agentes.length > 0;
                    }).map(function (x) {
                      return {
                        id: x.empleado_id,
                        nombre: x.empleado_nombre,
                        agentes: x.agentes
                      };
                    });
                    this.loaded = true;
                    this.search({
                      target: {
                        value: this.searchTerm
                      }
                    });
                    _context.n = 7;
                    break;

                  case 6:
                    _context.p = 6;
                    _t = _context.v;
                    this.loaded = true;

                    if (silent) {
                      _context.n = 7;
                      break;
                    }

                    _context.n = 7;
                    return this.util.handleError(_t);

                  case 7:
                    _context.p = 7;

                    if (!load) {
                      _context.n = 8;
                      break;
                    }

                    _context.n = 8;
                    return load.dismiss();

                  case 8:
                    this.refreshing = false;
                    return _context.f(7);

                  case 9:
                    return _context.a(2);
                }
              }, _callee, this, [[3, 6, 7, 9]]);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openCalendar",
          value: function openCalendar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var from, to, options, z, myCalendar, x, modal, data, _t2;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    from = new Date('2020/01/01 00:00:00');
                    to = undefined;
                    _t2 = this.tv;
                    _context2.n = _t2 === 1 ? 1 : _t2 === 2 ? 2 : _t2 === 3 ? 3 : 4;
                    break;

                  case 1:
                    from = new Date(moment__WEBPACK_IMPORTED_MODULE_6___default()().add(-moment__WEBPACK_IMPORTED_MODULE_6___default()().weekday(), 'days').add(-1, 'week').format('YYYY/MM/DD'));
                    to = new Date();
                    return _context2.a(3, 4);

                  case 2:
                    from = new Date(moment__WEBPACK_IMPORTED_MODULE_6___default()().add(-moment__WEBPACK_IMPORTED_MODULE_6___default()().weekday(), 'days').add(-2, 'week').format('YYYY/MM/DD'));
                    to = new Date();
                    return _context2.a(3, 4);

                  case 3:
                    from = new Date(moment__WEBPACK_IMPORTED_MODULE_6___default()().add(-1, 'month').format('YYYY/MM/01'));
                    to = new Date();
                    return _context2.a(3, 4);

                  case 4:
                    console.log('vb', this.vb);
                    options = {
                      title: '',
                      pickMode: 'range',
                      doneLabel: 'Aceptar',
                      closeLabel: 'Cancelar',
                      type: 'string',
                      defaultDateRange: {
                        from: new Date(this.from_date),
                        to: new Date(this.to_date)
                      },
                      defaultDate: new Date(this.from_date),
                      defaultScrollTo: new Date(),
                      from: from,
                      to: to,
                      weekdays: ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SÁ']
                    };
                    moment__WEBPACK_IMPORTED_MODULE_6___default.a.updateLocale('es', {
                      monthsShort: {
                        format: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
                        standalone: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_')
                      }
                    });
                    z = moment__WEBPACK_IMPORTED_MODULE_6___default.a.weekdays();
                    console.log(z); // months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
                    // monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
                    // weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
                    // weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
                    // weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')

                    _context2.n = 5;
                    return this.modalCtrl.create({
                      component: ion2_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModal"],
                      componentProps: {
                        options: options
                      }
                    });

                  case 5:
                    myCalendar = _context2.v;
                    x = myCalendar.parentElement;
                    modal = document.getElementsByTagName('ion-modal')[0];
                    console.log(modal); // modal.style.transform = 'translate(0, 100%)';
                    // modal.style.transition = '.2s all ease';
                    // modal.style.animation = 'fadeIn .3s forwards';

                    _context2.n = 6;
                    return myCalendar.present();

                  case 6:
                    _context2.n = 7;
                    return myCalendar.onDidDismiss();

                  case 7:
                    data = _context2.v.data;
                    // console.log(data);
                    console.log(data);

                    if (data) {
                      this.from_date = data.from.string.replace('-', '/');
                      this.to_date = data.to.string.replace('-', '/');
                      console.log(data);
                      this.load();
                    }

                  case 8:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "applyFilter1",
          value: function applyFilter1() {
            var _this4 = this;

            // this.empleados = [...this.original];
            this.empleados = this.original.clone();

            if (this.supervisor.id != -1) {
              console.log('Supersivor', this.supervisor);
              var emps_id = JSON.parse(JSON.stringify(this.supervisor.agentes));
              emps_id.push(this.supervisor.id);
              this.empleados = this.empleados.filter(function (x) {
                return emps_id.includes(x.empleado_id);
              });
              console.log('empleados', this.empleados);
            } else if (this.agente.id != -1) {
              this.empleados = this.empleados.filter(function (x) {
                return x.empleado_id == _this4.agente.id;
              });
            }

            if (this.sorteo_tipo) this.empleados.forEach(function (x) {
              return x.balances = x.balances.filter(function (y) {
                return y.sorteo_tipo == _this4.sorteo_tipo;
              });
            });

            if (this.turno) {
              this.empleados.forEach(function (x) {
                return x.balances = x.balances.filter(function (y) {
                  return moment__WEBPACK_IMPORTED_MODULE_6___default()(y.juego_fecha).format('hh:mm A') == _this4.turno;
                });
              });
            }

            if (this.pais_id) {
              this.empleados.forEach(function (x) {
                return x.balances = x.balances.filter(function (y) {
                  return y.pais_id == _this4.pais_id;
                });
              });
            }

            this.empleados.removeBy(function (x) {
              return _this4.sumVendido(x.balances) == 0;
            }); // console.log(this.empleados);

            if (this.sort == 'Más Vendido') {
              this.empleados.sort(function (x, y) {
                return _this4.sumVendido(x.balances) < _this4.sumVendido(y.balances) ? 1 : -1;
              });
            } else if (this.sort == 'Menos Vendido') {
              this.empleados.sort(function (x, y) {
                return _this4.sumVendido(x.balances) > _this4.sumVendido(y.balances) ? 1 : -1;
              });
            } else if (this.sort == 'Más Pagado') {
              this.empleados.sort(function (x, y) {
                return _this4.sumPagado(x.balances) < _this4.sumPagado(y.balances) ? 1 : -1;
              });
            } else if (this.sort == 'Menos Pagado') {
              this.empleados.sort(function (x, y) {
                return _this4.sumPagado(x.balances) > _this4.sumPagado(y.balances) ? 1 : -1;
              });
            } else if (this.sort == 'Más Balance') {
              this.empleados.sort(function (x, y) {
                return _this4.sumBalance(x.balances) < _this4.sumBalance(y.balances) ? 1 : -1;
              });
            } else if (this.sort == 'Menos Balance') {
              this.empleados.sort(function (x, y) {
                return _this4.sumBalance(x.balances) > _this4.sumBalance(y.balances) ? 1 : -1;
              });
            }
          }
        }, {
          key: "search",
          value: function search(evt) {
            this.applyFilter1();
            var term = evt.target.value.trim();
            if (term == '') this.empleados = this.empleados.clone();else this.empleados = this.empleados.filter(function (x) {
              return x.usuario_nombre.trim().toLowerCase().indexOf(term) > -1;
            });
            if (this.secondPage && this.supervisor.id != -1) this.secondPage = false; // if (this.secondPage)
            // {
            //   console.log(this.empleado);
            //   // console.log
            //   this.empleado = this.empleados.find(x => x.empleado_id == this.empleado.empleado_id);
            //   if (!this.empleado)
            //   {
            //     this.empleado = this.empleados.find(x => x.empleado_id == this.empleadoSelected.id);
            //     if (!this.empleado)
            //       this.secondPage = false;
            //   }
            // }
            // else
            // {
            //   this.empleado = this.empleados.find(x => x.empleado_id == this.empleadoSelected.id);
            //   if (this.empleado)
            //     this.secondPage = true;
            //   else
            //     this.secondPage = false;
            // }
          }
        }, {
          key: "verDetalle",
          value: function verDetalle(emp) {
            this.empleado = emp;
            this.empleado.balances = this.empleado.balances.sort(function (x, y) {
              return x.juego_fecha > y.juego_fecha;
            });
            this.secondPage = true;
            this.content.scrollToTop();
          }
        }, {
          key: "verDetalleBalance",
          value: function verDetalleBalance(balance) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var modal;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    console.log(balance);
                    _context3.n = 1;
                    return this.modalCtrl.create({
                      component: _detalle_balance_detalle_balance_page__WEBPACK_IMPORTED_MODULE_9__["DetalleBalancePage"],
                      componentProps: {
                        balance: balance,
                        agente: this.empleado.empleado_nombre,
                        usuario: {
                          id: this.empleado.usuario_id,
                          nombre: this.empleado.usuario_nombre
                        }
                      }
                    });

                  case 1:
                    modal = _context3.v;
                    _context3.n = 2;
                    return modal.present();

                  case 2:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "printBalance1",
          value: function printBalance1() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this5 = this;

              var sorteos, inputs, alert;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    sorteos = []; // if (this.secondPage)
                    //   sorteos = this.empleado.balances.distinctBy(x => moment(x.juego_fech).format('hh:mm A'));
                    // else
                    //   sorteos = this.empleados.map(x => x.balances).flat().distinctBy(x => moment(x.juego_fech).format('hh:mm A'));

                    inputs = [];

                    if (!this.turno) {
                      this.turnos.forEach(function (s) {
                        inputs.push({
                          type: 'radio',
                          label: s,
                          value: s
                        });
                      });
                    } else {
                      inputs.push({
                        type: 'radio',
                        label: this.turno,
                        value: this.turno
                      });
                    }

                    _context5.n = 1;
                    return this.alertCtrl.create({
                      header: 'Imprimir Balance',
                      message: 'Por favor seleccione un turno',
                      inputs: inputs,
                      buttons: [{
                        text: 'Cancelar',
                        role: 'destructive',
                        cssClass: 'danger'
                      }, {
                        text: 'Seleccionar',
                        handler: function handler(v) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
                            var _this6 = this;

                            var alert1;
                            return _regenerator().w(function (_context4) {
                              while (1) switch (_context4.n) {
                                case 0:
                                  _context4.n = 1;
                                  return this.alertCtrl.create({
                                    header: 'Imprimir Balance',
                                    message: 'Por favor seleccione un tipo',
                                    inputs: this.sorteo_tipo ? [{
                                      label: this.sorteosDict[this.sorteo_tipo],
                                      value: this.sorteo_tipo,
                                      type: 'radio'
                                    }] : [{
                                      label: 'Regular',
                                      value: 'r',
                                      type: 'radio'
                                    }, {
                                      label: 'Juega 3',
                                      value: 'j3',
                                      type: 'radio'
                                    }, {
                                      label: 'Fechas',
                                      value: 'f',
                                      type: 'radio'
                                    }, {
                                      label: 'Todos',
                                      value: 'TODOS',
                                      type: 'radio'
                                    }],
                                    buttons: [{
                                      text: 'Cancelar',
                                      role: 'destructive',
                                      cssClass: 'danger'
                                    }, {
                                      text: 'Seleccionar',
                                      handler: function handler(t) {
                                        _this6.printBalances(_this6.secondPage ? [_this6.empleado] : _this6.empleados, v, t);
                                      }
                                    }]
                                  });

                                case 1:
                                  alert1 = _context4.v;
                                  _context4.n = 2;
                                  return alert1.present();

                                case 2:
                                  return _context4.a(2);
                              }
                            }, _callee4, this);
                          }));
                        }
                      }]
                    });

                  case 1:
                    alert = _context5.v;
                    _context5.n = 2;
                    return alert.present();

                  case 2:
                    return _context5.a(2);
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "printBalance2",
          value: function printBalance2() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var encoder, result, from, to, fecha, hasSomething, count, emps, _iterator, _step, empleado, pago, comision;

              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    encoder = new esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10___default.a();
                    result = encoder.initialize(); // Sunmi: por defecto chino (multibyte). FS . cierra multibyte, ESC t 10 = Windows-1252

                    result.raw([0x1c, 0x2e]);
                    result.raw([0x1b, 0x74, 0x10]);
                    result._codepage = 'windows1252';
                    from = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.from_date).format('DD/MM/YYYY');
                    to = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.to_date).format('DD/MM/YYYY');
                    fecha = from != to ? from + ' - ' + to : from;
                    hasSomething = false;
                    count = 0;
                    emps = _toConsumableArray(this.empleados); // let groupped = this.empleado.balances.groupBy(x => x.sorteo_id);

                    _iterator = _createForOfIteratorHelper(emps);

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        empleado = _step.value;
                        pago = empleado.balances.sumBy(function (x) {
                          return x.comision_ventas;
                        });
                        comision = empleado.balances.sumBy(function (x) {
                          return x.comision_balance;
                        });
                        if (comision < 0) comision = 0;
                        result.align('center').size('normal').bold(true).align('left').line('Período:  ' + fecha).line(empleado.empleado_nombre + " (".concat(empleado.usuario_nombre, ")")).bold(false).line('Pago:     ' + this.currencyPipe.transform(pago, 'C$'));
                        if (comision > 0) result.line('Comisión: ' + this.currencyPipe.transform(comision, 'C$'));
                        result.line('Total:    ' + this.currencyPipe.transform(Number(+comision + +pago).toFixed(2), 'C$')).align('center').line(this.util.commands.HORIZONTAL_LINE.HR_58MM);
                      } // console.log()

                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }

                    if (emps.length > 0) {
                      this.mountAlertBt(result.newline().newline().newline().encode(), count);
                    } else this.util.presentAlert('Aviso', 'No hay agentes seleccionados');

                  case 1:
                    return _context6.a(2);
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "printBalances",
          value: function printBalances(emps, turno, t) {
            var _this7 = this;

            var encoder = new esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10___default.a();
            var result = encoder.initialize(); // Sunmi: por defecto chino (multibyte). FS . cierra multibyte, ESC t 10 = Windows-1252

            result.raw([0x1c, 0x2e]);
            result.raw([0x1b, 0x74, 0x10]);
            result._codepage = 'windows1252';
            var from = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.from_date).format('DD/MM/YYYY');
            var to = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.to_date).format('DD/MM/YYYY');
            var fecha = from != to ? from + ' - ' + to : from;
            var hasSomething = false;
            var count = 0; // let groupped = this.empleado.balances.groupBy(x => x.sorteo_id);

            var _iterator2 = _createForOfIteratorHelper(emps),
                _step2;

            try {
              var _loop = function _loop() {
                var empleado = _step2.value;
                var count1 = 0;
                var groupped = empleado.balances.groupBy(function (x) {
                  return moment__WEBPACK_IMPORTED_MODULE_6___default()(x.juego_fecha).format('hh:mm A');
                }); // console.log(groupped);
                // console.log(groupped);

                var s = '';
                groupped.forEach(function (bg) {
                  // console.log(turno, '==', moment(bg[0].juego_id).format('hh:mm A'), turno == moment(bg[0].juego_fecha).format('hh:mm A'));
                  if (turno == 'TODOS' || turno == moment__WEBPACK_IMPORTED_MODULE_6___default()(bg[0].juego_fecha).format('hh:mm A')) {
                    var groupped2 = bg.flatMap(function (z) {
                      return z;
                    }).groupBy(function (z) {
                      return z.sorteo_tipo;
                    });
                    groupped2.forEach(function (bg2) {
                      if (t == 'TODOS' || t == bg2[0].sorteo_tipo) {
                        result.align('center').size('normal').bold(false).align('left').line('Fecha:   ' + fecha).line('Hora:    ' + moment__WEBPACK_IMPORTED_MODULE_6___default()(bg[0].juego_fecha).format('hh:mm A')).line("Sorteo:  ".concat(bg[0].sorteo_nombre)).line("Tipo:    ".concat(_this7.sorteosDict[bg2[0].sorteo_tipo])).line('Agente:  ' + empleado.empleado_nombre).line('Total:   ' + _this7.currencyPipe.transform(bg2.sumBy(function (x) {
                          return x.vendido;
                        }), 'C$')).align('center').line(_this7.util.commands.HORIZONTAL_LINE.HR_58MM); // console.log('Fecha:   ' + fecha);
                        // console.log('Hora:    ' + moment(bg[0].juego_fecha).format('hh:mm A'));
                        // console.log(`Sorteo:  [${bg[0].grupo_nombre}] ${bg[0].sorteo_nombre}`);
                        // console.log(`Tipo:    ${this.sorteosDict[bg2[0].sorteo_tipo]}`);
                        // console.log('Agente:  ' + empleado.empleado_nombre);
                        // console.log('Total:   ' + this.currencyPipe.transform(bg2.sumBy(x => x.vendido), 'C$'));
                        // console.log(this.util.commands.HORIZONTAL_LINE.HR_58MM);

                        count++;
                        count1++;
                      }
                    });
                  }
                });
              };

              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                _loop();
              } // console.log()

            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (count > 0) {
              this.mountAlertBt(result.newline().newline().newline().encode(), count);
            } else this.util.presentAlert('Aviso', 'Este turno está vacío');
          }
        }, {
          key: "mountAlertBt",
          value: function mountAlertBt(data, total) {
            var _this8 = this;

            this.printer.enableBluetooth().then(function () {
              if (_this8.util.IMPRESORA_ADDRESS == '') {
                _this8.printer.searchBluetooth().then(function (devices) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
                    var _this9 = this;

                    var inputs, alert;
                    return _regenerator().w(function (_context8) {
                      while (1) switch (_context8.n) {
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
                            _context8.n = 1;
                            break;
                          }

                          return _context8.a(2, window.alert('NO HAY IMPRESORA CONECTADA'));

                        case 1:
                          _context8.n = 2;
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
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
                                  return _regenerator().w(function (_context7) {
                                    while (1) switch (_context7.n) {
                                      case 0:
                                        if (!device) {
                                          _context7.n = 2;
                                          break;
                                        }

                                        _context7.n = 1;
                                        return this.storage.set('impresora_address', device);

                                      case 1:
                                        this.util.IMPRESORA_ADDRESS = device;
                                        this.print(device, data, total);
                                        _context7.n = 3;
                                        break;

                                      case 2:
                                        return _context7.a(2, window.alert('NO SE SELECCIONÓ LA IMPRESORA'));

                                      case 3:
                                        return _context7.a(2);
                                    }
                                  }, _callee7, this);
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
                })["catch"](function (error) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee9() {
                    return _regenerator().w(function (_context9) {
                      while (1) switch (_context9.n) {
                        case 0:
                          _context9.n = 1;
                          return this.util.presentAlert('Error', 'Error al conectar con la impresora #1.');

                        case 1:
                          return _context9.a(2);
                      }
                    }, _callee9, this);
                  }));
                });
              } else {
                _this8.print(_this8.util.IMPRESORA_ADDRESS, data, total);
              }
            })["catch"](function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee0() {
                return _regenerator().w(function (_context0) {
                  while (1) switch (_context0.n) {
                    case 0:
                      _context0.n = 1;
                      return this.util.presentAlert('Error', 'Error al conectar con la impresora. #2');

                    case 1:
                      return _context0.a(2);
                  }
                }, _callee0, this);
              }));
            });
          }
        }, {
          key: "print",
          value: function print(device, data, total) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee12() {
              var _this0 = this;

              var load, _t4;

              return _regenerator().w(function (_context12) {
                while (1) switch (_context12.p = _context12.n) {
                  case 0:
                    _context12.p = 0;
                    _context12.n = 1;
                    return this.printer.disconnectBluetooth();

                  case 1:
                    _context12.n = 3;
                    break;

                  case 2:
                    _context12.p = 2;
                    _t4 = _context12.v;

                  case 3:
                    console.log('Device mac: ', device);
                    console.log('Data: ', JSON.stringify(data));
                    _context12.n = 4;
                    return this.loadCtrl.create({
                      message: 'Imprimiendo boletos...'
                    });

                  case 4:
                    load = _context12.v;
                    _context12.n = 5;
                    return load.present();

                  case 5:
                    this.printer.connectBluetooth(device).subscribe(function () {
                      console.log(status);

                      _this0.printer.printData(data).then(function (printStatus) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee1() {
                          var toast, _t3;

                          return _regenerator().w(function (_context1) {
                            while (1) switch (_context1.p = _context1.n) {
                              case 0:
                                _context1.n = 1;
                                return load.dismiss();

                              case 1:
                                _context1.n = 2;
                                return this.toastCtrl.create({
                                  message: 'Se Imprimieron ' + total + ' balances con éxito',
                                  buttons: ['OK'],
                                  duration: 1500
                                });

                              case 2:
                                toast = _context1.v;
                                _context1.n = 3;
                                return toast.present();

                              case 3:
                                _context1.p = 3;
                                _context1.n = 4;
                                return this.printer.disconnectBluetooth();

                              case 4:
                                _context1.n = 6;
                                break;

                              case 5:
                                _context1.p = 5;
                                _t3 = _context1.v;
                                console.log('Error al desconectar la impresora, por favor reiniciar el Bluetooth #3');

                              case 6:
                                return _context1.a(2);
                            }
                          }, _callee1, this, [[3, 5]]);
                        }));
                      })["catch"](function (error) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee10() {
                          return _regenerator().w(function (_context10) {
                            while (1) switch (_context10.n) {
                              case 0:
                                _context10.n = 1;
                                return load.dismiss();

                              case 1:
                                _context10.n = 2;
                                return this.util.presentAlert('Error', 'Error al imprimir. #4 ' + error);

                              case 2:
                                return _context10.a(2);
                            }
                          }, _callee10, this);
                        }));
                      });
                    }, function (error) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee11() {
                        return _regenerator().w(function (_context11) {
                          while (1) switch (_context11.n) {
                            case 0:
                              _context11.n = 1;
                              return load.dismiss();

                            case 1:
                              _context11.n = 2;
                              return this.util.presentAlert('Error', 'Error al conectar la impresora. #5');

                            case 2:
                              return _context11.a(2);
                          }
                        }, _callee11, this);
                      }));
                    });

                  case 6:
                    return _context12.a(2);
                }
              }, _callee12, this, [[0, 2]]);
            }));
          }
        }, {
          key: "openSubMenu",
          value: function openSubMenu(evt) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee13() {
              var _this1 = this;

              var emp, issupervisor, isAdmin, imprimirBalances, imprimirPagos, options, popover;
              return _regenerator().w(function (_context13) {
                while (1) switch (_context13.n) {
                  case 0:
                    _context13.n = 1;
                    return this.bs.getEmpleado();

                  case 1:
                    emp = _context13.v;
                    issupervisor = emp.empleados.length > 0;
                    isAdmin = emp.usuario.isadmin;
                    imprimirBalances = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
                    imprimirPagos = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
                    options = [{
                      name: 'Imprimir Balances',
                      icon: 'print-outline',
                      event: imprimirBalances,
                      type: 'button'
                    }];
                    if (issupervisor || isAdmin) options.push({
                      name: 'Imprimir Pagos',
                      icon: 'cash-outline',
                      event: imprimirPagos,
                      type: 'button'
                    });
                    imprimirBalances.subscribe(function () {
                      return _this1.printBalance1();
                    });
                    imprimirPagos.subscribe(function () {
                      return _this1.printBalance2();
                    });
                    _context13.n = 2;
                    return this.popoverCtrl.create({
                      component: _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_13__["SubMenuPage"],
                      event: evt,
                      cssClass: 'sub-menu',
                      componentProps: {
                        options: options
                      }
                    });

                  case 2:
                    popover = _context13.v;
                    _context13.n = 3;
                    return popover.present();

                  case 3:
                    _context13.n = 4;
                    return popover.onWillDismiss();

                  case 4:
                    return _context13.a(2);
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "openFilter",
          value: function openFilter(evt) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee14() {
              var modal, _yield$modal$onWillDi, data;

              return _regenerator().w(function (_context14) {
                while (1) switch (_context14.n) {
                  case 0:
                    _context14.n = 1;
                    return this.modalCtrl.create({
                      component: _balance_filtro_balance_filtro_page__WEBPACK_IMPORTED_MODULE_15__["BalanceFiltroPage"],
                      componentProps: {
                        supervisor: Object.assign({}, this.supervisor),
                        sorteo_tipo: this.sorteo_tipo,
                        turno: this.turno,
                        empleados: [],
                        agente: this.agente,
                        pais_id: this.pais_id,
                        sort: this.sort
                      }
                    });

                  case 1:
                    modal = _context14.v;
                    _context14.n = 2;
                    return modal.present();

                  case 2:
                    _context14.n = 3;
                    return modal.onWillDismiss();

                  case 3:
                    _yield$modal$onWillDi = _context14.v;
                    data = _yield$modal$onWillDi.data;

                    if (data) {
                      this.supervisor = Object.assign({}, data.supervisor);
                      this.turno = data.turno;
                      this.sort = data.sort;
                      this.empleadoSelected = Object.assign({}, data.empleado);
                      this.agente = data.agente;
                      this.sorteo_tipo = data.sorteo_tipo;
                      this.pais_id = data.pais_id;
                      this.search({
                        target: {
                          value: this.searchTerm
                        }
                      });
                    }

                  case 4:
                    return _context14.a(2);
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "getFilterCount",
          value: function getFilterCount() {
            var count = 0;
            if (this.sort) count++;
            if (this.supervisor.id != -1 || this.agente.id != -1) count++;
            if (this.turno) count++;
            if (this.sorteo_tipo) count++;
            if (this.pais_id) count++;
            return count;
          }
        }, {
          key: "abs",
          value: function abs(value) {
            return Math.abs(value);
          }
        }]);
      }();

      BalancePage.ctorParameters = function () {
        return [{
          type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }, {
          type: src_app_util_util__WEBPACK_IMPORTED_MODULE_8__["Util"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["CurrencyPipe"]
        }, {
          type: src_app_services_printer_service__WEBPACK_IMPORTED_MODULE_11__["PrinterService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }];
      };

      BalancePage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"]]
        }]
      };
      BalancePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-balance',
        template: _raw_loader_balance_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_balance_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BalancePage);
      /***/
    },

    /***/
    "LM0h":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/balance/balance.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function LM0h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color='light'>\n    <ion-buttons slot=\"start\">\n      <ion-back-button *ngIf='!secondPage' [text]='\"\"'></ion-back-button>\n      <ion-button *ngIf='secondPage' (click)='secondPage = false; empleado = null;'>\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"center\">Balance {{secondPage ? ' de ' + empleado?.usuario_nombre : ''}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <span\n        *ngIf='supervisor.id != -1 || turno || sorteo_tipo || agente.id != -1 || pais_id || sort'>{{getFilterCount()}}</span>\n      <ion-button [disabled]=\"secondPage\" (click)=\"openFilter($event)\">\n        <ion-icon name=\"filter\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n      <ion-button [disabled]='empleados.length == 0' (click)=\"openSubMenu($event)\">\n        <ion-icon name=\"ellipsis-vertical\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar class=\"toolbar\" color='light' [ngClass]=\"{'max': secondPage}\" *ngIf='!secondPage'>\n    <div class=\"top\">\n      <ion-searchbar [disabled]='secondPage' (ionInput)='search($event)' [(ngModel)]='searchTerm'\n        placeholder='Buscar...'></ion-searchbar>\n      <div style=\"display: flex; justify-content: flex-end; padding: 0 8px; margin: 10px 0 20px 0;\"\n        (click)='openCalendar()'>\n        <ion-button fill='clear'>{{from_date == to_date ? (from_date | date: 'dd/MM/yyyy') : (from_date | date:\n          'dd/MM/yyyy') + ' - ' + (to_date | date: 'dd/MM/yyyy')}} <ion-icon\n            name=\"calendar-outline\"></ion-icon></ion-button>\n      </div>\n\n      <!-- <ion-calendar> </ion-calendar> -->\n      <!-- <ionic-calendar-date-picker (onSelect)=\"dateSelected($event)\"></ionic-calendar-date-picker>\t -->\n      <!-- <ion-calendar [(ngModel)]=\"date\"                (onChange)=\"onChange($event)\"                [type]=\"type\"                [format]=\"'YYYY-MM-DD'\"                [options]='optionsRange'>  </ion-calendar> -->\n      <!-- <ion-calendar></ion-calendar> -->\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <h2 style=\"color: darkgray;\" class=\"ion-text-center\" *ngIf='empleados.length == 0 && loaded'>{{original.length == 0 ?\n    'No hay registros' : 'No se encontraron resultados'}}</h2>\n  <div class=\"content\" [ngClass]=\"{'second-page': secondPage}\" *ngIf='empleados.length > 0'>\n\n    <div class=\"page ion-padding\">\n      <ion-card *ngFor=\"let emp of empleados; let i = index; let first = first ;let last = last;\" [style]=\"{\n        'margin-bottom': !last ? '24px' : '0px'\n      }\">\n        <ion-card-header>\n          <ion-label>\n            <strong>{{emp.empleado_nombre}} ({{emp.usuario_nombre}})</strong>\n          </ion-label>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-row class=\"balance-row\">\n            <ion-col size='4'>Vendido</ion-col>\n            <ion-col size='4'>\n              <hr>\n            </ion-col>\n            <ion-col size='4'>{{sumVendido(emp.balances) | currency: 'C$'}}</ion-col>\n          </ion-row>\n          <ion-row class=\"balance-row\" *ngIf='vb'>\n            <ion-col size='4'>Pagado</ion-col>\n            <ion-col size='4'>\n              <hr>\n            </ion-col>\n            <ion-col size='4'>{{sumPagado(emp.balances) | currency: 'C$'}}</ion-col>\n          </ion-row>\n          <ion-row class=\"balance-row\" *ngIf='vb'>\n            <ion-col size='4'>Entrega</ion-col>\n            <ion-col size='4'>\n              <hr>\n            </ion-col>\n            <ion-col size='4' [ngClass]='{\"negative\": sumBalance(emp.balances) < 0}'>{{toAbs(sumBalance(emp.balances)) |\n              currency: 'C$'}}</ion-col>\n          </ion-row>\n        </ion-card-content>\n        <ion-button color='light' size='block' (click)='verDetalle(emp)'>Ver detalle <ion-icon\n            name=\"arrow-forward-circle\"></ion-icon></ion-button>\n      </ion-card>\n    </div>\n\n    <div class=\"page ion-padding\">\n\n      <ion-card *ngFor=\"let balance of empleado?.balances; let i = index; let first = first ;let last = last;\" [style]=\"{\n          'margin-bottom': !last ? '24px' : '0px'\n        }\">\n        <ion-card-header>\n          <ion-label style=\"display: flex; justify-content: space-between; align-items: center;\">\n            <strong>{{balance.sorteo_nombre}}</strong>\n            <span slot=\"end\" style=\"font-size: 12px\">{{balance.juego_fecha | date: 'dd/MM/yyyy hh:mm a'}}</span>\n          </ion-label>\n          <ion-label style=\"display: flex; justify-content: space-between; align-items: center;\">\n            <strong style=\"color: #000080;\">[{{sorteosDict[balance.sorteo_tipo]}}]</strong>\n            <!-- <span slot=\"end\" style=\"font-size: 12px\">{{balance.juego_fecha | date: 'dd/MM/yyyy hh:mm a'}}</span> -->\n          </ion-label>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-row>\n            <h2 class=\"adds winner\" *ngIf='balance.numero_ganador'>NÚMERO GANADOR: {{balance.numero_ganador}}</h2>\n            <h2 class=\"adds no-winner\" *ngIf='!balance.numero_ganador'>{{balance.iscompleted ? 'NO GANADOR' : 'AÚN NO\n              FINALIZADO'}}</h2>\n          </ion-row>\n          <ion-row class=\"balance-row\">\n            <ion-col size='4'>Vendido</ion-col>\n            <ion-col size='4'>\n              <hr>\n            </ion-col>\n            <ion-col size='4'>{{balance.vendido | currency: 'C$'}}</ion-col>\n          </ion-row>\n          <ion-row class=\"balance-row\" *ngIf='vb'>\n            <ion-col size='4'>Pagado</ion-col>\n            <ion-col size='4'>\n              <hr>\n            </ion-col>\n            <ion-col size='4'>{{balance.ganancia | currency: 'C$'}}</ion-col>\n          </ion-row>\n          <!-- <ion-row class=\"balance-row\">\n              <ion-col size='4'>Com. (7%)</ion-col>\n              <ion-col size='4'><hr></ion-col>\n              <ion-col size='4'>{{balance.comision | currency: 'C$'}}</ion-col>\n            </ion-row> -->\n          <ion-row class=\"balance-row\" *ngIf='vb'>\n            <ion-col size='4'>Entrega</ion-col>\n            <ion-col size='4'>\n              <hr>\n            </ion-col>\n            <ion-col size='4' [ngClass]='{\"negative\": balance.balance < 0}'>{{toAbs(balance.balance) | currency:\n              'C$'}}</ion-col>\n          </ion-row>\n        </ion-card-content>\n\n        <ion-button color='light' size='block' (click)='verDetalleBalance(balance)'>Ver detalle <ion-icon\n            name=\"arrow-forward-circle\"></ion-icon></ion-button>\n      </ion-card>\n\n    </div>\n\n\n  </div>\n\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n\n\n    <ion-footer>\n      <ion-toolbar color='light'>\n        <ion-grid>\n          <ion-row class='bottom'>\n            <ion-col size='4'>\n              Total vendido\n            </ion-col>\n            <ng-container *ngIf='vb'>\n\n              <ion-col size='4'>\n                Total Pagado\n              </ion-col>\n              <ion-col size='4'>\n                Total balance\n              </ion-col>\n            </ng-container>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size='4'>\n              {{totalVendido() | currency: 'C$'}}\n            </ion-col>\n            <ng-container *ngIf='vb'>\n              <ion-col size='4'>\n                <!-- {{totalComision() | currency: 'C$'}}\n                      <br> -->\n                {{totalPagado() | currency: 'C$'}}\n              </ion-col>\n              <ion-col size='4' [ngClass]=\"{'negative': totalBalance() < 0}\">\n                {{abs(totalBalance()) | currency: 'C$'}}\n              </ion-col>\n            </ng-container>\n          </ion-row>\n        </ion-grid>\n      </ion-toolbar>\n    </ion-footer>\n\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "QBJw":
    /*!*************************************************!*\
      !*** ./src/app/pages/balance/balance.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function QBJw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-icon {\n  margin-left: 6px;\n}\n\n.balance-row {\n  align-items: center;\n}\n\n.balance-row ion-col {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.balance-row ion-col:last-child {\n  text-align: right;\n  font-weight: bold;\n}\n\nion-content {\n  --background: #F2F2F2;\n}\n\n.bottom {\n  font-size: 13px;\n}\n\n.adds {\n  font-weight: bold;\n  margin: 0 0 10px 0;\n  font-size: 18px;\n}\n\n.adds.winner {\n  color: rgba(19, 71, 78, 0.7);\n}\n\n.adds.no-winner {\n  color: rgba(240, 65, 65, 0.7);\n}\n\n.content {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  overflow: visible;\n  transition: 0.3s all ease;\n}\n\n.content.second-page {\n  transform: translateX(-100%);\n}\n\n.content.second-page .page:first-child {\n  padding: 0;\n  max-height: 0 !important;\n  overflow: hidden;\n}\n\n.content .page {\n  min-width: 100%;\n}\n\n.content .page:nth-child(2) {\n  position: relative;\n}\n\n.content .page:nth-child(2) ion-button.back {\n  position: absolute;\n  top: -17px;\n}\n\nion-card {\n  margin: 0;\n  animation: fadeIn 1s forwards;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.negative {\n  color: #f04141;\n  font-weight: bold;\n}\n\nion-button {\n  font-size: 12px;\n}\n\nion-buttons span {\n  padding: 4px 8.16px;\n  border-radius: 50%;\n  display: inline-block;\n  font-size: 12px;\n  position: absolute;\n  left: 28px;\n  font-weight: bold;\n  top: 0;\n  background: #A70B0B;\n  color: #FFF;\n  pointer-events: none;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JhbGFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7O0FBQ0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDUjs7QUFBUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFFWjs7QUFJQTtFQUNJLHFCQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUdJO0VBQ0ksNEJBQUE7QUFEUjs7QUFHSTtFQUNJLDZCQUFBO0FBRFI7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFISjs7QUFJSTtFQUNJLDRCQUFBO0FBRlI7O0FBSVk7RUFDSSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQUZoQjs7QUFNSTtFQUNJLGVBQUE7QUFKUjs7QUFLUTtFQUNJLGtCQUFBO0FBSFo7O0FBSVk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFGaEI7O0FBVUE7RUFDSSxTQUFBO0VBQ0EsNkJBQUE7QUFQSjs7QUFXQTtFQUVJO0lBQ0ksVUFBQTtFQVROO0VBWUU7SUFDSSxVQUFBO0VBVk47QUFDRjs7QUFtQkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFqQko7O0FBb0JBO0VBQ0ksZUFBQTtBQWpCSjs7QUF1Qkk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxNQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBcEJSIiwiZmlsZSI6ImJhbGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cblxuLmJhbGFuY2Utcm93IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGMkYyRjI7XG59XG5cbi5ib3R0b20ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuXG4uYWRkcyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAmLndpbm5lciB7XG4gICAgICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogIzEzNDc0ZSwgJGFscGhhOiAuNyk7XG4gICAgfVxuICAgICYubm8td2lubmVyIHtcbiAgICAgICAgY29sb3I6IHJnYmEoJGNvbG9yOiAjZjA0MTQxLCAkYWxwaGE6IC43KTtcbiAgICB9XG59XG5cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XG4gICAgJi5zZWNvbmQtcGFnZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIC5wYWdlIHtcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBhZ2Uge1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGlvbi1idXR0b24uYmFjayB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogLTE3cHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMDtcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcyBmb3J3YXJkcztcbn1cblxuXG5Aa2V5ZnJhbWVzIGZhZGVJblxue1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cblxuXG5cblxuXG5cbi5uZWdhdGl2ZSB7XG4gICAgY29sb3I6IHJnYmEoJGNvbG9yOiAjZjA0MTQxLCAkYWxwaGE6IDEpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cblxuaW9uLWJ1dHRvbnMge1xuICAgXG4gICAgc3BhbiB7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4LjE2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYmFja2dyb3VuZDogI0E3MEIwQjtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "YE2F":
    /*!*********************************************************!*\
      !*** ./src/app/pages/balance/balance-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: BalancePageRoutingModule */

    /***/
    function YE2F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BalancePageRoutingModule", function () {
        return BalancePageRoutingModule;
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


      var _balance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./balance.page */
      "0JcB");

      var routes = [{
        path: '',
        component: _balance_page__WEBPACK_IMPORTED_MODULE_3__["BalancePage"]
      }];

      var BalancePageRoutingModule = /*#__PURE__*/_createClass(function BalancePageRoutingModule() {
        _classCallCheck(this, BalancePageRoutingModule);
      });

      BalancePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BalancePageRoutingModule);
      /***/
    },

    /***/
    "msXF":
    /*!*************************************************!*\
      !*** ./src/app/pages/balance/balance.module.ts ***!
      \*************************************************/

    /*! exports provided: BalancePageModule */

    /***/
    function msXF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BalancePageModule", function () {
        return BalancePageModule;
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


      var _balance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./balance-routing.module */
      "YE2F");
      /* harmony import */


      var _balance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./balance.page */
      "0JcB");

      var BalancePageModule = /*#__PURE__*/_createClass(function BalancePageModule() {
        _classCallCheck(this, BalancePageModule);
      });

      BalancePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _balance_routing_module__WEBPACK_IMPORTED_MODULE_5__["BalancePageRoutingModule"]],
        declarations: [_balance_page__WEBPACK_IMPORTED_MODULE_6__["BalancePage"]]
      })], BalancePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-balance-balance-module-es5.js.map