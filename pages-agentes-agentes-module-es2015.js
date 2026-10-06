(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-agentes-agentes-module"],{

/***/ "76Ar":
/*!***********************************************!*\
  !*** ./src/app/pages/agentes/agentes.page.ts ***!
  \***********************************************/
/*! exports provided: AgentesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentesPage", function() { return AgentesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_agentes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./agentes.page.html */ "lEzc");
/* harmony import */ var _agentes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agentes.page.scss */ "wgNQ");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/base.service */ "Do2H");
/* harmony import */ var _classes_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../classes/classes */ "50N5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _agente_agente_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../agente/agente.page */ "2V4y");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/util/util */ "JQC8");









let AgentesPage = class AgentesPage {
    constructor(bs, cdRef, alertCtrl, modalCtrl, navCtrl, util) {
        this.bs = bs;
        this.cdRef = cdRef;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.util = util;
        this.searchTerm = '';
        this.originales = [];
        this.agentes = null;
        this.searching = false;
        this.loaded = false;
        this.isAdmin = false;
        this.empleado = new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["Empleado"]();
        this.refreshTimer = null;
        this.getEmpleados();
        bs.getEmpleado().then(e => {
            this.empleado = new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["Empleado"](e);
            this.isAdmin = this.empleado.usuario.isadmin;
        });
        // Refresca la lista para mantener el punto verde al dia
        this.refreshTimer = setInterval(() => this.getEmpleados(true), 15000);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.refreshTimer) {
            clearInterval(this.refreshTimer);
            this.refreshTimer = null;
        }
    }
    getEmpleados(silent = false) {
        this.bs.get(this.bs.EMPLEADO_URL, true).then(data => {
            const sort = (x, y) => (x.primer_nombre + x.primer_apellido).localeCompare(y.primer_nombre + y.primer_apellido);
            this.originales = data.clone().sort(sort);
            this.search({ target: { value: this.searchTerm } });
            this.cdRef.detectChanges();
        })
            .catch((err) => { if (!silent)
            this.util.handleError(err); });
    }
    getIniciales(agente) {
        return agente.primer_nombre.toUpperCase().substring(0, 1) + agente.primer_apellido.toUpperCase().substring(0, 1);
    }
    search(evt) {
        let term = evt.target.value || '';
        term = term.trim().toLowerCase();
        if (term.trim() == '')
            this.agentes = this.originales.clone();
        else if (term.indexOf("#") >= 0)
            this.agentes = this.originales.filter(c => c.id.toString().indexOf(term.replace("#", "").split(" ").join("")) >= 0);
        else
            this.agentes = this.originales.filter(c => c.usuario.nombre.toLowerCase().indexOf(term) >= 0);
    }
    agenteClicked(agente) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.empleado.usuario.isadmin && this.empleado.empleados.length == 0) {
                return;
            }
            console.log(agente);
            if (this.searching) {
                this.modalCtrl.dismiss({ agente });
            }
            else {
                let modal = yield this.modalCtrl.create({
                    component: _agente_agente_page__WEBPACK_IMPORTED_MODULE_7__["AgentePage"],
                    componentProps: {
                        empleado: new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["Empleado"](agente)
                    }
                });
                yield modal.present();
                let data = (yield modal.onDidDismiss()).data;
                if (data && data.empleado) {
                    let c = new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["Empleado"](data.empleado);
                    let index = this.originales.findIndex(x => x.id == c.id);
                    if (index > -1) {
                        this.originales[index] = c;
                        this.search({ target: { value: this.searchTerm } });
                    }
                }
            }
        });
    }
    close(event) {
        this.modalCtrl.dismiss();
    }
    habilitarEmpleado(agente) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: `Habilitar Agente #${agente.id}`,
                message: `¿Estás seguro que deseas habilitar a <strong>${agente.usuario.nombre}</strong>?
        <br>
        <strong>Nota:</strong> El agente podrá iniciar sesión en el sistema.`,
                buttons: [{
                        role: 'cancel',
                        text: 'No',
                        cssClass: 'danger'
                    }, {
                        role: 'ok',
                        text: 'Si',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            try {
                                yield this.bs.put(this.bs.USUARIO_URL + '/habilitar/' + agente.usuario.id, {}, true);
                                // this.originales.removeBy(c => c.id == agente.id);
                                // let index = this.originales.findIndex(x => x.id == agente.id);
                                // if (index > -1)
                                this.getEmpleados();
                                setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    yield this.util.presentAlert('Mensaje', `Agente habilitado con éxito`);
                                }), 1);
                            }
                            catch (err) {
                                let ex = err;
                                yield this.util.handleError(ex);
                            }
                        })
                    }]
            });
            yield alert.present();
        });
    }
    eliminarEmpleado(agente, temporary = false, evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: `${temporary ? 'Deshabilitar' : 'Eliminar'} Agente #${agente.id}`,
                message: `¿Estás seguro que deseas ${temporary ? 'deshabilitar' : 'eliminar'} a <strong>${agente.usuario.nombre}</strong>?
        <br>
        <strong>Nota:</strong> ${temporary ? 'Esta acción se puede deshacer' : 'Esta acción no se puede deshacer.'}`,
                buttons: [{
                        role: 'cancel',
                        text: 'No',
                        cssClass: 'danger'
                    }, {
                        role: 'ok',
                        text: 'Si',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            try {
                                yield this.bs.delete(this.bs.USUARIO_URL + '/' + agente.usuario.id + '/' + (temporary ? 'true' : 'false'), true);
                                // this.originales.removeBy(c => c.id == agente.id);
                                // this.search({target: {value: this.searchTerm}})
                                this.getEmpleados();
                                setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    yield this.util.presentAlert('Mensaje', `Agente ${temporary ? 'deshabilitado' : 'eliminado'} con éxito`);
                                }), 1);
                            }
                            catch (err) {
                                let ex = err;
                                yield this.util.handleError(ex);
                            }
                        })
                    }]
            });
            yield alert.present();
        });
    }
};
AgentesPage.ctorParameters = () => [
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_8__["Util"] }
];
AgentesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-agentes',
        template: _raw_loader_agentes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agentes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AgentesPage);



/***/ }),

/***/ "HDrb":
/*!*********************************************************!*\
  !*** ./src/app/pages/agentes/agentes-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AgentesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentesPageRoutingModule", function() { return AgentesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agentes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agentes.page */ "76Ar");




const routes = [
    {
        path: '',
        component: _agentes_page__WEBPACK_IMPORTED_MODULE_3__["AgentesPage"]
    }
];
let AgentesPageRoutingModule = class AgentesPageRoutingModule {
};
AgentesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AgentesPageRoutingModule);



/***/ }),

/***/ "YEEE":
/*!*************************************************!*\
  !*** ./src/app/pages/agentes/agentes.module.ts ***!
  \*************************************************/
/*! exports provided: AgentesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentesPageModule", function() { return AgentesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _agentes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agentes-routing.module */ "HDrb");
/* harmony import */ var _agentes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agentes.page */ "76Ar");







let AgentesPageModule = class AgentesPageModule {
};
AgentesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _agentes_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgentesPageRoutingModule"]
        ],
        declarations: [_agentes_page__WEBPACK_IMPORTED_MODULE_6__["AgentesPage"]]
    })
], AgentesPageModule);



/***/ }),

/***/ "lEzc":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agentes/agentes.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color='light'>\n    <ion-buttons slot='start'>\n      <ion-back-button [text]=''></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"center\">Agentes</ion-title>\n    <ion-buttons slot=\"end\" *ngIf='searching'>\n      <ion-button (click)='close($event)'>\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-searchbar (ionInput)='search($event)' [(ngModel)]='searchTerm'></ion-searchbar>\n  <ion-list class=\"list-body\">\n    <ion-item-sliding style=\"position: relative;\" *ngFor='let empleado of agentes'>\n      <ion-item-options side=\"start\" *ngIf='empleado.id > 1'>\n        <ion-item-option *ngIf=\"empleado.usuario.temp_inactivo\" color=\"primary\" (click)='habilitarEmpleado(empleado)'>\n          <ion-icon class=\"icon\" name=\"checkmark-circle-outline\" slot=\"top\"></ion-icon> Habilitar\n        </ion-item-option>\n        <ion-item-option *ngIf=\"!empleado.usuario.temp_inactivo\" color=\"warning\" (click)='eliminarEmpleado(empleado, true, $event)'>\n          <ion-icon class=\"icon\" name=\"close-circle-outline\" slot=\"top\"></ion-icon> Deshabilitar\n        </ion-item-option>\n        <ion-item-option *ngIf=\"isAdmin\" color=\"danger\" (click)='eliminarEmpleado(empleado, false, $event)' >\n          <ion-icon class=\"icon\" name=\"trash\" slot=\"top\"></ion-icon> Eliminar\n        </ion-item-option>\n      </ion-item-options>\n      <ion-item  [ngStyle]=\"{'opacity': empleado.usuario.temp_inactivo ? .5 : 1}\" detail (click)='agenteClicked(empleado)'> <span class=\"avatar-letter\" [ngClass]=\"{'man': empleado.genero == 'M'}\">            {{getIniciales(empleado)}}          </span>\n        <ion-label>\n          <h2>{{empleado.usuario.nombre}}\n            <span class=\"estado\" [class.online]=\"empleado.en_linea\"></span>\n            <span class=\"texto-estado\" *ngIf=\"empleado.en_linea\">en línea</span>\n          </h2>\n          <p><span class=\"id\" style=\"width: 40px; display: inline-block;\">#{{empleado.id}}</span> {{empleado.pais.ext}} {{empleado.celular}}</p>\n        </ion-label>\n\n        \n      </ion-item>\n\n      <h2 *ngIf=\"empleado.usuario.temp_inactivo\" style=\"position: absolute; left: 40%; top: 50%; transform: translate(50%, -100%); color: red;\">INACTIVO</h2>\n\n      </ion-item-sliding>\n  </ion-list>\n</ion-content>\n\n\n\n");

/***/ }),

/***/ "wgNQ":
/*!*************************************************!*\
  !*** ./src/app/pages/agentes/agentes.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-container {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n\np {\n  margin: 0;\n}\n\n.avatar-letter {\n  padding: 14.5px 0;\n  border-radius: 50%;\n  color: white;\n  background: #ddbbc4;\n  margin-right: 10px;\n  font-weight: bold;\n  min-width: 50px;\n  max-width: 50px;\n  font-size: 1rem;\n  text-align: center;\n}\n\n.avatar-letter.man {\n  background: #a3af9a;\n}\n\nion-label h2 {\n  font-weight: 400;\n  font-size: 1.1rem;\n  font-family: \"Poppins\", sans-serif;\n}\n\nion-item-option {\n  text-transform: none;\n}\n\n.icon {\n  font-size: 1.3rem;\n}\n\nspan.id {\n  color: black;\n  font-weight: bold;\n}\n\n.list-body {\n  max-height: calc(100vh - 154px);\n  overflow: auto;\n}\n\n.estado {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #bdbdbd;\n  margin-left: 6px;\n  vertical-align: middle;\n}\n\n.estado.online {\n  background: #2ecc40;\n  box-shadow: 0 0 6px rgba(46, 204, 64, 0.9);\n}\n\n.texto-estado {\n  font-size: 0.75rem;\n  color: #2ecc40;\n  margin-left: 4px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FnZW50ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUNKIiwiZmlsZSI6ImFnZW50ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5hdmF0YXItbGV0dGVyIHtcbiAgICBwYWRkaW5nOiAxNC41cHggMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICNkZGJiYzQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1pbi13aWR0aDogNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmF2YXRhci1sZXR0ZXIubWFuIHtcbiAgICBiYWNrZ3JvdW5kOiAjYTNhZjlhO1xufVxuXG5pb24tbGFiZWwgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG5pb24taXRlbS1vcHRpb24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbnNwYW4uaWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpc3QtYm9keSB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE1NHB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmVzdGFkbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2JkYmRiZDtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5lc3RhZG8ub25saW5lIHtcbiAgICBiYWNrZ3JvdW5kOiAjMmVjYzQwO1xuICAgIGJveC1zaGFkb3c6IDAgMCA2cHggcmdiYSg0NiwgMjA0LCA2NCwgMC45KTtcbn1cblxuLnRleHRvLWVzdGFkbyB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGNvbG9yOiAjMmVjYzQwO1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-agentes-agentes-module-es2015.js.map