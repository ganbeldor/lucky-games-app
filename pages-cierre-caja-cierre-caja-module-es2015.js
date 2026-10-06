(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cierre-caja-cierre-caja-module"],{

/***/ "9LmO":
/*!*********************************************************!*\
  !*** ./src/app/pages/cierre-caja/cierre-caja.module.ts ***!
  \*********************************************************/
/*! exports provided: CierreCajaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CierreCajaPageModule", function() { return CierreCajaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cierre_caja_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cierre-caja-routing.module */ "A79s");
/* harmony import */ var _cierre_caja_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cierre-caja.page */ "MtZU");







let CierreCajaPageModule = class CierreCajaPageModule {
};
CierreCajaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cierre_caja_routing_module__WEBPACK_IMPORTED_MODULE_5__["CierreCajaPageRoutingModule"]
        ],
        declarations: [_cierre_caja_page__WEBPACK_IMPORTED_MODULE_6__["CierreCajaPage"]]
    })
], CierreCajaPageModule);



/***/ }),

/***/ "A79s":
/*!*****************************************************************!*\
  !*** ./src/app/pages/cierre-caja/cierre-caja-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CierreCajaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CierreCajaPageRoutingModule", function() { return CierreCajaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cierre_caja_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cierre-caja.page */ "MtZU");




const routes = [
    {
        path: '',
        component: _cierre_caja_page__WEBPACK_IMPORTED_MODULE_3__["CierreCajaPage"]
    }
];
let CierreCajaPageRoutingModule = class CierreCajaPageRoutingModule {
};
CierreCajaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CierreCajaPageRoutingModule);



/***/ }),

/***/ "Iijm":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cierre-caja/cierre-caja.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\" [text]='\"\"'></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">Cierre de caja</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <div class=\"filtros\">\n        <ion-button size=\"small\" fill=\"outline\" (click)=\"ayer()\">Ayer</ion-button>\n        <ion-button size=\"small\" fill=\"outline\" (click)=\"hoy()\">Hoy</ion-button>\n        <input type=\"date\" class=\"fecha-input\" [(ngModel)]=\"fecha\" (change)=\"cargar()\">\n        <span class=\"auto\">auto 10\"<br><span *ngIf=\"actualizado\">act. {{actualizado}}</span></span>\n    </div>\n\n    <ion-list *ngIf=\"isAdmin\">\n        <ion-item>\n            <ion-label>Vendedor</ion-label>\n            <ion-select [ngModel]=\"empleado_id\" (ngModelChange)=\"empleado_id = $event; cargar()\" placeholder=\"Todos\">\n                <ion-select-option value=\"\">Todos</ion-select-option>\n                <ion-select-option *ngFor=\"let e of empleados\" [value]=\"e.id\">{{e.nombre}}<ng-container *ngIf=\"e.usuario?.nombre\"> ({{e.usuario.nombre}})</ng-container></ion-select-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n\n    <div *ngIf=\"cargando\" class=\"ion-text-center\" style=\"padding: 24px;\">\n        <ion-spinner></ion-spinner>\n    </div>\n\n    <ion-card *ngIf=\"data && !cargando\">\n        <ion-card-header>\n            <ion-card-title>{{data.empleado_nombre || 'Todos los vendedores'}}</ion-card-title>\n            <ion-card-subtitle>{{fecha | date: 'dd/MM/yyyy'}}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <div class=\"fila\">\n                <span>Boletos vendidos</span>\n                <strong>{{data.boletos_vendidos}}</strong>\n            </div>\n            <div class=\"fila\">\n                <span>Vendido (inversión)</span>\n                <strong>{{money(data.vendido)}}</strong>\n            </div>\n            <div class=\"fila\">\n                <span>Boletos anulados</span>\n                <strong>{{data.boletos_anulados}} ({{money(data.anulado)}})</strong>\n            </div>\n            <div class=\"fila\">\n                <span>Premios</span>\n                <strong>{{money(data.premios)}}</strong>\n            </div>\n            <div class=\"fila\">\n                <span>Entrega</span>\n                <strong>{{money(data.entrega)}}</strong>\n            </div>\n\n            <hr>\n\n            <ion-item lines=\"none\">\n                <ion-label>Saldo inicial en caja</ion-label>\n                <ion-input type=\"number\" inputmode=\"decimal\" [(ngModel)]=\"saldo_inicial\"\n                           (ionChange)=\"guardarSaldo()\" placeholder=\"0.00\"></ion-input>\n            </ion-item>\n\n            <div class=\"fila\">\n                <span>Efectivo en caja</span>\n                <strong>{{money(efectivoAntesComision())}}</strong>\n            </div>\n            <div class=\"fila\">\n                <span>Comisión del vendedor</span>\n                <strong>-{{money(data.comision)}}</strong>\n            </div>\n\n            <div class=\"desglose\" *ngIf=\"data.por_vendedor && data.por_vendedor.length > 1\">\n                <p class=\"titulo-desglose\">Comisión por vendedor</p>\n                <div class=\"fila vendedor\" *ngFor=\"let pv of data.por_vendedor\">\n                    <span>{{pv.nombre}} <small>{{pv.usuario}} · {{pv.boletos}} b · {{pv.tasa * 100 | number: '1.0-2'}}%</small></span>\n                    <strong>{{money(pv.comision)}}</strong>\n                </div>\n            </div>\n\n            <div class=\"fila total\">\n                <span>Efectivo del dueño</span>\n                <strong>{{money(efectivo())}}</strong>\n            </div>\n\n            <p *ngIf=\"vacio\" class=\"vacio\">Sin movimientos este día</p>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>\n\n<ion-footer *ngIf=\"data\">\n    <ion-toolbar>\n        <ion-button expand=\"block\" (click)=\"imprimir()\">Imprimir cierre</ion-button>\n    </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "MtZU":
/*!*******************************************************!*\
  !*** ./src/app/pages/cierre-caja/cierre-caja.page.ts ***!
  \*******************************************************/
/*! exports provided: CierreCajaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CierreCajaPage", function() { return CierreCajaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cierre_caja_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cierre-caja.page.html */ "Iijm");
/* harmony import */ var _cierre_caja_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cierre-caja.page.scss */ "oHvx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/util/util */ "JQC8");
/* harmony import */ var src_app_classes_classes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/classes/classes */ "50N5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_printer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/printer.service */ "UbLU");
/* harmony import */ var esc_pos_encoder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! esc-pos-encoder */ "oLKi");
/* harmony import */ var esc_pos_encoder__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(esc_pos_encoder__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);













let CierreCajaPage = class CierreCajaPage {
    constructor(bs, storage, util, currencyPipe, printer, alertCtrl, loadCtrl) {
        this.bs = bs;
        this.storage = storage;
        this.util = util;
        this.currencyPipe = currencyPipe;
        this.printer = printer;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.fecha = moment__WEBPACK_IMPORTED_MODULE_12___default()().format('YYYY-MM-DD');
        this.data = null;
        this.cargando = false;
        this.loaded = false;
        this.isAdmin = false;
        this.me = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_8__["Empleado"]();
        this.empleados = [];
        this.empleado_id = '';
        this.saldo_inicial = 0;
        this.timer = null;
        this.retryTimer = null;
        this.refrescando = false;
        this.seq = 0;
        this.actualizado = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.me = yield this.bs.getEmpleado();
                this.isAdmin = !!(this.me && this.me.usuario && this.me.usuario.isadmin);
                if (this.isAdmin) {
                    this.empleados = (yield this.bs.get(this.bs.EMPLEADO_URL, true)) || [];
                }
                else {
                    // el vendedor solo ve su propio cierre
                    this.empleado_id = String(this.me.id);
                }
                yield this.cargar();
                this.iniciarAutoRefresh();
            }
            catch (ex) {
                yield this.util.handleError(ex);
            }
        });
    }
    ionViewWillLeave() {
        this.detenerAutoRefresh();
    }
    // el cierre se refleja solo en cuanto sale el boleto
    iniciarAutoRefresh() {
        this.detenerAutoRefresh();
        this.timer = setInterval(() => this.cargar(true), 10000);
    }
    detenerAutoRefresh() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        if (this.retryTimer) {
            clearTimeout(this.retryTimer);
            this.retryTimer = null;
        }
    }
    // si una peticion se queda colgada, no debe frenar las siguientes
    conTimeout(p, ms) {
        return new Promise((resolve, reject) => {
            const t = setTimeout(() => reject(new Error('timeout')), ms);
            p.then((v) => { clearTimeout(t); resolve(v); }, (e) => { clearTimeout(t); reject(e); });
        });
    }
    programarReintento() {
        if (this.retryTimer)
            return;
        this.retryTimer = setTimeout(() => {
            this.retryTimer = null;
            this.cargar(true);
        }, 3000);
    }
    doRefresh(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.cargar();
            }
            finally {
                if (ev && ev.target)
                    ev.target.complete();
            }
        });
    }
    cargar(silencioso = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (silencioso) {
                if (this.refrescando)
                    return;
                this.refrescando = true;
            }
            else {
                this.cargando = true;
            }
            const miSeq = ++this.seq;
            try {
                let url = this.bs.CIERRE_CAJA_URL + '?fecha=' + encodeURIComponent(this.fecha);
                if (this.empleado_id)
                    url += '&empleado_id=' + encodeURIComponent(this.empleado_id);
                const resp = silencioso
                    ? yield this.conTimeout(this.bs.get(url, true), 8000)
                    : yield this.conTimeout(this.bs.get(url, true), 20000);
                if (miSeq !== this.seq)
                    return;
                this.data = resp;
                this.actualizado = moment__WEBPACK_IMPORTED_MODULE_12___default()().format('HH:mm:ss');
                if (!silencioso) {
                    const guardado = yield this.storage.get(this.saldoKey());
                    this.saldo_inicial = Number(guardado) || 0;
                }
                this.loaded = true;
            }
            catch (ex) {
                // en la actualizacion automatica no se interrumpe con avisos
                if (!silencioso)
                    yield this.util.handleError(ex);
                this.programarReintento();
            }
            finally {
                this.cargando = false;
                this.refrescando = false;
            }
        });
    }
    hoy() {
        this.fecha = moment__WEBPACK_IMPORTED_MODULE_12___default()().format('YYYY-MM-DD');
        this.cargar();
    }
    ayer() {
        this.fecha = moment__WEBPACK_IMPORTED_MODULE_12___default()().subtract(1, 'day').format('YYYY-MM-DD');
        this.cargar();
    }
    saldoKey() {
        return 'cierre_saldo:' + this.fecha + ':' + (this.empleado_id || 'todos');
    }
    guardarSaldo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.saldo_inicial = Number(this.saldo_inicial) || 0;
            yield this.storage.set(this.saldoKey(), this.saldo_inicial);
        });
    }
    efectivoAntesComision() {
        if (!this.data)
            return 0;
        return (Number(this.data.entrega) || 0) + (Number(this.saldo_inicial) || 0);
    }
    // la venta bruta es del dueno: del efectivo en caja se descuenta la comision
    // que se le paga al vendedor al cerrar
    efectivo() {
        if (!this.data)
            return 0;
        return this.efectivoAntesComision() - (Number(this.data.comision) || 0);
    }
    money(v) {
        return this.currencyPipe.transform(Number(v) || 0, 'C$') || 'C$0.00';
    }
    get vacio() {
        return !!(this.data && this.data.boletos_vendidos == 0 && this.data.boletos_anulados == 0);
    }
    imprimir() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.data)
                return;
            const encoder = new esc_pos_encoder__WEBPACK_IMPORTED_MODULE_11___default.a();
            const result = encoder.initialize();
            // Sunmi: por defecto chino (multibyte). FS . cierra multibyte, ESC t 16 = Windows-1252
            result.raw([0x1c, 0x2e]);
            result.raw([0x1b, 0x74, 0x10]);
            result._codepage = 'windows1252';
            const d = this.data;
            const hr = this.util.commands.HORIZONTAL_LINE.HR_58MM;
            result.align('center')
                .size('normal')
                .bold(true)
                .line('CIERRE DE CAJA')
                .bold(false)
                .line('Fecha: ' + moment__WEBPACK_IMPORTED_MODULE_12___default()(d.fecha).format('DD/MM/YYYY'))
                .line(d.empleado_nombre || '')
                .line(hr)
                .bold(true)
                .line('Boletos vendidos:  ' + d.boletos_vendidos)
                .bold(false)
                .line('Vendido:           ' + this.money(d.vendido))
                .line('Boletos anulados:  ' + d.boletos_anulados)
                .line('Anulado:           ' + this.money(d.anulado))
                .line(hr)
                .line('Premios:           ' + this.money(d.premios))
                .line('Entrega:           ' + this.money(d.entrega))
                .line('Saldo inicial:     ' + this.money(this.saldo_inicial))
                .line(hr)
                .line('Efectivo en caja:  ' + this.money(this.efectivoAntesComision()))
                .line('Comision vendedor: -' + this.money(d.comision))
                .bold(true)
                .line('EFECTIVO DUEÑO:    ' + this.money(this.efectivo()))
                .bold(false)
                .line(hr);
            // cada vendedor tiene su propia comision
            if (d.por_vendedor && d.por_vendedor.length > 1) {
                result.line('Comision por vendedor:');
                d.por_vendedor.forEach(pv => {
                    let linea = String(pv.nombre || '').substring(0, 20);
                    while (linea.length < 21)
                        linea += ' ';
                    result.line(linea + this.money(pv.comision));
                });
            }
            result
                .line(hr)
                .align('center')
                .newline()
                .newline()
                .newline();
            this.mountAlertBt(result.encode());
        });
    }
    mountAlertBt(data, total = 0) {
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
                                        this.print(device, data, total);
                                    }
                                    else
                                        return window.alert('NO SE SELECCIONÓ LA IMPRESORA');
                                })
                            }]
                    });
                    yield alert.present();
                }))
                    .catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.util.presentAlert('Error', 'Error al conectar con la impresora #1.');
                }));
            }
            else {
                this.print(this.util.IMPRESORA_ADDRESS, data, total);
            }
        })
            .catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.util.presentAlert('Error', 'Error al conectar con la impresora. #2');
        }));
    }
    print(device, data, total) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.printer.disconnectBluetooth();
            }
            catch (ex) {
            }
            let load = yield this.loadCtrl.create({
                message: 'Imprimiendo...',
            });
            yield load.present();
            this.printer.connectBluetooth(device).subscribe(() => {
                this.printer
                    .printData(data)
                    .then((printStatus) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield load.dismiss();
                }))
                    .catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield load.dismiss();
                    yield this.util.presentAlert('Error', 'Error al conectar la impresora.');
                }));
            }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield load.dismiss();
                yield this.util.presentAlert('Error', 'Error al conectar la impresora.');
            }));
        });
    }
};
CierreCajaPage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_7__["Util"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"] },
    { type: src_app_services_printer_service__WEBPACK_IMPORTED_MODULE_10__["PrinterService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
CierreCajaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cierre-caja',
        template: _raw_loader_cierre_caja_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cierre_caja_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CierreCajaPage);



/***/ }),

/***/ "oHvx":
/*!*********************************************************!*\
  !*** ./src/app/pages/cierre-caja/cierre-caja.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filtros {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.filtros .fecha-input {\n  flex: 1;\n  border: 1px solid #d7d7d7;\n  border-radius: 6px;\n  padding: 8px;\n  font-size: 15px;\n  background: #fff;\n  color: #000;\n}\n.filtros .auto {\n  font-size: 11px;\n  color: darkgray;\n  white-space: nowrap;\n}\n.fila {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 0;\n  font-size: 15px;\n}\n.fila strong {\n  color: #000080;\n}\n.fila.total {\n  font-size: 18px;\n  border-top: 2px solid #000080;\n  margin-top: 6px;\n  padding-top: 10px;\n}\n.fila.total strong {\n  font-size: 20px;\n}\n.desglose {\n  margin-top: 8px;\n  border-top: 1px dashed #c9c9c9;\n  padding-top: 6px;\n}\n.desglose .titulo-desglose {\n  font-size: 13px;\n  color: darkgray;\n  margin: 0 0 4px;\n}\n.desglose .fila.vendedor {\n  font-size: 14px;\n  color: #444;\n}\n.desglose .fila.vendedor span small {\n  color: darkgray;\n  margin-left: 4px;\n}\n.desglose .fila.vendedor strong {\n  color: #000080;\n}\n.vacio {\n  text-align: center;\n  color: darkgray;\n  margin-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NpZXJyZS1jYWphLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ1I7QUFFSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUlBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0k7RUFDSSxjQUFBO0FBRFI7QUFJSTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUZSO0FBSVE7RUFDSSxlQUFBO0FBRlo7QUFPQTtFQUNJLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBSko7QUFNSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUpSO0FBUVE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQU5aO0FBUVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFOaEI7QUFTWTtFQUNJLGNBQUE7QUFQaEI7QUFhQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVkoiLCJmaWxlIjoiY2llcnJlLWNhamEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRyb3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAuZmVjaGEtaW5wdXQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDdkN2Q3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG5cbiAgICAuYXV0byB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgY29sb3I6IGRhcmtncmF5O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cbn1cblxuLmZpbGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNnB4IDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuXG4gICAgc3Ryb25nIHtcbiAgICAgICAgY29sb3I6ICMwMDAwODA7XG4gICAgfVxuXG4gICAgJi50b3RhbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMDAwODA7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRlc2dsb3NlIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjYzljOWM5O1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG5cbiAgICAudGl0dWxvLWRlc2dsb3NlIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogZGFya2dyYXk7XG4gICAgICAgIG1hcmdpbjogMCAwIDRweDtcbiAgICB9XG5cbiAgICAuZmlsYSB7XG4gICAgICAgICYudmVuZGVkb3Ige1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM0NDQ7XG5cbiAgICAgICAgICAgIHNwYW4gc21hbGwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZ3JheTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDgwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udmFjaW8ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogZGFya2dyYXk7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-cierre-caja-cierre-caja-module-es2015.js.map