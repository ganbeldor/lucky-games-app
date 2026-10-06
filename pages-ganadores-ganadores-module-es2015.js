(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ganadores-ganadores-module"],{

/***/ "4bRc":
/*!*****************************************************!*\
  !*** ./src/app/pages/ganadores/ganadores.module.ts ***!
  \*****************************************************/
/*! exports provided: GanadoresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanadoresPageModule", function() { return GanadoresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ganadores_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ganadores-routing.module */ "Lw8v");
/* harmony import */ var _ganadores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ganadores.page */ "6F99");







let GanadoresPageModule = class GanadoresPageModule {
};
GanadoresPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ganadores_routing_module__WEBPACK_IMPORTED_MODULE_5__["GanadoresPageRoutingModule"]
        ],
        declarations: [_ganadores_page__WEBPACK_IMPORTED_MODULE_6__["GanadoresPage"]]
    })
], GanadoresPageModule);



/***/ }),

/***/ "6F99":
/*!***************************************************!*\
  !*** ./src/app/pages/ganadores/ganadores.page.ts ***!
  \***************************************************/
/*! exports provided: GanadoresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanadoresPage", function() { return GanadoresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ganadores_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ganadores.page.html */ "r98d");
/* harmony import */ var _ganadores_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ganadores.page.scss */ "ix+G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/util/util */ "JQC8");
/* harmony import */ var src_app_services_printer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/printer.service */ "UbLU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! esc-pos-encoder */ "oLKi");
/* harmony import */ var esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _boleto_boleto_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../boleto/boleto.page */ "9ljF");













let GanadoresPage = class GanadoresPage {
    constructor(bs, util, alertCtrl, loadCtrl, modalCtrl, currencyPipe, printer, storage) {
        this.bs = bs;
        this.util = util;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.modalCtrl = modalCtrl;
        this.currencyPipe = currencyPipe;
        this.printer = printer;
        this.storage = storage;
        this.sorteos = [];
        this.sorteo_id = -1;
        this.data = null;
        this.cargando = false;
        this.actualizado = '';
        this.timer = null;
        this.refrescando = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.cargarSorteos();
                this.iniciarRefresh();
            }
            catch (ex) {
                yield this.util.handleError(ex);
            }
        });
    }
    ionViewWillLeave() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    // el dueno fija el numero cuando sea: aca se va reflejando solo
    iniciarRefresh() {
        if (this.timer)
            clearInterval(this.timer);
        this.timer = setInterval(() => this.cargarGanadores(true), 10000);
    }
    // Juega 3 / 3 Monazos (tipo j3) no entra al reporte de ganadores
    esJuega3(s) {
        if (!s)
            return false;
        const tipo = s.sorteo_tipo || (s.grupo && s.grupo.sorteo_tipo) || '';
        return tipo === 'j3' || /juega\s*3|monazos/i.test(String(s.sorteo_nombre || ''));
    }
    cargarSorteos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cargando = true;
            try {
                const sorteos = yield this.bs.get(this.bs.SORTEO_URL + '/true', true);
                let conVenta = null;
                let boletos = null;
                for (let intento = 0; intento < 2 && !Array.isArray(boletos); intento++) {
                    try {
                        const hoy = moment__WEBPACK_IMPORTED_MODULE_11___default()().format('YYYY/MM/DD');
                        boletos = yield this.bs.post(this.bs.BOLETO_URL + '/get/true', { from_date: hoy + ' 00:00:00.000000', to_date: hoy + ' 23:59:59.999999' }, true);
                    }
                    catch (e) {
                        console.log('Ganadores: no se pudieron cargar las ventas de hoy', e);
                        boletos = null;
                    }
                }
                if (Array.isArray(boletos))
                    conVenta = new Set(boletos.map(b => String(b.sorteo_id)));
                this.sorteos = (sorteos || [])
                    .filter(s => !this.esJuega3(s))
                    .filter(s => !conVenta || conVenta.has(String(s.id)))
                    .sort((a, b) => String(a.hora || '').localeCompare(String(b.hora || '')));
                if (this.sorteo_id == -1 || !this.sorteos.some(s => s.id == this.sorteo_id))
                    this.sorteo_id = this.sorteos.length ? this.sorteos[0].id : -1;
                yield this.cargarGanadores(true);
            }
            finally {
                this.cargando = false;
            }
        });
    }
    sorteoChanged() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.data = null;
            yield this.cargarGanadores(true);
        });
    }
    doRefresh(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.cargarSorteos();
            }
            finally {
                if (ev && ev.target)
                    ev.target.complete();
            }
        });
    }
    cargarGanadores(silencioso = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.sorteo_id == -1)
                return;
            if (this.refrescando)
                return;
            this.refrescando = true;
            try {
                const url = this.bs.JUEGO_URL + '/ganadores?sorteo_id=' + encodeURIComponent(this.sorteo_id)
                    + '&fecha=' + encodeURIComponent(moment__WEBPACK_IMPORTED_MODULE_11___default()().format('YYYY-MM-DD'));
                this.data = yield this.bs.get(url, true);
                this.actualizado = moment__WEBPACK_IMPORTED_MODULE_11___default()().format('HH:mm:ss');
            }
            catch (ex) {
                if (!silencioso)
                    yield this.util.handleError(ex);
            }
            finally {
                this.refrescando = false;
            }
        });
    }
    money(v) {
        return this.currencyPipe.transform(Number(v) || 0, 'C$') || 'C$0.00';
    }
    verBoleto(b) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const boleto = yield this.bs.get(this.bs.BOLETO_URL + '/' + b.id, true);
                const modal = yield this.modalCtrl.create({
                    component: _boleto_boleto_page__WEBPACK_IMPORTED_MODULE_12__["BoletoPage"],
                    componentProps: { boleto: boleto }
                });
                yield modal.present();
            }
            catch (ex) {
                yield this.util.handleError(ex);
            }
        });
    }
    imprimir() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.data || !this.data.numero_ganador)
                return;
            const encoder = new esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10___default.a();
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
                .line('REPORTE DE GANADORES')
                .bold(false)
                .line('Fecha: ' + moment__WEBPACK_IMPORTED_MODULE_11___default()(d.fecha).format('DD/MM/YYYY'))
                .line((d.sorteo_nombre || '') + (d.sorteo_hora ? ' - ' + d.sorteo_hora : ''))
                .bold(true)
                .line('Numero ganador: ' + d.numero_ganador)
                .bold(false)
                .line(hr);
            (d.boletos || []).forEach(b => {
                result.line('#' + b.id + '  ' + (b.hora || '') + '  ' + (b.cliente_nombre || ''));
                if (b.empleado_nombre)
                    result.line('  Maq: ' + b.empleado_nombre);
                (b.numeros || []).forEach(n => {
                    result.line('  ' + n.numero + '  inv ' + this.money(n.inversion) + '  gana ' + this.money(n.ganancia));
                });
                result.bold(true)
                    .line('  PREMIO: ' + this.money(b.premio))
                    .bold(false)
                    .line(hr);
            });
            result.bold(true)
                .line('Boletos ganadores: ' + d.total_boletos)
                .line('TOTAL PREMIOS:     ' + this.money(d.total_premios))
                .bold(false)
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
GanadoresPage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_7__["Util"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"] },
    { type: src_app_services_printer_service__WEBPACK_IMPORTED_MODULE_8__["PrinterService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
GanadoresPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ganadores',
        template: _raw_loader_ganadores_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ganadores_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GanadoresPage);



/***/ }),

/***/ "Lw8v":
/*!*************************************************************!*\
  !*** ./src/app/pages/ganadores/ganadores-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: GanadoresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanadoresPageRoutingModule", function() { return GanadoresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ganadores_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ganadores.page */ "6F99");




const routes = [
    {
        path: '',
        component: _ganadores_page__WEBPACK_IMPORTED_MODULE_3__["GanadoresPage"]
    }
];
let GanadoresPageRoutingModule = class GanadoresPageRoutingModule {
};
GanadoresPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GanadoresPageRoutingModule);



/***/ }),

/***/ "ix+G":
/*!*****************************************************!*\
  !*** ./src/app/pages/ganadores/ganadores.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".auto {\n  font-size: 11px;\n  color: darkgray;\n  white-space: nowrap;\n  text-align: right;\n  display: block;\n  padding: 0 12px 6px;\n}\n\n.fila {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 0;\n  font-size: 15px;\n}\n\n.fila strong {\n  color: #000080;\n}\n\n.fila.total {\n  font-size: 17px;\n  border-top: 2px solid #000080;\n  margin-top: 6px;\n  padding-top: 10px;\n}\n\n.vacio {\n  text-align: center;\n  color: gray;\n  margin-top: 12px;\n}\n\n.lista {\n  margin-top: 8px;\n}\n\n.ganador {\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 8px 10px;\n  margin-bottom: 8px;\n}\n\n.ganador .titulo {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n}\n\n.ganador .titulo strong {\n  color: #000080;\n}\n\n.ganador .titulo span {\n  flex: 1;\n}\n\n.ganador .titulo .premio {\n  color: green;\n}\n\n.ganador .detalle {\n  font-size: 12px;\n  color: gray;\n  margin-top: 2px;\n}\n\n.ganador .numeros {\n  margin-top: 4px;\n}\n\n.ganador .numeros .num {\n  display: inline-block;\n  background: #eef3ff;\n  border-radius: 5px;\n  padding: 2px 6px;\n  margin: 2px 4px 0 0;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dhbmFkb3Jlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDSTtFQUNJLGNBQUE7QUFDUjs7QUFFSTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFSOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBR0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQURSOztBQUdRO0VBQ0ksY0FBQTtBQURaOztBQUlRO0VBQ0ksT0FBQTtBQUZaOztBQUtRO0VBQ0ksWUFBQTtBQUhaOztBQU9JO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBTFI7O0FBUUk7RUFDSSxlQUFBO0FBTlI7O0FBUVE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQU5aIiwiZmlsZSI6ImdhbmFkb3Jlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0byB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiBkYXJrZ3JheTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAgMTJweCA2cHg7XG59XG5cbi5maWxhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDZweCAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcblxuICAgIHN0cm9uZyB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDgwO1xuICAgIH1cblxuICAgICYudG90YWwge1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDAwMDgwO1xuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cbn1cblxuLnZhY2lvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmxpc3RhIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5nYW5hZG9yIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAudGl0dWxvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcblxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwODA7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAucHJlbWlvIHtcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kZXRhbGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIH1cblxuICAgIC5udW1lcm9zIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuXG4gICAgICAgIC5udW0ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZjNmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgICAgICAgICBtYXJnaW46IDJweCA0cHggMCAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "r98d":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ganadores/ganadores.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color='light'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]='\"\"' defaultHref='/tabs/tab1'></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"center\">Ganadores</ion-title>\n    </ion-toolbar>\n    <ion-toolbar color='light'>\n        <ion-item>\n            <ion-label>Sorteo:</ion-label>\n            <ion-select placeholder='Seleccione un sorteo' [(ngModel)]='sorteo_id' (ionChange)='sorteoChanged()'\n                [disabled]='cargando || sorteos.length == 0'>\n                <ion-select-option *ngFor='let s of sorteos' [value]='s.id'>\n                    {{s.sorteo_nombre}} - {{s.hora | date: 'hh:mm a'}}\n                </ion-select-option>\n            </ion-select>\n        </ion-item>\n        <span class=\"auto\">auto 10\"<br><span *ngIf=\"actualizado\">act. {{actualizado}}</span></span>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <div *ngIf='cargando' class=\"ion-text-center ion-padding\">\n        Cargando...\n    </div>\n\n    <ion-card *ngIf='!cargando && data'>\n        <ion-card-header>\n            <ion-card-title>{{data.sorteo_nombre || 'Sorteo'}}</ion-card-title>\n            <ion-card-subtitle>{{data.fecha | date: 'EEEE dd/MM/yyyy'}}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <div class=\"fila\">\n                <span>Número ganador</span>\n                <ion-badge [color]=\"data.numero_ganador ? 'success' : 'medium'\">\n                    {{data.numero_ganador ? data.numero_ganador : 'Pendiente'}}\n                </ion-badge>\n            </div>\n\n            <div class=\"fila\" *ngIf='data.numero_ganador'>\n                <span>Boletos ganadores</span>\n                <strong>{{data.total_boletos}}</strong>\n            </div>\n            <div class=\"fila total\" *ngIf='data.numero_ganador'>\n                <span>Total premios</span>\n                <strong>{{money(data.total_premios)}}</strong>\n            </div>\n\n            <p *ngIf='!data.numero_ganador' class=\"vacio\">\n                Esperando que se fije el número ganador... se actualiza solo.\n            </p>\n\n            <div class=\"lista\" *ngIf='data.numero_ganador'>\n                <div class=\"ganador\" *ngFor='let b of data.boletos' (click)='verBoleto(b)'>\n                    <div class=\"titulo\">\n                        <strong>#{{b.id}}</strong>\n                        <span>{{b.hora}} · {{b.cliente_nombre || 'Cliente de Contado'}}</span>\n                        <strong class=\"premio\">{{money(b.premio)}}</strong>\n                    </div>\n                    <div class=\"detalle\" *ngIf='b.empleado_nombre || b.usuario_nombre'>\n                        Máq: {{b.empleado_nombre}}<ng-container *ngIf='b.usuario_nombre'> ({{b.usuario_nombre}})</ng-container>\n                    </div>\n                    <div class=\"numeros\">\n                        <span *ngFor='let n of b.numeros' class=\"num\">\n                            {{n.numero}} · {{money(n.inversion)}} → {{money(n.ganancia)}}\n                        </span>\n                    </div>\n                </div>\n\n                <p *ngIf='data.boletos.length == 0' class=\"vacio\">\n                    Ningún boleto le ganó a este sorteo.\n                </p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n\n    <div *ngIf='!cargando && !data && sorteos.length == 0' class=\"ion-text-center ion-padding\">\n        No hubo ventas hoy en ningún sorteo.\n    </div>\n</ion-content>\n\n<ion-footer *ngIf='data && data.numero_ganador'>\n    <ion-toolbar>\n        <ion-button expand=\"block\" (click)=\"imprimir()\">Imprimir reporte</ion-button>\n    </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=pages-ganadores-ganadores-module-es2015.js.map