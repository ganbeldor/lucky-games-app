(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-super-grupo-super-grupo-module"],{

/***/ "YM1i":
/*!*****************************************************************!*\
  !*** ./src/app/pages/super-grupo/super-grupo-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SuperGrupoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperGrupoPageRoutingModule", function() { return SuperGrupoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _super_grupo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./super-grupo.page */ "iiW8");




const routes = [
    {
        path: '',
        component: _super_grupo_page__WEBPACK_IMPORTED_MODULE_3__["SuperGrupoPage"]
    }
];
let SuperGrupoPageRoutingModule = class SuperGrupoPageRoutingModule {
};
SuperGrupoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SuperGrupoPageRoutingModule);



/***/ }),

/***/ "c7pW":
/*!*********************************************************!*\
  !*** ./src/app/pages/super-grupo/super-grupo.module.ts ***!
  \*********************************************************/
/*! exports provided: SuperGrupoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperGrupoPageModule", function() { return SuperGrupoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _super_grupo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./super-grupo-routing.module */ "YM1i");
/* harmony import */ var _super_grupo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./super-grupo.page */ "iiW8");







let SuperGrupoPageModule = class SuperGrupoPageModule {
};
SuperGrupoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _super_grupo_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuperGrupoPageRoutingModule"]
        ],
        declarations: [_super_grupo_page__WEBPACK_IMPORTED_MODULE_6__["SuperGrupoPage"]]
    })
], SuperGrupoPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-super-grupo-super-grupo-module-es2015.js.map