(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-juegos-juegos-module"],{

/***/ "+zq3":
/*!***********************************************!*\
  !*** ./src/app/pages/juegos/juegos.module.ts ***!
  \***********************************************/
/*! exports provided: JuegosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosPageModule", function() { return JuegosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _juegos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./juegos-routing.module */ "AWcS");
/* harmony import */ var _juegos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./juegos.page */ "eN1v");







let JuegosPageModule = class JuegosPageModule {
};
JuegosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _juegos_routing_module__WEBPACK_IMPORTED_MODULE_5__["JuegosPageRoutingModule"],
        ],
        declarations: [_juegos_page__WEBPACK_IMPORTED_MODULE_6__["JuegosPage"]]
    })
], JuegosPageModule);



/***/ }),

/***/ "1xRL":
/*!***********************************************!*\
  !*** ./src/app/pages/juegos/juegos.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  font-weight: bold;\n}\n\nion-list-header {\n  padding: 0;\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 99999;\n}\n\n.body {\n  max-height: calc(100% - 30px);\n  overflow: auto;\n}\n\n.body ion-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.sub {\n  font-size: 14px;\n  font-weight: bold;\n  color: gray;\n  display: block;\n}\n\nion-row.bc {\n  background-image: url('data:image/svg+xml;charset=utf-8,<svg%20xmlns=\"http://www.w3.org/2000/svg\"%20viewBox=\"0%200%2012%2020\"><path%20d=\"M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z\"%20fill=\"%23c8c7cc\"/></svg>');\n  background-repeat: no-repeat;\n  background-position: right 14px center;\n  background-size: 14px 14px;\n  width: 100%;\n}\n\nion-row.bc h3 {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: rgba(240, 65, 65, 0.7);\n  font-weight: bold;\n  font-size: 38px;\n}\n\nion-row.bc:active {\n  opacity: 0.5;\n}\n\n.date {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  transition: 0.3s all ease;\n}\n\n.date:active {\n  background: #CCC;\n}\n\nion-buttons.filter span {\n  padding: 4px 8.16px;\n  border-radius: 50%;\n  display: inline-block;\n  font-size: 12px;\n  position: absolute;\n  left: 30px;\n  font-weight: bold;\n  top: 0;\n  background: #A70B0B;\n}\n\n@media screen and (max-width: 401px) {\n  ion-col {\n    font-size: 14px;\n  }\n  ion-col ion-icon {\n    font-size: 12px;\n  }\n\n  ion-icon.all {\n    font-size: 15px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2p1ZWdvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksNkJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFFSSxhQUFBO0VBR0Esc0JBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSx5TUFBQTtFQUVBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFESjs7QUFHSTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQURSOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQUtBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBRUEseUJBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0FBRko7O0FBT0k7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxNQUFBO0VBQ0EsbUJBQUE7QUFKUjs7QUFRQTtFQUNJO0lBQ0ksZUFBQTtFQUxOO0VBTU07SUFDSSxlQUFBO0VBSlY7O0VBT0U7SUFDSSwwQkFBQTtFQUpOO0FBQ0YiLCJmaWxlIjoianVlZ29zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIFxufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgei1pbmRleDogOTk5OTk7XG59XG5cbi5ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmJvZHkgaW9uLWNvbCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zdWIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLXJvdy5iYyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCw8c3ZnJTIweG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiJTIwdmlld0JveD1cIjAlMjAwJTIwMTIlMjAyMFwiPjxwYXRoJTIwZD1cIk0yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHpcIiUyMGZpbGw9XCIlMjNjOGM3Y2NcIi8+PC9zdmc+Jyk7XG4gICAgLy8gcGFkZGluZy1yaWdodDogMzJweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDE0cHggY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTRweCAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgIGgze1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgY29sb3I6IHJnYmEoJGNvbG9yOiAjZjA0MTQxLCAkYWxwaGE6IC43KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICB9XG59XG5cbmlvbi1yb3cuYmM6YWN0aXZlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5kYXRlIHtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xufVxuXG4uZGF0ZTphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG59XG5cbmlvbi1idXR0b25zLmZpbHRlciB7XG4gICBcbiAgICBzcGFuIHtcbiAgICAgICAgcGFkZGluZzogNHB4IDguMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAzMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQTcwQjBCO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAxcHgpIHtcbiAgICBpb24tY29sIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWljb24uYWxsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "AWcS":
/*!*******************************************************!*\
  !*** ./src/app/pages/juegos/juegos-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: JuegosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosPageRoutingModule", function() { return JuegosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _juegos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./juegos.page */ "eN1v");




const routes = [
    {
        path: '',
        component: _juegos_page__WEBPACK_IMPORTED_MODULE_3__["JuegosPage"]
    }
];
let JuegosPageRoutingModule = class JuegosPageRoutingModule {
};
JuegosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], JuegosPageRoutingModule);



/***/ }),

/***/ "eN1v":
/*!*********************************************!*\
  !*** ./src/app/pages/juegos/juegos.page.ts ***!
  \*********************************************/
/*! exports provided: JuegosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosPage", function() { return JuegosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_juegos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./juegos.page.html */ "zNI/");
/* harmony import */ var _juegos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./juegos.page.scss */ "1xRL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/util/util */ "JQC8");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let JuegosPage = class JuegosPage {
    constructor(bs, alertController, util, navCtrl) {
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
        };
        // getIds = (juegos: Juego[]) => juegos.map(x => x.id).join(', ');
        this.getCantBoletos = (juegos) => juegos.sumBy(x => x.cantidad_boletos);
        this.COSTA_RICA_ID = 2;
        bs.get(bs.JUEGO_URL + "/activos", true)
            .then(juegos => this.juegosGrouped = juegos)
            .catch(err => util.handleError(err))
            .finally(() => this.loaded = true);
    }
    isValidNumber(numero, sorteo_tipo) {
        let first = numero.toString().indexOf('-') < 0 && numero.toString().indexOf('.') < 0;
        const n = parseInt(numero.toString().replace(/\D/g, ''), 10);
        return first && !isNaN(n) && n >= 0 && n <= 99;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const emp = yield this.bs.getEmpleado();
                this.isAdmin = !!(emp && emp.usuario && emp.usuario.isadmin);
            }
            catch (e) {
                this.isAdmin = false;
            }
            if (!this.isAdmin) {
                this.juegosGrouped = [];
                yield this.util.presentAlert('Mensaje', 'Solo el administrador puede establecer el número ganador.');
                this.navCtrl.navigateRoot('/tabs/tab1');
            }
        });
    }
    juegoClicked(juegos) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isAdmin)
                return yield this.util.presentAlert('Mensaje', 'Solo el administrador puede establecer el número ganador.');
            const alert = yield this.alertController.create({
                header: `Establecer número ganador del sorteo de las:`,
                subHeader: moment__WEBPACK_IMPORTED_MODULE_7___default()(juegos[0].fecha).format('MM/DD/YYYY hh:mm:ss A'),
                inputs: [
                    {
                        name: 'numero',
                        type: 'number',
                        placeholder: 'Número ganador'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'danger',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    },
                    {
                        text: 'Establecer',
                        handler: (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            console.log('Confirm Ok');
                            console.log(e);
                            let numero = e.numero;
                            let temp = numero.split('');
                            let n = '';
                            temp.forEach(c => {
                                /*if (!isNaN(c))
                                {
                                 n= n+c;
                                }*/
                                if (!isNaN(c))
                                    n += c;
                            });
                            if (n.length == 0 || !this.isValidNumber(n, juegos[0].sorteo.grupo.sorteo_tipo))
                                return yield this.util.presentAlert('Mensaje', 'Número no es válido para este tipo de sorteo.');
                            if (n.length == 1)
                                n = '0' + n;
                            try {
                                yield this.bs.put(this.bs.ESTABLECER_GANADOR_URL, { juegos_id: JSON.stringify(juegos.map(x => x.id)), numero_ganador: n }, true);
                                // this.juegosGrouped.removeBy(x => x[0].id == juegos[0].id);
                                this.bs.get(this.bs.JUEGO_URL + "/activos", true)
                                    .then(juegos => this.juegosGrouped = juegos)
                                    .catch(err => this.util.handleError(err))
                                    .finally(() => this.loaded = true);
                                setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    yield this.util.presentAlert('Mensaje', 'Se estableció el número ganador con éxito.');
                                }), 150);
                            }
                            catch (error) {
                                yield this.util.handleError(error);
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    isCompleted(juegos) {
        return juegos[0].iscompleted;
    }
    getGanador(juegos) {
        return juegos[0].numero_ganador;
    }
    getSorteoName(sorteo) {
        if (sorteo.pais.id == this.COSTA_RICA_ID && sorteo.grupo.sorteo_tipo == 'j3')
            return '3 Monazos';
        return this.sorteoDict[sorteo.grupo.sorteo_tipo];
    }
};
JuegosPage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_6__["Util"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
JuegosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-juegos',
        template: _raw_loader_juegos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_juegos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], JuegosPage);



/***/ }),

/***/ "zNI/":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/juegos/juegos.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar color='light'>\n    <ion-buttons slot=\"start\">\n        <ion-back-button [text]='\"\"'></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"center\">Juegos Activos</ion-title>\n   \n</ion-toolbar>\n\n  \n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-grid>\n          <ion-row class=\"header top\">\n              <ion-col size='4'>Juego </ion-col>\n              <ion-col size='4' style=\"margin-left: -10px;\">Boletos </ion-col>\n              <ion-col size='4'>Sorteos </ion-col>\n          </ion-row>\n      </ion-grid>\n  </ion-list-header>\n\n  <h2 *ngIf='juegosGrouped.length == 0 && loaded' style=\"color: darkgray; text-align: center;\">NO HAY JUEGOS PENDIENTES</h2>\n  <ion-grid>\n    <ion-item  button *ngFor=\"let juegos of juegosGrouped\" (click)='juegoClicked(juegos)' class=\"ion-no-padding\">\n\n      <ion-row class=\"bc\">\n          <ion-col size='4'><strong>{{juegos[0].sorteo.sorteo_nombre || getSorteoName(juegos[0].sorteo)}}</strong><br><span class=\"sub\">{{juegos[0].fecha  | date: 'dd/MM/yyyy'}}</span> <span class=\"sub\">{{juegos[0].fecha | date: 'hh:mm:ss a'}}</span>\n            <!-- <br> -->\n            <span>{{juegos[0].sorteo.pais.nombre}}</span>\n          </ion-col>\n          <ion-col size='4'> <strong>{{getCantBoletos(juegos)}}</strong> </ion-col>\n          <ion-col> <strong>{{juegos.length}}</strong>\n            <ng-container *ngIf=\"isCompleted(juegos)\">\n              <p style=\"font-weight: bold; color: green; margin: 0; margin-top: 4px\">COMPLETO</p>\n              <p style=\"font-weight: bold; color: green; margin: 0;\">#{{getGanador(juegos)}}</p>\n            </ng-container>\n          </ion-col>\n                     \n      </ion-row>\n\n\n  </ion-item>\n  </ion-grid>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-juegos-juegos-module-es2015.js.map