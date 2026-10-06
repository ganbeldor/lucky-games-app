(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sorteos-sorteos-module"],{

/***/ "0i0l":
/*!*************************************************!*\
  !*** ./src/app/pages/sorteos/sorteos.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.top {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 99999;\n  padding-bottom: 0;\n}\n\nion-list {\n  padding-top: 0;\n}\n\nion-item {\n  --padding-start: 0;\n}\n\nion-row.header {\n  font-weight: bold;\n}\n\n.gray {\n  display: block;\n  margin-top: 6px;\n  color: #858585;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvcnRlb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFHQSxjQUFBO0VBQ0EsaUJBQUE7QUFESiIsImZpbGUiOiJzb3J0ZW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi50b3Age1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5pb24tbGlzdCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5cbmlvbi1yb3cuaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmdyYXkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAvLyBwYWRkaW5nLXRvcDogNHB4O1xuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgICBjb2xvcjogcmdiKDEzMywgMTMzLCAxMzMpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */");

/***/ }),

/***/ "NjNp":
/*!*************************************************!*\
  !*** ./src/app/pages/sorteos/sorteos.module.ts ***!
  \*************************************************/
/*! exports provided: SorteosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorteosPageModule", function() { return SorteosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sorteos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sorteos-routing.module */ "lzYs");
/* harmony import */ var _sorteos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sorteos.page */ "pQKJ");







let SorteosPageModule = class SorteosPageModule {
};
SorteosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sorteos_routing_module__WEBPACK_IMPORTED_MODULE_5__["SorteosPageRoutingModule"]
        ],
        declarations: [_sorteos_page__WEBPACK_IMPORTED_MODULE_6__["SorteosPage"]]
    })
], SorteosPageModule);



/***/ }),

/***/ "aZcE":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sorteos/sorteos.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]='\"\"'></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">Sorteos</ion-title>\n        <ion-buttons slot=\"end\" *ngIf='isAdmin'>\n            <ion-button (click)='nuevoSorteo()'>\n                <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div class=\"top ion-padding\">\n        <ion-searchbar (ionInput)='search($event)' [(ngModel)]='searchTerm'></ion-searchbar>\n        <ion-grid>\n            <ion-row class=\"header\">\n                <ion-col size='2'> ID </ion-col>\n                <ion-col size='5'> Nombre </ion-col>\n                <ion-col size='5'> Hora </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n   <div class=\"ion-padding\">\n    <ion-list class=\"list-body\">\n        <ion-item-sliding *ngFor='let sorteo of sorteos'>\n            <ion-item-options side=\"start\" *ngIf='isAdmin'>\n                <!-- <ion-item-option (click)=\"favorite(item)\"><ion-icon class=\"icon\" slot=\"top\" src='assets/svg/edit-solid.svg'></ion-icon> Modificar</ion-item-option> -->\n                <ion-item-option color=\"primary\" (click)='establecerGanador(sorteo)'>\n                    <ion-icon class=\"icon\" name=\"trophy\" slot=\"top\"></ion-icon> Ganador</ion-item-option>\n                <ion-item-option color=\"danger\" (click)='eliminarSorteo(sorteo)'>\n                    <ion-icon class=\"icon\" name=\"trash\" slot=\"top\"></ion-icon> Eliminar</ion-item-option>\n            </ion-item-options>\n            <ion-item detail button (click)='sorteoClicked(sorteo)'>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size='2'> {{sorteo.id}} </ion-col>\n                        <ion-col size='5' style=\"margin-left: 5px;\"> {{sorteo.nombre}} <span class='gray'>{{sorteo.grupo.nombre}}</span> </ion-col>\n                        <ion-col style=\"margin-left: 15px;\"> {{sorteo.hora | date: 'hh:mm a'}} <span class=\"gray\">{{sorteosDict[sorteo.grupo.sorteo_tipo]}}</span> </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item>\n        </ion-item-sliding>\n    </ion-list>\n   </div>\n</ion-content>");

/***/ }),

/***/ "lzYs":
/*!*********************************************************!*\
  !*** ./src/app/pages/sorteos/sorteos-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SorteosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorteosPageRoutingModule", function() { return SorteosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sorteos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sorteos.page */ "pQKJ");




const routes = [
    {
        path: '',
        component: _sorteos_page__WEBPACK_IMPORTED_MODULE_3__["SorteosPage"]
    }
];
let SorteosPageRoutingModule = class SorteosPageRoutingModule {
};
SorteosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SorteosPageRoutingModule);



/***/ }),

/***/ "pQKJ":
/*!***********************************************!*\
  !*** ./src/app/pages/sorteos/sorteos.page.ts ***!
  \***********************************************/
/*! exports provided: SorteosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorteosPage", function() { return SorteosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sorteos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sorteos.page.html */ "aZcE");
/* harmony import */ var _sorteos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sorteos.page.scss */ "0i0l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/classes */ "50N5");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sorteo_sorteo_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sorteo/sorteo.page */ "/1yw");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/util/util */ "JQC8");









let SorteosPage = class SorteosPage {
    constructor(bs, modalCtrl, alertCtrl, navCtrl, util) {
        this.bs = bs;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.util = util;
        this.sorteosDict = {
            'r': 'Regular',
            'j2': 'Juega 2',
            'j3': 'Juega 3',
            'f': 'Fechas'
        };
        this.searchTerm = '';
        this.sorteos = [];
        this.originales = [];
        this.bs.getEmpleado().then(d => this.isAdmin = d.usuario.isadmin);
        this.bs.get(bs.SORTEO_URL, true)
            .then(d => {
            d.sort((a, b) => a.nombre.trim().localeCompare(b.nombre.trim()));
            this.sorteos = d;
            this.originales = d.clone();
            console.log(this.sorteos);
        }).catch((err) => util.handleError(err));
    }
    ngOnInit() {
    }
    search(evt) {
        let termino = evt.target.value.trim().toLocaleLowerCase(); // console.log(termino);
        if (termino.length == 0)
            this.sorteos = this.originales.clone();
        else if (termino.indexOf("#") >= 0)
            this.sorteos = this.originales.filter((c) => c.id.toString().indexOf(termino.replace("#", "").split(" ").join("")) >= 0);
        else
            this.sorteos = this.originales.filter((c) => c.nombre.trim().toLocaleLowerCase().indexOf(termino) > -1);
    }
    nuevoSorteo() {
        this.navCtrl.navigateForward('/sorteo');
    }
    establecerGanador(sorteo) {
        this.navCtrl.navigateForward('/set-ganador', { queryParams: { sorteo_id: sorteo.id } });
    }
    sorteoClicked(sorteo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _sorteo_sorteo_page__WEBPACK_IMPORTED_MODULE_7__["SorteoPage"],
                componentProps: {
                    sorteo: new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["Sorteo"](sorteo)
                }
            });
            yield modal.present();
            let data = yield (yield modal.onWillDismiss()).data;
            if (data && data.sorteo) {
                let index = this.originales.findIndex(x => x.id == sorteo.id);
                this.originales[index] = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["Sorteo"](data.sorteo);
                this.search({ target: { value: this.searchTerm } });
            }
        });
    }
    eliminarSorteo(sorteo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: `Eliminar Sorteo #${sorteo.id}`,
                message: `¿Estás seguro que deseas eliminar el sorteo "<strong>${sorteo.nombre}</strong>"?`,
                buttons: [{
                        role: 'cancel',
                        text: 'No',
                        cssClass: 'danger'
                    }, {
                        role: 'ok',
                        text: 'Si',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            try {
                                yield this.bs.delete(this.bs.SORTEO_URL + '/' + sorteo.id, true);
                                this.originales.removeBy(s => s.id == sorteo.id);
                                this.search({ target: { value: this.searchTerm } });
                                setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    yield this.util.presentAlert('Mensaje', 'Sorteo eliminado con éxito');
                                }), 100);
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
SorteosPage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_8__["Util"] }
];
SorteosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sorteos',
        template: _raw_loader_sorteos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sorteos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SorteosPage);



/***/ })

}]);
//# sourceMappingURL=pages-sorteos-sorteos-module-es2015.js.map