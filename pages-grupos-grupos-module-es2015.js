(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-grupos-grupos-module"],{

/***/ "/SON":
/*!*********************************************!*\
  !*** ./src/app/pages/grupos/grupos.page.ts ***!
  \*********************************************/
/*! exports provided: GruposPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposPage", function() { return GruposPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_grupos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./grupos.page.html */ "lbIa");
/* harmony import */ var _grupos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grupos.page.scss */ "pCSI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/classes */ "50N5");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nuevo_grupo_nuevo_grupo_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nuevo-grupo/nuevo-grupo.page */ "HYJm");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/util/util */ "JQC8");









let GruposPage = class GruposPage {
    constructor(bs, modalCtrl, alertCtrl, loadCtrl, util) {
        this.bs = bs;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.util = util;
        this.searchTerm = '';
        this.grupos = [];
        this.originales = [];
        this.init();
    }
    ngOnInit() {
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.bs.get(this.bs.GRUPO_URL, true).then(d => {
                d.sort((a, b) => a.nombre.trim().localeCompare(b.nombre.trim()));
                this.grupos = d;
                this.originales = d.clone();
            })
                .catch(err => this.util.handleError(err));
            this.isAdmin = (yield this.bs.getEmpleado()).usuario.isadmin;
        });
    }
    search(evt) {
        let termino = evt.target.value.trim().toLocaleLowerCase(); // console.log(termino);
        if (termino.length == 0)
            this.grupos = this.originales.clone();
        else if (termino.indexOf("#") >= 0)
            this.grupos = this.originales.filter((c) => c.id.toString().indexOf(termino.replace("#", "").split(" ").join("")) >= 0);
        else
            this.grupos = this.originales.filter((c) => c.nombre.trim().toLocaleLowerCase().indexOf(termino) > -1);
    }
    eliminarGrupo(grupo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: `Eliminar Grupo #${grupo.id}`,
                message: `¿Estás seguro que deseas eliminar el grupo "<strong>${grupo.nombre}</strong>"?`,
                buttons: [{
                        role: 'cancel',
                        text: 'No',
                        cssClass: 'danger'
                    }, {
                        role: 'ok',
                        text: 'Si',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const loading = yield this.loadCtrl.create({
                                message: 'Eliminando grupo...'
                            });
                            yield loading.present();
                            setTimeout(() => {
                                loading.message = 'Calculando límites de grupos y numerones...';
                            }, 2000);
                            try {
                                yield this.bs.delete(this.bs.GRUPO_URL + '/' + grupo.id, true);
                                this.originales.removeBy(s => s.id == grupo.id);
                                this.search({ target: { value: this.searchTerm } });
                                yield loading.dismiss();
                                setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    yield this.util.presentAlert('Mensaje', 'Grupo eliminado con éxito');
                                }), 100);
                            }
                            catch (err) {
                                yield loading.dismiss();
                                let ex = err;
                                this.util.handleError(ex);
                            }
                        })
                    }]
            });
            yield alert.present();
        });
    }
    grupoClicked(grupo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _nuevo_grupo_nuevo_grupo_page__WEBPACK_IMPORTED_MODULE_7__["NuevoGrupoPage"],
                componentProps: {
                    grupo: new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["Grupo"](grupo)
                }
            });
            yield modal.present();
            let { data } = yield modal.onWillDismiss();
            console.log(data);
            if (data && data.grupo) {
                // grupo = data.grupo;
                // console.log('HERE');
                let index = this.originales.findIndex(x => x.id == grupo.id);
                this.originales[index] = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["Grupo"](data.grupo);
                this.search({ target: { value: this.searchTerm } });
                // this.search({target: {value: this.searchTerm}});
            }
        });
    }
};
GruposPage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_8__["Util"] }
];
GruposPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-grupos',
        template: _raw_loader_grupos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_grupos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GruposPage);



/***/ }),

/***/ "h6yN":
/*!*******************************************************!*\
  !*** ./src/app/pages/grupos/grupos-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: GruposPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposPageRoutingModule", function() { return GruposPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _grupos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grupos.page */ "/SON");




const routes = [
    {
        path: '',
        component: _grupos_page__WEBPACK_IMPORTED_MODULE_3__["GruposPage"]
    }
];
let GruposPageRoutingModule = class GruposPageRoutingModule {
};
GruposPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GruposPageRoutingModule);



/***/ }),

/***/ "lbIa":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/grupos/grupos.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]='\"\"'></ion-back-button>\n        </ion-buttons>\n        <ion-title class='center'>Grupos</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div class=\"top ion-padding\">\n        <ion-searchbar (ionInput)='search($event)' [(ngModel)]='searchTerm'></ion-searchbar>\n        <ion-grid>\n            <ion-row class=\"header\">\n                <ion-col size='2'>ID</ion-col>\n                <ion-col size='5'>Nombre</ion-col>\n                <ion-col size='5'>Sorteos </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <div class=\"ion-padding\">\n        <ion-list class=\"list-body\">\n            <ion-item-sliding *ngFor='let grupo of grupos'>\n                <ion-item-options side=\"start\" *ngIf='isAdmin'>\n                    <!-- <ion-item-option (click)=\"favorite(item)\"><ion-icon class=\"icon\" slot=\"top\" src='assets/svg/edit-solid.svg'></ion-icon> Modificar</ion-item-option> -->\n                    <ion-item-option color=\"danger\" (click)='eliminarGrupo(grupo)'>\n                        <ion-icon class=\"icon\" name=\"trash\" slot=\"top\"></ion-icon> Eliminar</ion-item-option>\n                </ion-item-options>\n                <ion-item detail button (click)='grupoClicked(grupo)'>\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col size='2'> {{grupo.id}} </ion-col>\n                            <ion-col size='5' style=\"margin-left: 5px;\"> {{grupo.nombre}}</ion-col>\n                            <ion-col style=\"margin-left: 15px;\">{{grupo.sorteos.length}}</ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-item>\n            </ion-item-sliding>\n        </ion-list>\n    </div>\n</ion-content>");

/***/ }),

/***/ "pCSI":
/*!***********************************************!*\
  !*** ./src/app/pages/grupos/grupos.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.top {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 99999;\n  padding-bottom: 0;\n}\n\nion-list {\n  padding-top: 0;\n}\n\nion-item {\n  --padding-start: 0;\n}\n\nion-row.header {\n  font-weight: bold;\n}\n\nspan {\n  display: block;\n  color: #858585;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dydXBvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBR0EsY0FBQTtFQUNBLGlCQUFBO0FBREoiLCJmaWxlIjoiZ3J1cG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi50b3Age1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5pb24tbGlzdCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5cbmlvbi1yb3cuaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLy8gcGFkZGluZy10b3A6IDRweDtcbiAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgY29sb3I6IHJnYigxMzMsIDEzMywgMTMzKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "vafi":
/*!***********************************************!*\
  !*** ./src/app/pages/grupos/grupos.module.ts ***!
  \***********************************************/
/*! exports provided: GruposPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposPageModule", function() { return GruposPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _grupos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grupos-routing.module */ "h6yN");
/* harmony import */ var _grupos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grupos.page */ "/SON");







let GruposPageModule = class GruposPageModule {
};
GruposPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _grupos_routing_module__WEBPACK_IMPORTED_MODULE_5__["GruposPageRoutingModule"]
        ],
        declarations: [_grupos_page__WEBPACK_IMPORTED_MODULE_6__["GruposPage"]]
    })
], GruposPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-grupos-grupos-module-es2015.js.map