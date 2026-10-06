(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-set-ganador-set-ganador-module"],{

/***/ "+q5g":
/*!*******************************************************!*\
  !*** ./src/app/pages/set-ganador/set-ganador.page.ts ***!
  \*******************************************************/
/*! exports provided: SetGanadorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetGanadorPage", function() { return SetGanadorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_set_ganador_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./set-ganador.page.html */ "U1DN");
/* harmony import */ var _set_ganador_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-ganador.page.scss */ "StCw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/util/util */ "JQC8");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let SetGanadorPage = class SetGanadorPage {
    constructor(bs, util, navCtrl, route) {
        this.bs = bs;
        this.util = util;
        this.navCtrl = navCtrl;
        this.route = route;
        this.sorteos = [];
        this.ganadores = {};
        this.sorteo_id = -1;
        this.numero = '';
        this.cargando = false;
        this.guardando = false;
        this.isAdmin = false;
        this.bs.getEmpleado().then(e => {
            this.isAdmin = !!(e && e.usuario && e.usuario.isadmin);
            if (!this.isAdmin)
                this.salir('Solo el administrador puede establecer el número ganador.');
        }).catch(() => this.isAdmin = false);
        this.route.queryParams.subscribe(p => this.cargar(p && p.sorteo_id ? +p.sorteo_id : null));
    }
    ngOnInit() {
    }
    cargar(sorteoId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cargando = true;
            try {
                const sorteos = yield this.bs.get(this.bs.SORTEO_URL + '/true', true);
                this.sorteos = (sorteos || []).sort((a, b) => String(a.hora || '').localeCompare(String(b.hora || '')));
                const activos = yield this.bs.get(this.bs.JUEGO_URL + '/activos', true);
                this.ganadores = {};
                (activos || []).forEach(grupo => (grupo || []).forEach(j => {
                    if (j && j.id != null)
                        this.ganadores[j.id] = j;
                }));
                if (sorteoId && this.sorteos.some(s => s.id == sorteoId))
                    this.sorteo_id = sorteoId;
                else if (this.sorteos.length)
                    this.sorteo_id = this.sorteos[0].id;
            }
            catch (err) {
                yield this.util.handleError(err);
            }
            finally {
                this.cargando = false;
            }
        });
    }
    get sorteo() {
        return this.sorteos.find(s => s.id == this.sorteo_id);
    }
    get ganadorActual() {
        const j = this.sorteo_id > -1 ? this.ganadores[this.sorteo_id] : null;
        return j && j.numero_ganador ? j.numero_ganador : '';
    }
    sorteoChanged() {
        this.numero = '';
    }
    get numeroLimpio() {
        const n = (this.numero || '').replace(/\D/g, '');
        return n.length == 1 ? '0' + n : n;
    }
    isValid() {
        if (!this.sorteo || this.guardando)
            return false;
        const n = parseInt(this.numeroLimpio, 10);
        return this.numeroLimpio.length > 0 && !isNaN(n) && n >= 0 && n <= 99;
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isValid())
                return yield this.util.presentAlert('Mensaje', 'Número no es válido para este tipo de sorteo.');
            this.guardando = true;
            try {
                const r = yield this.bs.put(this.bs.ESTABLECER_GANADOR_URL, {
                    juegos_id: JSON.stringify([this.sorteo_id]),
                    numero_ganador: this.numeroLimpio
                }, true);
                const j = this.ganadores[this.sorteo_id] || { id: this.sorteo_id };
                j.numero_ganador = (r && r.numero_ganador) || this.numeroLimpio;
                j.iscompleted = true;
                this.ganadores[this.sorteo_id] = j;
                this.numero = '';
                yield this.util.presentAlert('Mensaje', 'Se estableció el número ganador con éxito.');
            }
            catch (err) {
                yield this.util.handleError(err);
            }
            finally {
                this.guardando = false;
            }
        });
    }
    salir(mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.util.presentAlert('Mensaje', mensaje);
            this.navCtrl.navigateRoot('/tabs/tab1');
        });
    }
};
SetGanadorPage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_6__["Util"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
SetGanadorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-set-ganador',
        template: _raw_loader_set_ganador_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_set_ganador_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SetGanadorPage);



/***/ }),

/***/ "/isP":
/*!*********************************************************!*\
  !*** ./src/app/pages/set-ganador/set-ganador.module.ts ***!
  \*********************************************************/
/*! exports provided: SetGanadorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetGanadorPageModule", function() { return SetGanadorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _set_ganador_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./set-ganador-routing.module */ "Sw+S");
/* harmony import */ var _set_ganador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./set-ganador.page */ "+q5g");







let SetGanadorPageModule = class SetGanadorPageModule {
};
SetGanadorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _set_ganador_routing_module__WEBPACK_IMPORTED_MODULE_5__["SetGanadorPageRoutingModule"]
        ],
        declarations: [_set_ganador_page__WEBPACK_IMPORTED_MODULE_6__["SetGanadorPage"]]
    })
], SetGanadorPageModule);



/***/ }),

/***/ "StCw":
/*!*********************************************************!*\
  !*** ./src/app/pages/set-ganador/set-ganador.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-container {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n\nion-label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NldC1nYW5hZG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6InNldC1nYW5hZG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "Sw+S":
/*!*****************************************************************!*\
  !*** ./src/app/pages/set-ganador/set-ganador-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SetGanadorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetGanadorPageRoutingModule", function() { return SetGanadorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _set_ganador_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set-ganador.page */ "+q5g");




const routes = [
    {
        path: '',
        component: _set_ganador_page__WEBPACK_IMPORTED_MODULE_3__["SetGanadorPage"]
    }
];
let SetGanadorPageRoutingModule = class SetGanadorPageRoutingModule {
};
SetGanadorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SetGanadorPageRoutingModule);



/***/ }),

/***/ "U1DN":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/set-ganador/set-ganador.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]='\"\"' defaultHref='/tabs/tab1'></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">Establecer ganador</ion-title>\n    </ion-toolbar>\n    <ion-toolbar color='light'>\n        <ion-item>\n            <ion-label>Sorteo:</ion-label>\n            <ion-select placeholder='Seleccione un sorteo' [(ngModel)]='sorteo_id' (ionChange)='sorteoChanged()'\n                [disabled]='cargando || sorteos.length == 0'>\n                <ion-select-option *ngFor='let s of sorteos' [value]='s.id'>\n                    {{s.sorteo_nombre}} - {{s.hora | date: 'hh:mm a'}}\n                </ion-select-option>\n            </ion-select>\n        </ion-item>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div *ngIf='cargando' class=\"ion-text-center ion-padding\">\n        Cargando...\n    </div>\n\n    <ion-card *ngIf='!cargando && sorteo'>\n        <ion-card-header>\n            <ion-card-title>{{sorteo.sorteo_nombre}}</ion-card-title>\n            <ion-card-subtitle>{{sorteo.hora | date: 'EEEE dd/MM/yyyy hh:mm a'}}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-item lines='none'>\n                <ion-label>Número ganador actual:</ion-label>\n                <ion-badge slot=\"end\" [color]=\"ganadorActual ? 'success' : 'medium'\">\n                    {{ganadorActual ? ganadorActual : 'Sin ganador'}}\n                </ion-badge>\n            </ion-item>\n            <form (ngSubmit)='guardar()'>\n                <ion-item>\n                    <ion-label position='floating'>Nuevo número ganador (00 - 99)</ion-label>\n                    <ion-input name='numero' inputmode='numeric' maxlength='2' [(ngModel)]='numero'></ion-input>\n                </ion-item>\n                <div class=\"btn-container\">\n                    <ion-button type='submit' [disabled]='!isValid()'>\n                        {{guardando ? 'Guardando...' : 'Establecer'}}\n                        <ion-icon name=\"trophy\"></ion-icon>\n                    </ion-button>\n                </div>\n            </form>\n        </ion-card-content>\n    </ion-card>\n\n    <div *ngIf='!cargando && sorteos.length == 0' class=\"ion-text-center ion-padding\">\n        No hay sorteos disponibles.\n    </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-set-ganador-set-ganador-module-es2015.js.map