(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-juegos-juegos-module"], {
    /***/
    "+zq3":
    /*!***********************************************!*\
      !*** ./src/app/pages/juegos/juegos.module.ts ***!
      \***********************************************/

    /*! exports provided: JuegosPageModule */

    /***/
    function zq3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JuegosPageModule", function () {
        return JuegosPageModule;
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


      var _juegos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./juegos-routing.module */
      "AWcS");
      /* harmony import */


      var _juegos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./juegos.page */
      "eN1v");

      var JuegosPageModule = /*#__PURE__*/_createClass(function JuegosPageModule() {
        _classCallCheck(this, JuegosPageModule);
      });

      JuegosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _juegos_routing_module__WEBPACK_IMPORTED_MODULE_5__["JuegosPageRoutingModule"]],
        declarations: [_juegos_page__WEBPACK_IMPORTED_MODULE_6__["JuegosPage"]]
      })], JuegosPageModule);
      /***/
    },

    /***/
    "1xRL":
    /*!***********************************************!*\
      !*** ./src/app/pages/juegos/juegos.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function xRL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header {\n  font-weight: bold;\n}\n\nion-list-header {\n  padding: 0;\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 99999;\n}\n\n.body {\n  max-height: calc(100% - 30px);\n  overflow: auto;\n}\n\n.body ion-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.sub {\n  font-size: 14px;\n  font-weight: bold;\n  color: gray;\n  display: block;\n}\n\nion-row.bc {\n  background-image: url('data:image/svg+xml;charset=utf-8,<svg%20xmlns=\"http://www.w3.org/2000/svg\"%20viewBox=\"0%200%2012%2020\"><path%20d=\"M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z\"%20fill=\"%23c8c7cc\"/></svg>');\n  background-repeat: no-repeat;\n  background-position: right 14px center;\n  background-size: 14px 14px;\n  width: 100%;\n}\n\nion-row.bc h3 {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: rgba(240, 65, 65, 0.7);\n  font-weight: bold;\n  font-size: 38px;\n}\n\nion-row.bc:active {\n  opacity: 0.5;\n}\n\n.date {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  transition: 0.3s all ease;\n}\n\n.date:active {\n  background: #CCC;\n}\n\nion-buttons.filter span {\n  padding: 4px 8.16px;\n  border-radius: 50%;\n  display: inline-block;\n  font-size: 12px;\n  position: absolute;\n  left: 30px;\n  font-weight: bold;\n  top: 0;\n  background: #A70B0B;\n}\n\n@media screen and (max-width: 401px) {\n  ion-col {\n    font-size: 14px;\n  }\n  ion-col ion-icon {\n    font-size: 12px;\n  }\n\n  ion-icon.all {\n    font-size: 15px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2p1ZWdvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksNkJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFFSSxhQUFBO0VBR0Esc0JBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSx5TUFBQTtFQUVBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFESjs7QUFHSTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQURSOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQUtBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBRUEseUJBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0FBRko7O0FBT0k7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxNQUFBO0VBQ0EsbUJBQUE7QUFKUjs7QUFRQTtFQUNJO0lBQ0ksZUFBQTtFQUxOO0VBTU07SUFDSSxlQUFBO0VBSlY7O0VBT0U7SUFDSSwwQkFBQTtFQUpOO0FBQ0YiLCJmaWxlIjoianVlZ29zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIFxufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgei1pbmRleDogOTk5OTk7XG59XG5cbi5ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmJvZHkgaW9uLWNvbCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zdWIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLXJvdy5iYyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCw8c3ZnJTIweG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiJTIwdmlld0JveD1cIjAlMjAwJTIwMTIlMjAyMFwiPjxwYXRoJTIwZD1cIk0yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHpcIiUyMGZpbGw9XCIlMjNjOGM3Y2NcIi8+PC9zdmc+Jyk7XG4gICAgLy8gcGFkZGluZy1yaWdodDogMzJweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDE0cHggY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTRweCAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgIGgze1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgY29sb3I6IHJnYmEoJGNvbG9yOiAjZjA0MTQxLCAkYWxwaGE6IC43KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICB9XG59XG5cbmlvbi1yb3cuYmM6YWN0aXZlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5kYXRlIHtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xufVxuXG4uZGF0ZTphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG59XG5cbmlvbi1idXR0b25zLmZpbHRlciB7XG4gICBcbiAgICBzcGFuIHtcbiAgICAgICAgcGFkZGluZzogNHB4IDguMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAzMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQTcwQjBCO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAxcHgpIHtcbiAgICBpb24tY29sIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWljb24uYWxsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "AWcS":
    /*!*******************************************************!*\
      !*** ./src/app/pages/juegos/juegos-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: JuegosPageRoutingModule */

    /***/
    function AWcS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JuegosPageRoutingModule", function () {
        return JuegosPageRoutingModule;
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


      var _juegos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./juegos.page */
      "eN1v");

      var routes = [{
        path: '',
        component: _juegos_page__WEBPACK_IMPORTED_MODULE_3__["JuegosPage"]
      }];

      var JuegosPageRoutingModule = /*#__PURE__*/_createClass(function JuegosPageRoutingModule() {
        _classCallCheck(this, JuegosPageRoutingModule);
      });

      JuegosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], JuegosPageRoutingModule);
      /***/
    },

    /***/
    "eN1v":
    /*!*********************************************!*\
      !*** ./src/app/pages/juegos/juegos.page.ts ***!
      \*********************************************/

    /*! exports provided: JuegosPage */

    /***/
    function eN1v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JuegosPage", function () {
        return JuegosPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_juegos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./juegos.page.html */
      "zNI/");
      /* harmony import */


      var _juegos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./juegos.page.scss */
      "1xRL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/base.service */
      "Do2H");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_util_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/util/util */
      "JQC8");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

      var JuegosPage = /*#__PURE__*/function () {
        function JuegosPage(bs, alertController, util, navCtrl) {
          var _this = this;

          _classCallCheck(this, JuegosPage);

          this.bs = bs;
          this.alertController = alertController;
          this.util = util;
          this.navCtrl = navCtrl;
          this.juegosGrouped = [];
          this.loaded = false;
          this.isAdmin = false;
          this.sorteoDict = {
            'r': 'Diaria',
            'j2': 'Diaria',
            'j3': 'Juega 3',
            'f': 'Fechas'
          }; // getIds = (juegos: Juego[]) => juegos.map(x => x.id).join(', ');

          this.getCantBoletos = function (juegos) {
            return juegos.sumBy(function (x) {
              return x.cantidad_boletos;
            });
          };

          this.COSTA_RICA_ID = 2;
          bs.get(bs.JUEGO_URL + "/activos", true).then(function (juegos) {
            return _this.juegosGrouped = juegos;
          })["catch"](function (err) {
            return util.handleError(err);
          })["finally"](function () {
            return _this.loaded = true;
          });
        }

        return _createClass(JuegosPage, [{
          key: "isValidNumber",
          value: function isValidNumber(numero, sorteo_tipo) {
            var first = numero.toString().indexOf('-') < 0 && numero.toString().indexOf('.') < 0;
            var n = parseInt(numero.toString().replace(/\D/g, ''), 10);
            return first && !isNaN(n) && n >= 0 && n <= 99;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var emp, _t;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    _context.p = 0;
                    _context.n = 1;
                    return this.bs.getEmpleado();

                  case 1:
                    emp = _context.v;
                    this.isAdmin = !!(emp && emp.usuario && emp.usuario.isadmin);
                    _context.n = 3;
                    break;

                  case 2:
                    _context.p = 2;
                    _t = _context.v;
                    this.isAdmin = false;

                  case 3:
                    if (this.isAdmin) {
                      _context.n = 5;
                      break;
                    }

                    this.juegosGrouped = [];
                    _context.n = 4;
                    return this.util.presentAlert('Mensaje', 'Solo el administrador puede establecer el número ganador.');

                  case 4:
                    this.navCtrl.navigateRoot('/tabs/tab1');

                  case 5:
                    return _context.a(2);
                }
              }, _callee, this, [[0, 2]]);
            }));
          }
        }, {
          key: "juegoClicked",
          value: function juegoClicked(juegos) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this2 = this;

              var alert;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    if (this.isAdmin) {
                      _context4.n = 2;
                      break;
                    }

                    _context4.n = 1;
                    return this.util.presentAlert('Mensaje', 'Solo el administrador puede establecer el número ganador.');

                  case 1:
                    return _context4.a(2, _context4.v);

                  case 2:
                    _context4.n = 3;
                    return this.alertController.create({
                      header: "Establecer n\xFAmero ganador del sorteo de las:",
                      subHeader: moment__WEBPACK_IMPORTED_MODULE_7___default()(juegos[0].fecha).format('MM/DD/YYYY hh:mm:ss A'),
                      inputs: [{
                        name: 'numero',
                        type: 'number',
                        placeholder: 'Número ganador'
                      }],
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'danger',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Establecer',
                        handler: function handler(e) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
                            var _this3 = this;

                            var numero, temp, n, _t2;

                            return _regenerator().w(function (_context3) {
                              while (1) switch (_context3.p = _context3.n) {
                                case 0:
                                  console.log('Confirm Ok');
                                  console.log(e);
                                  numero = e.numero;
                                  temp = numero.split('');
                                  n = '';
                                  temp.forEach(function (c) {
                                    /*if (!isNaN(c))
                                    {
                                     n= n+c;
                                    }*/
                                    if (!isNaN(c)) n += c;
                                  });

                                  if (!(n.length == 0 || !this.isValidNumber(n, juegos[0].sorteo.grupo.sorteo_tipo))) {
                                    _context3.n = 2;
                                    break;
                                  }

                                  _context3.n = 1;
                                  return this.util.presentAlert('Mensaje', 'Número no es válido para este tipo de sorteo.');

                                case 1:
                                  return _context3.a(2, _context3.v);

                                case 2:
                                  if (n.length == 1) n = '0' + n;
                                  _context3.p = 3;
                                  _context3.n = 4;
                                  return this.bs.put(this.bs.ESTABLECER_GANADOR_URL, {
                                    juegos_id: JSON.stringify(juegos.map(function (x) {
                                      return x.id;
                                    })),
                                    numero_ganador: n
                                  }, true);

                                case 4:
                                  // this.juegosGrouped.removeBy(x => x[0].id == juegos[0].id);
                                  this.bs.get(this.bs.JUEGO_URL + "/activos", true).then(function (juegos) {
                                    return _this3.juegosGrouped = juegos;
                                  })["catch"](function (err) {
                                    return _this3.util.handleError(err);
                                  })["finally"](function () {
                                    return _this3.loaded = true;
                                  });
                                  setTimeout(function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
                                      return _regenerator().w(function (_context2) {
                                        while (1) switch (_context2.n) {
                                          case 0:
                                            _context2.n = 1;
                                            return this.util.presentAlert('Mensaje', 'Se estableció el número ganador con éxito.');

                                          case 1:
                                            return _context2.a(2);
                                        }
                                      }, _callee2, this);
                                    }));
                                  }, 150);
                                  _context3.n = 6;
                                  break;

                                case 5:
                                  _context3.p = 5;
                                  _t2 = _context3.v;
                                  _context3.n = 6;
                                  return this.util.handleError(_t2);

                                case 6:
                                  return _context3.a(2);
                              }
                            }, _callee3, this, [[3, 5]]);
                          }));
                        }
                      }]
                    });

                  case 3:
                    alert = _context4.v;
                    _context4.n = 4;
                    return alert.present();

                  case 4:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "isCompleted",
          value: function isCompleted(juegos) {
            return juegos[0].iscompleted;
          }
        }, {
          key: "getGanador",
          value: function getGanador(juegos) {
            return juegos[0].numero_ganador;
          }
        }, {
          key: "getSorteoName",
          value: function getSorteoName(sorteo) {
            if (sorteo.pais.id == this.COSTA_RICA_ID && sorteo.grupo.sorteo_tipo == 'j3') return '3 Monazos';
            return this.sorteoDict[sorteo.grupo.sorteo_tipo];
          } // nombre del sorteo y su hora: si el nombre ya trae la hora (ej. "NICA 11 AM")
          // se deja tal cual, si no se agrega " - 11:00 AM"

        }, {
          key: "tituloJuego",
          value: function tituloJuego(juegos) {
            var s = juegos && juegos[0] && juegos[0].sorteo || {};
            var nombre = s.sorteo_nombre || this.getSorteoName(s);
            if (!nombre || /\d/.test(nombre)) return nombre || '';
            var h = s.hora ? moment__WEBPACK_IMPORTED_MODULE_7___default()(s.hora).format('hh:mm A') : '';
            return h ? nombre + ' - ' + h : nombre;
          }
        }]);
      }();

      JuegosPage.ctorParameters = function () {
        return [{
          type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: src_app_util_util__WEBPACK_IMPORTED_MODULE_6__["Util"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }];
      };

      JuegosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-juegos',
        template: _raw_loader_juegos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_juegos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], JuegosPage);
      /***/
    },

    /***/
    "zNI/":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/juegos/juegos.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function zNI_(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\n  <ion-toolbar color='light'>\n    <ion-buttons slot=\"start\">\n        <ion-back-button [text]='\"\"'></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"center\">Juegos Activos</ion-title>\n   \n</ion-toolbar>\n\n  \n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-grid>\n          <ion-row class=\"header top\">\n              <ion-col size='4'>Juego </ion-col>\n              <ion-col size='4' style=\"margin-left: -10px;\">Boletos </ion-col>\n              <ion-col size='4'>Sorteos </ion-col>\n          </ion-row>\n      </ion-grid>\n  </ion-list-header>\n\n  <h2 *ngIf='juegosGrouped.length == 0 && loaded' style=\"color: darkgray; text-align: center;\">NO HAY JUEGOS PENDIENTES</h2>\n  <ion-grid>\n    <ion-item  button *ngFor=\"let juegos of juegosGrouped\" (click)='juegoClicked(juegos)' class=\"ion-no-padding\">\n\n      <ion-row class=\"bc\">\n          <ion-col size='4'><strong>{{tituloJuego(juegos)}}</strong><br><span class=\"sub\">{{juegos[0].fecha  | date: 'dd/MM/yyyy'}}</span> <span class=\"sub\">{{juegos[0].fecha | date: 'hh:mm:ss a'}}</span>\n            <!-- <br> -->\n            <span>{{juegos[0].sorteo.pais.nombre}}</span>\n          </ion-col>\n          <ion-col size='4'> <strong>{{getCantBoletos(juegos)}}</strong> </ion-col>\n          <ion-col> <strong>{{juegos.length}}</strong>\n            <ng-container *ngIf=\"isCompleted(juegos)\">\n              <p style=\"font-weight: bold; color: green; margin: 0; margin-top: 4px\">COMPLETO</p>\n              <p style=\"font-weight: bold; color: green; margin: 0;\">#{{getGanador(juegos)}}</p>\n            </ng-container>\n          </ion-col>\n                     \n      </ion-row>\n\n\n  </ion-item>\n  </ion-grid>\n  </ion-list>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-juegos-juegos-module-es5.js.map