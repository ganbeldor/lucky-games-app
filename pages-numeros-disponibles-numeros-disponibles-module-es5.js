(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-numeros-disponibles-numeros-disponibles-module"], {
    /***/
    "/Sgq":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/numeros-disponibles/numeros-disponibles.page.ts ***!
      \***********************************************************************/

    /*! exports provided: NumerosDisponiblesPage */

    /***/
    function _Sgq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumerosDisponiblesPage", function () {
        return NumerosDisponiblesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_numeros_disponibles_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./numeros-disponibles.page.html */
      "qNiW");
      /* harmony import */


      var _numeros_disponibles_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./numeros-disponibles.page.scss */
      "Mp2D");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/base.service */
      "Do2H");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment-timezone */
      "f0Wu");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_util_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/util/util */
      "JQC8");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ion2-calendar */
      "zTSL");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_9__);

      var NumerosDisponiblesPage = /*#__PURE__*/function () {
        function NumerosDisponiblesPage(bs, util, modalCtrl, loadingCtrl) {
          var _this = this;

          _classCallCheck(this, NumerosDisponiblesPage);

          this.bs = bs;
          this.util = util;
          this.modalCtrl = modalCtrl;
          this.loadingCtrl = loadingCtrl;
          this.sorteos = [];
          this.results = [];
          this.date = new Date();
          this.sorteo_id = -1;
          this.sorteo = {};
          this.isAdmin = false; // bs.post(bs.NUMERO_BOLETO + '/disponibilidad', {})

          this.bs.getEmpleado().then(function (d) {
            return _this.isAdmin = d.usuario.isadmin;
          });
          bs.get(bs.SORTEO_URL + '/true', true).then(function (d) {
            _this.sorteos = d;

            _this.getNext();
          })["catch"](function (err) {
            return _this.util.handleError(err);
          });
        }

        return _createClass(NumerosDisponiblesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getNext",
          value: function getNext() {
            var now = '1999/01/01 ' + moment_timezone__WEBPACK_IMPORTED_MODULE_6___default()().tz('America/Managua').format('HH:mm:ss');
            this.sorteos = this.sorteos.sort(function (x, y) {
              return x.hora > y.hora ? 1 : -1;
            }); // console.log(this.sorteos[0].hora);
            // console.log(now);

            var s = this.sorteos.find(function (x) {
              return x.hora.toString() > now;
            });
            if (!s) s = this.sorteos[0]; // this.sorteos.forEach(s => {
            //   console.log(s.hora.toString(), '>=', now);
            //   console.log(s.hora.toString() >= now);
            // });
            // console.log(s);

            if (s) this.sorteo_id = s.id;
          }
        }, {
          key: "openCalendar",
          value: function openCalendar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var options, z, myCalendar, data;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (this.isAdmin) {
                      _context.n = 1;
                      break;
                    }

                    return _context.a(2);

                  case 1:
                    options = {
                      title: '',
                      pickMode: 'single',
                      doneLabel: 'Aceptar',
                      closeLabel: 'Cancelar',
                      defaultDateRange: {
                        from: new Date(this.date),
                        to: new Date(this.date)
                      },
                      defaultDate: new Date(this.date),
                      defaultScrollTo: new Date(),
                      from: new Date('01/01/2020'),
                      to: new Date(),
                      weekdays: ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SÁ']
                    };
                    moment__WEBPACK_IMPORTED_MODULE_5___default.a.updateLocale('es', {
                      monthsShort: {
                        format: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
                        standalone: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_')
                      }
                    });
                    z = moment__WEBPACK_IMPORTED_MODULE_5___default.a.weekdays();
                    console.log(z); // months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
                    // monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
                    // weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
                    // weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
                    // weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')

                    _context.n = 2;
                    return this.modalCtrl.create({
                      component: ion2_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModal"],
                      componentProps: {
                        options: options
                      }
                    });

                  case 2:
                    myCalendar = _context.v;
                    _context.n = 3;
                    return myCalendar.present();

                  case 3:
                    _context.n = 4;
                    return myCalendar.onDidDismiss();

                  case 4:
                    data = _context.v.data;
                    // console.log(data);
                    console.log(data);

                    if (data) {
                      this.date = new Date(data.dateObj);
                      this.loadData();
                    }

                  case 5:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "sorteoChanged",
          value: function sorteoChanged(evt) {
            this.sorteo = this.sorteos.find(function (x) {
              return x.id == evt.detail.value;
            });
            this.results = [];
            this.loadData();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this2 = this;

              var load;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.loadingCtrl.create({
                      message: 'Cargando...'
                    });

                  case 1:
                    load = _context3.v;
                    _context3.n = 2;
                    return load.present();

                  case 2:
                    this.bs.post(this.bs.NUMERO_BOLETO + "/disponibilidad/".concat(moment__WEBPACK_IMPORTED_MODULE_5___default()(this.date).format('YYYY/MM/DD').replace(/\//g, "-"), "/").concat(this.sorteo.grupo_id), {
                      sorteo: JSON.stringify(this.sorteo),
                      date: moment__WEBPACK_IMPORTED_MODULE_5___default()(this.date).format('YYYY/MM/DD')
                    }, true).then(function (d) {
                      _this2.results = d;
                      load.dismiss();
                    })["catch"](function (err) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
                        return _regenerator().w(function (_context2) {
                          while (1) switch (_context2.n) {
                            case 0:
                              _context2.n = 1;
                              return load.dismiss();

                            case 1:
                              _context2.n = 2;
                              return this.util.handleError(err);

                            case 2:
                              return _context2.a(2);
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 3:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }]);
      }();

      NumerosDisponiblesPage.ctorParameters = function () {
        return [{
          type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]
        }, {
          type: src_app_util_util__WEBPACK_IMPORTED_MODULE_7__["Util"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
        }];
      };

      NumerosDisponiblesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-numeros-disponibles',
        template: _raw_loader_numeros_disponibles_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_numeros_disponibles_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NumerosDisponiblesPage);
      /***/
    },

    /***/
    "Fhgr":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/numeros-disponibles/numeros-disponibles.module.ts ***!
      \*************************************************************************/

    /*! exports provided: NumerosDisponiblesPageModule */

    /***/
    function Fhgr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumerosDisponiblesPageModule", function () {
        return NumerosDisponiblesPageModule;
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


      var _numeros_disponibles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./numeros-disponibles-routing.module */
      "w+O2");
      /* harmony import */


      var _numeros_disponibles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./numeros-disponibles.page */
      "/Sgq");

      var NumerosDisponiblesPageModule = /*#__PURE__*/_createClass(function NumerosDisponiblesPageModule() {
        _classCallCheck(this, NumerosDisponiblesPageModule);
      });

      NumerosDisponiblesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _numeros_disponibles_routing_module__WEBPACK_IMPORTED_MODULE_5__["NumerosDisponiblesPageRoutingModule"]],
        declarations: [_numeros_disponibles_page__WEBPACK_IMPORTED_MODULE_6__["NumerosDisponiblesPage"]]
      })], NumerosDisponiblesPageModule);
      /***/
    },

    /***/
    "Mp2D":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/numeros-disponibles/numeros-disponibles.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function Mp2D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar.top {\n  padding: 0 16px 16px 16px;\n}\n\n.mt-12 {\n  margin-top: 12px;\n}\n\nion-input {\n  text-align: right;\n}\n\nion-grid {\n  padding: 0 20px;\n}\n\nion-row {\n  padding: 6px 16px;\n  border-bottom: 1px solid #00000029;\n}\n\nion-row.numeron {\n  color: red;\n  font-weight: bold;\n}\n\nion-row.top {\n  font-weight: bold;\n  background: white;\n  position: sticky;\n  z-index: 99999;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL251bWVyb3MtZGlzcG9uaWJsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUFJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBRVI7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtBQUNKIiwiZmlsZSI6Im51bWVyb3MtZGlzcG9uaWJsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIudG9wIHtcbiAgICBwYWRkaW5nOiAwIDE2cHggMTZweCAxNnB4O1xufVxuXG4ubXQtMTIge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbmlvbi1yb3cge1xuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwMjk7XG4gICAgJi5udW1lcm9uIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuXG5pb24tcm93LnRvcCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB6LWluZGV4OiA5OTk5OTtcbiAgICB0b3A6IDA7XG59XG5cblxuIl19 */";
      /***/
    },

    /***/
    "qNiW":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/numeros-disponibles/numeros-disponibles.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qNiW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]='\"\"'></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">Números disponibles</ion-title>\n    </ion-toolbar>\n    <ion-toolbar color='light'>\n        <ion-item>\n            <ion-label>Sorteo:</ion-label>\n            <ion-select placeholder='Seleccione un sorteo' (ionChange)='sorteoChanged($event)' [(ngModel)]='sorteo_id'>\n                <ion-select-option *ngFor='let s of sorteos' [value]='s.id'>{{s.sorteo_nombre}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        \n\n        <div style=\"display: flex; justify-content: flex-end; padding: 0 8px; margin: 10px 0 20px 0;\" (click)='openCalendar()'>\n            <ion-button fill='clear'>{{date | date: \"dd/MM/yyyy\"}} <ion-icon *ngIf='isAdmin' name=\"calendar-outline\"></ion-icon></ion-button>\n          </div>\n     \n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-grid style=\"padding: 0;\">\n        <ion-row class=\"top\">\n            <ion-col size='3'>\n                Número\n            </ion-col>\n            <ion-col>\n                Disponibilidad\n            </ion-col>\n        </ion-row>\n        <div class=\"body\">\n\n            <ion-row *ngFor='let r of results' [ngClass]=\"{'numeron': r.isnumeron}\">\n                <ion-col size='3'>\n                    {{r.numero}}\n                </ion-col>\n                <ion-col size='3'>\n                    {{r.disponible}}\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "w+O2":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/numeros-disponibles/numeros-disponibles-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: NumerosDisponiblesPageRoutingModule */

    /***/
    function wO2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumerosDisponiblesPageRoutingModule", function () {
        return NumerosDisponiblesPageRoutingModule;
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


      var _numeros_disponibles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./numeros-disponibles.page */
      "/Sgq");

      var routes = [{
        path: '',
        component: _numeros_disponibles_page__WEBPACK_IMPORTED_MODULE_3__["NumerosDisponiblesPage"]
      }];

      var NumerosDisponiblesPageRoutingModule = /*#__PURE__*/_createClass(function NumerosDisponiblesPageRoutingModule() {
        _classCallCheck(this, NumerosDisponiblesPageRoutingModule);
      });

      NumerosDisponiblesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NumerosDisponiblesPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-numeros-disponibles-numeros-disponibles-module-es5.js.map