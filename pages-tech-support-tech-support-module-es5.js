(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tech-support-tech-support-module"], {
    /***/
    "+mre":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tech-support/tech-support.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mre(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color='light'>\n      <ion-buttons slot=\"start\">\n          <ion-back-button [defaultHref]='\"/tab2\"' [text]=''></ion-back-button>\n      </ion-buttons>\n      <ion-title class=\"center\">Soporte técnico</ion-title>\n\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n\n    <form>\n      <ion-item >\n        <ion-label>Motivo</ion-label>\n        <ion-select name='subject' [(ngModel)]='support.motivo' [placeholder]='\"Seleccione una opción\"'>\n          <ion-select-option value='Requerimiento'>Requerimiento</ion-select-option>\n          <ion-select-option value='Reporte de error'>Reporte de error</ion-select-option>\n        </ion-select>\n  \n      </ion-item>\n  \n    <ion-item style=\"margin: 12px 0;\">\n  \n    <ion-label [position]='\"stacked\"'>Mensaje</ion-label>\n      <ion-textarea name='message' [(ngModel)]='support.mensaje' style=\"min-height: 200px\" [placeholder]=\"'Mensaje explicando el motivo...'\" ></ion-textarea>\n    </ion-item>\n    </form>\n\n  <div style=\"display: flex; justify-content: flex-end;\">\n\n  <ion-button (click)='submit()' [disabled]='!support.motivo.trim() || !support.mensaje.trim()' color='light'>Enviar reporte <ion-icon style=\"margin-left: 8px;\" name=\"send-outline\"></ion-icon></ion-button>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "/66E":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/tech-support/tech-support-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: TechSupportPageRoutingModule */

    /***/
    function _66E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TechSupportPageRoutingModule", function () {
        return TechSupportPageRoutingModule;
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


      var _tech_support_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tech-support.page */
      "zq9/");

      var routes = [{
        path: '',
        component: _tech_support_page__WEBPACK_IMPORTED_MODULE_3__["TechSupportPage"]
      }];

      var TechSupportPageRoutingModule = /*#__PURE__*/_createClass(function TechSupportPageRoutingModule() {
        _classCallCheck(this, TechSupportPageRoutingModule);
      });

      TechSupportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TechSupportPageRoutingModule);
      /***/
    },

    /***/
    "2st0":
    /*!***********************************************************!*\
      !*** ./src/app/pages/tech-support/tech-support.module.ts ***!
      \***********************************************************/

    /*! exports provided: TechSupportPageModule */

    /***/
    function st0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TechSupportPageModule", function () {
        return TechSupportPageModule;
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


      var _tech_support_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tech-support-routing.module */
      "/66E");
      /* harmony import */


      var _tech_support_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tech-support.page */
      "zq9/");

      var TechSupportPageModule = /*#__PURE__*/_createClass(function TechSupportPageModule() {
        _classCallCheck(this, TechSupportPageModule);
      });

      TechSupportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _tech_support_routing_module__WEBPACK_IMPORTED_MODULE_5__["TechSupportPageRoutingModule"]],
        declarations: [_tech_support_page__WEBPACK_IMPORTED_MODULE_6__["TechSupportPage"]]
      })], TechSupportPageModule);
      /***/
    },

    /***/
    "gLR0":
    /*!***********************************************************!*\
      !*** ./src/app/pages/tech-support/tech-support.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function gLR0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWNoLXN1cHBvcnQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "zq9/":
    /*!*********************************************************!*\
      !*** ./src/app/pages/tech-support/tech-support.page.ts ***!
      \*********************************************************/

    /*! exports provided: TechSupportPage */

    /***/
    function zq9_(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TechSupportPage", function () {
        return TechSupportPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tech_support_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tech-support.page.html */
      "+mre");
      /* harmony import */


      var _tech_support_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tech-support.page.scss */
      "gLR0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/base.service */
      "Do2H");
      /* harmony import */


      var src_app_util_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/util/util */
      "JQC8");

      var TechSupportPage = /*#__PURE__*/function () {
        function TechSupportPage(bs, loadCtrl, util) {
          _classCallCheck(this, TechSupportPage);

          this.bs = bs;
          this.loadCtrl = loadCtrl;
          this.util = util;
          this.support = {
            motivo: '',
            mensaje: ''
          };
        }

        return _createClass(TechSupportPage, [{
          key: "submit",
          value: function submit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var load, body, id, _t;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    _context.n = 1;
                    return this.loadCtrl.create({
                      message: 'Enviando reporte...'
                    });

                  case 1:
                    load = _context.v;
                    _context.n = 2;
                    return load.present();

                  case 2:
                    _context.p = 2;
                    body = {
                      support: JSON.stringify(this.support)
                    };
                    _context.n = 3;
                    return this.bs.post(this.bs.SUPPORT_URL, body, true);

                  case 3:
                    id = _context.v.id;
                    _context.n = 4;
                    return load.dismiss();

                  case 4:
                    _context.n = 5;
                    return this.util.presentAlert('Mensaje', "Reporte env\xEDado con \xE9xito, caso ID: #".concat(id));

                  case 5:
                    this.support = {
                      motivo: '',
                      mensaje: ''
                    };
                    _context.n = 8;
                    break;

                  case 6:
                    _context.p = 6;
                    _t = _context.v;
                    _context.n = 7;
                    return load.dismiss();

                  case 7:
                    _context.n = 8;
                    return this.util.presentAlert('Error', _t.message);

                  case 8:
                    return _context.a(2);
                }
              }, _callee, this, [[2, 6]]);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      TechSupportPage.ctorParameters = function () {
        return [{
          type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: src_app_util_util__WEBPACK_IMPORTED_MODULE_6__["Util"]
        }];
      };

      TechSupportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tech-support',
        template: _raw_loader_tech_support_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tech_support_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TechSupportPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-tech-support-tech-support-module-es5.js.map