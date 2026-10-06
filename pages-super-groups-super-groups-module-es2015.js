(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-super-groups-super-groups-module"],{

/***/ "RN1w":
/*!***********************************************************!*\
  !*** ./src/app/pages/super-groups/super-groups.module.ts ***!
  \***********************************************************/
/*! exports provided: SuperGroupsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperGroupsPageModule", function() { return SuperGroupsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _super_groups_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./super-groups-routing.module */ "v/HJ");
/* harmony import */ var _super_groups_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./super-groups.page */ "ar7W");







let SuperGroupsPageModule = class SuperGroupsPageModule {
};
SuperGroupsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _super_groups_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuperGroupsPageRoutingModule"]
        ],
        declarations: [_super_groups_page__WEBPACK_IMPORTED_MODULE_6__["SuperGroupsPage"]]
    })
], SuperGroupsPageModule);



/***/ }),

/***/ "Wui5":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/super-groups/super-groups.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color='light'>\n      <ion-buttons slot=\"start\">\n          <ion-back-button [text]='\"\"'></ion-back-button>\n      </ion-buttons>\n      <ion-title class='center'>Super Grupos</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"top ion-padding\">\n      <ion-searchbar (ionInput)='search($event)' [(ngModel)]='searchTerm'></ion-searchbar>\n      <ion-grid>\n          <ion-row class=\"header\">\n              <ion-col size='2'>ID</ion-col>\n              <ion-col size='5'>Nombre</ion-col>\n              <ion-col size='5'>Grupos</ion-col>\n          </ion-row>\n      </ion-grid>\n  </div>\n\n  <div class=\"\">\n      <ion-list class=\"list-body\">\n          <ion-item-sliding *ngFor='let superGrupo of superGrupos'>\n              <ion-item-options side=\"start\" *ngIf='isAdmin'>\n                  <!-- <ion-item-option (click)=\"favorite(item)\"><ion-icon class=\"icon\" slot=\"top\" src='assets/svg/edit-solid.svg'></ion-icon> Modificar</ion-item-option> -->\n                  <ion-item-option color=\"danger\" (click)='eliminarSuperGrupo(superGrupo)'>\n                      <ion-icon class=\"icon\" name=\"trash\" slot=\"top\"></ion-icon> Eliminar</ion-item-option>\n              </ion-item-options>\n              <ion-item detail button (click)='superGrupoClicked(superGrupo)'>\n                  <ion-grid>\n                      <ion-row>\n                          <ion-col size='2'> {{superGrupo.id}} </ion-col>\n                          <ion-col size='5' style=\"margin-left: 5px;\"> {{superGrupo.nombre}}</ion-col>\n                          <ion-col style=\"margin-left: 15px;\">{{superGrupo.grupos_id.length}}</ion-col>\n                      </ion-row>\n                  </ion-grid>\n              </ion-item>\n          </ion-item-sliding>\n      </ion-list>\n  </div>\n</ion-content>");

/***/ }),

/***/ "Y4Z5":
/*!***********************************************************!*\
  !*** ./src/app/pages/super-groups/super-groups.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBlci1ncm91cHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "ar7W":
/*!*********************************************************!*\
  !*** ./src/app/pages/super-groups/super-groups.page.ts ***!
  \*********************************************************/
/*! exports provided: SuperGroupsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperGroupsPage", function() { return SuperGroupsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_super_groups_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./super-groups.page.html */ "Wui5");
/* harmony import */ var _super_groups_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./super-groups.page.scss */ "Y4Z5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_classes_classes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/classes/classes */ "50N5");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/util/util */ "JQC8");
/* harmony import */ var _super_grupo_super_grupo_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../super-grupo/super-grupo.page */ "iiW8");









let SuperGroupsPage = class SuperGroupsPage {
    constructor(bs, modalCtrl, alertCtrl, loadCtrl, util) {
        this.bs = bs;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.util = util;
        this.searchTerm = '';
        this.superGrupos = [];
        this.originales = [];
        this.init();
    }
    ngOnInit() {
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.bs.get(this.bs.SUPER_GRUPO_URL, true).then(d => {
                this.superGrupos = d;
                this.originales = d.clone();
            })
                .catch(err => this.util.handleError(err));
            this.isAdmin = (yield this.bs.getEmpleado()).usuario.isadmin;
        });
    }
    search(evt) {
        let termino = evt.target.value.trim().toLocaleLowerCase(); // console.log(termino);
        if (termino.length == 0)
            this.superGrupos = this.originales.clone();
        else if (termino.indexOf("#") >= 0)
            this.superGrupos = this.originales.filter((c) => c.id.toString().indexOf(termino.replace("#", "").split(" ").join("")) >= 0);
        else
            this.superGrupos = this.originales.filter((c) => c.nombre.trim().toLocaleLowerCase().indexOf(termino) > -1);
    }
    eliminarSuperGrupo(superGrupo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: `Eliminar Super Grupo #${superGrupo.id}`,
                message: `¿Estás seguro que deseas eliminar el super grupo "<strong>${superGrupo.nombre}</strong>"?`,
                buttons: [{
                        role: 'cancel',
                        text: 'No',
                        cssClass: 'danger'
                    }, {
                        role: 'ok',
                        text: 'Si',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const loading = yield this.loadCtrl.create({
                                message: 'Eliminando super grupo...'
                            });
                            yield loading.present();
                            setTimeout(() => {
                                loading.message = 'Calculando límites de grupos y numerones...';
                            }, 2000);
                            try {
                                yield this.bs.delete(this.bs.SUPER_GRUPO_URL + '/' + superGrupo.id, true);
                                this.originales.removeBy(s => s.id == superGrupo.id);
                                this.search({ target: { value: this.searchTerm } });
                                yield loading.dismiss();
                                setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    yield this.util.presentAlert('Mensaje', 'Super Grupo eliminado con éxito');
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
    superGrupoClicked(superGrupo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _super_grupo_super_grupo_page__WEBPACK_IMPORTED_MODULE_8__["SuperGrupoPage"],
                componentProps: {
                    superGrupo: JSON.parse(JSON.stringify(superGrupo))
                }
            });
            yield modal.present();
            let { data } = yield modal.onWillDismiss();
            console.log(data);
            if (data && data.superGrupo) {
                // grupo = data.grupo;
                // console.log('HERE');
                let index = this.originales.findIndex(x => x.id == superGrupo.id);
                this.originales[index] = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_5__["SuperGrupo"](data.superGrupo);
                this.search({ target: { value: this.searchTerm } });
                // this.search({target: {value: this.searchTerm}});
            }
        });
    }
};
SuperGroupsPage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_7__["Util"] }
];
SuperGroupsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-super-groups',
        template: _raw_loader_super_groups_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_super_groups_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SuperGroupsPage);



/***/ }),

/***/ "v/HJ":
/*!*******************************************************************!*\
  !*** ./src/app/pages/super-groups/super-groups-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SuperGroupsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperGroupsPageRoutingModule", function() { return SuperGroupsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _super_groups_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./super-groups.page */ "ar7W");




const routes = [
    {
        path: '',
        component: _super_groups_page__WEBPACK_IMPORTED_MODULE_3__["SuperGroupsPage"]
    }
];
let SuperGroupsPageRoutingModule = class SuperGroupsPageRoutingModule {
};
SuperGroupsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SuperGroupsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-super-groups-super-groups-module-es2015.js.map