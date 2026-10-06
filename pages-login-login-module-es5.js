(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "F4UR":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function F4UR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "aTZN");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "bP1B");

      var LoginPageModule = /*#__PURE__*/_createClass(function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      });

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "H+1c":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function H1c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h2 {\n  text-align: center;\n  color: #13474E;\n  font-weight: bold;\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n\nion-button {\n  margin-top: 40px;\n  display: block;\n}\n\nion-toolbar p {\n  font-weight: bold;\n  font-size: 11px;\n  text-align: center;\n}\n\nion-toolbar p:last-child {\n  font-size: 14px;\n}\n\nion-item {\n  margin-top: 10px;\n  margin-bottom: 20px;\n  border-bottom: 10px;\n}\n\n.pcolor {\n  color: #13474E;\n  font-weight: bold;\n  font-size: small;\n}\n\n.pcuenta {\n  font-size: small;\n  opacity: 0.7;\n}\n\n.item {\n  text-align: center;\n}\n\n.imagen {\n  display: block;\n  margin: 10px auto 40px auto;\n  height: 80px;\n  border-radius: 50%;\n}\n\nion-input {\n  text-align: left;\n  color: #000000;\n}\n\n.icono {\n  font-size: small;\n  margin-right: 16px;\n}\n\nform {\n  position: relative;\n}\n\nion-content {\n  position: relative;\n}\n\nimg.bg-top {\n  position: absolute;\n  width: 100%;\n  z-index: 0;\n  height: 140px;\n}\n\n.loading {\n  position: fixed;\n  z-index: 99999;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.9);\n}\n\n.loading img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 70%;\n}\n\n.loading h4 {\n  position: absolute;\n  top: 52%;\n  left: 50%;\n  transform: translate(-50%, 0);\n  color: #000000;\n  font-weight: bold;\n}\n\nion-item {\n  align-items: center;\n  position: relative;\n}\n\n.btn-pass {\n  margin: 0;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  font-size: 16px;\n  --background: transparent;\n  transform: translateY(-50%);\n  --padding-start: 0;\n  --padding-end: 0;\n  z-index: 888888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFJSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRFI7O0FBRVE7RUFDSSxlQUFBO0FBQVo7O0FBTUE7RUFFRyxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7QUFMSDs7QUFRQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBUUE7RUFFSSxnQkFBQTtFQUNBLFlBQUE7QUFOSjs7QUFTQTtFQUNJLGtCQUFBO0FBTko7O0FBUUE7RUFFRSxjQUFBO0VBR0UsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFSSjs7QUFXQTtFQUVJLGdCQUFBO0VBQ0EsY0FBQTtBQVRKOztBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQVJKOztBQWFBO0VBQ0ksa0JBQUE7QUFWSjs7QUFnQkE7RUFDSSxrQkFBQTtBQWJKOztBQWdCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBYko7O0FBaUJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBZEo7O0FBZUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FBYlI7O0FBZUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFiUjs7QUFrQkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBZko7O0FBa0JBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBZkoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMTM0NzRFO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG59XG5pb24tYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vIG1hcmdpbjogMCBhdXRvO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgcCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJnaW46IDA7XG4gICAgfVxufVxuXG5pb24taXRlbXtcblxuICAgbWFyZ2luLXRvcDogMTBweDtcbiAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4vLyAgICBtYXJnaW46IGF1dG87XG4gICBib3JkZXItYm90dG9tOiAxMHB4O1xufVxuXG4ucGNvbG9ye1xuICAgIGNvbG9yOiMxMzQ3NEUgO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgXG59XG4ucGN1ZW50YXtcblxuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgb3BhY2l0eTogMC43OyBcbiAgIFxufVxuLml0ZW17XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmltYWdlbntcblxuICBkaXNwbGF5OiBibG9jaztcbi8vICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4vLyAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW46IDEwcHggYXV0byA0MHB4IGF1dG87XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxufVxuaW9uLWlucHV0e1xuXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cbi5pY29ub3tcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuXG5cbmZvcm0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG5cblxuaW9uLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW1nLmJnLXRvcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDA7XG4gICAgaGVpZ2h0OiAxNDBweDtcbn1cblxuXG4ubG9hZGluZyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC45KTtcbiAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgIH1cbiAgICBoNCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MiU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIH1cbn1cblxuaW9uLWl0ZW0ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnRuLXBhc3Mge1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIHotaW5kZXg6IDg4ODg4ODtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "TuYN":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function TuYN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n    <ion-toolbar color='light'>\n        <ion-title class=\"center\">Iniciar Sesión</ion-title>\n    </ion-toolbar>\n</ion-header> -->\n<ion-content>\n    <img class=\"bg-top\" src=\"assets/img/bg_top.png\" alt=\"\">\n    <form class=\"ion-padding\" #form='ngForm' (ngSubmit)='login(form)'>\n        <img  class='imagen' src=\"assets/img/logo.png\" alt=\"\">\n        <h2>Iniciar Sesión</h2>\n\n        <ion-item color='light' class=\"prueba\" expand=\"block\">\n            <ion-icon class=\"icono\" name=\"person\"></ion-icon>\n            <!-- <ion-label class='itemusuario' position='floating'>Nombre del usuario</ion-label> -->\n            <ion-input placeholder='Nombre de Usuario' name='nombre' [(ngModel)]='usuario.nombre'></ion-input>\n            \n           \n            \n        </ion-item>\n        \n        <ion-item color= 'light'>\n            <ion-icon  class='icono' name=\"lock-closed\"></ion-icon>\n            <!-- <ion-label class='itemcontraseña' position='round'>Contraseña</ion-label> -->\n            <ion-input style=\"--padding-end: 30px;\" placeholder='Contraseña'  name='pass' [type]='showPassword ? \"text\" : \"password\"' [(ngModel)]='usuario.pass'></ion-input>\n\n            <ion-button fill='transparent' color='light' class=\"btn-pass\" (click)='showPassword = !showPassword'>\n                <ion-icon *ngIf='!showPassword' name=\"eye-outline\"></ion-icon>\n                <ion-icon *ngIf='showPassword' src='assets/img/eye-slash-regular.svg'></ion-icon>\n            </ion-button>\n            \n        </ion-item>\n\n        <ion-button style=\"display: block; margin-top: 20px;\" [disabled]=\"!isValid() || doingLogin\" type='submit'>INICIAR SESIÓN\n            \n        </ion-button>\n        \n        \n    </form>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar color='light' *ngIf='!isVisible()'>\n        <p>Copyright © Todos los derechos reservados, Lucky Games {{getDate() | date:'yyyy'}}</p>\n        <p>Versión {{VERSION}}</p>\n    </ion-toolbar>\n</ion-footer>\n\n<div class=\"loading\" *ngIf='doingLogin'>\n    <img src=\"assets/img/bubble.gif\" alt=\"\">\n    <h4>Iniciando sesión...</h4>\n</div>";
      /***/
    },

    /***/
    "aTZN":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function aTZN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "bP1B");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = /*#__PURE__*/_createClass(function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      });

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "bP1B":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function bP1B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "TuYN");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "H+1c");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/base.service */
      "Do2H");
      /* harmony import */


      var _classes_classes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../classes/classes */
      "50N5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      "PLH8");
      /* harmony import */


      var src_app_util_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/util/util */
      "JQC8");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "wljF");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(bs, navCtrl, storage, ngZone, keyboard, util, oneSignal) {
          _classCallCheck(this, LoginPage);

          this.bs = bs;
          this.navCtrl = navCtrl;
          this.storage = storage;
          this.ngZone = ngZone;
          this.keyboard = keyboard;
          this.util = util;
          this.oneSignal = oneSignal;
          this.doingLogin = false;
          this.showPassword = false;
          this.usuario = new _classes_classes__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
          this.noKeyboard = true;
          this.VERSION = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].APP_VERSION;
        }

        return _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this = this;

              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    if (!(!this.isValid() || this.doingLogin)) {
                      _context3.n = 1;
                      break;
                    }

                    return _context3.a(2);

                  case 1:
                    this.doingLogin = true;

                    try {
                      if (typeof window.cordova !== 'undefined') {
                        this.keyboard.hide();
                      }
                    } catch (kbErr) {
                      console.log('keyboard skip', kbErr);
                    }

                    setTimeout(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
                        var _this2 = this;

                        var data, pi, canPrint, canSend, canSMS, letter, ex, _t2, _t3;

                        return _regenerator().w(function (_context2) {
                          while (1) switch (_context2.p = _context2.n) {
                            case 0:
                              _context2.p = 0;
                              _context2.n = 1;
                              return this.bs.post(this.bs.LOGIN_URL, {
                                nombre: this.usuario.nombre,
                                pass: this.usuario.pass
                              });

                            case 1:
                              data = _context2.v;

                              if (!(!data || !data.token || !data.empleado)) {
                                _context2.n = 2;
                                break;
                              }

                              throw {
                                status: 500,
                                message: 'Respuesta inválida del servidor.'
                              };

                            case 2:
                              _context2.n = 3;
                              return this.storage.set('token', data.token);

                            case 3:
                              pi = !!(data.empleado.usuario && (data.empleado.usuario.isadmin || data.empleado.usuario.pi));
                              _context2.n = 4;
                              return this.storage.get('print_receipt');

                            case 4:
                              canPrint = _context2.v;
                              if (canPrint == null || canPrint == undefined) canPrint = false;
                              _context2.n = 5;
                              return this.storage.get('send_whatsapp');

                            case 5:
                              canSend = _context2.v;
                              if (canSend == null || canSend == undefined) canSend = false;
                              _context2.n = 6;
                              return this.storage.get('send_sms');

                            case 6:
                              _t2 = _context2.v;

                              if (_t2) {
                                _context2.n = 7;
                                break;
                              }

                              _t2 = false;

                            case 7:
                              canSMS = _t2;
                              this.util.SEND_SMS = canSMS || false;
                              this.util.SEND_WHATSAPP = canSend;
                              _context2.n = 8;
                              return this.storage.set('send_sms', canSMS);

                            case 8:
                              if (!pi) {
                                this.util.PRINT_RECEIPT = false;
                              } else this.util.PRINT_RECEIPT = canPrint;

                              _context2.n = 9;
                              return this.storage.set('print_receipt', this.util.PRINT_RECEIPT);

                            case 9:
                              _context2.n = 10;
                              return this.storage.set('send_whatsapp', this.util.SEND_WHATSAPP);

                            case 10:
                              this.bs.setEmpleado(data.empleado);
                              letter = data.empleado.genero == 'M' ? 'o' : 'a';
                              this.doingLogin = false;
                              setTimeout(function () {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                                  var _t;

                                  return _regenerator().w(function (_context) {
                                    while (1) switch (_context.p = _context.n) {
                                      case 0:
                                        _context.p = 0;
                                        _context.n = 1;
                                        return this.util.presentAlert('Mensaje', 'Bienvenid' + letter + ': ' + (data.empleado.primer_nombre || ''));

                                      case 1:
                                        this.navCtrl.navigateRoot('/');

                                        try {
                                          Promise.resolve(this.oneSignal.setExternalUserId(String(data.empleado.usuario && data.empleado.usuario.id)))["catch"](function (osErr) {
                                            return console.log('OneSignal skip', osErr);
                                          });
                                        } catch (osErr) {
                                          console.log('OneSignal skip', osErr);
                                        }

                                        _context.n = 3;
                                        break;

                                      case 2:
                                        _context.p = 2;
                                        _t = _context.v;
                                        console.log('after login error', _t);
                                        this.doingLogin = false;

                                      case 3:
                                        return _context.a(2);
                                    }
                                  }, _callee, this, [[0, 2]]);
                                }));
                              }, 100);
                              _context2.n = 12;
                              break;

                            case 11:
                              _context2.p = 11;
                              _t3 = _context2.v;
                              console.log('login error', _t3);
                              ex = _t3 || {};
                              if (!ex.status && ex.message) ex = {
                                status: 0,
                                message: ex.message
                              };
                              if (ex.status == 404) this.usuario = new _classes_classes__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
                              setTimeout(function () {
                                _this2.util.handleError(ex);

                                _this2.doingLogin = false;
                              }, 100);

                            case 12:
                              return _context2.a(2);
                          }
                        }, _callee2, this, [[0, 11]]);
                      }));
                    }, 100);

                  case 2:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "isValid",
          value: function isValid() {
            var nombre = this.usuario && this.usuario.nombre != null ? String(this.usuario.nombre).trim() : '';
            var pass = this.usuario && this.usuario.pass != null ? String(this.usuario.pass).trim() : '';
            return nombre != '' && pass != '';
          }
        }, {
          key: "getDate",
          value: function getDate() {
            return new Date();
          }
        }, {
          key: "isVisible",
          value: function isVisible() {
            return false;
          }
        }]);
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
        }, {
          type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__["Keyboard"]
        }, {
          type: src_app_util_util__WEBPACK_IMPORTED_MODULE_9__["Util"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__["OneSignal"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map