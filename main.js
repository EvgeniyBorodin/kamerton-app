(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/DTO/child-info.ts":
/*!***********************************!*\
  !*** ./src/app/DTO/child-info.ts ***!
  \***********************************/
/*! exports provided: ChildrenInfo, Child */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildrenInfo", function() { return ChildrenInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Child", function() { return Child; });
var ChildrenInfo = /** @class */ (function () {
    function ChildrenInfo() {
    }
    return ChildrenInfo;
}());

var Child = /** @class */ (function () {
    function Child() {
        this.studio = 'Театральная студия';
    }
    return Child;
}());



/***/ }),

/***/ "./src/app/DTO/person-info.ts":
/*!************************************!*\
  !*** ./src/app/DTO/person-info.ts ***!
  \************************************/
/*! exports provided: PersonInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonInfo", function() { return PersonInfo; });
var PersonInfo = /** @class */ (function () {
    function PersonInfo() {
    }
    return PersonInfo;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-request></app-request>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Камертон';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _request_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request/request.component */ "./src/app/request/request.component.ts");
/* harmony import */ var src_app_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/footer/footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _request_request_component__WEBPACK_IMPORTED_MODULE_5__["RequestComponent"],
                src_app_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n    width: 880px;\r\n    margin: auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    /* padding: 6px 0 0 0; */\r\n    /* margin-top: 80px; */\r\n    height: 46px;\r\n}\r\n\r\n.footer__company-contacts{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-right: 40px;\r\n}\r\n\r\n.footer__company-contacts-address{\r\n    font-family: \"ProximaNova-Regular\";\r\n    font-size: 10pt;\r\n    color: #ffffff;\r\n}\r\n\r\n.footer__company-contacts-address_font-style-semibold{\r\n    font-family: \"ProximaNova-Semibold\";\r\n}\r\n\r\n.footer__company-contacts-row{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n}\r\n\r\n.footer__company-contacts img{\r\n    width: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.footer__developer-contact img{\r\n    width: 40px;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"footer__company-contacts-row\">\n      <div class=\"footer__company-contacts\">\n\n          <div class=\"social-media-href\">\n              <!-- <img src=\"../../assets/images/vk-icon.png\"/> -->\n              <img src=\"assets/images/vk-icon.png\"/>\n          </div>\n          <div class=\"social-media-href\">\n              <!-- <img src=\"../../assets/images/inst-icon.png\"/> -->\n              <img src=\"assets/images/inst-icon.png\"/>\n            </div>\n   \n          </div>       \n  \n          \n\n  <div class=\"footer__company-contacts\">\n  \n      <div class=\"footer__company-contacts-address\">&copy; ЦКиД &quot;Камертон&quot; &ndash; {{currentYear}}</div>\n      <div class=\"footer__company-contacts-address\">г. Сургут, ул. Островского, 16/1</div>\n</div>\n\n<div class=\"footer__company-contacts\">\n  \n    <div class=\"footer__company-contacts-address\">help@hellokamerton.ru</div>\n    <div class=\"footer__company-contacts-address footer__company-contacts-address_font-style-semibold\">+7 3462 711-818</div>\n</div>\n\n  </div>\n  \n  <div class=\"footer__developer-contact\">\n    <!-- <img src=\"../../assets/images/ff-icon.png\"/> -->\n    <img src=\"assets/images/ff-icon.png\"/>\n  </div>  \n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        var currentDate = new Date();
        this.currentYear = currentDate.getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/request/request.component.css":
/*!***********************************************!*\
  !*** ./src/app/request/request.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".request{\r\n    min-height: calc(100vh - 74px);\r\n}\r\n.request__logo{\r\n    width: 100%;\r\n    height: 100px;\r\n    text-align: center;\r\n    margin-top: 20px;\r\n    z-index: 1;\r\n}\r\n.request__logo img{\r\n    width: 150px;\r\n    height: auto;\r\n}\r\n.request__form-container{\r\n    -webkit-transform: rotate(-1deg); \r\n    transform: rotate(-1deg);\r\n    width: 780px;\r\n    height: 415px;\r\n    background: #ffffff;\r\n    margin: 0 auto;\r\n    box-shadow: 0 0 20px rgba(0,0,0,0.5);\r\n}\r\n.request-form-finish__finish-message{\r\n    margin-top: 20px; \r\n    font-family: \"ProximaNova-Bold\";\r\n    font-size: 28pt;\r\n    color: rgb(237, 30, 121);\r\n}\r\n.request-form{\r\n    padding: 40px 80px;\r\n    -webkit-transform: rotate(1deg); \r\n    transform: rotate(1deg);\r\n}\r\n.request-form__title{\r\n    font-family: \"ProximaNova-Bold\";\r\n    font-size: 16pt;\r\n    color: rgb(237, 30, 121)\r\n}\r\n.request-form__description{\r\n    font-family: \"ProximaNova-Semibold\";\r\n    font-size: 12pt;\r\n    margin: 20px auto;\r\n}\r\n.request-form__description_font-style_italic{\r\n    font-style: italic;\r\n}\r\n.children-info-form{\r\n    margin-top: 10px;\r\n}\r\n.children-info__count-item{\r\n    display: inline-block;\r\n    font-family: \"ProximaNova-Semibold\";\r\n    font-size: 20px;\r\n    color: #bdbdbd;\r\n    width: 22px;\r\n    height: 22px;\r\n    padding: 2px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    margin: 0 16px;\r\n    cursor: pointer;\r\n    border-radius: 100%;\r\n}\r\n.children-info__count-item:hover{\r\n    border: 1px solid #bdbdbd;\r\n}\r\n.children-info__count-item_active{\r\n    border: none;\r\n    background: #26add5;\r\n    transition: 0.3s;\r\n    color: #ffffff;\r\n}\r\n.children-info__item-age{\r\n    min-width: 200px;\r\n}\r\n.children-info__item-age, .children-info__item-studio{\r\n    font-family: \"ProximaNova-Bold\";\r\n    font-size: 16pt;\r\n}\r\n.children-info__item-age_balance{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}"

/***/ }),

/***/ "./src/app/request/request.component.html":
/*!************************************************!*\
  !*** ./src/app/request/request.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"request\">\n\n  <div class=\"request__logo\">\n    <!-- <img src=\"../../assets/images/logo.png\"/> -->\n    <img src=\"assets/images/logo.png\"/>\n  </div>\n\n  <div class=\"request__form-container\">\n    <div class=\"request-form\"  *ngIf=\"!isFinish\">\n      <div class=\"request-form__title\">\n        <div *ngIf=\"isPersonalInfo\">Камертон — один из ведущих центров дополнительного образования Сургута</div>\n        <div *ngIf=\"!isPersonalInfo\">Информация о детях</div>\n      </div>\n\n      <div class=\"request-form__description\">\n          <div *ngIf=\"isPersonalInfo\">\n              Мы обучаем детей и подростков хореографии, вокалу и театральному искусству. \n              Чтобы записать ребенка в студию, ответьте на несколько вопросов и отправьте заявку.\n          </div>\n          <div *ngIf=\"!isPersonalInfo\">\n              Укажите <span class=\"request-form__description_font-style_italic\">количество ваших детей</span>, которые хотят заниматься,\n              <span class=\"request-form__description_font-style_italic\">возраст</span>\n              <br/>\n              и <span class=\"request-form__description_font-style_italic\">выберите студию</span>.\n          </div>\n        </div>\n\n        <form [formGroup]=\"personInfoForm\" *ngIf=\"isPersonalInfo && !isFinish\">\n          <div class=\"custom-row\">\n              <div class=\"custom-form-group\">\n                  <label for=\"person-info-name\">Ваше имя и фамилия</label>\n                  <input id=\"person-info-name\" formControlName=\"name\" class=\"custom-form-control\"\n                  [ngClass]=\"{'custom-form-control-error': isControlInvalid('name')}\"\n                    required placeholder=\"Имя, Фамилия\"\n                    [(ngModel)]=\"personInfo.name\">\n           \n                  <div *ngIf=\"isControlInvalid('name')\" class=\"custom-form-control-error-text\">\n                    Необходимо указать имя и фамилию!\n                  </div>\n\n              </div>\n        \n              <div class=\"custom-form-group\">\n                  <label for=\"person-info-email\">Электронная почта</label>\n                  <input id=\"person-info-email\" type=\"email\" formControlName=\"email\" class=\"custom-form-control\"\n                    required placeholder=\"your@email.ru\" [ngClass]=\"{'custom-form-control-error': isControlInvalid('email')}\"\n                    [(ngModel)]=\"personInfo.email\">\n           \n                  <div *ngIf=\"isControlInvalid('email')\" class=\"custom-form-control-error-text\">\n                    Введите почту в формате: your@email.ru!\n                  </div>\n              </div>\n          </div>\n\n            <div class=\"custom-form-group\">\n                <label for=\"person-info-phone\">Контактный телефон</label>\n                <input id=\"person-info-phone\" formControlName=\"phone\" class=\"custom-form-control\"\n                [ngClass]=\"{'custom-form-control-error': isControlInvalid('phone')}\"\n                  required placeholder=\"+7 (9XX) XXX-XX-XX\"\n                  [(ngModel)]=\"personInfo.phone\" (focusout)=\"phoneFocusOut()\">\n         \n                <div *ngIf=\"isControlInvalid('phone')\" class=\"custom-form-control-error-text\">\n                  Не забудьте ввести номер!\n                </div>\n            </div>\n      \n        </form>\n\n        <div class=\"children-info\" *ngIf=\"!isPersonalInfo && !isFinish\">\n            <div class=\"custom-form-group\">\n              <div class=\"custom-form-flex-container custom-form-flex-container_left_align\">\n                  <label class=\"custom-form-group_free-right\">Количество детей:</label>\n                  <div >\n                      <div class=\"children-info__count-item\" [ngClass]=\"{'children-info__count-item_active': childrenInfo.count===1}\" (click)=\"changeChildrenCount(1)\">1</div>\n                      <div class=\"children-info__count-item\" [ngClass]=\"{'children-info__count-item_active': childrenInfo.count===2}\" (click)=\"changeChildrenCount(2)\">2</div>\n                      <div class=\"children-info__count-item\" [ngClass]=\"{'children-info__count-item_active': childrenInfo.count===3}\" (click)=\"changeChildrenCount(3)\">3</div>\n                  </div>\n              </div>\n              <form [formGroup]=\"childrenInfoForm\" class=\"children-info-form\">\n                  <div *ngIf=\"childrenInfo.count >= 1\" class=\"children-info__item custom-row\">\n                      <div class=\"children-info__item-age\">\n                          <div class=\"children-info__item-age_balance\">\n                              <span>\n                                  1. Возраст:\n                              </span>\n                              <input type=\"number\" min=\"1\" max=\"18\" formControlName=\"firstChildAge\" class=\"custom-form-control custom-form-control_inline custom-form-control_small\" [(ngModel)]=\"firstChild.age\"\n                              [ngClass]=\"{'custom-form-control-error': isChildControlInvalid('firstChildAge')}\"/>\n                          </div>\n                          \n                          <div *ngIf=\"isChildControlValidRequired('firstChildAge')\" class=\"custom-form-control-error-text custom-form-control-error-text_italic\">\n                            *Заполните возраст!\n                          </div>\n                      </div>\n                      <div class=\"children-info__item-studio\">\n                        <span>\n                          Студия:\n                        </span>\n                        <select formControlName=\"firstChildStudio\" class=\"custom-select custom-form-control custom-form-control_inline\" [(ngModel)]=\"firstChild.studio\">\n                          <option value=\"Театральная студия\">Театральная студия</option>\n                          <option value=\"Студия вокала\">Студия вокала</option>\n                          <option value=\"Современная хореография\">Современная хореография</option>\n                          <option value=\"Спортивные бальные танцы\">Спортивные бальные танцы</option>\n                        </select>\n                      </div>\n                    </div>\n\n                    <div *ngIf=\"childrenInfo.count >= 2\" class=\"children-info__item custom-row\">\n                        <div class=\"children-info__item-age\">\n                            <div class=\"children-info__item-age_balance\">\n                                <span>\n                                    2. Возраст:\n                                </span>\n                                <input type=\"number\" min=\"1\" max=\"18\" formControlName=\"secondChildAge\" class=\"custom-form-control custom-form-control_inline custom-form-control_small\" [(ngModel)]=\"secondChild.age\"\n                                [ngClass]=\"{'custom-form-control-error': isChildControlInvalid('secondChildAge')}\"/>\n                            </div>\n                            \n                            <div *ngIf=\"isChildControlValidRequired('secondChildAge')\" class=\"custom-form-control-error-text custom-form-control-error-text_italic\">\n                              *Заполните возраст!\n                            </div>\n                        </div>\n                        <div class=\"children-info__item-studio\">\n                          <span>\n                            Студия:\n                          </span>\n                          <select formControlName=\"secondChildStudio\" class=\"custom-form-control custom-form-control_inline\" [(ngModel)]=\"secondChild.studio\">\n                            <option value=\"Театральная студия\">Театральная студия</option>\n                            <option value=\"Студия вокала\">Студия вокала</option>\n                            <option value=\"Современная хореография\">Современная хореография</option>\n                            <option value=\"Спортивные бальные танцы\">Спортивные бальные танцы</option>\n                          </select>\n                        </div>\n                      </div>\n\n                      <div *ngIf=\"childrenInfo.count===3\" class=\"children-info__item custom-row custom-row_small-margin\">\n                          <div class=\"children-info__item-age\">\n                            <div class=\"children-info__item-age_balance\">\n                                <span>\n                                    3. Возраст:\n                                </span>\n                                <input type=\"number\" min=\"1\" max=\"18\" formControlName=\"thirdChildAge\" class=\"custom-form-control custom-form-control_inline custom-form-control_small\" [(ngModel)]=\"thirdChild.age\"\n                                [ngClass]=\"{'custom-form-control-error': isChildControlInvalid('thirdChildAge')}\"/>\n                            </div>\n                            <div *ngIf=\"isChildControlValidRequired('thirdChildAge')\" class=\"custom-form-control-error-text custom-form-control-error-text_italic\">\n                                *Заполните возраст!\n                              </div>\n                            </div>\n                          <div class=\"children-info__item-studio\">\n                            <span>\n                              Студия:\n                            </span>\n                            <select formControlName=\"thirdChildStudio\" class=\"custom-form-control custom-form-control_inline\" [(ngModel)]=\"thirdChild.studio\">\n                              <option value=\"Театральная студия\">Театральная студия</option>\n                              <option value=\"Студия вокала\">Студия вокала</option>\n                              <option value=\"Современная хореография\">Современная хореография</option>\n                              <option value=\"Спортивные бальные танцы\">Спортивные бальные танцы</option>\n                            </select>\n                          </div>\n                        </div>\n\n                        <div *ngIf=\"isChildControlValidBoundAge('firstChildAge') || isChildControlValidBoundAge('secondChildAge') || isChildControlValidBoundAge('thirdChildAge')\" class=\"custom-form-control-error-text custom-form-control-error-text_italic\">\n                          *Ваш ребёнок уже не ребёнок!\n                        </div>\n                        <div *ngIf=\"isChildControlValidAge('firstChildAge') || isChildControlValidAge('secondChildAge') || isChildControlValidAge('thirdChildAge')\" class=\"custom-form-control-error-text custom-form-control-error-text_italic\">\n                            *Мы принимаем детей от 3-х до 17 лет!\n                          </div>\n              </form>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"request-form-finish request-form\" *ngIf=\"isFinish\">\n      <div class=\"request-form-finish__finish-message\">\n        Спасибо!\n        <br/>\n        Ваша заявка принята\n      </div>\n      <div class=\"request-form-finish__description request-form__description\">\n        Мы свяжемся с Вами в течение суток для уточнения информации\n      </div>\n    </div>\n\n  </div>\n  <div class=\"navigation\" *ngIf=\"!isFinish\">\n      <div *ngIf=\"!isPersonalInfo\" class=\"navigation__btn-back\" (click)=\"back()\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 93.37 59\"><defs><style>.cls-1{fill:none;stroke:#fcee21;stroke-width:4px;}.cls-2{fill:#fff;}</style></defs><g id=\"Слой_2\" data-name=\"Слой 2\"><g id=\"text_1\"><polygon class=\"cls-1\" points=\"22.84 57.5 91.87 57.5 91.87 1.5 22.84 1.5 1.87 29.5 22.84 57.5\"/><polygon class=\"cls-2\" points=\"69.17 18.56 67.05 16.44 56.11 27.38 45.17 16.44 43.05 18.56 53.99 29.5 43.05 40.44 45.17 42.56 56.11 31.62 67.05 42.56 69.17 40.44 58.24 29.5 69.17 18.56\"/></g></g></svg>\n        </div>\n    <div class=\"navigation__btn-next\" (click)=\"nextAction()\">\n      <span class=\"navigation__btn-text\">Далее</span>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 335.37 59\"><defs><style>.cls-1{fill:none;stroke:#fcee21;stroke-width:4px;}</style></defs><g><polygon class=\"cls-1\" points=\"312.79 57.5 1.5 57.5 1.5 1.5 312.79 1.5 333.5 29.5 312.79 57.5\"/></g></svg>\n    </div>\n  </div>\n\n  </div>\n\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/request/request.component.ts":
/*!**********************************************!*\
  !*** ./src/app/request/request.component.ts ***!
  \**********************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _DTO_person_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DTO/person-info */ "./src/app/DTO/person-info.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _DTO_child_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DTO/child-info */ "./src/app/DTO/child-info.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_inputmask_dist_inputmask_jquery_inputmask_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/inputmask/dist/inputmask/jquery.inputmask.js */ "./node_modules/inputmask/dist/inputmask/jquery.inputmask.js");
/* harmony import */ var _node_modules_inputmask_dist_inputmask_jquery_inputmask_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_inputmask_dist_inputmask_jquery_inputmask_js__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RequestComponent = /** @class */ (function () {
    function RequestComponent(fb, http, titleService) {
        this.fb = fb;
        this.http = http;
        this.titleService = titleService;
        this.isPersonalInfo = true;
        this.isFinish = false;
        this.personInfo = new _DTO_person_info__WEBPACK_IMPORTED_MODULE_2__["PersonInfo"]();
        this.childrenInfo = new _DTO_child_info__WEBPACK_IMPORTED_MODULE_4__["ChildrenInfo"]();
        this.personInfoTitle = 'Камертон - заявка. Персональная информация';
        this.childrenInfoTitle = 'Камертон - заявка. Информация о детях';
        this.finishTitle = 'Камертон - заявка. Спасибо, что оставили заявку на обучение!';
        this.childrenInfo.count = 1;
        this.firstChild = new _DTO_child_info__WEBPACK_IMPORTED_MODULE_4__["Child"]();
        this.secondChild = new _DTO_child_info__WEBPACK_IMPORTED_MODULE_4__["Child"]();
        this.thirdChild = new _DTO_child_info__WEBPACK_IMPORTED_MODULE_4__["Child"]();
    }
    RequestComponent.prototype.ngOnInit = function () {
        if (this.isPersonalInfo) {
            this.titleService.setTitle(this.personInfoTitle);
        }
        else {
            this.titleService.setTitle(this.childrenInfoTitle);
        }
        this.initForm();
    };
    RequestComponent.prototype.initForm = function () {
        this.personInfoForm = this.fb.group({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.personInfo.name, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.personInfo.email, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
            ]),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.personInfo.phone, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])
        });
        this.childrenInfoForm = this.fb.group({
            'firstChildAge': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(17)]),
            'firstChildStudio': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'secondChildAge': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(17)]),
            'secondChildStudio': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'thirdChildAge': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(17)]),
            'thirdChildStudio': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.childrenInfoForm.controls['secondChildAge'].disable();
        this.childrenInfoForm.controls['thirdChildAge'].disable();
    };
    RequestComponent.prototype.ngDoCheck = function () {
        jquery__WEBPACK_IMPORTED_MODULE_6__('#person-info-phone').inputmask({ 'mask': '+7 (999) 999-99-99' });
    };
    RequestComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.personInfoForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    RequestComponent.prototype.isChildControlValidRequired = function (controlName) {
        var control = this.childrenInfoForm.controls[controlName];
        var controlErrors = control.errors;
        if (controlErrors != null) {
            return controlErrors['required'] && control.touched;
        }
        else {
            return false;
        }
    };
    RequestComponent.prototype.isChildControlValidBoundAge = function (controlName) {
        var control = this.childrenInfoForm.controls[controlName];
        var controlErrors = control.errors;
        if (controlErrors != null) {
            return !controlErrors['required'] && !controlErrors['min'] && control.touched;
        }
        else {
            return false;
        }
    };
    RequestComponent.prototype.isChildControlValidAge = function (controlName) {
        var control = this.childrenInfoForm.controls[controlName];
        var controlErrors = control.errors;
        if (controlErrors != null) {
            return !controlErrors['required'] && !controlErrors['max'] && control.touched;
        }
        else {
            return false;
        }
    };
    RequestComponent.prototype.isChildControlInvalid = function (controlName) {
        var control = this.childrenInfoForm.controls[controlName];
        return control.invalid && control.touched;
    };
    RequestComponent.prototype.changeChildrenCount = function (count) {
        this.childrenInfo.count = count;
        if (count === 1) {
            this.childrenInfoForm.controls['secondChildAge'].disable();
            this.childrenInfoForm.controls['thirdChildAge'].disable();
        }
        else if (count === 2) {
            this.childrenInfoForm.controls['secondChildAge'].enable();
            this.childrenInfoForm.controls['thirdChildAge'].disable();
        }
        else if (count === 3) {
            this.childrenInfoForm.controls['secondChildAge'].enable();
            this.childrenInfoForm.controls['thirdChildAge'].enable();
        }
    };
    RequestComponent.prototype.nextAction = function () {
        var _this = this;
        if (this.isPersonalInfo) {
            if (this.personInfoForm.valid) {
                this.isPersonalInfo = false;
                this.titleService.setTitle(this.childrenInfoTitle);
            }
            else {
                Object.keys(this.personInfoForm.controls).forEach(function (control) {
                    _this.personInfoForm.controls[control].markAsTouched();
                });
            }
        }
        else {
            if (this.childrenInfoForm.valid) {
                this.isFinish = true;
                this.titleService.setTitle(this.finishTitle);
                setTimeout(function (timeout) {
                    _this.personInfo = new _DTO_person_info__WEBPACK_IMPORTED_MODULE_2__["PersonInfo"]();
                    _this.firstChild = new _DTO_child_info__WEBPACK_IMPORTED_MODULE_4__["Child"]();
                    _this.secondChild = new _DTO_child_info__WEBPACK_IMPORTED_MODULE_4__["Child"]();
                    _this.thirdChild = new _DTO_child_info__WEBPACK_IMPORTED_MODULE_4__["Child"]();
                    _this.childrenInfo.count = 1;
                    _this.isFinish = false;
                    _this.isPersonalInfo = true;
                    Object.keys(_this.personInfoForm.controls).forEach(function (control) {
                        _this.personInfoForm.controls[control].markAsUntouched();
                    });
                    Object.keys(_this.childrenInfoForm.controls).forEach(function (control) {
                        _this.childrenInfoForm.controls[control].markAsUntouched();
                    });
                }, 5000);
            }
            else {
                Object.keys(this.childrenInfoForm.controls).forEach(function (control) {
                    _this.childrenInfoForm.controls[control].markAsTouched();
                });
            }
        }
    };
    RequestComponent.prototype.back = function () {
        this.isPersonalInfo = true;
        this.titleService.setTitle(this.personInfoTitle);
    };
    RequestComponent.prototype.phoneFocusOut = function () {
        if (this.personInfo.phone.indexOf('_') >= 0) {
            this.personInfoForm.controls['phone'].setValue('');
        }
    };
    RequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request',
            template: __webpack_require__(/*! ./request.component.html */ "./src/app/request/request.component.html"),
            styles: [__webpack_require__(/*! ./request.component.css */ "./src/app/request/request.component.css")],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Users\Денис\Downloads\kamerton-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map