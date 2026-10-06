(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cierre-caja-cierre-caja-module"], {
    /***/
    "9LmO":
    /*!*********************************************************!*\
      !*** ./src/app/pages/cierre-caja/cierre-caja.module.ts ***!
      \*********************************************************/

    /*! exports provided: CierreCajaPageModule */

    /***/
    function LmO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CierreCajaPageModule", function () {
        return CierreCajaPageModule;
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


      var _cierre_caja_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cierre-caja-routing.module */
      "A79s");
      /* harmony import */


      var _cierre_caja_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cierre-caja.page */
      "MtZU");

      var CierreCajaPageModule = /*#__PURE__*/_createClass(function CierreCajaPageModule() {
        _classCallCheck(this, CierreCajaPageModule);
      });

      CierreCajaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cierre_caja_routing_module__WEBPACK_IMPORTED_MODULE_5__["CierreCajaPageRoutingModule"]],
        declarations: [_cierre_caja_page__WEBPACK_IMPORTED_MODULE_6__["CierreCajaPage"]]
      })], CierreCajaPageModule);
      /***/
    },

    /***/
    "A79s":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/cierre-caja/cierre-caja-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: CierreCajaPageRoutingModule */

    /***/
    function A79s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CierreCajaPageRoutingModule", function () {
        return CierreCajaPageRoutingModule;
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


      var _cierre_caja_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cierre-caja.page */
      "MtZU");

      var routes = [{
        path: '',
        component: _cierre_caja_page__WEBPACK_IMPORTED_MODULE_3__["CierreCajaPage"]
      }];

      var CierreCajaPageRoutingModule = /*#__PURE__*/_createClass(function CierreCajaPageRoutingModule() {
        _classCallCheck(this, CierreCajaPageRoutingModule);
      });

      CierreCajaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CierreCajaPageRoutingModule);
      /***/
    },

    /***/
    "Iijm":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cierre-caja/cierre-caja.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Iijm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\" [text]='\"\"'></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">Cierre de caja</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <div class=\"filtros\">\n        <ion-button size=\"small\" fill=\"outline\" (click)=\"ayer()\">Ayer</ion-button>\n        <ion-button size=\"small\" fill=\"outline\" (click)=\"hoy()\">Hoy</ion-button>\n        <input type=\"date\" class=\"fecha-input\" [(ngModel)]=\"fecha\" (change)=\"cargar()\">\n        <span class=\"auto\">auto 10\"<br><span *ngIf=\"actualizado\">act. {{actualizado}}</span></span>\n    </div>\n\n    <ion-list *ngIf=\"isAdmin\">\n        <ion-item>\n            <ion-label>Vendedor</ion-label>\n            <ion-select [ngModel]=\"empleado_id\" (ngModelChange)=\"empleado_id = $event; cargar()\" placeholder=\"Todos\">\n                <ion-select-option value=\"\">Todos</ion-select-option>\n                <ion-select-option *ngFor=\"let e of empleados\" [value]=\"e.id\">{{e.nombre}}<ng-container *ngIf=\"e.usuario?.nombre\"> ({{e.usuario.nombre}})</ng-container></ion-select-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n\n    <div *ngIf=\"cargando\" class=\"ion-text-center\" style=\"padding: 24px;\">\n        <ion-spinner></ion-spinner>\n    </div>\n\n    <ion-card *ngIf=\"data && !cargando\">\n        <ion-card-header>\n            <ion-card-title>{{data.empleado_nombre || 'Todos los vendedores'}}</ion-card-title>\n            <ion-card-subtitle>{{fecha | date: 'dd/MM/yyyy'}}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <div class=\"fila\">\n                <span>Boletos vendidos</span>\n                <strong>{{data.boletos_vendidos}}</strong>\n            </div>\n            <div class=\"fila\">\n                <span>Vendido (inversión)</span>\n                <strong>{{money(data.vendido)}}</strong>\n            </div>\n            <div class=\"fila\">\n                <span>Boletos anulados</span>\n                <strong>{{data.boletos_anulados}} ({{money(data.anulado)}})</strong>\n            </div>\n            <div class=\"fila\">\n                <span>Premios</span>\n                <strong>{{money(data.premios)}}</strong>\n            </div>\n            <div class=\"fila\">\n                <span>Entrega</span>\n                <strong>{{money(data.entrega)}}</strong>\n            </div>\n\n            <hr>\n\n            <ion-item lines=\"none\">\n                <ion-label>Saldo inicial en caja</ion-label>\n                <ion-input type=\"number\" inputmode=\"decimal\" [(ngModel)]=\"saldo_inicial\"\n                           (ionChange)=\"guardarSaldo()\" placeholder=\"0.00\"></ion-input>\n            </ion-item>\n\n            <div class=\"fila\">\n                <span>Efectivo en caja</span>\n                <strong>{{money(efectivoAntesComision())}}</strong>\n            </div>\n            <div class=\"fila\">\n                <span>Comisión del vendedor</span>\n                <strong>-{{money(data.comision)}}</strong>\n            </div>\n\n            <div class=\"desglose\" *ngIf=\"data.por_vendedor && data.por_vendedor.length > 1\">\n                <p class=\"titulo-desglose\">Comisión por vendedor</p>\n                <div class=\"fila vendedor\" *ngFor=\"let pv of data.por_vendedor\">\n                    <span>{{pv.nombre}} <small>{{pv.usuario}} · {{pv.boletos}} b · {{pv.tasa * 100 | number: '1.0-2'}}%</small></span>\n                    <strong>{{money(pv.comision)}}</strong>\n                </div>\n            </div>\n\n            <div class=\"fila total\">\n                <span>Efectivo del dueño</span>\n                <strong>{{money(efectivo())}}</strong>\n            </div>\n\n            <p *ngIf=\"vacio\" class=\"vacio\">Sin movimientos este día</p>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>\n\n<ion-footer *ngIf=\"data\">\n    <ion-toolbar>\n        <ion-button expand=\"block\" (click)=\"imprimir()\">Imprimir cierre</ion-button>\n    </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "MtZU":
    /*!*******************************************************!*\
      !*** ./src/app/pages/cierre-caja/cierre-caja.page.ts ***!
      \*******************************************************/

    /*! exports provided: CierreCajaPage */

    /***/
    function MtZU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CierreCajaPage", function () {
        return CierreCajaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cierre_caja_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cierre-caja.page.html */
      "Iijm");
      /* harmony import */


      var _cierre_caja_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cierre-caja.page.scss */
      "oHvx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_services_printer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/printer.service */
      "UbLU");
      /* harmony import */


      var esc_pos_encoder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! esc-pos-encoder */
      "oLKi");
      /* harmony import */


      var esc_pos_encoder__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(esc_pos_encoder__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);

      var CierreCajaPage = /*#__PURE__*/function () {
        function CierreCajaPage(bs, storage, util, currencyPipe, printer, alertCtrl, loadCtrl) {
          _classCallCheck(this, CierreCajaPage);

          this.bs = bs;
          this.storage = storage;
          this.util = util;
          this.currencyPipe = currencyPipe;
          this.printer = printer;
          this.alertCtrl = alertCtrl;
          this.loadCtrl = loadCtrl;
          this.fecha = moment__WEBPACK_IMPORTED_MODULE_12___default()().format('YYYY-MM-DD');
          this.data = null;
          this.cargando = false;
          this.loaded = false;
          this.isAdmin = false;
          this.me = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_8__["Empleado"]();
          this.empleados = [];
          this.empleado_id = '';
          this.saldo_inicial = 0;
          this.timer = null;
          this.retryTimer = null;
          this.refrescando = false;
          this.seq = 0;
          this.actualizado = '';
        }

        return _createClass(CierreCajaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _t, _t2;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    _context.p = 0;
                    _context.n = 1;
                    return this.bs.getEmpleado();

                  case 1:
                    this.me = _context.v;
                    this.isAdmin = !!(this.me && this.me.usuario && this.me.usuario.isadmin);

                    if (!this.isAdmin) {
                      _context.n = 4;
                      break;
                    }

                    _context.n = 2;
                    return this.bs.get(this.bs.EMPLEADO_URL, true);

                  case 2:
                    _t = _context.v;

                    if (_t) {
                      _context.n = 3;
                      break;
                    }

                    _t = [];

                  case 3:
                    this.empleados = _t;
                    _context.n = 5;
                    break;

                  case 4:
                    // el vendedor solo ve su propio cierre
                    this.empleado_id = String(this.me.id);

                  case 5:
                    _context.n = 6;
                    return this.cargar();

                  case 6:
                    this.iniciarAutoRefresh();
                    _context.n = 8;
                    break;

                  case 7:
                    _context.p = 7;
                    _t2 = _context.v;
                    _context.n = 8;
                    return this.util.handleError(_t2);

                  case 8:
                    return _context.a(2);
                }
              }, _callee, this, [[0, 7]]);
            }));
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.detenerAutoRefresh();
          } // el cierre se refleja solo en cuanto sale el boleto

        }, {
          key: "iniciarAutoRefresh",
          value: function iniciarAutoRefresh() {
            var _this = this;

            this.detenerAutoRefresh();
            this.timer = setInterval(function () {
              return _this.cargar(true);
            }, 10000);
          }
        }, {
          key: "detenerAutoRefresh",
          value: function detenerAutoRefresh() {
            if (this.timer) {
              clearInterval(this.timer);
              this.timer = null;
            }

            if (this.retryTimer) {
              clearTimeout(this.retryTimer);
              this.retryTimer = null;
            }
          } // si una peticion se queda colgada, no debe frenar las siguientes

        }, {
          key: "conTimeout",
          value: function conTimeout(p, ms) {
            return new Promise(function (resolve, reject) {
              var t = setTimeout(function () {
                return reject(new Error('timeout'));
              }, ms);
              p.then(function (v) {
                clearTimeout(t);
                resolve(v);
              }, function (e) {
                clearTimeout(t);
                reject(e);
              });
            });
          }
        }, {
          key: "programarReintento",
          value: function programarReintento() {
            var _this2 = this;

            if (this.retryTimer) return;
            this.retryTimer = setTimeout(function () {
              _this2.retryTimer = null;

              _this2.cargar(true);
            }, 3000);
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.p = _context2.n) {
                  case 0:
                    _context2.p = 0;
                    _context2.n = 1;
                    return this.cargar();

                  case 1:
                    _context2.p = 1;
                    if (ev && ev.target) ev.target.complete();
                    return _context2.f(1);

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this, [[0,, 1, 2]]);
            }));
          }
        }, {
          key: "cargar",
          value: function cargar() {
            var silencioso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var miSeq, url, resp, guardado, _t3, _t4;

              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.p = _context3.n) {
                  case 0:
                    if (!silencioso) {
                      _context3.n = 2;
                      break;
                    }

                    if (!this.refrescando) {
                      _context3.n = 1;
                      break;
                    }

                    return _context3.a(2);

                  case 1:
                    this.refrescando = true;
                    _context3.n = 3;
                    break;

                  case 2:
                    this.cargando = true;

                  case 3:
                    miSeq = ++this.seq;
                    _context3.p = 4;
                    url = this.bs.CIERRE_CAJA_URL + '?fecha=' + encodeURIComponent(this.fecha);
                    if (this.empleado_id) url += '&empleado_id=' + encodeURIComponent(this.empleado_id);

                    if (!silencioso) {
                      _context3.n = 6;
                      break;
                    }

                    _context3.n = 5;
                    return this.conTimeout(this.bs.get(url, true), 8000);

                  case 5:
                    _t3 = _context3.v;
                    _context3.n = 8;
                    break;

                  case 6:
                    _context3.n = 7;
                    return this.conTimeout(this.bs.get(url, true), 20000);

                  case 7:
                    _t3 = _context3.v;

                  case 8:
                    resp = _t3;

                    if (!(miSeq !== this.seq)) {
                      _context3.n = 9;
                      break;
                    }

                    return _context3.a(2);

                  case 9:
                    this.data = resp;
                    this.actualizado = moment__WEBPACK_IMPORTED_MODULE_12___default()().format('HH:mm:ss');

                    if (silencioso) {
                      _context3.n = 11;
                      break;
                    }

                    _context3.n = 10;
                    return this.storage.get(this.saldoKey());

                  case 10:
                    guardado = _context3.v;
                    this.saldo_inicial = Number(guardado) || 0;

                  case 11:
                    this.loaded = true;
                    _context3.n = 14;
                    break;

                  case 12:
                    _context3.p = 12;
                    _t4 = _context3.v;

                    if (silencioso) {
                      _context3.n = 13;
                      break;
                    }

                    _context3.n = 13;
                    return this.util.handleError(_t4);

                  case 13:
                    this.programarReintento();

                  case 14:
                    _context3.p = 14;
                    this.cargando = false;
                    this.refrescando = false;
                    return _context3.f(14);

                  case 15:
                    return _context3.a(2);
                }
              }, _callee3, this, [[4, 12, 14, 15]]);
            }));
          }
        }, {
          key: "hoy",
          value: function hoy() {
            this.fecha = moment__WEBPACK_IMPORTED_MODULE_12___default()().format('YYYY-MM-DD');
            this.cargar();
          }
        }, {
          key: "ayer",
          value: function ayer() {
            this.fecha = moment__WEBPACK_IMPORTED_MODULE_12___default()().subtract(1, 'day').format('YYYY-MM-DD');
            this.cargar();
          }
        }, {
          key: "saldoKey",
          value: function saldoKey() {
            return 'cierre_saldo:' + this.fecha + ':' + (this.empleado_id || 'todos');
          }
        }, {
          key: "guardarSaldo",
          value: function guardarSaldo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    this.saldo_inicial = Number(this.saldo_inicial) || 0;
                    _context4.n = 1;
                    return this.storage.set(this.saldoKey(), this.saldo_inicial);

                  case 1:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "efectivoAntesComision",
          value: function efectivoAntesComision() {
            if (!this.data) return 0;
            return (Number(this.data.entrega) || 0) + (Number(this.saldo_inicial) || 0);
          } // la venta bruta es del dueno: del efectivo en caja se descuenta la comision
          // que se le paga al vendedor al cerrar

        }, {
          key: "efectivo",
          value: function efectivo() {
            if (!this.data) return 0;
            return this.efectivoAntesComision() - (Number(this.data.comision) || 0);
          }
        }, {
          key: "money",
          value: function money(v) {
            return this.currencyPipe.transform(Number(v) || 0, 'C$') || 'C$0.00';
          }
        }, {
          key: "vacio",
          get: function get() {
            return !!(this.data && this.data.boletos_vendidos == 0 && this.data.boletos_anulados == 0);
          }
        }, {
          key: "imprimir",
          value: function imprimir() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this3 = this;

              var encoder, result, d, hr;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    if (this.data) {
                      _context5.n = 1;
                      break;
                    }

                    return _context5.a(2);

                  case 1:
                    encoder = new esc_pos_encoder__WEBPACK_IMPORTED_MODULE_11___default.a();
                    result = encoder.initialize(); // Sunmi: por defecto chino (multibyte). FS . cierra multibyte, ESC t 16 = Windows-1252

                    result.raw([0x1c, 0x2e]);
                    result.raw([0x1b, 0x74, 0x10]);
                    result._codepage = 'windows1252';
                    d = this.data;
                    hr = this.util.commands.HORIZONTAL_LINE.HR_58MM;
                    result.align('center').size('normal').bold(true).line('CIERRE DE CAJA').bold(false).line('Fecha: ' + moment__WEBPACK_IMPORTED_MODULE_12___default()(d.fecha).format('DD/MM/YYYY')).line(d.empleado_nombre || '').line(hr).bold(true).line('Boletos vendidos:  ' + d.boletos_vendidos).bold(false).line('Vendido:           ' + this.money(d.vendido)).line('Boletos anulados:  ' + d.boletos_anulados).line('Anulado:           ' + this.money(d.anulado)).line(hr).line('Premios:           ' + this.money(d.premios)).line('Entrega:           ' + this.money(d.entrega)).line('Saldo inicial:     ' + this.money(this.saldo_inicial)).line(hr).line('Efectivo en caja:  ' + this.money(this.efectivoAntesComision())).line('Comision vendedor: -' + this.money(d.comision)).bold(true).line('EFECTIVO DUEÑO:    ' + this.money(this.efectivo())).bold(false).line(hr); // cada vendedor tiene su propia comision

                    if (d.por_vendedor && d.por_vendedor.length > 1) {
                      result.line('Comision por vendedor:');
                      d.por_vendedor.forEach(function (pv) {
                        var linea = String(pv.nombre || '').substring(0, 20);

                        while (linea.length < 21) linea += ' ';

                        result.line(linea + _this3.money(pv.comision));
                      });
                    }

                    result.line(hr).align('center').newline().newline().newline();
                    this.mountAlertBt(result.encode());

                  case 2:
                    return _context5.a(2);
                }
              }, _callee5, this);
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
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
                    var _this5 = this;

                    var inputs, alert;
                    return _regenerator().w(function (_context7) {
                      while (1) switch (_context7.n) {
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
                            _context7.n = 1;
                            break;
                          }

                          return _context7.a(2, window.alert('NO HAY IMPRESORA CONECTADA'));

                        case 1:
                          _context7.n = 2;
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
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
                                  return _regenerator().w(function (_context6) {
                                    while (1) switch (_context6.n) {
                                      case 0:
                                        if (!device) {
                                          _context6.n = 2;
                                          break;
                                        }

                                        _context6.n = 1;
                                        return this.storage.set('impresora_address', device);

                                      case 1:
                                        this.util.IMPRESORA_ADDRESS = device;
                                        this.print(device, data, total);
                                        _context6.n = 3;
                                        break;

                                      case 2:
                                        return _context6.a(2, window.alert('NO SE SELECCIONÓ LA IMPRESORA'));

                                      case 3:
                                        return _context6.a(2);
                                    }
                                  }, _callee6, this);
                                }));
                              }
                            }]
                          });

                        case 2:
                          alert = _context7.v;
                          _context7.n = 3;
                          return alert.present();

                        case 3:
                          return _context7.a(2);
                      }
                    }, _callee7, this);
                  }));
                })["catch"](function (error) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
                    return _regenerator().w(function (_context8) {
                      while (1) switch (_context8.n) {
                        case 0:
                          _context8.n = 1;
                          return this.util.presentAlert('Error', 'Error al conectar con la impresora #1.');

                        case 1:
                          return _context8.a(2);
                      }
                    }, _callee8, this);
                  }));
                });
              } else {
                _this4.print(_this4.util.IMPRESORA_ADDRESS, data, total);
              }
            })["catch"](function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee9() {
                return _regenerator().w(function (_context9) {
                  while (1) switch (_context9.n) {
                    case 0:
                      _context9.n = 1;
                      return this.util.presentAlert('Error', 'Error al conectar con la impresora. #2');

                    case 1:
                      return _context9.a(2);
                  }
                }, _callee9, this);
              }));
            });
          }
        }, {
          key: "print",
          value: function print(device, data, total) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee11() {
              var _this6 = this;

              var load, _t5;

              return _regenerator().w(function (_context11) {
                while (1) switch (_context11.p = _context11.n) {
                  case 0:
                    _context11.p = 0;
                    _context11.n = 1;
                    return this.printer.disconnectBluetooth();

                  case 1:
                    _context11.n = 3;
                    break;

                  case 2:
                    _context11.p = 2;
                    _t5 = _context11.v;

                  case 3:
                    _context11.n = 4;
                    return this.loadCtrl.create({
                      message: 'Imprimiendo...'
                    });

                  case 4:
                    load = _context11.v;
                    _context11.n = 5;
                    return load.present();

                  case 5:
                    this.printer.connectBluetooth(device).subscribe(function () {
                      _this6.printer.printData(data).then(function (printStatus) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee0() {
                          return _regenerator().w(function (_context0) {
                            while (1) switch (_context0.n) {
                              case 0:
                                _context0.n = 1;
                                return load.dismiss();

                              case 1:
                                return _context0.a(2);
                            }
                          }, _callee0);
                        }));
                      })["catch"](function (error) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee1() {
                          return _regenerator().w(function (_context1) {
                            while (1) switch (_context1.n) {
                              case 0:
                                _context1.n = 1;
                                return load.dismiss();

                              case 1:
                                _context1.n = 2;
                                return this.util.presentAlert('Error', 'Error al conectar la impresora.');

                              case 2:
                                return _context1.a(2);
                            }
                          }, _callee1, this);
                        }));
                      });
                    }, function (error) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee10() {
                        return _regenerator().w(function (_context10) {
                          while (1) switch (_context10.n) {
                            case 0:
                              _context10.n = 1;
                              return load.dismiss();

                            case 1:
                              _context10.n = 2;
                              return this.util.presentAlert('Error', 'Error al conectar la impresora.');

                            case 2:
                              return _context10.a(2);
                          }
                        }, _callee10, this);
                      }));
                    });

                  case 6:
                    return _context11.a(2);
                }
              }, _callee11, this, [[0, 2]]);
            }));
          }
        }]);
      }();

      CierreCajaPage.ctorParameters = function () {
        return [{
          type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: src_app_util_util__WEBPACK_IMPORTED_MODULE_7__["Util"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"]
        }, {
          type: src_app_services_printer_service__WEBPACK_IMPORTED_MODULE_10__["PrinterService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }];
      };

      CierreCajaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cierre-caja',
        template: _raw_loader_cierre_caja_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cierre_caja_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CierreCajaPage);
      /***/
    },

    /***/
    "oHvx":
    /*!*********************************************************!*\
      !*** ./src/app/pages/cierre-caja/cierre-caja.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function oHvx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".filtros {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.filtros .fecha-input {\n  flex: 1;\n  border: 1px solid #d7d7d7;\n  border-radius: 6px;\n  padding: 8px;\n  font-size: 15px;\n  background: #fff;\n  color: #000;\n}\n.filtros .auto {\n  font-size: 11px;\n  color: darkgray;\n  white-space: nowrap;\n}\n.fila {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 0;\n  font-size: 15px;\n}\n.fila strong {\n  color: #000080;\n}\n.fila.total {\n  font-size: 18px;\n  border-top: 2px solid #000080;\n  margin-top: 6px;\n  padding-top: 10px;\n}\n.fila.total strong {\n  font-size: 20px;\n}\n.desglose {\n  margin-top: 8px;\n  border-top: 1px dashed #c9c9c9;\n  padding-top: 6px;\n}\n.desglose .titulo-desglose {\n  font-size: 13px;\n  color: darkgray;\n  margin: 0 0 4px;\n}\n.desglose .fila.vendedor {\n  font-size: 14px;\n  color: #444;\n}\n.desglose .fila.vendedor span small {\n  color: darkgray;\n  margin-left: 4px;\n}\n.desglose .fila.vendedor strong {\n  color: #000080;\n}\n.vacio {\n  text-align: center;\n  color: darkgray;\n  margin-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NpZXJyZS1jYWphLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ1I7QUFFSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUlBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0k7RUFDSSxjQUFBO0FBRFI7QUFJSTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUZSO0FBSVE7RUFDSSxlQUFBO0FBRlo7QUFPQTtFQUNJLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBSko7QUFNSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUpSO0FBUVE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQU5aO0FBUVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFOaEI7QUFTWTtFQUNJLGNBQUE7QUFQaEI7QUFhQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVkoiLCJmaWxlIjoiY2llcnJlLWNhamEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRyb3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAuZmVjaGEtaW5wdXQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDdkN2Q3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG5cbiAgICAuYXV0byB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgY29sb3I6IGRhcmtncmF5O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cbn1cblxuLmZpbGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNnB4IDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuXG4gICAgc3Ryb25nIHtcbiAgICAgICAgY29sb3I6ICMwMDAwODA7XG4gICAgfVxuXG4gICAgJi50b3RhbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMDAwODA7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRlc2dsb3NlIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjYzljOWM5O1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG5cbiAgICAudGl0dWxvLWRlc2dsb3NlIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogZGFya2dyYXk7XG4gICAgICAgIG1hcmdpbjogMCAwIDRweDtcbiAgICB9XG5cbiAgICAuZmlsYSB7XG4gICAgICAgICYudmVuZGVkb3Ige1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM0NDQ7XG5cbiAgICAgICAgICAgIHNwYW4gc21hbGwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZ3JheTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDgwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udmFjaW8ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogZGFya2dyYXk7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cierre-caja-cierre-caja-module-es5.js.map