(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cambiar-password-cambiar-password-module"],{

/***/ "JDNl":
/*!*******************************************************************!*\
  !*** ./src/app/pages/cambiar-password/cambiar-password.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhbWJpYXItcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJjYW1iaWFyLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xufVxuIl19 */");

/***/ }),

/***/ "Mufl":
/*!*****************************************************************!*\
  !*** ./src/app/pages/cambiar-password/cambiar-password.page.ts ***!
  \*****************************************************************/
/*! exports provided: CambiarPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CambiarPasswordPage", function() { return CambiarPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cambiar_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cambiar-password.page.html */ "o/NG");
/* harmony import */ var _cambiar_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cambiar-password.page.scss */ "JDNl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util/util */ "JQC8");






let CambiarPasswordPage = class CambiarPasswordPage {
    constructor(bs, util) {
        this.bs = bs;
        this.util = util;
        this.antigua_pass = '';
        this.nueva_pass = '';
        this.repetir_pass = '';
    }
    ngOnInit() {
    }
    isValid() {
        return this.antigua_pass.trim() != '' && this.nueva_pass.trim() != '' && this.repetir_pass.trim() != '';
    }
    enviar(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.bs.put(this.bs.PASS_URL, { antigua_pass: this.antigua_pass, nueva_pass: this.nueva_pass, repetir_pass: this.repetir_pass }, true);
                this.antigua_pass = '';
                this.nueva_pass = '';
                this.repetir_pass = '';
                setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.util.presentAlert('Mensaje', 'Contraseña Actualizada.');
                }), 100);
            }
            catch (ex) {
                yield this.util.handleError(ex);
            }
        });
    }
};
CambiarPasswordPage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_5__["Util"] }
];
CambiarPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cambiar-password',
        template: _raw_loader_cambiar_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cambiar_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CambiarPasswordPage);



/***/ }),

/***/ "VX7/":
/*!*******************************************************************!*\
  !*** ./src/app/pages/cambiar-password/cambiar-password.module.ts ***!
  \*******************************************************************/
/*! exports provided: CambiarPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CambiarPasswordPageModule", function() { return CambiarPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cambiar_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cambiar-password-routing.module */ "fNqo");
/* harmony import */ var _cambiar_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cambiar-password.page */ "Mufl");







let CambiarPasswordPageModule = class CambiarPasswordPageModule {
};
CambiarPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cambiar_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["CambiarPasswordPageRoutingModule"]
        ],
        declarations: [_cambiar_password_page__WEBPACK_IMPORTED_MODULE_6__["CambiarPasswordPage"]]
    })
], CambiarPasswordPageModule);



/***/ }),

/***/ "fNqo":
/*!***************************************************************************!*\
  !*** ./src/app/pages/cambiar-password/cambiar-password-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CambiarPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CambiarPasswordPageRoutingModule", function() { return CambiarPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cambiar_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cambiar-password.page */ "Mufl");




const routes = [
    {
        path: '',
        component: _cambiar_password_page__WEBPACK_IMPORTED_MODULE_3__["CambiarPasswordPage"]
    }
];
let CambiarPasswordPageRoutingModule = class CambiarPasswordPageRoutingModule {
};
CambiarPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CambiarPasswordPageRoutingModule);



/***/ }),

/***/ "o/NG":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cambiar-password/cambiar-password.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color='light'>\n      <ion-buttons slot=\"start\">\n          <ion-back-button [text]='\"\"' defaultHref='/tabs/tab2'></ion-back-button>\n      </ion-buttons>\n      <ion-title class=\"center\">Cambiar Contraseña</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n  <ion-content class=\"ion-padding\">\n    <form #form='ngForm' (ngSubmit)='enviar(form)'>\n        <ion-item>\n            <ion-label position='floating'>Contraseña Antigüa</ion-label>\n            <ion-input name='nombre' type='password' [(ngModel)]='antigua_pass'></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position='floating'>Contraseña Nueva</ion-label>\n            <ion-input name='pass' type='password' [(ngModel)]='nueva_pass'></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position='floating'> Confirmar Nueva Contraseña</ion-label>\n          <ion-input name='pass2' type='password' [(ngModel)]='repetir_pass'></ion-input>\n      </ion-item>\n        <ion-button [disabled]='!isValid()' color='primary' style=\"display: block; margin-top: 20px;\" type='submit'>Actualizar\n            <ion-icon name=\"save\"></ion-icon>\n        </ion-button>\n    </form>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=pages-cambiar-password-cambiar-password-module-es2015.js.map