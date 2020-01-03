function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"min-vh-100 aesthetic-bg-gradient\">\n  <div class=\"p-3 d-flex flex-row\">\n    <app-navigation class=\"d-block\"></app-navigation>\n    <div class=\"ml-auto\">\n      <app-logged-in-form *ngIf=\"credentialsObservable | async; else loggedOut\"></app-logged-in-form>\n      <ng-template #loggedOut>\n        <app-login-form></app-login-form>\n      </ng-template>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/course-preview/course-preview.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/course-preview/course-preview.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoursePreviewCoursePreviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"aesthetic-windows-95-modal clickable\" *ngIf=\"course\" routerLink=\"/courses/{{course.id}}\">\n  <div class=\"aesthetic-windows-95-modal-title-bar\">\n    <div class=\"aesthetic-windows-95-modal-title-bar-text text-truncate\">{{course.title}}</div>\n  </div>\n  <div class=\"aesthetic-windows-95-modal-content\">\n    <div class=\"d-flex flex-row\">\n      <div>\n        <img [src]=\"course.imageLink\" *ngIf=\"course.imageLink\" class=\"course-img\">\n      </div>\n      <div class=\"ml-3\">\n        <div>\n            <small *ngFor=\"let author of course.authors; let i = index\">\n              <ng-container *ngIf=\"i > 0\">, </ng-container>\n              {{author.name}}\n            </small>\n        </div>\n        <div class=\"mt-2\">\n          <small class=\"aesthetic-black-bg-color aesthetic-white-color px-2\">{{course.provider.name}}</small>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/logged-in-form/logged-in-form.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logged-in-form/logged-in-form.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoggedInFormLoggedInFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"credentialsObservable | async as credential\">\n  <div>\n    <span>logged in as {{credential.username}}</span>\n    <button class=\"button-link ml-3\" (click)=\"logOut()\">log out</button>\n  </div>\n  <div *ngIf=\"meObservable | async as me\">\n    <a routerLink=\"/user/{{me.id}}\">profile</a>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login-form/login-form.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-form/login-form.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginFormLoginFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img src=\"assets/icons/users_key-4.png\" class=\"clickable\" (click)=\"open = true\" *ngIf=\"!open; else isopen\">\n<ng-template #isopen>\n  <div class=\"aesthetic-windows-95-modal position-absolute modal\">\n    <div class=\"aesthetic-windows-95-modal-title-bar\">\n      <div class=\"aesthetic-windows-95-modal-title-bar-text\">{{register ? 'register' : 'login'}}</div>\n      <div class=\"aesthetic-windows-95-modal-title-bar-controls\">\n        <div class=\"aesthetic-windows-95-button-title-bar\">\n          <button (click)=\"open = false\" type=\"button\">X</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"aesthetic-windows-95-modal-content\">\n      <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        <div>\n          <label for=\"input--login--username\">username</label>\n          <input id=\"input--login--username\" class=\"aesthetic-windows-95-text-input\" name=\"username\" required\n                 [(ngModel)]=\"model.username\">\n        </div>\n        <div>\n          <label for=\"input--login--password\">password</label>\n          <input id=\"input--login--password\" class=\"aesthetic-windows-95-text-input\" name=\"password\" type=\"password\"\n                 required [(ngModel)]=\"model.password\">\n        </div>\n        <div class=\"mt-3\">\n          <div *ngIf=\"loading; else notLoading\">\n            <div class=\"aesthetic-windows-95-loader\">\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n          </div>\n          <ng-template #notLoading>\n            <button class=\"aesthetic-windows-95-button d-inline-block\" [disabled]=\"loginForm.invalid\">\n              {{register ? 'register' : 'login'}}\n            </button>\n            <span class=\"ml-3 d-inline-block\">\n            <button class=\"button-link\" (click)=\"register = !register\" type=\"button\">\n              {{register ? 'login' : 'register'}}\n            </button>\n            </span>\n          </ng-template>\n        </div>\n      </form>\n    </div>\n  </div>\n</ng-template>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"aesthetic-windows-95-modal d-inline-block\">\n  <div class=\"aesthetic-windows-95-modal-title-bar\">\n    <span class=\"aesthetic-windows-95-modal-title-bar-text\">menu</span>\n  </div>\n  <div class=\"aesthetic-windows-95-modal-content\">\n    <nav class=\"d-inline-flex flex-column flex-lg-row justify-content-between\">\n      <a routerLink=\"/\" class=\"mr-3\">\n        <img src=\"assets/icons/windows-0.png\" class=\"mr-2\">\n        <span>HOME</span>\n      </a>\n      <a routerLink=\"/courses\" class=\"mr-3\">\n        <img src=\"assets/icons/help_book_cool-0.png\" class=\"mr-2\">\n        <span>COURSES</span>\n      </a>\n      <a routerLink=\"/authors\" class=\"mr-3\">\n        <img src=\"assets/icons/users-0.png\" class=\"mr-2\">\n        <span>AUTHORS</span>\n      </a>\n      <a routerLink=\"/topics\">\n        <img src=\"assets/icons/entire_network_globe-2.png\" class=\"mr-2\">\n        <span>TOPICS</span>\n      </a>\n    </nav>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pager/pager.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pager/pager.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagerPagerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"aesthetic-windows-95-container p-3 d-flex flex-row align-items-center\">\n  <button class=\"aesthetic-windows-95-button mr-2\" [disabled]=\"first\" (click)=\"changePage(0)\">first</button>\n  <button class=\"aesthetic-windows-95-button\" [disabled]=\"first\" (click)=\"changePage(page.page - 1)\">prev</button>\n  <span class=\"mx-auto font-weight-bold\">Page {{page.page + 1}} of {{totalPages}}</span>\n  <button class=\"aesthetic-windows-95-button\" [disabled]=\"last\" (click)=\"changePage(page.page + 1)\">next</button>\n  <button class=\"aesthetic-windows-95-button ml-2\" [disabled]=\"last\" (click)=\"changePage(totalPages - 1)\">last</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authors-page/authors-page.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authors-page/authors-page.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthorsPageAuthorsPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" *ngIf=\"authorsObservable | async as page\">\n  <app-pager [page]=\"page\" (pageChange)=\"gotToPage($event)\"></app-pager>\n  <div class=\"row\">\n    <div class=\"col-6 col-md-4 col-lg-3 my-3\" *ngFor=\"let author of page.items\">\n      <div class=\"clickable d-block aesthetic-windows-95-container p-3 text-center text-truncate\"\n         routerLink=\"/courses\" [queryParams]=\"{'authorId': author.id}\">\n        {{author.name}}\n      </div>\n    </div>\n  </div>\n  <app-pager [page]=\"page\" (pageChange)=\"gotToPage($event)\"></app-pager>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/course-page/course-page.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/course-page/course-page.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCoursePageCoursePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" *ngIf=\"courseObservable | async as course; else loading\">\n  <a routerLink=\"/courses\">\n    <img src=\"assets/icons/help_book_cool-0.png\">\n    <span class=\"ml-2\">back to courses</span>\n  </a>\n  <div class=\"row\">\n    <div *ngIf=\"course.imageLink\" class=\"col-12 col-md-6 col-lg-4 mt-3\">\n      <div class=\"aesthetic-windows-95-container p-3\">\n        <div class=\"aesthetic-effect-crt\">\n          <img class=\"w-100\" [src]=\"course.imageLink\">\n        </div>\n        <div class=\"mt-3 aesthetic-windows-95-container p-3\">\n          <a [href]=\"course.link\" target=\"_blank\">view on {{course.provider.name}}</a>\n        </div>\n      </div>\n      <div class=\"aesthetic-windows-95-container p-3 mt-3\" *ngIf=\"authService.credentials | async\">\n        <small class=\"text-center aesthetic-windows-95-green-color\"\n               *ngIf=\"registered; else notRegistered\">registered</small>\n        <ng-template #notRegistered>\n          <button class=\"aesthetic-windows-95-button w-100\" *ngIf=\"!registering; else loading\"\n                  (click)=\"register(course)\">Register\n          </button>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-8 mt-3\">\n      <div class=\"aesthetic-windows-95-container p-3\">\n        <h3 class=\"font-weight-bold\">{{course.title}}</h3>\n        <p>\n          <span *ngFor=\"let author of course.authors\" class=\"mr-2\">{{author.name}}</span>\n        </p>\n        <small>{{course.description}}</small>\n      </div>\n      <div class=\"aesthetic-windows-95-container p-3 mt-3\" *ngIf=\"course.knowledges.length > 0\">\n        <h3>Topics</h3>\n        <div>\n          <span *ngFor=\"let knowledge of course.knowledges; let i = index\">\n            <ng-container *ngIf=\"i\">, </ng-container>\n            {{knowledge.name}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"d-flex flex-row justify-content-center\">\n    <div class=\"aesthetic-windows-95-loader\">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n  </div>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/courses-page/courses-page.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/courses-page/courses-page.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCoursesPageCoursesPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" *ngIf=\"courseObservable | async as page\">\n  <div class=\"text-center d-flex justify-content-around align-items-center\">\n    <img src=\"assets/img/statue-sm.png\" class=\"animated-flip\">\n    <div>\n      <h1 class=\"font-weight-bolder aesthetic-effect-text-glitch\"\n          data-glitch=\"C O U R S E S\">C O U R S E S</h1>\n      <h2 class=\"font-weight-bold aesthetic-font-modifier-outline-pink font-italic\">{{page.total}} RESULTS</h2>\n    </div>\n    <img src=\"assets/img/statue-sm.png\" class=\"animated-flip\">\n  </div>\n  <app-pager [page]=\"page\" class=\"d-block mt-3\" (pageChange)=\"goToPage($event)\"></app-pager>\n  <div class=\"row\">\n    <div class=\"col-12 col-lg-6 my-3\" *ngFor=\"let course of page.items\">\n      <app-course-preview [course]=\"course\"></app-course-preview>\n    </div>\n  </div>\n  <app-pager [page]=\"page\" class=\"d-block\" (pageChange)=\"goToPage($event)\"></app-pager>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-center align-items-center\">\n  <img src=\"assets/img/disc.png\" class=\"animated-flip\">\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/topics-page/topics-page.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/topics-page/topics-page.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTopicsPageTopicsPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" *ngIf=\"topicsObservable | async as page\">\n  <div class=\"d-flex flex-column align-items-center justify-content-center my-3\">\n    <div class=\"animated-flip\">\n      <img src=\"assets/img/palm-tree.png\" height=\"200\">\n      <img src=\"assets/img/eiffel.png\" height=\"200\">\n      <img src=\"assets/img/palm-tree.png\" height=\"200\">\n    </div>\n    <h1 class=\"font-weight-bolder aesthetic-effect-text-glitch mt-3\"\n        data-glitch=\"T O P I C S\">T O P I C S</h1>\n  </div>\n  <app-pager [page]=\"page\" (pageChange)=\"gotToPage($event)\"></app-pager>\n  <div class=\"row\">\n    <div class=\"col-6 col-md-4 col-lg-3 my-3\" *ngFor=\"let topic of page.items\">\n      <div class=\"clickable d-block aesthetic-windows-95-container p-3 text-center text-truncate\"\n           routerLink=\"/courses\" [queryParams]=\"{'topicId': topic.id}\">\n        {{topic.name}}\n      </div>\n    </div>\n  </div>\n  <app-pager [page]=\"page\" (pageChange)=\"gotToPage($event)\"></app-pager>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-page/user-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-page/user-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUserPageUserPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\n  <div *ngIf=\"registrationsObservable | async as registrations\">\n    <h3 class=\"text-center\">{{registrations.total}} Registrations</h3>\n    <div *ngFor=\"let registration of registrations.items\" class=\"row\">\n      <div class=\"col-12 my-3\">\n        <div class=\"aesthetic-windows-95-container p-3 text-center clickable\"\n             routerLink=\"/courses/{{registration.course.id}}\">\n          {{registration.course.title}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");

    var AppComponent = function AppComponent(authService) {
      _classCallCheck(this, AppComponent);

      this.authService = authService;
      this.credentialsObservable = authService.credentials;
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/navigation/navigation.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/home-page/home-page.component */
    "./src/app/pages/home-page/home-page.component.ts");
    /* harmony import */


    var _pages_courses_page_courses_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/courses-page/courses-page.component */
    "./src/app/pages/courses-page/courses-page.component.ts");
    /* harmony import */


    var _course_preview_course_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./course-preview/course-preview.component */
    "./src/app/course-preview/course-preview.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _pager_pager_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pager/pager.component */
    "./src/app/pager/pager.component.ts");
    /* harmony import */


    var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login-form/login-form.component */
    "./src/app/login-form/login-form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _pages_course_page_course_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/course-page/course-page.component */
    "./src/app/pages/course-page/course-page.component.ts");
    /* harmony import */


    var _pages_authors_page_authors_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/authors-page/authors-page.component */
    "./src/app/pages/authors-page/authors-page.component.ts");
    /* harmony import */


    var _pages_topics_page_topics_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/topics-page/topics-page.component */
    "./src/app/pages/topics-page/topics-page.component.ts");
    /* harmony import */


    var _logged_in_form_logged_in_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./logged-in-form/logged-in-form.component */
    "./src/app/logged-in-form/logged-in-form.component.ts");
    /* harmony import */


    var _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/user-page/user-page.component */
    "./src/app/pages/user-page/user-page.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"], _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"], _pages_courses_page_courses_page_component__WEBPACK_IMPORTED_MODULE_7__["CoursesPageComponent"], _course_preview_course_preview_component__WEBPACK_IMPORTED_MODULE_8__["CoursePreviewComponent"], _pager_pager_component__WEBPACK_IMPORTED_MODULE_10__["PagerComponent"], _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__["LoginFormComponent"], _pages_course_page_course_page_component__WEBPACK_IMPORTED_MODULE_13__["CoursePageComponent"], _pages_authors_page_authors_page_component__WEBPACK_IMPORTED_MODULE_14__["AuthorsPageComponent"], _pages_topics_page_topics_page_component__WEBPACK_IMPORTED_MODULE_15__["TopicsPageComponent"], _logged_in_form_logged_in_form_component__WEBPACK_IMPORTED_MODULE_16__["LoggedInFormComponent"], _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_17__["UserPageComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([{
        path: '',
        component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"]
      }, {
        path: 'courses',
        component: _pages_courses_page_courses_page_component__WEBPACK_IMPORTED_MODULE_7__["CoursesPageComponent"]
      }, {
        path: 'courses/:id',
        component: _pages_course_page_course_page_component__WEBPACK_IMPORTED_MODULE_13__["CoursePageComponent"]
      }, {
        path: 'authors',
        component: _pages_authors_page_authors_page_component__WEBPACK_IMPORTED_MODULE_14__["AuthorsPageComponent"]
      }, {
        path: 'topics',
        component: _pages_topics_page_topics_page_component__WEBPACK_IMPORTED_MODULE_15__["TopicsPageComponent"]
      }, {
        path: 'user/:id',
        component: _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_17__["UserPageComponent"]
      }])],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/course-preview/course-preview.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/course-preview/course-preview.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoursePreviewCoursePreviewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".course-img {\n  width: 128px;\n  height: 128px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlLXByZXZpZXcvY291cnNlLXByZXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQW1CO0tBQW5CLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS1wcmV2aWV3L2NvdXJzZS1wcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291cnNlLWltZyB7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/course-preview/course-preview.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/course-preview/course-preview.component.ts ***!
    \************************************************************/

  /*! exports provided: CoursePreviewComponent */

  /***/
  function srcAppCoursePreviewCoursePreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoursePreviewComponent", function () {
      return CoursePreviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CoursePreviewComponent =
    /*#__PURE__*/
    function () {
      function CoursePreviewComponent() {
        _classCallCheck(this, CoursePreviewComponent);
      }

      _createClass(CoursePreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CoursePreviewComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CoursePreviewComponent.prototype, "course", void 0);
    CoursePreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-course-preview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./course-preview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/course-preview/course-preview.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./course-preview.component.css */
      "./src/app/course-preview/course-preview.component.css")).default]
    })], CoursePreviewComponent);
    /***/
  },

  /***/
  "./src/app/logged-in-form/logged-in-form.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/logged-in-form/logged-in-form.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoggedInFormLoggedInFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZC1pbi1mb3JtL2xvZ2dlZC1pbi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/logged-in-form/logged-in-form.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/logged-in-form/logged-in-form.component.ts ***!
    \************************************************************/

  /*! exports provided: LoggedInFormComponent */

  /***/
  function srcAppLoggedInFormLoggedInFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggedInFormComponent", function () {
      return LoggedInFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var LoggedInFormComponent =
    /*#__PURE__*/
    function () {
      function LoggedInFormComponent(authService, userService) {
        _classCallCheck(this, LoggedInFormComponent);

        this.authService = authService;
        this.userService = userService;
        this.credentialsObservable = authService.credentials;
        this.meObservable = userService.meObservable;
      }

      _createClass(LoggedInFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logOut",
        value: function logOut() {
          this.authService.setCredentials(null);
        }
      }]);

      return LoggedInFormComponent;
    }();

    LoggedInFormComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    LoggedInFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logged-in-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logged-in-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/logged-in-form/logged-in-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logged-in-form.component.css */
      "./src/app/logged-in-form/logged-in-form.component.css")).default]
    })], LoggedInFormComponent);
    /***/
  },

  /***/
  "./src/app/login-form/login-form.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/login-form/login-form.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginFormLoginFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".modal {\n  right: 0;\n  top: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxRQUFRO0VBQ1IsTUFBTTtBQUNSIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwge1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/login-form/login-form.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/login-form/login-form.component.ts ***!
    \****************************************************/

  /*! exports provided: LoginFormComponent */

  /***/
  function srcAppLoginFormLoginFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () {
      return LoginFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var LoginFormComponent =
    /*#__PURE__*/
    function () {
      function LoginFormComponent(userService, authService) {
        _classCallCheck(this, LoginFormComponent);

        this.userService = userService;
        this.authService = authService;
        this.open = false;
        this.register = false;
      }

      _createClass(LoginFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.reset();
        }
      }, {
        key: "reset",
        value: function reset() {
          this.register = false;
          this.model = {
            username: ''
          };
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          if (this.loading) {
            return;
          }

          if (this.register) {
            this.loading = true;
            this.userService.create(this.model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            })).subscribe(function () {
              _this.loading = false;

              _this.reset();
            });
          } else {
            this.authService.setCredentials({
              username: this.model.username,
              password: this.model.password
            });
            this.reset();
          }
        }
      }]);

      return LoginFormComponent;
    }();

    LoginFormComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login-form/login-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-form.component.css */
      "./src/app/login-form/login-form.component.css")).default]
    })], LoginFormComponent);
    /***/
  },

  /***/
  "./src/app/navigation/navigation.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/navigation/navigation.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationNavigationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/navigation/navigation.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/navigation/navigation.component.ts ***!
    \****************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavigationComponent =
    /*#__PURE__*/
    function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.css */
      "./src/app/navigation/navigation.component.css")).default]
    })], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/pager/pager.component.css":
  /*!*******************************************!*\
    !*** ./src/app/pager/pager.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagerPagerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VyL3BhZ2VyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pager/pager.component.ts":
  /*!******************************************!*\
    !*** ./src/app/pager/pager.component.ts ***!
    \******************************************/

  /*! exports provided: PagerComponent */

  /***/
  function srcAppPagerPagerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagerComponent", function () {
      return PagerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PagerComponent =
    /*#__PURE__*/
    function () {
      function PagerComponent() {
        _classCallCheck(this, PagerComponent);

        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(PagerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changePage",
        value: function changePage(page) {
          this.pageChange.emit(page);
        }
      }, {
        key: "first",
        get: function get() {
          return !this.page || this.page.page === 0;
        }
      }, {
        key: "last",
        get: function get() {
          return !this.page || this.page.page === this.totalPages - 1;
        }
      }, {
        key: "totalPages",
        get: function get() {
          return this.page && Math.ceil(this.page.total / this.page.size);
        }
      }]);

      return PagerComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PagerComponent.prototype, "page", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PagerComponent.prototype, "pageChange", void 0);
    PagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pager',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pager.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pager/pager.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pager.component.css */
      "./src/app/pager/pager.component.css")).default]
    })], PagerComponent);
    /***/
  },

  /***/
  "./src/app/pages/authors-page/authors-page.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/pages/authors-page/authors-page.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthorsPageAuthorsPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhvcnMtcGFnZS9hdXRob3JzLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/authors-page/authors-page.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/authors-page/authors-page.component.ts ***!
    \**************************************************************/

  /*! exports provided: AuthorsPageComponent */

  /***/
  function srcAppPagesAuthorsPageAuthorsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorsPageComponent", function () {
      return AuthorsPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_author_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/author.service */
    "./src/app/services/author.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthorsPageComponent =
    /*#__PURE__*/
    function () {
      function AuthorsPageComponent(authorService) {
        _classCallCheck(this, AuthorsPageComponent);

        this.authorService = authorService;
      }

      _createClass(AuthorsPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.pageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
          this.authorsObservable = this.pageSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (p) {
            return _this2.authorService.getMany(p, 24);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.pageSubject.complete();
        }
      }, {
        key: "gotToPage",
        value: function gotToPage(page) {
          this.pageSubject.next(page);
        }
      }]);

      return AuthorsPageComponent;
    }();

    AuthorsPageComponent.ctorParameters = function () {
      return [{
        type: _services_author_service__WEBPACK_IMPORTED_MODULE_3__["AuthorService"]
      }];
    };

    AuthorsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-authors-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./authors-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authors-page/authors-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./authors-page.component.css */
      "./src/app/pages/authors-page/authors-page.component.css")).default]
    })], AuthorsPageComponent);
    /***/
  },

  /***/
  "./src/app/pages/course-page/course-page.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/pages/course-page/course-page.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCoursePageCoursePageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvdXJzZS1wYWdlL2NvdXJzZS1wYWdlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/course-page/course-page.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/course-page/course-page.component.ts ***!
    \************************************************************/

  /*! exports provided: CoursePageComponent */

  /***/
  function srcAppPagesCoursePageCoursePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoursePageComponent", function () {
      return CoursePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/course.service */
    "./src/app/services/course.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_registrations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/registrations.service */
    "./src/app/services/registrations.service.ts");

    var CoursePageComponent =
    /*#__PURE__*/
    function () {
      function CoursePageComponent(activatedRoute, courseService, registrationService, authService) {
        _classCallCheck(this, CoursePageComponent);

        this.activatedRoute = activatedRoute;
        this.courseService = courseService;
        this.registrationService = registrationService;
        this.authService = authService;
        this.courseObservable = this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (p) {
          return p.id;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (id) {
          return courseService.getById(id);
        }));
      }

      _createClass(CoursePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registering = false;
          this.registered = false;
        }
      }, {
        key: "register",
        value: function register(course) {
          var _this3 = this;

          this.registrationService.create({
            course: course
          }).subscribe(function () {
            _this3.registering = false;
            _this3.registered = true;
          });
          this.registering = true;
        }
      }]);

      return CoursePageComponent;
    }();

    CoursePageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"]
      }, {
        type: _services_registrations_service__WEBPACK_IMPORTED_MODULE_6__["RegistrationService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    CoursePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-course-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./course-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/course-page/course-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./course-page.component.css */
      "./src/app/pages/course-page/course-page.component.css")).default]
    })], CoursePageComponent);
    /***/
  },

  /***/
  "./src/app/pages/courses-page/courses-page.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/pages/courses-page/courses-page.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCoursesPageCoursesPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvdXJzZXMtcGFnZS9jb3Vyc2VzLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/courses-page/courses-page.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/courses-page/courses-page.component.ts ***!
    \**************************************************************/

  /*! exports provided: CoursesPageComponent */

  /***/
  function srcAppPagesCoursesPageCoursesPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoursesPageComponent", function () {
      return CoursesPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/course.service */
    "./src/app/services/course.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CoursesPageComponent =
    /*#__PURE__*/
    function () {
      function CoursesPageComponent(courseService, activatedRoute) {
        _classCallCheck(this, CoursesPageComponent);

        this.courseService = courseService;
        this.activatedRoute = activatedRoute;
        this.pageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.authorIdObservable = activatedRoute.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) {
          return p.authorId;
        }));
        this.topicIdObservable = activatedRoute.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) {
          return p.topicId;
        }));
      }

      _createClass(CoursesPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.courseObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.pageSubject, this.authorIdObservable, this.topicIdObservable]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 3),
                p = _ref2[0],
                aId = _ref2[1],
                tId = _ref2[2];

            return _this4.courseService.getMany(p, 20, {
              authors: aId,
              knowledges: tId
            });
          }));
        }
      }, {
        key: "goToPage",
        value: function goToPage(page) {
          this.pageSubject.next(page);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.pageSubject.complete();
        }
      }]);

      return CoursesPageComponent;
    }();

    CoursesPageComponent.ctorParameters = function () {
      return [{
        type: _services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    CoursesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-courses-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./courses-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/courses-page/courses-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./courses-page.component.css */
      "./src/app/pages/courses-page/courses-page.component.css")).default]
    })], CoursesPageComponent);
    /***/
  },

  /***/
  "./src/app/pages/home-page/home-page.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/pages/home-page/home-page.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomePageHomePageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/home-page/home-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/home-page/home-page.component.ts ***!
    \********************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppPagesHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomePageComponent =
    /*#__PURE__*/
    function () {
      function HomePageComponent() {
        _classCallCheck(this, HomePageComponent);
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePageComponent;
    }();

    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page.component.css */
      "./src/app/pages/home-page/home-page.component.css")).default]
    })], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/pages/topics-page/topics-page.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/pages/topics-page/topics-page.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTopicsPageTopicsPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RvcGljcy1wYWdlL3RvcGljcy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/topics-page/topics-page.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/topics-page/topics-page.component.ts ***!
    \************************************************************/

  /*! exports provided: TopicsPageComponent */

  /***/
  function srcAppPagesTopicsPageTopicsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopicsPageComponent", function () {
      return TopicsPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_knowledge_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/knowledge.service */
    "./src/app/services/knowledge.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var TopicsPageComponent =
    /*#__PURE__*/
    function () {
      function TopicsPageComponent(knowledgeService) {
        _classCallCheck(this, TopicsPageComponent);

        this.knowledgeService = knowledgeService;
      }

      _createClass(TopicsPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.pageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
          this.topicsObservable = this.pageSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (p) {
            return _this5.knowledgeService.getMany(p, 24);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.pageSubject.complete();
        }
      }, {
        key: "gotToPage",
        value: function gotToPage(page) {
          this.pageSubject.next(page);
        }
      }]);

      return TopicsPageComponent;
    }();

    TopicsPageComponent.ctorParameters = function () {
      return [{
        type: _services_knowledge_service__WEBPACK_IMPORTED_MODULE_3__["KnowledgeService"]
      }];
    };

    TopicsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-topics-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topics-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/topics-page/topics-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./topics-page.component.css */
      "./src/app/pages/topics-page/topics-page.component.css")).default]
    })], TopicsPageComponent);
    /***/
  },

  /***/
  "./src/app/pages/user-page/user-page.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/pages/user-page/user-page.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUserPageUserPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcGFnZS91c2VyLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/user-page/user-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/user-page/user-page.component.ts ***!
    \********************************************************/

  /*! exports provided: UserPageComponent */

  /***/
  function srcAppPagesUserPageUserPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageComponent", function () {
      return UserPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_registrations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/registrations.service */
    "./src/app/services/registrations.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserPageComponent =
    /*#__PURE__*/
    function () {
      function UserPageComponent(registrationService, activatedRoute) {
        var _this6 = this;

        _classCallCheck(this, UserPageComponent);

        this.registrationService = registrationService;
        this.activatedRoute = activatedRoute;
        this.registrationsObservable = activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (p) {
          return _this6.registrationService.getMany(0, 20, {
            userId: p.id
          });
        }));
      }

      _createClass(UserPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserPageComponent;
    }();

    UserPageComponent.ctorParameters = function () {
      return [{
        type: _services_registrations_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-page/user-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-page.component.css */
      "./src/app/pages/user-page/user-page.component.css")).default]
    })], UserPageComponent);
    /***/
  },

  /***/
  "./src/app/services/api-utils.ts":
  /*!***************************************!*\
    !*** ./src/app/services/api-utils.ts ***!
    \***************************************/

  /*! exports provided: resolveApiUrl */

  /***/
  function srcAppServicesApiUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "resolveApiUrl", function () {
      return resolveApiUrl;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! url */
    "./node_modules/url/url.js");
    /* harmony import */


    var url__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    function resolveApiUrl(path) {
      return url__WEBPACK_IMPORTED_MODULE_1__["resolve"](_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl, path);
    }
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService() {
        _classCallCheck(this, AuthService);

        var stored = localStorage.getItem('auth');
        var existing = stored == null ? null : JSON.parse(stored);
        console.log('e', existing);
        this.credentialsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](existing);
        this.credentials.subscribe(function (c) {
          return localStorage.setItem('auth', JSON.stringify(c));
        });
      }

      _createClass(AuthService, [{
        key: "setCredentials",
        value: function setCredentials(credentials) {
          this.credentialsSubject.next(credentials);
        }
      }, {
        key: "credentials",
        get: function get() {
          return this.credentialsSubject.asObservable();
        }
      }]);

      return AuthService;
    }();

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/author.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/author.service.ts ***!
    \********************************************/

  /*! exports provided: AuthorService */

  /***/
  function srcAppServicesAuthorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorService", function () {
      return AuthorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./resource.service */
    "./src/app/services/resource.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var AuthorService =
    /*#__PURE__*/
    function (_resource_service__WE) {
      _inherits(AuthorService, _resource_service__WE);

      function AuthorService(httpClient, authService) {
        _classCallCheck(this, AuthorService);

        return _possibleConstructorReturn(this, _getPrototypeOf(AuthorService).call(this, httpClient, authService, '/authors'));
      }

      return AuthorService;
    }(_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]);

    AuthorService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    AuthorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthorService);
    /***/
  },

  /***/
  "./src/app/services/course.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/course.service.ts ***!
    \********************************************/

  /*! exports provided: CourseService */

  /***/
  function srcAppServicesCourseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseService", function () {
      return CourseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./resource.service */
    "./src/app/services/resource.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var CourseService =
    /*#__PURE__*/
    function (_resource_service__WE2) {
      _inherits(CourseService, _resource_service__WE2);

      function CourseService(httpClient, authService) {
        _classCallCheck(this, CourseService);

        return _possibleConstructorReturn(this, _getPrototypeOf(CourseService).call(this, httpClient, authService, '/courses'));
      }

      return CourseService;
    }(_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]);

    CourseService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    CourseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CourseService);
    /***/
  },

  /***/
  "./src/app/services/knowledge.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/knowledge.service.ts ***!
    \***********************************************/

  /*! exports provided: KnowledgeService */

  /***/
  function srcAppServicesKnowledgeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KnowledgeService", function () {
      return KnowledgeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./resource.service */
    "./src/app/services/resource.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var KnowledgeService =
    /*#__PURE__*/
    function (_resource_service__WE3) {
      _inherits(KnowledgeService, _resource_service__WE3);

      function KnowledgeService(httpClient, authService) {
        _classCallCheck(this, KnowledgeService);

        return _possibleConstructorReturn(this, _getPrototypeOf(KnowledgeService).call(this, httpClient, authService, '/knowledges'));
      }

      return KnowledgeService;
    }(_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]);

    KnowledgeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    KnowledgeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], KnowledgeService);
    /***/
  },

  /***/
  "./src/app/services/registrations.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/registrations.service.ts ***!
    \***************************************************/

  /*! exports provided: RegistrationService */

  /***/
  function srcAppServicesRegistrationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationService", function () {
      return RegistrationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./resource.service */
    "./src/app/services/resource.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var RegistrationService =
    /*#__PURE__*/
    function (_resource_service__WE4) {
      _inherits(RegistrationService, _resource_service__WE4);

      function RegistrationService(httpClient, authService) {
        _classCallCheck(this, RegistrationService);

        return _possibleConstructorReturn(this, _getPrototypeOf(RegistrationService).call(this, httpClient, authService, '/registrations'));
      }

      return RegistrationService;
    }(_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]);

    RegistrationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    RegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RegistrationService);
    /***/
  },

  /***/
  "./src/app/services/resource.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/resource.service.ts ***!
    \**********************************************/

  /*! exports provided: ResourceService */

  /***/
  function srcAppServicesResourceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceService", function () {
      return ResourceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _api_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api-utils */
    "./src/app/services/api-utils.ts");

    var ResourceService =
    /*#__PURE__*/
    function () {
      function ResourceService(httpClient, authService, path) {
        var _this7 = this;

        _classCallCheck(this, ResourceService);

        this.httpClient = httpClient;
        this.authService = authService;
        this.path = path;
        this.authService.credentials.subscribe(function (c) {
          _this7.$authHeader = c && 'Basic ' + btoa("".concat(c.username, ":").concat(c.password));
        });
      }

      _createClass(ResourceService, [{
        key: "getMany",
        value: function getMany() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
          var filters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var filtersReduced = Object.keys(filters).filter(function (k) {
            return filters[k] != null;
          }).reduce(function (p, v) {
            return Object.assign({}, p, _defineProperty({}, v, filters[v]));
          }, {});
          return this.httpClient.get(Object(_api_utils__WEBPACK_IMPORTED_MODULE_2__["resolveApiUrl"])(this.path), {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
              fromObject: Object.assign({
                page: page.toFixed(),
                size: size.toFixed()
              }, filtersReduced)
            }),
            headers: this.authHeader && {
              Authorization: this.authHeader
            }
          });
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.httpClient.get(Object(_api_utils__WEBPACK_IMPORTED_MODULE_2__["resolveApiUrl"])("".concat(this.path, "/").concat(id)), {
            headers: this.authHeader && {
              Authorization: this.authHeader
            }
          });
        }
      }, {
        key: "create",
        value: function create(body) {
          return this.httpClient.post(Object(_api_utils__WEBPACK_IMPORTED_MODULE_2__["resolveApiUrl"])(this.path), body, {
            headers: this.authHeader && {
              Authorization: this.authHeader
            }
          });
        }
      }, {
        key: "authHeader",
        get: function get() {
          return this.$authHeader;
        }
      }]);

      return ResourceService;
    }();
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./resource.service */
    "./src/app/services/resource.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _api_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./api-utils */
    "./src/app/services/api-utils.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserService =
    /*#__PURE__*/
    function (_resource_service__WE5) {
      _inherits(UserService, _resource_service__WE5);

      function UserService(httpClient, authService) {
        var _this8;

        _classCallCheck(this, UserService);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(UserService).call(this, httpClient, authService, '/users'));
        _this8.meObservable = authService.credentials.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (c) {
          return c && "Basic ".concat(btoa("".concat(c.username, ":").concat(c.password)));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function (h) {
          return h && httpClient.get(Object(_api_utils__WEBPACK_IMPORTED_MODULE_5__["resolveApiUrl"])('/users/me/details'), {
            headers: {
              Authorization: h
            }
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])(1));
        return _this8;
      }

      return UserService;
    }(_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]);

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      serverUrl: 'http://localhost:3000'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/bassintag/Projects/DBFinalProject/web/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map