(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-agentes-agentes-module"], {
    /***/
    "76Ar":
    /*!***********************************************!*\
      !*** ./src/app/pages/agentes/agentes.page.ts ***!
      \***********************************************/

    /*! exports provided: AgentesPage */

    /***/
    function Ar(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentesPage", function () {
        return AgentesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_agentes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./agentes.page.html */
      "lEzc");
      /* harmony import */


      var _agentes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./agentes.page.scss */
      "wgNQ");
      /* harmony import */


      var _services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/base.service */
      "Do2H");
      /* harmony import */


      var _classes_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../classes/classes */
      "50N5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _agente_agente_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../agente/agente.page */
      "2V4y");
      /* harmony import */


      var src_app_util_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/util/util */
      "JQC8");

      var AgentesPage = /*#__PURE__*/function () {
        function AgentesPage(bs, cdRef, alertCtrl, modalCtrl, navCtrl, util) {
          var _this = this;

          _classCallCheck(this, AgentesPage);

          this.bs = bs;
          this.cdRef = cdRef;
          this.alertCtrl = alertCtrl;
          this.modalCtrl = modalCtrl;
          this.navCtrl = navCtrl;
          this.util = util;
          this.searchTerm = '';
          this.originales = [];
          this.agentes = null;
          this.searching = false;
          this.loaded = false;
          this.isAdmin = false;
          this.empleado = new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["Empleado"]();
          this.refreshTimer = null;
          this.getEmpleados();
          bs.getEmpleado().then(function (e) {
            _this.empleado = new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["Empleado"](e);
            _this.isAdmin = _this.empleado.usuario.isadmin;
          }); // Refresca la lista para mantener el punto verde al dia

          this.refreshTimer = setInterval(function () {
            return _this.getEmpleados(true);
          }, 15000);
        }

        return _createClass(AgentesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.refreshTimer) {
              clearInterval(this.refreshTimer);
              this.refreshTimer = null;
            }
          }
        }, {
          key: "getEmpleados",
          value: function getEmpleados() {
            var _this2 = this;

            var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.bs.get(this.bs.EMPLEADO_URL, true).then(function (data) {
              var sort = function sort(x, y) {
                return (x.primer_nombre + x.primer_apellido).localeCompare(y.primer_nombre + y.primer_apellido);
              };

              _this2.originales = data.clone().sort(sort);

              _this2.search({
                target: {
                  value: _this2.searchTerm
                }
              });

              _this2.cdRef.detectChanges();
            })["catch"](function (err) {
              if (!silent) _this2.util.handleError(err);
            });
          }
        }, {
          key: "getIniciales",
          value: function getIniciales(agente) {
            return agente.primer_nombre.toUpperCase().substring(0, 1) + agente.primer_apellido.toUpperCase().substring(0, 1);
          }
        }, {
          key: "search",
          value: function search(evt) {
            var term = evt.target.value || '';
            term = term.trim().toLowerCase();
            if (term.trim() == '') this.agentes = this.originales.clone();else if (term.indexOf("#") >= 0) this.agentes = this.originales.filter(function (c) {
              return c.id.toString().indexOf(term.replace("#", "").split(" ").join("")) >= 0;
            });else this.agentes = this.originales.filter(function (c) {
              return c.usuario.nombre.toLowerCase().indexOf(term) >= 0;
            });
          }
        }, {
          key: "agenteClicked",
          value: function agenteClicked(agente) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var modal, data, c, index;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (!(!this.empleado.usuario.isadmin && this.empleado.empleados.length == 0)) {
                      _context.n = 1;
                      break;
                    }

                    return _context.a(2);

                  case 1:
                    console.log(agente);

                    if (!this.searching) {
                      _context.n = 2;
                      break;
                    }

                    this.modalCtrl.dismiss({
                      agente: agente
                    });
                    _context.n = 6;
                    break;

                  case 2:
                    _context.n = 3;
                    return this.modalCtrl.create({
                      component: _agente_agente_page__WEBPACK_IMPORTED_MODULE_7__["AgentePage"],
                      componentProps: {
                        empleado: new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["Empleado"](agente)
                      }
                    });

                  case 3:
                    modal = _context.v;
                    _context.n = 4;
                    return modal.present();

                  case 4:
                    _context.n = 5;
                    return modal.onDidDismiss();

                  case 5:
                    data = _context.v.data;

                    if (data && data.empleado) {
                      c = new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["Empleado"](data.empleado);
                      index = this.originales.findIndex(function (x) {
                        return x.id == c.id;
                      });

                      if (index > -1) {
                        this.originales[index] = c;
                        this.search({
                          target: {
                            value: this.searchTerm
                          }
                        });
                      }
                    }

                  case 6:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "close",
          value: function close(event) {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "habilitarEmpleado",
          value: function habilitarEmpleado(agente) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this3 = this;

              var alert;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    _context4.n = 1;
                    return this.alertCtrl.create({
                      header: "Habilitar Agente #".concat(agente.id),
                      message: "\xBFEst\xE1s seguro que deseas habilitar a <strong>".concat(agente.usuario.nombre, "</strong>?\n        <br>\n        <strong>Nota:</strong> El agente podr\xE1 iniciar sesi\xF3n en el sistema."),
                      buttons: [{
                        role: 'cancel',
                        text: 'No',
                        cssClass: 'danger'
                      }, {
                        role: 'ok',
                        text: 'Si',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
                            var _this4 = this;

                            var ex, _t;

                            return _regenerator().w(function (_context3) {
                              while (1) switch (_context3.p = _context3.n) {
                                case 0:
                                  _context3.p = 0;
                                  _context3.n = 1;
                                  return this.bs.put(this.bs.USUARIO_URL + '/habilitar/' + agente.usuario.id, {}, true);

                                case 1:
                                  // this.originales.removeBy(c => c.id == agente.id);
                                  // let index = this.originales.findIndex(x => x.id == agente.id);
                                  // if (index > -1)
                                  this.getEmpleados();
                                  setTimeout(function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
                                      return _regenerator().w(function (_context2) {
                                        while (1) switch (_context2.n) {
                                          case 0:
                                            _context2.n = 1;
                                            return this.util.presentAlert('Mensaje', "Agente habilitado con \xE9xito");

                                          case 1:
                                            return _context2.a(2);
                                        }
                                      }, _callee2, this);
                                    }));
                                  }, 1);
                                  _context3.n = 3;
                                  break;

                                case 2:
                                  _context3.p = 2;
                                  _t = _context3.v;
                                  ex = _t;
                                  _context3.n = 3;
                                  return this.util.handleError(ex);

                                case 3:
                                  return _context3.a(2);
                              }
                            }, _callee3, this, [[0, 2]]);
                          }));
                        }
                      }]
                    });

                  case 1:
                    alert = _context4.v;
                    _context4.n = 2;
                    return alert.present();

                  case 2:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "eliminarEmpleado",
          value: function eliminarEmpleado(agente) {
            var temporary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var evt = arguments.length > 2 ? arguments[2] : undefined;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              var _this5 = this;

              var alert;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    _context7.n = 1;
                    return this.alertCtrl.create({
                      header: "".concat(temporary ? 'Deshabilitar' : 'Eliminar', " Agente #").concat(agente.id),
                      message: "\xBFEst\xE1s seguro que deseas ".concat(temporary ? 'deshabilitar' : 'eliminar', " a <strong>").concat(agente.usuario.nombre, "</strong>?\n        <br>\n        <strong>Nota:</strong> ").concat(temporary ? 'Esta acción se puede deshacer' : 'Esta acción no se puede deshacer.'),
                      buttons: [{
                        role: 'cancel',
                        text: 'No',
                        cssClass: 'danger'
                      }, {
                        role: 'ok',
                        text: 'Si',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
                            var _this6 = this;

                            var ex, _t2;

                            return _regenerator().w(function (_context6) {
                              while (1) switch (_context6.p = _context6.n) {
                                case 0:
                                  _context6.p = 0;
                                  _context6.n = 1;
                                  return this.bs["delete"](this.bs.USUARIO_URL + '/' + agente.usuario.id + '/' + (temporary ? 'true' : 'false'), true);

                                case 1:
                                  // this.originales.removeBy(c => c.id == agente.id);
                                  // this.search({target: {value: this.searchTerm}})
                                  this.getEmpleados();
                                  setTimeout(function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
                                      return _regenerator().w(function (_context5) {
                                        while (1) switch (_context5.n) {
                                          case 0:
                                            _context5.n = 1;
                                            return this.util.presentAlert('Mensaje', "Agente ".concat(temporary ? 'deshabilitado' : 'eliminado', " con \xE9xito"));

                                          case 1:
                                            return _context5.a(2);
                                        }
                                      }, _callee5, this);
                                    }));
                                  }, 1);
                                  _context6.n = 3;
                                  break;

                                case 2:
                                  _context6.p = 2;
                                  _t2 = _context6.v;
                                  ex = _t2;
                                  _context6.n = 3;
                                  return this.util.handleError(ex);

                                case 3:
                                  return _context6.a(2);
                              }
                            }, _callee6, this, [[0, 2]]);
                          }));
                        }
                      }]
                    });

                  case 1:
                    alert = _context7.v;
                    _context7.n = 2;
                    return alert.present();

                  case 2:
                    return _context7.a(2);
                }
              }, _callee7, this);
            }));
          }
        }]);
      }();

      AgentesPage.ctorParameters = function () {
        return [{
          type: _services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: src_app_util_util__WEBPACK_IMPORTED_MODULE_8__["Util"]
        }];
      };

      AgentesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-agentes',
        template: _raw_loader_agentes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agentes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AgentesPage);
      /***/
    },

    /***/
    "HDrb":
    /*!*********************************************************!*\
      !*** ./src/app/pages/agentes/agentes-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: AgentesPageRoutingModule */

    /***/
    function HDrb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentesPageRoutingModule", function () {
        return AgentesPageRoutingModule;
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


      var _agentes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./agentes.page */
      "76Ar");

      var routes = [{
        path: '',
        component: _agentes_page__WEBPACK_IMPORTED_MODULE_3__["AgentesPage"]
      }];

      var AgentesPageRoutingModule = /*#__PURE__*/_createClass(function AgentesPageRoutingModule() {
        _classCallCheck(this, AgentesPageRoutingModule);
      });

      AgentesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AgentesPageRoutingModule);
      /***/
    },

    /***/
    "YEEE":
    /*!*************************************************!*\
      !*** ./src/app/pages/agentes/agentes.module.ts ***!
      \*************************************************/

    /*! exports provided: AgentesPageModule */

    /***/
    function YEEE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentesPageModule", function () {
        return AgentesPageModule;
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


      var _agentes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./agentes-routing.module */
      "HDrb");
      /* harmony import */


      var _agentes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./agentes.page */
      "76Ar");

      var AgentesPageModule = /*#__PURE__*/_createClass(function AgentesPageModule() {
        _classCallCheck(this, AgentesPageModule);
      });

      AgentesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _agentes_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgentesPageRoutingModule"]],
        declarations: [_agentes_page__WEBPACK_IMPORTED_MODULE_6__["AgentesPage"]]
      })], AgentesPageModule);
      /***/
    },

    /***/
    "lEzc":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agentes/agentes.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function lEzc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color='light'>\n    <ion-buttons slot='start'>\n      <ion-back-button [text]=''></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"center\">Agentes</ion-title>\n    <ion-buttons slot=\"end\" *ngIf='searching'>\n      <ion-button (click)='close($event)'>\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-searchbar (ionInput)='search($event)' [(ngModel)]='searchTerm'></ion-searchbar>\n  <ion-list class=\"list-body\">\n    <ion-item-sliding style=\"position: relative;\" *ngFor='let empleado of agentes'>\n      <ion-item-options side=\"start\" *ngIf='empleado.id > 1'>\n        <ion-item-option *ngIf=\"empleado.usuario.temp_inactivo\" color=\"primary\" (click)='habilitarEmpleado(empleado)'>\n          <ion-icon class=\"icon\" name=\"checkmark-circle-outline\" slot=\"top\"></ion-icon> Habilitar\n        </ion-item-option>\n        <ion-item-option *ngIf=\"!empleado.usuario.temp_inactivo\" color=\"warning\" (click)='eliminarEmpleado(empleado, true, $event)'>\n          <ion-icon class=\"icon\" name=\"close-circle-outline\" slot=\"top\"></ion-icon> Deshabilitar\n        </ion-item-option>\n        <ion-item-option *ngIf=\"isAdmin\" color=\"danger\" (click)='eliminarEmpleado(empleado, false, $event)' >\n          <ion-icon class=\"icon\" name=\"trash\" slot=\"top\"></ion-icon> Eliminar\n        </ion-item-option>\n      </ion-item-options>\n      <ion-item  [ngStyle]=\"{'opacity': empleado.usuario.temp_inactivo ? .5 : 1}\" detail (click)='agenteClicked(empleado)'> <span class=\"avatar-letter\" [ngClass]=\"{'man': empleado.genero == 'M'}\">            {{getIniciales(empleado)}}          </span>\n        <ion-label>\n          <h2>{{empleado.usuario.nombre}}\n            <span class=\"estado\" [class.online]=\"empleado.en_linea\"></span>\n            <span class=\"texto-estado\" *ngIf=\"empleado.en_linea\">en línea</span>\n          </h2>\n          <p><span class=\"id\" style=\"width: 40px; display: inline-block;\">#{{empleado.id}}</span> {{empleado.pais.ext}} {{empleado.celular}}</p>\n        </ion-label>\n\n        \n      </ion-item>\n\n      <h2 *ngIf=\"empleado.usuario.temp_inactivo\" style=\"position: absolute; left: 40%; top: 50%; transform: translate(50%, -100%); color: red;\">INACTIVO</h2>\n\n      </ion-item-sliding>\n  </ion-list>\n</ion-content>\n\n\n\n";
      /***/
    },

    /***/
    "wgNQ":
    /*!*************************************************!*\
      !*** ./src/app/pages/agentes/agentes.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function wgNQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-container {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n\np {\n  margin: 0;\n}\n\n.avatar-letter {\n  padding: 14.5px 0;\n  border-radius: 50%;\n  color: white;\n  background: #ddbbc4;\n  margin-right: 10px;\n  font-weight: bold;\n  min-width: 50px;\n  max-width: 50px;\n  font-size: 1rem;\n  text-align: center;\n}\n\n.avatar-letter.man {\n  background: #a3af9a;\n}\n\nion-label h2 {\n  font-weight: 400;\n  font-size: 1.1rem;\n  font-family: \"Poppins\", sans-serif;\n}\n\nion-item-option {\n  text-transform: none;\n}\n\n.icon {\n  font-size: 1.3rem;\n}\n\nspan.id {\n  color: black;\n  font-weight: bold;\n}\n\n.list-body {\n  max-height: calc(100vh - 154px);\n  overflow: auto;\n}\n\n.estado {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #bdbdbd;\n  margin-left: 6px;\n  vertical-align: middle;\n}\n\n.estado.online {\n  background: #2ecc40;\n  box-shadow: 0 0 6px rgba(46, 204, 64, 0.9);\n}\n\n.texto-estado {\n  font-size: 0.75rem;\n  color: #2ecc40;\n  margin-left: 4px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FnZW50ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUNKIiwiZmlsZSI6ImFnZW50ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5hdmF0YXItbGV0dGVyIHtcbiAgICBwYWRkaW5nOiAxNC41cHggMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICNkZGJiYzQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1pbi13aWR0aDogNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmF2YXRhci1sZXR0ZXIubWFuIHtcbiAgICBiYWNrZ3JvdW5kOiAjYTNhZjlhO1xufVxuXG5pb24tbGFiZWwgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG5pb24taXRlbS1vcHRpb24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbnNwYW4uaWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpc3QtYm9keSB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE1NHB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmVzdGFkbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2JkYmRiZDtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5lc3RhZG8ub25saW5lIHtcbiAgICBiYWNrZ3JvdW5kOiAjMmVjYzQwO1xuICAgIGJveC1zaGFkb3c6IDAgMCA2cHggcmdiYSg0NiwgMjA0LCA2NCwgMC45KTtcbn1cblxuLnRleHRvLWVzdGFkbyB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGNvbG9yOiAjMmVjYzQwO1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-agentes-agentes-module-es5.js.map