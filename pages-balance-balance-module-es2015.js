(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-balance-balance-module"],{

/***/ "0JcB":
/*!***********************************************!*\
  !*** ./src/app/pages/balance/balance.page.ts ***!
  \***********************************************/
/*! exports provided: BalancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancePage", function() { return BalancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_balance_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./balance.page.html */ "LM0h");
/* harmony import */ var _balance_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./balance.page.scss */ "QBJw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ion2-calendar */ "zTSL");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/util/util */ "JQC8");
/* harmony import */ var _detalle_balance_detalle_balance_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../detalle-balance/detalle-balance.page */ "6ASw");
/* harmony import */ var esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! esc-pos-encoder */ "oLKi");
/* harmony import */ var esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_services_printer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/printer.service */ "UbLU");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/sub-menu/sub-menu.page */ "YY6p");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _balance_filtro_balance_filtro_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../balance-filtro/balance-filtro.page */ "ngqc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");

















let BalancePage = class BalancePage {
    constructor(bs, modalCtrl, loadCtrl, util, popoverCtrl, currencyPipe, printer, alertCtrl, storage, toastCtrl) {
        this.bs = bs;
        this.modalCtrl = modalCtrl;
        this.loadCtrl = loadCtrl;
        this.util = util;
        this.popoverCtrl = popoverCtrl;
        this.currencyPipe = currencyPipe;
        this.printer = printer;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.sorteosDict = {
            'r': 'Regular',
            'j2': 'Juega 2',
            'j3': 'Juega 3',
            'f': 'Fechas'
        };
        this.searchTerm = '';
        this.empleados = [];
        this.original = [];
        this.vb = false;
        this.tv = 0;
        this.loaded = false;
        this.isAdmin = false;
        this.allEmployees = [];
        this.empleadoSelected = { id: -1, nombre: '' };
        this.agente = { id: -1, nombre: '' };
        this.sorteo_tipo = '';
        this.sort = '';
        this.pais_id = null;
        this.refreshTimer = null;
        this.refreshing = false;
        this.lastSig = '';
        this.turnos = ['10:00 AM', '11:00 AM', '12:50 PM', '03:00 PM', '04:30 PM', '06:00 PM', '07:30 PM', '09:00 PM', 'TODOS'];
        this.secondPage = false;
        this.sumVendido = (balances) => balances.sumBy(x => x.vendido);
        this.sumPagado = (balances) => balances.sumBy(x => x.ganancia);
        this.sumComision = (balances) => balances.sumBy(x => x.comision);
        this.sumBalance = (balances) => balances.sumBy(x => x.balance);
        this.totalVendido = () => this.empleado ? this.empleado.balances.sumBy(x => x.vendido) : this.empleados.sumBy(x => x.balances.sumBy(y => y.vendido));
        this.totalPagado = () => this.empleado ? this.empleado.balances.sumBy(x => x.ganancia) : this.empleados.sumBy(x => x.balances.sumBy(y => y.ganancia));
        this.totalBalance = () => this.empleado ? this.empleado.balances.sumBy(x => x.balance) : this.empleados.sumBy(x => x.balances.sumBy(y => y.balance));
        this.totalComision = () => this.empleados.sumBy(x => x.balances.sumBy(y => y.comision));
        this.itemHeightFn = (item, index) => 240;
        this.itemHeightFn2 = (item, index) => 170;
        this.itemHeightFn3 = (item, index) => 280;
        this.toAbs = (number) => Math.abs(number);
        this.isPos = false;
        this.supervisor = { id: -1, nombre: '', agentes: [] };
        // bs.get(bs.BALANCE_URL)
        this.from_date = moment__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY/MM/DD');
        this.to_date = moment__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY/MM/DD');
        this.bs.getEmpleado().then(e => { this.isAdmin = e.usuario.isadmin; this.vb = e.usuario.isadmin ? true : e.usuario.vb; this.tv = e.usuario.isadmin ? 0 : e.usuario.tv; });
    }
    ionViewWillEnter() {
        this.load();
        this.startAutoRefresh();
    }
    ionViewWillLeave() {
        this.stopAutoRefresh();
    }
    startAutoRefresh() {
        this.stopAutoRefresh();
        this.refreshTimer = setInterval(() => {
            if (this.secondPage || this.refreshing)
                return;
            // no refrescar mientras el usuario tiene un modal/filtro/calendario abierto
            if (document.querySelector('ion-modal, ion-popover, ion-alert, ion-action-sheet, ion-loading'))
                return;
            this.load(true);
        }, 5000);
    }
    stopAutoRefresh() {
        if (this.refreshTimer) {
            clearInterval(this.refreshTimer);
            this.refreshTimer = null;
        }
    }
    load(silent = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.refreshing)
                return;
            this.refreshing = true;
            let load = null;
            if (!silent) {
                this.loaded = false;
                load = yield this.loadCtrl.create({
                    message: 'Cargando...'
                });
                yield load.present();
            }
            try {
                const d = yield this.bs.get(this.bs.BALANCE_URL + '/' + this.from_date.replace(/\//g, "-") + '/' + this.to_date.replace(/\//g, "-"), true);
                // Ordenar por balance de menor a mayor
                d.sort((x, y) => this.sumBalance(x.balances) > this.sumBalance(y.balances) ? 1 : -1);
                const sig = JSON.stringify(d);
                if (silent && sig === this.lastSig)
                    return;
                this.lastSig = sig;
                this.empleados = d;
                this.original = d.clone();
                this.allEmployees = this.empleados.filter(x => x.agentes.length > 0).map(x => { return { id: x.empleado_id, nombre: x.empleado_nombre, agentes: x.agentes }; });
                this.loaded = true;
                this.search({ target: { value: this.searchTerm } });
            }
            catch (err) {
                this.loaded = true;
                if (!silent)
                    yield this.util.handleError(err);
            }
            finally {
                if (load)
                    yield load.dismiss();
                this.refreshing = false;
            }
        });
    }
    ngOnInit() {
    }
    openCalendar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let from = new Date('2020/01/01 00:00:00');
            let to = undefined;
            switch (this.tv) {
                case 1:
                    from = new Date(moment__WEBPACK_IMPORTED_MODULE_6___default()().add(-moment__WEBPACK_IMPORTED_MODULE_6___default()().weekday(), 'days').add(-1, 'week').format('YYYY/MM/DD'));
                    to = new Date();
                    break;
                case 2:
                    from = new Date(moment__WEBPACK_IMPORTED_MODULE_6___default()().add(-moment__WEBPACK_IMPORTED_MODULE_6___default()().weekday(), 'days').add(-2, 'week').format('YYYY/MM/DD'));
                    to = new Date();
                    break;
                case 3:
                    from = new Date(moment__WEBPACK_IMPORTED_MODULE_6___default()().add(-1, 'month').format('YYYY/MM/01'));
                    to = new Date();
                    break;
            }
            console.log('vb', this.vb);
            const options = {
                title: '',
                pickMode: 'range',
                doneLabel: 'Aceptar',
                closeLabel: 'Cancelar',
                type: 'string',
                defaultDateRange: {
                    from: new Date(this.from_date),
                    to: new Date(this.to_date)
                },
                defaultDate: new Date(this.from_date),
                defaultScrollTo: new Date(),
                from,
                to,
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
                this.from_date = data.from.string.replace('-', '/');
                this.to_date = data.to.string.replace('-', '/');
                console.log(data);
                this.load();
            }
        });
    }
    applyFilter1() {
        // this.empleados = [...this.original];
        this.empleados = this.original.clone();
        if (this.supervisor.id != -1) {
            console.log('Supersivor', this.supervisor);
            let emps_id = JSON.parse(JSON.stringify(this.supervisor.agentes));
            emps_id.push(this.supervisor.id);
            this.empleados = this.empleados.filter(x => emps_id.includes(x.empleado_id));
            console.log('empleados', this.empleados);
        }
        else if (this.agente.id != -1) {
            this.empleados = this.empleados.filter(x => x.empleado_id == this.agente.id);
        }
        if (this.sorteo_tipo)
            this.empleados.forEach(x => x.balances = x.balances.filter(y => y.sorteo_tipo == this.sorteo_tipo));
        if (this.turno) {
            this.empleados.forEach(x => x.balances = x.balances.filter(y => moment__WEBPACK_IMPORTED_MODULE_6___default()(y.juego_fecha).format('hh:mm A') == this.turno));
        }
        if (this.pais_id) {
            this.empleados.forEach(x => x.balances = x.balances.filter(y => y.pais_id == this.pais_id));
        }
        this.empleados.removeBy((x) => this.sumVendido(x.balances) == 0);
        // console.log(this.empleados);
        if (this.sort == 'Más Vendido') {
            this.empleados.sort((x, y) => this.sumVendido(x.balances) < this.sumVendido(y.balances) ? 1 : -1);
        }
        else if (this.sort == 'Menos Vendido') {
            this.empleados.sort((x, y) => this.sumVendido(x.balances) > this.sumVendido(y.balances) ? 1 : -1);
        }
        else if (this.sort == 'Más Pagado') {
            this.empleados.sort((x, y) => this.sumPagado(x.balances) < this.sumPagado(y.balances) ? 1 : -1);
        }
        else if (this.sort == 'Menos Pagado') {
            this.empleados.sort((x, y) => this.sumPagado(x.balances) > this.sumPagado(y.balances) ? 1 : -1);
        }
        else if (this.sort == 'Más Balance') {
            this.empleados.sort((x, y) => this.sumBalance(x.balances) < this.sumBalance(y.balances) ? 1 : -1);
        }
        else if (this.sort == 'Menos Balance') {
            this.empleados.sort((x, y) => this.sumBalance(x.balances) > this.sumBalance(y.balances) ? 1 : -1);
        }
    }
    search(evt) {
        this.applyFilter1();
        let term = evt.target.value.trim();
        if (term == '')
            this.empleados = this.empleados.clone();
        else
            this.empleados = this.empleados.filter(x => x.usuario_nombre.trim().toLowerCase().indexOf(term) > -1);
        if (this.secondPage && this.supervisor.id != -1)
            this.secondPage = false;
        // if (this.secondPage)
        // {
        //   console.log(this.empleado);
        //   // console.log
        //   this.empleado = this.empleados.find(x => x.empleado_id == this.empleado.empleado_id);
        //   if (!this.empleado)
        //   {
        //     this.empleado = this.empleados.find(x => x.empleado_id == this.empleadoSelected.id);
        //     if (!this.empleado)
        //       this.secondPage = false;
        //   }
        // }
        // else
        // {
        //   this.empleado = this.empleados.find(x => x.empleado_id == this.empleadoSelected.id);
        //   if (this.empleado)
        //     this.secondPage = true;
        //   else
        //     this.secondPage = false;
        // }
    }
    verDetalle(emp) {
        this.empleado = emp;
        this.empleado.balances = this.empleado.balances.sort((x, y) => x.juego_fecha > y.juego_fecha);
        this.secondPage = true;
        this.content.scrollToTop();
    }
    verDetalleBalance(balance) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(balance);
            let modal = yield this.modalCtrl.create({
                component: _detalle_balance_detalle_balance_page__WEBPACK_IMPORTED_MODULE_9__["DetalleBalancePage"],
                componentProps: {
                    balance,
                    agente: this.empleado.empleado_nombre,
                    usuario: {
                        id: this.empleado.usuario_id,
                        nombre: this.empleado.usuario_nombre
                    }
                }
            });
            yield modal.present();
        });
    }
    printBalance1() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sorteos = [];
            // if (this.secondPage)
            //   sorteos = this.empleado.balances.distinctBy(x => moment(x.juego_fech).format('hh:mm A'));
            // else
            //   sorteos = this.empleados.map(x => x.balances).flat().distinctBy(x => moment(x.juego_fech).format('hh:mm A'));
            let inputs = [];
            if (!this.turno) {
                this.turnos.forEach(s => {
                    inputs.push({
                        type: 'radio',
                        label: s,
                        value: s
                    });
                });
            }
            else {
                inputs.push({
                    type: 'radio',
                    label: this.turno,
                    value: this.turno
                });
            }
            let alert = yield this.alertCtrl.create({
                header: 'Imprimir Balance',
                message: 'Por favor seleccione un turno',
                inputs,
                buttons: [{
                        text: 'Cancelar',
                        role: 'destructive',
                        cssClass: 'danger'
                    }, {
                        text: 'Seleccionar',
                        handler: (v) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            let alert1 = yield this.alertCtrl.create({
                                header: 'Imprimir Balance',
                                message: 'Por favor seleccione un tipo',
                                inputs: this.sorteo_tipo ? [{
                                        label: this.sorteosDict[this.sorteo_tipo],
                                        value: this.sorteo_tipo,
                                        type: 'radio'
                                    }] : [
                                    {
                                        label: 'Regular',
                                        value: 'r',
                                        type: 'radio'
                                    },
                                    {
                                        label: 'Juega 3',
                                        value: 'j3',
                                        type: 'radio'
                                    },
                                    {
                                        label: 'Fechas',
                                        value: 'f',
                                        type: 'radio'
                                    },
                                    {
                                        label: 'Todos',
                                        value: 'TODOS',
                                        type: 'radio'
                                    }
                                ],
                                buttons: [{
                                        text: 'Cancelar',
                                        role: 'destructive',
                                        cssClass: 'danger'
                                    }, {
                                        text: 'Seleccionar',
                                        handler: (t) => {
                                            this.printBalances(this.secondPage ? [this.empleado] : this.empleados, v, t);
                                        }
                                    }]
                            });
                            yield alert1.present();
                        })
                    }]
            });
            yield alert.present();
        });
    }
    printBalance2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const encoder = new esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10___default.a();
            const result = encoder.initialize();
            // Sunmi: por defecto chino (multibyte). FS . cierra multibyte, ESC t 10 = Windows-1252
            result.raw([0x1c, 0x2e]);
            result.raw([0x1b, 0x74, 0x10]);
            result._codepage = 'windows1252';
            let from = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.from_date).format('DD/MM/YYYY');
            let to = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.to_date).format('DD/MM/YYYY');
            let fecha = from != to ? from + ' - ' + to : from;
            let hasSomething = false;
            let count = 0;
            const emps = [...this.empleados];
            // let groupped = this.empleado.balances.groupBy(x => x.sorteo_id);
            for (let empleado of emps) {
                const pago = empleado.balances.sumBy(x => x.comision_ventas);
                let comision = empleado.balances.sumBy(x => x.comision_balance);
                if (comision < 0)
                    comision = 0;
                result.align('center')
                    .size('normal')
                    .bold(true)
                    .align('left')
                    .line('Período:  ' + fecha)
                    .line(empleado.empleado_nombre + ` (${empleado.usuario_nombre})`)
                    .bold(false)
                    .line('Pago:     ' + this.currencyPipe.transform(pago, 'C$'));
                if (comision > 0)
                    result.line('Comisión: ' + this.currencyPipe.transform(comision, 'C$'));
                result.line('Total:    ' + this.currencyPipe.transform(Number(+comision + (+pago)).toFixed(2), 'C$'))
                    .align('center')
                    .line(this.util.commands.HORIZONTAL_LINE.HR_58MM);
            }
            // console.log()
            if (emps.length > 0) {
                this.mountAlertBt(result.newline().newline().newline().encode(), count);
            }
            else
                this.util.presentAlert('Aviso', 'No hay agentes seleccionados');
        });
    }
    printBalances(emps, turno, t) {
        const encoder = new esc_pos_encoder__WEBPACK_IMPORTED_MODULE_10___default.a();
        const result = encoder.initialize();
        // Sunmi: por defecto chino (multibyte). FS . cierra multibyte, ESC t 10 = Windows-1252
        result.raw([0x1c, 0x2e]);
        result.raw([0x1b, 0x74, 0x10]);
        result._codepage = 'windows1252';
        let from = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.from_date).format('DD/MM/YYYY');
        let to = moment__WEBPACK_IMPORTED_MODULE_6___default()(this.to_date).format('DD/MM/YYYY');
        let fecha = from != to ? from + ' - ' + to : from;
        let hasSomething = false;
        let count = 0;
        // let groupped = this.empleado.balances.groupBy(x => x.sorteo_id);
        for (let empleado of emps) {
            let count1 = 0;
            let groupped = empleado.balances.groupBy(x => moment__WEBPACK_IMPORTED_MODULE_6___default()(x.juego_fecha).format('hh:mm A'));
            // console.log(groupped);
            // console.log(groupped);
            let s = '';
            groupped.forEach(bg => {
                // console.log(turno, '==', moment(bg[0].juego_id).format('hh:mm A'), turno == moment(bg[0].juego_fecha).format('hh:mm A'));
                if (turno == 'TODOS' || (turno == moment__WEBPACK_IMPORTED_MODULE_6___default()(bg[0].juego_fecha).format('hh:mm A'))) {
                    let groupped2 = bg.flatMap(z => z).groupBy(z => z.sorteo_tipo);
                    groupped2.forEach(bg2 => {
                        if (t == 'TODOS' || (t == bg2[0].sorteo_tipo)) {
                            result.align('center')
                                .size('normal')
                                .bold(false)
                                .align('left')
                                .line('Fecha:   ' + fecha)
                                .line('Hora:    ' + moment__WEBPACK_IMPORTED_MODULE_6___default()(bg[0].juego_fecha).format('hh:mm A'))
                                .line(`Sorteo:  ${bg[0].sorteo_nombre}`)
                                .line(`Tipo:    ${this.sorteosDict[bg2[0].sorteo_tipo]}`)
                                .line('Agente:  ' + empleado.empleado_nombre)
                                .line('Total:   ' + this.currencyPipe.transform(bg2.sumBy(x => x.vendido), 'C$'))
                                .align('center')
                                .line(this.util.commands.HORIZONTAL_LINE.HR_58MM);
                            // console.log('Fecha:   ' + fecha);
                            // console.log('Hora:    ' + moment(bg[0].juego_fecha).format('hh:mm A'));
                            // console.log(`Sorteo:  [${bg[0].grupo_nombre}] ${bg[0].sorteo_nombre}`);
                            // console.log(`Tipo:    ${this.sorteosDict[bg2[0].sorteo_tipo]}`);
                            // console.log('Agente:  ' + empleado.empleado_nombre);
                            // console.log('Total:   ' + this.currencyPipe.transform(bg2.sumBy(x => x.vendido), 'C$'));
                            // console.log(this.util.commands.HORIZONTAL_LINE.HR_58MM);
                            count++;
                            count1++;
                        }
                    });
                }
            });
        }
        // console.log()
        if (count > 0) {
            this.mountAlertBt(result.newline().newline().newline().encode(), count);
        }
        else
            this.util.presentAlert('Aviso', 'Este turno está vacío');
    }
    mountAlertBt(data, total) {
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
                                            this.print(device, data, total);
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
                    yield this.util.presentAlert('Error', 'Error al conectar con la impresora #1.');
                    // console.log(error);
                    // this.showToast(
                    //   'There was an error connecting the printer, please try again!',
                    // );
                    // this.mountAlertBt(this.receipt);
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
                // alert('GOOD');
            }
            catch (ex) {
            }
            console.log('Device mac: ', device);
            console.log('Data: ', JSON.stringify(data));
            let load = yield this.loadCtrl.create({
                message: 'Imprimiendo boletos...',
            });
            yield load.present();
            this.printer.connectBluetooth(device).subscribe(() => {
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
                    // alert('NO ERROR HERE');
                    yield load.dismiss();
                    // alert('NO ERROR HERE x2');
                    let toast = yield this.toastCtrl.create({
                        message: 'Se Imprimieron ' + total + ' balances con éxito',
                        buttons: ['OK'],
                        duration: 1500
                    });
                    // alert('NO ERROR HERE x3');
                    yield toast.present();
                    try {
                        yield this.printer.disconnectBluetooth();
                    }
                    catch (error) {
                        console.log('Error al desconectar la impresora, por favor reiniciar el Bluetooth #3');
                    }
                    // if (this.boleto.id != -1) 
                    //   this.modalCtrl.dismiss();
                    // this.navCtrl.navigateRoot('/');
                }))
                    .catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield load.dismiss();
                    //There was an error printing, please try again!
                    yield this.util.presentAlert('Error', 'Error al imprimir. #4 ' + error);
                }));
            }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield load.dismiss();
                //There was an error connecting to the printer, please try again
                yield this.util.presentAlert('Error', 'Error al conectar la impresora. #5');
            }));
        });
    }
    openSubMenu(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const emp = (yield this.bs.getEmpleado());
            const issupervisor = emp.empleados.length > 0;
            const isAdmin = emp.usuario.isadmin;
            let imprimirBalances = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
            let imprimirPagos = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
            let options = [
                {
                    name: 'Imprimir Balances',
                    icon: 'print-outline',
                    event: imprimirBalances,
                    type: 'button'
                }
            ];
            if (issupervisor || isAdmin)
                options.push({
                    name: 'Imprimir Pagos',
                    icon: 'cash-outline',
                    event: imprimirPagos,
                    type: 'button'
                });
            imprimirBalances.subscribe(() => this.printBalance1());
            imprimirPagos.subscribe(() => this.printBalance2());
            let popover = yield this.popoverCtrl.create({
                component: _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_13__["SubMenuPage"],
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
    openFilter(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _balance_filtro_balance_filtro_page__WEBPACK_IMPORTED_MODULE_15__["BalanceFiltroPage"],
                componentProps: {
                    supervisor: Object.assign({}, this.supervisor),
                    sorteo_tipo: this.sorteo_tipo,
                    turno: this.turno,
                    empleados: [],
                    agente: this.agente,
                    pais_id: this.pais_id,
                    sort: this.sort
                }
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data) {
                this.supervisor = Object.assign({}, data.supervisor);
                this.turno = data.turno;
                this.sort = data.sort;
                this.empleadoSelected = Object.assign({}, data.empleado);
                this.agente = data.agente;
                this.sorteo_tipo = data.sorteo_tipo;
                this.pais_id = data.pais_id;
                this.search({ target: { value: this.searchTerm } });
            }
        });
    }
    getFilterCount() {
        let count = 0;
        if (this.sort)
            count++;
        if (this.supervisor.id != -1 || this.agente.id != -1)
            count++;
        if (this.turno)
            count++;
        if (this.sorteo_tipo)
            count++;
        if (this.pais_id)
            count++;
        return count;
    }
    abs(value) {
        return Math.abs(value);
    }
};
BalancePage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_8__["Util"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["CurrencyPipe"] },
    { type: src_app_services_printer_service__WEBPACK_IMPORTED_MODULE_11__["PrinterService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] }
];
BalancePage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"],] }]
};
BalancePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-balance',
        template: _raw_loader_balance_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_balance_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BalancePage);



/***/ }),

/***/ "LM0h":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/balance/balance.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color='light'>\n    <ion-buttons slot=\"start\">\n      <ion-back-button *ngIf='!secondPage' [text]='\"\"'></ion-back-button>\n      <ion-button *ngIf='secondPage' (click)='secondPage = false; empleado = null;'>\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"center\">Balance {{secondPage ? ' de ' + empleado?.usuario_nombre : ''}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <span\n        *ngIf='supervisor.id != -1 || turno || sorteo_tipo || agente.id != -1 || pais_id || sort'>{{getFilterCount()}}</span>\n      <ion-button [disabled]=\"secondPage\" (click)=\"openFilter($event)\">\n        <ion-icon name=\"filter\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n      <ion-button [disabled]='empleados.length == 0' (click)=\"openSubMenu($event)\">\n        <ion-icon name=\"ellipsis-vertical\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar class=\"toolbar\" color='light' [ngClass]=\"{'max': secondPage}\" *ngIf='!secondPage'>\n    <div class=\"top\">\n      <ion-searchbar [disabled]='secondPage' (ionInput)='search($event)' [(ngModel)]='searchTerm'\n        placeholder='Buscar...'></ion-searchbar>\n      <div style=\"display: flex; justify-content: flex-end; padding: 0 8px; margin: 10px 0 20px 0;\"\n        (click)='openCalendar()'>\n        <ion-button fill='clear'>{{from_date == to_date ? (from_date | date: 'dd/MM/yyyy') : (from_date | date:\n          'dd/MM/yyyy') + ' - ' + (to_date | date: 'dd/MM/yyyy')}} <ion-icon\n            name=\"calendar-outline\"></ion-icon></ion-button>\n      </div>\n\n      <!-- <ion-calendar> </ion-calendar> -->\n      <!-- <ionic-calendar-date-picker (onSelect)=\"dateSelected($event)\"></ionic-calendar-date-picker>\t -->\n      <!-- <ion-calendar [(ngModel)]=\"date\"                (onChange)=\"onChange($event)\"                [type]=\"type\"                [format]=\"'YYYY-MM-DD'\"                [options]='optionsRange'>  </ion-calendar> -->\n      <!-- <ion-calendar></ion-calendar> -->\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <h2 style=\"color: darkgray;\" class=\"ion-text-center\" *ngIf='empleados.length == 0 && loaded'>{{original.length == 0 ?\n    'No hay registros' : 'No se encontraron resultados'}}</h2>\n  <div class=\"content\" [ngClass]=\"{'second-page': secondPage}\" *ngIf='empleados.length > 0'>\n\n    <div class=\"page ion-padding\">\n      <ion-card *ngFor=\"let emp of empleados; let i = index; let first = first ;let last = last;\" [style]=\"{\n        'margin-bottom': !last ? '24px' : '0px'\n      }\">\n        <ion-card-header>\n          <ion-label>\n            <strong>{{emp.empleado_nombre}} ({{emp.usuario_nombre}})</strong>\n          </ion-label>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-row class=\"balance-row\">\n            <ion-col size='4'>Vendido</ion-col>\n            <ion-col size='4'>\n              <hr>\n            </ion-col>\n            <ion-col size='4'>{{sumVendido(emp.balances) | currency: 'C$'}}</ion-col>\n          </ion-row>\n          <ion-row class=\"balance-row\" *ngIf='vb'>\n            <ion-col size='4'>Pagado</ion-col>\n            <ion-col size='4'>\n              <hr>\n            </ion-col>\n            <ion-col size='4'>{{sumPagado(emp.balances) | currency: 'C$'}}</ion-col>\n          </ion-row>\n          <ion-row class=\"balance-row\" *ngIf='vb'>\n            <ion-col size='4'>Entrega</ion-col>\n            <ion-col size='4'>\n              <hr>\n            </ion-col>\n            <ion-col size='4' [ngClass]='{\"negative\": sumBalance(emp.balances) < 0}'>{{toAbs(sumBalance(emp.balances)) |\n              currency: 'C$'}}</ion-col>\n          </ion-row>\n        </ion-card-content>\n        <ion-button color='light' size='block' (click)='verDetalle(emp)'>Ver detalle <ion-icon\n            name=\"arrow-forward-circle\"></ion-icon></ion-button>\n      </ion-card>\n    </div>\n\n    <div class=\"page ion-padding\">\n\n      <ion-card *ngFor=\"let balance of empleado?.balances; let i = index; let first = first ;let last = last;\" [style]=\"{\n          'margin-bottom': !last ? '24px' : '0px'\n        }\">\n        <ion-card-header>\n          <ion-label style=\"display: flex; justify-content: space-between; align-items: center;\">\n            <strong>{{balance.sorteo_nombre}}</strong>\n            <span slot=\"end\" style=\"font-size: 12px\">{{balance.juego_fecha | date: 'dd/MM/yyyy hh:mm a'}}</span>\n          </ion-label>\n          <ion-label style=\"display: flex; justify-content: space-between; align-items: center;\">\n            <strong style=\"color: #000080;\">[{{sorteosDict[balance.sorteo_tipo]}}]</strong>\n            <!-- <span slot=\"end\" style=\"font-size: 12px\">{{balance.juego_fecha | date: 'dd/MM/yyyy hh:mm a'}}</span> -->\n          </ion-label>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-row>\n            <h2 class=\"adds winner\" *ngIf='balance.numero_ganador'>NÚMERO GANADOR: {{balance.numero_ganador}}</h2>\n            <h2 class=\"adds no-winner\" *ngIf='!balance.numero_ganador'>{{balance.iscompleted ? 'NO GANADOR' : 'AÚN NO\n              FINALIZADO'}}</h2>\n          </ion-row>\n          <ion-row class=\"balance-row\">\n            <ion-col size='4'>Vendido</ion-col>\n            <ion-col size='4'>\n              <hr>\n            </ion-col>\n            <ion-col size='4'>{{balance.vendido | currency: 'C$'}}</ion-col>\n          </ion-row>\n          <ion-row class=\"balance-row\" *ngIf='vb'>\n            <ion-col size='4'>Pagado</ion-col>\n            <ion-col size='4'>\n              <hr>\n            </ion-col>\n            <ion-col size='4'>{{balance.ganancia | currency: 'C$'}}</ion-col>\n          </ion-row>\n          <!-- <ion-row class=\"balance-row\">\n              <ion-col size='4'>Com. (7%)</ion-col>\n              <ion-col size='4'><hr></ion-col>\n              <ion-col size='4'>{{balance.comision | currency: 'C$'}}</ion-col>\n            </ion-row> -->\n          <ion-row class=\"balance-row\" *ngIf='vb'>\n            <ion-col size='4'>Entrega</ion-col>\n            <ion-col size='4'>\n              <hr>\n            </ion-col>\n            <ion-col size='4' [ngClass]='{\"negative\": balance.balance < 0}'>{{toAbs(balance.balance) | currency:\n              'C$'}}</ion-col>\n          </ion-row>\n        </ion-card-content>\n\n        <ion-button color='light' size='block' (click)='verDetalleBalance(balance)'>Ver detalle <ion-icon\n            name=\"arrow-forward-circle\"></ion-icon></ion-button>\n      </ion-card>\n\n    </div>\n\n\n  </div>\n\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n\n\n    <ion-footer>\n      <ion-toolbar color='light'>\n        <ion-grid>\n          <ion-row class='bottom'>\n            <ion-col size='4'>\n              Total vendido\n            </ion-col>\n            <ng-container *ngIf='vb'>\n\n              <ion-col size='4'>\n                Total Pagado\n              </ion-col>\n              <ion-col size='4'>\n                Total balance\n              </ion-col>\n            </ng-container>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size='4'>\n              {{totalVendido() | currency: 'C$'}}\n            </ion-col>\n            <ng-container *ngIf='vb'>\n              <ion-col size='4'>\n                <!-- {{totalComision() | currency: 'C$'}}\n                      <br> -->\n                {{totalPagado() | currency: 'C$'}}\n              </ion-col>\n              <ion-col size='4' [ngClass]=\"{'negative': totalBalance() < 0}\">\n                {{abs(totalBalance()) | currency: 'C$'}}\n              </ion-col>\n            </ng-container>\n          </ion-row>\n        </ion-grid>\n      </ion-toolbar>\n    </ion-footer>\n\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "QBJw":
/*!*************************************************!*\
  !*** ./src/app/pages/balance/balance.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  margin-left: 6px;\n}\n\n.balance-row {\n  align-items: center;\n}\n\n.balance-row ion-col {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.balance-row ion-col:last-child {\n  text-align: right;\n  font-weight: bold;\n}\n\nion-content {\n  --background: #F2F2F2;\n}\n\n.bottom {\n  font-size: 13px;\n}\n\n.adds {\n  font-weight: bold;\n  margin: 0 0 10px 0;\n  font-size: 18px;\n}\n\n.adds.winner {\n  color: rgba(19, 71, 78, 0.7);\n}\n\n.adds.no-winner {\n  color: rgba(240, 65, 65, 0.7);\n}\n\n.content {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  overflow: visible;\n  transition: 0.3s all ease;\n}\n\n.content.second-page {\n  transform: translateX(-100%);\n}\n\n.content.second-page .page:first-child {\n  padding: 0;\n  max-height: 0 !important;\n  overflow: hidden;\n}\n\n.content .page {\n  min-width: 100%;\n}\n\n.content .page:nth-child(2) {\n  position: relative;\n}\n\n.content .page:nth-child(2) ion-button.back {\n  position: absolute;\n  top: -17px;\n}\n\nion-card {\n  margin: 0;\n  animation: fadeIn 1s forwards;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.negative {\n  color: #f04141;\n  font-weight: bold;\n}\n\nion-button {\n  font-size: 12px;\n}\n\nion-buttons span {\n  padding: 4px 8.16px;\n  border-radius: 50%;\n  display: inline-block;\n  font-size: 12px;\n  position: absolute;\n  left: 28px;\n  font-weight: bold;\n  top: 0;\n  background: #A70B0B;\n  color: #FFF;\n  pointer-events: none;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JhbGFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7O0FBQ0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDUjs7QUFBUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFFWjs7QUFJQTtFQUNJLHFCQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUdJO0VBQ0ksNEJBQUE7QUFEUjs7QUFHSTtFQUNJLDZCQUFBO0FBRFI7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFISjs7QUFJSTtFQUNJLDRCQUFBO0FBRlI7O0FBSVk7RUFDSSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQUZoQjs7QUFNSTtFQUNJLGVBQUE7QUFKUjs7QUFLUTtFQUNJLGtCQUFBO0FBSFo7O0FBSVk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFGaEI7O0FBVUE7RUFDSSxTQUFBO0VBQ0EsNkJBQUE7QUFQSjs7QUFXQTtFQUVJO0lBQ0ksVUFBQTtFQVROO0VBWUU7SUFDSSxVQUFBO0VBVk47QUFDRjs7QUFtQkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFqQko7O0FBb0JBO0VBQ0ksZUFBQTtBQWpCSjs7QUF1Qkk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxNQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBcEJSIiwiZmlsZSI6ImJhbGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cblxuLmJhbGFuY2Utcm93IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGMkYyRjI7XG59XG5cbi5ib3R0b20ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuXG4uYWRkcyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAmLndpbm5lciB7XG4gICAgICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogIzEzNDc0ZSwgJGFscGhhOiAuNyk7XG4gICAgfVxuICAgICYubm8td2lubmVyIHtcbiAgICAgICAgY29sb3I6IHJnYmEoJGNvbG9yOiAjZjA0MTQxLCAkYWxwaGE6IC43KTtcbiAgICB9XG59XG5cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XG4gICAgJi5zZWNvbmQtcGFnZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIC5wYWdlIHtcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBhZ2Uge1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGlvbi1idXR0b24uYmFjayB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogLTE3cHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMDtcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcyBmb3J3YXJkcztcbn1cblxuXG5Aa2V5ZnJhbWVzIGZhZGVJblxue1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cblxuXG5cblxuXG5cbi5uZWdhdGl2ZSB7XG4gICAgY29sb3I6IHJnYmEoJGNvbG9yOiAjZjA0MTQxLCAkYWxwaGE6IDEpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cblxuaW9uLWJ1dHRvbnMge1xuICAgXG4gICAgc3BhbiB7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4LjE2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYmFja2dyb3VuZDogI0E3MEIwQjtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "YE2F":
/*!*********************************************************!*\
  !*** ./src/app/pages/balance/balance-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: BalancePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancePageRoutingModule", function() { return BalancePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _balance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./balance.page */ "0JcB");




const routes = [
    {
        path: '',
        component: _balance_page__WEBPACK_IMPORTED_MODULE_3__["BalancePage"]
    }
];
let BalancePageRoutingModule = class BalancePageRoutingModule {
};
BalancePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BalancePageRoutingModule);



/***/ }),

/***/ "msXF":
/*!*************************************************!*\
  !*** ./src/app/pages/balance/balance.module.ts ***!
  \*************************************************/
/*! exports provided: BalancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancePageModule", function() { return BalancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _balance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./balance-routing.module */ "YE2F");
/* harmony import */ var _balance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./balance.page */ "0JcB");







let BalancePageModule = class BalancePageModule {
};
BalancePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _balance_routing_module__WEBPACK_IMPORTED_MODULE_5__["BalancePageRoutingModule"]
        ],
        declarations: [_balance_page__WEBPACK_IMPORTED_MODULE_6__["BalancePage"]]
    })
], BalancePageModule);



/***/ })

}]);
//# sourceMappingURL=pages-balance-balance-module-es2015.js.map