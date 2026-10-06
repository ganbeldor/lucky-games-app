(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar mode='md' color='primary'>\n    <ion-title text-center>\n      Inicio\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color='primary'>\n  <ion-slides pager=\"false\">\n\n    <ion-slide>\n      <h2 text-center>Triangulo de la suerte</h2>\n      <div class=\"lucky-triangle\">\n        <p>1231231232</p>\n        <p>123231232</p>\n        <p>11231232</p>\n        <p>1231232</p>\n        <p>231232</p>\n        <p>31232</p>\n        <p>1231</p>\n        <p>12</p>\n        <p>3</p>\n        <div></div>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <h2 style=\"transform: translateY(-100px);\">Cruz de la suerte</h2>\n      <div class=\"top\">\n        <p>1</p>\n        <p>1</p>\n      </div>\n      \n      <div class=\"x1\"></div>\n      <div class=\"x2\"></div>\n      <div class=\"bottom\">\n        <p>1</p>\n        <p>1</p>\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n</ion-content> -->\n\n\n\n<ion-header>\n    <ion-toolbar color='light'>\n        <ion-title class=\"center\">Gestiones de Lotería</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-list>\n        <ion-list-header>\n            <ion-label>Boletos</ion-label>\n        </ion-list-header>\n        <ion-item detail routerLink='/boleto'>\n            <ion-avatar slot=\"start\">\n                <img src=\"assets/img/plus.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Nuevo boleto</ion-label>\n        </ion-item>\n       <ion-item detail  routerLink='/escanear-boleto'>\n            <ion-avatar slot=\"start\"> <img src=\"assets/img/qr-code.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Éscanear boleto</ion-label>\n        </ion-item>\n        <ion-item detail *ngIf='isAdmin' routerLink=\"/juegos\">\n            <ion-avatar slot=\"start\"> <img src=\"assets/img/medal.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Establecer ganador</ion-label>\n        </ion-item>\n    </ion-list>\n    <ion-list *ngIf='isAdmin || agentes.length > 0'>\n        <ion-list-header>\n            <ion-label> Agentes <span class=\"online-count\" *ngIf=\"agentesOnline > 0\">{{agentesOnline}} en línea</span></ion-label>\n        </ion-list-header>\n\n        <ion-item detail routerLink='/agente' *ngIf=\"isAdmin\">\n            <ion-avatar slot=\"start\"> <img src=\"assets/img/agentes.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Nuevo Agente</ion-label>\n        </ion-item>\n        <ion-item detail routerLink='/agentes'>\n            <ion-avatar slot=\"start\"> <img src=\"assets/img/agente.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Listar Agentes</ion-label>\n        </ion-item>\n        \n    </ion-list>\n    \n    <ion-list>\n        <ion-list-header>\n            <ion-label>Sorteos</ion-label>\n        </ion-list-header>\n        <!-- clipboard.png -->\n        <ion-item detail routerLink='/nuevo-grupo' *ngIf='isAdmin'>\n            <ion-avatar slot=\"start\"> <img src=\"assets/img/add-group.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Nuevo grupo</ion-label>\n        </ion-item>\n        <ion-item detail routerLink='/sorteo' *ngIf='isAdmin'>\n            <ion-avatar slot=\"start\"> <img src=\"assets/img/clipboard_1.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Nuevo sorteo</ion-label>\n        </ion-item>\n        <ion-item detail routerLink='/super-grupo' *ngIf='isAdmin'>\n             <ion-avatar slot=\"start\"><img src=\"assets/img/supergrupo.png\"></ion-avatar>\n             <ion-label>Nuevo super grupo</ion-label>\n\n        </ion-item>\n        \n        <ion-item detail routerLink='/grupos' *ngIf='isAdmin'>\n            <ion-avatar slot=\"start\"> <img src=\"assets/img/groups.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Listar grupos</ion-label>\n        </ion-item>\n        <ion-item *ngIf='isAdmin' detail routerLink='/sorteos'>\n            <ion-avatar slot=\"start\"> <img src=\"assets/img/checklist.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Listar sorteos</ion-label>\n        </ion-item>\n        <ion-item detail routerLink='/super-groups' *ngIf='isAdmin'>\n            <ion-avatar slot=\"start\"><img src=\"assets/img/listar-super-grupo.png\"></ion-avatar>\n            <ion-label>Listar super grupos</ion-label> \n        </ion-item>\n        <ion-item detail routerLink='/numeros-disponibles'>\n            <ion-avatar slot=\"start\"> <img src=\"assets/img/book.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Números disponibles</ion-label>\n        </ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-list-header>\n            <ion-label>Reportes</ion-label>\n        </ion-list-header>\n        <ion-item detail routerLink='/boletos'>\n            <ion-avatar slot=\"start\"> <img src=\"assets/img/line.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Reporte de ventas</ion-label>\n        </ion-item>\n        <ion-item detail routerLink='/balance'>\n            <ion-avatar slot=\"start\"> <img src=\"assets/img/money.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Balance</ion-label>\n        </ion-item>\n        <ion-item detail routerLink='/cierre-caja'>\n            <ion-avatar slot=\"start\"> <img src=\"assets/img/save.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Cierre de caja</ion-label>\n        </ion-item>\n        <ion-item detail routerLink='/ganadores'>\n            <ion-icon name=\"trophy\" slot=\"start\" color=\"warning\"></ion-icon>\n            <ion-label>Ganadores</ion-label>\n        </ion-item>\n        <ion-item *ngIf='isAdmin' detail routerLink='/balanceo'>\n            <ion-avatar slot=\"start\"> <img src=\"assets/img/growth.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Balanceo</ion-label>\n        </ion-item>\n        <ion-item *ngIf='isAdmin' detail routerLink='/historial-numeros'>\n            <ion-avatar slot=\"start\"> <img src=\"assets/img/history.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Historial de números</ion-label>\n        </ion-item>\n        <ion-item *ngIf='isAdmin' detail routerLink='/empty-tickets'>\n            <ion-avatar slot=\"start\"> <img src=\"assets/img/empty.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Agentes sin facturación</ion-label>\n        </ion-item>\n        <ion-item *ngIf='isAdmin' detail routerLink='/last-won'>\n            <ion-avatar slot=\"start\"> <img src=\"assets/img/win.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Antigüos ganadores</ion-label>\n        </ion-item>\n        <ion-item *ngIf='isAdmin' detail routerLink='/more-sold'>\n            <ion-avatar slot=\"start\"> <img src=\"assets/img/hexagon.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Números más vendidos</ion-label>\n        </ion-item>\n\n        <!-- <ion-item detail [disabled]='true'>\n            <ion-avatar slot=\"start\"> <img src=\"assets/img/pie-chart.png\" alt=\"\"> </ion-avatar>\n            <ion-label>Reporte de juegos</ion-label>\n        </ion-item> -->\n        <!-- <ion-item detail>      <ion-avatar slot=\"start\">        <img src=\"assets/img/growth.png\" alt=\"\">      </ion-avatar>      <ion-label>Reporte de ventas</ion-label>    </ion-item> --></ion-list>\n</ion-content>");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/base.service */ "Do2H");





let Tab1Page = class Tab1Page {
    constructor(bs) {
        this.bs = bs;
        this.isAdmin = false;
        this.agentes = [];
        this.agentesOnline = 0;
        this.presenciaTimer = null;
        this.init();
        this.presenciaTimer = setInterval(() => this.init(true), 30000);
    }
    ngOnDestroy() {
        if (this.presenciaTimer) {
            clearInterval(this.presenciaTimer);
            this.presenciaTimer = null;
        }
    }
    init(refrescar = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let emp = yield this.bs.getEmpleado(refrescar);
                this.isAdmin = !!(emp && emp.usuario && emp.usuario.isadmin);
                this.agentes = (emp && emp.empleados) ? emp.empleados : [];
                this.agentesOnline = this.agentes.filter(a => a && a.en_linea).length;
                if (this.isAdmin) {
                    try {
                        let todos = yield this.bs.get(this.bs.EMPLEADO_URL, true);
                        this.agentesOnline = (todos || []).filter(e => e && e.en_linea).length;
                    }
                    catch (ex) { /* usa el conteo anterior */ }
                }
            }
            catch (ex) {
                // Si fallo la conexion se conservan los ultimos datos en pantalla
                console.log('tab1 init skip', ex);
            }
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n}\nion-slides ion-slide {\n  margin-top: 0;\n  padding-top: 0;\n  display: flex;\n  flex-direction: column;\n}\nion-list-header {\n  padding-left: 0;\n}\nion-list-header ion-label {\n  font-size: 1.1rem;\n  color: #6c6c6c;\n  font-weight: bold;\n}\n.online-count {\n  float: right;\n  color: #2ecc40;\n  font-size: 0.8rem;\n  font-weight: bold;\n}\ndiv.lucky-triangle {\n  width: 300px;\n  position: relative;\n  z-index: 999;\n  height: 300px;\n}\ndiv.lucky-triangle::before {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-left: 150px solid transparent;\n  border-right: 150px solid transparent;\n  border-top: 300px solid green;\n  z-index: -1;\n}\np {\n  letter-spacing: 2px;\n  margin: 8px;\n}\ndiv.x1 {\n  border: 2px solid black;\n  width: 300px;\n  transform: rotate(45deg);\n}\ndiv.x2 {\n  border: 2px solid black;\n  width: 300px;\n  transform: rotate(135deg);\n  margin-top: -5px;\n}\ndiv.top {\n  width: 250px;\n  margin: 0 auto;\n  display: flex;\n  transform: translateY(-100px);\n  justify-content: space-between;\n}\ndiv.center {\n  width: 250px;\n  margin: 0 auto;\n  display: flex;\n  transform: translateY(10px);\n  justify-content: space-between;\n}\ndiv.bottom {\n  width: 250px;\n  margin: 0 auto;\n  display: flex;\n  transform: translateY(100px);\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUVSO0FBRUE7RUFDSSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRVI7QUFFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRUE7RUFFSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUFKO0FBUUk7RUFDSSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFFQSxNQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQVBSO0FBV0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUFSSjtBQVlJO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFUUjtBQVdJO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQVRSO0FBYUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBVko7QUFhQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUFWSjtBQWFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtBQVZKIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGlvbi1zbGlkZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGNvbG9yOiAjNmM2YzZjO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbi5vbmxpbmUtY291bnQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogIzJlY2M0MDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGl2Lmx1Y2t5LXRyaWFuZ2xlIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICAvLyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMDBweDtcbiAgICAvLyBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwMHB4O1xuICAgIC8vIHdpZHRoOiAwO1xuICAgIC8vIGhlaWdodDogMDtcbiAgICAvLyBib3JkZXItbGVmdDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAvLyBib3JkZXItcmlnaHQ6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMTAwcHggc29saWQgcmVkO1xuICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXRvcDogMzAwcHggc29saWQgZ3JlZW47XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbn1cblxucCB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBtYXJnaW46IDhweDtcbn1cblxuZGl2IHtcbiAgICAmLngxIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cbiAgICAmLngyIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICB9XG59XG5cbmRpdi50b3Age1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuZGl2LmNlbnRlciB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuZGl2LmJvdHRvbSB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map