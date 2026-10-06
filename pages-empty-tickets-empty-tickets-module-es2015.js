(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-empty-tickets-empty-tickets-module"],{

/***/ "KqapP":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empty-tickets/empty-tickets.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button [text]='\"\"' defaultHref='/'></ion-back-button>\n      </ion-buttons>\n      <ion-title class=\"center\">Agentes sin facturación: {{employees.length}}</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)='openExplain($event)'><ion-icon slot='icon-only' name=\"help-circle-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar color='light'>\n    <!-- <div class=\"top\"> -->\n        <!-- <ion-item style=\"padding: 0 8px;\">\n            <ion-label><strong>Fecha:</strong></ion-label>\n            <ion-input class=\"date\" id=\"input-date\" (click)='openCalendar()' [value]=\"date | date: 'dd/MM/yyyy'\" [readonly]='true'></ion-input>\n        </ion-item> -->\n        <div style=\"display: flex; justify-content: flex-end;\" class=\"ion-padding\">\n          {{date | date: 'dd/MM/yyyy'}}\n        </div>\n        <!-- <ion-calendar> </ion-calendar> -->\n        <!-- <ionic-calendar-date-picker (onSelect)=\"dateSelected($event)\"></ionic-calendar-date-picker>\t -->\n        <!-- <ion-calendar [(ngModel)]=\"date\"                (onChange)=\"onChange($event)\"                [type]=\"type\"                [format]=\"'YYYY-MM-DD'\"                [options]='optionsRange'>  </ion-calendar> -->\n        <!-- <ion-calendar></ion-calendar> -->\n    <!-- </div> -->\n</ion-toolbar>\n</ion-header>\n<ion-content>\n  \n  \n  <table style=\"width: 100%;\">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Agente</th>\n        <th>Última<br>Facturación</th>\n        <th>Role</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor='let emp of employees' [ngStyle]=\"{'background': emp.isadmin ? '#13474e' : emp.supervisor ? '#0D6A8D' : (!emp.last_time && !emp.next_time ? '#CD0A0A' : '#8D0D0D')}\">\n        <td>{{emp.empleado_id}}</td>\n        <td>{{emp.empleado_nombre}}<br><span style=\"font-weight: bold; display: block; margin-top: 6px;\">@{{emp.usuario_nombre}}</span></td>\n        <td *ngIf='!emp.last_time'><span style=\"font-weight: bold;\">-</span></td>\n        <td *ngIf='emp.last_time'>\n          {{emp.last_time | date:'dd/MM/yyyy'}}<br><span style=\"font-weight: bold; display: block; margin-top: 6px;\">{{getDaysDiff(emp.last_time)}}</span>\n        </td>\n        <td>\n          {{emp.isadmin ? 'Admin' : (emp.supervisor ? 'Supervisor' + (emp.genero == 'M' ? '' : 'a') : 'Agente')}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ion-content>");

/***/ }),

/***/ "aBoa":
/*!*************************************************************!*\
  !*** ./src/app/pages/empty-tickets/empty-tickets.module.ts ***!
  \*************************************************************/
/*! exports provided: EmptyTicketsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyTicketsPageModule", function() { return EmptyTicketsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _empty_tickets_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./empty-tickets-routing.module */ "rAZT");
/* harmony import */ var _empty_tickets_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empty-tickets.page */ "bAPO");







let EmptyTicketsPageModule = class EmptyTicketsPageModule {
};
EmptyTicketsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _empty_tickets_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmptyTicketsPageRoutingModule"]
        ],
        declarations: [_empty_tickets_page__WEBPACK_IMPORTED_MODULE_6__["EmptyTicketsPage"]]
    })
], EmptyTicketsPageModule);



/***/ }),

/***/ "bAPO":
/*!***********************************************************!*\
  !*** ./src/app/pages/empty-tickets/empty-tickets.page.ts ***!
  \***********************************************************/
/*! exports provided: EmptyTicketsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyTicketsPage", function() { return EmptyTicketsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_empty_tickets_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./empty-tickets.page.html */ "KqapP");
/* harmony import */ var _empty_tickets_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty-tickets.page.scss */ "eVZz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_components_roles_explained_roles_explained_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/roles-explained/roles-explained.page */ "LaoF");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/util/util */ "JQC8");










let EmptyTicketsPage = class EmptyTicketsPage {
    constructor(modalCtrl, popoverCtrl, bs, util, loadCtrl) {
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.bs = bs;
        this.util = util;
        this.loadCtrl = loadCtrl;
        this.date = moment__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY/MM/DD');
        this.employees = [];
        this.today = new Date();
        this.load();
    }
    ngOnInit() {
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.employees = [];
            let load = yield this.loadCtrl.create({
                message: 'Cargando...'
            });
            yield load.present();
            try {
                this.employees = yield this.bs.get(this.bs.EMPLEADO_URL + `/empty-tickets/${this.date.replace('/', '-').replace('/', '-')}`, true);
                console.log(this.employees);
                yield load.dismiss();
                // console.log(data);
            }
            catch (ex) {
                yield load.dismiss();
                this.util.handleError(ex);
            }
        });
    }
    openCalendar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                title: '',
                doneLabel: 'Aceptar',
                closeLabel: 'Cancelar',
                defaultDate: new Date(this.date + ' 00:00:00'),
                defaultScrollTo: new Date(),
                from: new Date('2020/03/22'),
                to: new Date(),
                weekdays: ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SÁ']
            };
            moment__WEBPACK_IMPORTED_MODULE_6___default.a.updateLocale('es', {
                monthsShort: {
                    format: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
                    standalone: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_')
                }
            });
            let z = moment__WEBPACK_IMPORTED_MODULE_6___default.a.weekdays();
            console.log(z);
            // months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
            // monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
            // weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
            // weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
            // weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
            let myCalendar = yield this.modalCtrl.create({
                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModal"],
                componentProps: {
                    options: options,
                }
            });
            let x = myCalendar.parentElement;
            let modal = document.getElementsByTagName('ion-modal')[0];
            console.log(modal);
            // modal.style.transform = 'translate(0, 100%)';
            // modal.style.transition = '.2s all ease';
            // modal.style.animation = 'fadeIn .3s forwards';
            yield myCalendar.present();
            // modal.style.transform = 'translate(0, 0)';
            let data = (yield myCalendar.onDidDismiss()).data;
            // console.log(data);
            console.log(data);
            if (data) {
                this.date = moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date(data.dateObj)).format('YYYY/MM/DD');
                this.load();
                // this.getBoletos();
            }
        });
    }
    getDaysDiff(date) {
        const diff = moment__WEBPACK_IMPORTED_MODULE_6___default()(date).diff(moment__WEBPACK_IMPORTED_MODULE_6___default()(this.date), 'days');
        if (diff == 0)
            console.log(date);
        if (diff == 0)
            return '(Hoy)';
        else if (diff == -1)
            return '(Ayer)';
        else if (diff == 1)
            return '(Mañana)';
        else if (diff < -1)
            return `(Hace ${Math.abs(diff)} días)`;
        else if (diff > 1)
            return `(En ${diff} días)`;
    }
    openExplain(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: src_app_components_roles_explained_roles_explained_page__WEBPACK_IMPORTED_MODULE_7__["RolesExplainedPage"],
                event: evt,
                mode: 'md',
                showBackdrop: true
            });
            yield popover.present();
        });
    }
};
EmptyTicketsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_9__["Util"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
EmptyTicketsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-empty-tickets',
        template: _raw_loader_empty_tickets_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_empty_tickets_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmptyTicketsPage);



/***/ }),

/***/ "eVZz":
/*!*************************************************************!*\
  !*** ./src/app/pages/empty-tickets/empty-tickets.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  text-align: left;\n  padding: 0.5em 0.2em;\n  position: sticky;\n  top: 0;\n  background: #FFF;\n}\nth::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  border-bottom: 1px solid #CCC;\n}\ntbody td {\n  font-weight: 400;\n  padding: 0.5em 0.2em !important;\n  color: #FFF;\n  vertical-align: top;\n  border-bottom: 1px solid #CCC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VtcHR5LXRpY2tldHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNKLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDSSw2QkFBQTtBQUNKO0FBS0k7RUFDSSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBRUosNkJBQUE7QUFISiIsImZpbGUiOiJlbXB0eS10aWNrZXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IC41ZW0gLjJlbTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuXG4gICAgJjo6YWZ0ZXIge1xuY29udGVudDogJyc7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5ib3R0b206IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG4gICAgfVxufVxuXG5cbnRib2R5IHtcbiAgICB0ZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIHBhZGRpbmc6IC41ZW0gLjJlbSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcblxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDO1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "rAZT":
/*!*********************************************************************!*\
  !*** ./src/app/pages/empty-tickets/empty-tickets-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EmptyTicketsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyTicketsPageRoutingModule", function() { return EmptyTicketsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _empty_tickets_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty-tickets.page */ "bAPO");




const routes = [
    {
        path: '',
        component: _empty_tickets_page__WEBPACK_IMPORTED_MODULE_3__["EmptyTicketsPage"]
    }
];
let EmptyTicketsPageRoutingModule = class EmptyTicketsPageRoutingModule {
};
EmptyTicketsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmptyTicketsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-empty-tickets-empty-tickets-module-es2015.js.map