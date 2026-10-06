(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tech-support-tech-support-module"],{

/***/ "+mre":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tech-support/tech-support.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color='light'>\n      <ion-buttons slot=\"start\">\n          <ion-back-button [defaultHref]='\"/tab2\"' [text]=''></ion-back-button>\n      </ion-buttons>\n      <ion-title class=\"center\">Soporte técnico</ion-title>\n\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n\n    <form>\n      <ion-item >\n        <ion-label>Motivo</ion-label>\n        <ion-select name='subject' [(ngModel)]='support.motivo' [placeholder]='\"Seleccione una opción\"'>\n          <ion-select-option value='Requerimiento'>Requerimiento</ion-select-option>\n          <ion-select-option value='Reporte de error'>Reporte de error</ion-select-option>\n        </ion-select>\n  \n      </ion-item>\n  \n    <ion-item style=\"margin: 12px 0;\">\n  \n    <ion-label [position]='\"stacked\"'>Mensaje</ion-label>\n      <ion-textarea name='message' [(ngModel)]='support.mensaje' style=\"min-height: 200px\" [placeholder]=\"'Mensaje explicando el motivo...'\" ></ion-textarea>\n    </ion-item>\n    </form>\n\n  <div style=\"display: flex; justify-content: flex-end;\">\n\n  <ion-button (click)='submit()' [disabled]='!support.motivo.trim() || !support.mensaje.trim()' color='light'>Enviar reporte <ion-icon style=\"margin-left: 8px;\" name=\"send-outline\"></ion-icon></ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "/66E":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tech-support/tech-support-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: TechSupportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechSupportPageRoutingModule", function() { return TechSupportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tech_support_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tech-support.page */ "zq9/");




const routes = [
    {
        path: '',
        component: _tech_support_page__WEBPACK_IMPORTED_MODULE_3__["TechSupportPage"]
    }
];
let TechSupportPageRoutingModule = class TechSupportPageRoutingModule {
};
TechSupportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TechSupportPageRoutingModule);



/***/ }),

/***/ "2st0":
/*!***********************************************************!*\
  !*** ./src/app/pages/tech-support/tech-support.module.ts ***!
  \***********************************************************/
/*! exports provided: TechSupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechSupportPageModule", function() { return TechSupportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tech_support_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tech-support-routing.module */ "/66E");
/* harmony import */ var _tech_support_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tech-support.page */ "zq9/");







let TechSupportPageModule = class TechSupportPageModule {
};
TechSupportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _tech_support_routing_module__WEBPACK_IMPORTED_MODULE_5__["TechSupportPageRoutingModule"]
        ],
        declarations: [_tech_support_page__WEBPACK_IMPORTED_MODULE_6__["TechSupportPage"]]
    })
], TechSupportPageModule);



/***/ }),

/***/ "gLR0":
/*!***********************************************************!*\
  !*** ./src/app/pages/tech-support/tech-support.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWNoLXN1cHBvcnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "zq9/":
/*!*********************************************************!*\
  !*** ./src/app/pages/tech-support/tech-support.page.ts ***!
  \*********************************************************/
/*! exports provided: TechSupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechSupportPage", function() { return TechSupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tech_support_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tech-support.page.html */ "+mre");
/* harmony import */ var _tech_support_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tech-support.page.scss */ "gLR0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/util/util */ "JQC8");







let TechSupportPage = class TechSupportPage {
    constructor(bs, loadCtrl, util) {
        this.bs = bs;
        this.loadCtrl = loadCtrl;
        this.util = util;
        this.support = {
            motivo: '',
            mensaje: ''
        };
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const load = yield this.loadCtrl.create({
                message: 'Enviando reporte...'
            });
            yield load.present();
            try {
                let body = { support: JSON.stringify(this.support) };
                let id = (yield this.bs.post(this.bs.SUPPORT_URL, body, true)).id;
                yield load.dismiss();
                yield this.util.presentAlert('Mensaje', `Reporte envíado con éxito, caso ID: #${id}`);
                this.support = {
                    motivo: '',
                    mensaje: ''
                };
            }
            catch (ex) {
                yield load.dismiss();
                yield this.util.presentAlert('Error', ex.message);
            }
        });
    }
    ngOnInit() {
    }
};
TechSupportPage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_6__["Util"] }
];
TechSupportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tech-support',
        template: _raw_loader_tech_support_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tech_support_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TechSupportPage);



/***/ })

}]);
//# sourceMappingURL=pages-tech-support-tech-support-module-es2015.js.map