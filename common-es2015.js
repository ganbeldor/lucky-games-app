(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "8SQ3":
/*!**********************************************************************!*\
  !*** ./src/app/components/roles-explained/roles-explained.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  margin: 0;\n}\n\nh2 {\n  margin: 0;\n}\n\n.container {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n\n.container .dot {\n  min-width: 16px;\n  min-height: 16px;\n  border-radius: 50%;\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JvbGVzLWV4cGxhaW5lZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FBQ0o7O0FBR0E7RUFDSSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNSIiwiZmlsZSI6InJvbGVzLWV4cGxhaW5lZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgLy8gbWFyZ2luLXRvcDogLTNweDtcbn1cblxuaDIge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIC5kb3Qge1xuICAgICAgICBtaW4td2lkdGg6IDE2cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "I2vD":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/super-grupo/super-grupo.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color='light'>\n    <ion-buttons>\n      <ion-back-button slot=\"start\"> [text]='\"\"' </ion-back-button>\n    </ion-buttons>\n    \n    <ion-title class='center'> {{superGrupo.id == -1 ? 'Nuevo ' : ''}}Super Grupo{{superGrupo.id == -1 ? '': ' #' + superGrupo.id}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf='superGrupo.id > -1' (click)='close()'>\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n      <ion-button (click)='showMenu($event)'>\n          <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form #form='ngForm' (ngSubmit)='submit(form)'>\n    <ion-item>\n        <ion-label position='floating'>Nombre</ion-label>\n        <ion-input [(ngModel)]='superGrupo.nombre' name='nombre'></ion-input>\n    </ion-item>\n    <ion-list style=\"margin-top: 20px;\">\n      <ion-list-header>\n          <ion-label>Lista de grupos</ion-label>\n      </ion-list-header>\n      <ion-item *ngFor='let grupo of grupos; let i = index'>\n          <ion-label>{{grupo.nombre}}</ion-label>\n          <ion-toggle (ionChange)='toggleGrupo(grupo.id)' [name]='grupo.nombre' slot=\"end\" [checked]=\"isGrupoInSuperGrupo(grupo.id)\"></ion-toggle>\n      </ion-item>\n  \n  </ion-list>\n  \n    <ion-button expand='block' style=\"margin-top: 20px;\" type='submit' [disabled]='!isValid()'>\n      {{superGrupo.id == -1 ? 'Guardar' : 'Actualizar'}}\n      <ion-icon style=\"margin-left: 6px;\" name='save'></ion-icon>\n    </ion-button>\n  </form>\n  <!-- {{\n    superGrupo.grupos_id |json\n  }} -->\n  \n\n</ion-content>\n");

/***/ }),

/***/ "LaoF":
/*!********************************************************************!*\
  !*** ./src/app/components/roles-explained/roles-explained.page.ts ***!
  \********************************************************************/
/*! exports provided: RolesExplainedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesExplainedPage", function() { return RolesExplainedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_roles_explained_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./roles-explained.page.html */ "kmqV");
/* harmony import */ var _roles_explained_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles-explained.page.scss */ "8SQ3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RolesExplainedPage = class RolesExplainedPage {
    constructor() {
        this.roles = [
            {
                background: '#13474E',
                label: 'Administrador'
            },
            {
                background: '#0D6A8D',
                label: 'Supervisor'
            },
            {
                background: '#8D0D0D',
                label: 'Agente'
            },
            {
                background: '#CD0A0A',
                label: 'Agente que nunca ha facturado'
            }
        ];
    }
    ngOnInit() {
    }
};
RolesExplainedPage.ctorParameters = () => [];
RolesExplainedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-roles-explained',
        template: _raw_loader_roles_explained_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_roles_explained_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RolesExplainedPage);



/***/ }),

/***/ "UbWJ":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/balance-filtro/balance-filtro.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color='light'>\n      <ion-title class=\"center\">Filtros</ion-title>\n      <ion-buttons slot=\"end\">\n          <ion-button (click)='close()'>\n              <ion-icon name='close' slot='icon-only'></ion-icon>\n          </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class='ion-padding'>\n  \n    <ion-item>\n        <ion-label>Ordenar</ion-label>\n        <ion-select [(ngModel)]='sort' placeholder='Seleccione una opción'>\n            <ion-select-option *ngFor='let e of sorts' [value]='e'>{{e}}</ion-select-option>\n        </ion-select>\n    </ion-item>\n\n    <div class=\"btn-container\">\n        <ion-button color='danger' (click)='sort = \"\"' class=\"eliminar\">\n            Limpiar\n            <ion-icon name=\"trash\"></ion-icon>\n        </ion-button>\n    </div>\n\n    <ion-item>\n        <ion-label>Turno</ion-label>\n        <ion-select [(ngModel)]='turno' placeholder='Seleccione un turno'>\n            <ion-select-option *ngFor='let e of turnos' [value]='e'>{{e}}</ion-select-option>\n        </ion-select>\n    </ion-item>\n\n  <div class=\"btn-container\">\n    <ion-button color='danger' (click)='turno = \"\"' class=\"eliminar\">\n        Limpiar\n        <ion-icon name=\"trash\"></ion-icon>\n    </ion-button>\n</div>\n\n\n<ion-item>\n    <ion-label>Tipo</ion-label>\n    <ion-select [(ngModel)]='sorteo_tipo' name='tipo' placeholder='Seleccione un tipo'>\n        <ion-select-option value='r'>\n            Regular\n        </ion-select-option>\n        <ion-select-option value='j3'>\n            Juega 3\n        </ion-select-option>\n        <ion-select-option value='f'>\n            Fechas\n        </ion-select-option>\n    </ion-select>\n\n</ion-item>\n\n<div class=\"btn-container\">\n    <ion-button color='danger' (click)='limpiar(5)' class=\"eliminar\">\n        Limpiar\n        <ion-icon name=\"trash\"></ion-icon>\n    </ion-button>\n</div>\n\n<ng-container *ngIf='empleados.length > 0 || supervisor.id != -1'>\n    <ion-item>\n        <ion-label>Supervisor</ion-label>\n        <ion-select [disabled]='empleados.length == 0' [(ngModel)]='supervisor' [placeholder]='supervisor.id == -1 ? \"Seleccione un supervisor\" : supervisor.nombre'>\n            <ion-select-option *ngFor='let e of empleados' [value]='e'>{{e.nombre}}</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <div class=\"btn-container\">\n        <ion-button color='danger' (click)='limpiar(2)' class=\"eliminar\">\n            Limpiar\n            <ion-icon name=\"trash\"></ion-icon>\n        </ion-button>\n    </div>\n</ng-container>\n\n\n<ng-container *ngIf='agentes.length > 0 || agente.id != -1'>\n    <ion-item>\n        <ion-label>Agente</ion-label>\n        <ion-select [disabled]='agentes.length == 0' [(ngModel)]='agente' [placeholder]='agente.id == -1 ? \"Seleccione un agente\" : agente.nombre'>\n            <ion-select-option *ngFor='let e of agentes' [value]='e'>{{e.nombre}}</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <div class=\"btn-container\">\n        <ion-button color='danger' (click)='limpiar(3)' class=\"eliminar\">\n            Limpiar\n            <ion-icon name=\"trash\"></ion-icon>\n        </ion-button>\n    </div>\n</ng-container>\n\n<ng-container *ngIf='paises.length > 0'>\n    <ion-item>\n        <ion-label>País</ion-label>\n        <ion-select [(ngModel)]='pais_id' [placeholder]='\"Seleccione un país\"'>\n            <ion-select-option *ngFor='let p of paises' [value]='p.id'>{{p.nombre}}</ion-select-option>\n        </ion-select>\n\n    </ion-item>\n\n\n    <div class=\"btn-container\">\n        <ion-button color='danger' (click)='limpiar(6)' class=\"eliminar\">\n            Limpiar\n            <ion-icon name=\"trash\"></ion-icon>\n        </ion-button>\n    </div>\n</ng-container>\n\n\n\n\n  <ion-button class='submit' expand='block' (click)='aplicarFiltros()'>Aplicar filtros\n      <ion-icon style='margin-left: 6px;' name=\"checkmark-circle\"></ion-icon>\n  </ion-button>\n\n\n</ion-content>");

/***/ }),

/***/ "X5NK":
/*!***************************************************************!*\
  !*** ./src/app/pages/balance-filtro/balance-filtro.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.btn-container {\n  display: flex;\n  justify-content: flex-end;\n  margin: 20px 0;\n}\n\nion-button.eliminar {\n  font-size: 11px !important;\n}\n\nion-button.eliminar ion-icon {\n  margin-left: 6px;\n  font-size: 12px !important;\n}\n\nion-button.submit {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JhbGFuY2UtZmlsdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFHQTtFQUNJLDBCQUFBO0FBQUo7O0FBQ0k7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0FBQ1I7O0FBR0E7RUFDSSxjQUFBO0FBQUoiLCJmaWxlIjoiYmFsYW5jZS1maWx0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmJ0bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBcbn1cblxuaW9uLWJ1dHRvbi5lbGltaW5hciB7XG4gICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbmlvbi1idXR0b24uc3VibWl0IHtcbiAgICBtYXJnaW46IDIwcHggMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "Zcj0":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ "KF81");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "iiW8":
/*!*******************************************************!*\
  !*** ./src/app/pages/super-grupo/super-grupo.page.ts ***!
  \*******************************************************/
/*! exports provided: SuperGrupoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperGrupoPage", function() { return SuperGrupoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_super_grupo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./super-grupo.page.html */ "I2vD");
/* harmony import */ var _super_grupo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./super-grupo.page.scss */ "wZeR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/classes */ "50N5");
/* harmony import */ var _shared_sub_menu_sub_menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/sub-menu/sub-menu.page */ "YY6p");
/* harmony import */ var _restringir_numeros_restringir_numeros_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../restringir-numeros/restringir-numeros.page */ "B4BN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/util/util */ "JQC8");











let SuperGrupoPage = class SuperGrupoPage {
    constructor(bs, modalCtrl, navCtrl, popoverCtrl, loadCtrl, util) {
        this.bs = bs;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.loadCtrl = loadCtrl;
        this.util = util;
        this.superGrupo = new src_app_classes_classes__WEBPACK_IMPORTED_MODULE_4__["SuperGrupo"]();
        this.grupos = [];
        this.bs.get(this.bs.GRUPO_URL, true)
            .then(grupos => this.grupos = grupos)
            .catch(err => this.util.handleError(err));
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
            restringirNumerosClicked.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let modal = yield this.modalCtrl.create({
                    component: _restringir_numeros_restringir_numeros_page__WEBPACK_IMPORTED_MODULE_6__["RestringirNumerosPage"],
                    componentProps: {
                        numeros_restringidos: this.superGrupo.numeros_restringidos.clone()
                    }
                });
                yield modal.present();
                let data = (yield modal.onDidDismiss()).data;
                if (data && data.numeros_restringidos) {
                    this.superGrupo.numeros_restringidos = data.numeros_restringidos;
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
                message: this.superGrupo.id == -1 ? 'Creando super grupo...' : 'Actualizando super grupo...'
            });
            yield loading.present();
            setTimeout(() => {
                loading.message = 'Calculando límites de grupos y numerones...';
            }, 2000);
            try {
                let body = {
                    superGrupo: JSON.stringify(this.superGrupo)
                };
                let sg = yield this.bs.post(this.bs.SUPER_GRUPO_URL, body, true);
                let msg = this.superGrupo.id == -1 ? 'Super Grupo creado con id #' + sg.id : 'Grupo modificado con éxito';
                console.log(sg);
                yield loading.dismiss();
                yield this.util.presentAlert('Mensaje', msg);
                if (this.superGrupo.id == -1)
                    this.navCtrl.pop();
                else
                    this.modalCtrl.dismiss({ superGrupo: sg });
            }
            catch (ex) {
                yield loading.dismiss();
                this.util.handleError(ex);
            }
        });
    }
    isValid() {
        return this.superGrupo.nombre.trim() != '';
    }
    isGrupoInSuperGrupo(grupo_id) {
        console.log(this.superGrupo.grupos_id.includes(grupo_id), grupo_id);
        return this.superGrupo.grupos_id.includes(grupo_id);
    }
    toggleGrupo(grupo_id) {
        if (this.superGrupo.grupos_id.removeBy(x => x == grupo_id) == 0)
            this.superGrupo.grupos_id.push(grupo_id);
    }
};
SuperGrupoPage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_10__["Util"] }
];
SuperGrupoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-super-grupo',
        template: _raw_loader_super_grupo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_super_grupo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SuperGrupoPage);



/***/ }),

/***/ "kmqV":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/roles-explained/roles-explained.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding: 16px;\">\n    <h2 style=\"font-size: 18px; font-weight: bold; text-align: center;\">Ayuda</h2>\n    <hr style=\"margin: 16px 0;\">\n    <div class=\"container\" *ngFor='let r of roles;'>\n      <div class=\"dot\" [ngStyle]='{\"background\": r.background}'></div>\n      <p style=\"font-size: 16px; margin-top: -3px;\">{{r.label}}</p>\n    </div>\n    <hr>\n    <p style=\"font-size: 16px; text-align: center; margin-top: 16px;\">Agentes en la lista no han facturado en la fecha seleccionada.</p>\n    <hr style=\"margin: 16px 0;\">\n    <p style=\"font-size: 16px; text-align: center;\">La diferencia de días es relativa a la fecha seleccionada.</p>\n</div>");

/***/ }),

/***/ "ngqc":
/*!*************************************************************!*\
  !*** ./src/app/pages/balance-filtro/balance-filtro.page.ts ***!
  \*************************************************************/
/*! exports provided: BalanceFiltroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceFiltroPage", function() { return BalanceFiltroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_balance_filtro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./balance-filtro.page.html */ "UbWJ");
/* harmony import */ var _balance_filtro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./balance-filtro.page.scss */ "X5NK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/util/util */ "JQC8");







let BalanceFiltroPage = class BalanceFiltroPage {
    constructor(bs, util, modalCtrl) {
        this.bs = bs;
        this.util = util;
        this.modalCtrl = modalCtrl;
        this.empleados = [];
        this.isAdmin = false;
        this.supervisor = { id: -1, nombre: '', agentes: [] };
        this.turnos = ['10:00 AM', '11:00 AM', '12:50 PM', '03:00 PM', '04:30 PM', '06:00 PM', '07:30 PM', '09:00 PM'];
        this.agentes = [];
        this.agente = { id: -1, nombre: '' };
        this.sorteo_tipo = '';
        this.pais_id = null;
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
        this.sorts = [
            'Más Vendido',
            'Menos Vendido',
            'Más Pagado',
            'Menos Pagado',
            'Más Balance',
            'Menos Balance',
        ];
    }
    ngOnInit() {
        this.getAll();
    }
    getAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // console.log(this.empleados, this.empleado);
                let emp = yield this.bs.getEmpleado();
                this.isAdmin = emp.usuario.isadmin;
                this.empleados = yield this.bs.get(this.bs.EMPLEADO_URL + '/supervisores', true);
                if (this.empleados.length > 0)
                    this.supervisor = this.empleados.find(x => x.id == this.supervisor.id) || { id: -1, nombre: '', agentes: [] };
                if (!this.isAdmin) {
                    this.agentes = emp.empleados.map(x => ({ id: x.id, nombre: x.primer_nombre + ' ' + x.primer_apellido })).sort((x, y) => x.nombre.localeCompare(y.nombre));
                    this.agente = this.agentes.find(x => x.id == this.agente.id) || { id: -1, nombre: '' };
                    return;
                }
                ;
                this.bs.get(this.bs.EMPLEADO_URL, true).then(e => {
                    this.agentes = e.map(x => ({ id: x.id, nombre: x.primer_nombre + ' ' + x.primer_apellido })).sort((x, y) => x.nombre.localeCompare(y.nombre));
                    this.agente = this.agentes.find(x => x.id == this.agente.id) || { id: -1, nombre: '' };
                });
                // this.sorteos = await 
                // this.bs.get<Sorteo[]>(this.bs.SORTEO_URL, true).then(data => {this.sorteos = data.clone(); this.sorteo = this.sorteos.find(x => x.id ==this.sorteo.id) || new Sorteo(); }).catch(async (err: HttpException) => await this.util.handleError(err));;
                // let emp = await this.bs.getEmpleado();
                // this.empleado = {...emp};
            }
            catch (err) {
                let ex = err;
                this.util.handleError(ex);
            }
        });
    }
    supervisorChanged(evt) {
    }
    limpiar(pos) {
        if (pos == 1)
            this.turno = null;
        else if (pos == 2)
            this.supervisor = { id: -1, nombre: '', agentes: [] };
        else if (pos == 3)
            this.agente = { id: -1, nombre: '' };
        else if (pos == 5)
            this.sorteo_tipo = '';
        else if (pos == 6)
            this.pais_id = null;
    }
    close() {
        this.modalCtrl.dismiss();
    }
    aplicarFiltros() {
        // console.log({sort: this.sort, supervisor: this.supervisor, turno: this.turno, agente: this.agente, sorteo_tipo: this.sorteo_tipo, pais_id: this.pais_id})
        this.modalCtrl.dismiss({ sort: this.sort, supervisor: this.supervisor, turno: this.turno, agente: this.agente, sorteo_tipo: this.sorteo_tipo, pais_id: this.pais_id });
    }
    clean() {
        this.supervisor = { id: -1, nombre: '', agentes: [] };
    }
};
BalanceFiltroPage.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] },
    { type: src_app_util_util__WEBPACK_IMPORTED_MODULE_6__["Util"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
BalanceFiltroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-balance-filtro',
        template: _raw_loader_balance_filtro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_balance_filtro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BalanceFiltroPage);



/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "spDm":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-1457892a.js */ "W6o/");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "wZeR":
/*!*********************************************************!*\
  !*** ./src/app/pages/super-grupo/super-grupo.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBlci1ncnVwby5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map