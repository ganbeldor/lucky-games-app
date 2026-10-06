(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+iV/":
/*!*************************************************************!*\
  !*** ./src/app/pages/set-ganancias/set-ganancias.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sticky {\n  position: --webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\nion-checkbox {\n  margin: 0;\n}\n\nion-item.check {\n  padding-left: 40px;\n  width: 50%;\n}\n\nion-item.no-inner-padding {\n  --padding-start: 0px;\n}\n\nion-toolbar div {\n  padding: 18px 20px 0px 20px;\n  align-items: center;\n}\n\n.inline {\n  display: flex;\n  justify-content: space-between;\n}\n\nion-row.header {\n  font-weight: bold !important;\n  position: sticky;\n  top: -16px;\n  z-index: 9999;\n  padding: 10px 0;\n  background: white;\n}\n\n.no-inner-padding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n\np {\n  margin: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NldC1nYW5hbmNpYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFFQSxnQkFBQTtFQUNBLE1BQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0VBRUEsbUJBQUE7QUFDSjs7QUFFQTtFQUVJLGFBQUE7RUFFQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSiIsImZpbGUiOiJzZXQtZ2FuYW5jaWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGlja3kge1xuICAgIHBvc2l0aW9uOiAtLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xufVxuXG5pb24tY2hlY2tib3gge1xuICAgIG1hcmdpbjogMDtcbn1cblxuaW9uLWl0ZW0uY2hlY2sge1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICB3aWR0aDogNTAlO1xufVxuXG5pb24taXRlbS5uby1pbm5lci1wYWRkaW5nIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuaW9uLXRvb2xiYXIgZGl2IHtcbiAgICBwYWRkaW5nOiAxOHB4IDIwcHggMHB4IDIwcHg7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5saW5lIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5pb24tcm93LmhlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IC0xNnB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ubm8taW5uZXItcGFkZGluZyB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "/1yw":
/*!*********************************************!*\
  !*** ./src/app/pages/sorteo/sorteo.page.ts ***!
  \*********************************************/
/*! exports provided: SorteoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorteoPage", function() { return SorteoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sorteo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sorteo.page.html */ "Hiyg");
/* harmony import */ var _sorteo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sorteo.page.scss */ "fqKC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/classes */ "50N5");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/sub-menu/sub-menu.page */ "YY6p");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var _set_ganancias_set_ganancias_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../set-ganancias/set-ganancias.page */ "/SIb");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/util/util */ "JQC8");
/* harmony import */ var src_app_util_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/util/clipboard */ "GqWa");













let SorteoPage = class SorteoPage {
    constructor(bs, navParams, loadCtrl, popoverCtrl, modalCtrl, navCtrl, util) {
        this.bs = bs;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.util = util;
        this.sorteo = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["Sorteo"]();
        this.model = '00:00';
        this.model1 = '00:00';
        this.paises = [];
        this.empleados = [];
        this.usuarios = [];
        this.grupos = [];
        // console.log(this.sorteo.id);
        this.init();
        let s = navParams.get('sorteo');
        if (s) {
            this.model = moment__WEBPACK_IMPORTED_MODULE_10___default()(s.hora).format('HH:mm');
            this.model1 = moment__WEBPACK_IMPORTED_MODULE_10___default()(s.hora_minimo).format('HH:mm');
        }
        bs.get(bs.PAIS_URL, true).then(data => {
            this.paises = data;
            if (this.sorteo.id > -1)
                this.sorteo.pais = this.paises.find(x => x.id == this.sorteo.pais.id);
        })
            .catch((err) => util.handleError(err));
        bs.get(bs.GRUPO_URL, true).then(d => {
            this.grupos = d;
            if (this.sorteo.id > -1)
                this.sorteo.grupo = this.grupos.find(x => x.id == this.sorteo.grupo.id) || this.sorteo.grupo;
        })
            .catch((err) => util.handleError(err));
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isAdmin = (yield this.bs.getEmpleado()).usuario.isadmin;
            console.log(this.isAdmin);
            if (this.isAdmin)
                this.loadEmpleados();
        });
    }
    loadEmpleados() {
        this.bs.get(this.bs.EMPLEADO_URL + '/true', true).then(d => {
            this.empleados = d;
            this.empleados.sort((x, y) => x.usuario.nombre.localeCompare(y.usuario.nombre));
            // console.log(this.empleados);
            let userList = this.empleados.map(x => x.usuario.nombre);
            // console.log(this.sorteo.empleados.findIndex(x => x.usuario.nombre = 'eperez') > -1);
            userList.forEach(x => {
                this.usuarios.push({ nombre: x, seleccionado: this.sorteo.empleados.findIndex(e => e.usuario.nombre == x) > -1 });
            });
        }).catch(err => this.util.handleError(err));
    }
    ngOnInit() {
        console.log('sorteo', this.sorteo);
    }
    paisChanged(evt) {
        this.sorteo.pais = evt.detail.value;
    }
    showMenu(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let establecerGananciasClicked = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            let copyClicked = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            let pasteClicked = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            let options = [{
                    name: 'Establecer Ganancias',
                    icon: 'cash-outline',
                    event: establecerGananciasClicked,
                    type: 'button'
                },
                {
                    type: 'divider'
                },
                {
                    name: 'Copiar Sorteo',
                    icon: 'copy-outline',
                    event: copyClicked,
                    type: 'button',
                    disabled: this.sorteo.id == -1
                },
                {
                    name: 'Pegar Sorteo',
                    icon: 'clipboard-outline',
                    event: pasteClicked,
                    type: 'button',
                    disabled: src_app_util_clipboard__WEBPACK_IMPORTED_MODULE_12__["Clipboard"].SORTEO == null
                }];
            establecerGananciasClicked.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let modal = yield this.modalCtrl.create({
                    component: _set_ganancias_set_ganancias_page__WEBPACK_IMPORTED_MODULE_9__["SetGananciasPage"],
                    componentProps: {
                        inversiones_ganancias: this.sorteo.inversiones_ganancias.clone()
                    }
                });
                yield modal.present();
                let data = (yield modal.onDidDismiss()).data;
                if (data && data.inversiones_ganancias) {
                    this.sorteo.inversiones_ganancias = data.inversiones_ganancias;
                }
            }));
            copyClicked.subscribe(() => {
                let s = JSON.clone(this.sorteo);
                s.id = -1;
                src_app_util_clipboard__WEBPACK_IMPORTED_MODULE_12__["Clipboard"].SORTEO = s;
                this.util.presentToast('Sorteo copiado.');
            });
            pasteClicked.subscribe(() => {
                this.sorteo = src_app_util_clipboard__WEBPACK_IMPORTED_MODULE_12__["Clipboard"].SORTEO;
                this.sorteo.pais = this.paises.find(x => x.id == this.sorteo.pais.id);
                this.sorteo.grupo = this.grupos.find(x => x.id == this.sorteo.grupo.id);
                this.model = moment__WEBPACK_IMPORTED_MODULE_10___default()(this.sorteo.hora).format('HH:mm');
                this.model1 = moment__WEBPACK_IMPORTED_MODULE_10___default()(this.sorteo.hora_minimo).format('HH:mm');
                console.log(this.model1);
                let userList = this.empleados.map(x => x.usuario.nombre);
                // console.log(this.sorteo.empleados.findIndex(x => x.usuario.nombre = 'eperez') > -1);
                userList.forEach(x => {
                    this.usuarios.push({ nombre: x, seleccionado: this.sorteo.empleados.findIndex(e => e.usuario.nombre == x) > -1 });
                });
            });
            let popover = yield this.popoverCtrl.create({
                component: _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_7__["SubMenuPage"],
                event: evt,
                cssClass: 'sub-menu',
                showBackdrop: true,
                componentProps: {
                    options
                }
            });
            yield popover.present();
            // await popover.dismiss();
        });
    }
    timeChanged(evt) {
        console.log('CHANGED');
        if (evt.detail.value.trim() == '')
            return;
        this.sorteo.hora = new Date('1999/01/01 ' + evt.detail.value + ':00');
        // alert(this.sorteo.hora);  
    }
    timeChanged1(evt) {
        console.log('CHANGED 1');
        if (evt.detail.value.trim() == '')
            return;
        this.sorteo.hora_minimo = new Date('1999/01/01 ' + evt.detail.value + ':00');
        // alert(this.sorteo.hora);  
    }
    isValid() {
        // console.log(this.sorteo.grupo.id != -1, this.sorteo.pais.id != -1, new Date(this.sorteo.hora_minimo) < new Date(this.sorteo.hora)
        //   , !isNaN(this.sorteo.ganancia), this.sorteo.ganancia > 0, this.sorteo.ganancia?.toString().indexOf('.') < 0, (this.sorteo.lunes || this.sorteo.martes || this.sorteo.miercoles || this.sorteo.jueves || this.sorteo.viernes
        //       || this.sorteo.sabado || this.sorteo.domingo));
        return this.sorteo.pais.id != -1 && new Date(this.sorteo.hora_minimo) < new Date(this.sorteo.hora)
            && !isNaN(this.sorteo.ganancia) && this.sorteo.ganancia > 0 && this.sorteo.ganancia.toString().indexOf('.') < 0 && (this.sorteo.lunes || this.sorteo.martes || this.sorteo.miercoles || this.sorteo.jueves || this.sorteo.viernes
            || this.sorteo.sabado || this.sorteo.domingo);
    }
    close() {
        this.modalCtrl.dismiss();
    }
    submit(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadCtrl.create({
                message: 'Guardando...'
            });
            yield loading.present();
            let users = this.usuarios.filter(x => x.seleccionado);
            this.sorteo.empleados = this.empleados.filter(x => users.findIndex(y => y.nombre == x.usuario.nombre) > -1);
            // console.log(emps);
            // console.log(emp);
            // if (true)
            //   return;
            // let body = new BodyForm();
            // body.append('sorteo', JSON.stringify(this.sorteo));
            let body = {
                'sorteo': JSON.stringify(this.sorteo)
            };
            try {
                let s = yield this.bs.post(this.bs.SORTEO_URL, body, true);
                yield loading.dismiss();
                let msg = this.sorteo.id == -1 ? 'creado con id #' + s.id : 'actualizado';
                yield this.util.presentAlert('Mensaje', 'Sorteo ' + msg + ' con éxito.');
                if (this.sorteo.id == -1)
                    this.navCtrl.navigateRoot('/sorteos');
                else
                    this.modalCtrl.dismiss({ sorteo: this.sorteo });
            }
            catch (err) {
                yield loading.dismiss();
                let ex = err;
                // alert('Error: ' + ex.message);
                yield this.util.handleError(ex);
            }
        });
    }
    grupoChanged(evt) {
        this.sorteo.grupo = evt.detail.value;
    }
};
SorteoPage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_11__["Util"] }
];
SorteoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sorteo',
        template: _raw_loader_sorteo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sorteo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SorteoPage);



/***/ }),

/***/ "/7H8":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/shared/vender-por-rango/vender-por-rango-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: VenderPorRangoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenderPorRangoPageRoutingModule", function() { return VenderPorRangoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _vender_por_rango_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vender-por-rango.page */ "Oxgz");




const routes = [
    {
        path: '',
        component: _vender_por_rango_page__WEBPACK_IMPORTED_MODULE_3__["VenderPorRangoPage"]
    }
];
let VenderPorRangoPageRoutingModule = class VenderPorRangoPageRoutingModule {
};
VenderPorRangoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VenderPorRangoPageRoutingModule);



/***/ }),

/***/ "/SIb":
/*!***********************************************************!*\
  !*** ./src/app/pages/set-ganancias/set-ganancias.page.ts ***!
  \***********************************************************/
/*! exports provided: SetGananciasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetGananciasPage", function() { return SetGananciasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_set_ganancias_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./set-ganancias.page.html */ "J4PS");
/* harmony import */ var _set_ganancias_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-ganancias.page.scss */ "+iV/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/classes */ "50N5");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let SetGananciasPage = class SetGananciasPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.inversiones_ganancias = [];
    }
    ngOnInit() {
        this.inversiones_ganancias.sort((x, y) => x.inversion > y.inversion ? 1 : -1);
    }
    save() {
        this.modalCtrl.dismiss({ inversiones_ganancias: this.inversiones_ganancias });
    }
    close() {
        this.modalCtrl.dismiss();
    }
    getText() {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.cantidad) && this.inversiones_ganancias.findIndex(x => x.inversion == this.cantidad) > -1)
            return 'Sustituir';
        return 'Agregar';
    }
    addGanancia(evt) {
        let ig = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["InversionGanancia"]();
        ig.ganancia = this.ganancia;
        ig.tipo = this.tipo;
        ig.inversion = this.cantidad;
        let index = this.inversiones_ganancias.findIndex(x => x.inversion == ig.inversion);
        if (index == -1)
            this.inversiones_ganancias.push(ig);
        else
            this.inversiones_ganancias[index] = ig;
        this.ganancia = null;
        this.cantidad = null;
        this.inversiones_ganancias.sort((x, y) => x.inversion > y.inversion ? 1 : -1);
    }
    isValid() {
        if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.cantidad) || Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.ganancia) || Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.tipo))
            return false;
        if (this.tipo == 'Fija')
            return this.cantidad > 0 && this.ganancia > 0 && this.ganancia > this.cantidad && this.cantidad.toString().indexOf('.') == -1 && this.ganancia.toString().indexOf('.') == -1;
        return this.cantidad > 0 && this.ganancia > 0 && this.cantidad.toString().indexOf('.') == -1 && this.ganancia.toString().indexOf('.') == -1;
    }
};
SetGananciasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
SetGananciasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-set-ganancias',
        template: _raw_loader_set_ganancias_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_set_ganancias_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SetGananciasPage);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/near/lucky-games-app/src/main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "17jk":
/*!*******************************************************************!*\
  !*** ./src/app/pages/reporte-completo/reporte-completo.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.top {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 99999;\n  padding-bottom: 0 !important;\n}\n\n.header {\n  font-weight: bold;\n  padding: 10px 0;\n  border-bottom: 1px solid #000000;\n}\n\n.footer {\n  font-weight: bold;\n  padding: 10px 0;\n  z-index: 99999;\n  background: white;\n  position: sticky;\n  bottom: 0;\n  border-top: 1px solid #000000;\n}\n\nion-grid {\n  padding-top: 0;\n}\n\np {\n  margin: 0;\n}\n\n.cantidad {\n  font-weight: bold;\n}\n\n.row {\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);\n}\n\n.row:last-child {\n  border-bottom: none !important;\n}\n\ndiv.receipt-container {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n}\n\ndiv.receipt-container.preview {\n  width: calc(100% + 32px);\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 2px;\n  left: -16px;\n  z-index: 999999;\n  height: 100% !important;\n  overflow: auto;\n}\n\ndiv.receipt-container.preview div.receipt {\n  margin: 0;\n  width: 686px;\n  min-width: 686px;\n  max-width: 686px;\n  transform: translateX(-50%) scale(0.5, 0.5);\n  position: absolute;\n  left: 50%;\n  transform-origin: top;\n  box-shadow: 0 3px 6px #00000029;\n}\n\ndiv.receipt {\n  display: block;\n  margin: 20px auto;\n  width: 686px;\n  min-width: 686px;\n  max-width: 686px;\n  background: white;\n  padding: 60px 20px;\n}\n\ndiv.receipt p {\n  color: black;\n  font-size: 32px !important;\n  font-family: \"Open Sans\", sans-serif;\n}\n\ndiv.receipt p.center {\n  text-align: center;\n}\n\ndiv.receipt img {\n  margin-top: 40px !important;\n}\n\nion-item.row {\n  margin: 0 16px;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlcG9ydGUtY29tcGxldG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQVNBO0VBQ0ksU0FBQTtBQU5KOztBQVNBO0VBQ0ksaUJBQUE7QUFOSjs7QUFVQTtFQUNJLDZDQUFBO0FBUEo7O0FBUUk7RUFDSSw4QkFBQTtBQU5SOztBQVdBO0VBQ0ksUUFBQTtFQUFVLFNBQUE7RUFBVyxnQkFBQTtBQU56Qjs7QUFRSTtFQUNJLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQU5SOztBQU9RO0VBQ0ksU0FBQTtFQVFBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFHQSxxQkFBQTtFQUNBLCtCQUFBO0FBZFo7O0FBbUJBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBaEJKOztBQW1CQTtFQUNJLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0FBaEJKOztBQW1CQTtFQUNJLGtCQUFBO0FBaEJKOztBQW1CQTtFQUNJLDJCQUFBO0FBaEJKOztBQW1CQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBaEJKIiwiZmlsZSI6InJlcG9ydGUtY29tcGxldG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnRvcCB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgei1pbmRleDogOTk5OTk7XG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xufVxuXG4uZm9vdGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDAyOTtcbiAgICB6LWluZGV4OiA5OTk5OTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxuaW9uLWdyaWQge1xuICAgIHBhZGRpbmctdG9wOiAwO1xufVxuXG4vLyBpb24tcm93IHtcbi8vICAgICAmOm5vdCguaGVhZGVyKSB7XG4vLyAgICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuLy8gICAgIH1cbi8vIH1cblxucCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY2FudGlkYWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vIGNvbG9yOiAjM2EwODA4O1xufVxuXG4ucm93IHtcbiAgICBib3JkZXItYm90dG9tOiAuNXB4IHNvbGlkIHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IC4yKTtcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5cbmRpdi5yZWNlaXB0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDA7IGhlaWdodDogMDsgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XG4gICAgJi5wcmV2aWV3IHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAuNSk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIGxlZnQ6IC0xNnB4O1xuICAgICAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgZGl2LnJlY2VpcHQge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiBzY2FsZSguNTUpIHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAvLyBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIC8vIGxlZnQ6IDE2JTtcbiAgICAgICAgICAgIC8vIHRvcDogMTBweDtcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgICAgICAgICB3aWR0aDogNjg2cHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDY4NnB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2ODZweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLjUsIDAuNSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAvLyB0b3A6IDIwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAjMDAwMDAwMjk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmRpdi5yZWNlaXB0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICB3aWR0aDogNjg2cHg7XG4gICAgbWluLXdpZHRoOiA2ODZweDtcbiAgICBtYXgtd2lkdGg6IDY4NnB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDYwcHggMjBweDtcbn1cblxuZGl2LnJlY2VpcHQgcCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMzJweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuZGl2LnJlY2VpcHQgcC5jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZGl2LnJlY2VpcHQgaW1nIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtLnJvdyB7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG59XG4iXX0= */");

/***/ }),

/***/ "1TPB":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slide-button/slide-button.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height: 48px;\">\n    <div class=\"payment-content\" id=\"container\">\n        <div id=\"item\" class=\"circle-dollar\">\n            $\n\n            <ion-icon name=\"sync-outline\"></ion-icon>\n        </div>\n        <div id=\"fill\" class=\"fill\"></div>\n        <h4 class=\"text\">Desliza a la derecha para realizar la venta.</h4>\n        <div id=\"end\" class=\"end\"></div>\n    </div>\n</div>");

/***/ }),

/***/ "28O3":
/*!**************************************************************************!*\
  !*** ./src/app/pages/shared/vender-por-rango/vender-por-rango.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.btn-container {\n  display: flex;\n  justify-content: flex-end;\n}\n\nion-label {\n  font-size: 20px !important;\n  font-weight: bold;\n}\n\nion-radio-group ion-label {\n  font-size: 14px !important;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3ZlbmRlci1wb3ItcmFuZ28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUVBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoidmVuZGVyLXBvci1yYW5nby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuYnRuLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLXJhZGlvLWdyb3VwIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "2Dv+":
/*!*************************************************************!*\
  !*** ./src/app/pages/ventas-filtro/ventas-filtro.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.btn-container {\n  display: flex;\n  justify-content: flex-end;\n  margin: 20px 0;\n}\n\nion-button.eliminar {\n  font-size: 11px !important;\n}\n\nion-button.eliminar ion-icon {\n  margin-left: 6px;\n  font-size: 12px !important;\n}\n\nion-button.submit {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZlbnRhcy1maWx0cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUdBO0VBQ0ksMEJBQUE7QUFBSjs7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7QUFDUjs7QUFHQTtFQUNJLGNBQUE7QUFBSiIsImZpbGUiOiJ2ZW50YXMtZmlsdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5idG4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgXG59XG5cbmlvbi1idXR0b24uZWxpbWluYXIge1xuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5pb24tYnV0dG9uLnN1Ym1pdCB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59XG4iXX0= */");

/***/ }),

/***/ "2V4y":
/*!*********************************************!*\
  !*** ./src/app/pages/agente/agente.page.ts ***!
  \*********************************************/
/*! exports provided: AgentePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentePage", function() { return AgentePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_agente_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./agente.page.html */ "vQ0Y");
/* harmony import */ var _agente_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agente.page.scss */ "K0AK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/classes */ "50N5");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/util/util */ "JQC8");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/sub-menu/sub-menu.page */ "YY6p");











let AgentePage = class AgentePage {
    constructor(bs, storage, navCtrl, modalCtrl, util, popoverCtrl, alertController, loadCtrl, navParams) {
        this.bs = bs;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.popoverCtrl = popoverCtrl;
        this.alertController = alertController;
        this.loadCtrl = loadCtrl;
        this.navParams = navParams;
        this.empleado = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["Empleado"]();
        this.usuarios = [];
        this.paises = [];
        this.empleados = [];
        this.isAdmin = false;
        this.me = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["Empleado"]();
        this.forzar_saldo = false;
        this.tiemposVentas = [
            {
                value: 1,
                label: '1 Semana',
            },
            {
                value: 2,
                label: '2 Semana'
            },
            {
                value: 3,
                label: '1 Mes'
            },
            {
                value: 0,
                label: 'Siempre'
            }
        ];
        this.empleado = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["Empleado"](this.navParams.get('empleado'));
        this.forzar_saldo = this.empleado.usuario.saldo != null;
        this.bs.getEmpleado().then(d => {
            this.me = d;
        });
        bs.get(bs.PAIS_URL, true).then(data => {
            this.paises = data.clone();
            if (this.empleado.id > -1)
                this.pais = this.paises.find(x => x.id == this.empleado.pais.id);
        })
            .catch((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return this.util.handleError(err); }));
    }
    cambiarPassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: `Cambiar contraseña de:`,
                subHeader: `${this.empleado.primer_nombre} ${this.empleado.primer_apellido} (${this.empleado.usuario.nombre})`,
                inputs: [
                    {
                        name: 'password',
                        type: 'text',
                        placeholder: 'Contraseña'
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
                            let password = e.password.trim();
                            if (password.length == 0)
                                return yield this.util.presentAlert('Por favor introduzca una contraseña', 'La contraseña no puede estar vacía');
                            this.bs.put(this.bs.PASS_URL + '/' + this.empleado.usuario.id, { nueva_pass: password }, true)
                                .then((d) => this.util.presentAlert('Mensaje', 'Contraseña Actualizada.'))
                                .catch((err) => this.util.handleError(err));
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    loadEmpleados() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isAdmin = this.empleado.usuario.isadmin;
            // console.log({
            //   isAdmin: this.isAdmin,
            //   willReturn: !this.isAdmin
            // })
            if (this.isAdmin)
                return;
            this.bs.get(this.bs.EMPLEADO_URL + '/true', true).then(d => {
                this.empleados = d.filter(x => x.id != this.empleado.id);
                this.empleados.sort((a, b) => {
                    return a.usuario.nombre.localeCompare(b.usuario.nombre);
                });
                // console.log(this.empleados);
                let userList = this.empleados.map(x => x.usuario.nombre);
                // console.log(this.sorteo.empleados.findIndex(x => x.usuario.nombre = 'eperez') > -1);
                userList.forEach(x => {
                    this.usuarios.push({ nombre: x, seleccionado: this.empleado.empleados.findIndex(e => e.usuario.nombre == x) > -1 });
                });
                // console.log(this.usuarios);
                // console.log(this.usuarios);
            }).catch((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return this.util.handleError(err); }));
        });
    }
    ngOnInit() {
        this.loadEmpleados();
    }
    paisChanged(evt) {
        this.empleado.pais = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["Pais"](evt.detail.value);
    }
    modelChanged(evt) {
        // console.log(evt.detail.data);
        setTimeout(() => {
            this.empleado.celular = this.empleado.celular.replace("-", "");
            if (this.empleado.celular.length >= 5) {
                this.empleado.celular = this.empleado.celular.substring(0, 4) + '-' + this.empleado.celular.substring(4, this.empleado.celular.length);
            }
        }, 1);
    }
    format(evt) {
        var value = evt.target.value;
        var key = evt.key; // console.log(key);
        // evt.preventDefault();
        console.log(key);
        if ((key < '0' || key > '9') && key != 'Enter')
            evt.preventDefault();
        else if (value.length == 9)
            evt.preventDefault();
    }
    close() {
        this.modalCtrl.dismiss();
    }
    change(value, pos) {
        if (pos == 0 && !value) {
            this.empleado.usuario.saldo = null;
        }
    }
    openSubMenu(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let cambiarPasswordClicked = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
            cambiarPasswordClicked.subscribe(() => {
                this.cambiarPassword();
            });
            let options = [{
                    name: 'Cambiar Contraseña',
                    icon: 'key-outline',
                    event: cambiarPasswordClicked,
                    type: 'button'
                }];
            let popover = yield this.popoverCtrl.create({
                component: _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_10__["SubMenuPage"],
                event: evt,
                cssClass: 'sub-menu',
                componentProps: {
                    options
                }
            });
            yield popover.present();
            yield popover.onWillDismiss();
        });
    }
    submit(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(form.value)
            if (!this.isValid()) {
                yield this.util.presentAlert('Faltan datos', 'Completa: ' + this.faltanDatos());
                return;
            }
            // console.log('2w', form.value)
            // let body = new BodyForm();
            // body.append('cliente', JSON.stringify(this.cliente));
            let load = yield this.loadCtrl.create({
                message: 'Guardando...'
            });
            yield load.present();
            let users = this.usuarios.filter(x => x.seleccionado);
            this.empleado.empleados = this.empleados.filter(x => users.findIndex(y => y.nombre == x.usuario.nombre) > -1);
            let body = {
                'empleado': JSON.stringify(this.empleado)
            };
            try {
                let c = yield this.bs.post(this.bs.EMPLEADO_URL, body, true);
                yield load.dismiss();
                let msg = this.empleado.id == -1 ? 'creado con id #' + c.id : 'actualizado';
                yield this.util.presentAlert('Mensaje', 'Empleado ' + msg + ' con éxito.');
                if (this.empleado.id == -1)
                    this.navCtrl.pop();
                else
                    this.modalCtrl.dismiss({ empleado: this.empleado });
            }
            catch (err) {
                yield load.dismiss();
                yield this.util.handleError(err);
            }
        });
    }
    isValid() {
        return this.faltanDatos() == '';
    }
    faltanDatos() {
        let e = this.empleado;
        let v = (x) => (x || '').trim() != '';
        let f = [];
        if (!v(e.cedula))
            f.push('Cédula');
        if (!v(e.primer_nombre))
            f.push('Primer nombre');
        if (!v(e.segundo_nombre))
            f.push('Segundo nombre');
        if (!v(e.primer_apellido))
            f.push('Primer apellido');
        if (!v(e.segundo_apellido))
            f.push('Segundo apellido');
        if (!(e.pais && e.pais.id > -1))
            f.push('País');
        if ((e.celular || '').trim().length != 9)
            f.push('Celular (ej. 8888-1234)');
        if (!v(e.usuario.nombre))
            f.push('Nombre de usuario');
        if (e.id == -1 && !v(e.usuario.pass))
            f.push('Contraseña');
        if (this.forzar_saldo && e.usuario.saldo == null)
            f.push('Saldo');
        return f.join(', ');
    }
    agregarSaldo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Agregar Saldo',
                inputs: [
                    {
                        type: 'number',
                        name: 'saldo',
                        label: 'Monto',
                        placeholder: 'Monto C$',
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'danger'
                    },
                    {
                        text: 'Aceptar',
                        handler: (value) => {
                            var _a;
                            if (value.saldo) {
                                const saldo = +value.saldo;
                                if (saldo < 0)
                                    return;
                                const nuevoSaldo = ((_a = this.empleado.usuario.saldo) !== null && _a !== void 0 ? _a : 0) + saldo;
                                this.empleado.usuario.saldo = nuevoSaldo;
                            }
                        },
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AgentePage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_7__["Util"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] }
];
AgentePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-agente',
        template: _raw_loader_agente_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agente_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AgentePage);



/***/ }),

/***/ "2Wwd":
/*!*****************************************************************!*\
  !*** ./src/app/pages/detalle-balance/detalle-balance.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  font-weight: bold;\n}\n\n.header {\n  font-weight: bold;\n}\n\nion-list-header {\n  padding: 0;\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 99999;\n}\n\n.body {\n  max-height: calc(100% - 30px);\n  overflow: auto;\n}\n\n.body ion-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.sub {\n  font-size: 14px;\n  font-weight: bold;\n  color: gray;\n}\n\nion-row.bc {\n  background-image: url('data:image/svg+xml;charset=utf-8,<svg%20xmlns=\"http://www.w3.org/2000/svg\"%20viewBox=\"0%200%2012%2020\"><path%20d=\"M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z\"%20fill=\"%23c8c7cc\"/></svg>');\n  background-repeat: no-repeat;\n  background-position: right 14px center;\n  background-size: 14px 14px;\n  width: 100%;\n}\n\nion-row.bc.cancelled {\n  border-color: #A70B0B;\n}\n\nion-row.bc.winner {\n  border-color: #0d3923;\n}\n\nion-row.bc h3 {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-weight: bold;\n  text-align: center;\n  font-size: 38px;\n}\n\nion-row.bc h3.cancelled {\n  color: rgba(240, 65, 65, 0.7);\n}\n\nion-row.bc h3.winner {\n  color: rgba(19, 71, 78, 0.7);\n}\n\nion-row.bc h3 span {\n  display: block;\n  text-align: center;\n}\n\nion-row.bc:active {\n  opacity: 0.5;\n}\n\n.date {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  transition: 0.3s all ease;\n}\n\n.date:active {\n  background: #CCC;\n}\n\nion-buttons.filter span {\n  padding: 4px 8.16px;\n  border-radius: 50%;\n  display: inline-block;\n  font-size: 12px;\n  position: absolute;\n  left: 30px;\n  font-weight: bold;\n  top: 0;\n  background: #A70B0B;\n}\n\n@media screen and (max-width: 401px) {\n  ion-col {\n    font-size: 14px;\n  }\n  ion-col ion-icon {\n    font-size: 12px;\n  }\n\n  ion-icon.all {\n    font-size: 15px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RldGFsbGUtYmFsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLDZCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBRUksYUFBQTtFQUdBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSx5TUFBQTtFQUVBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFESjs7QUFFSTtFQUNJLHFCQUFBO0FBQVI7O0FBRUk7RUFDSSxxQkFBQTtBQUFSOztBQUdJO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRFI7O0FBRVE7RUFDSSw2QkFBQTtBQUFaOztBQUVRO0VBQ0ksNEJBQUE7QUFBWjs7QUFFUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUFaOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQUtBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBRUEseUJBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0FBRko7O0FBT0k7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxNQUFBO0VBQ0EsbUJBQUE7QUFKUjs7QUFRQTtFQUNJO0lBQ0ksZUFBQTtFQUxOO0VBTU07SUFDSSxlQUFBO0VBSlY7O0VBT0U7SUFDSSwwQkFBQTtFQUpOO0FBQ0YiLCJmaWxlIjoiZGV0YWxsZS1iYWxhbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIFxufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgei1pbmRleDogOTk5OTk7XG59XG5cbi5ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmJvZHkgaW9uLWNvbCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zdWIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuaW9uLXJvdy5iYyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCw8c3ZnJTIweG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiJTIwdmlld0JveD1cIjAlMjAwJTIwMTIlMjAyMFwiPjxwYXRoJTIwZD1cIk0yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHpcIiUyMGZpbGw9XCIlMjNjOGM3Y2NcIi8+PC9zdmc+Jyk7XG4gICAgLy8gcGFkZGluZy1yaWdodDogMzJweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDE0cHggY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTRweCAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICYuY2FuY2VsbGVkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjQTcwQjBCO1xuICAgIH1cbiAgICAmLndpbm5lciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzBkMzkyMztcbiAgICB9XG4gICAgXG4gICAgaDN7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICYuY2FuY2VsbGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogI2YwNDE0MSwgJGFscGhhOiAuNyk7XG4gICAgICAgIH1cbiAgICAgICAgJi53aW5uZXIge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoJGNvbG9yOiAjMTM0NzRlLCAkYWxwaGE6IC43KTtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tcm93LmJjOmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4uZGF0ZSB7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcbn1cblxuLmRhdGU6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xufVxuXG5pb24tYnV0dG9ucy5maWx0ZXIge1xuICAgXG4gICAgc3BhbiB7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4LjE2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYmFja2dyb3VuZDogI0E3MEIwQjtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMXB4KSB7XG4gICAgaW9uLWNvbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1pY29uLmFsbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "3m9b":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/vender-por-rango/vender-por-rango.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <h2 class=\"ion-text-center\">Vender por rango</h2>\n    <form #form='ngForm' (ngSubmit)='submit(form)'>\n        <ion-list class=\"ion-padding\">\n            <ion-item>\n                <ion-label position='stacked'>Desde</ion-label>\n                <ion-input type='text' inputmode='numeric' maxlength='2' name='desde' [(ngModel)]='desde'></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position='stacked'>Hasta</ion-label>\n                <ion-input type='text' inputmode='numeric' maxlength='2' name='hasta' [(ngModel)]='hasta'></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position='stacked'>Cantidad</ion-label>\n                <ion-input type='number' name='cantidad' [(ngModel)]='cantidad'></ion-input>\n            </ion-item>\n            <ion-radio-group name='tp' [(ngModel)]='tipo_num'>\n                <ion-item>\n                    <ion-radio value=\"1\"></ion-radio>\n                    <ion-label>Números impares</ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-radio value=\"2\"></ion-radio>\n                    <ion-label>Números pares</ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-radio value=\"0\"></ion-radio>\n                    <ion-label>Todos</ion-label>\n                </ion-item>\n            </ion-radio-group>\n        </ion-list>\n        <div class=\"btn-container\">\n            <ion-button fill='clear' color='danger'>Cancelar</ion-button>\n            <ion-button type='submit' fill='clear' color='primary' [disabled]='!isValid()'>OK</ion-button>\n        </div>\n    </form>\n</ion-content>");

/***/ }),

/***/ "4TzF":
/*!***********************************************!*\
  !*** ./src/app/pages/sorteo/sorteo.module.ts ***!
  \***********************************************/
/*! exports provided: SorteoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorteoPageModule", function() { return SorteoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sorteo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sorteo-routing.module */ "8ZaU");
/* harmony import */ var _sorteo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sorteo.page */ "/1yw");







let SorteoPageModule = class SorteoPageModule {
};
SorteoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sorteo_routing_module__WEBPACK_IMPORTED_MODULE_5__["SorteoPageRoutingModule"]
        ],
        declarations: [_sorteo_page__WEBPACK_IMPORTED_MODULE_6__["SorteoPage"]]
    })
], SorteoPageModule);



/***/ }),

/***/ "50N5":
/*!************************************!*\
  !*** ./src/app/classes/classes.ts ***!
  \************************************/
/*! exports provided: Pais, Moneda, Juego, BoletoMock, Boleto, NumeroBoleto, Empleado, Usuario, InversionGanancia, NumeroRestringido, SuperGrupo, Grupo, Sorteo, Cliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pais", function() { return Pais; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Moneda", function() { return Moneda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Juego", function() { return Juego; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletoMock", function() { return BoletoMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Boleto", function() { return Boleto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumeroBoleto", function() { return NumeroBoleto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Empleado", function() { return Empleado; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InversionGanancia", function() { return InversionGanancia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumeroRestringido", function() { return NumeroRestringido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperGrupo", function() { return SuperGrupo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grupo", function() { return Grupo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sorteo", function() { return Sorteo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
class Pais {
    constructor(pais) {
        this.id = -1;
        this.nombre = '';
        this.abreviacion = '';
        this.ext = '';
        this.moneda = new Moneda();
        this.activo = true;
        if (pais) {
            this.id = pais.id;
            this.nombre = pais.nombre;
            this.abreviacion = pais.abreviacion;
            this.moneda = new Moneda(pais.moneda);
            this.ext = pais.ext;
            this.activo = pais.activo;
        }
    }
}
class Moneda {
    constructor(moneda) {
        this.id = -1;
        this.nombre = '';
        this.simbolo = '';
        this.activo = true;
        if (moneda) {
            this.id = moneda.id;
            this.nombre = moneda.nombre;
            this.simbolo = moneda.simbolo;
            this.activo = moneda.activo;
        }
    }
}
class Juego {
    constructor(juego) {
        this.id = -1;
        this.fecha = new Date();
        this.sorteo = new Sorteo();
        this.numero_ganador = '';
        this.iscompleted = false;
        this.cantidad_boletos = 0;
        if (juego) {
            this.id = juego.id;
            this.fecha = new Date(juego.fecha);
            this.sorteo = new Sorteo(juego.sorteo);
            this.numero_ganador = juego.numero_ganador;
            this.iscompleted = juego.iscompleted;
        }
    }
}
class BoletoMock {
    constructor(boleto) {
        var _a;
        this.indice = -1;
        this.id = -1;
        this.fecha = new Date();
        this.juego_id = -1;
        this.juego_fecha = new Date();
        this.empleado_id = -1;
        this.empleado_nombre = '';
        // public id_cliente: number = -1;
        this.cliente_nombre = '';
        this.total = 0;
        this.iscancelled = false;
        this.iscompleted = false;
        this.numero_ganador = '';
        this.numeros = [];
        this.log = '';
        this.sorteo_id = -1;
        this.sorteo_nombre = '';
        this.grupo_id = -1;
        this.grupo_titulo = '';
        this.grupo_nombre = '';
        this.simbolo_moneda = '';
        this.factura_label = '';
        this.usuario_nombre = '';
        this.usuario_id = '';
        this.sorteo_tipo = 'r';
        this.pais_id = null;
        this.scan_code = '';
        if (boleto) {
            this.id = boleto.id;
            this.indice;
            this.fecha = new Date(boleto.fecha);
            this.juego_id = boleto.juego_id;
            this.juego_fecha = new Date(boleto.juego_fecha);
            this.empleado_id = boleto.empleado_id;
            this.empleado_nombre = boleto.empleado_nombre;
            // this.id_cliente = boleto.id_cliente;
            this.cliente_nombre = boleto.cliente_nombre;
            this.total = boleto.total;
            this.iscancelled = boleto.iscancelled;
            this.iscompleted = boleto.iscompleted;
            this.numero_ganador = (_a = boleto.numero_ganador) !== null && _a !== void 0 ? _a : '';
            this.numeros = boleto.numeros.clone();
            this.log = boleto.log;
            this.sorteo_id = boleto.sorteo_id;
            this.sorteo_nombre = boleto.sorteo_nombre;
            this.grupo_id = boleto.grupo_id;
            this.grupo_nombre = boleto.grupo_nombre;
            this.simbolo_moneda = boleto.simbolo_moneda;
            this.factura_label = boleto.factura_label;
            this.usuario_id = boleto.usuario_id;
            this.usuario_nombre = boleto.usuario_nombre;
            this.sorteo_tipo = boleto.sorteo_tipo;
            this.pais_id = boleto.pais_id;
            this.scan_code = boleto.scan_code;
            this.grupo_titulo = boleto.grupo_titulo;
        }
    }
}
class Boleto {
    // public fecha_creado: Date = new Date();
    constructor(boleto) {
        this.indice = -1;
        this.id = -1;
        this.fecha = new Date();
        this.fecha_reclamo = new Date();
        this.empleado = new Empleado();
        this.cliente = new Cliente();
        this.numeros = [];
        this.total = 0;
        this.iscancelled = false;
        this.iscanjeado = false;
        this.iscompleted = false;
        this.juego = new Juego();
        this.log = '';
        this.scan_code = '';
        if (boleto) {
            this.id = boleto.id;
            this.indice = boleto.indice;
            this.fecha = new Date(boleto.fecha);
            // this.sorteo = new Sorteo(boleto.sorteo);
            this.fecha_reclamo = new Date(boleto.fecha_reclamo);
            this.empleado = new Empleado(boleto.empleado);
            this.cliente = new Cliente(boleto.cliente);
            this.numeros = boleto.numeros.clone();
            this.total = this.total;
            this.iscancelled = boleto.iscancelled;
            this.iscanjeado = boleto.iscanjeado;
            this.iscompleted = boleto.iscompleted;
            this.juego = new Juego(boleto.juego);
            this.log = boleto.log;
            this.scan_code = boleto.scan_code;
            // this.fecha_creado = new Date(boleto.fecha_creado);
        }
    }
}
class NumeroBoleto {
    constructor() {
        this.id = -1;
        this.fecha_reclamo = new Date();
        this.numero = '00';
        this.boleto_id = -1;
        this.inversion = 0;
        this.ganancia = 0;
        this.iswinner = false;
        this.iscanjeado = false;
        this.iscancelled = false;
    }
}
class Empleado {
    constructor(empleado) {
        this.id = -1;
        this.pais = new Pais();
        this.cedula = '';
        this.primer_nombre = '';
        this.segundo_nombre = '';
        this.primer_apellido = '';
        this.segundo_apellido = '';
        this.direccion = '';
        this.celular = '';
        this.usuario = new Usuario();
        this.genero = 'M';
        this.activo = true;
        this.empleados = [];
        this.sales_commission = 0;
        this.profit_commission = 0;
        this.en_linea = false;
        if (empleado) {
            this.id = empleado.id;
            this.pais = new Pais(empleado.pais);
            this.cedula = empleado.cedula;
            this.primer_nombre = empleado.primer_nombre;
            this.segundo_nombre = empleado.segundo_nombre;
            this.primer_apellido = empleado.primer_apellido;
            this.segundo_apellido = empleado.segundo_apellido;
            this.direccion = empleado.direccion;
            this.celular = empleado.celular;
            this.usuario = new Usuario(empleado.usuario);
            this.genero = empleado.genero;
            this.activo = empleado.activo;
            this.empleados = empleado.empleados.clone();
            this.sales_commission = empleado.sales_commission;
            this.profit_commission = empleado.profit_commission;
            this.en_linea = !!empleado.en_linea;
        }
    }
}
class Usuario {
    constructor(usuario) {
        this.id = -1;
        this.nombre = '';
        this.pass = '';
        this.isadmin = false;
        this.activo = true;
        this.eng = false;
        this.vb = false;
        this.factura_nombre = "";
        this.tv = 0;
        this.pi = false;
        this.temp_inactivo = false;
        this.tipo_factura = 1;
        this.saldo = null;
        if (usuario) {
            this.id = usuario.id;
            this.nombre = usuario.nombre;
            this.pass = usuario.pass;
            this.isadmin = usuario.isadmin;
            this.activo = usuario.activo;
            this.eng = usuario.eng;
            this.vb = usuario.vb;
            this.factura_nombre = usuario.factura_nombre == '' ? this.factura_nombre : usuario.factura_nombre;
            this.tv = usuario.tv;
            this.pi = usuario.pi;
            this.temp_inactivo = usuario.temp_inactivo;
            this.tipo_factura = usuario.tipo_factura;
            this.saldo = usuario.saldo;
        }
    }
}
class InversionGanancia {
    constructor(numeroCantidad) {
        this.ganancia = 0;
        this.inversion = 0;
        this.tipo = 'Multiplicada';
        if (numeroCantidad) {
            this.inversion = numeroCantidad.inversion;
            this.ganancia = numeroCantidad.ganancia;
            this.tipo = numeroCantidad.tipo;
        }
    }
}
class NumeroRestringido {
    constructor(numero_restringido) {
        this.cantidad = 0;
        this.numero = '';
        if (numero_restringido) {
            this.cantidad = numero_restringido.cantidad;
            this.numero = numero_restringido.numero;
        }
    }
}
class SuperGrupo {
    constructor(superGrupo) {
        this.id = -1;
        this.nombre = '';
        this.numeros_restringidos = [];
        this.grupos_id = [];
        if (superGrupo) {
            this.id = superGrupo.id;
            this.nombre = superGrupo.nombre;
            this.numeros_restringidos = superGrupo.numeros_restringidos.clone();
            this.grupos_id = superGrupo.grupos_id.clone();
        }
        else {
            for (let i = 0; i < 100; i++) {
                let nr = new NumeroRestringido();
                nr.cantidad = 0;
                nr.numero = i.toString().length == 1 ? '0' + i : i.toString();
                this.numeros_restringidos.push(nr);
            }
        }
    }
}
class Grupo {
    constructor(grupo) {
        this.id = -1;
        this.nombre = '';
        this.titulo = '';
        this.sorteo_tipo = 'r';
        this.numeros_restringidos = [];
        this.sorteos = [];
        this.activo = true;
        if (grupo) {
            this.id = grupo.id;
            this.nombre = grupo.nombre;
            this.numeros_restringidos = grupo.numeros_restringidos.clone();
            this.sorteos = grupo.sorteos.clone();
            this.sorteo_tipo = grupo.sorteo_tipo;
            this.activo = grupo.activo;
            this.titulo = grupo.titulo;
        }
        else {
            for (let i = 0; i < 100; i++) {
                let nr = new NumeroRestringido();
                nr.cantidad = 0;
                nr.numero = i.toString().length == 1 ? '0' + i : i.toString();
                this.numeros_restringidos.push(nr);
            }
        }
    }
    recalculate() {
        this.numeros_restringidos = [];
        const opts = {
            'r': {
                from: 0,
                to: 99,
                break: null,
                length: 2
            },
            'j2': {
                from: 0,
                to: 99,
                break: null,
                length: 2
            },
            'j3': {
                from: 0,
                to: 999,
                break: null,
                length: 3
            },
            'f': {
                from: 1,
                to: 12,
                break: 31,
                length: 2
            }
        };
        const sorteo_tipo = this.sorteo_tipo;
        for (let i = opts[sorteo_tipo].from; i <= opts[sorteo_tipo].to; i++) {
            let n = i.toString();
            while (n.length < opts[sorteo_tipo].length) {
                n = '0' + n;
            }
            if (opts[sorteo_tipo].break) {
                for (let j = 1; j <= opts[sorteo_tipo].break; j++) {
                    this.numeros_restringidos.push(new NumeroRestringido({
                        cantidad: 0,
                        numero: (j < 10 ? '0' + j : j.toString()) + n
                    }));
                }
                continue;
            }
            this.numeros_restringidos.push(new NumeroRestringido({
                cantidad: 0,
                numero: n
            }));
        }
        // if (this.sorteo_tipo == 'r')
        // {
        //     for (let i = 0; i < 100; i++)
        //     {
        //         let nr = new NumeroRestringido();
        //         nr.cantidad = 0;
        //         nr.numero = i.toString().length == 1 ? '0' + i : i.toString();
        //         this.numeros_restringidos.push(nr);
        //     }
        // }
        // else if (this.sorteo_tipo == 'j3')
        // {
        //     for (let i = 0; i < 1000; i++)
        //     {
        //         let nr = new NumeroRestringido();
        //         nr.cantidad = 0;
        //         nr.numero = i.toString().length == 1 ? '0' + i : i.toString();
        //         nr.numero = nr.numero.toString().length == 2 ? '0' + nr.numero : nr.numero.toString();
        //         this.numeros_restringidos.push(nr);
        //     }
        // }
        // else if (this.sorteo_tipo == 'f')
        // {
        //     for (let i = 1; i <= 12; i++)
        //     {
        //         for (let j = 1; j <= 31; j++)
        //         {
        //             let nr = new NumeroRestringido();
        //             nr.cantidad = 0;
        //             nr.numero = j.toString().length == 1 ? '0' + j : j.toString();
        //             nr.numero += i.toString().length == 1 ? '0' + i : i.toString();
        //             this.numeros_restringidos.push(nr);
        //         }
        //     }
        // }
    }
}
class Sorteo {
    constructor(sorteo) {
        this.id = -1;
        this.nombre = '';
        this.pais = new Pais();
        this.hora_minimo = new Date('1999/01/01 00:00:00');
        this.hora = new Date('1999/01/01 00:00:00');
        this.lunes = false;
        this.martes = false;
        this.miercoles = false;
        this.jueves = false;
        this.viernes = false;
        this.sabado = false;
        this.domingo = false;
        this.numeros_restringidos = [];
        this.inversiones_ganancias = [];
        this.empleados = [];
        this.grupo = new Grupo();
        this.activo = true;
        this.factura_label = '';
        if (sorteo) {
            this.id = sorteo.id;
            this.nombre = sorteo.nombre;
            this.pais = new Pais(sorteo.pais);
            this.hora_minimo = new Date(sorteo.hora_minimo);
            this.hora = new Date(sorteo.hora);
            this.lunes = sorteo.lunes;
            this.martes = sorteo.martes;
            this.miercoles = sorteo.miercoles;
            this.jueves = sorteo.jueves;
            this.viernes = sorteo.viernes;
            this.sabado = sorteo.sabado;
            this.domingo = sorteo.domingo;
            this.ganancia = sorteo.ganancia;
            this.numeros_restringidos = JSON.parse(JSON.stringify(sorteo.numeros_restringidos));
            this.inversiones_ganancias = JSON.parse(JSON.stringify(sorteo.inversiones_ganancias));
            this.empleados = sorteo.empleados.clone();
            this.grupo = new Grupo(sorteo.grupo);
            this.activo = sorteo.activo;
            this.factura_label = sorteo.factura_label;
        }
        else {
            for (let i = 0; i < 100; i++) {
                let nr = new NumeroRestringido();
                nr.cantidad = 0;
                nr.numero = i.toString().length == 1 ? '0' + i : i.toString();
                this.numeros_restringidos.push(nr);
            }
        }
    }
    ;
}
class Cliente {
    constructor(cliente) {
        this.id = -1;
        this.primer_nombre = '';
        this.segundo_nombre = '';
        this.primer_apellido = '';
        this.segundo_apellido = '';
        this.celular = '';
        this.pais = new Pais();
        this.genero = 'M';
        this.activo = true;
        if (cliente) {
            this.id = cliente.id;
            this.primer_nombre = cliente.primer_nombre;
            this.segundo_nombre = cliente.segundo_nombre;
            this.primer_apellido = cliente.primer_apellido;
            this.segundo_apellido = cliente.segundo_apellido;
            this.celular = cliente.celular;
            this.pais = new Pais(cliente.pais);
            this.genero = cliente.genero;
            this.activo = cliente.activo;
        }
    }
}


/***/ }),

/***/ "5DK6":
/*!*************************************************!*\
  !*** ./src/app/pages/boletos/boletos.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  font-weight: bold;\n}\n\nion-list-header {\n  padding: 0;\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 99999;\n}\n\n.body {\n  max-height: calc(100% - 30px);\n  overflow: auto;\n}\n\n.body ion-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.sub {\n  font-size: 14px;\n  font-weight: bold;\n  color: gray;\n}\n\nion-row.bc {\n  background-image: url('data:image/svg+xml;charset=utf-8,<svg%20xmlns=\"http://www.w3.org/2000/svg\"%20viewBox=\"0%200%2012%2020\"><path%20d=\"M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z\"%20fill=\"%23c8c7cc\"/></svg>');\n  background-repeat: no-repeat;\n  background-position: right 14px center;\n  background-size: 14px 14px;\n  width: 100%;\n}\n\nion-row.bc.cancelled {\n  border-color: #A70B0B;\n}\n\nion-row.bc.winner {\n  border-color: #0d3923;\n}\n\nion-row.bc h3 {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-weight: bold;\n  text-align: center;\n  font-size: 38px;\n}\n\nion-row.bc h3.cancelled {\n  color: rgba(240, 65, 65, 0.7);\n}\n\nion-row.bc h3.winner {\n  color: rgba(19, 71, 78, 0.7);\n}\n\nion-row.bc h3.winner span {\n  font-size: 22px;\n}\n\nion-row.bc h3.duplicado {\n  color: #100c55;\n  font-weight: bold;\n  font-size: 18px;\n  left: 0;\n  width: 100%;\n  transform: none;\n}\n\nion-row.bc h3 span {\n  display: block;\n  text-align: center;\n}\n\nion-row.bc:active {\n  opacity: 0.5;\n}\n\n.date {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  transition: 0.3s all ease;\n}\n\n.date:active {\n  background: #CCC;\n}\n\nion-buttons.filter span {\n  padding: 4px 8.16px;\n  border-radius: 50%;\n  display: inline-block;\n  font-size: 12px;\n  position: absolute;\n  left: 30px;\n  font-weight: bold;\n  top: 0;\n  color: #FFF;\n  background: #A70B0B;\n  pointer-events: none;\n}\n\n@media screen and (max-width: 401px) {\n  ion-col {\n    font-size: 14px;\n  }\n  ion-col ion-icon {\n    font-size: 12px;\n  }\n\n  ion-icon.all {\n    font-size: 15px !important;\n  }\n}\n\n.negative {\n  color: #f04141;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JvbGV0b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLDZCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUlBO0VBRUksYUFBQTtFQUdBLHNCQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSx5TUFBQTtFQUVBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFGSjs7QUFHSTtFQUNJLHFCQUFBO0FBRFI7O0FBR0k7RUFDSSxxQkFBQTtBQURSOztBQUlJO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRlI7O0FBR1E7RUFDSSw2QkFBQTtBQURaOztBQUdRO0VBQ0ksNEJBQUE7QUFEWjs7QUFFWTtFQUNJLGVBQUE7QUFBaEI7O0FBR1E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRFo7O0FBR1E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFEWjs7QUFNQTtFQUNJLFlBQUE7QUFISjs7QUFNQTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUVBLHlCQUFBO0FBSEo7O0FBTUE7RUFDSSxnQkFBQTtBQUhKOztBQVFJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBTFI7O0FBU0E7RUFDSTtJQUNJLGVBQUE7RUFOTjtFQU9NO0lBQ0ksZUFBQTtFQUxWOztFQVFFO0lBQ0ksMEJBQUE7RUFMTjtBQUNGOztBQVFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBTkoiLCJmaWxlIjoiYm9sZXRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHotaW5kZXg6IDk5OTk5O1xufVxuXG4uYm9keSB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTBweCk7XG59XG5cbi5ib2R5IGlvbi1jb2wge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3ViIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbmlvbi1yb3cuYmMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsPHN2ZyUyMHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiUyMHZpZXdCb3g9XCIwJTIwMCUyMDEyJTIwMjBcIj48cGF0aCUyMGQ9XCJNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6XCIlMjBmaWxsPVwiJTIzYzhjN2NjXCIvPjwvc3ZnPicpO1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDMycHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxNHB4IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE0cHggMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAmLmNhbmNlbGxlZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0E3MEIwQjtcbiAgICB9XG4gICAgJi53aW5uZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICMwZDM5MjM7XG4gICAgfVxuICAgIFxuICAgIGgze1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAmLmNhbmNlbGxlZCB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgkY29sb3I6ICNmMDQxNDEsICRhbHBoYTogLjcpO1xuICAgICAgICB9XG4gICAgICAgICYud2lubmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogIzEzNDc0ZSwgJGFscGhhOiAuNyk7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5kdXBsaWNhZG8ge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoJGNvbG9yOiAjMTAwYzU1LCAkYWxwaGE6IDEpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLXJvdy5iYzphY3RpdmUge1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRhdGUge1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG59XG5cbi5kYXRlOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbn1cblxuaW9uLWJ1dHRvbnMuZmlsdGVyIHtcbiAgIFxuICAgIHNwYW4ge1xuICAgICAgICBwYWRkaW5nOiA0cHggOC4xNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDMwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQTcwQjBCO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMXB4KSB7XG4gICAgaW9uLWNvbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1pY29uLmFsbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLm5lZ2F0aXZlIHtcbiAgICBjb2xvcjogcmdiYSgkY29sb3I6ICNmMDQxNDEsICRhbHBoYTogMSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */");

/***/ }),

/***/ "66mU":
/*!***********************************************!*\
  !*** ./src/app/pages/agente/agente.module.ts ***!
  \***********************************************/
/*! exports provided: AgentePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentePageModule", function() { return AgentePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _agente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agente-routing.module */ "yF1e");
/* harmony import */ var _agente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agente.page */ "2V4y");







let AgentePageModule = class AgentePageModule {
};
AgentePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _agente_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgentePageRoutingModule"]
        ],
        declarations: [_agente_page__WEBPACK_IMPORTED_MODULE_6__["AgentePage"]]
    })
], AgentePageModule);



/***/ }),

/***/ "6ASw":
/*!***************************************************************!*\
  !*** ./src/app/pages/detalle-balance/detalle-balance.page.ts ***!
  \***************************************************************/
/*! exports provided: DetalleBalancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleBalancePage", function() { return DetalleBalancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalle_balance_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalle-balance.page.html */ "V+NP");
/* harmony import */ var _detalle_balance_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle-balance.page.scss */ "2Wwd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/util/util */ "JQC8");
/* harmony import */ var _boleto_boleto_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../boleto/boleto.page */ "9ljF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/sub-menu/sub-menu.page */ "YY6p");
/* harmony import */ var esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! esc-pos-encoder */ "oLKi");
/* harmony import */ var esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_services_printer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/printer.service */ "UbLU");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");















let DetalleBalancePage = class DetalleBalancePage {
    constructor(printer, currencyPipe, storage, loadCtrl, toastCtrl, alertCtrl, modalCtrl, navParams, bs, util, popoverCtrl) {
        this.printer = printer;
        this.currencyPipe = currencyPipe;
        this.storage = storage;
        this.loadCtrl = loadCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.bs = bs;
        this.util = util;
        this.popoverCtrl = popoverCtrl;
        this.agente = '';
        this.usuario = { id: -1, nombre: '' };
        this.searchTerm = '';
        this.loaded = false;
        this.boletos = [];
        this.itemHeightFn = (index, item) => 89;
        this.isPos = false;
        this.balance = navParams.get('balance');
        this.agente = navParams.get('agente');
        this.usuario = navParams.get('usuario');
        bs.get(bs.BOLETO_URL + `/juego/${this.balance.juego_fecha.split(' ')[0].replace(/\//g, "-")}/${this.balance.juego_fecha.split(' ')[1]}/${this.balance.sorteo_id}/${this.usuario.id}`, true)
            .then(d => this.boletos = d)
            .catch(err => util.handleError(err))
            .finally(() => this.loaded = true);
    }
    ngOnInit() {
    }
    search(evt) {
    }
    close() {
        this.modalCtrl.dismiss();
    }
    openSubMenu(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let imprimirGanadoresClicked = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
            let options = [
                {
                    name: 'Imprimir Ganadores',
                    icon: 'print-outline',
                    event: imprimirGanadoresClicked,
                    type: 'button'
                }
            ];
            imprimirGanadoresClicked.subscribe(() => this.printWinners());
            let popover = yield this.popoverCtrl.create({
                component: _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_9__["SubMenuPage"],
                event: evt,
                cssClass: 'sub-menu',
                componentProps: {
                    options
                }
            });
            yield popover.present();
            yield popover.onWillDismiss();
        });
    }
    boletoClicked(boleto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let b = JSON.clone(boleto);
            b.numeros = b.numeros.sort((x, y) => x.numero > y.numero ? 1 : -1);
            let modal = yield this.modalCtrl.create({
                component: _boleto_boleto_page__WEBPACK_IMPORTED_MODULE_7__["BoletoPage"],
                componentProps: {
                    boleto: b
                }
            });
            yield modal.present();
        });
    }
    printWinners() {
        const encoder = new esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10___default.a();
        const result = encoder.initialize();
        // Sunmi: por defecto chino (multibyte). FS . cierra multibyte, ESC t 10 = Windows-1252
        result.raw([0x1c, 0x2e]);
        result.raw([0x1b, 0x74, 0x10]);
        result._codepage = 'windows1252';
        this.boletos.forEach(b => {
            let winner = b.numeros.find(x => x.iswinner);
            result.align('center')
                .size('normal')
                .bold(true)
                .line('#' + b.id.toString())
                .bold(false)
                .align('left')
                .line('Fecha:   ' + moment__WEBPACK_IMPORTED_MODULE_11___default()(b.fecha).format('DD/MM/YYYY hh:mm:ss A'))
                .line('Número:  ' + winner.numero)
                .line(`Sorteo:  ${b.sorteo_nombre}`)
                .line('Agente:  ' + b.empleado_nombre)
                .line('Cliente: ' + b.cliente_nombre)
                .line(`${this.currencyPipe.transform(winner.inversion, 'C$')} = ${this.currencyPipe.transform(winner.ganancia, 'C$')}`)
                .align('center')
                .line(this.util.commands.HORIZONTAL_LINE.HR_58MM);
        });
        this.mountAlertBt(result.encode());
    }
    mountAlertBt(data) {
        this.printer
            .enableBluetooth()
            .then(() => {
            if (this.util.IMPRESORA_ADDRESS == '') {
                this.printer.searchBluetooth()
                    .then((devices) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    let inputs = [];
                    devices.forEach(d => {
                        inputs.push({
                            name: 'printer',
                            value: d.address,
                            label: d.name,
                            type: 'radio',
                        });
                    });
                    if (inputs.length == 0)
                        return window.alert('NO HAY IMPRESORA CONECTADA');
                    else {
                        let alert = yield this.alertCtrl.create({
                            header: 'Seleccione la impresora',
                            inputs: inputs,
                            buttons: [{
                                    text: 'Cancelar',
                                    role: 'cancel'
                                }, {
                                    text: 'Seleccionar',
                                    role: 'ok',
                                    handler: (device) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                        if (device) {
                                            yield this.storage.set('impresora_address', device);
                                            this.util.IMPRESORA_ADDRESS = device;
                                            this.print(device, data);
                                        }
                                        else
                                            return window.alert('NO SE SELECCIONÓ LA IMPRESORA');
                                    })
                                }]
                        });
                        yield alert.present();
                    }
                    // alert('DEVICES: ' + JSON.stringify(devices));
                    // devices.forEach((device) => {
                    //   console.log('Devices: ', JSON.stringify(device));
                    //   alert.addInput({
                    //     name: 'printer',
                    //     value: device.address,
                    //     label: device.name,
                    //     type: 'radio',
                    //   });
                    // });
                    // alert.present();
                }))
                    .catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.util.presentAlert('Error', 'Error al conectar con la impresora.');
                    // console.log(error);
                    // this.showToast(
                    //   'There was an error connecting the printer, please try again!',
                    // );
                    // this.mountAlertBt(this.receipt);
                }));
            }
            else {
                this.print(this.util.IMPRESORA_ADDRESS, data);
            }
        })
            .catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.util.presentAlert('Error', 'Error al conectar con la impresora.');
        }));
    }
    print(device, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Device mac: ', device);
            console.log('Data: ', JSON.stringify(data));
            let load = yield this.loadCtrl.create({
                message: 'Imprimiendo boletos...',
            });
            yield load.present();
            this.printer.connectBluetooth(device).subscribe((status) => {
                console.log(status);
                this.printer
                    .printData(data)
                    .then((printStatus) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // console.log(printStatus);
                    // let alert = this.alertCtrl.create({
                    //   title: 'Successful print!',
                    //   buttons: [{
                    //     text: 'Ok',
                    //     handler: () => {
                    //       load.dismiss();
                    //       this.printer.disconnectBluetooth();
                    //     },
                    //   }, ],
                    // });
                    // alert.present();
                    yield load.dismiss();
                    let toast = yield this.toastCtrl.create({
                        message: 'Se imprimieron ' + this.boletos.length + ' boletos con éxito',
                        buttons: ['OK'],
                        duration: 1500
                    });
                    yield toast.present();
                    try {
                        yield this.printer.disconnectBluetooth();
                    }
                    catch (error) {
                        console.log('Error al desconectar la impresora, por favor reiniciar el Bluetooth');
                    }
                    // if (this.boleto.id != -1) 
                    //   this.modalCtrl.dismiss();
                    // this.navCtrl.navigateRoot('/');
                }))
                    .catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield load.dismiss();
                    //There was an error printing, please try again!
                    yield this.util.presentAlert('Error', 'Error al imprimir.');
                }));
            }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield load.dismiss();
                //There was an error connecting to the printer, please try again
                yield this.util.presentAlert('Error', 'Error al conectar la impresora.');
            }));
        });
    }
};
DetalleBalancePage.ctorParameters = () => [
    { type: src_app_services_printer_service__WEBPACK_IMPORTED_MODULE_12__["PrinterService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["CurrencyPipe"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_6__["Util"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
DetalleBalancePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-balance',
        template: _raw_loader_detalle_balance_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_balance_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetalleBalancePage);



/***/ }),

/***/ "6x8l":
/*!*********************************************************!*\
  !*** ./src/app/pages/nuevo-grupo/nuevo-grupo.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list-header {\n  padding-left: 0;\n}\nion-list-header ion-label {\n  font-size: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL251ZXZvLWdydXBvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQUE7QUFBSjtBQUNJO0VBQ0ksMEJBQUE7QUFDUiIsImZpbGUiOiJudWV2by1ncnVwby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdC1oZWFkZXIge1xuICAgIC8vIC0taW9uLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "71nH":
/*!*********************************************************************!*\
  !*** ./src/app/pages/set-ganancias/set-ganancias-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SetGananciasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetGananciasPageRoutingModule", function() { return SetGananciasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _set_ganancias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set-ganancias.page */ "/SIb");




const routes = [
    {
        path: '',
        component: _set_ganancias_page__WEBPACK_IMPORTED_MODULE_3__["SetGananciasPage"]
    }
];
let SetGananciasPageRoutingModule = class SetGananciasPageRoutingModule {
};
SetGananciasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SetGananciasPageRoutingModule);



/***/ }),

/***/ "7KF5":
/*!*************************************************!*\
  !*** ./src/app/pages/cliente/cliente.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-container {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJjbGllbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "8Pg+":
/*!*********************************************************!*\
  !*** ./src/app/pages/boletos/boletos-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: BoletosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletosPageRoutingModule", function() { return BoletosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _boletos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boletos.page */ "L2Uv");




const routes = [
    {
        path: '',
        component: _boletos_page__WEBPACK_IMPORTED_MODULE_3__["BoletosPage"]
    }
];
let BoletosPageRoutingModule = class BoletosPageRoutingModule {
};
BoletosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BoletosPageRoutingModule);



/***/ }),

/***/ "8ZaU":
/*!*******************************************************!*\
  !*** ./src/app/pages/sorteo/sorteo-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SorteoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorteoPageRoutingModule", function() { return SorteoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sorteo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sorteo.page */ "/1yw");




const routes = [
    {
        path: '',
        component: _sorteo_page__WEBPACK_IMPORTED_MODULE_3__["SorteoPage"]
    }
];
let SorteoPageRoutingModule = class SorteoPageRoutingModule {
};
SorteoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SorteoPageRoutingModule);



/***/ }),

/***/ "9ljF":
/*!*********************************************!*\
  !*** ./src/app/pages/boleto/boleto.page.ts ***!
  \*********************************************/
/*! exports provided: BoletoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletoPage", function() { return BoletoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_boleto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./boleto.page.html */ "eErY");
/* harmony import */ var _boleto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boleto.page.scss */ "k3GL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _classes_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../classes/classes */ "50N5");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/base.service */ "Do2H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/sub-menu/sub-menu.page */ "YY6p");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var esc_pos_encoder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! esc-pos-encoder */ "oLKi");
/* harmony import */ var esc_pos_encoder__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(esc_pos_encoder__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_services_printer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/printer.service */ "UbLU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dom-to-image */ "cLAn");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "TzAO");
/* harmony import */ var _shared_vender_por_rango_vender_por_rango_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/vender-por-rango/vender-por-rango.page */ "Oxgz");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _clientes_clientes_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../clientes/clientes.page */ "Iz4z");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/util/util */ "JQC8");
/* harmony import */ var _util_logo__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../util/logo */ "N9Bv");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "I7pt");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var bwip_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! bwip-js */ "JYIK");
/* harmony import */ var bwip_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(bwip_js__WEBPACK_IMPORTED_MODULE_28__);
var BoletoPage_1;


























// import { Uid } from '@ionic-native/uid/ngx';

// import barcodeGenerator from 'barcode';


let BoletoPage = BoletoPage_1 = class BoletoPage {
    constructor(bs, appRef, androidPermissions, device, sms, navParams, toastCtrl, barcodeScan, alertCtrl, modalCtrl, contacts, socialSharing, navCtrl, currencyPipe, loadCtrl, storage, popoverCtrl, printer, ngZone, util, domSanitizer) {
        this.bs = bs;
        this.appRef = appRef;
        this.androidPermissions = androidPermissions;
        this.device = device;
        this.sms = sms;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.barcodeScan = barcodeScan;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.contacts = contacts;
        this.socialSharing = socialSharing;
        this.navCtrl = navCtrl;
        this.currencyPipe = currencyPipe;
        this.loadCtrl = loadCtrl;
        this.storage = storage;
        this.popoverCtrl = popoverCtrl;
        this.printer = printer;
        this.ngZone = ngZone;
        this.util = util;
        this.domSanitizer = domSanitizer;
        this.empleado = new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["Empleado"]();
        this.logo = _util_logo__WEBPACK_IMPORTED_MODULE_22__["LOGO"];
        this.boleto = new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["BoletoMock"]();
        this.ganador = new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["NumeroBoleto"]();
        this.sorteos = [];
        this.originales = [];
        this.numero = '';
        this.keep = true;
        this.continue = false;
        this.boleto_id = -1;
        this.sorteo_id = -1;
        this.isPos = false;
        this.isSending = false;
        this.sorteo = new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["Sorteo"]();
        this.esCopia = false;
        this.clientes = [];
        this.isOpen = true;
        this.preview = false;
        this.factura_nombre = '';
        this.printReceipt = true;
        this.numerosRegulares = [];
        this.numerosJuega3 = [];
        this.numerosFechas = [];
        this.jobs = [];
        this.HR = '';
        this.sendSMS = true;
        this.sendWhatsapp = false;
        this.init();
        this.numberFirst = !this.util.QTY_FIRST;
        this.sendSMS = this.util.SEND_SMS;
        this.sendWhatsapp = this.util.SEND_WHATSAPP;
        this.keep = this.util.KEEP;
        this.continue = this.util.CONTINUE;
        this.bs.getEmpleado().then((emp) => {
            this.empleado = emp;
            console.log(this.empleado);
            this.HR = emp.usuario.tipo_factura == 1 ? '============================' : '***********************************';
        });
        this.numerosRegulares = [...Array(100)].map((_, i) => i < 10 ? '0' + i : i.toString());
        this.numerosJuega3 = [...Array(1000)].map((_, i) => i < 10 ? '00' + i : (i < 100 ? '0' + i : i.toString()));
        for (let i = 1; i <= 12; i++) {
            let n2 = i < 10 ? '0' + i : i.toString();
            for (let j = 1; j <= 31; j++) {
                let n1 = j < 10 ? '0' + j : j.toString();
                this.numerosFechas.push(n1 + n2);
            }
        }
        console.log(this.numerosFechas);
        this.bs.getEmpleado().then(d => {
            this.printReceipt = (!d.usuario.pi && !d.usuario.isadmin) ? false : this.util.PRINT_RECEIPT;
        });
        // sms.send('', '')
        // this.interval = setInterval(() => { this.date = momentTZ().tz('America/Managua').format('DD/MM/YYYY hh:mm:ss A'); console.log(this.date)}, 1000);
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.esCopia = !!this.navParams.get('copia');
            this.boleto = this.navParams.get('boleto') || new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["BoletoMock"]();
            if (this.esCopia)
                this.sorteo_id = this.boleto.sorteo_id;
            let emp;
            try {
                emp = yield this.bs.getEmpleado();
            }
            catch (ex) {
                console.log('HERE');
                return yield this.util.handleError(ex);
            }
            console.log(emp.usuario);
            this.factura_nombre = emp.usuario.factura_nombre;
            console.log('fn', this.factura_nombre);
            if (this.boleto.id == -1) {
                // cc.pais = null;
                // this.boleto.cliente = cc;
                this.boleto.empleado_nombre = emp.primer_nombre + ' ' + emp.primer_apellido;
                this.boleto.empleado_id = emp.id;
                this.bs.get(this.bs.CLIENTE_URL, true).then(data => {
                    this.clientes = (data || []).map((c) => typeof c === 'string' ? c : [c.primer_nombre, c.segundo_nombre, c.primer_apellido, c.segundo_apellido].filter(x => x && String(x).trim()).join(' ').trim());
                    console.log(this.clientes);
                })
                    .catch((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.util.handleError(err); }));
                this.bs.get(this.bs.SORTEO_URL + '/true', true).then(data => {
                    this.originales = data.filter(Boolean);
                    // this.sorteos = data;
                    this.getNext();
                })
                    .catch((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.util.handleError(err); }));
                if (!this.esCopia)
                    this.boleto.cliente_nombre = "";
                // this.qr = await this.getQRBoleto1();
                // this.boleto.id_cliente = cc.id;
            }
            else {
                this.ganador = this.boleto.numeros.find(x => x.iswinner) || new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["NumeroBoleto"]();
            }
        });
    }
    changeTimezone(date, ianatz) {
        // suppose the date is 12:00 UTC
        var invdate = new Date(date.toLocaleString('en-US', {
            timeZone: ianatz
        }));
        // then invdate will be 07:00 in Toronto
        // and the diff is 5 hours
        var diff = date.getTime() - invdate.getTime();
        // so 12:00 in Toronto is 17:00 UTC
        return new Date(date.getTime() - diff); // needs to substract
    }
    horaDe(valor) {
        if (!valor)
            return null;
        if (valor instanceof Date)
            return moment__WEBPACK_IMPORTED_MODULE_7___default()(valor).format('HH:mm:ss');
        const s = String(valor).trim();
        if (s.indexOf('-') > -1) {
            // '1999-01-01T16:59:00.000Z' o '2026-09-29 10:00' -> hora local del equipo
            const m = moment__WEBPACK_IMPORTED_MODULE_7___default()(s);
            if (m.isValid())
                return m.format('HH:mm:ss');
        }
        const r = s.match(/(\d{1,2}):(\d{2})/);
        return r ? ((r[1].length < 2 ? '0' : '') + r[1] + ':' + r[2]) : null;
    }
    getNext() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(this.sorteos);
            const now = this.changeTimezone(new Date(), 'America/Managua');
            let day = moment__WEBPACK_IMPORTED_MODULE_7___default()(now).format('YYYY/MM/DD');
            // solo muestra sorteos dentro de su ventana: desde hora_minimo (inicio) hasta hora (cierre)
            this.sorteos = this.originales.filter(x => {
                const abre = this.horaDe(x.hora_minimo);
                const cierra = this.horaDe(x.hora);
                if (abre && now < new Date(day + ' ' + abre))
                    return false;
                if (cierra && now >= new Date(day + ' ' + cierra))
                    return false;
                return true;
            });
            // console.log(this.sorteos[0]);
            // console.log(now);
            if (this.sorteo_id && this.sorteos.findIndex(x => x.id == this.sorteo_id) != -1) {
                // Boleto copiado: el sorteo de origen sigue abierto, hay que completarlo
                if (this.esCopia && !(this.boleto.juego_id > 0)) {
                    const abierto = this.sorteos.find(x => x.id == this.sorteo_id);
                    if (abierto)
                        yield this.aplicarSorteo(abierto, true);
                }
                return;
            }
            // El sorteo seleccionado esta fuera de su ventana (cerro o todavia no abre):
            // si hay numeros sin imprimir no cambiamos
            // (isValidToAdd() bloquea agregar mas; al terminar la venta se salta al siguiente)
            // En un boleto copiado si hay que saltar a la siguiente hora abierta.
            if (this.boleto.numeros.length > 0 && !this.esCopia)
                return;
            let s;
            if (this.esCopia) {
                // la misma clase de sorteo que el original; si ya paso, la siguiente hora disponible
                s = this.sorteos.find(x => x.sorteo_tipo == this.boleto.sorteo_tipo)
                    || this.sorteos.find(x => x.sorteo_tipo == 'r' || x.sorteo_tipo == 'j2')
                    || this.sorteos[0];
            }
            else {
                s = this.sorteos.find(x => x.sorteo_tipo == 'r' || x.sorteo_tipo == 'j2')
                    || this.sorteos[0];
            }
            if (s) {
                this.sorteo_id = s.id;
                this.sorteo = s;
                if (this.esCopia)
                    yield this.aplicarSorteo(s, true);
            }
            else if (!this.esCopia) {
                this.boleto.juego_id = -1;
                // this.boleto.juego_fecha = -1;
                this.boleto.numeros = [];
            }
        });
    }
    aplicarSorteo(s, conservarNumeros) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!s)
                return;
            this.sorteo = s;
            this.boleto.juego_id = -1;
            if (!conservarNumeros) {
                this.boleto.numeros = [];
                this.boleto.cliente_nombre = '';
                this.boleto.total = 0;
            }
            try {
                let juego = yield this.bs.get(this.bs.JUEGO_URL + '/next/' + s.id, true);
                this.boleto.juego_id = juego.id;
                this.boleto.juego_fecha = juego.fecha;
            }
            catch (err) {
                yield this.util.handleError(err);
            }
            this.boleto.sorteo_id = s.id;
            this.boleto.sorteo_nombre = s.sorteo_nombre;
            this.boleto.grupo_nombre = s.grupo_nombre;
            this.boleto.simbolo_moneda = s.simbolo_moneda;
            this.boleto.factura_label = s.factura_label;
            this.boleto.sorteo_tipo = s.sorteo_tipo;
            this.boleto.grupo_titulo = s.grupo_titulo;
            if (conservarNumeros) {
                this.recalcularNumeros();
                this.boleto.total = this.boleto.numeros.sumBy(x => x.inversion);
            }
        });
    }
    recalcularNumeros() {
        for (const n of this.boleto.numeros || []) {
            const ig = (this.sorteo.inversiones_ganancias || []).find((x) => x.inversion == n.inversion);
            if (ig)
                n.ganancia = ig.tipo == 'Fija' ? ig.ganancia : n.inversion * ig.ganancia;
            else
                n.ganancia = n.inversion * (this.sorteo.ganancia || 0);
            n.iswinner = false;
            n.iscancelled = false;
            n.iscanjeado = false;
        }
    }
    ngOnInit() {
        // let now = moment
    }
    ngOnDestroy() {
        // throw new Error('Method not implemented.');
        this.jobs.forEach((j, i) => {
            j.cancel();
        });
    }
    ionViewWillEnter() {
        this.boleto_id = this.boleto.indice;
        if (this.boleto.id == -1) {
            this.getNext();
            clearInterval(this.interval);
            this.interval = setInterval(() => this.getNext(), 30000);
        }
    }
    ionViewWillLeave() {
        clearInterval(this.interval);
    }
    sorteoChanged(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(evt.detail.value);
            // this.boleto.juego = new Juego();
            this.boleto.juego_id = -1;
            // Al cambiar de sorteo se limpian los numeros; si es una copia se conservan
            if (!this.esCopia)
                this.boleto.numeros = [];
            let index = this.sorteos.findIndex(x => x.id == evt.detail.value);
            if (index > -1)
                yield this.aplicarSorteo(this.sorteos[index], this.esCopia);
        });
    }
    getSumaGanancias() {
        return this.boleto.numeros.sumBy(x => x.ganancia);
    }
    // tempID = 0;
    enviarImprimirBoleto(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.boleto.id == -1) {
                if (this.isSending)
                    return;
                this.ngZone.run(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.isSending = true;
                    let load = yield this.loadCtrl.create({
                        message: 'Realizando venta...'
                    });
                    yield load.present();
                    try {
                        let empleado = yield this.bs.getEmpleado();
                        // let body = new BodyForm();
                        // body.append('boleto', JSON.stringify(this.boleto));
                        const printing = [];
                        if (this.printReceipt)
                            printing.push('Impreso');
                        if (this.sendWhatsapp)
                            printing.push('Whatsapp');
                        if (this.sendSMS)
                            printing.push('SMS');
                        let body = {
                            'boleto': JSON.stringify(this.boleto),
                            'information': JSON.stringify({ printing_methods: printing, device: { os: this.device.platform, manufacturer: this.device.manufacturer, serial: this.device.serial, imei: this.device.uuid, model: this.device.model, version: this.device.version }, app_version: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_24__["environment"].APP_VERSION, user: { id: empleado.usuario.id, nombre: empleado.usuario.nombre } })
                        };
                        this.boleto.total = this.boleto.numeros.sumBy(x => x.inversion);
                        // if (this.sendSMS)
                        // {
                        //     for (let i = 0; i < 300; i++)
                        //   {
                        //     const b = {
                        //       'boleto': JSON.stringify({...this.boleto, cliente_nombre: 'Test-' + i}),
                        //     'information': JSON.stringify({printing_methods: printing, device: {os: this.device.platform, manufacturer: this.device.manufacturer, serial: this.device.serial, imei: this.device.uuid, model: this.device.model, version: this.device.version}, app_version: environment.APP_VERSION, user: {id: empleado.usuario.id, nombre: empleado.usuario.nombre}})
                        //     };
                        //     this.bs.post<BoletoMock>(this.bs.BOLETO_URL, b, true);
                        //   }
                        // }
                        console.log(JSON.stringify(body));
                        this.boleto = yield this.bs.post(this.bs.BOLETO_URL, body, true);
                        this.boleto_id = this.boleto.indice;
                        this.boleto.id = -1;
                        let temp = (yield this.bs.get(this.bs.BASE_URL_API + 'current-settings', true));
                        this.date = temp.time;
                        this.empleado.usuario.tipo_factura = temp.tipo_factura;
                        this.HR = this.empleado.usuario.tipo_factura == 1 ? '============================' : '***********************************';
                        if (this.boleto.cliente_nombre && this.clientes.indexOf(this.boleto.cliente_nombre) == -1)
                            this.clientes.push(this.boleto.cliente_nombre);
                        yield load.dismiss();
                        this.isSending = false;
                        let toast = yield this.toastCtrl.create({
                            message: 'Se vendió el boleto #' + this.boleto_id + ' con éxito',
                            duration: 1500
                        });
                        yield toast.present();
                        if (this.printReceipt)
                            this.prepareToPrint();
                        else if (this.sendSMS || this.sendWhatsapp)
                            this.handleMultimedia();
                        else
                            this.handleNoOption();
                    }
                    catch (err) {
                        yield load.dismiss();
                        let ex = err;
                        if (Number(ex.status) == 400) {
                            let html = "";
                            // window.alert("ERROR");
                            let pasados = ex.message;
                            console.log(ex);
                            for (let i = 0; i < pasados.length; i++) {
                                html += "<p><strong>Número:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\t".concat(pasados[i].numero, "<br>Ingresado:&nbsp; ").concat(pasados[i].ingresado, "<br>Disponible: ").concat(pasados[i].disponible, "<br>" + "<span style='text-align:center'>--------------------</span></strong><p>"); // if (i < pasados.length - 1)
                            }
                            let alert = yield this.alertCtrl.create({
                                header: "No se pudo realizar la venta.",
                                subHeader: "Motivo: ".concat(pasados.length == 1 ? 'El siguiente número ha pasado su límite' : 'Los siguientes números han pasado sus límites', " de restrincción:"),
                                message: html,
                                buttons: ['OK']
                            });
                            // window.alert('HERE');
                            yield alert.present();
                        }
                        else {
                            if (ex.message.indexOf('#') > -1) {
                                const alert = yield this.alertCtrl.create({
                                    header: 'No se pudo realizar la venta',
                                    message: 'Motivo: ' + ex.message,
                                    buttons: [
                                        {
                                            text: 'Ver boleto',
                                            handler: () => {
                                                let id = ex.message.split(' ').find(x => x.startsWith('#'));
                                                if (id) {
                                                    id = id.replace('#', '').replace(',', '').trim();
                                                    // console.log('The id: ', id);
                                                    this.bs.get(this.bs.BOLETO_URL + '/' + id, true)
                                                        .then((b) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                                        let modal = yield this.modalCtrl.create({
                                                            component: BoletoPage_1,
                                                            componentProps: {
                                                                boleto: b
                                                            }
                                                        });
                                                        yield modal.present();
                                                    })).catch(err => this.util.handleError(ex));
                                                }
                                                else
                                                    window.alert('SE PRODUJO UN ERROR');
                                                // this.bs.get(this.bs.BOLETO_URL + '/' + ex.message.split)
                                            }
                                        },
                                        {
                                            text: 'Aceptar',
                                            handler: () => {
                                                console.log('Confirm Okay');
                                            }
                                        }
                                    ]
                                });
                                yield alert.present();
                            }
                            else
                                yield this.util.handleError(err);
                        }
                        this.isSending = false;
                    }
                }));
            }
            else {
                try {
                    let temp = (yield this.bs.get(this.bs.BASE_URL_API + 'current-settings', true));
                    this.date = temp.time;
                    this.empleado.usuario.tipo_factura = temp.tipo_factura;
                    this.HR = this.empleado.usuario.tipo_factura == 1 ? '============================' : '***********************************';
                    if (this.printReceipt)
                        this.prepareToPrint();
                    else if (this.sendWhatsapp || this.sendSMS)
                        this.handleMultimedia();
                    else
                        this.handleNoOption();
                }
                catch (ex) {
                    this.util.handleError(ex ? ex : { message: ex });
                }
            }
        });
    }
    handleMultimedia() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.sendSMS)
                yield this.prepareToSMS();
            if (this.sendWhatsapp)
                this.whatsApp();
            if (!this.sendWhatsapp && !this.sendSMS)
                this.reset();
        });
    }
    addNumero(event) {
        if (!this.isValidToAdd())
            return;
        if (this.cantidad == 0 && this.continue)
            return this.nextNumero();
        else if (this.cantidad == 0)
            return;
        try {
            this.numero = this.validarNumero(this.numero);
        }
        catch (e) {
            return;
        }
        let num = new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["NumeroBoleto"]();
        let index = this.boleto.numeros.findIndex(x => x.numero == this.numero);
        if (index != -1) {
            console.log('HERE');
            this.boleto.numeros[index].inversion += Number(this.cantidad);
            var ig = this.sorteo.inversiones_ganancias.find((x) => x.inversion == this.boleto.numeros[index].inversion);
            console.log(ig);
            if (ig)
                this.boleto.numeros[index].ganancia = ig.tipo == 'Fija' ? ig.ganancia : this.boleto.numeros[index].inversion * ig.ganancia;
            else
                this.boleto.numeros[index].ganancia = this.boleto.numeros[index].inversion * this.sorteo.ganancia;
        }
        else {
            num.inversion = this.cantidad;
            var ig = this.sorteo.inversiones_ganancias.find((x) => x.inversion == num.inversion);
            console.log(ig);
            if (ig)
                num.ganancia = ig.tipo == 'Fija' ? ig.ganancia : num.inversion * ig.ganancia;
            else
                num.ganancia = num.inversion * this.sorteo.ganancia; // num.ganancia = this.cantidad * this.boleto.juego.sorteo.ganancia;
            num.numero = this.numero;
            this.boleto.numeros.push(num);
        }
        // this.boleto.numeros.sort((x, y) => Number(x.numero) > Number(y.numero) ? 1 : -1);
        this.boleto.total = this.boleto.numeros.sumBy(x => x.inversion);
        if (!this.continue)
            this.numero = null;
        else {
            this.nextNumero();
        }
        if (!this.keep) {
            this.cantidad = null;
        }
    }
    eliminarTodos() {
        this.boleto.numeros = [];
        this.boleto.total = 0;
    }
    eliminar(pos) {
        this.boleto.numeros.removeAt(pos);
        this.boleto.total = this.boleto.numeros.sumBy(x => x.inversion);
    }
    nextNumero() {
        let number = Number(this.numero);
        if (this.boleto.sorteo_tipo != 'f') {
            const MAX = 99;
            if (number < MAX)
                number++;
            else
                number = 0;
            let n = number.toString();
            while (n.length < MAX.toString().length)
                n = '0' + n;
            this.numero = n;
        }
        else {
            let fecha = this.numero.toString();
            if (fecha.length == 3)
                fecha = '0' + fecha;
            let first = +fecha.substring(0, 2);
            let second = +fecha.substring(2, 4);
            if (first < 31)
                first++;
            else if (first == 31 && second < 12) {
                first = 1;
                second++;
            }
            else if (second == 12) {
                first = 1;
                second = 1;
            }
            this.numero = (first.toString().length == 1 ? '0' + first.toString() : first.toString()) + (second.toString().length == 1 ? '0' + second.toString() : second.toString());
        }
        let z = document.getElementById('cant');
        z.setFocus();
    }
    close() {
        this.modalCtrl.dismiss();
    }
    openSubMenu(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let venderPorRangoClicked = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
            let scanClicked = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
            let vistaPreviaClicked = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
            let imprimirChanged = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
            let whatsappChanged = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
            let impresoraClicked = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
            let toggleGridChanged = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
            let smsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
            let emp = yield this.bs.getEmpleado();
            let pi = emp.usuario.isadmin || emp.usuario.pi;
            let options = this.boleto.id == -1 ? [
                {
                    name: 'Escanear boleto',
                    icon: 'qr-code-outline',
                    event: scanClicked,
                    type: 'button'
                },
                {
                    name: 'Vender por rango',
                    icon: 'swap-vertical',
                    event: venderPorRangoClicked,
                    type: 'button'
                },
                {
                    name: 'Vista previa',
                    icon: 'eye-outline',
                    event: vistaPreviaClicked,
                    type: 'button'
                },
                {
                    type: 'divider'
                },
                pi ? {
                    name: 'Seleccionar impresora',
                    icon: 'cog-outline',
                    event: impresoraClicked,
                    type: 'button'
                } : null,
                {
                    type: 'divider'
                },
                pi ? {
                    name: 'Imprimir',
                    icon: 'print-outline',
                    type: 'toggle',
                    event: imprimirChanged,
                    value: this.printReceipt
                } : null,
                {
                    name: 'SMS',
                    icon: 'chatbubble-outline',
                    type: 'toggle',
                    event: smsChanged,
                    value: this.sendSMS
                },
                {
                    name: 'Whatsapp',
                    icon: 'logo-whatsapp',
                    type: 'toggle',
                    event: whatsappChanged,
                    value: this.sendWhatsapp
                },
                {
                    type: 'divider'
                },
                {
                    name: 'Número / Cantidad',
                    icon: 'grid-outline',
                    type: 'toggle',
                    event: toggleGridChanged,
                    value: this.numberFirst
                }
            ]
                :
                    [
                        {
                            name: 'Vista previa',
                            icon: 'eye-outline',
                            event: vistaPreviaClicked,
                            type: 'button'
                        },
                        {
                            type: 'divider'
                        },
                        pi ? {
                            name: 'Seleccionar impresora',
                            icon: 'cog-outline',
                            event: impresoraClicked,
                            type: 'button'
                        } : null,
                        {
                            type: 'divider'
                        },
                        pi ? {
                            name: 'Imprimir',
                            icon: 'print-outline',
                            type: 'toggle',
                            event: imprimirChanged,
                            value: this.printReceipt
                        } : null,
                        {
                            name: 'SMS',
                            icon: 'chatbubble-outline',
                            type: 'toggle',
                            event: smsChanged,
                            value: this.sendSMS
                        },
                        {
                            name: 'Whatsapp',
                            icon: 'logo-whatsapp',
                            type: 'toggle',
                            event: whatsappChanged,
                            value: this.sendWhatsapp
                        }
                    ];
            scanClicked.subscribe(() => {
                this.barcodeScan.scan().then((barcodeData) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log('Barcode data', barcodeData);
                    if (barcodeData.cancelled)
                        return;
                    let data = barcodeData.text;
                    data = data.replace('{B', '');
                    try {
                        let numeros = yield this.bs.get(this.bs.BOLETO_URL + '/code/' + data, true);
                        this.boleto.numeros = [];
                        this.keep = false;
                        for (let n of numeros) {
                            this.numero = n.numero;
                            this.cantidad = n.inversion;
                            this.addNumero();
                        }
                    }
                    catch (ex) {
                        yield this.util.handleError(ex);
                    }
                })).catch(err => {
                    console.log('Error', err);
                });
            });
            let sorteo_tipo = this.boleto.sorteo_tipo;
            venderPorRangoClicked.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let modal = yield this.modalCtrl.create({
                    component: _shared_vender_por_rango_vender_por_rango_page__WEBPACK_IMPORTED_MODULE_17__["VenderPorRangoPage"],
                    componentProps: {
                        sorteo_tipo
                    },
                    cssClass: 'select-modal'
                });
                yield modal.present();
                let data = yield (yield modal.onWillDismiss()).data;
                console.log(data);
                if (data && !Object(util__WEBPACK_IMPORTED_MODULE_18__["isNullOrUndefined"])(data.desde)) {
                    this.cantidad = data.cantidad;
                    this.keep = true;
                    let tipo_num = data.tipo_num;
                    if (sorteo_tipo != 'f') {
                        for (let i = Number(data.desde); i <= Number(data.hasta); i++) {
                            if (tipo_num == '1' && i % 2 != 0) {
                                this.numero = i.toString().padStart(2, '0');
                                this.addNumero();
                            }
                            else if (tipo_num == '2' && i % 2 == 0) {
                                this.numero = i.toString().padStart(2, '0');
                                this.addNumero();
                            }
                            else if (tipo_num == '0') {
                                this.numero = i.toString().padStart(2, '0');
                                this.addNumero();
                            }
                        }
                    }
                    else {
                        data.desde = data.desde.toString();
                        data.hasta = data.hasta.toString();
                        while (data.desde.length < 4)
                            data.desde = '0' + data.desde;
                        while (data.hasta.length < 4)
                            data.hasta = '0' + data.hasta;
                        const MIN = +data.desde.substring(2, 4);
                        const MAX = +data.hasta.substring(2, 4);
                        for (let i = MIN; i <= MAX; i++) {
                            for (let j = 1; j <= 31; j++) {
                                let number = (j < 10 ? '0' + j.toString() : j.toString()) + (i < 10 ? '0' + i.toString() : i.toString());
                                if (tipo_num == '1' && +number % 2 != 0) {
                                    this.numero = number;
                                    this.addNumero();
                                }
                                else if (tipo_num == '2' && +number % 2 == 0) {
                                    this.numero = number;
                                    this.addNumero();
                                }
                                else if (tipo_num == '0') {
                                    this.numero = number;
                                    this.addNumero();
                                }
                                if (number == data.hasta)
                                    break;
                            }
                        }
                    }
                }
            }));
            vistaPreviaClicked.subscribe(() => {
                this.content.scrollToTop();
                this.preview = true;
            });
            impresoraClicked.subscribe(() => {
                this.searchBluetooth();
            });
            smsChanged.subscribe(x => {
                this.sendSMS = x;
                this.storage.set('send_sms', x);
                this.util.SEND_SMS = x;
            });
            toggleGridChanged.subscribe((evt) => {
                this.numberFirst = evt;
                this.storage.set('qty_first_v2', !evt);
                this.util.QTY_FIRST = !evt;
                // options.find(x => x.icon == 'grid-outline').name = evt ? 'Test';
            });
            imprimirChanged.subscribe((evt) => {
                this.printReceipt = evt;
                this.storage.set('print_receipt', evt);
                this.util.PRINT_RECEIPT = evt;
            });
            whatsappChanged.subscribe((evt) => {
                this.sendWhatsapp = evt;
                this.storage.set('send_whatsapp', evt);
                this.util.SEND_WHATSAPP = evt;
            });
            let popover = yield this.popoverCtrl.create({
                component: _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_8__["SubMenuPage"],
                event: evt,
                cssClass: 'sub-menu',
                componentProps: {
                    options
                }
            });
            yield popover.present();
            yield popover.onWillDismiss();
        });
    }
    selectCliente(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _clientes_clientes_page__WEBPACK_IMPORTED_MODULE_19__["ClientesPage"],
                componentProps: {
                    searching: true
                }
            });
            yield modal.present();
            let data = (yield modal.onWillDismiss()).data;
            if (data && data.cliente) {
                const c = data.cliente;
                this.boleto.cliente_nombre = [c.primer_nombre, c.segundo_nombre, c.primer_apellido, c.segundo_apellido]
                    .filter(x => x && String(x).trim()).join(' ').trim();
            }
        });
    }
    validarNumero(valor) {
        const n = parseInt((valor == null ? '' : valor).toString().trim().replace(/\D/g, ''), 10);
        if (isNaN(n) || n < 0 || n > 99) {
            throw new Error('Número inválido: debe estar entre 00 y 99');
        }
        return String(n).padStart(2, '0');
    }
    isValidNumber() {
        let n = (this.numero == null ? '' : this.numero).trim().replace(/\D/g, '');
        let first = n.toString().indexOf('-') < 0 && n.toString().indexOf('.') < 0;
        let num = parseInt(n, 10);
        return first && !isNaN(num) && num >= 0 && num <= 99;
    }
    sorteoInactivo() {
        if (this.boleto.id != -1 || !this.sorteo)
            return false;
        const now = this.changeTimezone(new Date(), 'America/Managua');
        const day = moment__WEBPACK_IMPORTED_MODULE_7___default()(now).format('YYYY/MM/DD');
        const abre = this.horaDe(this.sorteo.hora_minimo);
        const cierra = this.horaDe(this.sorteo.hora);
        if (abre && now < new Date(day + ' ' + abre))
            return true;
        if (cierra && now >= new Date(day + ' ' + cierra))
            return true;
        return false;
    }
    isValidToAdd() {
        if (this.sorteoInactivo())
            return false;
        return this.boleto.juego_id != -1 && !Object(util__WEBPACK_IMPORTED_MODULE_18__["isNullOrUndefined"])(this.cantidad) && !Object(util__WEBPACK_IMPORTED_MODULE_18__["isNullOrUndefined"])(this.numero) && (this.continue ? this.cantidad >= 0 : this.cantidad > 0) && this.cantidad.toString().indexOf(".") < 0 && this.isValidNumber();
    }
    // PRINTER/WHATSAPP STUFF //
    print(device, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Device mac: ', device);
            console.log('Data: ', JSON.stringify(data));
            let load = yield this.loadCtrl.create({
                message: 'Imprimiendo boleto...',
            });
            yield load.present();
            this.printer.connectBluetooth(device).subscribe((status) => {
                console.log(status);
                this.printer
                    .printData(data)
                    .then((printStatus) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // console.log(printStatus);
                    // let alert = this.alertCtrl.create({
                    //   title: 'Successful print!',
                    //   buttons: [{
                    //     text: 'Ok',
                    //     handler: () => {
                    //       load.dismiss();
                    //       this.printer.disconnectBluetooth();
                    //     },
                    //   }, ],
                    // });
                    // alert.present();
                    yield load.dismiss();
                    try {
                        yield this.printer.disconnectBluetooth();
                    }
                    catch (error) {
                        yield this.util.presentAlert('Error', 'Error al desconectar la impresora, por favor reiniciar el Bluetooth');
                    }
                    this.handleMultimedia();
                    // if (this.boleto.id != -1) 
                    //   this.modalCtrl.dismiss();
                    // this.navCtrl.navigateRoot('/');
                }))
                    .catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield load.dismiss();
                    //There was an error printing, please try again!
                    yield this.util.presentAlert('Error', 'Error al imprimir.');
                    this.handleMultimedia();
                }));
            }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield load.dismiss();
                //There was an error connecting to the printer, please try again
                yield this.util.presentAlert('Error', 'Error al conectar la impresora.');
                this.handleMultimedia();
            }));
        });
    }
    reset() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.boleto.id != -1)
                return;
            this.ngZone.run(() => {
                this.esCopia = false;
                this.boleto.cliente_nombre = '';
                this.boleto.numeros = [];
                this.boleto.id = -1;
                this.boleto_id = -1;
                this.boleto.total = 0;
                this.date = '';
                // let j = new Juego(this.boleto.juego);
                // let ei = this.boleto.empleado_id;
                // let en = this.boleto.empleado_nombre;
                // let ji = this.boleto.juego_id;
                // let fj = this.boleto.juego_fecha;
                // this.boleto.juego_id =  -1;
                // this.boleto.juego_fecha =  new Date();
                // this.boleto_id = -1;
                // this.boleto.cliente_nombre = "";
                // this.boleto.empleado_id = ei;
                // this.boleto.empleado_nombre = en;
                this.isSending = false;
                this.getNext();
            });
        });
    }
    prepareToSMS() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: `Boleto #` + this.boleto_id,
                    subHeader: 'Celular',
                    backdropDismiss: false,
                    inputs: [
                        {
                            name: 'numero',
                            type: 'tel',
                            placeholder: '0000-0000'
                        },
                    ],
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'danger',
                            handler: () => {
                                if (!this.sendWhatsapp) {
                                    this.util.presentToast('No se pudo enviar el sms, se enviará el boleto por whatsapp', 1200);
                                    this.whatsApp();
                                }
                                resolve('');
                            }
                        },
                        {
                            text: 'Enviar',
                            handler: (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                console.log('Confirm Ok');
                                console.log(e);
                                let numero = e.numero;
                                try {
                                    let emp = yield this.bs.getEmpleado();
                                    this.sms.send('+505 ' + numero, (emp.usuario.factura_nombre ? emp.usuario.factura_nombre + `\n${this.HR}\n` : '')
                                        + `Boleto:  #` + this.boleto_id + '\n'
                                        + 'Fecha:   ' + moment__WEBPACK_IMPORTED_MODULE_7___default()(this.boleto.juego_fecha).format('DD/MM/YYYY') + '\n'
                                        + 'Sorteo:  ' + this.getSorteoNombre() + '\n'
                                        + (!this.boleto.cliente_nombre || (emp.usuario.tipo_factura == 2 && this.boleto.cliente_nombre.toLowerCase() == 'cliente de contado') ? '' : ((emp.usuario.tipo_factura == 1 ? 'Cliente' : 'Apostador') + ': ' + this.boleto.cliente_nombre + '\n'))
                                        + `${this.HR}\n`
                                        + (this.empleado.usuario.tipo_factura == 1 ? 'Números comprados\n\n' : '\n')
                                        + this.boleto.numeros.map(x => x.numero + ' con: ' + x.inversion + ' = ' + x.ganancia + '\n').join('\n') + '\n'
                                        + `${this.HR}\n`
                                        + 'Total: ' + this.currencyPipe.transform(this.boleto.numeros.sumBy(x => x.inversion), this.boleto.simbolo_moneda) + '\n'
                                        + `${this.HR}\n`
                                        + (this.empleado.usuario.tipo_factura == 1 ? ('Revise su boleto; no se aceptan\n'
                                            + 'reclamos después del sorteo.\n') : `Es responsabilidad del cliente revisar que fecha, sorteo y su números sean los correctos`)
                                        + `${this.HR}\n`
                                        + this.date, { replaceLineBreaks: true }).then(d => console.log(d)).catch(err => console.log('err', err));
                                    // window.alert('GOOD');
                                }
                                catch (ex) {
                                }
                                if (!this.sendWhatsapp)
                                    this.reset();
                                resolve('');
                            })
                        }
                    ]
                });
                yield alert.present();
            }));
        });
    }
    prepareToPrint() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*
                let receipt = '';
                receipt += commands.HARDWARE.HW_INIT;
                receipt += commands.TEXT_FORMAT.TXT_4SQUARE;
                receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
                receipt += data.title.toUpperCase();
                receipt += commands.EOL;
                receipt += commands.TEXT_FORMAT.TXT_NORMAL;
                receipt += commands.HORIZONTAL_LINE.HR_58MM;
                receipt += commands.EOL;
                receipt += commands.HORIZONTAL_LINE.HR2_58MM;
                receipt += commands.EOL;
                receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
                receipt += data.text;
                //secure space on footer
                receipt += commands.EOL;
                receipt += commands.EOL;
                receipt += commands.EOL;*/
            //this.receipt = receipt;
            var getSpaces = function getSpaces(n) {
                var x = '';
                for (var i = 0; i < n; i++) {
                    x += ' ';
                }
                return x;
            };
            const encoder = new esc_pos_encoder__WEBPACK_IMPORTED_MODULE_11___default.a();
            const result = encoder.initialize();
            // Sunmi: por defecto la impresora esta en chino (multibyte GB18030).
            // FS . (1C 2E) cierra el multibyte -> modo de 1 byte (Europa),
            // ESC t 10 (1B 74 10) = pagina 16 Windows-1252, y el texto se codifica en CP1252.
            result.raw([0x1c, 0x2e]);
            result.raw([0x1b, 0x74, 0x10]);
            result._codepage = 'windows1252';
            const line = this.util.commands.HORIZONTAL_LINE[this.empleado.usuario.tipo_factura == 1 ? 'HR_58MM' : 'HR2_58MM'];
            var now = new Date();
            var img2 = new Image();
            img2.src = this.logo;
            yield new Promise((resolve, reject) => img2.onload = () => resolve(''));
            // if (this.empleado.usuario.tipo_factura == 2)
            //   result.image(img2, 400, 80);
            result.align('center')
                .raw(this.empleado.usuario.tipo_factura == 1 ? [0x1B, 0x21, 0x10] : [0x1b, 0x21, 0x30])
                .bold(false)
                .line(this.factura_nombre)
                .raw([0x1B, 0x21, 0x03]);
            result.bold(false)
                .size('normal');
            if (this.empleado.usuario.tipo_factura == 2)
                result.newline();
            if (this.empleado.usuario.tipo_factura == 1)
                result.line(line);
            // .align("left")
            result.size('normal');
            if (this.empleado.usuario.tipo_factura == 2) {
                result.align('left')
                    // .raw([0x1B, 0x21, 0x10])
                    .bold(true)
                    .text('#' + this.boleto.indice)
                    .text(getSpaces(32 - 1 - this.boleto.indice.toString().length - this.date.length))
                    .text(this.date);
            }
            result.raw([0x1B, 0x21, 0x10]);
            // .bold(false)
            // .text("Boleto:  #")
            // .bold(false)
            // .text(this.boleto_id.toString())
            // .newline()
            // .bold(false) // .line("                         " + moment(this.boleto.fecha_creado).format("HH:mm:ss"))
            // .text("Fecha:   ")
            // .bold(false)
            // .text(moment(this.boleto.juego_fecha).format("DD/MM/YYYY"))
            // .bold(false)
            // .newline()
            // .text("Sorteo:  ")
            // .bold(false)
            // .text(this.getSorteoNombre())
            // .bold(false)
            // .newline()
            // .bold(false)
            // .newline()
            result.align('left')
                .text(moment__WEBPACK_IMPORTED_MODULE_7___default()(this.boleto.juego_fecha).format('DD/MM/YYYY'))
                .text(getSpaces(32 - moment__WEBPACK_IMPORTED_MODULE_7___default()(this.boleto.juego_fecha).format('DD/MM/YYYY').length - ((_a = this.getSorteoNombre()) === null || _a === void 0 ? void 0 : _a.length)))
                .text(this.getSorteoNombre())
                .newline()
                .raw([0x1B, 0x21, 0x03]).size('normal');
            if (this.boleto.cliente_nombre && !(this.empleado.usuario.tipo_factura == 2 && this.boleto.cliente_nombre.toLocaleLowerCase() == 'cliente de contado')) {
                result.text(this.empleado.usuario.tipo_factura == 1 ? "Cliente: " : "Apostador: ")
                    .bold(false)
                    .text(this.boleto.cliente_nombre)
                    .newline();
            }
            result.align('center')
                .line(line)
                .bold(false)
                .size('normal');
            if (this.empleado.usuario.tipo_factura == 1) {
                result.line('Números comprados')
                    .size('normal')
                    .align('left').line("Número  Inversión  Ganancia").bold(false);
            }
            // .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
            // .line(data.title)
            // .raw(commands.TEXT_FORMAT.TXT_NORMAL)
            // .text(commands.HORIZONTAL_LINE.HR_58MM)
            // .text(commands.HORIZONTAL_LINE.HR2_58MM)
            // .text(data.text)
            // .newline()
            // .raw(commands.TEXT_FORMAT.TXT_4SQUARE)
            // .newline()
            // .newline()
            // .newline()
            this.boleto.numeros = this.boleto.numeros || [];
            result.raw([0x1B, 0x21, 0x10]);
            // if (true) {
            for (var i = 0; i < this.boleto.numeros.length; i++) {
                var d = this.boleto.numeros[i];
                // var n = d.numero + "      ";
                // var n = this.getNumero(d.numero);
                var n = this.getNumero(d.numero);
                n = n + getSpaces(8 - n.length);
                let inv0 = this.currencyPipe.transform(d.inversion, this.boleto.simbolo_moneda);
                let inv = inv0 + getSpaces(11 - inv0.length);
                let gan0 = this.currencyPipe.transform(d.ganancia, this.boleto.simbolo_moneda) || 0;
                let gan = gan0 + getSpaces(10 - gan0.toString().length);
                result.line("".concat(n).concat(inv).concat(gan));
            }
            // }
            // else if (this.empleado.usuario.tipo_factura == 2)
            // {
            //   for (var i = 0; i < this.boleto.numeros.length; i++) {
            //     var d = this.boleto.numeros[i];
            //     var n = d.numero;
            //     let inv0 = this.currencyPipe.transform(d.inversion, this.boleto.simbolo_moneda);
            //     let gan0 = this.currencyPipe.transform(d.ganancia || 0, this.boleto.simbolo_moneda);
            //     result.line(`${n} con ${inv0} = ${gan0}`);
            //   }
            // }
            result.raw([0x1B, 0x21, 0x03]).size('normal');
            result
                .align('center')
                .bold(false)
                .size('normal')
                .line(line)
                .raw([0x1B, 0x21, 0x10])
                .line("Total: " + this.currencyPipe.transform(this.boleto.total, this.boleto.simbolo_moneda));
            result.raw([0x1B, 0x21, 0x03])
                .size('normal');
            if (this.empleado.usuario.tipo_factura == 1) {
                result.line(line);
                result.raw([0x1B, 0x21, 0x10]);
            }
            else {
                result.newline();
            }
            // .size('normal')
            result.line(this.empleado.usuario.tipo_factura == 1 ? "Revise su boleto; no se aceptan\nreclamos después del sorteo." : "Es responsabilidad del cliente\nrevisar que fecha, sorteo y sus\nnúmeros sean los correctos");
            if (this.empleado.usuario.tipo_factura == 1) {
                result.align('left')
                    .raw([0x1B, 0x21, 0x03])
                    .size('normal')
                    .line(line)
                    .bold(false)
                    .raw([0x1B, 0x21, 0x10])
                    .bold(true)
                    .text('#' + this.boleto.indice)
                    .text(getSpaces(32 - 1 - this.boleto.indice.toString().length - this.date.length))
                    .text(this.date);
            }
            result.raw([0x1B, 0x21, 0x10])
                .raw([0x1B, 0x21, 0x03])
                .size('small')
                .align('center')
                .newline();
            if (this.empleado.usuario.tipo_factura == 1) {
                result.newline();
            }
            // .align('center')
            // .qrcode(this.boleto_id + '_' + this.boleto.juego.id + '_' + this.boleto.empleado.id + '_' + this.boleto.cliente.id, '1', 'x  `')
            // .image(img, 400, 80, 'atkinson')
            // .line(this.boleto_id + '_' + this.boleto.juego_id + '_' + this.boleto.empleado_id)
            // .barcode('12345#123#123', 'codabar', 60)
            // .barcode('12345', 'codabar', 60)
            // .barcode(this.boleto_id.toString(), 'code128' as any, 60)
            // .barcode(this.boleto_id + '_' + this.boleto.juego_id, 'code128' as any, 60)
            result.barcode(this.boleto.scan_code, 'code128', 60)
                .newline()
                .newline()
                .newline()
                .cut('partial');
            // .cut();
            // .qrcode(qr, 1, 8, 'h')
            this.mountAlertBt(result.encode());
        });
    }
    // now = () => momentTZ().tz('America/Managua').format('DD/MM/YYYY hh:mm:ss A');
    searchBluetooth() {
        this.printer.enableBluetooth()
            .then(() => {
            this.printer.searchBluetooth()
                .then((devices) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let inputs = [];
                devices.forEach(d => {
                    inputs.push({
                        name: 'printer',
                        value: d.address,
                        label: d.name,
                        type: 'radio',
                        checked: this.util.IMPRESORA_ADDRESS == d.address
                    });
                });
                if (inputs.length == 0)
                    yield this.util.presentAlert('Aviso', 'No hay ningún dispositivo vinculado a este celular.');
                else {
                    let alert = yield this.alertCtrl.create({
                        header: 'Seleccione la impresora',
                        inputs: inputs,
                        buttons: [{
                                text: 'Cancelar',
                                role: 'cancel'
                            }, {
                                text: 'Seleccionar',
                                role: 'ok',
                                handler: (device) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    if (device) {
                                        yield this.storage.set('impresora_address', device);
                                        this.util.IMPRESORA_ADDRESS = device;
                                        let toast = yield this.toastCtrl.create({
                                            message: 'Se configuró la impresora con éxito.',
                                            duration: 1500
                                        });
                                        yield toast.present();
                                    }
                                })
                            }]
                    });
                    yield alert.present();
                }
            }))
                .catch(err => this.util.presentAlert('Error', 'Se produjo un error al buscar los dispositivos.'));
        }).catch(err => {
            this.util.presentAlert('Error', 'Se produjo un error al activar el bluetooth.');
        });
    }
    mountAlertBt(data) {
        this.printer
            .enableBluetooth()
            .then(() => {
            if (this.util.IMPRESORA_ADDRESS == '') {
                this.printer.searchBluetooth()
                    .then((devices) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    let inputs = [];
                    devices.forEach(d => {
                        inputs.push({
                            name: 'printer',
                            value: d.address,
                            label: d.name,
                            type: 'radio',
                        });
                    });
                    if (inputs.length == 0)
                        this.whatsApp();
                    else {
                        let alert = yield this.alertCtrl.create({
                            header: 'Seleccione la impresora',
                            inputs: inputs,
                            buttons: [{
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: () => this.whatsApp()
                                }, {
                                    text: 'Seleccionar',
                                    role: 'ok',
                                    handler: (device) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                        if (device) {
                                            yield this.storage.set('impresora_address', device);
                                            this.util.IMPRESORA_ADDRESS = device;
                                            this.print(device, data);
                                        }
                                        else
                                            this.whatsApp();
                                    })
                                }]
                        });
                        yield alert.present();
                    }
                    // alert('DEVICES: ' + JSON.stringify(devices));
                    // devices.forEach((device) => {
                    //   console.log('Devices: ', JSON.stringify(device));
                    //   alert.addInput({
                    //     name: 'printer',
                    //     value: device.address,
                    //     label: device.name,
                    //     type: 'radio',
                    //   });
                    // });
                    // alert.present();
                }))
                    .catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.util.presentAlert('Error', 'Error al conectar con la impresora.');
                    this.handleMultimedia();
                    // console.log(error);
                    // this.showToast(
                    //   'There was an error connecting the printer, please try again!',
                    // );
                    // this.mountAlertBt(this.receipt);
                }));
            }
            else {
                this.print(this.util.IMPRESORA_ADDRESS, data);
            }
        })
            .catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.util.presentAlert('Error', 'Error al conectar con la impresora se enviará el boleto por whatsapp');
            this.whatsApp();
        }));
    }
    getQRBoleto1() {
        const canvas = document.createElement('canvas');
        const dataURL = bwip_js__WEBPACK_IMPORTED_MODULE_28___default.a
            .toCanvas(canvas, {
            bcid: 'code128',
            text: this.boleto_id + '_' + this.boleto.juego_id + '_' + this.boleto.empleado_id,
            scale: 1,
            height: 1,
            includetext: false,
        })
            .toDataURL('image/png');
        return dataURL;
    }
    // getQRBoleto() {
    //   var qr = this.boleto_id + '_' + this.boleto.juego_id + '_' + this.boleto.empleado_id;
    //         var q = qrcode(1, 'L');
    //         q.addData(qr);
    //         q.make();
    //         return q;
    // }
    whatsApp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var r = document.getElementById('receipt'); // console.log(r);
            // r.remove();
            r.style.margin = '0';
            this.qr = this.getQRBoleto1();
            console.log(this.qr);
            r.style.transform = 'scale(1)';
            setTimeout(() => {
                dom_to_image__WEBPACK_IMPORTED_MODULE_14___default.a.toPng(r, { quality: 1 })
                    .then(d => {
                    setTimeout(() => {
                        r.style.transform = `translateX(-50%) scale(0.5, 0.5)`;
                        console.log(d);
                        this.socialSharing.share('Boleto #' + this.boleto_id, '', d).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            // alert('Todo bien');
                            this.reset();
                        })).catch(err => {
                            this.util.handleError(err.message ? err : { message: err });
                            this.reset();
                        });
                    }, 100);
                });
            }, 100);
        });
    }
    setFocusNumber() {
        let n = document.getElementById('num');
        n.setFocus();
    }
    setFocusCantidad() {
        let n = document.getElementById('cant');
        n.setFocus();
    }
    toggle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isOpen = !this.isOpen;
            console.log('HERE');
        });
    }
    cantidadEnterPressed() {
        if (this.isValidToAdd()) {
            this.addNumero();
            if (!this.keep && !this.numberFirst && !this.continue)
                this.setFocusNumber();
            else if (this.keep)
                this.setFocusNumber();
            else if (this.continue)
                this.setFocusCantidad();
        }
        else if (this.isValidNumber())
            this.setFocusCantidad();
        else
            this.setFocusNumber();
    }
    numeroEnterPressed(evt) {
        if (this.isValidToAdd()) {
            this.addNumero();
            if (!this.keep && this.numberFirst)
                this.setFocusCantidad();
        }
        else if (this.isValidNumber())
            this.setFocusCantidad();
        else
            this.setFocusNumber();
    }
    getSorteoNombre() {
        let hora = moment__WEBPACK_IMPORTED_MODULE_7___default()(this.boleto.juego_fecha).format('hA');
        let dict = {
            '11AM': 'Mañana',
            '12PM': 'Tica Mañana',
            '3PM': 'Tarde',
            '7PM': 'Tica Noche',
            '9PM': 'Noche'
        };
        let day = moment__WEBPACK_IMPORTED_MODULE_7___default()(this.boleto.juego_fecha).isoWeekday();
        let dict2 = {
            '6PM2': 'Martes',
            '6PM6': 'Sábado'
        };
        return this.boleto.factura_label || dict[hora] || dict2[hora + day];
    }
    handleChangeNumber(evt) {
        this.onChangeNumero(evt && evt.target ? evt.target.value : evt);
    }
    onChangeNumero(value) {
        const limpio = (value == null ? '' : value).toString().trim().replace(/\D/g, '').substring(0, 2);
        this.numero = limpio;
        const el = document.getElementById('num');
        if (el && typeof el.value !== 'undefined' && el.value !== limpio)
            el.value = limpio;
    }
    save(event, key) {
        this.util[key] = event.detail.checked;
        this.storage.set(key.toLowerCase(), this.util[key]);
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    generateNumber() {
        if (this.boleto.juego_id == -1)
            return;
        let data = this.numerosRegulares;
        this.numero = data[this.getRandomInt(data.length - 1)];
    }
    getNumero(num) {
        if (this.boleto.sorteo_tipo == 'f') {
            // f means fecha first 2 digits are day and last 2 are month we need to return the first 2 digits as day and last 2 as month in spanish 3 letters
            let day = num.substring(0, 2);
            let month = (+num.substring(2, 4)) - 1;
            const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
            return (+day).toString() + ' ' + months[month];
        }
        return num;
    }
    getTitulo() {
        if (this.boleto.id != -1) {
            return `Boleto #${this.boleto.indice}`;
        }
        const nombre = this.boleto.sorteo_nombre || this.sorteo.nombre || '';
        if (nombre)
            return nombre;
        return this.boleto.grupo_titulo || 'Nuevo Boleto';
    }
    abrirSelectorSorteo() {
        if (this.boleto.id != -1)
            return;
        if (this.sorteoSelect && !this.sorteoSelect.disabled)
            this.sorteoSelect.open();
    }
    handleNoOption() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: `Opción de envio`,
                message: `Por favor selecciona una opción para enviar/imprimir el boleto`,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Impresora',
                        handler: () => this.prepareToPrint()
                    },
                    {
                        text: 'Whatasapp',
                        handler: () => this.whatsApp()
                    },
                    {
                        text: 'SMS',
                        handler: () => this.prepareToSMS()
                    }
                ]
            });
            alert.present();
        });
    }
};
BoletoPage.ctorParameters = () => [
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ApplicationRef"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_26__["AndroidPermissions"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_25__["Device"] },
    { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_23__["SMS"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_20__["BarcodeScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_16__["Contacts"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["CurrencyPipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"] },
    { type: src_app_services_printer_service__WEBPACK_IMPORTED_MODULE_12__["PrinterService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_21__["Util"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["DomSanitizer"] }
];
BoletoPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"],] }],
    sorteoSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['sorteoSelect',] }]
};
BoletoPage = BoletoPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-boleto',
        template: _raw_loader_boleto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_boleto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BoletoPage);



/***/ }),

/***/ "AjnV":
/*!***********************************************************!*\
  !*** ./src/app/pages/ventas-filtro/ventas-filtro.page.ts ***!
  \***********************************************************/
/*! exports provided: VentasFiltroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasFiltroPage", function() { return VentasFiltroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ventas_filtro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ventas-filtro.page.html */ "svMc");
/* harmony import */ var _ventas_filtro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ventas-filtro.page.scss */ "2Dv+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/classes */ "50N5");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/util/util */ "JQC8");








let VentasFiltroPage = class VentasFiltroPage {
    constructor(bs, modalCtrl, util) {
        this.bs = bs;
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.sorteo_tipo = '';
        this.sorteo = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["Sorteo"]();
        this.empleado = { id: -1, nombre: '' };
        this.sorteos = [];
        this.sorteosO = [];
        this.empleados = [];
        this.empleadosO = [];
        this.isAdmin = false;
        this.empleadosCount = 0;
        this.agentes = [];
        this.agente = { id: -1, nombre: '' };
        this.pais_id = null;
        this.turnos = ['10:00 AM', '11:00 AM', '12:50 PM', '03:00 PM', '04:30 PM', '06:00 PM', '07:30 PM', '09:00 PM'];
        this.paises = [
            {
                "id": 1,
                "nombre": "Nicaragüa"
            },
            {
                "id": 2,
                "nombre": "Costa Rica"
            },
            {
                "id": 3,
                "nombre": "Honduras"
            },
            {
                "id": 4,
                "nombre": "Republica Dominicana"
            }
        ];
        this.getAll();
    }
    getAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // this.sorteos = await 
                // this.bs.get<Sorteo[]>(this.bs.SORTEO_URL, true).then(data => {this.sorteos = data.clone(); this.sorteo = this.sorteos.find(x => x.id ==this.sorteo.id) || new Sorteo(); }).catch(async (err: HttpException) => await this.util.handleError(err));;
                let emp = yield this.bs.getEmpleado();
                // if (!emp.usuario.isadmin) return;
                this.isAdmin = emp.usuario.isadmin;
                this.empleados = yield this.bs.get(this.bs.EMPLEADO_URL + `/supervisores`, true);
                if (this.empleados.length > 0)
                    this.empleado = this.empleados.find(x => x.id == this.empleado.id) || { id: -1, nombre: '' };
                if (!this.isAdmin) {
                    this.empleadosCount = emp.empleados.length;
                    this.agentes = emp.empleados.map(x => ({ id: x.id, nombre: x.primer_nombre + ' ' + x.primer_apellido })).sort((x, y) => x.nombre.localeCompare(y.nombre));
                    this.agente = this.agentes.find(x => x.id == this.agente.id) || { id: -1, nombre: '' };
                    return;
                }
                ;
                this.bs.get(this.bs.EMPLEADO_URL, true).then(e => {
                    this.agentes = e.map(x => ({ id: x.id, nombre: x.primer_nombre + ' ' + x.primer_apellido })).sort((x, y) => x.nombre.localeCompare(y.nombre));
                    this.agente = this.agentes.find(x => x.id == this.agente.id) || { id: -1, nombre: '' };
                });
            }
            catch (err) {
                let ex = err;
                this.util.handleError(err);
            }
        });
    }
    ngOnInit() {
    }
    close() {
        this.modalCtrl.dismiss();
    }
    aplicarFiltros(evt) {
        console.log('turno', this.turno);
        this.modalCtrl.dismiss({ empleado: this.empleado, turno: this.turno, numerosSumados: this.numerosSumados, numero: this.numero, boletosDuplicados: this.boletosDuplicados, agente: this.agente, sorteo_tipo: this.sorteo_tipo, pais_id: this.pais_id });
    }
    sorteoChanged(evt) {
        // let id = evt.detail.value;
        // if (this.sorteos.filter(x => x.id == id).length == 2)
        //   this.sorteos.removeAt(this.sorteos.findIndex(x => x.id == id));
        // this.sorteo = this.sorteos.find(x => x.id == id);
    }
    empleadoChanged(evt) {
        // let id = evt.detail.value;
        // if (this.empleados.filter(x => x.id == id).length == 2)
        //   this.empleados.removeAt(this.empleados.findIndex(x => x.id == id));
        // this.empleado = this.empleados.find(x => x.id == id);
        // console.log(this.empleado);
    }
    agenteChanged(evt) {
    }
    limpiar(pos) {
        if (pos == 1)
            this.turno = null;
        else if (pos == 2)
            this.empleado = { id: -1, nombre: '' };
        else if (pos == 4)
            this.agente = { id: -1, nombre: '' };
        else if (pos == 5)
            this.sorteo_tipo = '';
        else if (pos == 6)
            this.pais_id = null;
        else
            this.numero = null;
    }
};
VentasFiltroPage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_7__["Util"] }
];
VentasFiltroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ventas-filtro',
        template: _raw_loader_ventas_filtro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ventas_filtro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VentasFiltroPage);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    ONE_SIGNAL_APP_ID: 'b411c99a-a62f-4b07-a5ad-c4e4eb6d3c8e',
    FIREBASE_SENDER_ID: '636255195788',
    BASE_URL: 'https://api.mosterlot.com',
    APP_VERSION: '2.33.1'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B4BN":
/*!*********************************************************************!*\
  !*** ./src/app/pages/restringir-numeros/restringir-numeros.page.ts ***!
  \*********************************************************************/
/*! exports provided: RestringirNumerosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestringirNumerosPage", function() { return RestringirNumerosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_restringir_numeros_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./restringir-numeros.page.html */ "Ysje");
/* harmony import */ var _restringir_numeros_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restringir-numeros.page.scss */ "ehse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);






let RestringirNumerosPage = class RestringirNumerosPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.numeros_restringidos = [];
    }
    ngOnInit() {
    }
    todosClicked(evt) {
        this.numeros_restringidos.map(x => x.cantidad = this.cantidad);
        this.cantidad = null;
    }
    save() {
        this.modalCtrl.dismiss({ numeros_restringidos: this.numeros_restringidos });
    }
    close() {
        this.modalCtrl.dismiss();
    }
    isValid() {
        return !Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.cantidad) && this.cantidad > 0 && this.cantidad.toString().indexOf('.') == -1;
    }
};
RestringirNumerosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
RestringirNumerosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-restringir-numeros',
        template: _raw_loader_restringir_numeros_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_restringir_numeros_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RestringirNumerosPage);



/***/ }),

/***/ "D4DU":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nuevo-grupo/nuevo-grupo.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]='\"\"'></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">{{grupo.id == -1 ? 'Nuevo grupo' : 'Grupo #' + grupo.id}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button *ngIf='grupo.id > -1' (click)='close()'>\n                <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n            </ion-button>\n            <ion-button (click)='showMenu($event)'>\n                <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n\n    <form #form='ngForm' (ngSubmit)='submit(form)'>\n        <ion-item>\n            <ion-label position='floating'>Nombre</ion-label>\n            <ion-input [(ngModel)]='grupo.nombre' name='nombre'></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position='floating'>Título</ion-label>\n            <ion-input placeholder=\"Titulo...\" [(ngModel)]='grupo.titulo' name='titulo'></ion-input>\n        </ion-item>\n\n        <ion-item [disabled]='grupo.id != -1'>\n            <ion-label>Tipo</ion-label>\n            <ion-select [(ngModel)]='grupo.sorteo_tipo' (ionChange)=\"grupo.recalculate()\"  name='tipo'>\n                <ion-select-option value='r'>\n                    Regular\n                </ion-select-option>\n                <ion-select-option value='j3'>\n                    Juega 3\n                </ion-select-option>\n                <ion-select-option value='f'>\n                    Fechas\n                </ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-button expand='block' style=\"margin-top: 20px;\" type='submit' [disabled]='!isValid()'>\n            {{grupo.id == -1 ? 'Guardar' : 'Actualizar'}}\n            <ion-icon style=\"margin-left: 6px;\" name='save'></ion-icon>\n        </ion-button>\n    </form>\n\n    <ion-list *ngIf='grupo.id > -1 && grupo.sorteos.length > 0'>\n        <ion-list-header>\n            <ion-label>Sorteos</ion-label>\n        </ion-list-header>\n\n        <ion-grid>\n            <ion-row class=\"header\">\n                <ion-col size='2'> ID </ion-col>\n                <ion-col size='5'> Nombre </ion-col>\n                <ion-col size='5'> Hora </ion-col>\n            </ion-row>\n            <ion-row *ngFor='let s of grupo.sorteos'>\n                <ion-col size='2'> {{s.id}} </ion-col>\n                <ion-col size='5'> {{s.nombre}} </ion-col>\n                <ion-col size='5'> {{s.hora | date: 'hh:mm a'}} </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "DVkC":
/*!******************************************************************!*\
  !*** ./src/app/pages/shared/sub-menu/sub-menu-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: SubMenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenuPageRoutingModule", function() { return SubMenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sub_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sub-menu.page */ "YY6p");




const routes = [
    {
        path: '',
        component: _sub_menu_page__WEBPACK_IMPORTED_MODULE_3__["SubMenuPage"]
    }
];
let SubMenuPageRoutingModule = class SubMenuPageRoutingModule {
};
SubMenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubMenuPageRoutingModule);



/***/ }),

/***/ "Do2H":
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _classes_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/classes */ "50N5");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");











let BaseService = class BaseService {
    constructor(httpNative, http, storage, platform, alertCtrl, router, navCtrl) {
        this.httpNative = httpNative;
        this.http = http;
        this.storage = storage;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.BASE_URL = '';
        this.BASE_URL_API = '';
        this.BOLETO_URL = '';
        this.CLIENTE_URL = '';
        this.EMPLEADO_URL = '';
        this.JUEGO_URL = '';
        this.LOGIN_URL = '';
        this.MY_PROFILE_URL = '';
        this.SORTEO_URL = '';
        this.PAIS_URL = '';
        this.PASS_URL = '';
        this.USUARIO_URL = '';
        this.IS_AUTH_URL = '';
        this.GRUPO_URL = '';
        this.NUMERO_BOLETO = '';
        this.ESTABLECER_GANADOR_URL = '';
        this.BALANCE_URL = '';
        this.CIERRE_CAJA_URL = '';
        this.BALANCEO_URL = '';
        this.HISTORIAL_URL = '';
        this.SUPER_GRUPO_URL = '';
        this.SUPPORT_URL = '';
        this.PRESENCIA_URL = '';
        this.empleado = new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["Empleado"]();
        // Espera maxima de respuesta: evita que la app se quede colgada si el servidor no responde
        this.TIMEOUT_GET = 12000;
        this.TIMEOUT_WRITE = 20000;
        this.BASE_URL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].BASE_URL;
        // this.BASE_URL environment.BASE_URL
        this.BASE_URL_API = this.BASE_URL + '/api/';
        this.USUARIO_URL = this.BASE_URL_API + 'usuario';
        this.IS_AUTH_URL = this.USUARIO_URL + '/is-auth';
        this.LOGIN_URL = this.USUARIO_URL + '/login';
        this.PASS_URL = this.USUARIO_URL + '/pass';
        this.SORTEO_URL = this.BASE_URL_API + 'sorteo';
        this.CLIENTE_URL = this.BASE_URL_API + 'cliente';
        this.BOLETO_URL = this.BASE_URL_API + 'boleto';
        this.JUEGO_URL = this.BASE_URL_API + 'juego'; // this.MONEDA_URL = this.BASE_URL_API + 'moneda';
        this.ESTABLECER_GANADOR_URL = this.JUEGO_URL + '/ganador';
        this.PAIS_URL = this.BASE_URL_API + 'pais';
        this.EMPLEADO_URL = this.BASE_URL_API + 'empleado';
        this.MY_PROFILE_URL = this.EMPLEADO_URL + '/my-profile';
        this.GRUPO_URL = this.BASE_URL_API + 'grupo';
        this.NUMERO_BOLETO = this.BASE_URL_API + 'numero-boleto';
        this.HISTORIAL_URL = this.NUMERO_BOLETO + '/historial';
        this.BALANCE_URL = this.EMPLEADO_URL + '/balance';
        this.CIERRE_CAJA_URL = this.BASE_URL_API + 'cierre-caja';
        this.BALANCEO_URL = this.BASE_URL_API + 'balanceo';
        this.SUPER_GRUPO_URL = this.BASE_URL_API + 'super-grupo';
        this.SUPPORT_URL = this.BASE_URL_API + 'support';
        this.PRESENCIA_URL = this.BASE_URL_API + 'presencia';
    }
    isTimeout(err) {
        return !!err && (err.name === 'TimeoutError' || err instanceof rxjs__WEBPACK_IMPORTED_MODULE_10__["TimeoutError"]);
    }
    // Traduce cualquier fallo HTTP a {status, message} entendible para el usuario
    normalizeError(err, isWrite = false) {
        if (!err)
            return { status: 0, message: 'No se pudo conectar con el servidor.' };
        if (this.isTimeout(err))
            return {
                status: 0, message: isWrite
                    ? 'El servidor tardó demasiado en responder. No repitas la operación sin verificar.'
                    : 'El servidor tardó demasiado en responder. Revisa tu conexión e intenta de nuevo.'
            };
        const status = (err.status != null && err.status !== '') ? +err.status : 0;
        // 401/410: sesion invalida. 403: regla de negocio del servidor (se muestra tal cual)
        if (status == 401 || status == 410)
            return { status, message: 'Tu sesión no es válida o expiró. Inicia sesión de nuevo.' };
        if (status == 0)
            return { status: 0, message: 'Sin conexión con el servidor. Revisa tu internet e intenta de nuevo.' };
        let data = err.error;
        if (typeof data == 'string') {
            try {
                data = JSON.parse(data);
            }
            catch (e) {
                data = { message: data };
            }
        }
        const msg = (data && (data.message || data.error))
            || (typeof err.message == 'string' && err.message.indexOf('Http failure') != 0 ? err.message : '')
            || 'No se pudo conectar con el servidor.';
        return { status, message: msg };
    }
    // Para el HTTP nativo (Cordova), que no tiene timeout propio
    withTimeout(promise, ms) {
        return new Promise((resolve, reject) => {
            const t = setTimeout(() => reject({ name: 'TimeoutError', message: 'Timeout has occurred' }), ms);
            promise.then(v => { clearTimeout(t); resolve(v); }, e => { clearTimeout(t); reject(e); });
        });
    }
    getHeaders(nToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let headers = {
                "Content-Type": "application/x-www-form-urlencoded",
                'Cache-control': 'no-cache',
                'Expires': '0',
                'Pragma': 'no-cache',
                'APP_VERSION': src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].APP_VERSION
            };
            if (nToken)
                headers.Authorization = ((yield this.storage.get('token')) || '');
            return headers;
        });
    }
    // async post<T>(url: string, body, nToken: boolean = false): Promise<T>
    // {
    //   // alert(url);
    //   let headers = await this.getHeaders(nToken);
    //   return new Promise(async (resolve, reject) => {
    //     try {
    //       await this.http.setServerTrustMode('nocheck');
    //       let x = await this.http.post(url, body, headers);
    //       resolve(JSON.parse(x.data));
    //       // alert('GOOD ' + JSON.stringify(x.data));
    //     } catch (ex) {
    //       // alert(JSON.stringify(ex.status));
    //       reject(new HttpException(JSON.parse(ex.error).message, ex.status));
    //     }
    //     //.then(data => resolve(data.data)).catch(err => reject(new HttpException(err.message , err.status)))
    //   })
    // }
    // async get<T>(url: string, nToken: boolean = false): Promise<T>
    // {
    //   let headers = await this.getHeaders(nToken);
    //   return new Promise(async (resolve, reject) => {
    //     try {
    //       await this.http.setServerTrustMode('nocheck');
    //       let x = await this.http.get(url, null, headers);
    //       resolve(JSON.parse(x.data));
    //       // alert('GOOD ' + JSON.stringify(x.data));
    //     } catch (ex) {
    //       reject(new HttpException(JSON.parse(ex.error).message, ex.status));
    //     }
    //   });
    // }
    // async put<T>(url: string, body: BodyForm, nToken: boolean = false): Promise<T>
    // {
    //   let headers = await this.getHeaders(nToken);
    //   return new Promise(async (resolve, reject) => {
    //     try {
    //       await this.http.setServerTrustMode('nocheck');
    //       let x = await this.http.put(url, body, headers);
    //       resolve(JSON.parse(x.data));
    //       // alert('GOOD ' + JSON.stringify(x.data));
    //     } catch (ex) {
    //       reject(new HttpException(JSON.parse(ex.error).message, ex.status));
    //     }
    //   });
    // }
    // async delete<T>(url: string, nToken: boolean = false): Promise<T>
    // {
    //   let headers = await this.getHeaders(nToken);
    //   return new Promise(async (resolve, reject) => {
    //     try {
    //       await this.http.setServerTrustMode('nocheck');
    //       let x = await this.http.delete(url, null, headers);
    //       resolve(JSON.parse(x.data));
    //       // alert('GOOD ' + JSON.stringify(x.data));
    //     } catch (ex) {
    //       reject(new HttpException(JSON.parse(ex.error).message, ex.status));
    //     }
    //   });
    // }
    getEmpleado(forced = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.empleado.id != -1 && !forced)
                return this.empleado;
            try {
                this.empleado = yield this.get(this.MY_PROFILE_URL, true);
            }
            catch (ex) {
                throw ex;
            }
            return this.empleado;
        });
    }
    setEmpleado(emp) {
        this.empleado = emp;
    }
    // HEADERS
    getNativeHeader(nToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let headers = {
                "Content-Type": "application/x-www-form-urlencoded",
                'Cache-control': 'no-cache',
                'Expires': '0',
                'Pragma': 'no-cache',
                'APP_VERSION': src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].APP_VERSION
            };
            if (nToken) {
                let token = yield this.storage.get('token');
                if (!token)
                    throw { status: 401, message: 'Tu sesión no es válida o expiró. Inicia sesión de nuevo.' };
                headers.Authorization = token;
            }
            return headers;
        });
    }
    getBrowserHeader(nToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers = headers.append("Content-Type", "application/x-www-form-urlencoded")
                .append('APP_VERSION', src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].APP_VERSION);
            if (nToken) {
                let token = yield this.storage.get('token');
                if (!token)
                    throw { status: 401, message: 'Tu sesión no es válida o expiró. Inicia sesión de nuevo.' };
                headers = headers.append('Authorization', token);
            }
            return headers;
        });
    }
    // POST
    post(url, body, nToken = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // let final ? 
            // console.log(body);
            // console.log(_url);
            return this.isDesktop() ? this.browserPost(url, body, yield this.getBrowserHeader(nToken))
                :
                    this.nativePost(url, body, yield this.getNativeHeader(nToken));
        });
    }
    // Heartbeat: avisa al servidor que este usuario sigue en la aplicacion
    presencia() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return yield this.post(this.PRESENCIA_URL, {}, true);
            }
            catch (e) {
                return null;
            }
        });
    }
    nativePost(url, body, headers) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let x;
            try {
                yield this.httpNative.setServerTrustMode('nocheck');
                x = yield this.withTimeout(this.httpNative.post(url, body, headers), this.TIMEOUT_WRITE);
            }
            catch (ex) {
                throw this.normalizeError(ex, true);
            }
            return this.parseNative(x);
        });
    }
    browserPost(url, body, headers) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // alert('BROWSER POST');
            try {
                return yield this.http.post(url, this.formData(body), { headers })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["timeout"])(this.TIMEOUT_WRITE)).toPromise();
            }
            catch (err) {
                console.log('POST error', url, err);
                throw this.normalizeError(err, true);
            }
        });
    }
    // GET
    get(url, nToken = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.isDesktop() ? this.browserGet(url, yield this.getBrowserHeader(nToken))
                :
                    this.nativeGet(url, yield this.getNativeHeader(nToken));
        });
    }
    nativeGet(url, headers) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let x;
            try {
                yield this.httpNative.setServerTrustMode('nocheck');
                x = yield this.withTimeout(this.httpNative.get(url, null, headers), this.TIMEOUT_GET);
            }
            catch (ex) {
                throw this.normalizeError(ex);
            }
            return this.parseNative(x);
        });
    }
    browserGet(url, headers, attempt = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return yield this.http.get(url, { headers })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["timeout"])(this.TIMEOUT_GET)).toPromise();
            }
            catch (err) {
                console.log('GET error', url, err);
                const e = this.normalizeError(err);
                // Un solo reintento cuando fallo la conexion (sin internet, timeout o servidor reiniciando)
                if (attempt == 0 && e.status == 0)
                    return yield this.browserGet(url, headers, attempt + 1);
                throw e;
            }
        });
    }
    // PUT
    put(url, body, nToken = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // let final ? 
            // console.log(body);
            // let _url = url.join('/');
            // console.log(_url);
            return this.isDesktop() ? this.browserPut(url, body, yield this.getBrowserHeader(nToken))
                :
                    this.nativePut(url, body, yield this.getNativeHeader(nToken));
        });
    }
    nativePut(url, body, headers) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let x;
            try {
                yield this.httpNative.setServerTrustMode('nocheck');
                x = yield this.withTimeout(this.httpNative.put(url, body, headers), this.TIMEOUT_WRITE);
            }
            catch (ex) {
                throw this.normalizeError(ex, true);
            }
            return this.parseNative(x);
        });
    }
    browserPut(url, body, headers) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return yield this.http.put(url, this.formData(body), { headers })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["timeout"])(this.TIMEOUT_WRITE)).toPromise();
            }
            catch (err) {
                console.log('PUT error', url, err);
                throw this.normalizeError(err, true);
            }
        });
    }
    // DELETE
    delete(url, nToken = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.isDesktop() ? this.browserDelete(url, yield this.getBrowserHeader(nToken))
                :
                    this.nativeDelete(url, yield this.getNativeHeader(nToken));
        });
    }
    nativeDelete(url, headers) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let x;
            try {
                yield this.httpNative.setServerTrustMode('nocheck');
                x = yield this.withTimeout(this.httpNative.delete(url, null, headers), this.TIMEOUT_WRITE);
            }
            catch (ex) {
                throw this.normalizeError(ex, true);
            }
            return this.parseNative(x);
        });
    }
    parseNative(x) {
        if (x && typeof x.data != 'string')
            return x.data;
        try {
            return JSON.parse(x.data);
        }
        catch (e) {
            throw { status: 0, message: 'Respuesta inesperada del servidor. Intenta de nuevo.' };
        }
    }
    browserDelete(url, headers) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return yield this.http.delete(url, { headers })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["timeout"])(this.TIMEOUT_WRITE)).toPromise();
            }
            catch (err) {
                console.log('DELETE error', url, err);
                throw this.normalizeError(err, true);
            }
        });
    }
    isDesktop() {
        return true;
    }
    formData(body) {
        return Object.keys(body).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(body[key])).join('&');
    }
};
BaseService.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
BaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaseService);

// import { Injectable } from '@angular/core';


/***/ }),

/***/ "ELmN":
/*!*********************************************************************!*\
  !*** ./src/app/components/dropdown-list/dropdown-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: DropdownListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownListComponent", function() { return DropdownListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dropdown_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dropdown-list.component.html */ "o3NA");
/* harmony import */ var _dropdown_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-list.component.scss */ "n5LM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DropdownListComponent_1;





let DropdownListComponent = DropdownListComponent_1 = class DropdownListComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.original = [];
        this.values = [];
        this._data = this.original.clone();
        this.labelText = '';
        this._disabled = false;
        this.showList = false;
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this._value = '';
        this.showed = false;
    }
    virtualScrollHack() {
        this.cdRef.detectChanges();
        this.virtualScroll['_ctrl'].readReady.emit();
        this.virtualScroll['_ctrl'].writeReady.emit();
    }
    set data(data) {
        // this._data = data.clone();
        this.original = data;
        this.values = data.clone();
        console.log('SET');
    }
    set disabled(disabled) {
        this._disabled = disabled;
    }
    textChanged(evt) {
        let value = evt.target.value.toLowerCase().trim();
        if (value.trim() == '')
            this.values = this.original.clone();
        else
            this.values = this.original.filter(x => x.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }
    get value() {
        return this._value || '';
    }
    set value(v) {
        this._value = v;
        this.onChange(this._value);
        this.onTouched();
    }
    writeValue(obj) {
        this._value = obj || '';
    }
    // Optional
    onSomeEventOccured(newValue) {
        this.value = newValue || '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this._disabled = isDisabled;
    }
    itemHeightFn(item, index) {
        return 40;
    }
    gotFocus(evt) {
        if (this._disabled)
            return;
        this.showList = true;
        this.value = this.value.trim();
        this.textChanged(evt);
    }
    setValue(x) {
        this.value = x;
    }
    closeList(evt) {
        if (this._disabled)
            return;
        this.showList = false;
        setTimeout(() => {
            this.value = this.value.trim();
            this.showed = false;
        }, 100);
    }
    ngOnInit() { }
};
DropdownListComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
DropdownListComponent.propDecorators = {
    virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['virtualScroll', { static: true },] }],
    labelText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DropdownListComponent = DropdownListComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dropdown-list',
        template: _raw_loader_dropdown_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => DropdownListComponent_1),
                multi: true
            }],
        styles: [_dropdown_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DropdownListComponent);



/***/ }),

/***/ "EdnI":
/*!*********************************************************!*\
  !*** ./src/app/pages/cliente/cliente-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ClientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientePageRoutingModule", function() { return ClientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cliente.page */ "YhDx");




const routes = [
    {
        path: '',
        component: _cliente_page__WEBPACK_IMPORTED_MODULE_3__["ClientePage"]
    }
];
let ClientePageRoutingModule = class ClientePageRoutingModule {
};
ClientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClientePageRoutingModule);



/***/ }),

/***/ "GPyu":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/boletos/boletos.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\" [text]='\"\"'></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">Boletos: {{boletos.length }}/{{ originales.length }}</ion-title>\n        <ion-buttons slot=\"end\" class=\"filter\">\n            <ion-button (click)='filtrosClicked($event)' [disabled]='originales.length == 0'>\n                <ion-icon slot=\"icon-only\" name=\"filter\"></ion-icon>\n            </ion-button>\n            <span *ngIf='getCountFilters() > 0'>{{getCountFilters()}}</span>\n            <ion-button (click)='openSubMenu($event)' [disabled]='boletos.length == 0'>\n                <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color='light'>\n        <div class=\"top\">\n            <ion-searchbar (ionInput)='search($event)' [(ngModel)]='searchTerm' placeholder='Buscar...'></ion-searchbar>\n            <div style=\"display: flex; justify-content: flex-end; padding: 0 8px; margin: 10px 0 20px 0;\" (click)='openCalendar()'>\n                <ion-button fill='clear'>{{from_date | date: 'dd/MM/yyyy'}} <ion-icon style=\"margin-left: 4px;\" name=\"calendar-outline\"></ion-icon></ion-button>\n              </div>\n            <!-- <ion-item style=\"padding: 0 8px; margin: 10px 0 20px 0;\">\n                <ion-label><strong>{{dateType == 'single' ? 'Fecha de juego' : 'Rango de fechas'}}:</strong></ion-label>\n                \n                <ion-input class=\"date\" id=\"input-date\" (click)='openCalendar()' [value]=\"from_date | date: 'dd/MM/yyyy' + (dateType == 'single' ? '' : ' - ' + (to_date | date: 'dd/MM/yyyy'))\" [readonly]='true'></ion-input>\n            </ion-item> -->\n            \n        </div>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <!-- <ion-calendar>\n    </ion-calendar> -->\n    <!-- <ion-searchbar (ionInput)='search($event)' [(ngModel)]='searchTerm'></ion-searchbar> -->\n\n\n    <ion-list class=\"list-body\">\n\n        <ion-list-header>\n            <ion-grid>\n                <ion-row class=\"header top\">\n                    <ion-col size='4'>Boleto </ion-col>\n                    <ion-col size='4' style=\"margin-left: -10px;\">Cliente </ion-col>\n                    <ion-col size='4'>Sorteo </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-list-header>\n\n\n\n\n\n        <h2 style=\"color: darkgray;\" class=\"ion-text-center\" *ngIf='boletos.length == 0 && loaded'>{{originales.length == 0 ? 'No hay registros' : 'No se encontraron resultados'}}</h2>\n        <ion-grid class=\"body\" *ngIf='loaded'>\n\n            <!--  -->\n            <ion-virtual-scroll [items]=\"boletos\" approxItemHeight='89' >\n                <ion-item-sliding #sliding *virtualItem=\"let boleto; let i = index\">\n                    <ion-item-options side=\"start\">\n                        <ion-item-option color=\"danger\" *ngIf='(esDueno(boleto) || isAdmin) && !boleto.iscancelled' (click)='cancelarBoleto(sliding, boleto)'>\n                            <ion-icon class=\"icon\" name=\"trash\" slot=\"top\"></ion-icon> Anular\n                        </ion-item-option>\n                    </ion-item-options>\n                    <ion-item class=\"ion-no-padding\" style=\"position: relative;\">\n                        <ion-row class=\"bc\" [ngClass]=\"{'cancelled': boleto.iscancelled, 'winner': isWinner(boleto)}\" (click)='boletoClicked(boleto)'>\n                            <ion-col size='4'> <strong>#{{boleto.indice}}</strong><span class=\"sub\" style=\"color: #000080;\">{{sorteosDict[boleto.sorteo_tipo]}}</span> <span class=\"sub\">{{boleto.fecha | date: 'dd/MM/yyyy'}}</span> <span class=\"sub\">{{boleto.fecha | date: 'hh:mm:ss a'}}</span> </ion-col>\n                            <ion-col size='4' style=\"padding-left: 0;\"> <strong>{{boleto.cliente_nombre}}</strong></ion-col>\n                            <ion-col> <strong>{{boleto.sorteo_nombre}}</strong><span class=\"sub\">{{boleto.juego_fecha | date: 'dd/MM/yyyy'}}</span> <span class=\"sub\">{{boleto.juego_fecha | date: 'hh:mm:00 a'}}</span>                                </ion-col>\n                            <h3 class=\"cancelled\" *ngIf='boleto.iscancelled'>ANULADO</h3>\n                            <h3 class=\"winner\" *ngIf='isWinner(boleto)'>GANADOR<span *ngIf='boleto.numero_ganador'>#{{boleto.numero_ganador}}</span></h3>\n                            <h3 class=\"duplicado\" *ngIf='boletosDuplicados'>POSIBLE DUPLICADO <span>#{{boleto.dindex}}</span></h3>\n                            <!-- <div *ngIf='!canDelete(boleto)' style=\"background: red; position: absolute; right: 0; top: 0; height: 100%; width: 2px;\">\n\n                            </div> -->\n                        </ion-row>\n                    </ion-item>\n                    <ion-item-options side=\"end\">\n                        <ion-item-option color=\"success\" (click)='copiarBoleto(sliding, boleto)'>\n                            <ion-icon class=\"icon\" name=\"copy-outline\" slot=\"top\"></ion-icon> Copiar\n                        </ion-item-option>\n                    </ion-item-options>\n\n                </ion-item-sliding>\n            </ion-virtual-scroll>\n\n\n        </ion-grid>\n    </ion-list>\n    <div *ngIf=\"!loaded\" style=\"padding: 0 12px;\">\n        <div class=\"custom-skeleton\" style=\"display: flex; justify-content: flex-start; border-bottom: 1px solid #00000010;\">\n            <div style=\"width: 28%; margin-right: 16px;\">\n\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n\n\n            <div style=\"width: 28%; margin-right: 24px;\">\n\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n            <div style=\"width: 28%;\">\n\n                <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n        </div>\n        <div class=\"custom-skeleton\" style=\"display: flex; justify-content: flex-start; border-bottom: 1px solid #00000010;\">\n            <div style=\"width: 28%; margin-right: 16px;\">\n\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n\n\n            <div style=\"width: 28%; margin-right: 24px;\">\n\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n            <div style=\"width: 28%;\">\n\n                <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n        </div>\n        <div class=\"custom-skeleton\" style=\"display: flex; justify-content: flex-start; border-bottom: 1px solid #00000010;\">\n            <div style=\"width: 28%; margin-right: 16px;\">\n\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n\n\n            <div style=\"width: 28%; margin-right: 24px;\">\n\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n            <div style=\"width: 28%;\">\n\n                <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n        </div>\n        <div class=\"custom-skeleton\" style=\"display: flex; justify-content: flex-start; border-bottom: 1px solid #00000010;\">\n            <div style=\"width: 28%; margin-right: 16px;\">\n\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n\n\n            <div style=\"width: 28%; margin-right: 24px;\">\n\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n            <div style=\"width: 28%;\">\n\n                <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n        </div>\n        <div class=\"custom-skeleton\" style=\"display: flex; justify-content: flex-start; border-bottom: 1px solid #00000010;\">\n            <div style=\"width: 28%; margin-right: 16px;\">\n\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n\n\n            <div style=\"width: 28%; margin-right: 24px;\">\n\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n            <div style=\"width: 28%;\">\n\n                <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n        </div>\n        <div class=\"custom-skeleton\" style=\"display: flex; justify-content: flex-start; border-bottom: 1px solid #00000010;\">\n            <div style=\"width: 28%; margin-right: 16px;\">\n\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n\n\n            <div style=\"width: 28%; margin-right: 24px;\">\n\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n            <div style=\"width: 28%;\">\n\n                <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n        </div>\n        <div class=\"custom-skeleton\" style=\"display: flex; justify-content: flex-start; border-bottom: 1px solid #00000010;\">\n            <div style=\"width: 28%; margin-right: 16px;\">\n\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n\n\n            <div style=\"width: 28%; margin-right: 24px;\">\n\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n            <div style=\"width: 28%;\">\n\n                <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n        </div>\n        <div class=\"custom-skeleton\" style=\"display: flex; justify-content: flex-start; border-bottom: 1px solid #00000010;\">\n            <div style=\"width: 28%; margin-right: 16px;\">\n\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n\n\n            <div style=\"width: 28%; margin-right: 24px;\">\n\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n            <div style=\"width: 28%;\">\n\n                <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n        </div>\n    </div>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar color='light'>\n        <ion-grid>\n            <ion-row class='header'>\n                <ion-col size='4'>\n                    Total vendido\n                </ion-col>\n                <ng-container *ngIf='vb'>\n                    <ion-col size='4'>\n                        Total pagado\n                    </ion-col>\n                    <ion-col size='4'>\n                        Total balance\n                    </ion-col>\n                </ng-container>\n            </ion-row>\n\n            <ion-row>\n                <ion-col size='4'>\n                    {{totalInversion | currency: 'C$'}}\n                </ion-col>\n               <ng-container *ngIf='vb'>\n                    <ion-col size='4'>\n                        {{totalPagado | currency: 'C$'}}\n                    </ion-col>\n                    <ion-col size='4' [ngClass]=\"{'negative': totalBalance < 0}\">\n                        {{abs(totalBalance) | currency: 'C$'}}\n                    </ion-col>\n               </ng-container>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "GqWa":
/*!***********************************!*\
  !*** ./src/app/util/clipboard.ts ***!
  \***********************************/
/*! exports provided: Clipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
class Clipboard {
}


/***/ }),

/***/ "Gqu5":
/*!*********************************************************!*\
  !*** ./src/app/pages/nuevo-grupo/nuevo-grupo.module.ts ***!
  \*********************************************************/
/*! exports provided: NuevoGrupoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoGrupoPageModule", function() { return NuevoGrupoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nuevo_grupo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nuevo-grupo-routing.module */ "yCpb");
/* harmony import */ var _nuevo_grupo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nuevo-grupo.page */ "HYJm");







let NuevoGrupoPageModule = class NuevoGrupoPageModule {
};
NuevoGrupoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nuevo_grupo_routing_module__WEBPACK_IMPORTED_MODULE_5__["NuevoGrupoPageRoutingModule"]
        ],
        declarations: [_nuevo_grupo_page__WEBPACK_IMPORTED_MODULE_6__["NuevoGrupoPage"]]
    })
], NuevoGrupoPageModule);



/***/ }),

/***/ "HYJm":
/*!*******************************************************!*\
  !*** ./src/app/pages/nuevo-grupo/nuevo-grupo.page.ts ***!
  \*******************************************************/
/*! exports provided: NuevoGrupoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoGrupoPage", function() { return NuevoGrupoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nuevo_grupo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nuevo-grupo.page.html */ "D4DU");
/* harmony import */ var _nuevo_grupo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nuevo-grupo.page.scss */ "6x8l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/classes */ "50N5");
/* harmony import */ var _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/sub-menu/sub-menu.page */ "YY6p");
/* harmony import */ var _restringir_numeros_restringir_numeros_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../restringir-numeros/restringir-numeros.page */ "B4BN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/util/util */ "JQC8");











let NuevoGrupoPage = class NuevoGrupoPage {
    constructor(bs, navCtrl, modalCtrl, popoverCtrl, loadCtrl, util) {
        this.bs = bs;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.loadCtrl = loadCtrl;
        this.util = util;
        this.grupo = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["Grupo"]();
    }
    ngOnInit() {
    }
    showMenu(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let restringirNumerosClicked = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
            let options = [
                {
                    name: 'Restringir números',
                    icon: 'lock-closed',
                    event: restringirNumerosClicked,
                    type: 'button'
                }
            ];
            // {
            //   name: 'Restringir números',
            //   icon: 'lock-closed',
            //   event: restringirNumerosClicked
            // }
            restringirNumerosClicked.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let modal = yield this.modalCtrl.create({
                    component: _restringir_numeros_restringir_numeros_page__WEBPACK_IMPORTED_MODULE_6__["RestringirNumerosPage"],
                    componentProps: {
                        numeros_restringidos: this.grupo.numeros_restringidos.clone()
                    }
                });
                yield modal.present();
                let data = (yield modal.onDidDismiss()).data;
                if (data && data.numeros_restringidos) {
                    this.grupo.numeros_restringidos = data.numeros_restringidos;
                }
            }));
            let popover = yield this.popoverCtrl.create({
                component: _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_5__["SubMenuPage"],
                event: evt,
                cssClass: 'sub-menu',
                showBackdrop: true,
                componentProps: {
                    options
                }
            });
            yield popover.present();
            // await popover.dismiss();
        });
    }
    close() {
        this.modalCtrl.dismiss();
    }
    submit(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isValid())
                return;
            const loading = yield this.loadCtrl.create({
                message: this.grupo.id == -1 ? 'Creando grupo...' : 'Actualizando grupo...'
            });
            yield loading.present();
            setTimeout(() => {
                loading.message = 'Calculando límites de grupos y numerones...';
            }, 2000);
            try {
                let body = {
                    grupo: JSON.stringify(this.grupo)
                };
                let g = yield this.bs.post(this.bs.GRUPO_URL, body, true);
                let msg = this.grupo.id == -1 ? 'Grupo creado con id #' + g.id : 'Grupo modificado con éxito';
                yield loading.dismiss();
                yield this.util.presentAlert('Mensaje', msg);
                if (this.grupo.id == -1)
                    this.navCtrl.pop();
                else
                    this.modalCtrl.dismiss({ grupo: g });
            }
            catch (ex) {
                yield loading.dismiss();
                this.util.handleError(ex);
            }
        });
    }
    isValid() {
        return this.grupo.nombre.trim() != '';
    }
};
NuevoGrupoPage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_10__["Util"] }
];
NuevoGrupoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nuevo-grupo',
        template: _raw_loader_nuevo_grupo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nuevo_grupo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NuevoGrupoPage);



/***/ }),

/***/ "Hiyg":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sorteo/sorteo.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]='\"\"'></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">{{sorteo.id == -1 ? 'Nuevo sorteo' : 'Sorteo #' + sorteo.id}}</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button *ngIf='sorteo.id > -1' (click)='close()'>\n                <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n            </ion-button>\n            <ion-button (click)='showMenu($event)'>\n                <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n    <form #form='ngForm' (ngSubmit)='submit(form)'>\n        \n        <ion-item>\n            <ion-label position=\"floating\">Nombre del sorteo</ion-label>\n            <ion-input name='nombre' [(ngModel)]=\"sorteo.nombre\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Nombre de la factura</ion-label>\n            <ion-input name='factura' [(ngModel)]=\"sorteo.factura_label\"></ion-input>\n            \n        </ion-item>\n        <ion-item>\n            <ion-label>Hora de inicio</ion-label>\n            <ion-datetime [cancelText]='\"Cancelar\"' [doneText]='\"Seleccionar\"' [(ngModel)]='model1' value='00:00' name='hora1' (ionChange)='timeChanged1($event)' displayFormat=\"hh:mm A\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-label>Hora de fin</ion-label>\n            <ion-datetime  [cancelText]='\"Cancelar\"' [doneText]='\"Seleccionar\"' [(ngModel)]='model' value='00:00' name='hora' (ionChange)='timeChanged($event)' displayFormat=\"hh:mm A\"></ion-datetime>\n        </ion-item>\n        <ion-item style=\"display: flex; justify-content: space-between;\">\n            <ion-label style=\"max-width: max-content;\">País</ion-label>\n            <ion-select name='pais' [cancelText]='\"Cancelar\"' [okText]='\"Seleccionar\"' [disabled]='paises.length == 0' style=\"min-width: min-content; margin-left: auto;\" interface=\"action\" [(ngModel)]='sorteo.pais' (ionChange)='paisChanged($event)' [placeholder]=\"sorteo.id == -1 ? 'Selecione un país' : sorteo.pais.nombre + ' - ' + sorteo.pais.moneda.simbolo\"\n                [value]='sorteo.pais'>\n                <!-- <ion-select-option *ngFor='let pais of paises' [value]='pais'>{{pais.nombre}} - {{pais.moneda.simbolo}} </ion-select-option> -->\n                <!-- <ion-select-option *ngIf='sorteo.id != -1' selected='true'>{{sorteo.pais.nombre}}</ion-select-option> -->\n\n                <ion-select-option *ngFor='let pais of paises' [value]='pais'>{{pais.nombre}} - {{pais.moneda.simbolo}}</ion-select-option>\n                <!-- <ion-select-option *ngIf='paises.length == 0 && sorteo.pais.id != -1' [value]='sorteo.pais'>{{sorteo.pais.nombre}} - {{sorteo.pais.moneda.simbolo}}</ion-select-option> -->\n            </ion-select>\n        </ion-item>\n\n        <ion-item style=\"display: flex; justify-content: space-between;\">\n            <ion-label style=\"max-width: max-content;\">Grupo</ion-label>\n            <ion-select name='grupo' [cancelText]='\"Cancelar\"' [okText]='\"Seleccionar\"' [disabled]='grupos.length == 0' style=\"min-width: min-content; margin-left: auto;\" interface=\"action\" [(ngModel)]='sorteo.grupo' (ionChange)='grupoChanged($event)' [placeholder]=\"sorteo.id == -1 ? 'Opcional' : sorteo.grupo.nombre\"\n                [value]='sorteo.grupo'>\n                <!-- <ion-select-option *ngFor='let pais of paises' [value]='pais'>{{pais.nombre}} - {{pais.moneda.simbolo}} </ion-select-option> -->\n                <!-- <ion-select-option *ngIf='sorteo.id != -1' selected='true'>{{sorteo.pais.nombre}}</ion-select-option> -->\n\n                <ion-select-option *ngFor='let grupo of grupos' [value]='grupo'>{{grupo.nombre}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Ganancia</ion-label>\n            <ion-input name='ganacia' [(ngModel)]=\"sorteo.ganancia\"></ion-input>\n        </ion-item>\n        <ion-list style=\"margin-top: 20px;\">\n            <ion-list-header>\n                <ion-label>Días del sorteo</ion-label>\n            </ion-list-header>\n            <ion-item>\n                <ion-label>Lunes</ion-label>\n                <ion-toggle name='lunes' slot=\"end\" [(ngModel)]=\"sorteo.lunes\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n                <ion-label>Martes</ion-label>\n                <ion-toggle name='martes' slot=\"end\" [(ngModel)]=\"sorteo.martes\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n                <ion-label>Miércoles</ion-label>\n                <ion-toggle name='miercoles' slot=\"end\" [(ngModel)]=\"sorteo.miercoles\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n                <ion-label>Jueves</ion-label>\n                <ion-toggle name='jueves' slot=\"end\" [(ngModel)]=\"sorteo.jueves\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n                <ion-label>Viernes</ion-label>\n                <ion-toggle name='viernes' slot=\"end\" [(ngModel)]=\"sorteo.viernes\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n                <ion-label>Sábado</ion-label>\n                <ion-toggle name='sabado' slot=\"end\" [(ngModel)]=\"sorteo.sabado\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n                <ion-label>Domingo</ion-label>\n                <ion-toggle name='domingo' slot=\"end\" [(ngModel)]=\"sorteo.domingo\"></ion-toggle>\n            </ion-item>\n        </ion-list>\n\n        <ion-list style=\"margin-top: 20px;\" *ngIf='isAdmin && usuarios.length > 0'>\n            <ion-list-header>\n                <ion-label>Lista de usuarios</ion-label>\n                <!-- <ion-searchbar></ion-searchbar> -->\n            </ion-list-header>\n            <ion-item *ngFor='let usuario of usuarios; let i = index'>\n                <ion-label>{{usuario.nombre}}</ion-label>\n                <ion-toggle [name]='usuario.nombre' slot=\"end\" [(ngModel)]=\"usuario.seleccionado\"></ion-toggle>\n            </ion-item>\n\n        </ion-list>\n\n\n      \n\n\n    </form>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <div class=\"btn-container\" style=\"margin: 0 !important; padding: 0 16px !important;\" *ngIf='isAdmin'>\n            <ion-button type='submit' (click)=\"submit(form)\" [disabled]='!isValid()'>{{sorteo.id == -1 ? 'Guardar' : 'Actualizar'}}\n                <ion-icon name=\"save\"></ion-icon>\n            </ion-button>\n\n\n        </div>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "Ia8R":
/*!*****************************************************************!*\
  !*** ./src/app/pages/detalle-balance/detalle-balance.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetalleBalancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleBalancePageModule", function() { return DetalleBalancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detalle_balance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalle-balance-routing.module */ "Z8iu");
/* harmony import */ var _detalle_balance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalle-balance.page */ "6ASw");







let DetalleBalancePageModule = class DetalleBalancePageModule {
};
DetalleBalancePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalle_balance_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetalleBalancePageRoutingModule"]
        ],
        declarations: [_detalle_balance_page__WEBPACK_IMPORTED_MODULE_6__["DetalleBalancePage"]]
    })
], DetalleBalancePageModule);



/***/ }),

/***/ "Iz4z":
/*!*************************************************!*\
  !*** ./src/app/pages/clientes/clientes.page.ts ***!
  \*************************************************/
/*! exports provided: ClientesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPage", function() { return ClientesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_clientes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./clientes.page.html */ "x/SL");
/* harmony import */ var _clientes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientes.page.scss */ "l1H3");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/base.service */ "Do2H");
/* harmony import */ var _classes_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../classes/classes */ "50N5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cliente_cliente_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cliente/cliente.page */ "YhDx");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/util/util */ "JQC8");









let ClientesPage = class ClientesPage {
    constructor(bs, alertCtrl, modalCtrl, navCtrl, util) {
        this.bs = bs;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.util = util;
        this.searchTerm = '';
        this.originales = [];
        this.clientes = null;
        this.searching = false;
        this.loaded = false;
        this.getClientes();
        // console.log(bs.BASE_URL);
    }
    ngOnInit() {
    }
    getClientes() {
        this.bs.get(this.bs.CLIENTE_URL, true).then(data => { this.originales = data.clone(); this.clientes = data.clone(); })
            .catch((err) => this.util.handleError(err));
    }
    getIniciales(cliente) {
        if (cliente.id == 1)
            return 'CD';
        return cliente.primer_nombre.toUpperCase().substring(0, 1) + cliente.primer_apellido.toUpperCase().substring(0, 1);
    }
    getNombre(cliente) {
        return cliente.primer_nombre + " " + cliente.primer_apellido;
    }
    search(evt) {
        let term = evt.target.value || '';
        term = term.trim().toLowerCase();
        if (term.trim() == '')
            this.clientes = this.originales.clone();
        else if (term.indexOf("#") >= 0)
            this.clientes = this.originales.filter(c => c.id.toString().indexOf(term.replace("#", "").split(" ").join("")) >= 0);
        else
            this.clientes = this.originales.filter(c => (c.primer_nombre.trim().toLocaleLowerCase() + " " + c.primer_apellido.trim().toLowerCase()).indexOf(term) > -1);
    }
    nuevoCliente() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _cliente_cliente_page__WEBPACK_IMPORTED_MODULE_7__["ClientePage"],
                componentProps: {
                    cliente: new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["Cliente"]()
                }
            });
            yield modal.present();
            let data = (yield modal.onDidDismiss()).data;
            if (data && data.cliente) {
                this.originales.push(new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["Cliente"](data.cliente));
                this.search({ target: { value: this.searchTerm } });
            }
        });
    }
    clienteClicked(cliente) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.searching) {
                this.modalCtrl.dismiss({ cliente });
            }
            else {
                let modal = yield this.modalCtrl.create({
                    component: _cliente_cliente_page__WEBPACK_IMPORTED_MODULE_7__["ClientePage"],
                    componentProps: {
                        cliente: new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["Cliente"](cliente)
                    }
                });
                yield modal.present();
                let data = (yield modal.onDidDismiss()).data;
                if (data && data.cliente) {
                    let c = new _classes_classes__WEBPACK_IMPORTED_MODULE_4__["Cliente"](data.cliente);
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
    eliminarCliente(cliente) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(cliente);
            const alert = yield this.alertCtrl.create({
                header: `Eliminar Cliente #${cliente.id}`,
                message: `¿Estás seguro que deseas eliminar a <strong>${cliente.primer_nombre} ${cliente.primer_apellido}</strong>?`,
                buttons: [{
                        role: 'cancel',
                        text: 'No',
                        cssClass: 'danger'
                    }, {
                        role: 'ok',
                        text: 'Si',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            try {
                                yield this.bs.delete(this.bs.CLIENTE_URL + '/' + cliente.id, true);
                                this.originales.removeBy(c => c.id == cliente.id);
                                this.search({ target: { value: this.searchTerm } });
                                setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    yield this.util.presentAlert('Mensaje', 'Cliente eliminado con éxito');
                                }), 1);
                            }
                            catch (err) {
                                let ex = err;
                                this.util.handleError(ex);
                            }
                        })
                    }]
            });
            yield alert.present();
        });
    }
};
ClientesPage.ctorParameters = () => [
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_8__["Util"] }
];
ClientesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-clientes',
        template: _raw_loader_clientes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_clientes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClientesPage);



/***/ }),

/***/ "J4PS":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/set-ganancias/set-ganancias.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-title class=\"center\">Establecer ganancias</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)='close()'>\n                <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n            </ion-button>\n            <ion-button (click)='save()'>\n                <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-toolbar color='light' style='padding-bottom: 20px;'>\n    <div class=\"inline\">\n        <ion-item class=\"no-inner-padding\" color=\"transparent\" style=\"padding: 0;\">\n            <ion-label position=\"stacked\">Cantidad:</ion-label>\n            <!-- <ion-input [(ngModel)]='cantidad' type=\"number\"   oninput=\"event.target.value = event.target.value.replace('.','');\"></ion-input> -->\n            <!-- <ion-input #input type=\"number\" min=\"0\" inputmode=\"numeric\" [(ngModel)]=\"cantidad\" pattern=\"[0-9]\" required='true' placeholder=\"Access Code\"></ion-input> -->\n            <ion-input type=\"number\" [(ngModel)]='cantidad'></ion-input>\n        </ion-item>\n        <!-- <ion-item color=\"transparent\" class=\"check\" lines='none'>      <ion-label>Todos</ion-label>      <ion-checkbox [(ngModel)]='todos' (ionChange)='todosChanged($event)' slot=\"end\"></ion-checkbox>    </ion-item> -->\n        <ion-item color=\"transparent\" style=\"padding: 0;\">\n            <ion-label position=\"stacked\">Tipo de ganancia</ion-label>\n            <!-- <ion-input [(ngModel)]='cantidad' type=\"number\"   oninput=\"event.target.value = event.target.value.replace('.','');\"></ion-input> -->\n            <!-- <ion-input #input type=\"number\" min=\"0\" inputmode=\"numeric\" [(ngModel)]=\"cantidad\" pattern=\"[0-9]\" required='true' placeholder=\"Access Code\"></ion-input> -->\n            <!-- <ion-input type=\"number\" [(ngModel)]='cantidad' (ngModelChange)='changed($event)' inputmode=\"numeric\"></ion-input> -->\n            <!-- <ion-checkbox></ion-checkbox> -->\n            <ion-select style=\"min-width: min-content; margin-left: auto;\" interface=\"action\" placeholder=\"Seleciona un tipo\" [(ngModel)]='tipo'>\n                <ion-select-option value='Fija'>Fija</ion-select-option>\n                <ion-select-option value='Multiplicada'>Multiplicada</ion-select-option>\n            </ion-select>\n        </ion-item>\n    </div>\n    <div class=\"inline\">\n        <!-- <ion-item color=\"transparent\" class=\"check\" lines='none'>      <ion-label>Todos</ion-label>      <ion-checkbox [(ngModel)]='todos' (ionChange)='todosChanged($event)' slot=\"end\"></ion-checkbox>    </ion-item> -->\n        <ion-item class=\"no-inner-padding\" color=\"transparent\" style=\"padding: 0;\">\n            <ion-label position=\"stacked\">Ganancia <span *ngIf='tipo'>({{tipo}})</span></ion-label>\n            <!-- <ion-input [(ngModel)]='cantidad' type=\"number\"   oninput=\"event.target.value = event.target.value.replace('.','');\"></ion-input> -->\n            <!-- <ion-input #input type=\"number\" min=\"0\" inputmode=\"numeric\" [(ngModel)]=\"cantidad\" pattern=\"[0-9]\" required='true' placeholder=\"Access Code\"></ion-input> -->\n            <ion-input type=\"number\" [(ngModel)]='ganancia'></ion-input>\n        </ion-item>\n        <ion-button [disabled]='!isValid()' (click)='addGanancia($event)'> {{getText()}}\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-button>\n    </div>\n</ion-toolbar>\n<ion-content class=\"ion-padding\">\n    <h2 class=\"ion-text-center\" style=\"font-weight: bold; color: gray;\" *ngIf='inversiones_ganancias.length == 0'>No hay registros!!!</h2>\n    <ion-list>\n        <!-- <div class=\"inline\" *ngFor=\"let n of numeros_cantidades\">      <ion-item style=\"width: calc(100% - 88px);\">        <ion-label style=\"font-weight: bold;\">{{n.numero}}: </ion-label>                <ion-input [(ngModel)]='n.cantidad'></ion-input>      </ion-item>        <ion-item style=\"margin-left: -17px; margin-top: 1px; --padding-start: 0\">          <ion-label style=\"font-weight: bold; margin-right: 10px;\">Veces </ion-label>          <ion-checkbox slot=\"end\" [(ngModel)]='n.isMult'></ion-checkbox>      </ion-item>    </div> -->\n        <ion-grid id=\"grid\" *ngIf='inversiones_ganancias.length > 0'>\n            <ion-row class=\"header\">\n                <ion-col size='3'>\n                    <p>Inversión</p>\n                </ion-col>\n                <ion-col size='3'>\n                    <p>Ganancia</p>\n                </ion-col>\n                <ion-col size='4'>\n                    <p>Tipo</p>\n                </ion-col>\n                <ion-col>\n                    <ion-icon style=\"color: rgb(191, 29, 29); font-size: 20px;\" (click)='inversiones_ganancias = []' name=\"trash\"></ion-icon>\n                </ion-col>\n            </ion-row>\n            <!-- {{1000|currency:'C$':true:'1.2-2'}} -->\n            <div class=\"body\" id=\"nc-body\" [ngStyle]=\"{'overflow': inversiones_ganancias.length == 0 ? 'hidden' : 'auto'}\">\n                <!-- <p *ngIf='cantidades_ganancias.length == 0' style=\"margin-top: 50px; font-weight: bold; color: gray; font-size: 30px; transform: rotate(-30deg); text-align: center;\">No hay números</p> -->\n                <ion-row *ngFor='let cg of inversiones_ganancias; let i = index;'>\n                    <ion-col size='3'>\n                        <p>{{cg.inversion}}</p>\n                    </ion-col>\n                    <ion-col size='3'>\n                        <p>{{cg.ganancia}}</p>\n                    </ion-col>\n                    <ion-col size='4'>\n                        <p>{{cg.tipo}}</p>\n                    </ion-col>\n                    <ion-col>\n                        <ion-icon style=\"color: rgb(191, 29, 29);\" (click)='inversiones_ganancias.removeAt(i)' name=\"trash\"></ion-icon>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-grid>\n    </ion-list>\n</ion-content>");

/***/ }),

/***/ "JQC8":
/*!******************************!*\
  !*** ./src/app/util/util.ts ***!
  \******************************/
/*! exports provided: Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
//commands based on https://github.com/humbertopiaia/escpos-commands-js/blob/master/src/commands.js





let Util = class Util {
    constructor(alertCtrl, toastCtrl, storage, navCtrl, platform, oneSignal) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.commands = {
            LF: [0x0a],
            ESC: [0x1b],
            FS: [0x1c],
            GS: [0x1d],
            US: [0x1f],
            FF: [0x0c],
            DLE: [0x10],
            DC1: [0x11],
            DC4: [0x14],
            EOT: [0x04],
            NUL: [0x00],
            //EOL: [\n],
            HORIZONTAL_LINE: {
                HR_58MM: '================================',
                HR2_58MM: '********************************'
            },
            FEED_CONTROL_SEQUENCES: {
                CTL_LF: [0x0a],
                CTL_FF: [0x0c],
                CTL_CR: [0x0d],
                CTL_HT: [0x09],
                CTL_VT: [0x0b],
            },
            LINE_SPACING: {
                LS_DEFAULT: [0x1b, 0x32],
                LS_SET: [0x1b, 0x33]
            },
            HARDWARE: {
                HW_INIT: [0x1b, 0x40],
                HW_SELECT: [0x1b, 0x3d, 0x01],
                HW_RESET: [0x1b, 0x3f, 0x0a, 0x00],
            },
            CASH_DRAWER: {
                CD_KICK_2: [0x1b, 0x70, 0x00],
                CD_KICK_5: [0x1b, 0x70, 0x01],
            },
            MARGINS: {
                BOTTOM: [0x1b, 0x4f],
                LEFT: [0x1b, 0x6c],
                RIGHT: [0x1b, 0x51],
            },
            PAPER: {
                PAPER_FULL_CUT: [0x1d, 0x56, 0x00],
                PAPER_PART_CUT: [0x1d, 0x56, 0x01],
                PAPER_CUT_A: [0x1d, 0x56, 0x41],
                PAPER_CUT_B: [0x1d, 0x56, 0x42],
            },
            TEXT_FORMAT: {
                TXT_NORMAL: [0x1b, 0x21, 0x00],
                TXT_2HEIGHT: [0x1b, 0x21, 0x10],
                TXT_2WIDTH: [0x1b, 0x21, 0x20],
                TXT_4SQUARE: [0x1b, 0x21, 0x30],
                TXT_CUSTOM_SIZE: function (width, height) {
                    var widthDec = (width - 1) * 16;
                    var heightDec = height - 1;
                    var sizeDec = widthDec + heightDec;
                    return [0x1d, 0x21, String.fromCharCode(sizeDec)];
                },
                TXT_HEIGHT: {
                    1: [0x00],
                    2: [0x01],
                    3: [0x02],
                    4: [0x03],
                    5: [0x04],
                    6: [0x05],
                    7: [0x06],
                    8: [0x07]
                },
                TXT_WIDTH: {
                    1: [0x00],
                    2: [0x10],
                    3: [0x20],
                    4: [0x30],
                    5: [0x40],
                    6: [0x50],
                    7: [0x60],
                    8: [0x70]
                },
                TXT_UNDERL_OFF: [0x1b, 0x2d, 0x00],
                TXT_UNDERL_ON: [0x1b, 0x2d, 0x01],
                TXT_UNDERL2_ON: [0x1b, 0x2d, 0x02],
                TXT_BOLD_OFF: [0x1b, 0x45, 0x00],
                TXT_BOLD_ON: [0x1b, 0x45, 0x01],
                TXT_ITALIC_OFF: [0x1b, 0x35],
                TXT_ITALIC_ON: [0x1b, 0x34],
                TXT_FONT_A: [0x1b, 0x4d, 0x00],
                TXT_FONT_B: [0x1b, 0x4d, 0x01],
                TXT_FONT_C: [0x1b, 0x4d, 0x02],
                TXT_ALIGN_LT: [0x1b, 0x61, 0x00],
                TXT_ALIGN_CT: [0x1b, 0x61, 0x01],
                TXT_ALIGN_RT: [0x1b, 0x61, 0x02],
            }
        };
        this.IMPRESORA_ADDRESS = '';
        this.QTY_FIRST = true;
        this.SEND_SMS = false;
        this.SEND_WHATSAPP = true;
        this.PRINT_RECEIPT = true;
        this.KEEP = true;
        this.CONTINUE = false;
    }
    presentAlert(title, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: title,
                message,
                buttons: ['Aceptar']
            });
            yield alert.present();
            yield alert.onWillDismiss();
        });
    }
    handleError(err) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!err)
                    err = { status: 0, message: 'Error desconocido.' };
                if (err.status == 410 || err.status == 401) {
                    const msgAuth = 'Tu sesión no es válida o expiró. Inicia sesión de nuevo.';
                    let alert = yield this.alertCtrl.create({
                        header: err.status == 410 ? 'La sesión expiró' : 'Sesión requerida',
                        message: msgAuth,
                        buttons: ['Aceptar']
                    });
                    yield alert.present();
                    yield alert.onWillDismiss();
                    yield this.storage.remove('token');
                    this.navCtrl.navigateRoot('/login');
                    try {
                        Promise.resolve(this.oneSignal.removeExternalUserId())
                            .catch(osErr => console.log('OneSignal skip', osErr));
                    }
                    catch (osErr) {
                        console.log('OneSignal skip', osErr);
                    }
                }
                else {
                    yield this.presentAlert('Error', err && err.message ? err.message : 'No se pudo conectar con el servidor.');
                }
            }
            catch (ex) {
                console.log('handleError fallback', ex);
                try {
                    yield this.presentAlert('Error', (err && err.message) || 'No se pudo conectar con el servidor.');
                }
                catch (ex2) {
                    console.log('alert fallback failed', ex2);
                }
            }
        });
    }
    redirectToLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.storage.remove('token');
            }
            catch (e) { }
            this.navCtrl.navigateRoot('/login');
        });
    }
    isDesktop() {
        return this.platform.is('desktop') || this.platform.is('mobileweb');
    }
    presentToast(message, duration = 1500) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message,
                duration,
                buttons: ['OK']
            });
            yield toast.present();
        });
    }
};
Util.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_2__["OneSignal"] }
];
Util = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Util);

//all the commands below may vary by printer, check the manual


/***/ }),

/***/ "K0AK":
/*!***********************************************!*\
  !*** ./src/app/pages/agente/agente.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-container {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n.btn-container ion-icon {\n  margin-left: 6px;\n}\nion-list ion-list-header ion-label {\n  font-weight: bold;\n  font-size: 16px;\n  color: #aaaaaa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FnZW50ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQUk7RUFDSSxnQkFBQTtBQUVSO0FBS1E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRloiLCJmaWxlIjoiYWdlbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBpb24taWNvbntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICB9XG5cbn1cbmlvbi1saXN0e1xuXG4gICAgaW9uLWxpc3QtaGVhZGVye1xuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiAjYWFhYWFhO1xuICAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "L2Uv":
/*!***********************************************!*\
  !*** ./src/app/pages/boletos/boletos.page.ts ***!
  \***********************************************/
/*! exports provided: BoletosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletosPage", function() { return BoletosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_boletos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./boletos.page.html */ "GPyu");
/* harmony import */ var _boletos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boletos.page.scss */ "5DK6");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _classes_classes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../classes/classes */ "50N5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment-timezone */ "f0Wu");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment/locale/es */ "iYuL");
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment_locale_es__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ventas_filtro_ventas_filtro_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ventas-filtro/ventas-filtro.page */ "AjnV");
/* harmony import */ var _boleto_boleto_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../boleto/boleto.page */ "9ljF");
/* harmony import */ var _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/sub-menu/sub-menu.page */ "YY6p");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _reporte_completo_reporte_completo_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../reporte-completo/reporte-completo.page */ "vbfs");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/util/util */ "JQC8");











// import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult } from "ion2-calendar";







let BoletosPage = class BoletosPage {
    // alertCtrl: any;
    constructor(bs, modalCtrl, storage, loadCtrl, popoverCtrl, alertCtrl, cdRef, util) {
        this.bs = bs;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.loadCtrl = loadCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.cdRef = cdRef;
        this.util = util;
        this.pais_id = null;
        this.sorteo_tipo = '';
        this.boletos = [];
        this.originales = [];
        this.from_date = new Date();
        this.to_date = new Date();
        this.loaded = false;
        this.dateType = 'single';
        this.empleadoSearching = { id: -1, nombre: '', agentes: [] };
        this.sorteoSearching = new _classes_classes__WEBPACK_IMPORTED_MODULE_5__["Sorteo"]();
        this.totalInversion = 0;
        this.totalPagado = 0;
        this.totalBalance = 0;
        this.searchTerm = '';
        this.isAdmin = false;
        this.numerosSumados = false;
        this.empleadosCount = 0;
        this.vb = false;
        this.empleados = [];
        this.agente = { id: -1, name: '' };
        this.refreshTimer = null;
        this.refreshing = false;
        this.lastSig = '';
        this.currentEmpleado = new _classes_classes__WEBPACK_IMPORTED_MODULE_5__["Empleado"]();
        this.sorteosDict = {
            'r': 'Regular',
            'j2': 'Diario',
            'j3': 'Juega 3',
            'f': 'Fechas'
        };
        this.isWinner = (boleto) => boleto.numeros.find(x => x.iswinner) != null;
        this.init();
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dateType = (yield this.storage.get('date-type')) || 'single';
            let d = new Date();
            this.currentEmpleado = yield this.bs.getEmpleado();
            this.isAdmin = !!this.currentEmpleado.usuario.isadmin;
            if (this.isAdmin)
                this.vb = true;
            else
                this.vb = this.currentEmpleado.usuario.vb;
            this.empleadosCount = this.currentEmpleado.empleados.length;
            console.log(this.currentEmpleado.empleados);
            if (this.currentEmpleado.empleados.length == 0 && !this.isAdmin) {
                this.empleadoSearching = { id: -1, nombre: '', agentes: [] };
            }
            this.from_date = this.dateType == 'single' ? d : moment__WEBPACK_IMPORTED_MODULE_8___default()(d).add(-1, 'week').toDate();
            this.to_date = this.dateType == 'single' ? d : moment__WEBPACK_IMPORTED_MODULE_8___default()(d).add(1, 'week').toDate();
            this.getBoletos();
            console.log("HERE");
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.loaded)
            this.getBoletos(true);
        this.startAutoRefresh();
    }
    ionViewWillLeave() {
        this.stopAutoRefresh();
    }
    startAutoRefresh() {
        this.stopAutoRefresh();
        this.refreshTimer = setInterval(() => {
            if (!this.loaded || this.refreshing || this.boletosDuplicados)
                return;
            // no refrescar mientras el usuario tiene un modal/filtro/calendario abierto
            if (document.querySelector('ion-modal, ion-popover, ion-alert, ion-action-sheet, ion-loading'))
                return;
            this.getBoletos(true);
        }, 2000);
    }
    stopAutoRefresh() {
        if (this.refreshTimer) {
            clearInterval(this.refreshTimer);
            this.refreshTimer = null;
        }
    }
    getBoletos(silent = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.refreshing)
                return;
            this.refreshing = true;
            if (!silent) {
                this.totalPagado = 0;
                this.totalInversion = 0;
                this.totalBalance = 0;
                this.originales = [];
                this.boletos = [];
                this.loaded = false;
            }
            let body = {
                'from_date': moment__WEBPACK_IMPORTED_MODULE_8___default()(this.from_date).format('YYYY/MM/DD') + ' 00:00:00.000000',
                'to_date': moment__WEBPACK_IMPORTED_MODULE_8___default()(this.to_date).format('YYYY/MM/DD') + ' 23:59:59.999999'
            };
            this.bs.post(this.bs.BOLETO_URL + '/get/true', body, true).then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('GOT DATA');
                data = (data || []).sort((x, y) => x.id > y.id ? 1 : -1);
                // La firma debe incluir el ganador: si cambia, los totales pagados cambian.
                const sig = data.map(x => {
                    var _a, _b;
                    return ((_a = x.indice) !== null && _a !== void 0 ? _a : x.id) + ':' + x.total + ':' + (x.iscancelled ? 1 : 0)
                        + ':' + ((_b = x.numero_ganador) !== null && _b !== void 0 ? _b : '') + ':' + (x.iscompleted ? 1 : 0);
                }).join('|');
                if (silent && sig === this.lastSig)
                    return;
                this.lastSig = sig;
                this.empleados = data.map(x => { return { id: x.empleado_id, nombre: x.empleado_nombre }; }).distinctBy(x => x.id);
                this.originales = data.clone();
                this.boletos = data;
                yield this.search({ target: { value: this.searchTerm } });
                this.loaded = true;
            }))
                .catch((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(err);
                if (!silent)
                    this.util.handleError(err);
            })).finally(() => {
                this.refreshing = false;
                if (!this.loaded)
                    this.loaded = true;
            });
        });
    }
    openCalendar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                title: '',
                pickMode: this.dateType,
                doneLabel: 'Aceptar',
                closeLabel: 'Cancelar',
                defaultDateRange: {
                    from: new Date(this.from_date),
                    to: new Date(this.to_date)
                },
                defaultDate: new Date(this.from_date),
                defaultScrollTo: new Date(),
                from: new Date('01/01/2020'),
                weekdays: ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SÁ']
            };
            moment__WEBPACK_IMPORTED_MODULE_8___default.a.updateLocale('es', {
                monthsShort: {
                    format: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
                    standalone: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_')
                }
            });
            let z = moment__WEBPACK_IMPORTED_MODULE_8___default.a.weekdays();
            console.log(z);
            // months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
            // monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
            // weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
            // weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
            // weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
            let myCalendar = yield this.modalCtrl.create({
                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModal"],
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
            // console.log(data);
            if (data) {
                if (this.dateType == 'single') {
                    this.from_date = new Date(data.dateObj);
                    this.to_date = new Date(data.dateObj);
                }
                else {
                    this.from_date = new Date(data.from.dateObj);
                    this.to_date = new Date(data.to.dateObj);
                }
                this.getBoletos();
            }
        });
    }
    filtrosClicked(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(empleados);
            let modal = yield this.modalCtrl.create({
                component: _ventas_filtro_ventas_filtro_page__WEBPACK_IMPORTED_MODULE_12__["VentasFiltroPage"],
                componentProps: {
                    turno: this.turnoSearching,
                    empleado: Object.assign({}, this.empleadoSearching),
                    empleados: [],
                    numerosSumados: this.numerosSumados,
                    numero: this.numero != null ? this.numero.toString() : null,
                    boletosDuplicados: this.boletosDuplicados,
                    agente: this.agente,
                    sorteo_tipo: this.sorteo_tipo,
                    pais_id: this.pais_id
                }
            });
            // modal.style.animation = 'fadeIn .3s forwards';
            yield modal.present();
            let data = (yield modal.onWillDismiss()).data;
            if (data) {
                console.log(data.empleado);
                this.turnoSearching = data.turno;
                this.empleadoSearching = Object.assign({}, data.empleado);
                this.numerosSumados = data.numerosSumados;
                this.numero = data.numero;
                this.boletosDuplicados = data.boletosDuplicados;
                this.agente = data.agente;
                this.sorteo_tipo = data.sorteo_tipo;
                this.pais_id = data.pais_id;
                this.search({ target: { value: this.searchTerm } });
            }
        });
    }
    applyFilters() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(this.boletos);
            console.log('Sorteo_tipo', this.sorteo_tipo);
            console.log(this.originales.filter(x => x.numeros.find(x => x.numero == this.numero) != null));
            if (this.numero)
                this.boletos = this.originales.filter(x => x.numeros.find(x => x.numero == this.numero) != null);
            else
                this.boletos = this.originales.clone();
            if (this.turnoSearching != null)
                this.boletos = this.boletos.filter(x => moment__WEBPACK_IMPORTED_MODULE_8___default()(x.juego_fecha).format('hh:mm A') == this.turnoSearching);
            if (this.empleadoSearching.id != -1)
                this.boletos = this.boletos.filter(x => this.empleadoSearching.agentes.includes(x.empleado_id));
            if (this.agente.id != -1)
                this.boletos = this.boletos.filter(x => x.empleado_id == this.agente.id);
            if (this.sorteo_tipo)
                this.boletos = this.boletos.filter(x => x.sorteo_tipo == this.sorteo_tipo);
            if (this.pais_id)
                this.boletos = this.boletos.filter(x => x.pais_id == this.pais_id);
            if (this.boletosDuplicados) {
                // this.totalPagado = 0;
                // this.totalBalance = 0;
                // this.totalInversion = 0;
                this.loaded = false;
                let load = yield this.loadCtrl.create({
                    message: 'Obteniendo duplicados...'
                });
                let boletos = [];
                // let boletosCopy: BoletoMock[] = this.boletos.clone().filter(x => !x.iscancelled && !this.isWinner(x));
                // this.boletos = [];
                // this.totalGanancia = 0;
                // this.totalInversion = 0;
                yield load.present();
                try {
                    const data = yield this.bs.get(this.bs.BASE_URL_API + 'boletos-duplicados/' + moment__WEBPACK_IMPORTED_MODULE_8___default()(this.from_date).format('YYYY-MM-DD'), true);
                    yield load.dismiss();
                    const allIndex = data.flatMap(x => x);
                    console.log(allIndex);
                    const temp = this.boletos.filter(x => allIndex.includes(x.indice));
                    for (let i = 0; i < data.length; i++) {
                        boletos.push(...this.boletos.filter(x => data[i].includes(x.indice)).map((x) => (Object.assign(Object.assign({}, x), { dindex: i + 1 }))));
                    }
                    this.boletos = JSON.parse(JSON.stringify(boletos));
                    this.loaded = true;
                }
                catch (ex) {
                    this.boletosDuplicados = false;
                    this.loaded = true;
                    yield load.dismiss();
                    this.util.handleError(ex || { message: 'Algo salió mal' });
                }
                // boletosCopy.forEach(x => {
                //   x.numeros = x.numeros.sort((y, z) => y.numero > z.numero ? 1 : -1);
                //   x.numeros.forEach(y => {
                //     y.id = -1;
                //     (y as any).boleto_id = -1;
                //   });
                // });
                // // console.log(boletosCopy);
                // let i = 0;
                // for (let b of boletosCopy)
                // {
                //   // console.log(boleto)
                //   let b1 = boletosCopy.filter(x => (moment(b.fecha).unix() >= moment(x.fecha).add('-1', 'minutes').unix() && moment(b.fecha).unix() <= moment(x.fecha).add('1', 'minutes').unix()) && x.id != b.id && x.juego_id == b.juego_id && x.empleado_id == b.empleado_id && x.cliente_nombre == b.cliente_nombre && b.total == x.total && JSON.stringify(x.numeros) == JSON.stringify(b.numeros));
                //   if (b1.length > 0)
                //   {
                //     i++;
                //     (b as any).dindex = i;
                //     boletos.push(b)
                //     for (let x of b1)
                //     {
                //       (x as any).dindex = i;
                //       boletos.push(x);
                //     }
                //   }
                //   let ids = b1.map(x => x.id);
                //   ids.push(b.id);
                //   boletosCopy.removeBy(x => ids.includes(x.id));
                //   // if (b1[0].id == 30617 || b1[0].id == 30618)
                //   //   console.log(b1)
                // }
                // this.boletos = [...boletos].distinctBy(x => x.id).sort((x, y) => x.dindex > y.dindex ? 1: -1);
                // this.loaded = true;
                // await load.dismiss();
                // // let ids = '(' + boletos.map(x => x.id).join(',') + ')';
                // let g = boletos.groupBy(x => x.dindex);
                // console.log('group', g);
                // let ids = '(';
                // for (let gb of g)
                // {
                //   console.log('total', gb.length, 'founded', gb.length - 1);
                //   let array = gb.sort((x, y) => x.id > y.id ? 1 : -1);
                //   for (let i = 1; i < array.length; i++)
                //   {
                //     ids += `${array[i].id}, `;
                //   }
                // }
                // console.log(ids);
            }
        });
    }
    getCountFilters() {
        let count = 0;
        if (this.numero)
            count++;
        if ((this.agente.id != -1 || this.empleadoSearching.id != -1) && (this.isAdmin || this.empleadosCount > 0))
            count++;
        if (this.sorteo_tipo)
            count++;
        if (this.turnoSearching != null)
            count++;
        if (this.numerosSumados)
            count++;
        if (this.boletosDuplicados)
            count++;
        if (this.pais_id)
            count++;
        return count;
    }
    search(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.applyFilters();
            var termino = evt.target.value.trim().toLocaleLowerCase();
            if (termino.indexOf("#") >= 0)
                this.boletos = this.boletos.filter(b => b.indice.toString().indexOf(termino.replace("#", "").split(" ").join("")) >= 0);
            else if (termino.trim() != '')
                this.boletos = this.boletos.filter(b => JSON.stringify(b).toLowerCase().includes(termino));
            this.calcularBalances();
        });
    }
    distinctSorteos(MYJSON) {
        return MYJSON.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj.juego.sorteo.id).indexOf(obj.juego.sorteo.id) === pos;
        });
    }
    boletoClicked(boleto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let b = JSON.clone(boleto);
            b.numeros = b.numeros.sort((x, y) => x.numero > y.numero ? 1 : -1);
            let modal = yield this.modalCtrl.create({
                component: _boleto_boleto_page__WEBPACK_IMPORTED_MODULE_13__["BoletoPage"],
                componentProps: {
                    boleto: b
                }
            });
            yield modal.present();
        });
    }
    distinctRecords(MYJSON, prop) {
        return MYJSON.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
        });
    }
    //CANCELAR boleto
    cancelarBoleto(sliding, boleto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.esDueno(boleto) && !this.isAdmin) {
                sliding.close();
                return yield this.util.presentAlert('Mensaje', 'Solo el vendedor que dio el boleto puede anularlo.');
            }
            // Sorteo ya corrido: al vendedor se lo bloquea en el servidor; al dueno
            // se le avisa que va a mover un cierre ya hecho.
            const yaJugado = !!(boleto.iscompleted || this.isWinner(boleto)) ||
                (!!boleto.juego_fecha && moment__WEBPACK_IMPORTED_MODULE_8___default()(boleto.juego_fecha).unix() <= moment_timezone__WEBPACK_IMPORTED_MODULE_9___default()().tz('America/Managua').unix());
            const alert = yield this.alertCtrl.create({
                header: `Anular Boleto #${boleto.indice}`,
                message: yaJugado
                    ? `Este sorteo ya se jugó: anular <strong>${boleto.indice}</strong> cambia el vendido y el pagado ` +
                        `de ese cierre, y quedará registrado que lo anuló el dueño. ¿Continuar?`
                    : `¿Estás seguro que deseas anular el boleto"<strong>${boleto.indice}</strong>"?`,
                buttons: [{
                        role: 'cancel',
                        text: 'No',
                        cssClass: 'danger'
                    }, {
                        role: 'ok',
                        text: 'Si',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            try {
                                let data = yield this.bs.delete(this.bs.BOLETO_URL + '/' + boleto.id, true);
                                const ok = (data && (data.message || data.mensaje)) || 'Boleto anulado con éxito.';
                                boleto.iscancelled = true;
                                boleto.log = ok;
                                this.calcularBalances();
                                sliding.close();
                                setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    this.util.presentAlert('Mensaje', ok);
                                }), 100);
                            }
                            catch (err) {
                                let ex = err;
                                sliding.close();
                                yield this.util.handleError(ex);
                            }
                        })
                    }]
            });
            yield alert.present();
        });
    }
    // Copia el boleto a una venta nueva: mismos numeros y cliente,
    // y el vendedor solo cambia el sorteo (si el original ya paso salta a la
    // siguiente hora abierta).
    copiarBoleto(sliding, boleto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            sliding.close();
            const copia = {
                id: -1,
                indice: -1,
                scan_code: '',
                cliente_nombre: boleto.cliente_nombre,
                juego_id: -1,
                sorteo_id: boleto.sorteo_id,
                sorteo_nombre: boleto.sorteo_nombre,
                sorteo_tipo: boleto.sorteo_tipo,
                grupo_id: boleto.grupo_id,
                grupo_nombre: boleto.grupo_nombre,
                grupo_titulo: boleto.grupo_titulo,
                pais_id: boleto.pais_id,
                simbolo_moneda: boleto.simbolo_moneda,
                numeros: (boleto.numeros || []).map(n => ({
                    numero: n.numero,
                    inversion: n.inversion,
                    ganancia: 0,
                    iswinner: false,
                    iscancelled: false,
                    iscanjeado: false
                })),
                total: 0
            };
            const modal = yield this.modalCtrl.create({
                component: _boleto_boleto_page__WEBPACK_IMPORTED_MODULE_13__["BoletoPage"],
                componentProps: { boleto: copia, copia: true }
            });
            yield modal.present();
        });
    }
    openSubMenu(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let verReporteCompletoClicked = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
            let options = [{
                    name: 'Ver reporte completo',
                    icon: 'file-tray-full',
                    event: verReporteCompletoClicked,
                    type: 'button'
                }];
            verReporteCompletoClicked.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // this.distinctSorteos()
                let numeros = this.boletos.filter(z => !z.iscancelled).map(x => x.numeros).flat().sort((y, z) => Number(y.numero) > Number(z.numero) ? 1 : -1);
                // console.log('NUMEROS', numeros.length);
                let disntics = [];
                if (this.numerosSumados) {
                    let temp = numeros.groupBy(x => x.numero);
                    disntics = temp.map(x => ({
                        numero: x[0].numero,
                        inversion: x.reduce((result, current) => result + current.inversion, 0),
                        ganancia: x.reduce((result, current) => result + current.ganancia, 0),
                        boleto_id: -1
                    }));
                    // disntics = this.distinctRecords(numeros.clone(), 'numero');
                    // for (let i = 0; i < disntics.length; i++)
                    // {
                    //   disntics[i].inversion = numeros.filter(x => x.numero == disntics[i].numero).sumBy(x => x.inversion);
                    //   disntics[i].ganancia = numeros.filter(x => x.numero == disntics[i].numero).sumBy(x => x.ganancia);
                    //   disntics[i].boleto_id = -1;
                    // }
                }
                let modal = yield this.modalCtrl.create({
                    component: _reporte_completo_reporte_completo_page__WEBPACK_IMPORTED_MODULE_16__["ReporteCompletoPage"],
                    componentProps: {
                        fecha: this.from_date,
                        numeros: this.numerosSumados ? disntics.clone() : numeros.clone(),
                        originales: this.numerosSumados ? disntics.clone() : numeros.clone(),
                        empleado: this.agente,
                        turno: this.turnoSearching
                    }
                });
                yield modal.present();
                let { data } = yield modal.onWillDismiss();
                if (data && data.numero) {
                    this.numero = data.numero;
                    this.search({ target: { value: this.searchTerm } });
                }
            }));
            let popover = yield this.popoverCtrl.create({
                component: _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_14__["SubMenuPage"],
                event: evt,
                cssClass: 'sub-menu',
                componentProps: {
                    options
                }
            });
            yield popover.present();
            yield popover.onWillDismiss();
        });
    }
    itemHeightFn(item, index) {
        return 10;
    }
    canDelete(boleto) {
        return this.esDueno(boleto) && !(boleto.iscancelled || this.isWinner(boleto) || moment__WEBPACK_IMPORTED_MODULE_8___default()(boleto.juego_fecha).unix() >= moment_timezone__WEBPACK_IMPORTED_MODULE_9___default()().tz('America/Managua').unix());
    }
    esDueno(boleto) {
        const uid = this.currentEmpleado && this.currentEmpleado.usuario ? this.currentEmpleado.usuario.id : -1;
        const eid = this.currentEmpleado ? this.currentEmpleado.id : -1;
        return String(boleto.usuario_id) == String(uid) || String(boleto.empleado_id) == String(eid);
    }
    longPressed(evt, s, b) {
        console.log(evt);
        alert('TEST');
    }
    calcularBalances() {
        this.totalInversion = this.boletos.filter(z => !z.iscancelled).sumBy(x => x.numeros.sumBy(y => y.inversion));
        this.totalPagado = this.boletos.filter(z => !z.iscancelled).sumBy(x => x.numeros.filter(w => w.iswinner).sumBy(y => y.ganancia));
        this.totalBalance = this.totalInversion - this.totalPagado;
    }
    abs(value) {
        return Math.abs(value);
    }
};
BoletosPage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_17__["Util"] }
];
BoletosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-boletos',
        template: _raw_loader_boletos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_boletos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BoletosPage);



/***/ }),

/***/ "MGJa":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reporte-completo/reporte-completo.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons *ngIf='isAdmin' slot='start'>\n            <ion-button [disabled]='numeros.length > 1000' (click)='print()'>\n                <ion-icon name='logo-whatsapp' slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title class='center'>Números vendidos: <span class=\"cantidad\">{{numeros.length}}/{{originales.length}}</span></ion-title>\n        <ion-buttons slot='end'>\n            <ion-button (click)='close()'>\n                <ion-icon name='close' slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content id='content'>\n    <div class=\"top ion-padding\">\n        <ion-searchbar (ionInput)='search($event)' [(ngModel)]='searchTerm' placeholder='Buscar número...'></ion-searchbar>\n        <ion-item style=\"font-weight: bold;\">\n            <ion-label>Fecha: </ion-label>\n            <ion-input [disabled]='true' [value]=\"fecha | date: 'dd/MM/yyyy'\"></ion-input>\n        </ion-item>\n\n        \n        <!-- <ion-row>\n            <ion-col size='6'>\n                <ion-item>\n                    <ion-label position='stacked'>Criterio</ion-label>\n\n                    <ion-select style=\"text-align: left;\" interface=\"action\" [(ngModel)]='critero' (ionChange)='criterioChanged($event)'>\n                        <ion-select-option *ngFor='let c of criterios' [value]='c'>{{c.nombre}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </ion-col>\n            <ion-col size='6'>\n                <ion-item>\n                    <ion-label position='stacked'>Cantidad</ion-label>\n                    <ion-input type='text' [disabled]='critero.value == 0' (ionChange)='criterioChanged($event)' [(ngModel)]='cantidad'></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row> -->\n        <ion-row>\n            <ion-col size='6'>\n                <ion-item>\n                    <ion-label position='floating'>Mayor o igual que</ion-label>\n\n                    <ion-input type='text' (ionChange)='criterioChanged($event)' [(ngModel)]='mayorIgualQueCantidad'></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col size='6'>\n                <ion-item>\n                    <ion-label position='floating'>Menor o igual que</ion-label>\n                    <ion-input type='text' (ionChange)='criterioChanged($event)' [(ngModel)]='menorIgualQueCantidad'></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-item style=\"font-weight: bold;\">\n            <ion-label>Turno: </ion-label>\n            <ion-input [disabled]='true' [value]='!turno ? \"TODOS\" : turno'></ion-input>\n        </ion-item>\n        <ion-item style=\"font-weight: bold;\">\n            <ion-label>Agente: </ion-label>\n            <ion-input [disabled]='true' [value]='empleado.id == -1 ? \"TODOS\" : empleado.nombre'></ion-input>\n        </ion-item>\n        <ion-grid style='margin-top: 10px;'>\n            <ion-row class=\"header\">\n                <ion-col size='3'>\n                    <p>Número</p>\n                </ion-col>\n                <ion-col size='4'>\n                    <p>Inversión</p>\n                </ion-col>\n                <ion-col size='5'>\n                    <p>Ganancia</p>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <ion-virtual-scroll [items]=\"numeros\" approxItemHeight='48' style=\"padding: 0 16px;\">\n        <ion-item button *virtualItem='let n' detail='true' class=\"row\" (click)='numeroClicked(n)'>\n            <ion-col size='3' style=\"margin-left: 6px\">\n                <p>{{n.numero}}</p>\n            </ion-col>\n            <ion-col size='4' style=\"margin-left: 4px\">\n                <p>{{n.inversion | currency: 'C$'}}</p>\n            </ion-col>\n            <ion-col style=\"margin-left: 10px\">\n                <p>{{n.ganancia | currency: 'C$'}}</p>\n            </ion-col>\n        </ion-item>\n\n    </ion-virtual-scroll>\n\n\n    <!-- <ion-grid *ngIf='shown' id=\"report-grid\" style=\"width: 100%;\">\n        <ion-row>\n            <ion-col size='12'>\n                <h4 style=\"margin: 24px 0; text-align: center; font-weight: bold;\">Fecha: {{fecha | date: 'dd/MM/yyyy'}}</h4>\n                <h4 *ngIf='empleado.id != -1' style=\"margin: 0 0 24px 0; text-align: center; font-weight: bold;\">Agente: {{empleado.nombre}}</h4>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"header\">\n            <ion-col size='3'>\n                <p>Número</p>\n            </ion-col>\n            <ion-col size='4'>\n                <p>Inversión</p>\n            </ion-col>\n            <ion-col size='5'>\n                <p>Ganancia</p>\n            </ion-col>\n        </ion-row>\n    \n        <ion-row *ngFor='let n of numeros; let i = index' [style]=\"i == numeros.length - 1 ? '' : 'border-bottom: 1px solid #00000029'\">\n            <ion-col size='3'>\n                <p>{{n.numero}}</p>\n            </ion-col>\n            <ion-col size='4'>\n                <p>{{n.inversion | currency: 'C$'}}</p>\n            </ion-col>\n            <ion-col>\n                <p>{{n.ganancia | currency: 'C$'}}</p>\n            </ion-col>\n        </ion-row>\n    \n        <ion-row class=\"header\" style=\"border-top: 1px solid #000;\">\n            <ion-col size='3'>\n                <p>Total</p>\n            </ion-col>\n            <ion-col size='4'>\n                <p>{{getTotalInversion() | currency: 'C$'}}</p>\n            </ion-col>\n            <ion-col size='5'>\n                <p>{{getTotalGanancia() | currency: 'C$'}}</p>\n            </ion-col>\n        </ion-row>\n    </ion-grid> -->\n\n    <div class=\"receipt-container\">\n        <div class=\"receipt\" id=\"receipt\">\n            <div [ngClass]=\"{'hide': false}\">\n                <!-- <img [src]=\"logo_color\" style=\"height: 200px; display: block; margin: 0 auto 10px auto !important;\"> -->\n                <p style=\"text-align: center;\"><strong>Reporte de ventas</strong></p>\n                <p>===================================</p>\n               <!-- <p><span style=\"display: inline-block; width: 144px;\"><strong>Boleto:</strong></span>#{{boleto_id == -1 ? \"POR DEFINIRSE\" : boleto_id}}</p>\n                <p><span style=\"display: inline-block; width: 144px;\"><strong>Compra:</strong></span>{{boleto.fecha | date: 'dd/MM/yyyy - hh:mm:ss a'}}</p>-->\n                \n                \n                <p><span style=\"display: inline-block; width: 144px;\"><strong>Fecha:</strong></span>{{fecha | date: 'dd/MM/yyyy'}}</p>\n                \n                <p *ngIf='empleado.id != -1'><span style=\"display: inline-block; width: 144px;\"><strong>Agente:</strong></span>{{empleado.nombre}}</p>\n                \n                \n               <!-- <p><span style=\"display: inline-block; width: 144px;\"><strong>Agente:</strong></span>{{boleto.empleado_nombre}} </p>-->\n            </div>\n            \n            <p>===================================</p>\n            <!-- <p class=\"center\"><strong>Números comprados</strong></p> -->\n            <p><span style=\"display: inline-block; width: 144px;\"><strong>Número</strong></span><span style=\"display: inline-block; width: 224px;\"><strong>Inversión</strong></span><span><strong>Ganancia</strong></span></p>\n            <p *ngFor='let bn of numeros'><span style=\"display: inline-block; width: 144px;\">{{bn.numero}}</span><span style=\"display: inline-block; width: 224px;\">{{bn.inversion | currency: 'C$'}}</span><span style=\"display: inline-block;\">{{bn.ganancia | currency: 'C$'}}</span></p>\n            <!-- <p><span style=\"display: inline-block; width: 180px;\">25</span><span style=\"display: inline-block; width: 180px;\">C$ 5.00</span><span>C$ 5,000.00</span></p> -->\n            <!-- <span>231</span>      <span>213</span> -->\n            <p>===================================</p>\n            <p><span style=\"display: inline-block; width: 144px;\"><strong>Total</strong></span><span style=\"display: inline-block; width: 224px;\"><strong>{{getTotalInversion() | currency: 'C$'}}</strong></span><span><strong>{{getTotalGanancia() | currency: 'C$'}}</strong></span></p>\n            \n        </div>\n    </div>\n</ion-content>\n\n\n<ion-footer style=\"padding: 0 16px;\" *ngIf='numeros.length > 0' class=\"ion-no-border\">\n    <ion-toolbar class=\"ion-no-border\">\n        <ion-row class=\"footer\">\n            <ion-col size='3'>\n                <p>Total</p>\n            </ion-col>\n            <ion-col size='4'>\n                <p>{{getTotalInversion() | currency: 'C$'}}</p>\n            </ion-col>\n            <ion-col size='5'>\n                <p>{{getTotalGanancia() | currency: 'C$'}}</p>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "N9Bv":
/*!******************************!*\
  !*** ./src/app/util/logo.ts ***!
  \******************************/
/*! exports provided: LOGO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGO", function() { return LOGO; });
const LOGO = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqIAAADOCAYAAADlqGD7AAAABHNCSVQICAgIfAhkiAAAIABJREFUeF7tnQfYFNX5t0+sQaVoUFREETv22LGAUVEURVRiwQKaKBqjsQRsUbBELCjGGlSwoKixYcUONkyMGhQExSiWqNiwYS/fuedj+e87O7szZ3Zmd2b391zXuVD2zCn3LLPPnKf9wmRbVrXL62rbWvNaZ/tnO9va2NbatvbZXr5WJwIiIAIiIAIiIAKpE/jIzvCFbZ/b9qlts2ybbtvL8/58LfUVxJzgFzGvS+OyZe2gmxe1Tex/L5bGRBpTBERABERABERABJqIwFy713/bNtm2Z2x72rYPs7D/eiuiS1gIe9v2u3kKaBaYaA0iIAIiIAIiIAIi0OgEUEhH2XaTbV/Xa7P1UkQ3sBs+cp4SijIqEQEREAEREAEREAERqD2Bz+yUY227yrb/1Hr6WiuiW9kNnmDbLrXeqOYTAREQAREQAREQARGoSOBe++lw256sFadaKaIoniigKKISERABERABERABERCB7BJAEf2rbfenvcS0FVEi3q+0rVvaG9H4IiACIiACIiACIiACiRIgqOn3thF9n4qkpYiSXukU246xbaFUVq5BRUAEREAEREAEREAE0ibwg53gAtuG2fZV0pOloYhuZBd5s22rJL1YjScCIiACIiACIiACIlAXAv+1s5Lp6LkkZ09SEWWs42zDp2DhJBepsURABERABERABERABOpO4Hu7AmJ+LrTt5yRWk5Qi2sEu5jrbeiaxKI0hAiIgAiIgAiIgAiKQWQIP2pUdaNvsaleYhCJKQBIL6ljtYnS9CIiACIiACIiACIhALgi8Y1e5k23TqllttYrojnZy/EHbVrMIXSsCIiACIiACIiACIpA7AiTD72PbpLgrr0YR5Uh2tG0Lxp1c14mACIiACIiACIiACOSawLd29UfM0wmdNxJXER1kZ7rceTZdIAIiIAIiIAIiIAIi0IgEDrCbolSok8RRRHvbGcbbtoDTTOosAiIgAiIgAiIgAiLQqATIN7qnbXe5bNBVEe1hB6fc0y9dJlFfERABERABERABERCBhifwjd1hd9v+FXWnLoro2nbQyba1jjq4+omACIiACIiACIiACDQVgY/tbjm4nBpl11EV0XZ2sBds6xxlUPURAREQAREQAREQARFoWgKv251vbNucMAJRFdGb7ECUdZKIgAiIgAiIgAiIgAiIQBgB0nvuE9YpiiI6wA4yJmwgfS4CIiACIiACIiACIiACRQQG2v++phKRMEX0V/biWbYtIawiIAIiIAIiIAIiIAIi4EDgC9u3i20flbsmTBFFiz3IYUJ1FQEREAEREAEREAEREIECgWvtfwyIo4j2sBc9Jo4iIAIiIAIiIAIiIAIiUAWB7e21jwRdX+5EdFHbeYpta1QxqS4VAREQAREQAREQAREQgRkWwTq2/ehHUU4RHWA7KkBJXxwREAEREAEREAEREIEkCAQGLgUpovwdmuvqScyqMURABERABERABERABJqewCuWwFq2/VxMIkgR3d12uKPpcQmACIiACIiACIiACIhAkgR62cEmhCmiz9gOmyU5q8YSAREQAREQAREQARFoegKTLIEelRRRPlSkfNN/TwRABERABERABERABFIhsIUdlUNPT/ym+Wvs3ylvaCrcNagIiIAIiIAIiIAIND2BFnlFixXRxS2a2bbxp0QEREAEREAEREAEREAEkiZAtSUqd37vPxGlMP24pGfTeCIgAiIgAiIgAiIgAiJQRKCv/e87/Yoof9FHmERABERABERABERABEQgRQLj7dhkaZrvI0olpc9s40+JCIiACIiACIiACIiACKRF4Bs78JK2fVPwEe1h/0fR8mnh1rgiIAIiIAIiIAIiIALFBLa1/zOxoIgOtf9zmviIgAiIgAiIgAiIgAiIQA0IDLNzDC0oohPt/3SvwaSaQgREQAREQAREQAREQAS85PYoovIP1ZdBBERABERABERABESglgQ8P1EU0c1tm1zLmTWXCIiACIiACIiACIhA0xPYAkV0gG1jmh6FAIiACIiACIiACIiACNSSwEAU0aG2KVCpltg1lwiIgAiIgAiIgAiIwDAU0Zts21ssREAEREAEREAEREAERKCGBK5FEZ1g2441nFRTiYAIiIAIiIAIiIAIiMADKKLP2LaZWIiACIiACIiACIiACIhADQn8E0V0hm1r1HBSTSUCIiACIiACIiACIiACr6CIvm9bB7EQAREQAREQAREQAREQgRoSmI0iSkJRktpLREAEREAEREAEREAERKBWBL5FEf25VrNpHhEQAREQAREQAREQAREoEJAiqu+CCIiACIiACIiACIhAXQhIEa0Ldk0qAiIgAiIgAiIgAiIgRVTfAREQAREQAREQAREQgboQkCJaF+yaVAREQAREQAREQAREQIqovgMiIAIiIAIiIAIiIAJ1ISBFtC7YNakIiIAIiIAIiIAIiIAUUX0HREAEREAEREAEREAE6kJAimhdsGtSERABERABERABERABKaL6DqROoGvXrubnn38206dPT30uTSACIiACIpAcgQUXXND07t3bjB8/PrlBNZIIFBGQIqqvQ+oEhg8fbn766Sdz0kknpT6XJhABERABEUiOwE477WROPfVU061bt+QG1UgiIEVU34FaEVhggQXMW2+95SminTt39v6UiIAIiIAI5IPAjTfeaPbdd1+z+uqrm5kzZ+Zj0VplrgjoRDRXtyt/i91hhx3Mgw8+6C18++23N4888kj+NqEVi4AIiEATEmjbtq157733TKtWrcyZZ55p/vKXvzQhBW05bQJSRNMm3OTjjx071vTv39+jcN1115mDDjqoyYlo+yIgAiKQDwK/+93vzJVXXuktdtasWaZLly6ev79EBJIkIEU0SZoaqwWB1q1bm/fff98stthi3t9/+eWXZtlllzVz584VKREQAREQgYwTeOKJJ8xWW201f5U9evQwkyZNyviqtby8EZAimrc7lqP1Dhw40IwePbrFig888EBz/fXX52gXWqoIiIAINB+BVVZZxbz22mstNs7z/JBDDmk+GNpxqgSkiKaKt7kHnzhxounevXsLCA8//LDBb1QiAiIgAiKQXQJDhw41p512WosFfv75555V6+uvv87uwrWy3BGQIpq7W5aPBa+88srmv//9r/nFL/iK/Z8QNb/iiiua//3vf/nYiFYpAiIgAk1GgOc2z2+e437Zb7/9zLhx45qMiLabJgEpomnSbeKxyTs3bNiwQAInnHCCOeecc5qYjrYuAiIgAtklsM0225T1BZ0wYYLp1atXdhevleWOgBTR3N2yfCwY3yJ8jIJk2rRpZp111snHRrRKERABEWgyAldddVVZX9Aff/zRrLDCCl4gqkQEkiAgRTQJihqjBYEtt9zSPPnkkxWpbLzxxua5554TOREQAREQgQwRIMsJuUPbtGlTdlXHH3+8GTFiRIZWraXkmYAU0TzfvYyufdSoUeb3v/99xdX97W9/M0cffXRGd6BliYAIiEBzEsAH9IYbbqi4+RdffNGsv/76zQlIu06cgBTRxJE294C//OUvPZMNFTkqyYcffmg6duxovv/+++YGlpHdc9+6du1aElxWbnnvvPOOmT17dk1X3759e7PSSivFnpPgi08//TT29dVcSKQx3/e0hCTjc+bM8f7t1TuieYklljBrrLFGWltNZVyeR5QilhjzwAMPmJ49e4ai2GCDDcyUKVNC+6mDCIQRkCIaRkifOxHYe++9zU033RTpmt12283cfffdkfqqU3oEFlhgAfPqq6+W9ekNmvmHH34wv/71r81LL72U3sKKRsan+PnnnzcLL7xw7PkoqICy/fbbb8ceI86FuKE888wzZsEFF4xzufM1pNhBIcW8yp9vvvmmuffeez13GbJWpCm80FCBp0OHDmlOk/jYKPJ9+/Y148ePT3zsPA3IyxIKOc+EMLngggvMcccdF9ZNn4tAKAEpoqGI1MGFwH333Rc5ovLWW281/fr1cxlefVMg8Ktf/cp89NFHziMfcMABhhKutZCLLrrIHHXUUVVPdcopp5izzjqr6nFcBiguk+hyXdJ9OcG+4447zG233WbI8cvLRNKy6qqrmpkzZyY9bE3GUy11YwYPHhw5owkvOQQtEbwkEYFqCEgRrYaerm1BYLnllvNOm/wnP4UfvIUWWqhF/2+//dZwDSZFSf0IZF0RJachp3qdOnWqGhKnqhtttFHV47gMkBVFtHjNH3/8sbnuuuu8hOVffPGFy3Yq9pUimhjKugxERhOsBn7B3aNVq1Ylf7/zzjub+++/vy5r1aSNQ0CKaOPcy7rvhEjK8847r2QdmN9RJnr37l3y2aBBg8zf//73uq+9mReQdUV0k002Mf/6178Su0Uk6cZ8XCvJoiJa2Du+vkceeWRiJmkporX6ViU/Dy4kzz77bMnAvLQQIf/Xv/615DPcsPbdd9/kF6MRm4qAFNGmut3pbpZIynXXXbdkkr322svzObrllltKPnv66acN6Z4k9SOQdUWUH8ATTzwxMUDHHnusufDCCxMbL2ygLCuihbVjrv/jH//o+ZVWI1JEq6FX32vJZMJ3wC+XXHKJp4QGWbs4KSUQD79kiQjEJSBFNC45XdeCwIYbbugFk/gFszsPKhRRfuTatWtX0me11VYzJMCX1IdA1hXRGTNmJBqF/cQTTxgqx9RK8qCIwuKzzz4z++yzj6FyTlyRIhqXXH2vW2SRRbyyy2Sm8Mumm27qnZRigt9pp51KPidVHwnwJSIQl4AU0bjkdF0LAiNHjgzMC3r55ZebI444wutbLr/oGWecYSgJKqkPgSwromuvvbaZOnVqomCIHF9++eVrln4qL4ookOfOnWu6d+8eu9iEFNFEv6o1G2z33Xf3Atn8Mn369Pk+o+Xyi9b6xa5mUDRRzQhIEa0Z6sadiJQ6vE0vvfTSJZvcfPPNzT//+U/v77faaivDQ8svb7zxhpc6iBQqktoTyLIiSpQ7LypJy2GHHea9GNVC8qSIwoNo6C222CKWH60U0Vp8o5KfAyUUZdQvJ5xwwvwoeiou8d1o3bp1i248t3l+8xyXiEAcAlJE41DTNS0I7Lrrruauu+4qofLKK6+YNddcc/7fE7BEUnGCRfzCKczjjz8usnUgkGVFlDKw5CtNWkjaHWRmTHoexsubIsqaOQnDd9s1o4UU0TS+QemOiTn+3XffLcnRi+VgxRVX9A4ZCjJmzBgzYMCAkgWRfeH0009Pd6EavWEJSBFt2Ftbu42RD3TPPfcsmfDkk08uibQcNmxYoBn+6quv9n6wJbUnkFVFlBeW119/PRUg3333nVlmmWU8v8i0JY+KKEwefvhhs8MOOzjhkSLqhCsTncmacPHFF5es5aGHHiqpsLTtttuaRx99tKQvPv74+ktEIA4BKaJxqOma+QSWWmopLwgJZ/diwVxDOUZ/FZtyP1QoBOQUrXd5wma8tVlVRI855hhD9Za0ZP/99w+tqZ3E3HlVRNk77jRPPfVUZAx5VkRr6a4RGWgNOhKIROomvwT9+8CqReozTkr9wgk6WVAkIuBKQIqoKzH1b0GAQKRLL720hApvzdttt10gLR5W+KD5hXx0UcuD6jYkRyCriij+xChCacntt98eeJKf9HxxFdHRo0c7BQ0tueSSXvq09dZbz6y++uqJlBTFd3CPPfaIjCSuIsq9rue//Q8++MDLpfr9999H3msjdCR5PUns/UKRA7KdfPXVVyWflUunRj5o8kJLRMCVgBRRV2Lq34IANbQ322yzEioHHXSQV7klSHhYEU3vF9KDUKlDUlsCWVRE+RHENy1Kzeu4tIgQJ8Au7VP4uIpoNWnNqPmO7zYviUFBhFGZ4Se4xhprRE6vFlcRVQqgqHck2X7Dhw83Q4YMKRkUX9CDDz44cDL8/vEh9gv+xFi1qJgnEQEXAlJEXWipbwsC5R5I/MB36NDBSwUTJJzcEH3pN+dTs5jaxXwmqR2BLCqihx56aE0qbvXt29fceeedqcKuhyJa2BD/DvG/3mWXXWLvEWUWP8IoIkU0CqVs9KEUM6VzO3bsWLIgfEEnTpxYdqFUOqPimV/69etniBmQiIALASmiLrTUtwWBciYaTkI5Ea0kVHIJMvkdd9xxqfoF6haWEsiiIkpS9R133DH123X99debAw88MNV56qmIFjZGCixSYcURzLO8PBLgFSZSRMMIZefznj17GrJH+AUf0C5dulRMp0cFJiox+YVyzrvttlt2NqmV5IKAFNFc3KbsLRKTKQ+sTp06lSwO39CgyMrijn369Ak8iZoyZYrZYIMNsrfhBl5R1hRRqm/hs0d+2rQFcyKnhmn6BmZBEYUlJXiL06m5sMU8/+qrr4ZeIkU0FFFmOtxwww2GJPV+iVJgpFzKJ/4dccL64YcfZmafWkj2CUgRzf49yuQKUTZJ7+IXouQ7d+5s8C2rJPwwEm2PEuSX9ddf3/vRlNSGQNYU0f79+5uxY8c6bZ7vGz7GcUzQnLw++OCDTvO5dM6CIsp6ScUUd5/kXA06PfNzkCLq8s2oX982bdp4z1+S1Pslqm8yuaPxQ/bL0UcfHXhaWr/dauasE5AimvU7lNH1YX4/4IADSlaHuZ78oVHkkksuMX/4wx9Kuo4YMcIcf/zxUYZQnwQIZE0RLee2UWmr+KxhYqcuvatcccUV5vDDD3e9LHL/rCiiLLhcBZ2wzZAdIyjAUIpoGLlsfk4gEr7DfiGjCWmYoshee+1l/vGPf5R0pQhFUDqoKGOqT3MSkCLanPe9ql0vscQSXkDR4osvXjIOpj8qKkWRTTfddH75z+L+vKlj8id4SZI+gSwpopzQYNYLOqmpROLUU0/1SoHy3SN1kYvwfSNILuwU32XM4r5ZUkR5eSyXzaLS/s477zwzePDgUAQ6EQ1FlIkOkyZNMttss03JWlxyqS666KLe7wCuNH5Ze+21zcsvv5yJvWoR2ScgRTT79yhzK6TEG+k9/EJNeWrLuwgnWPif+aVXr16GgBVJ+gSypIgSxU5+T1ehDOgLL7xgzj//fEPAm6u4Jm53GT9Limi5l7+w/XBKzQlYmEgRDSNU/8+pWEapZZLTFwtpl0ib9umnn0ZeJLlDyXDhl3POOcdQp14iAlEISBGNQkl9WhAgEIn0Hn6Jar4rvg4z/plnnlky1rhx4wId6XUrkieQJUW0nMtHpV2Tb5QTTYRTHk57XIUKTnEU2CjzZEkRbdu2rZOiUdjf448/brp37x66XSmioYjq3gHrAaWW/XLLLbeYvffe22l9mPGffPLJkmveeecdr7JeWlYGp0Wqc+YJSBHN/C36vwVyarPOOuvUdcUkyuZH2/82TWoXkhl/8sknTuvjYfXGG2+UjEeScRQDSoXWU6ZOnRr4oK3nmpKeOyuKKAFsRMsHmfoq7XnUqFEGkyJCbkTGoPSsi1DTfpVVVnG5JHLfLCmiLBpzKpkCXITKR0GmXP8YUkTLU+UkshYpycLuKyeVPHf90rt3b3PvvfeGXV7yOaerpHvyy9lnn23eeust5/GSvODjjz8O9GNNcg6NVT0BKaLVM6zZCCiB5G6jCknWJKrpLmjdJE6OctpS6z2j4BAB+s0339R66prOlxVFtFxewzAYpAIjgrcg5AalTrarbLjhhuY///mP62Wh/bOmiOJCg4neRaSIutAq3xerES/y+FdmSWbPnu1ZFX744QfnZQ0dOtScdtppztelfQGBV/vss48hk4sk2wSkiGb7/gSujtxv+OYQNJQVIYkxyYzjSLkIzjhjJXHNl19+6fk94R7QDJIVRZTo9cLJZlTuvCSw/uKa2L/97W/NzTffHHWI+f2i5E90HtRekDVFdPLkyc6+3FJE49z54Gt44cEMzulxVqQa1xQsCa+99lpWtuJZ0Qiuw+0rjmKdmY000UKkiOb0ZhMZzMOMnJv1FqKcl19++dj/6Mlph7mwVatW9d6KIaE+ikyU5N11X2xCC8iCIkqBBHw9CZZwEXKH7rzzzi0u4fv00UcfOSfEnzZtWiquL1JEw+9os9Wa5zt65ZVXes+aLAhFRHj2xZWnnnrKdOvWLe7liV2HKZ40bvfdd19iY2qg9AlIEU2fcWozYKq/6KKLAqMWU5s0YGDW8Kc//amqKTl9xIxST+GUmX00uinezzgLimi5oIew7wN5aC+77LKSbiRuJ4G7q0StIOQyrhTRcFrNpogWiJC/9sILL6yrqT6JanZYMrBo1FNQhvkNIVBKki8CUkTzdb8CV7vvvvt6pvrWrVvXZTeF1DnVTE66pnq9xX7xxReeMn/TTTdVs4XcXpsFRZQiBscee6wzQ6p4vfnmmyXXlauFHTYBgRyknklSpIiG0yz3QhF+Zf57YKrHlYSKRvUQ/t2hDFcjSy65pFepqR6+r5jizz33XHPKKafEtspVs3ddWz0BKaLVM8zECFFN9ZjRSd/x+eefJ7JuagsHVddwHZxoZ8xU/mh813EK/TF9nX766WbppZeuOASnAf369TMzZ86MO1Xur8uCIkrUOlHFLkJGg3XXXTfwEhRUsjG4ChWaNttsM9fLKvaXIhqOk9yV5IFNUnjBJIgmjQC0JNfJWBwiYKoPS5+EzyPV66IWDYmyTtxb5syZE6VrxT5kBAgq2RxnYFx1jjnmGMMhRyWRKT4O3exdI0U0e/ck9oow1Y8cOTI04IN0GyhfST/4Yy884Qt5eOE/G5aOh1NkouJJ5NzMUm9FFP+0ON/F4cOHmxNPPLHsrXvxxRfLKqrlLuJ0ZcUVV0zUvCdFtH7/ushLe9BBB9VvAY4zDxo0yHuGVzpZJJgSU/iNN97oOHo+unN4QOaLsFRX5C/FGihTfD7ua6VVShHN/z0s2QF+MqQeqmSqR/nijTNK/eg8IYric9Xspnj//ay3IsrJ9V/+8hfnr1lYNSQKJRA56yqY9S+55BLXy8r2lyKaGErngeIkaXeeJOELeDFj3WGm+kZML7f11lt72Uo6duxYliovi7jPYIpXGeiEv3x1Gk6KaJ3Apz0tDzEeZjzUKgm+SQQKoJzlWaKatjDT4QLQzKb4rCmimNipTe0imORIyl7phwgT+zPPPOMyrNf3scceM7/5zW+cryt3gRTRxFA6D5RHRZRN8jxD0QwL4GwU1yJcsoYMGeJV2cNNq5yQDYOoeNwJJI1DQIpo49zLkp1gqscJHXNPJUEpw1RfTfqOemIkhRV+qmEnCER1EhXf7Kb4LCmiRKnPmDHD+eszduxYc8ABB1S8jh+3d9991zklFH54VAnjRy8JkSKaBMV4Y+RVES3sFhM8pnqe5eWEQwQOE+Lkzo1HNdmr2rdvb3ChIGC1kmCKRzEnzZuksQhIEW2s+xm4GxzgcYSvZKonZRH+kryF50mIdqfaVCWfqrw/qNO+H/U0zXMKgq+nq/CDFOWHl+89iqCrHHLIIWb06NGulwX2lyKaCMZYg+RdEWXTvGizDwJSKwluVrhb5elFm7RtZCuhqlM5kSk+1lc/VxdJEc3V7Yq/2KimehzgeQvHIT7LQlUpgo2oMlVJCILBFJ+lyh9Z41pPRTROuUlOLAloINI6TKj4NX78+LBuJZ/fc889Ztddd3W+LugCKaKJYIw1SCMoomycQwSedwTnhD3vsG4RkJplwVpx/PHHexkAFlpoobJLxSqB5WPChAlZ3o7WViUBKaJVAszT5ZwaYqonoKeSkBqEh9lLL72Uye2RsgdTPGbdSpLHE4J6AK+XItqpUycvB6hryq5JkyaZHj16REK12GKLeSZ216pdWAiWWWaZRHynpYhGulWpdGoURbQAJ4qpntR8nOjfeuutqTCtdtClllrKXHvttaZ3794Vh6KsLIq3TPHVEs/+9VJEs3+PEl8hpnpM8OTaLCdff/21IXr46quvTnz+agbkR/3iiy+u6DPFgxifKX6EJOEE6qWIxk06/+c//9mcf/754Rub1+Puu+8O/dELGiyq+T9sIVJEwwil93mjKaKQimqqJ/PDcccdZ7777rv0ADuOvPnmm3suNaRIKyeY4nHXIZOGouIdAee0uxTRnN64ape96qqreooaVT0qCfncOEGdO3dutVNWdf3iiy/upZoKC1CRKd4dc70U0UcffdRsu+22zgtea621nAKceCmJ4/uclBIjRdT5Fid2QVL3MLEFJTRQVFP9c88957kmUTCi3oJSjIJZyRRPwRWe8Q888EC9l6v5a0hAimgNYWdtqqim+unTp3um+mnTptVlC6T2wRSPAlJJqDlOubo8OevXBahv0nooovh4UhKwUqqWIDb4vvES5SJEwGPec3UBIMiNdVb7fZIi6nK3ku2Lz3v//v2THTRDoxGsedFFF1W0EH322Wfm4IMPNrfffntdVk75z2uuucbgr11JZIqvy+3JxKRSRDNxG+q7CN6YiS6uZKr/6quvDPWgeaDUUgYOHGguvfTSij5+mOL5sU+i1Ggt99a2bVvP15FydlGEH5SJEyean376KUr3yH3qoYjywxjH7YMMCWR3cBVKd26yySaul3kBSwQuVSNSRMPpYT4m1VaSwosE3xXywjayrLfeep51K8xnHoUVtxbKMtdKNt10U29tK620UtkpMcWfffbZXulpmeJrdWeyNY8U0Wzdj7qthlMmfHfCavuiiKKQopimKQSZcMIZVp7v+eef90xPWY8SDWJFsnXXuuYnnHCCV1UkSamHIopyt8suuzhvo2fPnuahhx5yvg5/Myo4ucqYMWO806RqRIpoOD1Xv9/wEZurR9QsIryQESMwa9as1AGRs/ncc881Cy+8cNm5ZIpP/TbkYgIporm4TbVZJKb6Cy64wBxxxBEVJ8RET8RjWg+zzp07e6dQYdV2OCnF76ha02lt6JbOQnUgIkhdhFPEOHkxK81Ra0WUk/cPPvigYu7XoPVywkXy6zjBFwR4UFXLVYi4X3bZZas6qZEiGk4dP96rrroqvKNW+Yj8AAAcOklEQVR6VCQAR6wGlRLgk/YMZfTBBx9MheYiiyzi5Qbt27dvxfEff/xxLyo+6ZPwVDalQVMlIEU0Vbz5HBx/UH4UypnqMQ2vvPLK5q233kplg5hxcK4vZ7LOqyneD6tZFVF+BPmhchV83Pbcc0/Xy+b3J1VUpWjdcgNT7rMa864U0fBbJkU0nFHUHlFM9QQEUZ0sDcEX+9VXXy3ry40pnvyhp512WlUveGmsXWPWh4AU0fpwz/ysq6yyirnrrrtM165dS9aKaRQTaZrC2/oOO+xQMsXLL7/sOb3n0RQvRfT/E8AFBHcKV8FEjqk8rpDOBrcSV+E6Uk3FFSmi4eSkiIYzcumBqR43qqAXN3zNCeAjRV9actJJJ5mzzjqrZHisGnvttVdqp7Fp7UfjpktAimi6fHM9+rPPPms23njjkj1gTolzouUCgxyO48aNK7nk3//+d6ygE5e5a9W3GU9EMRniF8YPpYtwisKP5+zZs10ua9GXl6c4aWHefvttL9iCNcQRKaLh1KSIhjNy7XHeeed51Yv8QoWmQYMGuQ7n1L9jx45esQp/VgzcqJZffnnzySefOI2nzo1NQIpoY9/f2LtbZ511AisrzZkzx3uQUHkmTUFhwXeI1B9+obLS1KlT05y+JmM3oyKKbzEJ5l2FlyIicKsRfNfw+SQHo6uQiJtypHEka4oouSXDghL9+yS1zjbbbBO6fYIeZ86cGdrP30GKqDOyiheQq/Odd94xHTp0KOlHgCRBS2nLfffdZ3r16lUyDdYFrAwSESgQkCKq70IggREjRng5Of1CgNCRRx5ZE2rlTKkEVBGklHdBKSJQyEXSCFYiAIhTSleJ42c2evRoQ0ouV+GH86ijjnK9rEV/fpzxM6V0p6uQqYCMBXEkS4oo/nv4WLueSEsRjXPn63cNacdwrfILgaYcMtRCMMEHpdQj08lGG21UiyVojpwQkCKakxtVy2WSboME4CTz9gsPEB4ktRBObTi98QsR1yussEJN8+Glsd9XXnnFrL766k5DT5gwIfCUwWkQX+cNNtjAUJHKVTjtYD1RBUXw/fffd1a+o46fZj+CL8LyNJabP0uKKBkp3njjDWdU5K+NUgVLJ6LOaFO54I477jC77757ydi8wPMiXwvBAoFVK+hlm2fOlClTarEMzZEDAlJEc3CTar1EHmA8yPzCg4MHiKv06dPHu2T8+PGul3opd0i94xdSg9x5553O42XpgnIBWZXWiL9inMjvSmOSqzVOoQLXUptEnz/yyCNZugVOa4nrEpIlRZTcrXES9EetUCRF1OkrlUpnTvwxy/vzd5LInhd4XuRdhH/nvHSOHDnSuZgG1wQVoCC5PnlGJSIAASmi+h6UEMCkg2nHLzxQyFEXVXgQktC48MDhoTR48GCnk0zMsTy0/IKfYVjJuKjrrFc/qlnFyQlKRSbMq0lJOTeMsPEpOuASeXvxxRfXzK0jbO1xPifdTJyk+FlSRPn3F6cgwplnnmkoChAmUkTDCKX/OS5V/Jv2C4cLe+yxh9MCeEnFHWvxxRf3XiIpl+oSMFgufy9uSQQ0xckJ7LQBdc4FASmiubhNtVskybs5dcOMWiw8MAhSIsAmimACJE2PP8DEtbIHZh3MO5h5iuWHH37w3u5dHopR1l3LPqeccoo544wznKfs1q2bmTx5svN15S54+OGHzXbbbec0Htz5rkQVfBP5XvHjk1fhdH7DDTd0Xn5WFFH+Db300kvO7iBs+JBDDjH494aJFNEwQul/zj0O8gN1KVfLSyYK6IABA1osGNcalNFHH3008kbIdBLkE4oP6W233RZ5HHVsXAJSRBv33sbaGaX2OMX0C07nUXM/YjbnR6tdu3aBa6CyBzkhg8z/QRdQq5gk+37hdIcUJXkVgn2uu+465+XDFsUgCcHczA+FX9EPG5sIciLJowqRupQ0zbuQX5diCy6SFUWUYCtqeseRqEn9pYjGoZvcNZtssklgRPx7771nOnXqFCmBPBXteOYG5ZBmpRQ04QUa6wD/HSZU6kOp9QtR9XHK/IbNp8/zR0CKaP7uWaorJmE8PkF+iRKYgjKDYhg1uhkzP4pvmHlmp512Mvfff3/JmlhrWBnQVGFVOTjpcCZNmhRrlO23375qf0vuF2mRqMTiKpx2k+s1qmAO5sUh70JexiCzZ6V9ZUERxXowY8YMz8QaR7BwkBcyTKSIhhFK9/PLLrvMHH744SWTRM36QEYLspVwIhomVBvbb7/9vADESkIKPqxa/rKjP/74o+fvrhKfYaQb/3Mpoo1/jyPvkBOuIJMvju8k9K709tulSxfPFB+UAL/SAjiNo+RjpVMmSn3yI8iPqV+qye8YGUxKHXnYk52g3MlxpWmJfMb89tVXX8Ve3fDhw82QIUNiXR/VVFsYnKjz1VZbLdZcWbro6aefNltuuaXTkuqtiC611FLeCZer+0Vhk7hh4FKB4hAmUkTDCKX3OYoeJ59Bz5M111zTkKWjnPCCcvnllxusNC5C4BOmetx7KgnBbhRC8Qun9HF8ll3WqL7ZJyBFNPv3qGYrpOLGoYceWjIfpdrwZywnlJEjvyVBNHGEknMoNpX8hQiWOPnkk0uGHzVqlDnssMPiTJuJay688MLY0aNkISARuGsOUKqdkFSakz2UfFch0AAzX9SiBuWKI7jOm4X+vIyhlIWdAhWvtZ6KKMrntddeW5Vv7qmnnhrZl1mKaP2+pSh6KHx+eeqpp8xWW21VdmG45/CigrIaR/g3Qe34oUOHln1ZwYJDaWi/oBzHnTfOWnVNNglIEc3mfan5qlq1auX9uLZp06bF3JQ15CQrqLb7oosu6ikzYfW7C2/iYXkYMQlh+qQMnF/4geNUjaCXYqlF3eQ0bwZs4ePfV9Q5CR4jNyDKRhTBh4wXjjhBN4Xx+dEJeikoNz+KzLBhw6IsLxd9MH1eccUVkdcaVxElx2ycKkWcbuFugU83mS7ifrfYIFkRMJ/y8hFF4iqivACTRUISn0C5dHCVrBd8N3GR4vlfTsjQQe7oHj16VFwcbkaY6oNM7bzwYvXCsuYXLAxYGiTNS0CKaPPe+xY733///c31119fQoOHS9ADiKAN3qLDSgXecMMN8+sa8+ONGaeS8MDjBzRI8SWpdvfu3Usuj1PhJ0u3nfrn1EGvRmDDCen06dO9RoQ6LxH4ZxF0QONUhPsc5xS0sDayFeAviEtBVCmXCzbq9Vnrx8mOy/2Kq4gS3IUfdFThJRIFFGWwmntcPB//ZoN8DsutKa4iiutNPXPMYlUgSDOvNdB5WcBdx3/f586d62W3+PLLL1vcMiprRXkeU1Ck4DrFCy/Bbv6MKsUDw5FnDEqxXzgxJQWaX9KoFhf134z6ZYOAFNFs3Ie6r4IfASJj/UIeOX9kN4oipxf+09PiazlJwfzLQ6ZY+FEmn6Tfcb24D2/gmJxRdIvlwAMPDDz5I5VIXP+3uoO3CyAfapxk/5XWzg8PP0JBtaar2bNrkBIvLK+99lqsKYm2dVHEXCeh7j0n8K5CYnC4zpkzJ9KlcRXRSIOn2IkXGcymWCKiSlxFNOr4afaLE4iW5npcxibHa1CO2zFjxngZSoqFlxWerVEsVCifxcGkW2yxhbnpppsqFtXge4PCiiWk2K+YF1hORf0n9F988YVZbrnlvOeVpDkJSBFtzvveYtcrr7yydwIZ9IDgbboQEIMpHp/GsBMSonNRVslnFyRRfZJwnj/mmGPmm+oJ7sF9oHXr1i2G5cFHsNSsWbNyeTc5xSAdkmugV603y8sFaZjK3deg9fBDdv755zsvlR8slNg0BZ9mTnD8FWiizMlLUZAFIejavCqirqeh7D3PimjUpP1Rvh+17MNzm5c9noF+2Xrrrc2TTz45/69xgaBASKWDANyd+M7eeuutgdsg+I1KbEFFT4oveOKJJ7wApWLrSbmcxeQrjepeVEu2mqs2BKSI1oZzpmcpZzLh1LMQvIQvI2/RYSU+x44d6ymqflOQHwCmIRRNzDiVBLMuSm3BV47gJE5L/YIPIvvIqxAAQwYBlyTxtdwryj4mOvLJugiBEiTgdxX81oJKA7qOE9Y/TplVxqS8LPlyo0geFdEJEyZ4igauGC4iRdSFVjJ9cZ0ilZJfOMkunHry8s6zMyzlGqZ4nrdhuXJRfqOY6vEt5qWtkH4PH1LctfxSzgUsGUIaJesEpIhm/Q6lvD4eKPgWBTmRY4bBT42HFw8x/0lk8dLKmeLDlh/FVI/pBoUYk1C5FFOchnIigMKUV4E3PyicPGdN4pS3pBIXqb/iBMvggxkUZZs0lyOPPNJzFXEVrATU9I5iTsybIvrCCy8YctyGvUwGMZMi6vpNqr4/rlNBaZdOPPFEQ4o2Dg84RAhLn0awqN8UH7a6qKZ6/G/JvIL1gWAmf4qpSkGxYWvQ5/knIEU0//ewqh3gWxmUA46AFwKRMOMEpXQqnhRTPJWPpk6dGmstUU31RHtTt56ApqCk+0kkeY+1gQQvwkSFX1eWhBeAoByAYWscNGiQd+rtKihAlHYNK3TgOm5Qf4I8oiRqD7o2aonCPCmib731lveyRz7KOCJFNA61+Nfgp8+98iegLySL79Onj+dOVenlNkr6vEorjGqqxzrCocZJJ50U6N6VV9eI+HdPVxYISBFt8u8CpvSgSParrrrKqxMfVnUHPzlM8VFOhiqhjmqqf/HFF70Sdvy4+wWTT5ipPw+3m9MDKk5lQfjxQMGPmjO0eM1xzd6Uft1jjz1qtn1OAMNcToIWE/X7lhdFlH9buF/wYhlXpIjGJRfvunLfLfxCOXkMK8sc1RQftjqsHscee6x3Alspqp50c5y8BkXPk+mDgKYoZUPD1qPP80VAimi+7leiqyVYg7fpoBxymEoqmVQxxWPWpO55kkLOO0yllfLalVsbayL6kjf8vAsnzJwmcjJYDyEynEIGNFc/QdbLKQkVeSr9KJXbl2vVpmr54F9MhK+rfPrpp170fNjJbdYVUV4yiLimPG+ce13MTYqo67eouv7k38Q87pew5zf9ec6SKSDs++uyQk7TsaAEuXoVxqm0th133DEw9ZPLGtQ3fwSkiObvniW2YioSuSTmLkyM2Z437bim+LANUImHoJg4FTcwB2PCbwRBySFgLCw6Nem9EhVP2i5OCuNKuVRbYePxI4VvqUvlorAxwz7faKONvECxONKrVy9DYE8lybIiSuozngNxU2z59y1FNM63KN41PB95FrtKtab4sPl4CcW9iLR0rhLXDch1HvXPFgEpotm6HzVdDSmDML+7SFKm+LA549Y+xmxPiqFGEvIA4udVKW9rEvvFr4y6z5wQVntKgnl99913d14WCiHVn2otBFWRucBVijNLlLs2a4oo9/nxxx/3cvwGRTC7MijuL0W0Gnpu1/JvdfDgwU4X8e+rkKDe6ULHzljTSL3HGl2sIpzO8yIaNUev47LUPaMEpIhm9Makvay1117b6USTKGFM8bUOpEEJw6eokqnez4q9pZkIPe17EzQ+pwx77rmnFzREdamkKucw15QpU8y4ceM8k1rcwJ3iNRMZy6mLyz0rXE8KrnqUA73ssstC8+MG3ZcPPvjAS7lVKVsDrgb4XNdTcLWgaMVtt93mpZ6KWrLTdc3VFDBwnSvp/rgnBPkuJj1PEuOh3BFYhitSVCElGqZ4vgu1kiimev9aKBnNv0dJ8xCQIto897rFTkkyTqqOKJK2KT5sDZjqST8SFCkfdO2IESNiVcwJW0dWPufEgFMNlNK4p4cUMED5pCWttHMaMm3atMj3q8CV3IUk4A6qVZ02e8ycKGqwdRH2uf7667eoIOO/noIRlGAlQj9N4RQJlwb8vvmz0Hi5IHAMn9a0hRckzP1BpXjTnrua8SlsQKUtLCp5ENZ69913R1oqL4W80N9+++2R+ifdiTLDJMCPaqongCrrxT2SZtTs40kRbcJvAG/TmCKjlH8kRx2lFquNiq8WM6Z63pLxPQwTgmRWWGGFqgMvwubJwufksuzUqZN3MoISVfiT/yZlC0oJil1xo9IJpykSERCBfBLgZDtKZglM8fjzkyu63kJUfVRTPdlaXCq41Xtvmr86AlJEq+OXy6vJLYd5rpLUyxQfBjSqqZ493nXXXWHD6XMREAERyBWBpZde2iubGVaath6m+DCQ+O/ffPPNFaPqGQOfeBRXSXMQkCLaHPe5xS5RQlHUygmmWt6iMTtmUaKY6sePHx8rWCaL+9WaREAERKBAgKIeKGrlBBcMXtgJGMyiYKon1qDSbxCuEgQP1tKfNYusmmVNUkSb5U7P2yfmeMzy5SIZr732WoOzeL1N8WG3JcxUTz5EHmQEk0hEQAREoFEIEFxYrtDIs88+6/mPZ8EUH8a7EFVf7mQX14OsKtNhe9PnbgSkiLrxyn1vApQIVPILpngUUJzK8yQDBw40l156aWCENhGiBC5JREAERKARCFTKeUs5Ziqy5ekUEVM92TqoqOSXe+65p+Y5lBvhO5LHPUgRzeNdq2LNJKEnvVGxZN0UH7Zd9kNUfdeuXVt0xbUAM75EBERABBqBAKnsODAolqyb4sO4Y6qnQp8/7zBWLQIxa1ncImyt+jwdAlJE0+GayVFJXk8S+2LBFE9UPCeieRZM9ZyMUhGoWHjjzktKljzz19pFQATSJVDIgoHiVpA8meLD6ASZ6ocMGWLOPffcsEv1ec4JSBHN+Q10WT61yymBiaB4ooCiiDaSDBgwwEvzVEimTgnTww8/vJG2qL2IgAg0IQF8PzFjF2TkyJFeZaU8meLDbhuHJUTVF0z15LD2W7rCxtDn+SMgRTR/9yzWilHMyCnZtm1bL4F5v379Ek9kHmthKVxUbKrHbEVuTUrHSURABEQgrwQeeOAB07NnT68wAb7xYSn48rpPv6m+W7duZvLkyXndjtYdgYAU0QiQGqHLfvvt59WVJhgJH6O8m+LD7sliiy3mnYxiqu/fv7+58cYbwy7R5yIgAiKQSQL4Ss6aNcsUasXz340upKnCLM9v1qGHHtro223q/UkRbZLbT15NSrw1mik+7PZhqu/bt2/FnHVhY+hzERABEagngZNPPtm0b9++4UzxYUwx1Y8aNcpwKtrohydhLBr5cymijXx35+1tkUUWMV26dDEzZsxogt2WbpE64tQx/+6775py/9q0CIhAvgmQN/TFF1/M9yZirr5du3amTZs2Kksck18eLpMimoe7pDWKgAiIgAiIgAiIQAMSkCLagDdVWxIBERABERABERCBPBCQIpqHu6Q1ioAIiIAIiIAIiEADEpAi2oA3VVsSAREQAREQAREQgTwQkCKah7ukNYqACIiACIiACIhAAxKQItqAN1VbEgEREAEREAEREIE8EJAimoe7pDWKgAiIgAiIgAiIQAMSkCLagDdVWxIBERABERABERCBPBBAEaUI96J5WKzWKAIiIAIiIAIiIAIi0DAEvkUR/dS2tg2zJW1EBERABERABERABEQgDwRmo4i+b1uHPKxWaxQBERABERABERABEWgYAm+iiFKAfI2G2ZI2IgIiIAIiIAIiIAIikAcCr6CIPmPbZnlYrdYoAiIgAiIgAiIgAiLQMAT+iSJ6p219GmZL2ogIiIAIiIAIiIAIiEAeCIxHER1u25A8rFZrFAEREAEREAEREAERaBgC56CIDrBtTMNsSRsRAREQAREQAREQARHIA4GBKKKb2zY5D6vVGkVABERABERABERABBqGwBYoor+0bc68PxtmZ9qICIiACIiACIiACIhAZglQUGlJFFFEkfOZvU9amAiIgAiIgAiIgAg0HIFJdkc9CoroSPs/RzfcFrUhERABERABERABERCBLBIYZhc1tKCI7m7/544srlJrEgEREAEREAEREAERaDgCveyOJhQU0V/Z//nAtgUabpvakAiIgAiIgAiIgAiIQJYI/GQXs7RtnxQUURY30bbuWVql1iICIiACIiACIiACItBwBDz/UHZVrIgOsP+vfKINd6+1IREQAREQAREQARHIFIGBdjXX+BXRJexfvGcbf0pEQAREQAREQAREQAREIGkCc+2AHWzjzxYnovw/2ulBSc+o8URABERABERABERABETAErjWtgEFEsWmef6uh22PCZMIiIAIiIAIiIAIiIAIpEBgWzvmxHKKKH/PhwpaSoG8hhQBERABERABERCBJiYwP0ipkiK6k/3w/iaGpK2LgAiIgAiIgAiIgAgkT8DLHVo8rN80z2f83b9s2zj5+TWiCIiACIiACIiACIhAExJ4fp5u+XOYIsrn+9g2rgkhacsiIAIiIAIiIAIiIALJE+hrh7zTP2zQiSh9FrTtmXmaa/JL0YgiIAIiIAIiIAIiIALNQuA5u9HNbPsxqiJKP0zzKKMopRIREAEREAEREAEREAERcCWA8okSijJaIuVORAsdR9r/ONp1RvUXAREQAREQAREQAREQAUvgItv+VI5EmCLa2l74um3thVIEREAEREAEREAEREAEHAi8Y/uuZduXcRVRriPx6MO2LeAwsbqKgAiIgAiIgAiIgAg0L4Gf7Na3s21iJQRhJ6KFa4fa/ziteVlq5yIgAiIgAiIgAiIgAg4Ehtm+6I8VJaoiymkop6KcjkpEQAREQAREQAREQAREoByBifYDTkM5FU1EEWUQ/ESftm21sEH1uQiIgAiIgAiIgAiIQFMSmGl33c22j6LsPuqJaGEslFCUUQUvRaGrPiIgAiIgAiIgAiLQPARQPlFCUUYjiasiyqBb2EbR+oUjzaBOIiACIiACIiACIiACjU7ge7vB7rZNdtloHEWU8QfaNtplIvUVAREQAREQAREQARFoWAIH252Ncd1dXEWUeX5v22W2LeQ6qfqLgAiIgAiIgAiIgAg0BAEqJx0a94CyGkUUer1tu9W2RRsCpTYhAiIgAiIgAiIgAiIQlcC3tmNf2+6PeoG/X7WKKOOR0ul229rFXYSuEwEREAEREAEREAERyBWBz+xq+9hG3FBsSUIRZXKi6W+zbd3YK9GFIiACIiACIiACIiACeSAwbZ4S+t9qF5uUIso6WtmGz+iAahel60VABERABERABERABDJJ4FK7quNt+yaJ1SWpiBbWgyL6N9taJ7FAjSECIiACIiACIiACIlB3Al/aFRxg251JriQNRZT1dbLtfNt+m+RiNZYIiIAIiIAIiIAIiEDNCfzDznisbe8kPXNaimhhnb+x/zHKtlWSXrjGEwEREAEREAEREAERSJXADDv6INuqCkiqtMK0FVHmpgLTPrb92TYFM6X6fdHgIiACIiACIiACIlA1gal2hBG23WAbFZNSk1ooosWL39H+z2DbOCmViIAIiIAIiIAIiIAIZIfAY3YpuFbeV6sl1VoRLexrw3kKaT/754K12qzmEQEREAEREAEREAERaEGAE89xto207YVas6mXIlq8z83t/+xt2262dak1AM0nAiIgAiIgAiIgAk1G4HW7X/K/32Lbv+u59ywoosX772z/p5dtmPAx3ysFVD2/HZpbBERABERABESgEQh8YTfxqG0P2obZfVZWNpU1RdTPZVX7F2vZ1nXenyiqlBJtM09JbZ8VkFqHCIiACIiACIiACNSJwEd2XpTNz237dJ6iOd3+SXvZttfqtK7Qaf8f154H6mpJ9QkAAAAASUVORK5CYII=`;


/***/ }),

/***/ "Oxgz":
/*!************************************************************************!*\
  !*** ./src/app/pages/shared/vender-por-rango/vender-por-rango.page.ts ***!
  \************************************************************************/
/*! exports provided: VenderPorRangoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenderPorRangoPage", function() { return VenderPorRangoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vender_por_rango_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vender-por-rango.page.html */ "3m9b");
/* harmony import */ var _vender_por_rango_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vender-por-rango.page.scss */ "28O3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let VenderPorRangoPage = class VenderPorRangoPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.tipo_num = '0';
        this.sorteo_tipo = 'r';
    }
    ngOnInit() {
    }
    submit(form) {
        if (!this.isValid())
            return;
        this.modalCtrl.dismiss({
            desde: this.desde,
            hasta: this.hasta,
            cantidad: this.cantidad,
            tipo_num: this.tipo_num
        });
    }
    isValidNumber(numero) {
        let first = numero.toString().indexOf('-') < 0 && numero.toString().indexOf('.') < 0;
        if (!first)
            return false;
        const n = parseInt(numero.toString().replace(/\D/g, ''), 10);
        return !isNaN(n) && n >= 0 && n <= 99;
    }
    isValid() {
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.desde) || Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.hasta) || Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.cantidad))
            return false;
        return +this.desde < +this.hasta && this.isValidNumber(this.desde) && this.isValidNumber(this.hasta);
    }
};
VenderPorRangoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
VenderPorRangoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-vender-por-rango',
        template: _raw_loader_vender_por_rango_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vender_por_rango_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VenderPorRangoPage);



/***/ }),

/***/ "R0EX":
/*!****************************************************************************!*\
  !*** ./src/app/components/dropdown-list/dropdown-list.component.module.ts ***!
  \****************************************************************************/
/*! exports provided: DropDownListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownListModule", function() { return DropDownListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dropdown_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-list.component */ "ELmN");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");







let DropDownListModule = class DropDownListModule {
};
DropDownListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dropdown_list_component__WEBPACK_IMPORTED_MODULE_3__["DropdownListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"]
        ],
        exports: [_dropdown_list_component__WEBPACK_IMPORTED_MODULE_3__["DropdownListComponent"]]
    })
], DropDownListModule);



/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./am-et": "gzlh",
	"./am-et.js": "gzlh",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-ps": "TJgH",
	"./ar-ps.js": "TJgH",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku-kmr": "dVgr",
	"./ku-kmr.js": "dVgr",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./ps": "Uzqz",
	"./ps.js": "Uzqz",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/base.service */ "Do2H");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/util */ "JQC8");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/app-minimize/ngx */ "Dicn");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");















let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, bs, location, network, ngZone, util, navCtrl, storage, appMinimize, oneSignal) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.bs = bs;
        this.location = location;
        this.network = network;
        this.ngZone = ngZone;
        this.util = util;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.appMinimize = appMinimize;
        this.oneSignal = oneSignal;
        this.hasInternet = false;
        this.presenciaTimer = null;
        // this.initJSON();
        this.initArrays();
        console.log(util.commands.HORIZONTAL_LINE.HR_58MM);
        console.log(util.commands.HORIZONTAL_LINE.HR_58MM.length);
        // if ()
        // console.log();
        this.initializeApp();
    }
    initArrays() {
        Number.prototype.toCurrency = function () {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(this).replace('$', 'C$').replace('.00', '');
        };
        JSON.clone = (obj) => JSON.parse(JSON.stringify(obj));
        Array.prototype.clone = function () {
            return JSON.parse(JSON.stringify(this));
        };
        Array.prototype.removeAt = function (index) {
            if (index > -1)
                this.splice(index, 1);
        };
        Array.prototype.removeBy = function (params) {
            let x = this.filter(params) || [];
            x.forEach(y => {
                // this.remove()
                let index = this.indexOf(y);
                if (index > -1)
                    this.splice(index, 1);
            });
            return x.length;
        };
        Array.prototype.sumBy = function (params) {
            let sum = 0;
            let array = this.map(params) || [];
            array.forEach(x => {
                if (!isNaN(x))
                    sum += Number(x);
            });
            return sum;
        };
        Array.prototype.groupBy = function (f) {
            let array = [];
            let evalIndex = (v) => array.findIndex(x => x.some(y => f(y) == f(v)));
            this.forEach((v, i, a, j = evalIndex(v)) => j > -1 ? array[j].push(v) : array.push([v]));
            return array;
        };
        Array.prototype.distinctBy = function (f) {
            let array = [];
            let evalIndex = (v) => array.findIndex(x => f(x) == f(v));
            this.forEach((v, i, a, j = evalIndex(v)) => {
                if (j == -1)
                    array.push(v);
            });
            return array;
        };
    }
    marcarPresencia() {
        try {
            this.bs.presencia();
        }
        catch (ex) { /* presencia skip */ }
    }
    iniciarPresencia() {
        if (this.presenciaTimer)
            return;
        this.marcarPresencia();
        this.presenciaTimer = setInterval(() => this.marcarPresencia(), 30000);
    }
    loadEmpleado(presentAlert = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const temp = yield this.bs.getEmpleado();
                if (!presentAlert && temp && temp.usuario) {
                    try {
                        console.log('setting external user id', temp.usuario.id.toString());
                        Promise.resolve(this.oneSignal.setExternalUserId(temp.usuario.id.toString()))
                            .catch(osErr => console.log('OneSignal skip', osErr));
                    }
                    catch (osErr) {
                        console.log('OneSignal skip', osErr);
                    }
                }
            }
            catch (ex) {
                console.log('loadEmpleado', ex);
                const status = ex && ex.status;
                // Solo se cierra la sesion si el servidor la rechazo (401/410); si fallo la
                // conexion la app sigue funcionando y se vuelve a cargar al refrescar/reanudar
                if (status == 401 || status == 410)
                    yield this.util.redirectToLogin();
                else if (presentAlert)
                    yield this.util.handleError(ex);
            }
        });
    }
    initOneSignal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (typeof window.cordova === 'undefined') {
                    console.log('OneSignal skip (web)');
                    return;
                }
                this.oneSignal.startInit(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_14__["environment"].ONE_SIGNAL_APP_ID, src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_14__["environment"].FIREBASE_SENDER_ID);
                this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
                this.oneSignal.handleNotificationReceived().subscribe(() => { }, () => { });
                this.oneSignal.handleNotificationOpened().subscribe(() => { }, () => { });
                this.oneSignal.promptForPushNotificationsWithUserResponse().then(d => console.log(d)).catch(ex => console.log(ex));
                this.oneSignal.endInit();
                console.log('ONE SIGNAL SET UP');
            }
            catch (ex) {
                console.log('OneSignal init skipped (web)', ex);
            }
        });
    }
    initializeApp() {
        // b411c99a-a62f-4b07-a5ad-c4e4eb6d3c8e
        this.platform.ready().then(() => {
            // this.platform.
            this.initOneSignal();
            let path = this.location.path().toLowerCase();
            console.log('path:', path);
            if (path != '/login')
                this.loadEmpleado();
            this.iniciarPresencia();
            this.platform.resume.subscribe(evt => {
                this.marcarPresencia();
                if (this.location.path().toLowerCase() != '/login')
                    this.loadEmpleado(true);
            });
            this.platform.backButton.subscribe(() => {
                let path = this.location.path().toLowerCase();
                console.log('path:', path);
                if (path == '' || path.trim() == '/tabs/tab1' || path.trim() == '/tabs/tab2' || path.trim() == '/login') {
                    try {
                        if (typeof window.cordova !== 'undefined')
                            this.appMinimize.minimize();
                    }
                    catch (minErr) {
                        console.log('minimize skip', minErr);
                    }
                }
            });
            this.storage.get('token').then(d => {
                if (!d)
                    this.navCtrl.navigateRoot('/login');
            });
            this.storage.get('keep').then(d => {
                this.util.KEEP = d == undefined ? true : d;
            });
            this.storage.get('continue').then(d => {
                this.util.CONTINUE = d == undefined ? false : d;
            });
            this.storage.get('impresora_address').then(d => this.util.IMPRESORA_ADDRESS = d || '');
            this.storage.get('qty_first_v2').then(d => {
                this.util.QTY_FIRST = d == null ? true : d;
                // console.log(d);
            });
            this.storage.get('send_sms').then(d => {
                this.util.SEND_SMS = d == null ? false : d;
                // console.log(d);
            });
            this.storage.get('send_whatsapp').then(d => {
                this.util.SEND_WHATSAPP = d == null ? false : d;
                // console.log(d);
            });
            this.storage.get('print_receipt').then(d => {
                this.util.PRINT_RECEIPT = d == null ? false : d;
                // console.log(d);
            });
            if (typeof window.cordova !== 'undefined') {
                try {
                    this.statusBar.overlaysWebView(false);
                    this.statusBar.styleLightContent();
                    this.statusBar.backgroundColorByHexString("#000000");
                    this.splashScreen.hide();
                }
                catch (nativeErr) {
                    console.log('native chrome skip', nativeErr);
                }
                try {
                    this.hasInternet = this.network.type != this.network.Connection.NONE;
                    this.network.onDisconnect().subscribe(() => {
                        this.ngZone.run(() => this.hasInternet = false);
                    });
                    this.network.onConnect().subscribe(() => {
                        this.ngZone.run(() => this.hasInternet = true);
                    });
                }
                catch (netErr) {
                    console.log('network skip', netErr);
                }
            }
            else {
                this.hasInternet = (typeof navigator !== 'undefined' && navigator.onLine !== false);
                if (typeof window !== 'undefined') {
                    window.addEventListener('offline', () => this.ngZone.run(() => this.hasInternet = false));
                    window.addEventListener('online', () => this.ngZone.run(() => this.hasInternet = true));
                }
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _util_util__WEBPACK_IMPORTED_MODULE_10__["Util"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"] },
    { type: _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_12__["AppMinimize"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_13__["OneSignal"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/base.service */ "Do2H");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




let AuthGuard = class AuthGuard {
    constructor(bs, navCtrl) {
        this.bs = bs;
        this.navCtrl = navCtrl;
    }
    canActivate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.bs.get(this.bs.IS_AUTH_URL, true);
                return true;
            }
            catch (ex) {
                const status = ex && ex.status;
                // Solo se vuelve al login si el servidor rechazo la sesion (401/410).
                // Si fallo la conexion o el servidor no contesto, se deja pasar para que
                // la app siga funcionando y cada pantalla avise si algo no cargo.
                if (status == 401 || status == 410) {
                    this.navCtrl.navigateRoot('/login');
                    return false;
                }
                return true;
            }
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "UbLU":
/*!*********************************************!*\
  !*** ./src/app/services/printer.service.ts ***!
  \*********************************************/
/*! exports provided: PrinterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrinterService", function() { return PrinterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "7uwA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let PrinterService = class PrinterService {
    constructor(bluetoothSerial) {
        this.bluetoothSerial = bluetoothSerial;
    }
    enableBluetooth() {
        return this.bluetoothSerial.enable();
    }
    searchBluetooth() {
        return this.bluetoothSerial.list();
    }
    connectBluetooth(address) {
        return this.bluetoothSerial.connect(address);
    }
    printData(data) {
        return this.bluetoothSerial.write(data);
    }
    disconnectBluetooth() {
        return this.bluetoothSerial.disconnect();
    }
};
PrinterService.ctorParameters = () => [
    { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_1__["BluetoothSerial"] }
];
PrinterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PrinterService);



/***/ }),

/***/ "V+NP":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-balance/detalle-balance.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color='light'>\n      <ion-buttons slot=\"start\">\n          \n        <ion-button (click)='close()'>\n            <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title class=\"center\">Balance detallado ({{usuario.nombre}})</ion-title>\n      <ion-buttons slot=\"end\">\n\n          <ion-button [disabled]='boletos.length == 0' (click)='openSubMenu($event)'>\n            <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar color='light'>\n    <div class=\"top\">\n        <!-- <ion-searchbar button (ionInput)='search($event)' [(ngModel)]='searchTerm' placeholder='Buscar...'></ion-searchbar> -->\n        <!-- <ion-calendar> </ion-calendar> -->\n        <!-- <ionic-calendar-date-picker (onSelect)=\"dateSelected($event)\"></ionic-calendar-date-picker>\t -->\n        <!-- <ion-calendar [(ngModel)]=\"date\"                (onChange)=\"onChange($event)\"                [type]=\"type\"                [format]=\"'YYYY-MM-DD'\"                [options]='optionsRange'>  </ion-calendar> -->\n        <!-- <ion-calendar></ion-calendar> -->\n        <ion-row>\n          <ion-col size='6'>\n            <ion-item lines='none'>\n              <ion-label position='floating'>Agente</ion-label>\n              <ion-input [value]='agente' [readonly]='true'></ion-input>\n            </ion-item>\n          </ion-col>\n\n          <ion-col size='6'>\n            <ion-item lines='none'>\n              <ion-label position='floating'>Sorteo</ion-label>\n              <ion-input [readonly]='true' value='{{balance?.sorteo_nombre}}'></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n       \n\n        <ion-row>\n          <ion-col size='12'>\n            <ion-item lines='none'>\n              <ion-label position='floating'>Estado</ion-label>\n              <ion-input [readonly]='true' [value]='balance?.numero_ganador ? \"NÚMERO GANADOR: \" + balance?.numero_ganador : \"NO GANADOR\"'></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n    </div>\n\n   \n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"list-body\">\n\n    <ion-list-header>\n        <ion-grid>\n            <ion-row class=\"header top\">\n                <ion-col size='4'>Boleto </ion-col>\n                <ion-col style=\"padding-left: 0;\" size='4'>Cliente </ion-col>\n                <ion-col size='4'>Sorteo </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-list-header>\n\n\n\n\n\n    <h2 style=\"color: darkgray;\" class=\"ion-text-center\" *ngIf='boletos.length == 0 && loaded'>{{boletos.length == 0 ? 'No hay registros' : 'No se encontraron resultados'}}</h2>\n    <ion-grid class=\"body\" *ngIf='loaded'>\n\n        <!--  -->\n        <ion-virtual-scroll [items]=\"boletos\" approxItemHeight='89' [itemHeight]=\"itemHeightFn\" >\n            <ion-item-sliding #sliding *virtualItem=\"let boleto; let i = index\">\n                <ion-item class=\"ion-no-padding\">\n                    <ion-row class=\"bc\"  (click)='boletoClicked(boleto)'>\n                        <ion-col size='4'> <strong>#{{boleto.indice}}</strong> <span class=\"sub\">{{boleto.fecha | date: 'dd/MM/yyyy'}}</span> <span class=\"sub\">{{boleto.fecha | date: 'hh:mm:ss a'}}</span> </ion-col>\n                        <ion-col size='4'> <strong>{{boleto.cliente_nombre}}</strong></ion-col>\n                        <ion-col> <strong>{{boleto.sorteo_nombre}}</strong><span class=\"sub\">{{boleto.juego_fecha | date: 'dd/MM/yyyy'}}</span> <span class=\"sub\">{{boleto.juego_fecha | date: 'hh:mm:00 a'}}</span>                                </ion-col>\n                        <h3 class=\"winner\">GANADOR</h3>\n                    </ion-row>\n                </ion-item>\n\n            </ion-item-sliding>\n        </ion-virtual-scroll>\n\n\n    </ion-grid>\n</ion-list>\n<div *ngIf=\"!loaded\" style=\"padding: 0 12px;\">\n    <div class=\"custom-skeleton\" style=\"display: flex; justify-content: flex-start; border-bottom: 1px solid #00000010;\">\n        <div style=\"width: 28%; margin-right: 16px;\">\n\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n\n\n        <div style=\"width: 28%; margin-right: 24px;\">\n\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n        <div style=\"width: 28%;\">\n\n            <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n    </div>\n    <div class=\"custom-skeleton\" style=\"display: flex; justify-content: flex-start; border-bottom: 1px solid #00000010;\">\n        <div style=\"width: 28%; margin-right: 16px;\">\n\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n\n\n        <div style=\"width: 28%; margin-right: 24px;\">\n\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n        <div style=\"width: 28%;\">\n\n            <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n    </div>\n    <div class=\"custom-skeleton\" style=\"display: flex; justify-content: flex-start; border-bottom: 1px solid #00000010;\">\n        <div style=\"width: 28%; margin-right: 16px;\">\n\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n\n\n        <div style=\"width: 28%; margin-right: 24px;\">\n\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n        <div style=\"width: 28%;\">\n\n            <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n    </div>\n    <div class=\"custom-skeleton\" style=\"display: flex; justify-content: flex-start; border-bottom: 1px solid #00000010;\">\n        <div style=\"width: 28%; margin-right: 16px;\">\n\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n\n\n        <div style=\"width: 28%; margin-right: 24px;\">\n\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n        <div style=\"width: 28%;\">\n\n            <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n    </div>\n    <div class=\"custom-skeleton\" style=\"display: flex; justify-content: flex-start; border-bottom: 1px solid #00000010;\">\n        <div style=\"width: 28%; margin-right: 16px;\">\n\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n\n\n        <div style=\"width: 28%; margin-right: 24px;\">\n\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n        <div style=\"width: 28%;\">\n\n            <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n    </div>\n    <div class=\"custom-skeleton\" style=\"display: flex; justify-content: flex-start; border-bottom: 1px solid #00000010;\">\n        <div style=\"width: 28%; margin-right: 16px;\">\n\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n\n\n        <div style=\"width: 28%; margin-right: 24px;\">\n\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n        <div style=\"width: 28%;\">\n\n            <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n    </div>\n    <div class=\"custom-skeleton\" style=\"display: flex; justify-content: flex-start; border-bottom: 1px solid #00000010;\">\n        <div style=\"width: 28%; margin-right: 16px;\">\n\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n\n\n        <div style=\"width: 28%; margin-right: 24px;\">\n\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n        <div style=\"width: 28%;\">\n\n            <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n    </div>\n    <div class=\"custom-skeleton\" style=\"display: flex; justify-content: flex-start; border-bottom: 1px solid #00000010;\">\n        <div style=\"width: 28%; margin-right: 16px;\">\n\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n\n\n        <div style=\"width: 28%; margin-right: 24px;\">\n\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n        <div style=\"width: 28%;\">\n\n            <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n        </div>\n    </div>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"no-internet\" *ngIf='!hasInternet'>\n    <p>No hay conexión a internet</p>\n</div>\n<ion-app [ngClass]=\"{'mt-24': !hasInternet}\">\n    <ion-router-outlet></ion-router-outlet>\n</ion-app>");

/***/ }),

/***/ "YTEv":
/*!***************************************!*\
  !*** ./src/app/IonicGestureConfig.ts ***!
  \***************************************/
/*! exports provided: IonicGestureConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicGestureConfig", function() { return IonicGestureConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



/**
 * @hidden
 * This class overrides the default Angular gesture config.
 */
let IonicGestureConfig = class IonicGestureConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerGestureConfig"] {
    buildHammer(element) {
        if (window) {
            const mc = new window.Hammer(element);
            for (const eventName in this.overrides) {
                if (eventName) {
                    mc.get(eventName).set(this.overrides[eventName]);
                }
            }
            return mc;
        }
        return null;
    }
};
IonicGestureConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], IonicGestureConfig);



/***/ }),

/***/ "YY6p":
/*!********************************************************!*\
  !*** ./src/app/pages/shared/sub-menu/sub-menu.page.ts ***!
  \********************************************************/
/*! exports provided: SubMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenuPage", function() { return SubMenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sub_menu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sub-menu.page.html */ "x3Xx");
/* harmony import */ var _sub_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sub-menu.page.scss */ "o5E7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let SubMenuPage = class SubMenuPage {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.options = [];
    }
    ngOnInit() {
    }
    click(evt) {
        if (!evt)
            return;
        evt.next();
        this.popoverCtrl.dismiss();
    }
    toggleChanged(toggleEvent, evt) {
        evt.next(toggleEvent.detail.checked);
    }
};
SubMenuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
SubMenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sub-menu',
        template: _raw_loader_sub_menu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sub_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubMenuPage);



/***/ }),

/***/ "YhDx":
/*!***********************************************!*\
  !*** ./src/app/pages/cliente/cliente.page.ts ***!
  \***********************************************/
/*! exports provided: ClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientePage", function() { return ClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cliente_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cliente.page.html */ "z0sE");
/* harmony import */ var _cliente_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente.page.scss */ "7KF5");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/base.service */ "Do2H");
/* harmony import */ var _classes_classes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../classes/classes */ "50N5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/util/util */ "JQC8");








let ClientePage = class ClientePage {
    constructor(bs, navCtrl, modalCtrl, util) {
        this.bs = bs;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.cliente = new _classes_classes__WEBPACK_IMPORTED_MODULE_5__["Cliente"]();
        this.paises = [];
        bs.get(bs.PAIS_URL, true).then(data => {
            this.paises = data.clone();
            if (this.cliente.id > -1)
                this.pais = this.paises.find(x => x.id == this.cliente.pais.id);
        })
            .catch((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield util.handleError(err); }));
    }
    ngOnInit() {
    }
    paisChanged(evt) {
        this.cliente.pais = new _classes_classes__WEBPACK_IMPORTED_MODULE_5__["Pais"](evt.detail.value);
    }
    modelChanged(evt) {
        // console.log(evt.detail.data);
        setTimeout(() => {
            this.cliente.celular = this.cliente.celular.replace("-", "");
            if (this.cliente.celular.length >= 5) {
                this.cliente.celular = this.cliente.celular.substring(0, 4) + '-' + this.cliente.celular.substring(4, this.cliente.celular.length);
            }
        }, 1);
    }
    format(evt) {
        var value = evt.target.value;
        var key = evt.key; // console.log(key);
        // evt.preventDefault();
        console.log(key);
        if ((key < '0' || key > '9') && key != 'Enter')
            evt.preventDefault();
        else if (value.length == 9)
            evt.preventDefault();
    }
    close() {
        this.modalCtrl.dismiss();
    }
    submit(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isValid())
                return;
            // let body = new BodyForm();
            // body.append('cliente', JSON.stringify(this.cliente));
            let body = {
                'cliente': JSON.stringify(this.cliente)
            };
            try {
                let c = yield this.bs.post(this.bs.CLIENTE_URL, body, true);
                let msg = this.cliente.id == -1 ? 'creado con id #' + c.id : 'actualizado';
                yield this.util.presentAlert('Mensaje', 'Cliente ' + msg + ' con éxito.');
                this.modalCtrl.dismiss({ cliente: c || this.cliente });
            }
            catch (err) {
                let ex = err;
                // alert('Error: ' + ex.message);
                this.util.handleError(ex);
            }
        });
    }
    isValid() {
        return this.cliente.primer_nombre.trim() != '' && this.cliente.segundo_nombre.trim() != ''
            && this.cliente.primer_apellido.trim() != '' && this.cliente.segundo_apellido.trim() != ''
            && this.cliente.pais.id > -1 && this.cliente.celular.trim().length == 9;
    }
};
ClientePage.ctorParameters = () => [
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_7__["Util"] }
];
ClientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-cliente',
        template: _raw_loader_cliente_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cliente_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClientePage);



/***/ }),

/***/ "Ysje":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/restringir-numeros/restringir-numeros.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-title class=\"center\">Restringir números</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)='close()'>\n                <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n            </ion-button>\n            <ion-button (click)='save()'>\n                <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-toolbar color='light' style=\"padding: 10px;\">\n    <div style=\"display: flex; justify-content: space-between;\">\n        <ion-item class=\"no-inner-padding\" color=\"transparent\" style=\"padding: 0;\">\n            <ion-label>Cantidad:</ion-label>\n            <!-- <ion-input [(ngModel)]='cantidad' type=\"number\"   oninput=\"event.target.value = event.target.value.replace('.','');\"></ion-input> -->\n            <!-- <ion-input #input type=\"number\" min=\"0\" inputmode=\"numeric\" [(ngModel)]=\"cantidad\" pattern=\"[0-9]\" required='true' placeholder=\"Access Code\"></ion-input> -->\n            <ion-input type=\"number\" [(ngModel)]='cantidad'></ion-input>\n        </ion-item>\n        <!-- <ion-item color=\"transparent\" class=\"check\" lines='none'>      <ion-label>Todos</ion-label>      <ion-checkbox [(ngModel)]='todos' (ionChange)='todosChanged($event)' slot=\"end\"></ion-checkbox>    </ion-item> -->\n        <ion-button [disabled]='!isValid()' (click)='todosClicked($event)'> Todos </ion-button>\n    </div>\n    <ion-grid>\n        <ion-row>\n            <ion-col size='7'> </ion-col>\n            <ion-col size='5'> </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-toolbar>\n<ion-content class=\"ion-padding\">\n    <ion-list>\n        <ion-item *ngFor=\"let n of numeros_restringidos\">\n            <ion-label style=\"font-weight: bold;\">{{n.numero}}: </ion-label>\n            <!-- <ion-checkbox slot=\"end\" [(ngModel)]='n.selected' (ionChange)='selectionChanged($event, n.number)'></ion-checkbox> -->\n            <ion-input [(ngModel)]='n.cantidad'></ion-input>\n        </ion-item>\n    </ion-list>\n</ion-content>");

/***/ }),

/***/ "Z8iu":
/*!*************************************************************************!*\
  !*** ./src/app/pages/detalle-balance/detalle-balance-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DetalleBalancePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleBalancePageRoutingModule", function() { return DetalleBalancePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detalle_balance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalle-balance.page */ "6ASw");




const routes = [
    {
        path: '',
        component: _detalle_balance_page__WEBPACK_IMPORTED_MODULE_3__["DetalleBalancePage"]
    }
];
let DetalleBalancePageRoutingModule = class DetalleBalancePageRoutingModule {
};
DetalleBalancePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetalleBalancePageRoutingModule);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _pages_boletos_boletos_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/boletos/boletos.module */ "r1De");
/* harmony import */ var _pages_cliente_cliente_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/cliente/cliente.module */ "rdpw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "I7pt");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "te5A");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _pages_ventas_filtro_ventas_filtro_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/ventas-filtro/ventas-filtro.module */ "t7rK");
/* harmony import */ var _pages_shared_sub_menu_sub_menu_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/shared/sub-menu/sub-menu.module */ "tNZv");
/* harmony import */ var _pages_set_ganancias_set_ganancias_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/set-ganancias/set-ganancias.module */ "x9Ej");
/* harmony import */ var _pages_restringir_numeros_restringir_numeros_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/restringir-numeros/restringir-numeros.module */ "b6cA");
/* harmony import */ var _pages_sorteo_sorteo_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/sorteo/sorteo.module */ "4TzF");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "7uwA");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "TzAO");
/* harmony import */ var _pages_shared_vender_por_rango_vender_por_rango_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/shared/vender-por-rango/vender-por-rango.module */ "bvKS");
/* harmony import */ var _pages_clientes_clientes_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/clientes/clientes.module */ "vNl+");
/* harmony import */ var _pages_boleto_boleto_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/boleto/boleto.module */ "pLd1");
/* harmony import */ var _pages_reporte_completo_reporte_completo_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/reporte-completo/reporte-completo.module */ "dyh2");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _pages_nuevo_grupo_nuevo_grupo_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/nuevo-grupo/nuevo-grupo.module */ "Gqu5");
/* harmony import */ var _pages_agente_agente_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/agente/agente.module */ "66mU");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "PLH8");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ionic-native/app-minimize/ngx */ "Dicn");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");
/* harmony import */ var _pages_detalle_balance_detalle_balance_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/detalle-balance/detalle-balance.module */ "Ia8R");
/* harmony import */ var _IonicGestureConfig__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./IonicGestureConfig */ "YTEv");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");


















// import { CalendarModule } from "ion2-calendar";

























// import { Uid } from '@ionic-native/uid/ngx';


let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _pages_cliente_cliente_module__WEBPACK_IMPORTED_MODULE_2__["ClientePageModule"], _pages_boletos_boletos_module__WEBPACK_IMPORTED_MODULE_1__["BoletosPageModule"], ion2_calendar__WEBPACK_IMPORTED_MODULE_18__["CalendarModule"], _pages_ventas_filtro_ventas_filtro_module__WEBPACK_IMPORTED_MODULE_19__["VentasFiltroPageModule"], _pages_shared_sub_menu_sub_menu_module__WEBPACK_IMPORTED_MODULE_20__["SubMenuPageModule"], _pages_restringir_numeros_restringir_numeros_module__WEBPACK_IMPORTED_MODULE_22__["RestringirNumerosPageModule"],
            _pages_set_ganancias_set_ganancias_module__WEBPACK_IMPORTED_MODULE_21__["SetGananciasPageModule"], _pages_sorteo_sorteo_module__WEBPACK_IMPORTED_MODULE_23__["SorteoPageModule"], _pages_shared_vender_por_rango_vender_por_rango_module__WEBPACK_IMPORTED_MODULE_27__["VenderPorRangoPageModule"], _pages_clientes_clientes_module__WEBPACK_IMPORTED_MODULE_28__["ClientesPageModule"], _pages_boleto_boleto_module__WEBPACK_IMPORTED_MODULE_29__["BoletoPageModule"], _pages_reporte_completo_reporte_completo_module__WEBPACK_IMPORTED_MODULE_30__["ReporteCompletoPageModule"],
            _pages_nuevo_grupo_nuevo_grupo_module__WEBPACK_IMPORTED_MODULE_33__["NuevoGrupoPageModule"], _pages_agente_agente_module__WEBPACK_IMPORTED_MODULE_34__["AgentePageModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__["NoopAnimationsModule"], _pages_detalle_balance_detalle_balance_module__WEBPACK_IMPORTED_MODULE_40__["DetalleBalancePageModule"]],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_14__["BarcodeScanner"],
            _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_24__["BluetoothSerial"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CurrencyPipe"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_25__["SocialSharing"],
            _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_26__["Contacts"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_31__["Network"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_32__["HTTP"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_35__["Keyboard"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_37__["ScrollingModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"],
            _ionic_native_app_minimize_ngx__WEBPACK_IMPORTED_MODULE_38__["AppMinimize"],
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_39__["OneSignal"],
            _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_15__["SMS"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_42__["Device"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__["File"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_17__["FileOpener"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_43__["AndroidPermissions"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_44__["FileTransfer"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"] },
            { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["HAMMER_GESTURE_CONFIG"], useClass: _IonicGestureConfig__WEBPACK_IMPORTED_MODULE_41__["IonicGestureConfig"] }
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "aTWP":
/*!***************************************************************************!*\
  !*** ./src/app/pages/reporte-completo/reporte-completo-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ReporteCompletoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteCompletoPageRoutingModule", function() { return ReporteCompletoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reporte_completo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporte-completo.page */ "vbfs");




const routes = [
    {
        path: '',
        component: _reporte_completo_page__WEBPACK_IMPORTED_MODULE_3__["ReporteCompletoPage"]
    }
];
let ReporteCompletoPageRoutingModule = class ReporteCompletoPageRoutingModule {
};
ReporteCompletoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReporteCompletoPageRoutingModule);



/***/ }),

/***/ "b6cA":
/*!***********************************************************************!*\
  !*** ./src/app/pages/restringir-numeros/restringir-numeros.module.ts ***!
  \***********************************************************************/
/*! exports provided: RestringirNumerosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestringirNumerosPageModule", function() { return RestringirNumerosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _restringir_numeros_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restringir-numeros-routing.module */ "miFA");
/* harmony import */ var _restringir_numeros_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restringir-numeros.page */ "B4BN");







let RestringirNumerosPageModule = class RestringirNumerosPageModule {
};
RestringirNumerosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _restringir_numeros_routing_module__WEBPACK_IMPORTED_MODULE_5__["RestringirNumerosPageRoutingModule"]
        ],
        declarations: [_restringir_numeros_page__WEBPACK_IMPORTED_MODULE_6__["RestringirNumerosPage"]]
    })
], RestringirNumerosPageModule);



/***/ }),

/***/ "bnN/":
/*!****************************************************************!*\
  !*** ./src/app/components/slide-button/slide-button.module.ts ***!
  \****************************************************************/
/*! exports provided: SlideButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideButtonModule", function() { return SlideButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _slide_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slide-button.component */ "yS/6");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let SlideButtonModule = class SlideButtonModule {
};
SlideButtonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_slide_button_component__WEBPACK_IMPORTED_MODULE_3__["SlideButtonComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        exports: [_slide_button_component__WEBPACK_IMPORTED_MODULE_3__["SlideButtonComponent"]]
    })
], SlideButtonModule);



/***/ }),

/***/ "bvKS":
/*!**************************************************************************!*\
  !*** ./src/app/pages/shared/vender-por-rango/vender-por-rango.module.ts ***!
  \**************************************************************************/
/*! exports provided: VenderPorRangoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenderPorRangoPageModule", function() { return VenderPorRangoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _vender_por_rango_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vender-por-rango-routing.module */ "/7H8");
/* harmony import */ var _vender_por_rango_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vender-por-rango.page */ "Oxgz");







let VenderPorRangoPageModule = class VenderPorRangoPageModule {
};
VenderPorRangoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vender_por_rango_routing_module__WEBPACK_IMPORTED_MODULE_5__["VenderPorRangoPageRoutingModule"]
        ],
        declarations: [_vender_por_rango_page__WEBPACK_IMPORTED_MODULE_6__["VenderPorRangoPage"]]
    })
], VenderPorRangoPageModule);



/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    ONE_SIGNAL_APP_ID: '0a408027-589f-461e-85cf-624930d9eb9a',
    FIREBASE_SENDER_ID: '392587697744',
    BASE_URL: 'https://api.mosterlot.com',
    // BASE_URL: 'http://localhost:5001',
    APP_VERSION: '2.33.1'
};


/***/ }),

/***/ "dyh2":
/*!*******************************************************************!*\
  !*** ./src/app/pages/reporte-completo/reporte-completo.module.ts ***!
  \*******************************************************************/
/*! exports provided: ReporteCompletoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteCompletoPageModule", function() { return ReporteCompletoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reporte_completo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reporte-completo-routing.module */ "aTWP");
/* harmony import */ var _reporte_completo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reporte-completo.page */ "vbfs");







let ReporteCompletoPageModule = class ReporteCompletoPageModule {
};
ReporteCompletoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reporte_completo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReporteCompletoPageRoutingModule"]
        ],
        declarations: [_reporte_completo_page__WEBPACK_IMPORTED_MODULE_6__["ReporteCompletoPage"]]
    })
], ReporteCompletoPageModule);



/***/ }),

/***/ "eErY":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/boleto/boleto.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button *ngIf='!preview' [text]=''></ion-back-button>\n            <ion-button *ngIf='preview' (click)='preview = false'>\n                <ion-icon slot=\"icon-only\" name='close-outline'></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title [ngClass]=\"{'intermitent': boleto.id == -1}\" class=\"center\" style=\"cursor: pointer;\" (click)='abrirSelectorSorteo()'>{{getTitulo()}} <span class=\"plus\" *ngIf='boleto.id == -1'>+</span></ion-title>\n        <ion-buttons slot=\"end\">\n\n            <ion-button *ngIf='boleto.id > -1' (click)='close()'>\n                <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n            </ion-button>\n            <ion-button (click)='openSubMenu($event)'>\n                <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" [ngClass]=\"{'preview': preview}\">\n    <ion-button *ngIf='boleto.id == -1' class='btn-expand' [ngClass]=\"{'open': isOpen}\" fill='transparent' (click)='isOpen = !isOpen'>\n        <ion-icon name=\"caret-up-outline\"></ion-icon>\n    </ion-button>\n    <ion-grid class=\"fields\" [ngClass]=\"{'open': isOpen, 'view': boleto.id != -1}\">\n\n        <ion-item *ngIf='boleto.id > -1'>\n            <ion-label position='floating'>Fecha de compra: </ion-label>\n            <ion-input readonly style=\"font-weight: bold;\" [disabled]='true' [value]='boleto.fecha | date: \"dd/MM/yyyy - hh:mm:ss a\"'></ion-input>\n        </ion-item>\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label position='floating'>Fecha de juego: </ion-label>\n                    <ion-input readonly style=\"font-weight: bold;\" [disabled]='true' [value]='boleto.juego_id != -1 ? (boleto.juego_fecha | date: \"dd/MM/yyyy - hh:mm:ss a\") : \"POR DEFINIRSE\"'></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-item *ngIf='boleto.id > -1'>\n            <ion-label position='floating'>Agente: </ion-label>\n            <ion-input readonly style=\"font-weight: bold;\" [disabled]='true' [value]='boleto.empleado_nombre'></ion-input>\n        </ion-item>\n        <ion-row style=\"align-items: flex-end;\">\n            <ion-col [size]=\"boleto.id == -1 ? 11 : 12\">\n\n                    <app-dropdown-list [labelText]=\"'Nombre del Cliente'\" [disabled]='boleto.id != -1' name='cliente_nombre' [(ngModel)]='boleto.cliente_nombre' [data]='clientes'></app-dropdown-list>\n          \n                <!-- <ion-item>\n                    <ion-label position=\"floating\">Nombre del cliente</ion-label>\n                    <app-dropdown-list name='cliente_nombre' [(ngModel)]='boleto.cliente_nombre'></app-dropdown-list>\n                </ion-item> -->\n            </ion-col>\n            <ion-col *ngIf='boleto.id == -1' size='1' style=\"display: flex; justify-content: center;\">\n                <ion-button style=\"font-size: 9px; height: 36px; margin: 0;\" [disabled]='boleto.id > -1' size='small' class=\"circle btn-user\" (click)='selectCliente($event)'>\n                    <ion-icon slot=\"icon-only\" name=\"person\"></ion-icon>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n        <ion-item  *ngIf='boleto.id > -1'>\n            <ion-label position='floating'>Sorteo: </ion-label>\n            <ion-input readonly style=\"font-weight: bold;\" [disabled]='true' [value]='boleto.sorteo_nombre'></ion-input>\n        </ion-item>\n        <ion-item *ngIf='boleto.id > -1'>\n            <ion-label position='floating'>Total:</ion-label>\n            <ion-input readonly style=\"font-weight: bold;\" [disabled]='true' [value]='boleto.total | currency: boleto.simbolo_moneda'></ion-input>\n        </ion-item>\n        <div *ngIf='boleto.id != -1 && ganador.id != -1'>\n            <h2 class=\"ion-text-center\">Número ganador</h2>\n            <p><strong><span style=\"display: inline-block; width: 84px;\">Número:</span> {{getNumero(ganador.numero)}}</strong></p>\n            <p><strong><span style=\"display: inline-block; width: 84px;\">Inversión:</span> {{ganador.inversion | currency: boleto.simbolo_moneda}}</strong></p>\n            <p><strong><span style=\"display: inline-block; width: 84px;\">Ganancia:</span> {{ganador.ganancia | currency: boleto.simbolo_moneda}}</strong></p>\n            <hr style=\"background: darkgray;\"> </div>\n        <ion-row style=\"display: none;\" *ngIf='boleto.id == -1'>\n            <ion-col size='12'>\n                <ion-item style=\"display: flex; justify-content: space-between; z-index: 0;\">\n                    <ion-label style=\"max-width: max-content;\">Sorteo</ion-label>\n                    <ion-select #sorteoSelect [(ngModel)]='sorteo_id' [disabled]='sorteos.length == 0' style=\"position: absolute; left: -9999px; top: -9999px; visibility: hidden;\" interface=\"action\" (ionChange)='sorteoChanged($event)' placeholder=\"Seleciona un sorteo\">\n                        <ion-select-option *ngFor='let sorteo of sorteos' [value]=\"sorteo.id\">{{sorteo.sorteo_nombre}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        \n    </ion-grid>\n\n    <ion-grid style=\"\n    position: relative;\n    background: white;\n\" [ngStyle]=\"{'z-index': isOpen ? 0 : 999}\">\n\n\n<ng-container *ngIf='boleto.id == -1'>\n    <ng-container *ngIf='!numberFirst else qtySecond'>\n\n        <ion-row style=\"align-items: center;\" style=\"animation: 0s fadeIn forwards;\">\n            <ion-col size='10'>\n                <ion-item>\n                    <ion-label position=\"floating\">Cantidad</ion-label>\n                    <ion-input type='number' id=\"cant\" (keyup.enter)='cantidadEnterPressed()' [(ngModel)]='cantidad'></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col size='2'>\n                <ion-label style=\"display: block; font-weight: bold; white-space: pre;\">Mantener</ion-label>\n                <ion-toggle color=\"primary\" (ionChange)='save($event, \"KEEP\")' [(ngModel)]='keep'></ion-toggle>\n            </ion-col>\n        </ion-row>\n\n        <ion-row style=\"align-items: flex-end;\" style=\"animation: 0s fadeIn forwards;\">\n            <ion-col size='10'>\n                <ion-item>\n                    <ion-label position=\"floating\">Número</ion-label>\n                    <ion-input (keyup)=\"handleChangeNumber($event)\" id='num' inputmode='numeric' maxlength='2' [ngModel]='numero' (ngModelChange)='onChangeNumero($event)' (keyup.enter)='numeroEnterPressed($event)'></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col size='2'>\n                <ion-row style=\"width: 100%;\">\n                    <ion-label style=\"display: block; font-weight: bold; white-space: pre;\">Continuar</ion-label>\n                    <ion-toggle color=\"primary\" (ionChange)='save($event, \"CONTINUE\")' [(ngModel)]='continue'></ion-toggle>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n\n    </ng-container>\n    \n    <ng-template #qtySecond>\n\n        <ion-row style=\"align-items: flex-end;\" style=\"animation: 0s fadeIn forwards;\">\n            <ion-col size='10'>\n                <ion-item>\n                    <ion-label position=\"floating\">Número</ion-label>\n                    <ion-input (keyup)=\"handleChangeNumber($event)\" id='num' type='text' inputmode='numeric' maxlength='2' [ngModel]='numero' (ngModelChange)='onChangeNumero($event)' (keyup.enter)='numeroEnterPressed($event)'></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col size='2'>\n                <ion-row style=\"width: 100%;\">\n                    <ion-label style=\"display: block; font-weight: bold; white-space: pre;\">Continuar</ion-label>\n                    <ion-toggle color=\"primary\" (ionChange)='save($event, \"CONTINUE\")' [(ngModel)]='continue'></ion-toggle>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n    <ion-row style=\"align-items: center;\" style=\"animation: 0s fadeIn forwards;\">\n            <ion-col size='10'>\n                <ion-item>\n                    <ion-label position=\"floating\">Cantidad</ion-label>\n                    <ion-input type='number' id=\"cant\" (keyup.enter)='cantidadEnterPressed()' [(ngModel)]='cantidad'></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col size='2'>\n                <ion-label style=\"display: block; font-weight: bold; white-space: pre;\">Mantener</ion-label>\n                <ion-toggle color=\"primary\" (ionChange)='save($event, \"KEEP\")' [(ngModel)]='keep'></ion-toggle>\n            </ion-col>\n        </ion-row>\n    </ng-template>\n\n    <ion-row class=\"ion-justify-content-end\">\n        <ion-button style=\"margin-right: 10px;\" color='light' (click)='generateNumber()' [disabled]='boleto.juego_id == -1'>\n            <ion-icon name='shuffle' slot=\"icon-only\"></ion-icon>\n        </ion-button>\n        <ion-button color='primary' (click)='addNumero($event)' [disabled]='!isValidToAdd()'>\n            <ion-icon name='add' slot=\"icon-only\"></ion-icon>\n        </ion-button>\n    </ion-row>\n    \n           \n</ng-container>\n    </ion-grid>\n    <h2 class=\"anulado\" *ngIf='boleto.iscancelled'>BOLETO ANULADO</h2>\n    <ion-item *ngIf='boleto.iscancelled'>\n        <ion-label position='stacked'>Detalle</ion-label>\n        <ion-textarea readonly='true' [value]='boleto.log' style=\"font-size: 16px; font-weight: 500;\"></ion-textarea>\n    </ion-item>\n    <h2 class=\"ion-text-center\">Números comprados: {{boleto.numeros.length}}</h2>\n    <ion-grid id=\"grid\">\n        <ion-row class=\"header\">\n            <ion-col size='3'>\n                <p>Número</p>\n            </ion-col>\n            <ion-col size='4'>\n                <p>Inversión</p>\n            </ion-col>\n            <ion-col size='4'>\n                <p>Ganancia</p>\n            </ion-col>\n            <!-- <ion-col>\n                <ion-icon *ngIf='boleto.id == -1' style=\"color: rgb(191, 29, 29); font-size: 20px;\" class=\"all\" (click)='eliminarTodos()' name=\"trash\"></ion-icon>\n            </ion-col> -->\n        </ion-row>\n        <div class=\"body\" id=\"nc-body\" [ngStyle]=\"{'overflow': boleto.numeros.length == 0 ? 'hidden' : 'auto'}\" [ngClass]=\"{'closed': !isOpen}\">\n            <p *ngIf='boleto.numeros.length == 0' class=\"empty-numbers\">No hay números</p>\n    \n\n            <ion-item-sliding *ngFor='let nb of boleto.numeros; let i = index;'>\n\n                <ion-item-options side=\"start\" *ngIf='boleto.id == -1'>\n                    <ion-item-option color=\"danger\" (click)='eliminar(i)'>\n                        <ion-icon style=\"font-size: 14px;\" class=\"icon\" name=\"trash\" slot=\"icon-only\"></ion-icon>\n                    </ion-item-option>\n                </ion-item-options>\n                <ion-item lines='none' style=\"--padding-start: 0; --padding-end: 0;\">\n\n                    <ion-row style='width: 100%;'>\n                        <ion-col size='3'>\n                            <p>{{getNumero(nb.numero)}}</p>\n                        </ion-col>\n                        <ion-col size='4'>\n                            <p>{{nb.inversion | currency: boleto.simbolo_moneda}}</p>\n                        </ion-col>\n                        <ion-col >\n                            <p>{{nb.ganancia | currency: boleto.simbolo_moneda}}</p>\n                        </ion-col>\n                    </ion-row>\n                </ion-item>\n            </ion-item-sliding>\n        </div>\n        <ng-container *ngIf='boleto.numeros.length > 0'>\n            <hr style=\"background: darkgray;\">\n            <ion-row>\n                <ion-col size='3'>\n                    <p style=\"font-weight: bold;\">Totales</p>\n                </ion-col>\n                <ion-col size='4'>\n                    <p>{{boleto.total | currency: boleto.simbolo_moneda}}</p>\n                </ion-col>\n                <ion-col>\n                    <p>{{getSumaGanancias() | currency: boleto.simbolo_moneda}}</p>\n                </ion-col>\n            </ion-row>\n        </ng-container>\n    </ion-grid>\n    <!-- <button class=\"btn-drag\">Hola</button> -->\n    <div style=\"display: flex; justify-content: flex-end; margin-top: 20px; margin-bottom: 20px;\" *ngIf='isOpen'>\n        <app-slide-button (dragCompleted)=\"enviarImprimirBoleto($event)\" *ngIf='boleto.id == -1' [disabled]='boleto.numeros.length == 0 || boleto.cliente_nombre.trim() == \"\"'></app-slide-button>\n        <ion-button *ngIf='boleto.id != -1' color='light' (click)='enviarImprimirBoleto($event)' [disabled]='boleto.numeros.length == 0 || isSending'>{{boleto.id == -1 ? 'Realizar venta' : 'Reenviar boleto'}}\n            <ion-icon style=\"margin-left: 10px;\" name=\"send\"></ion-icon>\n        </ion-button>\n    </div>\n    <!-- <div style=\"display: flex; justify-content: flex-end; margin-top: 20px;\">    <ion-button color='dark' (click)='whatsapp($event)'>Enviar via Whatapp <ion-icon style=\"margin-left: 10px; color: #188593;\" name=\"send\"></ion-icon></ion-button>  </div> -->\n    <!-- <p>{{text}} </p> -->\n    <!-- <img *ngIf='img' [src]=\"img\" alt=\"\"> -->\n    <div class=\"receipt-container\" class=\"receipt-container\" [ngClass]=\"{'preview': preview}\" (click)='preview = !preview'>\n        <div class=\"receipt\" id=\"receipt\">\n            <img *ngIf=\"empleado.usuario.tipo_factura == 2\" [src]=\"logo\" style=\"height: 80px; width: 100%; display: block; margin: 0 auto 10px auto !important;\">\n            <p *ngIf=\"empleado.usuario.tipo_factura == 1\" class=\"center\"><strong>{{factura_nombre}}</strong></p>\n            <div [ngClass]=\"{'hide': preview}\">\n                \n                <p *ngIf=\"empleado.usuario.tipo_factura == 1\">{{HR}}</p>\n               <!-- <p><span style=\"display: inline-block; width: 144px;\"><strong>Boleto:</strong></span>#{{boleto_id == -1 ? \"POR DEFINIRSE\" : boleto_id}}</p>\n                <p><span style=\"display: inline-block; width: 144px;\"><strong>Compra:</strong></span>{{boleto.fecha | date: 'dd/MM/yyyy - hh:mm:ss a'}}</p>-->\n                \n                <div *ngIf=\"empleado.usuario.tipo_factura == 2\" style=\"min-width: max-content; display: flex; justify-content: space-between; align-items: flex-end;\">\n                    <p style=\"min-width: max-content; font-size: 32px !important;\"><strong>#{{boleto.indice}}</strong></p>\n                    <p style=\"min-width: max-content; font-size: 32px !important;\"><strong>{{date}}</strong></p>\n                </div>\n                <!-- <p *ngIf=\"empleado.usuario.tipo_factura == 2\">{{HR}}</p> -->\n                <div style=\"display: flex; justify-content: space-between;\">\n                    <p style=\"min-width: max-content;\"><span>{{boleto.juego_fecha | date: 'dd/MM/yyyy'}}</span></p>\n                    <p style=\"min-width: max-content;\"><span>{{getSorteoNombre()}}</span></p>\n                </div>\n                <!-- <p><span style=\"display: inline-block; width: 144px;\"><strong>Fecha:</strong></span>{{boleto.juego_fecha | date: 'dd/MM/yyyy'}}</p>\n                \n                <p><span style=\"display: inline-block; width: 144px;\"><strong>Sorteo:</strong></span>{{getSorteoNombre()}}</p> -->\n                \n                <p *ngIf=\"boleto.cliente_nombre && !(empleado.usuario.tipo_factura == 2 && boleto.cliente_nombre.toLocaleLowerCase() == 'cliente de contado')\"><span style=\"display: inline-block; \"><strong>{{empleado.usuario.tipo_factura == 1 ? 'Cliente' : 'Apostador'}}:</strong></span> {{boleto.cliente_nombre}}</p>\n                \n               <!-- <p><span style=\"display: inline-block; width: 144px;\"><strong>Agente:</strong></span>{{boleto.empleado_nombre}} </p>-->\n            </div>\n            \n            <p>{{HR}}</p>\n            \n            <ng-container *ngIf=\"empleado.usuario.tipo_factura == 1\">\n                <p class=\"center\"><strong>Números comprados</strong></p>\n                <p><span style=\"display: inline-block; width: 160px;\"><strong>Número</strong></span><span style=\"display: inline-block; width: 180px;\"><strong>Inversión</strong></span><span><strong>Ganancia</strong></span></p>\n            </ng-container>\n\n\n            <ng-container>\n                <p *ngFor='let bn of boleto.numeros'><span style=\"display: inline-block; width: 160px;\">{{getNumero(bn.numero)}}</span><span style=\"display: inline-block; width: 180px;\">{{bn.inversion | currency: boleto.simbolo_moneda}}</span><span style=\"display: inline-block;\">{{bn.ganancia | currency: boleto.simbolo_moneda}}</span></p>\n            </ng-container>\n\n            <!-- <ng-container *ngIf=\"empleado.usuario.tipo_factura == 2\">\n                <p style=\"font-size: 44px; font-weight: bold;\" *ngFor='let bn of boleto.numeros'>\n                    {{bn.numero}} con {{bn.inversion | currency: boleto.simbolo_moneda}} = {{bn.ganancia | currency: boleto.simbolo_moneda}}\n            </p>\n            </ng-container> -->\n            <!-- <p><span style=\"display: inline-block; width: 180px;\">25</span><span style=\"display: inline-block; width: 180px;\">C$ 5.00</span><span>C$ 5,000.00</span></p> -->\n            <!-- <span>231</span>      <span>213</span> -->\n            <ng-container>\n                <p>{{HR}}</p>\n                <p class=\"center\"><strong>Total: {{boleto.total | currency: boleto.simbolo_moneda}}</strong></p>\n            </ng-container>\n            <p *ngIf=\"empleado.usuario.tipo_factura == 1\">{{HR}}</p>\n            <div [ngClass]=\"{'hide': preview}\">\n\n                <ng-container *ngIf=\"empleado.usuario.tipo_factura == 1\">\n                    <p class=\"center\" style=\"font-size: 22px;\"><strong>Revise su boleto; no se aceptan</strong></p>\n                    <!-- <p>==============================</p> -->\n                    <p style=\"font-weight: bold !important\" class=\"center\">reclamos después del sorteo.</p>\n\n\n                <p>{{HR}}</p>\n                    \n                </ng-container>\n\n                <ng-container *ngIf=\"empleado.usuario.tipo_factura == 2\">\n                    <p style=\"font-weight: bold !important\" class=\"center\">Es responsabilidad del cliente revisar que fecha, sorteo y su números sean los correctos</p>\n                </ng-container>\n                \n                <div *ngIf=\"empleado.usuario.tipo_factura == 1\" style=\"min-width: max-content; display: flex; justify-content: space-between;\">\n                    <p style=\"min-width: max-content; font-size: 32px !important;\"><strong>#{{boleto.indice}}</strong></p>\n                    <p style=\"min-width: max-content; font-size: 32px !important;\"><strong>{{date}}</strong></p>\n                </div>\n                <img *ngIf='qr' [src]=\"qr\" style=\"width: 400px; height: 80px; display: block; margin: 0 auto;\" alt=\"\"> </div>\n            </div>\n    </div>\n</ion-content>");

/***/ }),

/***/ "ehse":
/*!***********************************************************************!*\
  !*** ./src/app/pages/restringir-numeros/restringir-numeros.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN0cmluZ2lyLW51bWVyb3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "fqKC":
/*!***********************************************!*\
  !*** ./src/app/pages/sorteo/sorteo.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-container {\n  margin: 20px 0;\n  display: flex;\n  justify-content: flex-end;\n}\n.btn-container ion-icon {\n  margin-left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvcnRlby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFBSTtFQUNJLGdCQUFBO0FBRVIiLCJmaWxlIjoic29ydGVvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "k3GL":
/*!***********************************************!*\
  !*** ./src/app/pages/boleto/boleto.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title span.plus {\n  font-size: 1.8rem;\n  color: #b11313;\n}\n\nion-content {\n  -webkit-backface-visibility: hidden;\n}\n\nion-content.preview {\n  --overflow: hidden;\n}\n\nion-button.circle {\n  --border-radius: 10px;\n}\n\nion-row.header {\n  font-weight: bold !important;\n}\n\np {\n  margin: 0;\n}\n\ndiv.body {\n  max-height: 250px;\n  min-height: 250px;\n  overflow: auto;\n  transition: 0.3s all ease;\n  position: relative;\n}\n\ndiv.body.closed {\n  max-height: calc(100vh - 400px);\n  min-height: calc(100vh - 400px);\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n@media print {\n  body {\n    position: static;\n    overflow: initial;\n  }\n\n  ion-nav {\n    overflow: initial !important;\n  }\n\n  .scroll-content {\n    position: relative;\n    overflow: visible !important;\n  }\n\n  ion-header {\n    display: none !important;\n  }\n\n  header nav,\nfooter {\n    display: none;\n  }\n\n  button {\n    display: none !important;\n  }\n\n  .pane {\n    position: initial;\n  }\n\n  p a {\n    word-wrap: break-word;\n  }\n\n  .app-root,\n.ion-page,\nion-app,\nion-nav,\nion-tab,\nion-tabs {\n    contain: none;\n  }\n\n  img {\n    page-break-inside: avoid;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\ndiv.receipt-container {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n}\n\ndiv.receipt-container.preview {\n  width: calc(100% + 32px);\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 2px;\n  left: -16px;\n  z-index: 999999;\n  height: 100% !important;\n  overflow: auto;\n}\n\ndiv.receipt-container.preview div.receipt {\n  margin: 0;\n  width: 602px;\n  min-width: 602px;\n  max-width: 602px;\n  transform: translateX(-50%) scale(0.5, 0.5);\n  position: absolute;\n  left: 50%;\n  top: 20px;\n  transform-origin: top;\n  box-shadow: 0 3px 6px #00000029;\n}\n\ndiv.receipt {\n  display: block;\n  margin: 100px auto;\n  width: 602px;\n  min-width: 602px;\n  max-width: 602px;\n  background: white;\n  padding: 60px 30px;\n}\n\ndiv.receipt p {\n  color: black;\n  font-size: 32px !important;\n  font-family: \"Open Sans\", sans-serif;\n}\n\ndiv.receipt p.center {\n  text-align: center;\n}\n\ndiv.receipt img {\n  margin-top: 40px !important;\n}\n\n@media screen and (max-width: 401px) {\n  ion-col {\n    font-size: 14px;\n  }\n  ion-col ion-icon {\n    font-size: 12px;\n  }\n\n  ion-icon.all {\n    font-size: 15px !important;\n  }\n}\n\nh2.anulado {\n  text-align: center;\n  color: #df1d1d;\n  font-size: 38px;\n  font-weight: bold;\n}\n\n.btn-drag {\n  cursor: move !important;\n}\n\n.btn-user {\n  min-height: -moz-max-content !important;\n  min-height: max-content !important;\n}\n\n.btn-user button {\n  height: 44px !important;\n}\n\nion-item {\n  --inner-padding-end: 0;\n}\n\nion-item .native {\n  height: 2000px;\n}\n\n.btn-expand {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 99999;\n  --padding-start: 0;\n  --padding-end: 0;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.btn-expand ion-icon {\n  transition: 0.3s all ease;\n}\n\n.btn-expand.open ion-icon {\n  transform: rotate(180deg);\n}\n\np.empty-numbers {\n  font-weight: bold;\n  color: gray;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 30px;\n  transform: translate(-50%, -50%) rotate(-30deg);\n  text-align: center;\n  width: 100%;\n}\n\nion-grid.fields {\n  --overflow: visible;\n  height: -moz-fit-content;\n  height: fit-content;\n  max-height: 0;\n  transition: 0.5s max-height ease;\n  z-index: inherit;\n}\n\nion-grid.fields.open {\n  max-height: 210px;\n}\n\nion-grid.fields.view {\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n\nion-col {\n  padding-left: 0;\n  padding-right: 0;\n}\n\ndiv.hide {\n  max-height: 0;\n  overflow: hidden;\n}\n\n.intermitent {\n  animation: intermitent 0.5s infinite alternate forwards;\n  color: #b11313;\n}\n\n@keyframes intermitent {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JvbGV0by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUVJLG1DQUFBO0FBRko7O0FBR0k7RUFFSSxrQkFBQTtBQUZSOztBQU1BO0VBQ0kscUJBQUE7QUFISjs7QUFNQTtFQUNJLDRCQUFBO0FBSEo7O0FBTUE7RUFDSSxTQUFBO0FBSEo7O0FBTUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFJSTtFQUVJLCtCQUFBO0VBQ0EsK0JBQUE7QUFIUjs7QUFPQTtFQUNJLDBCQUFBO0FBSko7O0FBT0E7O0VBRUksd0JBQUE7RUFDQSxTQUFBO0FBSko7O0FBT0E7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RUFKTjs7RUFNRTtJQUNJLDRCQUFBO0VBSE47O0VBS0U7SUFDSSxrQkFBQTtJQUNBLDRCQUFBO0VBRk47O0VBSUU7SUFDSSx3QkFBQTtFQUROOztFQUdFOztJQUVJLGFBQUE7RUFBTjs7RUFFRTtJQUNJLHdCQUFBO0VBQ047O0VBQ0U7SUFDSSxpQkFBQTtFQUVOOztFQUFFO0lBQ0kscUJBQUE7RUFHTjs7RUFERTs7Ozs7O0lBTUksYUFBQTtFQUlOOztFQUZFO0lBQ0ksd0JBQUE7RUFLTjtBQUNGOztBQU9BO0VBQ0k7SUFDSSxVQUFBO0VBR047RUFERTtJQUNJLFVBQUE7RUFHTjtBQUNGOztBQUFBO0VBQ0ksUUFBQTtFQUFVLFNBQUE7RUFBVyxnQkFBQTtBQUl6Qjs7QUFGSTtFQUNJLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUlSOztBQUhRO0VBQ0ksU0FBQTtFQVFBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBRUEscUJBQUE7RUFDQSwrQkFBQTtBQUhaOztBQVFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTEo7O0FBUUE7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7QUFMSjs7QUFRQTtFQUNJLDJCQUFBO0FBTEo7O0FBUUE7RUFDSTtJQUNJLGVBQUE7RUFMTjtFQU1NO0lBQ0ksZUFBQTtFQUpWOztFQU9FO0lBQ0ksMEJBQUE7RUFKTjtBQUNGOztBQU1BO0VBRUksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBU0E7RUFDSSx1QkFBQTtBQU5KOztBQWlCQTtFQUNJLHVDQUFBO0VBQUEsa0NBQUE7QUFkSjs7QUFlSTtFQUNJLHVCQUFBO0FBYlI7O0FBaUJBO0VBQ0ksc0JBQUE7QUFkSjs7QUFlSTtFQUNJLGNBQUE7QUFiUjs7QUFrQkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0FBZko7O0FBZ0JJO0VBQ0kseUJBQUE7QUFkUjs7QUFpQlE7RUFDSSx5QkFBQTtBQWZaOztBQW9CQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFqQko7O0FBcUJJO0VBQ0ksbUJBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFsQlI7O0FBbUJRO0VBQ0ksaUJBQUE7QUFqQlo7O0FBbUJRO0VBQ0ksNEJBQUE7RUFBQSx1QkFBQTtBQWpCWjs7QUFzQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFuQko7O0FBMEJBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBdkJKOztBQTBCQTtFQUNJLHVEQUFBO0VBQ0EsY0FBQTtBQXZCSjs7QUEwQkE7RUFDSTtJQUNJLFVBQUE7RUF2Qk47RUF5QkU7SUFDSSxVQUFBO0VBdkJOO0FBQ0YiLCJmaWxlIjoiYm9sZXRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pb24tdGl0bGUgc3Bhbi5wbHVzIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBjb2xvcjogI2IxMTMxMztcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC8vIHdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtcbiAgICAmLnByZXZpZXcge1xuXG4gICAgICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG59XG5cbmlvbi1idXR0b24uY2lyY2xlIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlvbi1yb3cuaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbmRpdi5ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICYuY2xvc2VkIHtcblxuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDAwcHgpO1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDAwcHgpO1xuICAgIH1cbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAgIGJvZHkge1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICB9XG4gICAgaW9uLW5hdiB7XG4gICAgICAgIG92ZXJmbG93OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5zY3JvbGwtY29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaGVhZGVyIG5hdixcbiAgICBmb290ZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5wYW5lIHtcbiAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgfVxuICAgIHAgYSB7XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB9XG4gICAgLmFwcC1yb290LFxuICAgIC5pb24tcGFnZSxcbiAgICBpb24tYXBwLFxuICAgIGlvbi1uYXYsXG4gICAgaW9uLXRhYixcbiAgICBpb24tdGFicyB7XG4gICAgICAgIGNvbnRhaW46IG5vbmU7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbmRpdi5yZWNlaXB0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDA7IGhlaWdodDogMDsgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XG4gICAgJi5wcmV2aWV3IHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAuNSk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIGxlZnQ6IC0xNnB4O1xuICAgICAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgZGl2LnJlY2VpcHQge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiBzY2FsZSguNTUpIHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAvLyBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIC8vIGxlZnQ6IDE2JTtcbiAgICAgICAgICAgIC8vIHRvcDogMTBweDtcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgICAgICAgICB3aWR0aDogNjAycHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDYwMnB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDJweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLjUsIDAuNSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAjMDAwMDAwMjk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmRpdi5yZWNlaXB0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XG4gICAgd2lkdGg6IDYwMnB4O1xuICAgIG1pbi13aWR0aDogNjAycHg7XG4gICAgbWF4LXdpZHRoOiA2MDJweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA2MHB4IDMwcHg7XG59XG5cbmRpdi5yZWNlaXB0IHAge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDMycHggIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbmRpdi5yZWNlaXB0IHAuY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmRpdi5yZWNlaXB0IGltZyB7XG4gICAgbWFyZ2luLXRvcDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDFweCkge1xuICAgIGlvbi1jb2wge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24taWNvbi5hbGwge1xuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5oMi5hbnVsYWRve1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZGYxZDFkO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxufVxuXG4uYnRuLWRyYWcge1xuICAgIGN1cnNvcjogbW92ZSAhaW1wb3J0YW50O1xufVxuXG5cbiAgICAvLyBpb24taXRlbTpub3QoLmhhcy1mb2N1cykge1xuICAgIC8vICAgICBpb24tbGFiZWwge1xuICAgIC8vICAgICAgICAgY29sb3I6ICM4NTg0ODQgIWltcG9ydGFudDtcbiAgICAvLyAgICAgfVxuICAgICAgICBcbiAgICAvLyB9XG5cbi5idG4tdXNlciB7XG4gICAgbWluLWhlaWdodDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgICBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIC5uYXRpdmUge1xuICAgICAgICBoZWlnaHQ6IDIwMDBweDtcbiAgICB9XG59XG5cblxuLmJ0bi1leHBhbmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgei1pbmRleDogOTk5OTk7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcbiAgICB9XG4gICAgJi5vcGVuIHtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxucC5lbXB0eS1udW1iZXJzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTMwZGVnKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1ncmlkIHtcbiAgICAmLmZpZWxkcyB7XG4gICAgICAgIC0tb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IC41cyBtYXgtaGVpZ2h0IGVhc2U7XG4gICAgICAgIHotaW5kZXg6IGluaGVyaXQ7XG4gICAgICAgICYub3BlbiB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMTBweDtcbiAgICAgICAgfVxuICAgICAgICAmLnZpZXcge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1jb2wge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG5pb24taXRlbSwgaW9uLXNlbGVjdCwgaW9uLWJ1dHRvbiwgaW9uLWdyaWQsIGlvbi1yb3csIGlvbi1sYWJlbCwgaW9uLWNvbCB7XG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5kaXYuaGlkZSB7XG4gICAgbWF4LWhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW50ZXJtaXRlbnQge1xuICAgIGFuaW1hdGlvbjogaW50ZXJtaXRlbnQgLjVzIGluZmluaXRlIGFsdGVybmF0ZSBmb3J3YXJkcztcbiAgICBjb2xvcjogI2IxMTMxMztcbn1cblxuQGtleWZyYW1lcyBpbnRlcm1pdGVudCB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "l1H3":
/*!***************************************************!*\
  !*** ./src/app/pages/clientes/clientes.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  margin: 0;\n}\n\n.avatar-letter {\n  padding: 14.5px 0;\n  border-radius: 50%;\n  color: white;\n  background: #ddbbc4;\n  margin-right: 10px;\n  font-weight: bold;\n  min-width: 50px;\n  max-width: 50px;\n  font-size: 1rem;\n  text-align: center;\n}\n\n.avatar-letter.man {\n  background: #a3af9a;\n}\n\nion-label h2 {\n  font-weight: 400;\n  font-size: 1.1rem;\n  font-family: \"Poppins\", sans-serif;\n}\n\nion-item-option {\n  text-transform: none;\n}\n\n.icon {\n  font-size: 1.3rem;\n}\n\nspan.id {\n  color: black;\n  font-weight: bold;\n}\n\n.list-body {\n  max-height: calc(100vh - 154px);\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJjbGllbnRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5hdmF0YXItbGV0dGVyIHtcbiAgICBwYWRkaW5nOiAxNC41cHggMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICNkZGJiYzQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1pbi13aWR0aDogNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmF2YXRhci1sZXR0ZXIubWFuIHtcbiAgICBiYWNrZ3JvdW5kOiAjYTNhZjlhO1xufVxuXG5pb24tbGFiZWwgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG5pb24taXRlbS1vcHRpb24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbnNwYW4uaWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpc3QtYm9keSB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE1NHB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbiJdfQ== */");

/***/ }),

/***/ "m8JS":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ventas-filtro/ventas-filtro-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: VentasFiltroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasFiltroPageRoutingModule", function() { return VentasFiltroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ventas_filtro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ventas-filtro.page */ "AjnV");




const routes = [
    {
        path: '',
        component: _ventas_filtro_page__WEBPACK_IMPORTED_MODULE_3__["VentasFiltroPage"]
    }
];
let VentasFiltroPageRoutingModule = class VentasFiltroPageRoutingModule {
};
VentasFiltroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VentasFiltroPageRoutingModule);



/***/ }),

/***/ "miFA":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/restringir-numeros/restringir-numeros-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RestringirNumerosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestringirNumerosPageRoutingModule", function() { return RestringirNumerosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _restringir_numeros_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restringir-numeros.page */ "B4BN");




const routes = [
    {
        path: '',
        component: _restringir_numeros_page__WEBPACK_IMPORTED_MODULE_3__["RestringirNumerosPage"]
    }
];
let RestringirNumerosPageRoutingModule = class RestringirNumerosPageRoutingModule {
};
RestringirNumerosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RestringirNumerosPageRoutingModule);



/***/ }),

/***/ "n5LM":
/*!***********************************************************************!*\
  !*** ./src/app/components/dropdown-list/dropdown-list.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-container {\n  width: 100%;\n  position: relative;\n  z-index: 0;\n}\n.dropdown-container div.btn {\n  position: absolute;\n  right: -10px;\n  top: 50%;\n  transform: translateY(-30%);\n  font-size: 20px;\n  z-index: 999999;\n  width: 54px;\n}\n.dropdown-container div.btn ion-button {\n  opacity: 0;\n  transition: 0.3s all ease;\n}\n.dropdown-container div.btn ion-button.show {\n  opacity: 1 !important;\n}\n.dropdown-container ion-input {\n  --padding-end: 36px;\n}\n.list {\n  overflow: auto;\n  position: absolute;\n  background: white;\n  z-index: 999999;\n  width: calc(100%);\n  display: block;\n  max-height: 0;\n  transition: 0.3s all ease-in-out;\n  box-shadow: 0 3px 6px #00000029;\n}\n.list ion-button {\n  width: 100%;\n  height: 40px;\n  margin: 0;\n  text-transform: none !important;\n  color: black !important;\n  border-bottom: 0.5px solid #00000029;\n}\n.list ion-button .inner {\n  text-align: left;\n  width: 100%;\n}\n.list.show {\n  max-height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Ryb3Bkb3duLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0o7QUFDSTtFQUVJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUFSO0FBQ1E7RUFDSSxVQUFBO0VBQ0EseUJBQUE7QUFDWjtBQUFZO0VBQ0kscUJBQUE7QUFFaEI7QUFHSTtFQUNJLG1CQUFBO0FBRFI7QUFLQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBR0EsY0FBQTtFQWNBLGFBQUE7RUFDQSxnQ0FBQTtFQUVBLCtCQUFBO0FBbEJKO0FBRUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUFBUjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBQ1o7QUFPSTtFQUNJLGlCQUFBO0FBTFIiLCJmaWxlIjoiZHJvcGRvd24tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xuICAgIFxuICAgIGRpdi5idG4ge1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCUpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICAgICAgd2lkdGg6IDU0cHg7XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcbiAgICAgICAgICAgICYuc2hvdyB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDM2cHg7XG4gICAgfVxufVxuXG4ubGlzdCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICB3aWR0aDogY2FsYygxMDAlKTtcbiAgICAvLyBsZWZ0OiAtMTZweDtcblxuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IC41cHggc29saWQgIzAwMDAwMDI5O1xuICAgICAgICAuaW5uZXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICB9XG4gICAgfVxuICAgIC8vIHRvcDogNjBweDtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuICAgIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gICAgLy8gdHJhbnNpdGlvbjogLjVzIGhlaWdodCBlYXNlLWluLW91dDtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggIzAwMDAwMDI5O1xuICAgICYuc2hvdyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "o3NA":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdown-list/dropdown-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item class=\"dropdown-container\" [ngClass]=\"{'show': showed}\">\n\n  <ion-label position='floating'>{{labelText}}</ion-label>\n  <ion-input [name]='name' [disabled]='_disabled' [(ngModel)]='value' (ionFocus)='gotFocus($event)' (ionBlur)='closeList($event)' (ionInput)='textChanged($event)' autocomplete='off'></ion-input>\n  <div class=\"btn\">\n    <ion-button fill='clear' (click)='value = \"\"' [ngClass]=\"{'show': value.trim() != '' && !_disabled}\">\n      <ion-icon size='small' name=\"close-outline\"></ion-icon>\n    </ion-button>\n  </div>\n \n    \n</ion-item>\n\n<ion-list  class=\"list\" [ngClass]=\"{'show': showList}\" [ngStyle]=\"{'height': (values.length > 5 ? 200 : values.length * 40) + 'px'}\">\n\n  <cdk-virtual-scroll-viewport itemSize=\"20\" style=\"height: 100%;\">\n\n\n    <ion-button fill='clear' *cdkVirtualFor=\"let x of values; let i = index;\" (click)='setValue(x)'><span class=\"inner\">{{x}}</span></ion-button>\n \n\n  </cdk-virtual-scroll-viewport>\n  \n</ion-list>");

/***/ }),

/***/ "o5E7":
/*!**********************************************************!*\
  !*** ./src/app/pages/shared/sub-menu/sub-menu.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  margin-right: 10px;\n}\n\nhr {\n  background: #00000029;\n  margin: 0;\n}\n\ndiv.hr-container {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N1Yi1tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InN1Yi1tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmhyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMjk7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5kaXYuaHItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "o89h":
/*!***********************************************************!*\
  !*** ./src/app/pages/clientes/clientes-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ClientesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPageRoutingModule", function() { return ClientesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clientes.page */ "Iz4z");




const routes = [
    {
        path: '',
        component: _clientes_page__WEBPACK_IMPORTED_MODULE_3__["ClientesPage"]
    }
];
let ClientesPageRoutingModule = class ClientesPageRoutingModule {
};
ClientesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClientesPageRoutingModule);



/***/ }),

/***/ "pLd1":
/*!***********************************************!*\
  !*** ./src/app/pages/boleto/boleto.module.ts ***!
  \***********************************************/
/*! exports provided: BoletoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletoPageModule", function() { return BoletoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _boleto_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boleto-routing.module */ "yu5+");
/* harmony import */ var _boleto_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./boleto.page */ "9ljF");
/* harmony import */ var src_app_components_slide_button_slide_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/slide-button/slide-button.module */ "bnN/");
/* harmony import */ var src_app_components_dropdown_list_dropdown_list_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/dropdown-list/dropdown-list.component.module */ "R0EX");










// import { CalendarModule } from 'ion2-calendar';
let BoletoPageModule = class BoletoPageModule {
};
BoletoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _boleto_routing_module__WEBPACK_IMPORTED_MODULE_6__["BoletoPageRoutingModule"],
            ion2_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"],
            src_app_components_slide_button_slide_button_module__WEBPACK_IMPORTED_MODULE_8__["SlideButtonModule"],
            src_app_components_dropdown_list_dropdown_list_component_module__WEBPACK_IMPORTED_MODULE_9__["DropDownListModule"]
        ],
        declarations: [_boleto_page__WEBPACK_IMPORTED_MODULE_7__["BoletoPage"]],
        exports: [ion2_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"]]
    })
], BoletoPageModule);



/***/ }),

/***/ "r1De":
/*!*************************************************!*\
  !*** ./src/app/pages/boletos/boletos.module.ts ***!
  \*************************************************/
/*! exports provided: BoletosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletosPageModule", function() { return BoletosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _boletos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boletos-routing.module */ "8Pg+");
/* harmony import */ var _boletos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boletos.page */ "L2Uv");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");








// import { LongPressModule } from 'ionic-long-press';
// import { CalendarModule } from "ion2-calendar";
let BoletosPageModule = class BoletosPageModule {
};
BoletosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _boletos_routing_module__WEBPACK_IMPORTED_MODULE_5__["BoletosPageRoutingModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"]
            // CalendarModule
        ],
        // exports: [CalendarModule]
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        declarations: [_boletos_page__WEBPACK_IMPORTED_MODULE_6__["BoletosPage"]]
    })
], BoletosPageModule);



/***/ }),

/***/ "rdpw":
/*!*************************************************!*\
  !*** ./src/app/pages/cliente/cliente.module.ts ***!
  \*************************************************/
/*! exports provided: ClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientePageModule", function() { return ClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cliente-routing.module */ "EdnI");
/* harmony import */ var _cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cliente.page */ "YhDx");







let ClientePageModule = class ClientePageModule {
};
ClientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientePageRoutingModule"]
        ],
        declarations: [_cliente_page__WEBPACK_IMPORTED_MODULE_6__["ClientePage"]]
    })
], ClientePageModule);



/***/ }),

/***/ "sPqy":
/*!*********************************************************************!*\
  !*** ./src/app/components/slide-button/slide-button.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".payment-content {\n  display: block;\n  width: 100%;\n  border-radius: 30px;\n  border: 1px solid #00909e29;\n  position: relative;\n  transition: all 0.3s ease;\n}\n.payment-content.disabled {\n  opacity: 0.5;\n}\n.payment-content.disabled .text {\n  display: none;\n}\n.payment-content.loading {\n  transition: 0.9s all ease;\n  width: 60px;\n  margin: 0 auto;\n  border-color: transparent;\n}\n.payment-content.loading .circle-dollar {\n  transition: 0.9s all ease;\n  transform: translate3d(0, 0, 0) !important;\n}\n.payment-content.loading .text {\n  display: none;\n}\n.payment-content.loading .end {\n  transition: 0.9s left ease;\n  animation: animation2 0.4s forwards infinite alternate;\n  right: -2px !important;\n}\n.payment-content.loading .circle-dollar {\n  opacity: 0.7;\n}\n.payment-content.loading .fill {\n  width: 0 !important;\n}\n.payment-content.loading ion-icon {\n  transition: 0.9s all ease;\n  opacity: 1;\n  animation: animation2 1s forwards linear infinite;\n}\n.circle-dollar {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: #13474e;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 20px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  position: relative;\n  z-index: 3;\n  border: 1px solid #00000029;\n  transition: all 0s ease;\n}\n.fill {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 30px;\n  z-index: 2;\n  background: #13474e;\n}\n.text {\n  margin: 0;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n  text-align: center;\n  font-size: 12px;\n  font-weight: bold;\n  z-index: 1;\n}\n.end {\n  right: 0;\n  position: absolute;\n  top: 0;\n  border-radius: 30px;\n  height: 100%;\n  width: 60px;\n  border: 1px solid #00000029;\n}\n.animate {\n  animation: animation 0.4s forwards infinite alternate;\n  z-index: 8;\n}\n.animate-2 {\n  animation: animation-2 0.4s forwards infinite alternate;\n  z-index: 8;\n}\nion-icon {\n  opacity: 0;\n  position: absolute;\n  right: -9px;\n  top: -9px;\n  pointer-events: none;\n  color: black;\n  font-size: 76px;\n}\n@keyframes animation {\n  from {\n    transform: scale(0.9);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n@keyframes animation2 {\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NsaWRlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtBQUVSO0FBRFE7RUFDSSxhQUFBO0FBR1o7QUFBSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUVSO0FBRFE7RUFDSSx5QkFBQTtFQUNBLDBDQUFBO0FBR1o7QUFEUTtFQUNJLGFBQUE7QUFHWjtBQURRO0VBQ0ksMEJBQUE7RUFDQSxzREFBQTtFQUNBLHNCQUFBO0FBR1o7QUFEUTtFQUNJLFlBQUE7QUFHWjtBQURRO0VBQ0ksbUJBQUE7QUFHWjtBQURRO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0EsaURBQUE7QUFHWjtBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFDSjtBQUVBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQUNKO0FBRUE7RUFDSSxxREFBQTtFQUNBLFVBQUE7QUFDSjtBQUVBO0VBQ0ksdURBQUE7RUFDQSxVQUFBO0FBQ0o7QUFFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUE7RUFDSTtJQUNJLHFCQUFBO0VBQ047RUFDRTtJQUNJLG1CQUFBO0VBQ047QUFDRjtBQUVBO0VBQ0k7SUFDSSxvQkFBQTtFQUFOO0VBRUU7SUFDSSx5QkFBQTtFQUFOO0FBQ0YiLCJmaWxlIjoic2xpZGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW1lbnQtY29udGVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5MDllMjk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcbiAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5sb2FkaW5nIHtcbiAgICAgICAgdHJhbnNpdGlvbjogLjlzIGFsbCBlYXNlO1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC5jaXJjbGUtZG9sbGFyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC45cyBhbGwgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5lbmQge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjlzIGxlZnQgZWFzZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uMiAuNHMgZm9yd2FyZHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgICAgICAgICAgcmlnaHQ6IC0ycHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuY2lyY2xlLWRvbGxhciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgfVxuICAgICAgICAuZmlsbCB7XG4gICAgICAgICAgICB3aWR0aDogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC45cyBhbGwgZWFzZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGlvbjIgMXMgZm9yd2FyZHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2lyY2xlLWRvbGxhciB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMTM0NzRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMjk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDBzIGVhc2U7XG59XG5cbi5maWxsIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICBiYWNrZ3JvdW5kOiAjMTM0NzRlO1xufVxuXG4udGV4dCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5lbmQge1xuICAgIHJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDI5O1xufVxuXG4uYW5pbWF0ZSB7XG4gICAgYW5pbWF0aW9uOiBhbmltYXRpb24gLjRzIGZvcndhcmRzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICB6LWluZGV4OiA4O1xufVxuXG4uYW5pbWF0ZS0yIHtcbiAgICBhbmltYXRpb246IGFuaW1hdGlvbi0yIC40cyBmb3J3YXJkcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgei1pbmRleDogODtcbn1cblxuaW9uLWljb24ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtOXB4O1xuICAgIHRvcDogLTlweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiA3NnB4O1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjkpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvbjIge1xuICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "svMc":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ventas-filtro/ventas-filtro.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-title class=\"center\">Filtros</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)='close()'>\n                <ion-icon name='close' slot='icon-only'></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class='ion-padding' *ngIf='sorteo && empleado'>\n    <div *ngIf='numero' style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;\">\n\n        <h5>Boletos con el número: {{numero}}</h5>\n        <ion-button color='danger' (click)='limpiar(3)' class=\"eliminar\">\n            Limpiar\n            <ion-icon name=\"trash\"></ion-icon>\n        </ion-button>\n    </div>\n    <ion-item>\n        <ion-label>Turno</ion-label>\n        <ion-select [(ngModel)]='turno' (ionChange)='sorteoChanged($event)' placeholder=\"Seleccione un turno\">\n            <ion-select-option *ngFor='let t of turnos' [value]='t'>{{t}}</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <div class=\"btn-container\">\n        <ion-button color='danger' (click)='limpiar(1)' class=\"eliminar\">\n            Limpiar\n            <ion-icon name=\"trash\"></ion-icon>\n        </ion-button>\n    </div>\n\n    <ion-item>\n        <ion-label>Tipo</ion-label>\n        <ion-select [(ngModel)]='sorteo_tipo' name='tipo' placeholder='Seleccione un tipo'>\n            <ion-select-option value='r'>\n                Regular\n            </ion-select-option>\n            <ion-select-option value='j3'>\n                Juega 3\n            </ion-select-option>\n            <ion-select-option value='f'>\n                Fechas\n            </ion-select-option>\n        </ion-select>\n\n    </ion-item>\n    <div class=\"btn-container\">\n        <ion-button color='danger' (click)='limpiar(5)' class=\"eliminar\">\n            Limpiar\n            <ion-icon name=\"trash\"></ion-icon>\n        </ion-button>\n    </div>\n    \n\n    <ng-container *ngIf='empleados.length > 0 || empleado.id != -1'>\n        <ion-item>\n            <ion-label>Supervisor</ion-label>\n            <ion-select [disabled]='empleados.length == 0' [(ngModel)]='empleado' (ionChange)='empleadoChanged($event)' [placeholder]='empleado.id == -1 ? \"Seleccione un supervisor\" : empleado.nombre'>\n                <ion-select-option *ngFor='let e of empleados' [value]='e'>{{e.nombre}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <div class=\"btn-container\">\n            <ion-button color='danger' (click)='limpiar(2)' class=\"eliminar\">\n                Limpiar\n                <ion-icon name=\"trash\"></ion-icon>\n            </ion-button>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf='agentes.length > 0 || agente.id != -1'>\n        <ion-item>\n            <ion-label>Agente</ion-label>\n            <ion-select [disabled]='agentes.length == 0' [(ngModel)]='agente' (ionChange)='agenteChanged($event)' [placeholder]='agente.id == -1 ? \"Seleccione un agente\" : agente.nombre'>\n                <ion-select-option *ngFor='let e of agentes' [value]='e'>{{e.nombre}}</ion-select-option>\n            </ion-select>\n\n        </ion-item>\n\n\n        <div class=\"btn-container\">\n            <ion-button color='danger' (click)='limpiar(4)' class=\"eliminar\">\n                Limpiar\n                <ion-icon name=\"trash\"></ion-icon>\n            </ion-button>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf='paises.length > 0'>\n        <ion-item>\n            <ion-label>País</ion-label>\n            <ion-select [(ngModel)]='pais_id' [placeholder]='\"Seleccione un país\"'>\n                <ion-select-option *ngFor='let p of paises' [value]='p.id'>{{p.nombre}}</ion-select-option>\n            </ion-select>\n\n        </ion-item>\n\n\n        <div class=\"btn-container\">\n            <ion-button color='danger' (click)='limpiar(6)' class=\"eliminar\">\n                Limpiar\n                <ion-icon name=\"trash\"></ion-icon>\n            </ion-button>\n        </div>\n    </ng-container>\n \n    \n\n    <ion-item *ngIf='empleadosCount > 0 || isAdmin'>\n        <ion-label>Ver números sumados</ion-label>\n        <ion-toggle slot='end' [(ngModel)]='numerosSumados'></ion-toggle>\n    </ion-item>\n    \n    <ion-item>\n        <ion-label>Ver duplicados</ion-label>\n        <ion-toggle slot='end' [(ngModel)]='boletosDuplicados'></ion-toggle>\n    </ion-item>\n\n    <ion-button class='submit' expand='block' (click)='aplicarFiltros($event)'>Aplicar filtros\n        <ion-icon style='margin-left: 6px;' name=\"checkmark-circle\"></ion-icon>\n    </ion-button>\n\n\n</ion-content>");

/***/ }),

/***/ "t7rK":
/*!*************************************************************!*\
  !*** ./src/app/pages/ventas-filtro/ventas-filtro.module.ts ***!
  \*************************************************************/
/*! exports provided: VentasFiltroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasFiltroPageModule", function() { return VentasFiltroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ventas_filtro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ventas-filtro-routing.module */ "m8JS");
/* harmony import */ var _ventas_filtro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ventas-filtro.page */ "AjnV");







let VentasFiltroPageModule = class VentasFiltroPageModule {
};
VentasFiltroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ventas_filtro_routing_module__WEBPACK_IMPORTED_MODULE_5__["VentasFiltroPageRoutingModule"]
        ],
        declarations: [_ventas_filtro_page__WEBPACK_IMPORTED_MODULE_6__["VentasFiltroPage"]]
    })
], VentasFiltroPageModule);



/***/ }),

/***/ "tNZv":
/*!**********************************************************!*\
  !*** ./src/app/pages/shared/sub-menu/sub-menu.module.ts ***!
  \**********************************************************/
/*! exports provided: SubMenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenuPageModule", function() { return SubMenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sub_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sub-menu-routing.module */ "DVkC");
/* harmony import */ var _sub_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sub-menu.page */ "YY6p");







let SubMenuPageModule = class SubMenuPageModule {
};
SubMenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sub_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubMenuPageRoutingModule"]
        ],
        declarations: [_sub_menu_page__WEBPACK_IMPORTED_MODULE_6__["SubMenuPage"]]
    })
], SubMenuPageModule);



/***/ }),

/***/ "vNl+":
/*!***************************************************!*\
  !*** ./src/app/pages/clientes/clientes.module.ts ***!
  \***************************************************/
/*! exports provided: ClientesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPageModule", function() { return ClientesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _clientes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clientes-routing.module */ "o89h");
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clientes.page */ "Iz4z");







let ClientesPageModule = class ClientesPageModule {
};
ClientesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _clientes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientesPageRoutingModule"]
        ],
        declarations: [_clientes_page__WEBPACK_IMPORTED_MODULE_6__["ClientesPage"]]
    })
], ClientesPageModule);



/***/ }),

/***/ "vQ0Y":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agente/agente.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar color='light'>\n    <ion-buttons slot=\"start\" *ngIf='empleado.id == -1'>\n      <ion-back-button [text]='\"\"'></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"center\">{{empleado.id == -1 ? 'Nuevo' : 'Actualizar'}} Agente</ion-title>\n    <ion-buttons slot=\"end\" *ngIf='empleado.id != -1'>\n      <ion-button (click)='close()'>\n        <ion-icon slot='icon-only' name=\"close\"></ion-icon>\n      </ion-button>\n      <ion-button (click)='openSubMenu($event)'>\n        <ion-icon slot='icon-only' name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  <form #form='ngForm' (ngSubmit)='submit(form)'>\n    <ion-list>\n\n      <ion-list-header>\n        <ion-label>Información Personal</ion-label>\n      </ion-list-header>\n      <ion-item *ngIf='empleado.id != -1'>\n        <ion-label position=\"stack\">ID:</ion-label>\n        <ion-input [disabled]='true' name='id' [(ngModel)]=\"empleado.id\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Cédula</ion-label>\n        <ion-input maxlength='16' name='cedula' [(ngModel)]=\"empleado.cedula\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Primer nombre</ion-label>\n        <ion-input name='primer_nombre' [(ngModel)]=\"empleado.primer_nombre\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Segundo nombre</ion-label>\n        <ion-input name='segundo_nombre' [(ngModel)]=\"empleado.segundo_nombre\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Primer apellido</ion-label>\n        <ion-input name='primer_apellido' [(ngModel)]=\"empleado.primer_apellido\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Segundo apellido</ion-label>\n        <ion-input name='segundo_apellido' [(ngModel)]=\"empleado.segundo_apellido\"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label>Género</ion-label>\n        <ion-select name='genero' [(ngModel)]='empleado.genero' [placeholder]=\"'Seleccione un género'\">\n          <!-- <ng-container *ngIf='paises.length > 0'> -->\n          <ion-select-option value='M'>Masculino</ion-select-option>\n          <ion-select-option value='F'>Femenino</ion-select-option>\n          <!-- </ng-container> -->\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>País</ion-label>\n        <ion-select name='pais' [value]='pais' [disabled]='paises.length == 0' (ionChange)='paisChanged($event)'\n          [placeholder]=\"empleado.id == -1 ? 'Selecciona un país' : empleado.pais.nombre + ' ' + empleado.pais.ext\">\n          <!-- <ng-container *ngIf='paises.length > 0'> -->\n          <ion-select-option *ngFor='let p of paises' [value]='p'>{{p.nombre}} {{p.ext}}</ion-select-option>\n          <!-- </ng-container> -->\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Celular</ion-label>\n        <!-- <ion-input type='text' name='celular' (keydown)='format($event)' id=\"cel\" mask=\"(000) 000-0000\" [(ngModel)]=\"cliente.celular\"></ion-input> -->\n        <ion-input type=\"tel\" (keypress)='format($event)' (ionInput)='modelChanged($event)' name='celular'\n          [(ngModel)]=\"empleado.celular\"></ion-input>\n      </ion-item>\n\n      <ng-container *ngIf=\"!isAdmin\">\n        <ion-item>\n          <ion-label>Forzar Saldo</ion-label>\n          <ion-toggle [(ngModel)]=\"forzar_saldo\" (ionChange)='change($event.target.checked, 0)'\n            name=\"forzar_saldo\"></ion-toggle>\n        </ion-item>\n        <ion-item *ngIf=\"forzar_saldo\">\n          <ion-label position=\"floating\">Saldo</ion-label>\n          <ion-input [value]=\"empleado.usuario.saldo\" type=\"number\" name='saldo'\n            [(ngModel)]=\"empleado.usuario.saldo\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"forzar_saldo\" style=\"display: flex; justify-content: flex-end; margin: 16px 0;\">\n          <ion-button (click)=\"agregarSaldo()\">\n            <ion-icon name=\"add\" slot=\"start\"></ion-icon>\n            Agregar Saldo</ion-button>\n        </div>\n      </ng-container>\n\n      <ng-container *ngIf='me.usuario.isadmin && !isAdmin'>\n\n\n        <ion-item>\n          <ion-label position=\"floating\">Comisión por ventas %</ion-label>\n          <ion-input (ionChange)='change($event.target.value, 1)' type=\"number\" name='c_ventas'\n            [(ngModel)]=\"empleado.sales_commission\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Comisión por ganancias %</ion-label>\n          <ion-input (ionChange)='change($event.target.value, 2)' type=\"number\" name='c_ganancias'\n            [(ngModel)]=\"empleado.profit_commission\"></ion-input>\n        </ion-item>\n      </ng-container>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>\n        <ion-label>\n          Usuario\n        </ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-label position=\"floating\">Nombre de usuario</ion-label>\n        <ion-input [disabled]='empleado.id != -1' name='usuario' [(ngModel)]=\"empleado.usuario.nombre\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf='empleado.id == -1'>\n        <ion-label position=\"floating\">Contraseña</ion-label>\n        <ion-input type='password' name='pass' [(ngModel)]=\"empleado.usuario.pass\"></ion-input>\n      </ion-item>\n\n      <ng-container *ngIf='me.usuario.isadmin && !empleado.usuario.isadmin'>\n        <ion-item>\n          <ion-label>Ver Balance</ion-label>\n          <ion-toggle [(ngModel)]=\"empleado.usuario.vb\" name='vb' slot=\"end\"></ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Puede Imprimir</ion-label>\n          <ion-toggle [(ngModel)]=\"empleado.usuario.pi\" name='pi' slot=\"end\"></ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position='stacked'>Tiempo disponible de Ventas</ion-label>\n          <ion-select name='tv' [(ngModel)]='empleado.usuario.tv'>\n            <ion-select-option *ngFor='let tv of tiemposVentas' [value]=\"tv.value\">{{tv.label}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position='stacked'>Tipo de Factura</ion-label>\n          <ion-select name='tf' [(ngModel)]='empleado.usuario.tipo_factura'>\n            <ion-select-option [value]=\"1\">Factura #1</ion-select-option>\n            <ion-select-option [value]=\"2\">Factura #2</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n\n        <ion-item>\n          <ion-label position='stacked'>Nombre en Factura</ion-label>\n          <ion-input [(ngModel)]=\"empleado.usuario.factura_nombre\" name='fn'></ion-input>\n        </ion-item>\n      </ng-container>\n\n    </ion-list>\n    <ion-list *ngIf='me.usuario.isadmin && !isAdmin' style=\"margin-top: 20px;\">\n      <ion-list-header>\n        <ion-label>Lista de usuarios</ion-label>\n      </ion-list-header>\n      <ion-item *ngFor='let usuario of usuarios; let i = index'>\n        <ion-label>{{usuario.nombre}}</ion-label>\n        <ion-toggle [name]='usuario.nombre' slot=\"end\" [(ngModel)]=\"usuario.seleccionado\"></ion-toggle>\n      </ion-item>\n\n    </ion-list>\n\n  </form>\n  <!-- {{empleado| json}} -->\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"btn-container\" style=\"margin: 0 !important; padding: 0 16px;\">\n      <div *ngIf=\"!isValid()\" style=\"color: #b71c1c; font-size: 13px; text-align: center; margin-bottom: 4px;\">\n        Falta: {{faltanDatos()}}\n      </div>\n      <ion-button type='submit' (click)=\"submit(form)\">{{empleado.id == -1 ? 'Registrar' :\n        'Actualizar'}}\n        <ion-icon name=\"save\"></ion-icon>\n      </ion-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-login-login-module */ "pages-login-login-module").then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "F4UR")).then(m => m.LoginPageModule)
    },
    {
        path: 'sorteos',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-sorteos-sorteos-module */ "pages-sorteos-sorteos-module").then(__webpack_require__.bind(null, /*! ./pages/sorteos/sorteos.module */ "NjNp")).then(m => m.SorteosPageModule)
    },
    {
        path: 'sorteo',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/sorteo/sorteo.module */ "4TzF")).then(m => m.SorteoPageModule)
    },
    {
        path: 'boleto',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/boleto/boleto.module */ "pLd1")).then(m => m.BoletoPageModule)
    },
    {
        path: 'boletos',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/boletos/boletos.module */ "r1De")).then(m => m.BoletosPageModule)
    },
    {
        path: 'terms-conditions',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-terms-conditions-terms-conditions-module */ "pages-terms-conditions-terms-conditions-module").then(__webpack_require__.bind(null, /*! ./pages/terms-conditions/terms-conditions.module */ "gbAl")).then(m => m.TermsConditionsPageModule)
    },
    {
        path: 'security-policy',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-security-policy-security-policy-module */ "pages-security-policy-security-policy-module").then(__webpack_require__.bind(null, /*! ./pages/security-policy/security-policy.module */ "zMVk")).then(m => m.SecurityPolicyPageModule)
    },
    {
        path: 'set-ganador',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | pages-set-ganador-set-ganador-module */ "pages-set-ganador-set-ganador-module").then(__webpack_require__.bind(null, /*! ./pages/set-ganador/set-ganador.module */ "/isP")).then(m => m.SetGanadorPageModule)
    },
    {
        path: 'escanear-boleto',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-escanear-boleto-escanear-boleto-module */ "pages-escanear-boleto-escanear-boleto-module").then(__webpack_require__.bind(null, /*! ./pages/escanear-boleto/escanear-boleto.module */ "eVpJ")).then(m => m.EscanearBoletoPageModule)
    },
    {
        path: 'cambiar-password',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-cambiar-password-cambiar-password-module */ "pages-cambiar-password-cambiar-password-module").then(__webpack_require__.bind(null, /*! ./pages/cambiar-password/cambiar-password.module */ "VX7/")).then(m => m.CambiarPasswordPageModule)
    },
    {
        path: 'perfil',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-editar-informacion-editar-informacion-module */ "pages-editar-informacion-editar-informacion-module").then(__webpack_require__.bind(null, /*! ./pages/editar-informacion/editar-informacion.module */ "tJAp")).then(m => m.EditarInformacionPageModule)
    },
    //{
    //path: 'desarrolladores',
    //loadChildren: () => import('./pages/desarrolladores/desarrolladores.module').then( m => m.DesarrolladoresPageModule)
    // },
    {
        path: 'numeros-disponibles',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-numeros-disponibles-numeros-disponibles-module */ "pages-numeros-disponibles-numeros-disponibles-module").then(__webpack_require__.bind(null, /*! ./pages/numeros-disponibles/numeros-disponibles.module */ "Fhgr")).then(m => m.NumerosDisponiblesPageModule)
    },
    {
        path: 'clientes',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/clientes/clientes.module */ "vNl+")).then(m => m.ClientesPageModule)
    },
    {
        path: 'nuevo-grupo',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/nuevo-grupo/nuevo-grupo.module */ "Gqu5")).then(m => m.NuevoGrupoPageModule)
    },
    {
        path: 'grupos',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-grupos-grupos-module */ "pages-grupos-grupos-module").then(__webpack_require__.bind(null, /*! ./pages/grupos/grupos.module */ "vafi")).then(m => m.GruposPageModule)
    },
    {
        path: 'agente',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/agente/agente.module */ "66mU")).then(m => m.AgentePageModule)
    },
    {
        path: 'agentes',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-agentes-agentes-module */ "pages-agentes-agentes-module").then(__webpack_require__.bind(null, /*! ./pages/agentes/agentes.module */ "YEEE")).then(m => m.AgentesPageModule)
    },
    {
        path: 'juegos',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-juegos-juegos-module */ "pages-juegos-juegos-module").then(__webpack_require__.bind(null, /*! ./pages/juegos/juegos.module */ "+zq3")).then(m => m.JuegosPageModule)
    },
    {
        path: 'balance',
        loadChildren: () => Promise.all(/*! import() | pages-balance-balance-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-balance-balance-module")]).then(__webpack_require__.bind(null, /*! ./pages/balance/balance.module */ "msXF")).then(m => m.BalancePageModule)
    },
    {
        path: 'cierre-caja',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-cierre-caja-cierre-caja-module */ "pages-cierre-caja-cierre-caja-module").then(__webpack_require__.bind(null, /*! ./pages/cierre-caja/cierre-caja.module */ "9LmO")).then(m => m.CierreCajaPageModule)
    },
    {
        path: 'ganadores',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-ganadores-ganadores-module */ "pages-ganadores-ganadores-module").then(__webpack_require__.bind(null, /*! ./pages/ganadores/ganadores.module */ "4bRc")).then(m => m.GanadoresPageModule)
    },
    {
        path: 'balanceo',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-balanceo-balanceo-module */ "pages-balanceo-balanceo-module").then(__webpack_require__.bind(null, /*! ./pages/balanceo/balanceo.module */ "MF0o")).then(m => m.BalanceoPageModule)
    },
    {
        path: 'detalle-balance',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/detalle-balance/detalle-balance.module */ "Ia8R")).then(m => m.DetalleBalancePageModule)
    },
    {
        path: 'balance-filtro',
        loadChildren: () => Promise.all(/*! import() | pages-balance-filtro-balance-filtro-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-balance-filtro-balance-filtro-module")]).then(__webpack_require__.bind(null, /*! ./pages/balance-filtro/balance-filtro.module */ "yrps")).then(m => m.BalanceFiltroPageModule)
    },
    {
        path: 'historial-numeros',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-historial-numeros-historial-numeros-module */ "pages-historial-numeros-historial-numeros-module").then(__webpack_require__.bind(null, /*! ./pages/historial-numeros/historial-numeros.module */ "yZmo")).then(m => m.HistorialNumerosPageModule)
    },
    {
        path: 'empty-tickets',
        loadChildren: () => Promise.all(/*! import() | pages-empty-tickets-empty-tickets-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-empty-tickets-empty-tickets-module")]).then(__webpack_require__.bind(null, /*! ./pages/empty-tickets/empty-tickets.module */ "aBoa")).then(m => m.EmptyTicketsPageModule)
    },
    {
        path: 'last-won',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-last-won-last-won-module */ "pages-last-won-last-won-module").then(__webpack_require__.bind(null, /*! ./pages/last-won/last-won.module */ "Nrkc")).then(m => m.LastWonPageModule)
    },
    {
        path: 'more-sold',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-more-sold-more-sold-module */ "pages-more-sold-more-sold-module").then(__webpack_require__.bind(null, /*! ./pages/more-sold/more-sold.module */ "LXXI")).then(m => m.MoreSoldPageModule)
    },
    {
        path: 'super-groups',
        loadChildren: () => Promise.all(/*! import() | pages-super-groups-super-groups-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-super-groups-super-groups-module")]).then(__webpack_require__.bind(null, /*! ./pages/super-groups/super-groups.module */ "RN1w")).then(m => m.SuperGroupsPageModule)
    },
    {
        path: 'super-grupo',
        loadChildren: () => Promise.all(/*! import() | pages-super-grupo-super-grupo-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-super-grupo-super-grupo-module")]).then(__webpack_require__.bind(null, /*! ./pages/super-grupo/super-grupo.module */ "c7pW")).then(m => m.SuperGrupoPageModule)
    },
    {
        path: 'tech-support',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-tech-support-tech-support-module */ "pages-tech-support-tech-support-module").then(__webpack_require__.bind(null, /*! ./pages/tech-support/tech-support.module */ "2st0")).then(m => m.TechSupportPageModule)
    },
    {
        path: 'roles-explained',
        loadChildren: () => Promise.all(/*! import() | components-roles-explained-roles-explained-module */[__webpack_require__.e("common"), __webpack_require__.e("components-roles-explained-roles-explained-module")]).then(__webpack_require__.bind(null, /*! ./components/roles-explained/roles-explained.module */ "YUyd")).then(m => m.RolesExplainedPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vbfs":
/*!*****************************************************************!*\
  !*** ./src/app/pages/reporte-completo/reporte-completo.page.ts ***!
  \*****************************************************************/
/*! exports provided: ReporteCompletoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteCompletoPage", function() { return ReporteCompletoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reporte_completo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reporte-completo.page.html */ "MGJa");
/* harmony import */ var _reporte_completo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reporte-completo.page.scss */ "17jk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/util/util */ "JQC8");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11__);












let ReporteCompletoPage = class ReporteCompletoPage {
    constructor(modalCtrl, cdRef, loadCtrl, currencyPipe, socialSharing, util, bs) {
        this.modalCtrl = modalCtrl;
        this.cdRef = cdRef;
        this.loadCtrl = loadCtrl;
        this.currencyPipe = currencyPipe;
        this.socialSharing = socialSharing;
        this.util = util;
        this.bs = bs;
        this.originales = [];
        this.numeros = [];
        this.fecha = new Date();
        this.empleado = { id: -1, nombre: '' };
        this.searchTerm = '';
        this.criterios = [
            {
                nombre: 'Ninguno',
                value: 0
            },
            {
                nombre: '<',
                value: 1
            }, {
                nombre: '<=',
                value: 2
            }, {
                nombre: '>',
                value: 3
            }, {
                nombre: '>=',
                value: 4
            },
        ];
        this.critero = this.criterios[0];
        this.isAdmin = false;
        this.cantidad = 0;
        this.shown = false;
        this.bs.getEmpleado().then(e => this.isAdmin = e.usuario.isadmin);
        this.critero = this.criterios[0];
        // pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }
    ngOnInit() {
    }
    search(evt) {
        let term = evt.target.value;
        // console.log(term);
        // console.log(this.originales);
        if (term.trim() == '')
            this.numeros = this.originales.clone();
        else
            this.numeros = this.originales.filter(x => x.numero.toString() == term);
        if (!isNaN(this.mayorIgualQueCantidad))
            this.numeros = this.numeros.filter(x => x.inversion >= Number(this.mayorIgualQueCantidad));
        if (!isNaN(this.menorIgualQueCantidad))
            this.numeros = this.numeros.filter(x => x.inversion <= Number(this.menorIgualQueCantidad));
        // if (isNaN(Number(this.cantidad)))
        //   return;
        // this.cantidad = Number(this.cantidad);
        // let cant = Number(this.cantidad);
        // if (this.critero.value != 0)
        // {
        //   // console.log(this.critero, cant, this.numeros);
        //   // let distincts = this.distinctRecords(this.numeros, 'numero') as NumeroBoleto[];
        //   // let temp = [];
        // //  console.log(distincts);
        //   switch (this.critero.value)
        //   {
        //     case 1:
        //       this.numeros = this.numeros.filter(x => x.inversion < cant);
        //       break;
        //     case 2:
        //       this.numeros = this.numeros.filter(x => x.inversion <= cant);
        //       break;
        //     case 3:
        //       this.numeros = this.numeros.filter(x => x.inversion > cant);
        //       break;
        //     case 4:
        //       this.numeros = this.numeros.filter(x => x.inversion >= cant);
        //       break;
        //   }
        // }
    }
    getTotalInversion() {
        return this.numeros.sumBy(x => x.inversion);
    }
    getTotalGanancia() {
        return this.numeros.sumBy(x => x.ganancia);
    }
    close() {
        this.modalCtrl.dismiss();
    }
    criterioChanged(evt) {
        // alert('HERE')
        // if 
        this.search({ target: { value: this.searchTerm } });
    }
    numeroClicked(n) {
        this.modalCtrl.dismiss({ numero: n.numero });
    }
    print() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.shown = false;
            this.cdRef.detectChanges();
            const loading = yield this.loadCtrl.create({
                message: 'Generando reporte...'
            });
            yield loading.present();
            try {
                pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10__["vfs"] = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11__["pdfMake"].vfs;
                const content = [
                    { text: 'Reporte de ventas', style: 'h2' },
                    { text: 'Fecha:   ' + moment__WEBPACK_IMPORTED_MODULE_6___default()(this.fecha).format('DD/MM/YYYY'), style: 'h3' },
                ];
                if (this.empleado.id != -1)
                    content.push({ text: 'Agente: ' + this.empleado.nombre, style: 'h3' });
                const tbody = [
                    [{ text: 'Número', bold: true }, { text: 'Inversión', bold: true }, { text: 'Ganancia', bold: true }]
                ];
                this.numeros.forEach(n => {
                    tbody.push([n.numero, this.currencyPipe.transform(n.inversion), this.currencyPipe.transform(n.ganancia)]);
                });
                tbody.push([{ text: 'Total', bold: true }, { text: this.currencyPipe.transform(this.getTotalInversion()), bold: true }, { text: this.currencyPipe.transform(this.getTotalGanancia()), bold: true }]);
                content.push({
                    style: 'table',
                    table: {
                        headerRows: 1,
                        body: tbody
                    }
                });
                var docDefinition = {
                    pageSize: {
                        width: 480,
                        height: 'auto'
                    },
                    content: content,
                    styles: {
                        h2: {
                            fontSize: 20,
                            bold: true,
                            margin: [0, 0, 0, 20]
                        },
                        h3: {
                            fontSize: 18,
                            bold: false,
                            margin: [0, 0, 0, 10]
                        },
                        table: {
                            margin: [0, 10, 0, 0]
                        }
                    },
                    defaultStyle: {
                        fontSize: 18
                    }
                };
                pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10__["createPdf"](docDefinition).getBase64(data => {
                    // console.log();
                    loading.dismiss();
                    const base64 = 'data:application/pdf;base64,' + data;
                    this.socialSharing.share('Reporte del ' + moment__WEBPACK_IMPORTED_MODULE_6___default()(this.fecha).format('DD/MM/YYYY'), '', base64)
                        .then(d => console.log(d))
                        .catch(err => this.util.handleError(err.message ? err : { message: err }));
                });
            }
            catch (ex) {
                this.util.handleError(ex.message ? ex : { message: ex });
                loading.dismiss();
            }
        });
    }
};
ReporteCompletoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_7__["Util"] },
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"] }
];
ReporteCompletoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reporte-completo',
        template: _raw_loader_reporte_completo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reporte_completo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReporteCompletoPage);



/***/ }),

/***/ "x/SL":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clientes/clientes.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=''></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">Clientes</ion-title>\n        <ion-buttons slot=\"end\" *ngIf='!searching'>\n            <ion-button (click)='nuevoCliente()'>\n                <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\" *ngIf='searching'>\n            <ion-button (click)='close($event)'>\n                <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n    <ion-searchbar (ionInput)='search($event)' [(ngModel)]='searchTerm'></ion-searchbar>\n    <ion-list class=\"list-body\">\n        <!-- Sliding item with text options on both sides -->\n        <ion-item-sliding *ngFor='let cliente of clientes'>\n            <ion-item-options side=\"start\" *ngIf='cliente.id > 1 && !searching'>\n                <!-- <ion-item-option (click)=\"favorite(item)\"><ion-icon class=\"icon\" slot=\"top\" src='assets/svg/edit-solid.svg'></ion-icon> Modificar</ion-item-option> -->\n                <ion-item-option color=\"danger\" (click)='eliminarCliente(cliente)'>\n                    <ion-icon class=\"icon\" name=\"trash\" slot=\"top\"></ion-icon> Eliminar</ion-item-option>\n            </ion-item-options>\n            <ion-item detail (click)='clienteClicked(cliente)'> <span class=\"avatar-letter\" [ngClass]=\"{'man': cliente.genero == 'M'}\">            {{getIniciales(cliente)}}          </span>\n                <ion-label>\n                    <h2>{{getNombre(cliente)}}</h2>\n                    <p><span class=\"id\" style=\"width: 40px; display: inline-block;\">#{{cliente.id}}</span> {{cliente.pais.ext}} {{cliente.celular}}</p>\n                </ion-label>\n            </ion-item>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>");

/***/ }),

/***/ "x3Xx":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/sub-menu/sub-menu.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container  *ngFor='let opt of options'> \n    <ng-container [ngSwitch]=\"opt?.type\">\n        <ion-item *ngSwitchCase=\"'button'\" button lines='none'(click)='click(opt.event)' [disabled]='opt.disabled'>\n            <ion-label>{{opt.name}}</ion-label>\n            <ion-icon class=\"icon\" [name]=\"opt.icon\"></ion-icon>\n            <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        </ion-item>\n        <div *ngSwitchCase=\"'divider'\" class=\"ion-padding hr-container\">\n            <hr>\n        </div>\n        <ion-item *ngSwitchCase=\"'toggle'\" lines='none'>\n            <ion-icon slot='start' class=\"icon\" [name]=\"opt.icon\"></ion-icon>\n            <ion-label>{{opt.name}}</ion-label>\n            <ion-toggle [disabled]='opt.disabled' [checked]='opt.value' (ionChange)='toggleChanged($event, opt.event)'></ion-toggle>\n            <!-- <ion-icon name=\"lock-closed-outline\"></ion-icon> -->\n            <!-- <ion-ripple-effect type=\"bounded\"></ion-ripple-effect> -->\n        </ion-item>\n    </ng-container>\n    \n\n</ng-container>\n");

/***/ }),

/***/ "x9Ej":
/*!*************************************************************!*\
  !*** ./src/app/pages/set-ganancias/set-ganancias.module.ts ***!
  \*************************************************************/
/*! exports provided: SetGananciasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetGananciasPageModule", function() { return SetGananciasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _set_ganancias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./set-ganancias-routing.module */ "71nH");
/* harmony import */ var _set_ganancias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./set-ganancias.page */ "/SIb");







let SetGananciasPageModule = class SetGananciasPageModule {
};
SetGananciasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _set_ganancias_routing_module__WEBPACK_IMPORTED_MODULE_5__["SetGananciasPageRoutingModule"]
        ],
        declarations: [_set_ganancias_page__WEBPACK_IMPORTED_MODULE_6__["SetGananciasPage"]]
    })
], SetGananciasPageModule);



/***/ }),

/***/ "yCpb":
/*!*****************************************************************!*\
  !*** ./src/app/pages/nuevo-grupo/nuevo-grupo-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: NuevoGrupoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoGrupoPageRoutingModule", function() { return NuevoGrupoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nuevo_grupo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuevo-grupo.page */ "HYJm");




const routes = [
    {
        path: '',
        component: _nuevo_grupo_page__WEBPACK_IMPORTED_MODULE_3__["NuevoGrupoPage"]
    }
];
let NuevoGrupoPageRoutingModule = class NuevoGrupoPageRoutingModule {
};
NuevoGrupoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NuevoGrupoPageRoutingModule);



/***/ }),

/***/ "yF1e":
/*!*******************************************************!*\
  !*** ./src/app/pages/agente/agente-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AgentePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentePageRoutingModule", function() { return AgentePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agente.page */ "2V4y");




const routes = [
    {
        path: '',
        component: _agente_page__WEBPACK_IMPORTED_MODULE_3__["AgentePage"]
    }
];
let AgentePageRoutingModule = class AgentePageRoutingModule {
};
AgentePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AgentePageRoutingModule);



/***/ }),

/***/ "yS/6":
/*!*******************************************************************!*\
  !*** ./src/app/components/slide-button/slide-button.component.ts ***!
  \*******************************************************************/
/*! exports provided: SlideButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideButtonComponent", function() { return SlideButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_slide_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./slide-button.component.html */ "1TPB");
/* harmony import */ var _slide_button_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slide-button.component.scss */ "sPqy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




// import { EventEmitter } from 'protractor';
let SlideButtonComponent = class SlideButtonComponent {
    constructor() {
        this.dragCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    set loading(loading) {
        var container = document.querySelector("#container");
        container.classList.toggle('loading', loading);
    }
    set disabled(disabled) {
        var container = document.querySelector("#container");
        container.classList.toggle('disabled', disabled);
    }
    ngOnInit() {
        var dragItem = document.querySelector("#item");
        var container = document.querySelector("#container");
        var fill = document.querySelector('#fill');
        var end = document.querySelector('#end');
        var active = false;
        var currentX;
        var currentY;
        var initialX;
        var initialY;
        var xOffset = 0;
        var yOffset = 0;
        var app = this;
        container.addEventListener("touchstart", dragStart, false);
        container.addEventListener("mousedown", dragStart, false);
        document.addEventListener('mouseup', dragEnd);
        document.addEventListener("mousemove", drag, false);
        document.addEventListener('touchend', dragEnd);
        document.addEventListener("touchmove", drag, false);
        function dragStart(e) {
            if (container.classList.contains('loading') || container.classList.contains('disabled'))
                return;
            if (e.type === "touchstart") {
                initialX = e.touches[0].clientX - xOffset;
                initialY = e.touches[0].clientY - yOffset;
            }
            else {
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset;
            }
            if (e.target === dragItem) {
                active = true;
            }
        }
        function dragEnd(e) {
            if (container.classList.contains('loading') || container.classList.contains('disabled'))
                return;
            console.log(xOffset, container.clientWidth - 60);
            console.log(xOffset < container.clientWidth - 60);
            if (xOffset < container.clientWidth - 60) {
                currentX = 0;
                currentY = 0;
                xOffset = 0;
                yOffset = 0;
                end.classList.toggle('animate', currentX >= container.clientWidth / 3 && currentX < container.clientWidth - 60);
            }
            else {
                // fill.style.width = '0';
                currentX = 0;
                currentY = 0;
                xOffset = 0;
                yOffset = 0;
                app.dragCompleted.emit(e);
            }
            initialX = currentX;
            initialY = currentY;
            setTranslate(initialX, initialY, dragItem);
            active = false;
        }
        function drag(e) {
            if (active) {
                // e.preventDefault();
                if (e.type === "touchmove") {
                    currentX = e.touches[0].clientX - initialX;
                    currentY = e.touches[0].clientY - initialY;
                }
                else {
                    currentX = e.clientX - initialX;
                    currentY = e.clientY - initialY;
                }
                xOffset = currentX;
                yOffset = currentY;
                end.classList.toggle('animate', currentX >= container.clientWidth / 3 && currentX < container.clientWidth - 60);
                setTranslate(currentX, currentY, dragItem);
            }
        }
        function setTranslate(xPos, yPos, el) {
            if (xPos < 0)
                xPos = 0;
            xPos = xPos + 60 > container.clientWidth ? container.clientWidth - 60 : xPos;
            currentX = xPos;
            xOffset = currentX;
            yOffset = currentY;
            fill.style.width = (xPos + 60) + 'px';
            el.style.transform = "translate3d(" + xPos + "px, " + 0 + "px, 0)";
        }
    }
};
SlideButtonComponent.ctorParameters = () => [];
SlideButtonComponent.propDecorators = {
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dragCompleted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
SlideButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-slide-button',
        template: _raw_loader_slide_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_slide_button_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SlideButtonComponent);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.no-internet {\n  display: flex;\n  height: 24px;\n  align-items: center;\n  background: #C50532;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 99999;\n}\ndiv.no-internet p {\n  color: white;\n  width: 100%;\n  text-align: center;\n}\n.mt-24 {\n  margin-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRVI7QUFFQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2Lm5vLWludGVybmV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNDNTA1MzI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIHAge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4ubXQtMjQge1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "yu5+":
/*!*******************************************************!*\
  !*** ./src/app/pages/boleto/boleto-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: BoletoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletoPageRoutingModule", function() { return BoletoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _boleto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boleto.page */ "9ljF");




const routes = [
    {
        path: '',
        component: _boleto_page__WEBPACK_IMPORTED_MODULE_3__["BoletoPage"]
    }
];
let BoletoPageRoutingModule = class BoletoPageRoutingModule {
};
BoletoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BoletoPageRoutingModule);



/***/ }),

/***/ "z0sE":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cliente/cliente.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-title class=\"center\">{{cliente.id == -1 ? 'Nuevo' : 'Actualizar'}} cliente</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)='close()'>\n                <ion-icon slot='icon-only' name=\"close\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n    <form #form='ngForm' (ngSubmit)='submit(form)'>\n        <ion-item *ngIf='cliente.id != -1'>\n            <ion-label position=\"stack\">ID:</ion-label>\n            <ion-input [disabled]='true' name='id' [(ngModel)]=\"cliente.id\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Primer nombre</ion-label>\n            <ion-input [disabled]='cliente.id == 1' name='primer_nombre' [(ngModel)]=\"cliente.primer_nombre\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Segundo nombre</ion-label>\n            <ion-input [disabled]='cliente.id == 1' name='segundo_nombre' [(ngModel)]=\"cliente.segundo_nombre\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Primer apellido</ion-label>\n            <ion-input [disabled]='cliente.id == 1' name='primer_apellido' [(ngModel)]=\"cliente.primer_apellido\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Segundo apellido</ion-label>\n            <ion-input [disabled]='cliente.id == 1' name='segundo_apellido' [(ngModel)]=\"cliente.segundo_apellido\"></ion-input>\n        </ion-item>\n\n\n        <ion-item *ngIf='cliente.id != 1'>\n            <ion-label>Género</ion-label>\n            <ion-select name='genero' [(ngModel)]='cliente.genero' [placeholder]=\"'Seleccione un género'\">\n                <!-- <ng-container *ngIf='paises.length > 0'> -->\n                <ion-select-option value='M'>Masculino</ion-select-option>\n                <ion-select-option value='F'>Femenino</ion-select-option>\n                <!-- </ng-container> -->\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label>País</ion-label>\n            <ion-select name='pais' [value]='pais' [disabled]='paises.length == 0 || cliente.id == 1' (ionChange)='paisChanged($event)' [placeholder]=\"cliente.id == -1 ? 'Selecciona un país' : cliente.id == 1 ? 'No tiene país' : cliente.pais.nombre + ' ' + cliente.pais.ext\">\n                <!-- <ng-container *ngIf='paises.length > 0'> -->\n                <ion-select-option *ngFor='let p of paises' [value]='p'>{{p.nombre}} {{p.ext}}</ion-select-option>\n                <!-- </ng-container> -->\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Celular</ion-label>\n            <!-- <ion-input type='text' name='celular' (keydown)='format($event)' id=\"cel\" mask=\"(000) 000-0000\" [(ngModel)]=\"cliente.celular\"></ion-input> -->\n            <ion-input type=\"tel\" [disabled]='cliente.id == 1' (keypress)='format($event)' (ionInput)='modelChanged($event)' name='celular' [(ngModel)]=\"cliente.celular\"></ion-input>\n        </ion-item>\n        <div class=\"btn-container\">\n            <ion-button [disabled]='!isValid()' type='submit'>{{cliente.id == -1 ? 'Registrar' : 'Actualizar'}}\n                <ion-icon name=\"save\"></ion-icon>\n            </ion-button>\n        </div>\n    </form>\n    <!-- {{cliente | json}} -->\n</ion-content>");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
window.addEventListener('error', (e) => {
    console.log('WINDOW_ERROR', e && (e.message || e.error));
});
window.addEventListener('unhandledrejection', (e) => {
    console.log('UNHANDLED_REJECTION', e && e.reason);
});
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map