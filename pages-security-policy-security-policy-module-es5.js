(function () {
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-security-policy-security-policy-module"], {
    /***/
    "04Re":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/security-policy/security-policy.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function Re(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".titulo {\n  font-weight: bold;\n}\n\nul.decimal {\n  list-style-type: decimal;\n}\n\nul li {\n  margin-bottom: 10px;\n  text-align: justify;\n  font-size: 14px;\n}\n\np {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlY3VyaXR5LXBvbGljeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtBQUFKOztBQU9JO0VBQ0ksd0JBQUE7QUFKUjs7QUFPSTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0FBTlI7O0FBU0E7RUFHSSxtQkFBQTtBQVJKIiwiZmlsZSI6InNlY3VyaXR5LXBvbGljeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50aXR1bG97XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbn1cblxuXG51bHtcblxuICAgICYuZGVjaW1hbHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOmRlY2ltYWw7XG4gICAgfVxuXG4gICAgbGl7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxucHtcbiAgICBcbiAgIFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "6WtZ":
    /*!***************************************************************!*\
      !*** ./src/app/pages/security-policy/security-policy.page.ts ***!
      \***************************************************************/

    /*! exports provided: SecurityPolicyPage */

    /***/
    function WtZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SecurityPolicyPage", function () {
        return SecurityPolicyPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_security_policy_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./security-policy.page.html */
      "fvnr");
      /* harmony import */


      var _security_policy_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./security-policy.page.scss */
      "04Re");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SecurityPolicyPage = /*#__PURE__*/function () {
        function SecurityPolicyPage() {
          _classCallCheck(this, SecurityPolicyPage);
        }

        return _createClass(SecurityPolicyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      SecurityPolicyPage.ctorParameters = function () {
        return [];
      };

      SecurityPolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-security-policy',
        template: _raw_loader_security_policy_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_security_policy_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SecurityPolicyPage);
      /***/
    },

    /***/
    "fvnr":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/security-policy/security-policy.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fvnr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=''></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">Políticas de seguridad</ion-title>\n\n\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n\n    <p class=\"titulo\">El presente documento explica las normas establecidas para el uso de la Aplicación Lucky Games, políticas de seguridad para el uso de el:</p>\n\n    <ul class=\"decimal\">\n        <li>El dispositivo móvil deberá de ser usado únicamente por el vendedor autorizado de Lucky Games, esto con el fin de proteger las ventas, reportes y contenido de la misma.</li>\n        <li>Los vendedores de Lucky Games, deberán de estar conectados únicamente a la red privada que se las a otorgado para hacer uso de la misma.</li>\n        <li>Para mantener la seguridad efectiva y controles de políticas adecuadas es esencial ajustar las políticas corporativas con base en los datos obtenidos en tiempo real de todos los usuarios y dispositivos.</li>\n        <li>Extender la protección contra malware en dispositivos móviles.</li>\n        <li>Usar contraseñas y renovarlas de forma periódica.</li>\n    </ul>\n\n    <p>Las normas expuestas deben de ser cumplidas para evitar complicaciones, plagio y peligro alrededor de donde usamos nuestro dispositivo movil. </p>\n    <p>Para mayor informacion puede comunicarse con los desarrolladores de Lucky Games.</p>\n</ion-content>";
      /***/
    },

    /***/
    "lBGF":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/security-policy/security-policy-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: SecurityPolicyPageRoutingModule */

    /***/
    function lBGF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SecurityPolicyPageRoutingModule", function () {
        return SecurityPolicyPageRoutingModule;
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


      var _security_policy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./security-policy.page */
      "6WtZ");

      var routes = [{
        path: '',
        component: _security_policy_page__WEBPACK_IMPORTED_MODULE_3__["SecurityPolicyPage"]
      }];

      var SecurityPolicyPageRoutingModule = /*#__PURE__*/_createClass(function SecurityPolicyPageRoutingModule() {
        _classCallCheck(this, SecurityPolicyPageRoutingModule);
      });

      SecurityPolicyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SecurityPolicyPageRoutingModule);
      /***/
    },

    /***/
    "zMVk":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/security-policy/security-policy.module.ts ***!
      \*****************************************************************/

    /*! exports provided: SecurityPolicyPageModule */

    /***/
    function zMVk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SecurityPolicyPageModule", function () {
        return SecurityPolicyPageModule;
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


      var _security_policy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./security-policy-routing.module */
      "lBGF");
      /* harmony import */


      var _security_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./security-policy.page */
      "6WtZ");

      var SecurityPolicyPageModule = /*#__PURE__*/_createClass(function SecurityPolicyPageModule() {
        _classCallCheck(this, SecurityPolicyPageModule);
      });

      SecurityPolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _security_policy_routing_module__WEBPACK_IMPORTED_MODULE_5__["SecurityPolicyPageRoutingModule"]],
        declarations: [_security_policy_page__WEBPACK_IMPORTED_MODULE_6__["SecurityPolicyPage"]]
      })], SecurityPolicyPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-security-policy-security-policy-module-es5.js.map