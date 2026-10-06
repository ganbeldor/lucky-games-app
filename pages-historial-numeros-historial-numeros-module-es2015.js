(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-historial-numeros-historial-numeros-module"],{

/***/ "1zTi":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historial-numeros/historial-numeros.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color='light'>\n      <ion-buttons slot=\"start\">\n          <ion-back-button [text]='\"\"'></ion-back-button>\n      </ion-buttons>\n      <ion-title class='center'>Historial de números</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color='light'>\n   <ion-grid>\n     <ion-row>\n       <ion-col size='6'>\n        <ion-item>\n          <ion-label>\n            Número:\n          </ion-label>\n          <ion-input maxlength='2' (ionInput)='validateNumber($event)' type='text' inputmode='numeric' [(ngModel)]='numero'\n           placeholder='00' (keyup.enter)='buscar()'>\n          \n          </ion-input>\n        </ion-item>\n       </ion-col>\n       <ion-col size='6'>\n        <ion-button [disabled]='!isValidNumber(numero)' (click)=\"buscar()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          Buscar <ion-icon style=\"margin-left: 8px;\" name=\"search-outline\"></ion-icon>\n        </ion-button>\n       </ion-col>\n     </ion-row>\n   </ion-grid>\n</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card *ngFor='let d of data'>\n    <ion-card-header>\n      <div>\n        <ion-label>\n          <strong>Fecha: {{d.fecha | date: 'dd/MM/yyyy' }}</strong>\n        </ion-label>\n        <br>\n\n        <ion-label>\n          <strong>Número: {{d.numero}}</strong>\n        </ion-label>\n      </div>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row class=\"balance-row\">\n        <ion-col size='4'>Vendido</ion-col>\n        <ion-col size='4'><hr></ion-col>\n        <ion-col size='4'>{{d.inversiones | currency: 'C$'}}</ion-col>\n      </ion-row>\n      <ion-row class=\"balance-row\">\n        <ion-col size='4'>Pagado</ion-col>\n        <ion-col size='4'><hr></ion-col>\n        <ion-col size='4'>{{d.ganancias | currency: 'C$'}}</ion-col>\n      </ion-row>\n      <ion-row class=\"balance-row\">\n        <ion-col size='4'>Ganancia</ion-col>\n        <ion-col size='4'><hr></ion-col>\n        <ion-col size='4' [class.danger]='d.inversiones - d.ganancias < 0'>{{d.inversiones- d.ganancias | currency: 'C$'}}</ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "46pr":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/historial-numeros/historial-numeros-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: HistorialNumerosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialNumerosPageRoutingModule", function() { return HistorialNumerosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _historial_numeros_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historial-numeros.page */ "WgFk");




const routes = [
    {
        path: '',
        component: _historial_numeros_page__WEBPACK_IMPORTED_MODULE_3__["HistorialNumerosPage"]
    }
];
let HistorialNumerosPageRoutingModule = class HistorialNumerosPageRoutingModule {
};
HistorialNumerosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistorialNumerosPageRoutingModule);



/***/ }),

/***/ "WgFk":
/*!*******************************************************************!*\
  !*** ./src/app/pages/historial-numeros/historial-numeros.page.ts ***!
  \*******************************************************************/
/*! exports provided: HistorialNumerosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialNumerosPage", function() { return HistorialNumerosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_historial_numeros_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./historial-numeros.page.html */ "1zTi");
/* harmony import */ var _historial_numeros_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./historial-numeros.page.scss */ "hYdY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/util/util */ "JQC8");







let HistorialNumerosPage = class HistorialNumerosPage {
    constructor(bs, util, loadCtrl) {
        this.bs = bs;
        this.util = util;
        this.loadCtrl = loadCtrl;
        this.numero = '';
        this.data = [];
    }
    ngOnInit() {
    }
    isValidNumber(numero) {
        if (!numero)
            numero = '';
        let first = numero.toString().indexOf('-') < 0 && numero.toString().indexOf('.') < 0;
        const n = parseInt(numero.toString().replace(/\D/g, ''), 10);
        return first && !isNaN(n) && n >= 0 && n <= 99;
    }
    buscar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let numero = this.numero;
            if (!numero)
                return;
            if (numero.length == 1)
                numero = '0' + numero;
            console.log(numero);
            const load = yield this.loadCtrl.create({
                message: 'Buscando...'
            });
            yield load.present();
            this.bs.get(this.bs.HISTORIAL_URL + '/' + numero, true)
                .then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                data.map(x => x.numero = numero);
                console.log(data);
                this.data = data;
                yield load.dismiss();
            })).catch((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield load.dismiss();
                this.util.handleError(err);
            }));
        });
    }
    validateNumber(evt) {
        setTimeout(() => {
            this.numero = (evt.target.value || '').replace(/\D/g, '').substring(0, 2);
        }, 50);
    }
};
HistorialNumerosPage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_6__["Util"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
HistorialNumerosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-historial-numeros',
        template: _raw_loader_historial_numeros_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_historial_numeros_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HistorialNumerosPage);



/***/ }),

/***/ "hYdY":
/*!*********************************************************************!*\
  !*** ./src/app/pages/historial-numeros/historial-numeros.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".balance-row {\n  align-items: center;\n}\n.balance-row ion-col {\n  padding-left: 0;\n  padding-right: 0;\n}\n.balance-row ion-col:last-child {\n  text-align: right;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hpc3RvcmlhbC1udW1lcm9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUVSO0FBRFE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBR1oiLCJmaWxlIjoiaGlzdG9yaWFsLW51bWVyb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbGFuY2Utcm93IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "yZmo":
/*!*********************************************************************!*\
  !*** ./src/app/pages/historial-numeros/historial-numeros.module.ts ***!
  \*********************************************************************/
/*! exports provided: HistorialNumerosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialNumerosPageModule", function() { return HistorialNumerosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _historial_numeros_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./historial-numeros-routing.module */ "46pr");
/* harmony import */ var _historial_numeros_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./historial-numeros.page */ "WgFk");







let HistorialNumerosPageModule = class HistorialNumerosPageModule {
};
HistorialNumerosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _historial_numeros_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistorialNumerosPageRoutingModule"]
        ],
        declarations: [_historial_numeros_page__WEBPACK_IMPORTED_MODULE_6__["HistorialNumerosPage"]]
    })
], HistorialNumerosPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-historial-numeros-historial-numeros-module-es2015.js.map