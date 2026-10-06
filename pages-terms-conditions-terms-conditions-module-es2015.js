(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-terms-conditions-terms-conditions-module"],{

/***/ "43w0":
/*!***************************************************************************!*\
  !*** ./src/app/pages/terms-conditions/terms-conditions-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: TermsConditionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsPageRoutingModule", function() { return TermsConditionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terms-conditions.page */ "hQDP");




const routes = [
    {
        path: '',
        component: _terms_conditions_page__WEBPACK_IMPORTED_MODULE_3__["TermsConditionsPage"]
    }
];
let TermsConditionsPageRoutingModule = class TermsConditionsPageRoutingModule {
};
TermsConditionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TermsConditionsPageRoutingModule);



/***/ }),

/***/ "OcQV":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms-conditions/terms-conditions.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=''></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">Términos y condiciones</ion-title>\n\n\n    </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content class=\"ion-padding\">\n    <p>\n        El presente documento explica las normas establecidas para el uso de la Aplicación Lucky Games, mediante tal razon el usuario debera de cumplir las reglas y condiciones establecidas a continuacion:\n    </p>\n\n    <ul class=\"number\">\n        <li>Esta aplicación contiene derechos de autor y registro de ella.</li>\n        <li>El usuario debera de comunicar cualquier falla que presente la misma.</li>\n        <li>La aplicación funcionara como una nueva oportunidad de emprender en el negocio local de Loteria.</li>\n        <li>El usuario reconocera la entrada de su información cuando autorice el permiso de acceso.</li>\n        <li>La aplicación es utilizada para fines de servicios, mas no para entretenimiento personal. </li>\n        <li>Los tiempos de respuesta, tramites y demás solicitudes efectuadas por el usuario mediante la aplicación serán procesadas de conformidad con las especificaciones estipuladas anteriormente.</li>\n        <li>El usuario acepta y autoriza que los registros electrónicos de las actividades mencionadas, que realice en la aplicación constituyen plena prueba de los mismos.</li>\n    </ul>\n\n    <p class=\"subtitulo\">Condiciones de uso</p>\n    <ul>\n        <li>El usuario debera de contar con las tecnologías mencionadas para su uso, celular, máquina impresora, acceso a internet. </li>\n        <li>Para acceder a la aplicación el vendedor debe de tener su usuario y contraseña unicamente para él, y elaborada por su persona, debido a la seguridad de la misma.</li>\n        <li>El Usuario se obliga a usar la aplicación y los contenidos encontrados en ella de una manera diligente y correcta.</li>\n    </ul>\n\n    <p>Todo el material informático, gráfico, multimedia y de diseño, así como todos los contenidos, textos y bases de datos puestos a su disposición en esta aplicación están protegidos por derechos de autor.</p>\n    <p>El Usuario acepta expresamente los Términos y Condiciones, siendo condición esencial para la utilización de la aplicación.</p>\n</ion-content>");

/***/ }),

/***/ "gbAl":
/*!*******************************************************************!*\
  !*** ./src/app/pages/terms-conditions/terms-conditions.module.ts ***!
  \*******************************************************************/
/*! exports provided: TermsConditionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsPageModule", function() { return TermsConditionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _terms_conditions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terms-conditions-routing.module */ "43w0");
/* harmony import */ var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms-conditions.page */ "hQDP");







let TermsConditionsPageModule = class TermsConditionsPageModule {
};
TermsConditionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _terms_conditions_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermsConditionsPageRoutingModule"]
        ],
        declarations: [_terms_conditions_page__WEBPACK_IMPORTED_MODULE_6__["TermsConditionsPage"]]
    })
], TermsConditionsPageModule);



/***/ }),

/***/ "hQDP":
/*!*****************************************************************!*\
  !*** ./src/app/pages/terms-conditions/terms-conditions.page.ts ***!
  \*****************************************************************/
/*! exports provided: TermsConditionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsPage", function() { return TermsConditionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_terms_conditions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./terms-conditions.page.html */ "OcQV");
/* harmony import */ var _terms_conditions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms-conditions.page.scss */ "w9MO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TermsConditionsPage = class TermsConditionsPage {
    constructor() { }
    ngOnInit() {
    }
};
TermsConditionsPage.ctorParameters = () => [];
TermsConditionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-terms-conditions',
        template: _raw_loader_terms_conditions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_terms_conditions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TermsConditionsPage);



/***/ }),

/***/ "w9MO":
/*!*******************************************************************!*\
  !*** ./src/app/pages/terms-conditions/terms-conditions.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul.number {\n  list-style-type: decimal;\n}\nul li {\n  margin-bottom: 10px;\n  text-align: justify;\n  font-size: 14px;\n}\n.subtitulo {\n  text-align: center !important;\n  font-weight: bold;\n}\np {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rlcm1zLWNvbmRpdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksd0JBQUE7QUFBUjtBQUdJO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7QUFGUjtBQUtBO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtBQUZKO0FBS0E7RUFDSSxtQkFBQTtBQUZKIiwiZmlsZSI6InRlcm1zLWNvbmRpdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWx7XG4gICAgJi5udW1iZXJ7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbiAgICB9XG5cbiAgICBsaXtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG4uc3VidGl0dWxve1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG5we1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-terms-conditions-terms-conditions-module-es2015.js.map