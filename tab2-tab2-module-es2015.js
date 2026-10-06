(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "EGAO":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list-header {\n  padding-left: 0;\n}\nion-list-header ion-label {\n  font-size: 1.1rem;\n  color: #6c6c6c;\n  font-weight: bold;\n}\nion-button {\n  margin: 20px 0;\n}\n.card-saldo {\n  background-color: #01173b;\n  color: #FFF;\n  height: 128px;\n  max-width: 300px;\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px;\n  text-align: center;\n  font-size: 32px;\n  font-weight: bold;\n}\n.cero-balance {\n  color: #a10606;\n}\n.poco-balance {\n  color: #ffa600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKO0FBQUk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVSO0FBRUE7RUFDSSxjQUFBO0FBQ0o7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFFQTtFQUNJLGNBQUE7QUFDSjtBQUVBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGNvbG9yOiAjNmM2YzZjO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbmlvbi1idXR0b24ge1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuXG4uY2FyZC1zYWxkbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTczYjtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBoZWlnaHQ6IDEyOHB4O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2Vyby1iYWxhbmNlIHtcbiAgICBjb2xvcjogcmdiKDE2MSwgNiwgNik7XG59XG5cbi5wb2NvLWJhbGFuY2Uge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAxNjYsIDApO1xufVxuIl19 */");

/***/ }),

/***/ "JZ9U":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "e9nj");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "EGAO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment.prod */ "cxbk");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/base.service */ "Do2H");
/* harmony import */ var _classes_classes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../classes/classes */ "50N5");










let Tab2Page = class Tab2Page {
    constructor(navCtrl, storage, loadCtrl, oneSignal, baseService) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadCtrl = loadCtrl;
        this.oneSignal = oneSignal;
        this.baseService = baseService;
        this.VERSION = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].APP_VERSION;
        this.empleado = new _classes_classes__WEBPACK_IMPORTED_MODULE_9__["Empleado"]();
    }
    ionViewDidEnter() {
        // throw new Error('Method not implemented.');
        this.baseService.getEmpleado(true)
            .then(d => {
            this.empleado = new _classes_classes__WEBPACK_IMPORTED_MODULE_9__["Empleado"](d);
        });
    }
    logout(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.oneSignal.promptForPushNotificationsWithUserResponse();
            // return;
            yield this.storage.remove('token');
            const loading = yield this.loadCtrl.create({
                message: 'Cerrando sesión...',
                duration: 1500
            });
            yield loading.present();
            yield loading.onDidDismiss();
            this.navCtrl.navigateRoot('/login');
            this.oneSignal.removeExternalUserId;
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"] },
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "TUkU":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");







let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "e9nj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-title class=\"ion-text-center\">\n            Menú\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <!-- <ion-item>\n    <p>Usuario</p>\n    <p slot=\"end\">Test</p>\n  </ion-item> -->\n\n    <ion-list>\n        <ng-container *ngIf=\"empleado.usuario.saldo != null\">\n            <ion-list-header>\n                <ion-label>Saldo para vender</ion-label>\n            </ion-list-header>\n            <div class=\"card-saldo\"\n                [ngClass]=\"{\n                    'poco-balance': empleado.usuario.saldo >= 1 && empleado.usuario.saldo < 100,\n                    'cero-balance': empleado.usuario.saldo <= 0\n                }\"\n            >\n                {{empleado.usuario.saldo | currency: 'C$ ' : 'symbol' : '1.0'}}\n            </div>\n        </ng-container>\n        <ion-list-header>\n            <ion-label>Configuración de la cuenta</ion-label>\n        </ion-list-header>\n\n        <ion-item detail routerLink='/perfil'>\n            <ion-avatar slot=\"start\">\n                <img src=\"assets/img/user.png\" alt=\"\">\n            </ion-avatar>\n            <ion-label>Perfil</ion-label>\n        </ion-item>\n\n        <ion-item detail routerLink='/cambiar-password'>\n            <ion-avatar slot=\"start\">\n                <img src=\"assets/img/password.png\" alt=\"\">\n            </ion-avatar>\n            <ion-label>Cambiar contraseña</ion-label>\n        </ion-item>\n\n\n        <ion-item disabled='true'>\n            <ion-avatar slot=\"start\">\n                <img src=\"assets/img/fingerprint.png\" alt=\"\">\n            </ion-avatar>\n            <ion-label>Huella digital</ion-label>\n            <ion-toggle color=\"primary\"></ion-toggle>\n        </ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-list-header>\n            <ion-label>Acerca de Lucky Games v{{VERSION}}</ion-label>\n        </ion-list-header>\n      <!--<ion-item detail routerLink='/desarrolladores'>\n            <ion-avatar slot=\"start\">\n                <img src=\"assets/img/programming.png\" alt=\"\">\n            </ion-avatar>\n            <ion-label>Créditos</ion-label>\n        </ion-item>/-->\n\n        <ion-item detail routerLink='/terms-conditions'>\n            <ion-avatar slot=\"start\">\n                <img src=\"assets/img/contract.png\" alt=\"\">\n            </ion-avatar>\n            <ion-label>Términos y condiciones</ion-label>\n        </ion-item>\n        <ion-item detail routerLink='/security-policy'>\n            <ion-avatar slot=\"start\">\n                <img src=\"assets/img/security.png\" alt=\"\">\n            </ion-avatar>\n            <ion-label>Politicas de seguridad</ion-label>\n        </ion-item>\n        <ion-item detail routerLink='/tech-support'>\n            <ion-avatar slot=\"start\">\n                <img src=\"assets/img/tech-support.png\" alt=\"\">\n            </ion-avatar>\n            <ion-label>Soporte técnico</ion-label>\n        </ion-item>\n    </ion-list>\n    <ion-button color='danger' style=\"display: block;\" (click)='logout($event)'>Cerrar sesión\n        <ion-icon name=\"log-out\"></ion-icon>\n    </ion-button>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map