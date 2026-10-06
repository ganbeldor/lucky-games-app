(function () {
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }

  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee(url, ev, direction, animation) {
          var router;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context.n = 1;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context.n = 1;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context.a(2, router.push(url, direction, animation));

              case 1:
                return _context.a(2, false);
            }
          }, _callee);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "8SQ3":
    /*!**********************************************************************!*\
      !*** ./src/app/components/roles-explained/roles-explained.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function SQ3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  margin: 0;\n}\n\nh2 {\n  margin: 0;\n}\n\n.container {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n\n.container .dot {\n  min-width: 16px;\n  min-height: 16px;\n  border-radius: 50%;\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JvbGVzLWV4cGxhaW5lZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FBQ0o7O0FBR0E7RUFDSSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNSIiwiZmlsZSI6InJvbGVzLWV4cGxhaW5lZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgLy8gbWFyZ2luLXRvcDogLTNweDtcbn1cblxuaDIge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIC5kb3Qge1xuICAgICAgICBtaW4td2lkdGg6IDE2cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "I2vD":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/super-grupo/super-grupo.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function I2vD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color='light'>\n    <ion-buttons>\n      <ion-back-button slot=\"start\"> [text]='\"\"' </ion-back-button>\n    </ion-buttons>\n    \n    <ion-title class='center'> {{superGrupo.id == -1 ? 'Nuevo ' : ''}}Super Grupo{{superGrupo.id == -1 ? '': ' #' + superGrupo.id}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf='superGrupo.id > -1' (click)='close()'>\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n      <ion-button (click)='showMenu($event)'>\n          <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form #form='ngForm' (ngSubmit)='submit(form)'>\n    <ion-item>\n        <ion-label position='floating'>Nombre</ion-label>\n        <ion-input [(ngModel)]='superGrupo.nombre' name='nombre'></ion-input>\n    </ion-item>\n    <ion-list style=\"margin-top: 20px;\">\n      <ion-list-header>\n          <ion-label>Lista de grupos</ion-label>\n      </ion-list-header>\n      <ion-item *ngFor='let grupo of grupos; let i = index'>\n          <ion-label>{{grupo.nombre}}</ion-label>\n          <ion-toggle (ionChange)='toggleGrupo(grupo.id)' [name]='grupo.nombre' slot=\"end\" [checked]=\"isGrupoInSuperGrupo(grupo.id)\"></ion-toggle>\n      </ion-item>\n  \n  </ion-list>\n  \n    <ion-button expand='block' style=\"margin-top: 20px;\" type='submit' [disabled]='!isValid()'>\n      {{superGrupo.id == -1 ? 'Guardar' : 'Actualizar'}}\n      <ion-icon style=\"margin-left: 6px;\" name='save'></ion-icon>\n    </ion-button>\n  </form>\n  <!-- {{\n    superGrupo.grupos_id |json\n  }} -->\n  \n\n</ion-content>\n";
      /***/
    },

    /***/
    "LaoF":
    /*!********************************************************************!*\
      !*** ./src/app/components/roles-explained/roles-explained.page.ts ***!
      \********************************************************************/

    /*! exports provided: RolesExplainedPage */

    /***/
    function LaoF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesExplainedPage", function () {
        return RolesExplainedPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_roles_explained_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./roles-explained.page.html */
      "kmqV");
      /* harmony import */


      var _roles_explained_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./roles-explained.page.scss */
      "8SQ3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RolesExplainedPage = /*#__PURE__*/function () {
        function RolesExplainedPage() {
          _classCallCheck(this, RolesExplainedPage);

          this.roles = [{
            background: '#13474E',
            label: 'Administrador'
          }, {
            background: '#0D6A8D',
            label: 'Supervisor'
          }, {
            background: '#8D0D0D',
            label: 'Agente'
          }, {
            background: '#CD0A0A',
            label: 'Agente que nunca ha facturado'
          }];
        }

        return _createClass(RolesExplainedPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      RolesExplainedPage.ctorParameters = function () {
        return [];
      };

      RolesExplainedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-roles-explained',
        template: _raw_loader_roles_explained_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_roles_explained_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RolesExplainedPage);
      /***/
    },

    /***/
    "UbWJ":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/balance-filtro/balance-filtro.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UbWJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color='light'>\n      <ion-title class=\"center\">Filtros</ion-title>\n      <ion-buttons slot=\"end\">\n          <ion-button (click)='close()'>\n              <ion-icon name='close' slot='icon-only'></ion-icon>\n          </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class='ion-padding'>\n  \n    <ion-item>\n        <ion-label>Ordenar</ion-label>\n        <ion-select [(ngModel)]='sort' placeholder='Seleccione una opción'>\n            <ion-select-option *ngFor='let e of sorts' [value]='e'>{{e}}</ion-select-option>\n        </ion-select>\n    </ion-item>\n\n    <div class=\"btn-container\">\n        <ion-button color='danger' (click)='sort = \"\"' class=\"eliminar\">\n            Limpiar\n            <ion-icon name=\"trash\"></ion-icon>\n        </ion-button>\n    </div>\n\n    <ion-item>\n        <ion-label>Turno</ion-label>\n        <ion-select [(ngModel)]='turno' placeholder='Seleccione un turno'>\n            <ion-select-option *ngFor='let e of turnos' [value]='e'>{{e}}</ion-select-option>\n        </ion-select>\n    </ion-item>\n\n  <div class=\"btn-container\">\n    <ion-button color='danger' (click)='turno = \"\"' class=\"eliminar\">\n        Limpiar\n        <ion-icon name=\"trash\"></ion-icon>\n    </ion-button>\n</div>\n\n\n<ion-item>\n    <ion-label>Tipo</ion-label>\n    <ion-select [(ngModel)]='sorteo_tipo' name='tipo' placeholder='Seleccione un tipo'>\n        <ion-select-option value='r'>\n            Regular\n        </ion-select-option>\n        <ion-select-option value='j3'>\n            Juega 3\n        </ion-select-option>\n        <ion-select-option value='f'>\n            Fechas\n        </ion-select-option>\n    </ion-select>\n\n</ion-item>\n\n<div class=\"btn-container\">\n    <ion-button color='danger' (click)='limpiar(5)' class=\"eliminar\">\n        Limpiar\n        <ion-icon name=\"trash\"></ion-icon>\n    </ion-button>\n</div>\n\n<ng-container *ngIf='empleados.length > 0 || supervisor.id != -1'>\n    <ion-item>\n        <ion-label>Supervisor</ion-label>\n        <ion-select [disabled]='empleados.length == 0' [(ngModel)]='supervisor' [placeholder]='supervisor.id == -1 ? \"Seleccione un supervisor\" : supervisor.nombre'>\n            <ion-select-option *ngFor='let e of empleados' [value]='e'>{{e.nombre}}</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <div class=\"btn-container\">\n        <ion-button color='danger' (click)='limpiar(2)' class=\"eliminar\">\n            Limpiar\n            <ion-icon name=\"trash\"></ion-icon>\n        </ion-button>\n    </div>\n</ng-container>\n\n\n<ng-container *ngIf='agentes.length > 0 || agente.id != -1'>\n    <ion-item>\n        <ion-label>Agente</ion-label>\n        <ion-select [disabled]='agentes.length == 0' [(ngModel)]='agente' [placeholder]='agente.id == -1 ? \"Seleccione un agente\" : agente.nombre'>\n            <ion-select-option *ngFor='let e of agentes' [value]='e'>{{e.nombre}}</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <div class=\"btn-container\">\n        <ion-button color='danger' (click)='limpiar(3)' class=\"eliminar\">\n            Limpiar\n            <ion-icon name=\"trash\"></ion-icon>\n        </ion-button>\n    </div>\n</ng-container>\n\n<ng-container *ngIf='paises.length > 0'>\n    <ion-item>\n        <ion-label>País</ion-label>\n        <ion-select [(ngModel)]='pais_id' [placeholder]='\"Seleccione un país\"'>\n            <ion-select-option *ngFor='let p of paises' [value]='p.id'>{{p.nombre}}</ion-select-option>\n        </ion-select>\n\n    </ion-item>\n\n\n    <div class=\"btn-container\">\n        <ion-button color='danger' (click)='limpiar(6)' class=\"eliminar\">\n            Limpiar\n            <ion-icon name=\"trash\"></ion-icon>\n        </ion-button>\n    </div>\n</ng-container>\n\n\n\n\n  <ion-button class='submit' expand='block' (click)='aplicarFiltros()'>Aplicar filtros\n      <ion-icon style='margin-left: 6px;' name=\"checkmark-circle\"></ion-icon>\n  </ion-button>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "X5NK":
    /*!***************************************************************!*\
      !*** ./src/app/pages/balance-filtro/balance-filtro.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function X5NK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div.btn-container {\n  display: flex;\n  justify-content: flex-end;\n  margin: 20px 0;\n}\n\nion-button.eliminar {\n  font-size: 11px !important;\n}\n\nion-button.eliminar ion-icon {\n  margin-left: 6px;\n  font-size: 12px !important;\n}\n\nion-button.submit {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JhbGFuY2UtZmlsdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFHQTtFQUNJLDBCQUFBO0FBQUo7O0FBQ0k7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0FBQ1I7O0FBR0E7RUFDSSxjQUFBO0FBQUoiLCJmaWxlIjoiYmFsYW5jZS1maWx0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmJ0bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBcbn1cblxuaW9uLWJ1dHRvbi5lbGltaW5hciB7XG4gICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbmlvbi1idXR0b24uc3VibWl0IHtcbiAgICBtYXJnaW46IDIwcHggMDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "Zcj0":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function Zcj0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");
      /* harmony import */


      var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-34cb2743.js */
      "KF81");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "iiW8":
    /*!*******************************************************!*\
      !*** ./src/app/pages/super-grupo/super-grupo.page.ts ***!
      \*******************************************************/

    /*! exports provided: SuperGrupoPage */

    /***/
    function iiW8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuperGrupoPage", function () {
        return SuperGrupoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_super_grupo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./super-grupo.page.html */
      "I2vD");
      /* harmony import */


      var _super_grupo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./super-grupo.page.scss */
      "wZeR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/classes/classes */
      "50N5");
      /* harmony import */


      var _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/sub-menu/sub-menu.page */
      "YY6p");
      /* harmony import */


      var _restringir_numeros_restringir_numeros_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../restringir-numeros/restringir-numeros.page */
      "B4BN");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/base.service */
      "Do2H");
      /* harmony import */


      var src_app_util_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/util/util */
      "JQC8");

      var SuperGrupoPage = /*#__PURE__*/function () {
        function SuperGrupoPage(bs, modalCtrl, navCtrl, popoverCtrl, loadCtrl, util) {
          var _this = this;

          _classCallCheck(this, SuperGrupoPage);

          this.bs = bs;
          this.modalCtrl = modalCtrl;
          this.navCtrl = navCtrl;
          this.popoverCtrl = popoverCtrl;
          this.loadCtrl = loadCtrl;
          this.util = util;
          this.superGrupo = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["SuperGrupo"]();
          this.grupos = [];
          this.bs.get(this.bs.GRUPO_URL, true).then(function (grupos) {
            return _this.grupos = grupos;
          })["catch"](function (err) {
            return _this.util.handleError(err);
          });
        }

        return _createClass(SuperGrupoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showMenu",
          value: function showMenu(evt) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this2 = this;

              var restringirNumerosClicked, options, popover;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    restringirNumerosClicked = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
                    options = [{
                      name: 'Restringir números',
                      icon: 'lock-closed',
                      event: restringirNumerosClicked,
                      type: 'button'
                    }];
                    restringirNumerosClicked.subscribe(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
                        var modal, data;
                        return _regenerator().w(function (_context2) {
                          while (1) switch (_context2.n) {
                            case 0:
                              _context2.n = 1;
                              return this.modalCtrl.create({
                                component: _restringir_numeros_restringir_numeros_page__WEBPACK_IMPORTED_MODULE_6__["RestringirNumerosPage"],
                                componentProps: {
                                  numeros_restringidos: this.superGrupo.numeros_restringidos.clone()
                                }
                              });

                            case 1:
                              modal = _context2.v;
                              _context2.n = 2;
                              return modal.present();

                            case 2:
                              _context2.n = 3;
                              return modal.onDidDismiss();

                            case 3:
                              data = _context2.v.data;

                              if (data && data.numeros_restringidos) {
                                this.superGrupo.numeros_restringidos = data.numeros_restringidos;
                              }

                            case 4:
                              return _context2.a(2);
                          }
                        }, _callee2, this);
                      }));
                    });
                    _context3.n = 1;
                    return this.popoverCtrl.create({
                      component: _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_5__["SubMenuPage"],
                      event: evt,
                      cssClass: 'sub-menu',
                      showBackdrop: true,
                      componentProps: {
                        options: options
                      }
                    });

                  case 1:
                    popover = _context3.v;
                    _context3.n = 2;
                    return popover.present();

                  case 2:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "close",
          value: function close() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "submit",
          value: function submit(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var loading, body, sg, msg, _t;

              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.p = _context4.n) {
                  case 0:
                    if (this.isValid()) {
                      _context4.n = 1;
                      break;
                    }

                    return _context4.a(2);

                  case 1:
                    _context4.n = 2;
                    return this.loadCtrl.create({
                      message: this.superGrupo.id == -1 ? 'Creando super grupo...' : 'Actualizando super grupo...'
                    });

                  case 2:
                    loading = _context4.v;
                    _context4.n = 3;
                    return loading.present();

                  case 3:
                    setTimeout(function () {
                      loading.message = 'Calculando límites de grupos y numerones...';
                    }, 2000);
                    _context4.p = 4;
                    body = {
                      superGrupo: JSON.stringify(this.superGrupo)
                    };
                    _context4.n = 5;
                    return this.bs.post(this.bs.SUPER_GRUPO_URL, body, true);

                  case 5:
                    sg = _context4.v;
                    msg = this.superGrupo.id == -1 ? 'Super Grupo creado con id #' + sg.id : 'Grupo modificado con éxito';
                    console.log(sg);
                    _context4.n = 6;
                    return loading.dismiss();

                  case 6:
                    _context4.n = 7;
                    return this.util.presentAlert('Mensaje', msg);

                  case 7:
                    if (this.superGrupo.id == -1) this.navCtrl.pop();else this.modalCtrl.dismiss({
                      superGrupo: sg
                    });
                    _context4.n = 10;
                    break;

                  case 8:
                    _context4.p = 8;
                    _t = _context4.v;
                    _context4.n = 9;
                    return loading.dismiss();

                  case 9:
                    this.util.handleError(_t);

                  case 10:
                    return _context4.a(2);
                }
              }, _callee4, this, [[4, 8]]);
            }));
          }
        }, {
          key: "isValid",
          value: function isValid() {
            return this.superGrupo.nombre.trim() != '';
          }
        }, {
          key: "isGrupoInSuperGrupo",
          value: function isGrupoInSuperGrupo(grupo_id) {
            console.log(this.superGrupo.grupos_id.includes(grupo_id), grupo_id);
            return this.superGrupo.grupos_id.includes(grupo_id);
          }
        }, {
          key: "toggleGrupo",
          value: function toggleGrupo(grupo_id) {
            if (this.superGrupo.grupos_id.removeBy(function (x) {
              return x == grupo_id;
            }) == 0) this.superGrupo.grupos_id.push(grupo_id);
          }
        }]);
      }();

      SuperGrupoPage.ctorParameters = function () {
        return [{
          type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
        }, {
          type: src_app_util_util__WEBPACK_IMPORTED_MODULE_10__["Util"]
        }];
      };

      SuperGrupoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-super-grupo',
        template: _raw_loader_super_grupo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_super_grupo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SuperGrupoPage);
      /***/
    },

    /***/
    "kmqV":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/roles-explained/roles-explained.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kmqV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"padding: 16px;\">\n    <h2 style=\"font-size: 18px; font-weight: bold; text-align: center;\">Ayuda</h2>\n    <hr style=\"margin: 16px 0;\">\n    <div class=\"container\" *ngFor='let r of roles;'>\n      <div class=\"dot\" [ngStyle]='{\"background\": r.background}'></div>\n      <p style=\"font-size: 16px; margin-top: -3px;\">{{r.label}}</p>\n    </div>\n    <hr>\n    <p style=\"font-size: 16px; text-align: center; margin-top: 16px;\">Agentes en la lista no han facturado en la fecha seleccionada.</p>\n    <hr style=\"margin: 16px 0;\">\n    <p style=\"font-size: 16px; text-align: center;\">La diferencia de días es relativa a la fecha seleccionada.</p>\n</div>";
      /***/
    },

    /***/
    "ngqc":
    /*!*************************************************************!*\
      !*** ./src/app/pages/balance-filtro/balance-filtro.page.ts ***!
      \*************************************************************/

    /*! exports provided: BalanceFiltroPage */

    /***/
    function ngqc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BalanceFiltroPage", function () {
        return BalanceFiltroPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_balance_filtro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./balance-filtro.page.html */
      "UbWJ");
      /* harmony import */


      var _balance_filtro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./balance-filtro.page.scss */
      "X5NK");
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

      var BalanceFiltroPage = /*#__PURE__*/function () {
        function BalanceFiltroPage(bs, util, modalCtrl) {
          _classCallCheck(this, BalanceFiltroPage);

          this.bs = bs;
          this.util = util;
          this.modalCtrl = modalCtrl;
          this.empleados = [];
          this.isAdmin = false;
          this.supervisor = {
            id: -1,
            nombre: '',
            agentes: []
          };
          this.turnos = ['10:00 AM', '11:00 AM', '12:50 PM', '03:00 PM', '04:30 PM', '06:00 PM', '07:30 PM', '09:00 PM'];
          this.agentes = [];
          this.agente = {
            id: -1,
            nombre: ''
          };
          this.sorteo_tipo = '';
          this.pais_id = null;
          this.paises = [{
            "id": 1,
            "nombre": "Nicaragüa"
          }, {
            "id": 2,
            "nombre": "Costa Rica"
          }, {
            "id": 3,
            "nombre": "Honduras"
          }, {
            "id": 4,
            "nombre": "Republica Dominicana"
          }];
          this.sorts = ['Más Vendido', 'Menos Vendido', 'Más Pagado', 'Menos Pagado', 'Más Balance', 'Menos Balance'];
        }

        return _createClass(BalanceFiltroPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAll();
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this3 = this;

              var emp, ex, _t2;

              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.p = _context5.n) {
                  case 0:
                    _context5.p = 0;
                    _context5.n = 1;
                    return this.bs.getEmpleado();

                  case 1:
                    emp = _context5.v;
                    this.isAdmin = emp.usuario.isadmin;
                    _context5.n = 2;
                    return this.bs.get(this.bs.EMPLEADO_URL + '/supervisores', true);

                  case 2:
                    this.empleados = _context5.v;
                    if (this.empleados.length > 0) this.supervisor = this.empleados.find(function (x) {
                      return x.id == _this3.supervisor.id;
                    }) || {
                      id: -1,
                      nombre: '',
                      agentes: []
                    };

                    if (this.isAdmin) {
                      _context5.n = 3;
                      break;
                    }

                    this.agentes = emp.empleados.map(function (x) {
                      return {
                        id: x.id,
                        nombre: x.primer_nombre + ' ' + x.primer_apellido
                      };
                    }).sort(function (x, y) {
                      return x.nombre.localeCompare(y.nombre);
                    });
                    this.agente = this.agentes.find(function (x) {
                      return x.id == _this3.agente.id;
                    }) || {
                      id: -1,
                      nombre: ''
                    };
                    return _context5.a(2);

                  case 3:
                    ;
                    this.bs.get(this.bs.EMPLEADO_URL, true).then(function (e) {
                      _this3.agentes = e.map(function (x) {
                        return {
                          id: x.id,
                          nombre: x.primer_nombre + ' ' + x.primer_apellido
                        };
                      }).sort(function (x, y) {
                        return x.nombre.localeCompare(y.nombre);
                      });
                      _this3.agente = _this3.agentes.find(function (x) {
                        return x.id == _this3.agente.id;
                      }) || {
                        id: -1,
                        nombre: ''
                      };
                    }); // this.sorteos = await 
                    // this.bs.get<Sorteo[]>(this.bs.SORTEO_URL, true).then(data => {this.sorteos = data.clone(); this.sorteo = this.sorteos.find(x => x.id ==this.sorteo.id) || new Sorteo(); }).catch(async (err: HttpException) => await this.util.handleError(err));;
                    // let emp = await this.bs.getEmpleado();
                    // this.empleado = {...emp};

                    _context5.n = 5;
                    break;

                  case 4:
                    _context5.p = 4;
                    _t2 = _context5.v;
                    ex = _t2;
                    this.util.handleError(ex);

                  case 5:
                    return _context5.a(2);
                }
              }, _callee5, this, [[0, 4]]);
            }));
          }
        }, {
          key: "supervisorChanged",
          value: function supervisorChanged(evt) {}
        }, {
          key: "limpiar",
          value: function limpiar(pos) {
            if (pos == 1) this.turno = null;else if (pos == 2) this.supervisor = {
              id: -1,
              nombre: '',
              agentes: []
            };else if (pos == 3) this.agente = {
              id: -1,
              nombre: ''
            };else if (pos == 5) this.sorteo_tipo = '';else if (pos == 6) this.pais_id = null;
          }
        }, {
          key: "close",
          value: function close() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "aplicarFiltros",
          value: function aplicarFiltros() {
            // console.log({sort: this.sort, supervisor: this.supervisor, turno: this.turno, agente: this.agente, sorteo_tipo: this.sorteo_tipo, pais_id: this.pais_id})
            this.modalCtrl.dismiss({
              sort: this.sort,
              supervisor: this.supervisor,
              turno: this.turno,
              agente: this.agente,
              sorteo_tipo: this.sorteo_tipo,
              pais_id: this.pais_id
            });
          }
        }, {
          key: "clean",
          value: function clean() {
            this.supervisor = {
              id: -1,
              nombre: '',
              agentes: []
            };
          }
        }]);
      }();

      BalanceFiltroPage.ctorParameters = function () {
        return [{
          type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]
        }, {
          type: src_app_util_util__WEBPACK_IMPORTED_MODULE_6__["Util"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      BalanceFiltroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-balance-filtro',
        template: _raw_loader_balance_filtro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_balance_filtro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BalanceFiltroPage);
      /***/
    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "spDm":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function spDm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });
      /* harmony import */


      var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-1457892a.js */
      "W6o/");

      var attachComponent = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee6(delegate, container, component, cssClasses, componentProps) {
          var el;
          return _regenerator().w(function (_context6) {
            while (1) switch (_context6.n) {
              case 0:
                if (!delegate) {
                  _context6.n = 1;
                  break;
                }

                return _context6.a(2, delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 1:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context6.n = 2;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 2:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);
                _context6.n = 3;
                return new Promise(function (resolve) {
                  return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                });

              case 3:
                return _context6.a(2, el);
            }
          }, _callee6);
        }));

        return function attachComponent(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "wZeR":
    /*!*********************************************************!*\
      !*** ./src/app/pages/super-grupo/super-grupo.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function wZeR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBlci1ncnVwby5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map