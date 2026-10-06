(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-escanear-boleto-escanear-boleto-module"],{

/***/ "bDCg":
/*!*****************************************************************!*\
  !*** ./src/app/pages/escanear-boleto/escanear-boleto.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide, ion-slides {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzY2FuZWFyLWJvbGV0by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6ImVzY2FuZWFyLWJvbGV0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUsaW9uLXNsaWRlc3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "bW0i":
/*!***************************************************************!*\
  !*** ./src/app/pages/escanear-boleto/escanear-boleto.page.ts ***!
  \***************************************************************/
/*! exports provided: EscanearBoletoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscanearBoletoPage", function() { return EscanearBoletoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_escanear_boleto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./escanear-boleto.page.html */ "c3B5");
/* harmony import */ var _escanear_boleto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./escanear-boleto.page.scss */ "bDCg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/util/util */ "JQC8");
/* harmony import */ var _boleto_boleto_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../boleto/boleto.page */ "9ljF");









let EscanearBoletoPage = class EscanearBoletoPage {
    constructor(barcodeScanner, bs, util, modalCtrl, loadCtrl) {
        this.barcodeScanner = barcodeScanner;
        this.bs = bs;
        this.util = util;
        this.modalCtrl = modalCtrl;
        this.loadCtrl = loadCtrl;
        this.swiperOpts = {
            allowSlidePrev: false,
            allowSlideNext: false
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        console.log('ionViewWillEnter');
    }
    scan() {
        this.barcodeScanner.scan({
            prompt: 'Escanear boleto\n\n\n\n\n'
        }).then((barcodeData) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Barcode data', barcodeData);
            const data = barcodeData.text;
            this.searchBoletoByCode(data);
        })).catch((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!err.message) {
                err = {
                    message: err
                };
            }
            this.util.handleError(err);
        }));
    }
    searchBoletoByCode(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let load = yield this.loadCtrl.create({
                message: 'Buscando boleto...'
            });
            yield load.present();
            try {
                data = data.replace('{B', '');
                let boleto = yield this.bs.get(this.bs.BOLETO_URL + '/code/' + data + '/true', true);
                yield load.dismiss();
                console.log(boleto);
                const modal = yield this.modalCtrl.create({
                    component: _boleto_boleto_page__WEBPACK_IMPORTED_MODULE_8__["BoletoPage"],
                    componentProps: {
                        boleto
                    }
                });
                yield modal.present();
            }
            catch (ex) {
                yield load.dismiss();
                this.util.handleError(ex);
            }
        });
    }
};
EscanearBoletoPage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"] },
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_7__["Util"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
EscanearBoletoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-escanear-boleto',
        template: _raw_loader_escanear_boleto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_escanear_boleto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EscanearBoletoPage);



/***/ }),

/***/ "c3B5":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/escanear-boleto/escanear-boleto.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color='light'>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" [text]='\"\"'></ion-back-button>\n  </ion-buttons>\n    <ion-title class=\"center\">Escánear Boleto</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-slides>\n  <ion-slide>\n    <ion-button expand=\"full\"\n                fill=\"outline\"\n                size=\"large\"\n                shape=\"round\"\n                (click)=\"scan()\">\n                Escánear Código\n\n    </ion-button>\n  </ion-slide>\n</ion-slides>\n</ion-content>\n");

/***/ }),

/***/ "eVpJ":
/*!*****************************************************************!*\
  !*** ./src/app/pages/escanear-boleto/escanear-boleto.module.ts ***!
  \*****************************************************************/
/*! exports provided: EscanearBoletoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscanearBoletoPageModule", function() { return EscanearBoletoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _escanear_boleto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./escanear-boleto-routing.module */ "q7U4");
/* harmony import */ var _escanear_boleto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./escanear-boleto.page */ "bW0i");







let EscanearBoletoPageModule = class EscanearBoletoPageModule {
};
EscanearBoletoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _escanear_boleto_routing_module__WEBPACK_IMPORTED_MODULE_5__["EscanearBoletoPageRoutingModule"]
        ],
        declarations: [_escanear_boleto_page__WEBPACK_IMPORTED_MODULE_6__["EscanearBoletoPage"]]
    })
], EscanearBoletoPageModule);



/***/ }),

/***/ "q7U4":
/*!*************************************************************************!*\
  !*** ./src/app/pages/escanear-boleto/escanear-boleto-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: EscanearBoletoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscanearBoletoPageRoutingModule", function() { return EscanearBoletoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _escanear_boleto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./escanear-boleto.page */ "bW0i");




const routes = [
    {
        path: '',
        component: _escanear_boleto_page__WEBPACK_IMPORTED_MODULE_3__["EscanearBoletoPage"]
    }
];
let EscanearBoletoPageRoutingModule = class EscanearBoletoPageRoutingModule {
};
EscanearBoletoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EscanearBoletoPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-escanear-boleto-escanear-boleto-module-es2015.js.map