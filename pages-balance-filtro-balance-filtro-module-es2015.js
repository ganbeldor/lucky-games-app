(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-balance-filtro-balance-filtro-module"],{

/***/ "frP/":
/*!***********************************************************************!*\
  !*** ./src/app/pages/balance-filtro/balance-filtro-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: BalanceFiltroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceFiltroPageRoutingModule", function() { return BalanceFiltroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _balance_filtro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./balance-filtro.page */ "ngqc");




const routes = [
    {
        path: '',
        component: _balance_filtro_page__WEBPACK_IMPORTED_MODULE_3__["BalanceFiltroPage"]
    }
];
let BalanceFiltroPageRoutingModule = class BalanceFiltroPageRoutingModule {
};
BalanceFiltroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BalanceFiltroPageRoutingModule);



/***/ }),

/***/ "yrps":
/*!***************************************************************!*\
  !*** ./src/app/pages/balance-filtro/balance-filtro.module.ts ***!
  \***************************************************************/
/*! exports provided: BalanceFiltroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceFiltroPageModule", function() { return BalanceFiltroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _balance_filtro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./balance-filtro-routing.module */ "frP/");
/* harmony import */ var _balance_filtro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./balance-filtro.page */ "ngqc");







let BalanceFiltroPageModule = class BalanceFiltroPageModule {
};
BalanceFiltroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _balance_filtro_routing_module__WEBPACK_IMPORTED_MODULE_5__["BalanceFiltroPageRoutingModule"]
        ],
        declarations: [_balance_filtro_page__WEBPACK_IMPORTED_MODULE_6__["BalanceFiltroPage"]]
    })
], BalanceFiltroPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-balance-filtro-balance-filtro-module-es2015.js.map