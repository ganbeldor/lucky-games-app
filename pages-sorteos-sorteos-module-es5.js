(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sorteos-sorteos-module"], {
    /***/
    "0i0l":
    /*!*************************************************!*\
      !*** ./src/app/pages/sorteos/sorteos.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function i0l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div.top {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 99999;\n  padding-bottom: 0;\n}\n\nion-list {\n  padding-top: 0;\n}\n\nion-item {\n  --padding-start: 0;\n}\n\nion-row.header {\n  font-weight: bold;\n}\n\n.gray {\n  display: block;\n  margin-top: 6px;\n  color: #858585;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvcnRlb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFHQSxjQUFBO0VBQ0EsaUJBQUE7QUFESiIsImZpbGUiOiJzb3J0ZW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi50b3Age1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5pb24tbGlzdCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5cbmlvbi1yb3cuaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmdyYXkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAvLyBwYWRkaW5nLXRvcDogNHB4O1xuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgICBjb2xvcjogcmdiKDEzMywgMTMzLCAxMzMpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */";
      /***/
    },

    /***/
    "NjNp":
    /*!*************************************************!*\
      !*** ./src/app/pages/sorteos/sorteos.module.ts ***!
      \*************************************************/

    /*! exports provided: SorteosPageModule */

    /***/
    function NjNp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SorteosPageModule", function () {
        return SorteosPageModule;
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


      var _sorteos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sorteos-routing.module */
      "lzYs");
      /* harmony import */


      var _sorteos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sorteos.page */
      "pQKJ");

      var SorteosPageModule = /*#__PURE__*/_createClass(function SorteosPageModule() {
        _classCallCheck(this, SorteosPageModule);
      });

      SorteosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sorteos_routing_module__WEBPACK_IMPORTED_MODULE_5__["SorteosPageRoutingModule"]],
        declarations: [_sorteos_page__WEBPACK_IMPORTED_MODULE_6__["SorteosPage"]]
      })], SorteosPageModule);
      /***/
    },

    /***/
    "aZcE":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sorteos/sorteos.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function aZcE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]='\"\"'></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">Sorteos</ion-title>\n        <ion-buttons slot=\"end\" *ngIf='isAdmin'>\n            <ion-button (click)='nuevoSorteo()'>\n                <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div class=\"top ion-padding\">\n        <ion-searchbar (ionInput)='search($event)' [(ngModel)]='searchTerm'></ion-searchbar>\n        <ion-grid>\n            <ion-row class=\"header\">\n                <ion-col size='2'> ID </ion-col>\n                <ion-col size='5'> Nombre </ion-col>\n                <ion-col size='5'> Hora </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n   <div class=\"ion-padding\">\n    <ion-list class=\"list-body\">\n        <ion-item-sliding *ngFor='let sorteo of sorteos'>\n            <ion-item-options side=\"start\" *ngIf='isAdmin'>\n                <!-- <ion-item-option (click)=\"favorite(item)\"><ion-icon class=\"icon\" slot=\"top\" src='assets/svg/edit-solid.svg'></ion-icon> Modificar</ion-item-option> -->\n                <ion-item-option color=\"primary\" (click)='establecerGanador(sorteo)'>\n                    <ion-icon class=\"icon\" name=\"trophy\" slot=\"top\"></ion-icon> Ganador</ion-item-option>\n                <ion-item-option color=\"danger\" (click)='eliminarSorteo(sorteo)'>\n                    <ion-icon class=\"icon\" name=\"trash\" slot=\"top\"></ion-icon> Eliminar</ion-item-option>\n            </ion-item-options>\n            <ion-item detail button (click)='sorteoClicked(sorteo)'>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size='2'> {{sorteo.id}} </ion-col>\n                        <ion-col size='5' style=\"margin-left: 5px;\"> {{sorteo.nombre}} <span class='gray'>{{sorteo.grupo.nombre}}</span> </ion-col>\n                        <ion-col style=\"margin-left: 15px;\"> {{sorteo.hora | date: 'hh:mm a'}} <span class=\"gray\">{{sorteosDict[sorteo.grupo.sorteo_tipo]}}</span> </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item>\n        </ion-item-sliding>\n    </ion-list>\n   </div>\n</ion-content>";
      /***/
    },

    /***/
    "lzYs":
    /*!*********************************************************!*\
      !*** ./src/app/pages/sorteos/sorteos-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: SorteosPageRoutingModule */

    /***/
    function lzYs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SorteosPageRoutingModule", function () {
        return SorteosPageRoutingModule;
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


      var _sorteos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sorteos.page */
      "pQKJ");

      var routes = [{
        path: '',
        component: _sorteos_page__WEBPACK_IMPORTED_MODULE_3__["SorteosPage"]
      }];

      var SorteosPageRoutingModule = /*#__PURE__*/_createClass(function SorteosPageRoutingModule() {
        _classCallCheck(this, SorteosPageRoutingModule);
      });

      SorteosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SorteosPageRoutingModule);
      /***/
    },

    /***/
    "pQKJ":
    /*!***********************************************!*\
      !*** ./src/app/pages/sorteos/sorteos.page.ts ***!
      \***********************************************/

    /*! exports provided: SorteosPage */

    /***/
    function pQKJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SorteosPage", function () {
        return SorteosPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sorteos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sorteos.page.html */
      "aZcE");
      /* harmony import */


      var _sorteos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sorteos.page.scss */
      "0i0l");
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


      var _sorteo_sorteo_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../sorteo/sorteo.page */
      "/1yw");
      /* harmony import */


      var src_app_util_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/util/util */
      "JQC8");

      var SorteosPage = /*#__PURE__*/function () {
        function SorteosPage(bs, modalCtrl, alertCtrl, navCtrl, util) {
          var _this = this;

          _classCallCheck(this, SorteosPage);

          this.bs = bs;
          this.modalCtrl = modalCtrl;
          this.alertCtrl = alertCtrl;
          this.navCtrl = navCtrl;
          this.util = util;
          this.sorteosDict = {
            'r': 'Regular',
            'j2': 'Juega 2',
            'j3': 'Juega 3',
            'f': 'Fechas'
          };
          this.searchTerm = '';
          this.sorteos = [];
          this.originales = [];
          this.bs.getEmpleado().then(function (d) {
            return _this.isAdmin = d.usuario.isadmin;
          });
          this.bs.get(bs.SORTEO_URL, true).then(function (d) {
            d.sort(function (a, b) {
              return a.nombre.trim().localeCompare(b.nombre.trim());
            });
            _this.sorteos = d;
            _this.originales = d.clone();
            console.log(_this.sorteos);
          })["catch"](function (err) {
            return util.handleError(err);
          });
        }

        return _createClass(SorteosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "search",
          value: function search(evt) {
            var termino = evt.target.value.trim().toLocaleLowerCase(); // console.log(termino);

            if (termino.length == 0) this.sorteos = this.originales.clone();else if (termino.indexOf("#") >= 0) this.sorteos = this.originales.filter(function (c) {
              return c.id.toString().indexOf(termino.replace("#", "").split(" ").join("")) >= 0;
            });else this.sorteos = this.originales.filter(function (c) {
              return c.nombre.trim().toLocaleLowerCase().indexOf(termino) > -1;
            });
          }
        }, {
          key: "nuevoSorteo",
          value: function nuevoSorteo() {
            this.navCtrl.navigateForward('/sorteo');
          }
        }, {
          key: "establecerGanador",
          value: function establecerGanador(sorteo) {
            this.navCtrl.navigateForward('/set-ganador', {
              queryParams: {
                sorteo_id: sorteo.id
              }
            });
          }
        }, {
          key: "sorteoClicked",
          value: function sorteoClicked(sorteo) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var modal, data, index;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.modalCtrl.create({
                      component: _sorteo_sorteo_page__WEBPACK_IMPORTED_MODULE_7__["SorteoPage"],
                      componentProps: {
                        sorteo: new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["Sorteo"](sorteo)
                      }
                    });

                  case 1:
                    modal = _context.v;
                    _context.n = 2;
                    return modal.present();

                  case 2:
                    _context.n = 3;
                    return modal.onWillDismiss();

                  case 3:
                    _context.n = 4;
                    return _context.v.data;

                  case 4:
                    data = _context.v;

                    if (data && data.sorteo) {
                      index = this.originales.findIndex(function (x) {
                        return x.id == sorteo.id;
                      });
                      this.originales[index] = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["Sorteo"](data.sorteo);
                      this.search({
                        target: {
                          value: this.searchTerm
                        }
                      });
                    }

                  case 5:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "eliminarSorteo",
          value: function eliminarSorteo(sorteo) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this2 = this;

              var alert;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    _context4.n = 1;
                    return this.alertCtrl.create({
                      header: "Eliminar Sorteo #".concat(sorteo.id),
                      message: "\xBFEst\xE1s seguro que deseas eliminar el sorteo \"<strong>".concat(sorteo.nombre, "</strong>\"?"),
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

                            var ex, _t;

                            return _regenerator().w(function (_context3) {
                              while (1) switch (_context3.p = _context3.n) {
                                case 0:
                                  _context3.p = 0;
                                  _context3.n = 1;
                                  return this.bs["delete"](this.bs.SORTEO_URL + '/' + sorteo.id, true);

                                case 1:
                                  this.originales.removeBy(function (s) {
                                    return s.id == sorteo.id;
                                  });
                                  this.search({
                                    target: {
                                      value: this.searchTerm
                                    }
                                  });
                                  setTimeout(function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
                                      return _regenerator().w(function (_context2) {
                                        while (1) switch (_context2.n) {
                                          case 0:
                                            _context2.n = 1;
                                            return this.util.presentAlert('Mensaje', 'Sorteo eliminado con éxito');

                                          case 1:
                                            return _context2.a(2);
                                        }
                                      }, _callee2, this);
                                    }));
                                  }, 100);
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
        }]);
      }();

      SorteosPage.ctorParameters = function () {
        return [{
          type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: src_app_util_util__WEBPACK_IMPORTED_MODULE_8__["Util"]
        }];
      };

      SorteosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sorteos',
        template: _raw_loader_sorteos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sorteos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SorteosPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-sorteos-sorteos-module-es5.js.map