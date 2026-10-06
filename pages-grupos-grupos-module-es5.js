(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-grupos-grupos-module"], {
    /***/
    "/SON":
    /*!*********************************************!*\
      !*** ./src/app/pages/grupos/grupos.page.ts ***!
      \*********************************************/

    /*! exports provided: GruposPage */

    /***/
    function _SON(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GruposPage", function () {
        return GruposPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_grupos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./grupos.page.html */
      "lbIa");
      /* harmony import */


      var _grupos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./grupos.page.scss */
      "pCSI");
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _nuevo_grupo_nuevo_grupo_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../nuevo-grupo/nuevo-grupo.page */
      "HYJm");
      /* harmony import */


      var src_app_util_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/util/util */
      "JQC8");

      var GruposPage = /*#__PURE__*/function () {
        function GruposPage(bs, modalCtrl, alertCtrl, loadCtrl, util) {
          _classCallCheck(this, GruposPage);

          this.bs = bs;
          this.modalCtrl = modalCtrl;
          this.alertCtrl = alertCtrl;
          this.loadCtrl = loadCtrl;
          this.util = util;
          this.searchTerm = '';
          this.grupos = [];
          this.originales = [];
          this.init();
        }

        return _createClass(GruposPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this = this;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.bs.get(this.bs.GRUPO_URL, true).then(function (d) {
                      d.sort(function (a, b) {
                        return a.nombre.trim().localeCompare(b.nombre.trim());
                      });
                      _this.grupos = d;
                      _this.originales = d.clone();
                    })["catch"](function (err) {
                      return _this.util.handleError(err);
                    });
                    _context.n = 1;
                    return this.bs.getEmpleado();

                  case 1:
                    this.isAdmin = _context.v.usuario.isadmin;

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "search",
          value: function search(evt) {
            var termino = evt.target.value.trim().toLocaleLowerCase(); // console.log(termino);

            if (termino.length == 0) this.grupos = this.originales.clone();else if (termino.indexOf("#") >= 0) this.grupos = this.originales.filter(function (c) {
              return c.id.toString().indexOf(termino.replace("#", "").split(" ").join("")) >= 0;
            });else this.grupos = this.originales.filter(function (c) {
              return c.nombre.trim().toLocaleLowerCase().indexOf(termino) > -1;
            });
          }
        }, {
          key: "eliminarGrupo",
          value: function eliminarGrupo(grupo) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this2 = this;

              var alert;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    _context4.n = 1;
                    return this.alertCtrl.create({
                      header: "Eliminar Grupo #".concat(grupo.id),
                      message: "\xBFEst\xE1s seguro que deseas eliminar el grupo \"<strong>".concat(grupo.nombre, "</strong>\"?"),
                      buttons: [{
                        role: 'cancel',
                        text: 'No',
                        cssClass: 'danger'
                      }, {
                        role: 'ok',
                        text: 'Si',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
                            var _this3 = this;

                            var loading, ex, _t;

                            return _regenerator().w(function (_context3) {
                              while (1) switch (_context3.p = _context3.n) {
                                case 0:
                                  _context3.n = 1;
                                  return this.loadCtrl.create({
                                    message: 'Eliminando grupo...'
                                  });

                                case 1:
                                  loading = _context3.v;
                                  _context3.n = 2;
                                  return loading.present();

                                case 2:
                                  setTimeout(function () {
                                    loading.message = 'Calculando límites de grupos y numerones...';
                                  }, 2000);
                                  _context3.p = 3;
                                  _context3.n = 4;
                                  return this.bs["delete"](this.bs.GRUPO_URL + '/' + grupo.id, true);

                                case 4:
                                  this.originales.removeBy(function (s) {
                                    return s.id == grupo.id;
                                  });
                                  this.search({
                                    target: {
                                      value: this.searchTerm
                                    }
                                  });
                                  _context3.n = 5;
                                  return loading.dismiss();

                                case 5:
                                  setTimeout(function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
                                      return _regenerator().w(function (_context2) {
                                        while (1) switch (_context2.n) {
                                          case 0:
                                            _context2.n = 1;
                                            return this.util.presentAlert('Mensaje', 'Grupo eliminado con éxito');

                                          case 1:
                                            return _context2.a(2);
                                        }
                                      }, _callee2, this);
                                    }));
                                  }, 100);
                                  _context3.n = 8;
                                  break;

                                case 6:
                                  _context3.p = 6;
                                  _t = _context3.v;
                                  _context3.n = 7;
                                  return loading.dismiss();

                                case 7:
                                  ex = _t;
                                  this.util.handleError(ex);

                                case 8:
                                  return _context3.a(2);
                              }
                            }, _callee3, this, [[3, 6]]);
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
          key: "grupoClicked",
          value: function grupoClicked(grupo) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var modal, _yield$modal$onWillDi, data, index;

              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    _context5.n = 1;
                    return this.modalCtrl.create({
                      component: _nuevo_grupo_nuevo_grupo_page__WEBPACK_IMPORTED_MODULE_7__["NuevoGrupoPage"],
                      componentProps: {
                        grupo: new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["Grupo"](grupo)
                      }
                    });

                  case 1:
                    modal = _context5.v;
                    _context5.n = 2;
                    return modal.present();

                  case 2:
                    _context5.n = 3;
                    return modal.onWillDismiss();

                  case 3:
                    _yield$modal$onWillDi = _context5.v;
                    data = _yield$modal$onWillDi.data;
                    console.log(data);

                    if (data && data.grupo) {
                      // grupo = data.grupo;
                      // console.log('HERE');
                      index = this.originales.findIndex(function (x) {
                        return x.id == grupo.id;
                      });
                      this.originales[index] = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["Grupo"](data.grupo);
                      this.search({
                        target: {
                          value: this.searchTerm
                        }
                      }); // this.search({target: {value: this.searchTerm}});
                    }

                  case 4:
                    return _context5.a(2);
                }
              }, _callee5, this);
            }));
          }
        }]);
      }();

      GruposPage.ctorParameters = function () {
        return [{
          type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: src_app_util_util__WEBPACK_IMPORTED_MODULE_8__["Util"]
        }];
      };

      GruposPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-grupos',
        template: _raw_loader_grupos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_grupos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GruposPage);
      /***/
    },

    /***/
    "h6yN":
    /*!*******************************************************!*\
      !*** ./src/app/pages/grupos/grupos-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: GruposPageRoutingModule */

    /***/
    function h6yN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GruposPageRoutingModule", function () {
        return GruposPageRoutingModule;
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


      var _grupos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./grupos.page */
      "/SON");

      var routes = [{
        path: '',
        component: _grupos_page__WEBPACK_IMPORTED_MODULE_3__["GruposPage"]
      }];

      var GruposPageRoutingModule = /*#__PURE__*/_createClass(function GruposPageRoutingModule() {
        _classCallCheck(this, GruposPageRoutingModule);
      });

      GruposPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GruposPageRoutingModule);
      /***/
    },

    /***/
    "lbIa":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/grupos/grupos.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function lbIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]='\"\"'></ion-back-button>\n        </ion-buttons>\n        <ion-title class='center'>Grupos</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div class=\"top ion-padding\">\n        <ion-searchbar (ionInput)='search($event)' [(ngModel)]='searchTerm'></ion-searchbar>\n        <ion-grid>\n            <ion-row class=\"header\">\n                <ion-col size='2'>ID</ion-col>\n                <ion-col size='5'>Nombre</ion-col>\n                <ion-col size='5'>Sorteos </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <div class=\"ion-padding\">\n        <ion-list class=\"list-body\">\n            <ion-item-sliding *ngFor='let grupo of grupos'>\n                <ion-item-options side=\"start\" *ngIf='isAdmin'>\n                    <!-- <ion-item-option (click)=\"favorite(item)\"><ion-icon class=\"icon\" slot=\"top\" src='assets/svg/edit-solid.svg'></ion-icon> Modificar</ion-item-option> -->\n                    <ion-item-option color=\"danger\" (click)='eliminarGrupo(grupo)'>\n                        <ion-icon class=\"icon\" name=\"trash\" slot=\"top\"></ion-icon> Eliminar</ion-item-option>\n                </ion-item-options>\n                <ion-item detail button (click)='grupoClicked(grupo)'>\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col size='2'> {{grupo.id}} </ion-col>\n                            <ion-col size='5' style=\"margin-left: 5px;\"> {{grupo.nombre}}</ion-col>\n                            <ion-col style=\"margin-left: 15px;\">{{grupo.sorteos.length}}</ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-item>\n            </ion-item-sliding>\n        </ion-list>\n    </div>\n</ion-content>";
      /***/
    },

    /***/
    "pCSI":
    /*!***********************************************!*\
      !*** ./src/app/pages/grupos/grupos.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function pCSI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div.top {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 99999;\n  padding-bottom: 0;\n}\n\nion-list {\n  padding-top: 0;\n}\n\nion-item {\n  --padding-start: 0;\n}\n\nion-row.header {\n  font-weight: bold;\n}\n\nspan {\n  display: block;\n  color: #858585;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dydXBvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBR0EsY0FBQTtFQUNBLGlCQUFBO0FBREoiLCJmaWxlIjoiZ3J1cG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi50b3Age1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5pb24tbGlzdCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5cbmlvbi1yb3cuaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLy8gcGFkZGluZy10b3A6IDRweDtcbiAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgY29sb3I6IHJnYigxMzMsIDEzMywgMTMzKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "vafi":
    /*!***********************************************!*\
      !*** ./src/app/pages/grupos/grupos.module.ts ***!
      \***********************************************/

    /*! exports provided: GruposPageModule */

    /***/
    function vafi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GruposPageModule", function () {
        return GruposPageModule;
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


      var _grupos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./grupos-routing.module */
      "h6yN");
      /* harmony import */


      var _grupos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./grupos.page */
      "/SON");

      var GruposPageModule = /*#__PURE__*/_createClass(function GruposPageModule() {
        _classCallCheck(this, GruposPageModule);
      });

      GruposPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _grupos_routing_module__WEBPACK_IMPORTED_MODULE_5__["GruposPageRoutingModule"]],
        declarations: [_grupos_page__WEBPACK_IMPORTED_MODULE_6__["GruposPage"]]
      })], GruposPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-grupos-grupos-module-es5.js.map