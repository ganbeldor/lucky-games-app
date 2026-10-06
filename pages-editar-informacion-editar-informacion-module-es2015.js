(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-editar-informacion-editar-informacion-module"],{

/***/ "71qn":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/editar-informacion/editar-informacion-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EditarInformacionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarInformacionPageRoutingModule", function() { return EditarInformacionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _editar_informacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editar-informacion.page */ "DmbL");




const routes = [
    {
        path: '',
        component: _editar_informacion_page__WEBPACK_IMPORTED_MODULE_3__["EditarInformacionPage"]
    }
];
let EditarInformacionPageRoutingModule = class EditarInformacionPageRoutingModule {
};
EditarInformacionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditarInformacionPageRoutingModule);



/***/ }),

/***/ "CaCY":
/*!***********************************************************************!*\
  !*** ./src/app/pages/editar-informacion/editar-informacion.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  font-weight: bold;\n  width: 140px;\n}\n\n.btn-container {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VkaXRhci1pbmZvcm1hY2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiZWRpdGFyLWluZm9ybWFjaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgd2lkdGg6IDE0MHB4O1xufVxuXG4uYnRuLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "DmbL":
/*!*********************************************************************!*\
  !*** ./src/app/pages/editar-informacion/editar-informacion.page.ts ***!
  \*********************************************************************/
/*! exports provided: EditarInformacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarInformacionPage", function() { return EditarInformacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_editar_informacion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./editar-informacion.page.html */ "oats");
/* harmony import */ var _editar_informacion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editar-informacion.page.scss */ "CaCY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/classes */ "50N5");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/util/util */ "JQC8");







let EditarInformacionPage = class EditarInformacionPage {
    constructor(bs, util) {
        this.bs = bs;
        this.util = util;
        this.empleado = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["Empleado"]();
        this.guardando = false;
        bs.getEmpleado().then(e => this.empleado = e).catch(err => this.util.handleError(err));
    }
    ngOnInit() {
    }
    normalizarCelular() {
        const digitos = (this.empleado.celular || '').replace(/\D/g, '');
        this.empleado.celular = digitos.length == 8 ? digitos.substring(0, 4) + '-' + digitos.substring(4) : digitos;
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.guardando)
                return;
            const primer_nombre = (this.empleado.primer_nombre || '').trim();
            const primer_apellido = (this.empleado.primer_apellido || '').trim();
            if (!primer_nombre || !primer_apellido)
                return yield this.util.presentAlert('Mensaje', 'El nombre y el apellido no pueden quedar vacíos.');
            this.normalizarCelular();
            const digitos = (this.empleado.celular || '').replace(/\D/g, '');
            if (digitos && digitos.length < 7)
                return yield this.util.presentAlert('Mensaje', 'El número de celular no es válido.');
            this.guardando = true;
            try {
                yield this.bs.put(this.bs.MY_PROFILE_URL, {
                    primer_nombre,
                    segundo_nombre: (this.empleado.segundo_nombre || '').trim(),
                    primer_apellido,
                    segundo_apellido: (this.empleado.segundo_apellido || '').trim(),
                    celular: this.empleado.celular,
                    direccion: (this.empleado.direccion || '').trim()
                }, true);
                this.empleado = yield this.bs.getEmpleado(true);
                yield this.util.presentToast('Perfil actualizado con éxito.');
            }
            catch (err) {
                yield this.util.handleError(err);
            }
            finally {
                this.guardando = false;
            }
        });
    }
};
EditarInformacionPage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_6__["Util"] }
];
EditarInformacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editar-informacion',
        template: _raw_loader_editar_informacion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editar_informacion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditarInformacionPage);



/***/ }),

/***/ "oats":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editar-informacion/editar-informacion.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]='\"\"' defaultHref='/tabs/tab2'></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">Perfil</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n    <form #form='ngForm' (ngSubmit)='guardar()'>\n        <ion-item *ngIf='empleado.id != -1'>\n            <ion-label position=\"stack\">ID:</ion-label>\n            <ion-input readonly='true' name='id' [(ngModel)]=\"empleado.id\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stack\">Primer nombre:</ion-label>\n            <ion-input name='primer_nombre' [(ngModel)]=\"empleado.primer_nombre\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stack\">Segundo nombre:</ion-label>\n            <ion-input name='segundo_nombre' [(ngModel)]=\"empleado.segundo_nombre\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stack\">Primer apellido:</ion-label>\n            <ion-input name='primer_apellido' [(ngModel)]=\"empleado.primer_apellido\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stack\">Segundo apellido:</ion-label>\n            <ion-input name='segundo_apellido' [(ngModel)]=\"empleado.segundo_apellido\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stack\">Usuario:</ion-label>\n            <ion-input readonly='true' name='usuario' [(ngModel)]=\"empleado.usuario.nombre\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stack\">Celular:</ion-label>\n            <ion-input type='tel' name='celular' (ionBlur)='normalizarCelular()' [(ngModel)]=\"empleado.celular\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stack\">Dirección:</ion-label>\n            <ion-input name='direccion' [(ngModel)]='empleado.direccion'></ion-input>\n        </ion-item>\n        <div class=\"btn-container\">\n            <ion-button type='submit' [disabled]='guardando'>\n                {{guardando ? 'Guardando...' : 'Guardar cambios'}}\n                <ion-icon name=\"save\"></ion-icon>\n            </ion-button>\n        </div>\n    </form>\n</ion-content>\n");

/***/ }),

/***/ "tJAp":
/*!***********************************************************************!*\
  !*** ./src/app/pages/editar-informacion/editar-informacion.module.ts ***!
  \***********************************************************************/
/*! exports provided: EditarInformacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarInformacionPageModule", function() { return EditarInformacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _editar_informacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editar-informacion-routing.module */ "71qn");
/* harmony import */ var _editar_informacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editar-informacion.page */ "DmbL");







let EditarInformacionPageModule = class EditarInformacionPageModule {
};
EditarInformacionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editar_informacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditarInformacionPageRoutingModule"]
        ],
        declarations: [_editar_informacion_page__WEBPACK_IMPORTED_MODULE_6__["EditarInformacionPage"]]
    })
], EditarInformacionPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-editar-informacion-editar-informacion-module-es2015.js.map