(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-numeros-disponibles-numeros-disponibles-module"],{

/***/ "/Sgq":
/*!***********************************************************************!*\
  !*** ./src/app/pages/numeros-disponibles/numeros-disponibles.page.ts ***!
  \***********************************************************************/
/*! exports provided: NumerosDisponiblesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumerosDisponiblesPage", function() { return NumerosDisponiblesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_numeros_disponibles_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./numeros-disponibles.page.html */ "qNiW");
/* harmony import */ var _numeros_disponibles_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./numeros-disponibles.page.scss */ "Mp2D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment-timezone */ "f0Wu");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/util/util */ "JQC8");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_9__);










let NumerosDisponiblesPage = class NumerosDisponiblesPage {
    constructor(bs, util, modalCtrl, loadingCtrl) {
        this.bs = bs;
        this.util = util;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.sorteos = [];
        this.results = [];
        this.date = new Date();
        this.sorteo_id = -1;
        this.sorteo = {};
        this.isAdmin = false;
        // bs.post(bs.NUMERO_BOLETO + '/disponibilidad', {})
        this.bs.getEmpleado().then(d => this.isAdmin = d.usuario.isadmin);
        bs.get(bs.SORTEO_URL + '/true', true).then(d => { this.sorteos = d; this.getNext(); }).catch(err => this.util.handleError(err));
    }
    ngOnInit() {
    }
    getNext() {
        let now = '1999/01/01 ' + moment_timezone__WEBPACK_IMPORTED_MODULE_6___default()().tz('America/Managua').format('HH:mm:ss');
        this.sorteos = this.sorteos.sort((x, y) => x.hora > y.hora ? 1 : -1);
        // console.log(this.sorteos[0].hora);
        // console.log(now);
        let s = this.sorteos.find(x => x.hora.toString() > now);
        if (!s)
            s = this.sorteos[0];
        // this.sorteos.forEach(s => {
        //   console.log(s.hora.toString(), '>=', now);
        //   console.log(s.hora.toString() >= now);
        // });
        // console.log(s);
        if (s)
            this.sorteo_id = s.id;
    }
    openCalendar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isAdmin)
                return;
            const options = {
                title: '',
                pickMode: 'single',
                doneLabel: 'Aceptar',
                closeLabel: 'Cancelar',
                defaultDateRange: {
                    from: new Date(this.date),
                    to: new Date(this.date)
                },
                defaultDate: new Date(this.date),
                defaultScrollTo: new Date(),
                from: new Date('01/01/2020'),
                to: new Date(),
                weekdays: ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SÁ']
            };
            moment__WEBPACK_IMPORTED_MODULE_5___default.a.updateLocale('es', {
                monthsShort: {
                    format: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
                    standalone: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_')
                }
            });
            let z = moment__WEBPACK_IMPORTED_MODULE_5___default.a.weekdays();
            console.log(z);
            // months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
            // monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
            // weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
            // weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
            // weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
            let myCalendar = yield this.modalCtrl.create({
                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModal"],
                componentProps: {
                    options: options,
                }
            });
            // let x = myCalendar.parentElement;
            // let modal = document.getElementsByTagName('ion-modal')[0];
            // console.log(modal);
            // modal.style.transform = 'translate(0, 100%)';
            // modal.style.transition = '.2s all ease';
            // modal.style.animation = 'fadeIn .3s forwards';
            yield myCalendar.present();
            // modal.style.transform = 'translate(0, 0)';
            let data = (yield myCalendar.onDidDismiss()).data;
            // console.log(data);
            console.log(data);
            if (data) {
                this.date = new Date(data.dateObj);
                this.loadData();
            }
        });
    }
    sorteoChanged(evt) {
        this.sorteo = this.sorteos.find(x => x.id == evt.detail.value);
        this.results = [];
        this.loadData();
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let load = yield this.loadingCtrl.create({
                message: 'Cargando...'
            });
            yield load.present();
            this.bs.post(this.bs.NUMERO_BOLETO + `/disponibilidad/${moment__WEBPACK_IMPORTED_MODULE_5___default()(this.date).format('YYYY/MM/DD').replace(/\//g, "-")}/${this.sorteo.grupo_id}`, { sorteo: JSON.stringify(this.sorteo), date: moment__WEBPACK_IMPORTED_MODULE_5___default()(this.date).format('YYYY/MM/DD') }, true)
                .then(d => {
                this.results = d;
                load.dismiss();
            })
                .catch((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield load.dismiss();
                yield this.util.handleError(err);
            }));
        });
    }
};
NumerosDisponiblesPage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_7__["Util"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] }
];
NumerosDisponiblesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-numeros-disponibles',
        template: _raw_loader_numeros_disponibles_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_numeros_disponibles_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NumerosDisponiblesPage);



/***/ }),

/***/ "Fhgr":
/*!*************************************************************************!*\
  !*** ./src/app/pages/numeros-disponibles/numeros-disponibles.module.ts ***!
  \*************************************************************************/
/*! exports provided: NumerosDisponiblesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumerosDisponiblesPageModule", function() { return NumerosDisponiblesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _numeros_disponibles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./numeros-disponibles-routing.module */ "w+O2");
/* harmony import */ var _numeros_disponibles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./numeros-disponibles.page */ "/Sgq");







let NumerosDisponiblesPageModule = class NumerosDisponiblesPageModule {
};
NumerosDisponiblesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _numeros_disponibles_routing_module__WEBPACK_IMPORTED_MODULE_5__["NumerosDisponiblesPageRoutingModule"]
        ],
        declarations: [_numeros_disponibles_page__WEBPACK_IMPORTED_MODULE_6__["NumerosDisponiblesPage"]]
    })
], NumerosDisponiblesPageModule);



/***/ }),

/***/ "Mp2D":
/*!*************************************************************************!*\
  !*** ./src/app/pages/numeros-disponibles/numeros-disponibles.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar.top {\n  padding: 0 16px 16px 16px;\n}\n\n.mt-12 {\n  margin-top: 12px;\n}\n\nion-input {\n  text-align: right;\n}\n\nion-grid {\n  padding: 0 20px;\n}\n\nion-row {\n  padding: 6px 16px;\n  border-bottom: 1px solid #00000029;\n}\n\nion-row.numeron {\n  color: red;\n  font-weight: bold;\n}\n\nion-row.top {\n  font-weight: bold;\n  background: white;\n  position: sticky;\n  z-index: 99999;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL251bWVyb3MtZGlzcG9uaWJsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUFJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBRVI7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtBQUNKIiwiZmlsZSI6Im51bWVyb3MtZGlzcG9uaWJsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIudG9wIHtcbiAgICBwYWRkaW5nOiAwIDE2cHggMTZweCAxNnB4O1xufVxuXG4ubXQtMTIge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbmlvbi1yb3cge1xuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwMjk7XG4gICAgJi5udW1lcm9uIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuXG5pb24tcm93LnRvcCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB6LWluZGV4OiA5OTk5OTtcbiAgICB0b3A6IDA7XG59XG5cblxuIl19 */");

/***/ }),

/***/ "qNiW":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/numeros-disponibles/numeros-disponibles.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]='\"\"'></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">Números disponibles</ion-title>\n    </ion-toolbar>\n    <ion-toolbar color='light'>\n        <ion-item>\n            <ion-label>Sorteo:</ion-label>\n            <ion-select placeholder='Seleccione un sorteo' (ionChange)='sorteoChanged($event)' [(ngModel)]='sorteo_id'>\n                <ion-select-option *ngFor='let s of sorteos' [value]='s.id'>{{s.sorteo_nombre}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        \n\n        <div style=\"display: flex; justify-content: flex-end; padding: 0 8px; margin: 10px 0 20px 0;\" (click)='openCalendar()'>\n            <ion-button fill='clear'>{{date | date: \"dd/MM/yyyy\"}} <ion-icon *ngIf='isAdmin' name=\"calendar-outline\"></ion-icon></ion-button>\n          </div>\n     \n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-grid style=\"padding: 0;\">\n        <ion-row class=\"top\">\n            <ion-col size='3'>\n                Número\n            </ion-col>\n            <ion-col>\n                Disponibilidad\n            </ion-col>\n        </ion-row>\n        <div class=\"body\">\n\n            <ion-row *ngFor='let r of results' [ngClass]=\"{'numeron': r.isnumeron}\">\n                <ion-col size='3'>\n                    {{r.numero}}\n                </ion-col>\n                <ion-col size='3'>\n                    {{r.disponible}}\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "w+O2":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/numeros-disponibles/numeros-disponibles-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: NumerosDisponiblesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumerosDisponiblesPageRoutingModule", function() { return NumerosDisponiblesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _numeros_disponibles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./numeros-disponibles.page */ "/Sgq");




const routes = [
    {
        path: '',
        component: _numeros_disponibles_page__WEBPACK_IMPORTED_MODULE_3__["NumerosDisponiblesPage"]
    }
];
let NumerosDisponiblesPageRoutingModule = class NumerosDisponiblesPageRoutingModule {
};
NumerosDisponiblesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NumerosDisponiblesPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-numeros-disponibles-numeros-disponibles-module-es2015.js.map