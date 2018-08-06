webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nav_bar_nav_bar_component__ = __webpack_require__("./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_add_book_service__ = __webpack_require__("./src/app/services/add-book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_upload_image_service__ = __webpack_require__("./src/app/services/upload-image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_get_book_list_service__ = __webpack_require__("./src/app/services/get-book-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_get_book_service__ = __webpack_require__("./src/app/services/get-book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_edit_book_service__ = __webpack_require__("./src/app/services/edit-book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_remove_book_service__ = __webpack_require__("./src/app/services/remove-book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_add_new_book_add_new_book_component__ = __webpack_require__("./src/app/components/add-new-book/add-new-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_book_list_book_list_component__ = __webpack_require__("./src/app/components/book-list/book-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_view_book_view_book_component__ = __webpack_require__("./src/app/components/view-book/view-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_edit_book_edit_book_component__ = __webpack_require__("./src/app/components/edit-book/edit-book.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_add_new_book_add_new_book_component__["a" /* AddNewBookComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_book_list_book_list_component__["a" /* BookListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_book_list_book_list_component__["b" /* DialogResultExampleDialog */],
            __WEBPACK_IMPORTED_MODULE_20__components_view_book_view_book_component__["a" /* ViewBookComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_edit_book_edit_book_component__["a" /* EditBookComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_12__services_add_book_service__["a" /* AddBookService */],
            __WEBPACK_IMPORTED_MODULE_13__services_upload_image_service__["a" /* UploadImageService */],
            __WEBPACK_IMPORTED_MODULE_14__services_get_book_list_service__["a" /* GetBookListService */],
            __WEBPACK_IMPORTED_MODULE_15__services_get_book_service__["a" /* GetBookService */],
            __WEBPACK_IMPORTED_MODULE_16__services_edit_book_service__["a" /* EditBookService */],
            __WEBPACK_IMPORTED_MODULE_17__services_remove_book_service__["a" /* RemoveBookService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_19__components_book_list_book_list_component__["b" /* DialogResultExampleDialog */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_add_new_book_add_new_book_component__ = __webpack_require__("./src/app/components/add-new-book/add-new-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_book_list_book_list_component__ = __webpack_require__("./src/app/components/book-list/book-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_view_book_view_book_component__ = __webpack_require__("./src/app/components/view-book/view-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_edit_book_edit_book_component__ = __webpack_require__("./src/app/components/edit-book/edit-book.component.ts");






var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'addNewBook',
        component: __WEBPACK_IMPORTED_MODULE_2__components_add_new_book_add_new_book_component__["a" /* AddNewBookComponent */]
    },
    {
        path: 'bookList',
        component: __WEBPACK_IMPORTED_MODULE_3__components_book_list_book_list_component__["a" /* BookListComponent */]
    },
    {
        path: 'viewBook/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__components_view_book_view_book_component__["a" /* ViewBookComponent */]
    },
    {
        path: 'editBook/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__components_edit_book_edit_book_component__["a" /* EditBookComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "./src/app/components/add-new-book/add-new-book.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-new-book/add-new-book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div [hidden]=\"bookAdded\">\n\t\t<h3 style=\"margin-top: 30px;\">New Book Information <span style=\"font-size:small\">* is a required field</span></h3>\n\n\t\t<form (ngSubmit)=\"onSubmit()\">\n\t\t\t<mat-grid-list cols=\"4\" rowHeight=\"70px\">\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\" class=\"mat-primary\"  >\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"title\" type=\"text\" required [(ngModel)]=\"newBook.title\" name=\"title\" placeholder=\"Title\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t</mat-grid-list>\n\t\t\t\n\t\t\t<mat-grid-list cols=\"4\" rowHeight=\"70px\">\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"author\" type=\"text\" required [(ngModel)]=\"newBook.author\" name=\"author\" placeholder=\"Author\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\" >\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"publisher\" type=\"text\" required [(ngModel)]=\"newBook.publisher\" name=\"publisher\" placeholder=\"Publisher\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t</mat-grid-list>\n\n\t\t\t<mat-grid-list cols=\"4\" rowHeight=\"70px\">\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"publicationDate\" type=\"date\" required [(ngModel)]=\"newBook.publicationDate\" name=\"publicationDate\" placeholder=\"PublicationDate\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t</mat-grid-list>\n\n\t\t\t<mat-grid-list cols=\"4\" rowHeight=\"70px\">\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<mat-select placeholder=\"Category\" id=\"category\" name=\"category\" [(ngModel)]=\"newBook.category\">\n\t\t\t\t\t\t\t<mat-option value=\"Management\">Management</mat-option>\n\t\t\t\t\t\t\t<mat-option value=\"Fiction\">Fiction</mat-option>\n\t\t\t\t\t\t\t<mat-option value=\"Engineering\">Engineering</mat-option>\n\t\t\t\t\t\t\t<mat-option value=\"Programming\">Programming</mat-option>\n\t\t\t\t\t\t\t<mat-option value=\"Arts &amp; Literature\">Arts &amp; Literature</mat-option>\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<mat-select placeholder=\"Format\" id=\"format\" name=\"format\" [(ngModel)]=\"newBook.format\">\n\t\t\t\t\t\t\t<mat-option value=\"paperback\">Paperback</mat-option>\n\t\t\t\t\t\t\t<mat-option value=\"hardcover\">Hardcover</mat-option>\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t</mat-grid-list>\n\n\t\t\t<mat-grid-list cols=\"4\" rowHeight=\"70px\">\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"pageNumber\" type=\"number\" [(ngModel)]=\"newBook.numberOfPages\" name=\"numberOfPages\" step=\"1\" placeholder=\"Number of Pages\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"isbn\" type=\"text\" required [(ngModel)]=\"newBook.isbn\" name=\"isbn\" placeholder=\"ISBN\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t</mat-grid-list>\n\n\t\t\t<mat-grid-list cols=\"4\" rowHeight=\"70px\">\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"listPrice\" type=\"number\" [(ngModel)]=\"newBook.listPrice\" name=\"listPrice\" step=\"0.01\" placeholder=\"List Price\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"ourPrice\" type=\"number\" [(ngModel)]=\"newBook.ourPrice\" name=\"ourPrice\" step=\"0.01\" placeholder=\"Our Price\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t</mat-grid-list>\n\n\t\t\t<mat-grid-list cols=\"4\" rowHeight=\"70px\">\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"shippingWeight\" type=\"number\" [(ngModel)]=\"newBook.shippingWeight\" name=\"shippingWeight\" step=\"0.01\" placeholder=\"Shipping Weight\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<mat-select placeholder=\"Language\" id=\"language\" name=\"language\" [(ngModel)]=\"newBook.language\">\n\t\t\t\t\t\t\t<mat-option value=\"english\">English</mat-option>\n\t\t\t\t\t\t\t<mat-option value=\"spanish\">Spanish</mat-option>\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t</mat-grid-list>\n\n\t\t\t<mat-grid-list cols=\"4\" rowHeight=\"70px\">\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"inStockNumber\" type=\"number\" [(ngModel)]=\"newBook.inStockNumber\" name=\"inStockNumber\" step=\"0.01\" placeholder=\"Numbers In Stock\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t&nbsp;\n\t\t\t\t\t<mat-slide-toggle \n\t\t\t\t\t[color]=\"color\" \n\t\t\t\t\t[checked]=\"checked\" \n\t\t\t\t\t[disabled]=\"disabled\" \n\t\t\t\t\t[(ngModel)]=\"newBook.active\" name=\"active\">Active</mat-slide-toggle>\n\t\t\t\t</mat-grid-tile>\n\t\t\t</mat-grid-list>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<textarea matInput id=\"description\" [(ngModel)]=\"newBook.description\" name=\"description\" placeholder=\"Description\" required></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<br>\n\t\t\tImage &nbsp;\n\t\t\t<input id=\"tile\" type=\"file\" id=\"bookImage\" name=\"bookImage\" (change)=\"uploadImageService.fileChangeEvent($event)\">\n\t\t\t<br><br>\n\n\t\t\t<mat-grid-list cols=\"20\" rowHeight=\"70px\">\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t\t<button class=\"mat-primary\" mat-raised-button type=\"submit\">Add Book</button>\n\t\t\t\t</mat-grid-tile>\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<a class=\"mat-warn\" mat-raised-button routerLink=\"/\">Cancel</a>\n\t\t\t\t</mat-grid-tile>\n\t\t\t</mat-grid-list>\n\t\t</form>\n\t</div>\n\t<div class=\"row\" [hidden]=\"!bookAdded\">\n\t\t<h3>Book added successfully!</h3>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/add-new-book/add-new-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__("./src/app/models/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_add_book_service__ = __webpack_require__("./src/app/services/add-book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_upload_image_service__ = __webpack_require__("./src/app/services/upload-image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddNewBookComponent = (function () {
    function AddNewBookComponent(addBookService, uploadImageService) {
        this.addBookService = addBookService;
        this.uploadImageService = uploadImageService;
        this.newBook = new __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */]();
    }
    AddNewBookComponent.prototype.onSubmit = function () {
        var _this = this;
        this.addBookService.sendBook(this.newBook).subscribe(function (res) {
            _this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
            _this.bookAdded = true;
            _this.newBook = new __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */]();
            _this.newBook.active = true;
            _this.newBook.category = "Management";
            _this.newBook.language = "english";
            _this.newBook.format = "paperback";
        }, function (error) {
            console.log(error);
        });
    };
    AddNewBookComponent.prototype.ngOnInit = function () {
        this.bookAdded = false;
        this.newBook.active = true;
        this.newBook.category = "Management";
        this.newBook.language = "english";
        this.newBook.format = "paperback";
    };
    return AddNewBookComponent;
}());
AddNewBookComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-new-book',
        template: __webpack_require__("./src/app/components/add-new-book/add-new-book.component.html"),
        styles: [__webpack_require__("./src/app/components/add-new-book/add-new-book.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_add_book_service__["a" /* AddBookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_add_book_service__["a" /* AddBookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_upload_image_service__["a" /* UploadImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_upload_image_service__["a" /* UploadImageService */]) === "function" && _b || Object])
], AddNewBookComponent);

var _a, _b;
//# sourceMappingURL=add-new-book.component.js.map

/***/ }),

/***/ "./src/app/components/book-list/book-list.component.css":
/***/ (function(module, exports) {

module.exports = "table {\r\n  border-collapse: separate;\r\n  border-spacing: 0;\r\n  color: #4a4a4d;\r\n  font: 14px/1.4 \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\nth,\r\ntd {\r\n  padding: 10px 15px;\r\n  vertical-align: middle;\r\n}\r\nthead {\r\n  background: #395870;\r\n  color: #fff;\r\n}\r\nth {\r\n  font-weight: bold;\r\n}\r\nth:first-child {\r\n  text-align: left;\r\n}\r\ntbody tr:nth-child(even) {\r\n  background: #f0f0f2;\r\n}\r\ntd {\r\n  border-bottom: 1px solid #cecfd5;\r\n  border-right: 1px solid #cecfd5;\r\n}\r\ntd:first-child {\r\n  border-left: 1px solid #cecfd5;\r\n}\r\n.book-title {\r\n  color: #395870;\r\n  display: block;\r\n}\r\n.item-stock,\r\n.item-qty {\r\n  text-align: center;\r\n}\r\n.item-price {\r\n  text-align: right;\r\n}\r\n.item-multiple {\r\n  display: block;\r\n}\r\ntfoot {\r\n  text-align: right;\r\n}\r\ntfoot tr:last-child {\r\n  background: #f0f0f2;\r\n}"

/***/ }),

/***/ "./src/app/components/book-list/book-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"table-responsive\" style=\"margin-top: 30px;\">\n\t\t<table id=\"bookListTable\" class=\"table bordered highlight\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>\n\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"updateSelected($event.target.checked)\" />\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>Title</th>\n\t\t\t\t\t<th>Author</th>\n\t\t\t\t\t<th>Category</th>\n\t\t\t\t\t<th>List Price</th>\n\t\t\t\t\t<th>Our Price</th>\n\t\t\t\t\t<th>Active?</th>\n\t\t\t\t\t<th>Operation</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor = \"let book of bookList\">\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<input hidden=\"hidden\" name=\"id\" />\n\t\t\t\t\t\t<input type=\"checkbox\" [checked]=\"allChecked\" (change)=\"updateRemoveBookList($event.target.checked, book)\" />\n\t\t\t\t\t</td>\n\t\t\t\t\t<td><a (click)=\"onSelect(book)\" style=\"cursor:pointer\">{{book.title}}</a></td>\n\t\t\t\t\t<td>{{book.author}}</td>\n\t\t\t\t\t<td>{{book.category}}</td>\n\t\t\t\t\t<td>{{book.listPrice}}</td>\n\t\t\t\t\t<td>{{book.ourPrice}}</td>\n\t\t\t\t\t<td>{{book.active}}</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<input hidden=\"hidden\" name=\"id\" />\n\t\t\t\t\t\t<button mat-button (click)=\"openDialog(book)\" value=\"delete\"><span class=\"fa fa-times\"></span> delete</button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t<button mat-raised-button class=\"mat-warn\" id=\"deleteSelected\" (click)=\"removeSelectedBooks()\">Delete Selected</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/book-list/book-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogResultExampleDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_get_book_list_service__ = __webpack_require__("./src/app/services/get-book-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_remove_book_service__ = __webpack_require__("./src/app/services/remove-book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookListComponent = (function () {
    function BookListComponent(getBookListService, removeBookService, router, dialog) {
        this.getBookListService = getBookListService;
        this.removeBookService = removeBookService;
        this.router = router;
        this.dialog = dialog;
        this.removeBookList = new Array();
    }
    BookListComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
        this.router.navigate(['/viewBook', this.selectedBook.id]);
    };
    BookListComponent.prototype.openDialog = function (book) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogResultExampleDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "yes") {
                _this.removeBookService.sendBook(book.id).subscribe(function (res) {
                    console.log(res);
                    _this.getBookList();
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    BookListComponent.prototype.updateRemoveBookList = function (checked, book) {
        if (checked) {
            this.removeBookList.push(book);
        }
        else {
            this.removeBookList.splice(this.removeBookList.indexOf(book), 1);
        }
    };
    BookListComponent.prototype.updateSelected = function (checked) {
        if (checked) {
            this.allChecked = true;
            this.removeBookList = this.bookList.slice();
        }
        else {
            this.allChecked = false;
            this.removeBookList = [];
        }
    };
    BookListComponent.prototype.removeSelectedBooks = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogResultExampleDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == "yes") {
                for (var _i = 0, _a = _this.removeBookList; _i < _a.length; _i++) {
                    var book = _a[_i];
                    _this.removeBookService.sendBook(book.id).subscribe(function (res) {
                    }, function (err) {
                    });
                }
                location.reload();
            }
        });
    };
    BookListComponent.prototype.getBookList = function () {
        var _this = this;
        this.getBookListService.getBookList().subscribe(function (res) {
            console.log(res.json());
            _this.bookList = res.json();
        }, function (error) {
            console.log(error);
        });
    };
    BookListComponent.prototype.ngOnInit = function () {
        this.getBookList();
    };
    return BookListComponent;
}());
BookListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-book-list',
        template: __webpack_require__("./src/app/components/book-list/book-list.component.html"),
        styles: [__webpack_require__("./src/app/components/book-list/book-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_get_book_list_service__["a" /* GetBookListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_get_book_list_service__["a" /* GetBookListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_remove_book_service__["a" /* RemoveBookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_remove_book_service__["a" /* RemoveBookService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatDialog */]) === "function" && _d || Object])
], BookListComponent);

var DialogResultExampleDialog = (function () {
    function DialogResultExampleDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return DialogResultExampleDialog;
}());
DialogResultExampleDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dialog-result-example-dialog',
        template: __webpack_require__("./src/app/components/book-list/dialog-result-example-dialog.html")
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatDialogRef */]) === "function" && _e || Object])
], DialogResultExampleDialog);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=book-list.component.js.map

/***/ }),

/***/ "./src/app/components/book-list/dialog-result-example-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Confirm Deleting</h1>\r\n<div mat-dialog-content>Are you sure you want to delete?</div>\r\n<div mat-dialog-actions>\r\n\t<button mat-button (click)=\"dialogRef.close('yes')\">Yes</button>\r\n\t<button mat-button (click)=\"dialogRef.close('no')\">No</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/edit-book/edit-book.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-book/edit-book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div [hidden]=\"bookUpdated\">\n\t\t<h3 style=\"margin-top: 30px;\">Update Book Information <span style=\"font-size:small\">* is a required field</span></h3>\n\n\t\t<form (ngSubmit)=\"onSubmit()\">\n\t\t\t<mat-grid-list cols=\"4\" rowHeight=\"70px\">\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\" class=\"mat-primary\"  >\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"title\" type=\"text\" required [(ngModel)]=\"book.title\" name=\"title\" placeholder=\"Title\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t</mat-grid-list>\n\t\t\t\n\t\t\t<mat-grid-list cols=\"4\" rowHeight=\"70px\">\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"author\" type=\"text\" required [(ngModel)]=\"book.author\" name=\"author\" placeholder=\"Author\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\" >\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"publisher\" type=\"text\" required [(ngModel)]=\"book.publisher\" name=\"publisher\" placeholder=\"Publisher\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t</mat-grid-list>\n\n\t\t\t<mat-grid-list cols=\"4\" rowHeight=\"70px\">\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"publicationDate\" type=\"date\" required [(ngModel)]=\"book.publicationDate\" name=\"publicationDate\" placeholder=\"PublicationDate\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t</mat-grid-list>\n\n\t\t\t<mat-grid-list cols=\"4\" rowHeight=\"70px\">\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<mat-select placeholder=\"Category\" id=\"category\" name=\"category\" [(ngModel)]=\"book.category\">\n\t\t\t\t\t\t\t<mat-option value=\"Management\">Management</mat-option>\n\t\t\t\t\t\t\t<mat-option value=\"Fiction\">Fiction</mat-option>\n\t\t\t\t\t\t\t<mat-option value=\"Engineering\">Engineering</mat-option>\n\t\t\t\t\t\t\t<mat-option value=\"Programming\">Programming</mat-option>\n\t\t\t\t\t\t\t<mat-option value=\"Arts &amp; Literature\">Arts &amp; Literature</mat-option>\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<mat-select placeholder=\"Format\" id=\"format\" name=\"format\" [(ngModel)]=\"book.format\">\n\t\t\t\t\t\t\t<mat-option value=\"paperback\">Paperback</mat-option>\n\t\t\t\t\t\t\t<mat-option value=\"hardcover\">Hardcover</mat-option>\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t</mat-grid-list>\n\n\t\t\t<mat-grid-list cols=\"4\" rowHeight=\"70px\">\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"pageNumber\" type=\"number\" [(ngModel)]=\"book.numberOfPages\" name=\"numberOfPages\" step=\"1\" placeholder=\"Number of Pages\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"isbn\" type=\"text\" required [(ngModel)]=\"book.isbn\" name=\"isbn\" placeholder=\"ISBN\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t</mat-grid-list>\n\n\t\t\t<mat-grid-list cols=\"4\" rowHeight=\"70px\">\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"listPrice\" type=\"number\" [(ngModel)]=\"book.listPrice\" name=\"listPrice\" step=\"0.01\" placeholder=\"List Price\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"ourPrice\" type=\"number\" [(ngModel)]=\"book.ourPrice\" name=\"ourPrice\" step=\"0.01\" placeholder=\"Our Price\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t</mat-grid-list>\n\n\t\t\t<mat-grid-list cols=\"4\" rowHeight=\"70px\">\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"shippingWeight\" type=\"number\" [(ngModel)]=\"book.shippingWeight\" name=\"shippingWeight\" step=\"0.01\" placeholder=\"Shipping Weight\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<mat-select placeholder=\"Language\" id=\"language\" name=\"language\" [(ngModel)]=\"book.language\">\n\t\t\t\t\t\t\t<mat-option value=\"english\">English</mat-option>\n\t\t\t\t\t\t\t<mat-option value=\"spanish\">Spanish</mat-option>\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t</mat-grid-list>\n\n\t\t\t<mat-grid-list cols=\"4\" rowHeight=\"70px\">\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput id=\"inStockNumber\" type=\"number\" [(ngModel)]=\"book.inStockNumber\" name=\"inStockNumber\" step=\"0.01\" placeholder=\"Numbers In Stock\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-grid-tile>\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t&nbsp;\n\t\t\t\t\t<mat-slide-toggle \n\t\t\t\t\t[color]=\"color\" \n\t\t\t\t\t[checked]=\"checked\" \n\t\t\t\t\t[disabled]=\"disabled\" \n\t\t\t\t\t[(ngModel)]=\"book.active\" name=\"active\">Active</mat-slide-toggle>\n\t\t\t\t</mat-grid-tile>\n\t\t\t</mat-grid-list>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<textarea matInput id=\"description\" [(ngModel)]=\"book.description\" name=\"description\" placeholder=\"Description\" required></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<br>\n\t\t\tImage &nbsp;\n\t\t\t<input id=\"tile\" type=\"file\" id=\"bookImage\" name=\"bookImage\" (change)=\"uploadImageService.fileChangeEvent($event)\">\n\t\t\t<br><br>\n\n\t\t\t<mat-grid-list cols=\"20\" rowHeight=\"70px\">\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t\t<button class=\"mat-primary\" mat-raised-button type=\"submit\">Edit Book</button>\n\t\t\t\t</mat-grid-tile>\n\t\t\t\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t\t\t\t<a class=\"mat-warn\" mat-raised-button routerLink=\"/\">Cancel</a>\n\t\t\t\t</mat-grid-tile>\n\t\t\t</mat-grid-list>\n\t\t</form>\n\t</div>\n\t<div class=\"row\" [hidden]=\"!bookUpdated\">\n\t\t<h3>Book updated successfully!</h3>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/edit-book/edit-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__("./src/app/models/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_upload_image_service__ = __webpack_require__("./src/app/services/upload-image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_get_book_service__ = __webpack_require__("./src/app/services/get-book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_edit_book_service__ = __webpack_require__("./src/app/services/edit-book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditBookComponent = (function () {
    function EditBookComponent(uploadImageService, editBookService, getBookService, route, router) {
        this.uploadImageService = uploadImageService;
        this.editBookService = editBookService;
        this.getBookService = getBookService;
        this.route = route;
        this.router = router;
        this.book = new __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */]();
    }
    EditBookComponent.prototype.onSubmit = function () {
        var _this = this;
        this.editBookService.sendBook(this.book).subscribe(function (data) {
            _this.uploadImageService.modify(JSON.parse(JSON.parse(JSON.stringify(data))._body).id);
            _this.bookUpdated = true;
        }, function (error) {
            console.log(error);
        });
    };
    EditBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.bookId = Number.parseInt(params['id']);
        });
        this.getBookService.getBook(this.bookId).subscribe(function (res) {
            _this.book = res.json();
        }, function (error) {
            console.log(error);
        });
    };
    return EditBookComponent;
}());
EditBookComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-book',
        template: __webpack_require__("./src/app/components/edit-book/edit-book.component.html"),
        styles: [__webpack_require__("./src/app/components/edit-book/edit-book.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_upload_image_service__["a" /* UploadImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_upload_image_service__["a" /* UploadImageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_edit_book_service__["a" /* EditBookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_edit_book_service__["a" /* EditBookService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_get_book_service__["a" /* GetBookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_get_book_service__["a" /* GetBookService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _e || Object])
], EditBookComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-book.component.js.map

/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div [hidden]=\"loggedIn\">\n\t\t<mat-grid-list cols=\"6\" [style.margin-top]=\"'20px'\">\n\t\t\t<mat-grid-tile [colspan]=\"1\"></mat-grid-tile>\n\t\t\t<mat-grid-tile [colspan]=\"4\">\n\t\t\t\t<form (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t<mat-form-field class=\"full-width\">\n\t\t\t\t\t\t<input type=\"text\" matInput  [(ngModel)]=\"credential.username\" name=\"username\" id='username' placeholder=\"Your Username\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field class=\"full-width\">\n\t\t\t\t\t\t<input type=\"password\" matInput  [(ngModel)]=\"credential.password\" name=\"password\" id='password' placeholder=\"Your Password\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<button mat-raised-button type=\"submit\" class=\"mat-primary\">Login</button>\n\t\t\t\t</form>\n\t\t\t</mat-grid-tile>\n\t\t</mat-grid-list>\n\t</div>\n\t<div [hidden]=\"!loggedIn\">\n\t\t<h2>You have loggedin!</h2>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.credential = { 'username': '', 'password': '' };
        this.loggedIn = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(function (res) {
            console.log(res);
            localStorage.setItem("xAuthToken", res.json().token); //to store in browser memory
            _this.loggedIn = true;
            location.reload(); //refresh page
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.checkSession().subscribe(function (res) {
            _this.loggedIn = true;
        }, function (error) {
            _this.loggedIn = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/components/login/login.component.html"),
        styles: [__webpack_require__("./src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports) {

module.exports = ".example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class= \"mat-primary\">\n\t<h3 [style.color]=\"'white'\">ADMIN PORTAL</h3>\n\t<span class=\"example-spacer\"></span>\n\t<span [hidden]=\"!loggedIn\"><a mat-button routerLink=\"/bookList\">View Book List</a></span>\n\t<span [hidden]=\"!loggedIn\"><a mat-button routerLink=\"/addNewBook\">Add a Book</a></span>\n\t<span [hidden]=\"!loggedIn\"><a mat-button (click)=\"logout()\">Logout</a></span>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = (function () {
    function NavBarComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.loggedIn = false;
    }
    NavBarComponent.prototype.toggleDisplay = function () {
        this.loggedIn = !this.loggedIn;
    };
    NavBarComponent.prototype.logout = function () {
        this.loginService.logout().subscribe(function (res) {
            location.reload();
        }, function (error) {
            console.log(error);
        });
        this.router.navigate(['/']);
    };
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.checkSession().subscribe(function (res) {
            _this.loggedIn = true;
        }, function (error) {
            _this.loggedIn = false;
        });
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nav-bar',
        template: __webpack_require__("./src/app/components/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("./src/app/components/nav-bar/nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavBarComponent);

var _a, _b;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "./src/app/components/view-book/view-book.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/view-book/view-book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div style=\"margin-top: 20px;\">\n\t\t<a routerLink=\"/bookList\"><i class=\"fa fa-long-arrow-left\"></i>\tGo Back</a>\n\t\t<span> / </span>\n\t\t<a (click)=\"onSelect(book)\" style=\"cursor: pointer\">Edit</a>\n\t</div>\n\t<mat-grid-list cols=\"9\" rowHeight=\"100px\">\n\t\t<mat-grid-tile [colspan]=\"3\" [rowspan]=\"5\" class=\"mat-primary\"  >\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<img [src]=\"'/image/book/'+book.id+'.png'\"\n\t\t\t\t\tclass= \"responsive-img\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</mat-grid-tile>\n\t\t<mat-grid-tile [colspan]=\"6\" class=\"mat-primary\"  >\n\t\t\t<h3>{{book.title}}</h3>\n\t\t</mat-grid-tile>\n\t\t<mat-grid-tile [colspan]=\"3\" [rowspan]=\"3\" class=\"mat-primary\"  >\n\t\t\t<mat-list>\n\t\t\t\t<mat-list-item>\n\t\t\t\t\t<p><strong>Author: </strong>{{book.author}}</p>\n\t\t\t\t</mat-list-item>\n\t\t\t\t<mat-list-item>\n\t\t\t\t\t<p><strong>Publisher: </strong>{{book.publisher}}</p>\n\t\t\t\t</mat-list-item>\n\t\t\t\t<mat-list-item>\n\t\t\t\t\t<p><strong>Publication Date: </strong>{{book.publicationDate}}</p>\n\t\t\t\t</mat-list-item>\n\t\t\t\t<mat-list-item>\n\t\t\t\t\t<p><strong>Language: </strong>{{book.Language}}</p>\n\t\t\t\t</mat-list-item>\n\t\t\t\t<mat-list-item>\n\t\t\t\t\t<p><strong>Category: </strong>{{book.category}}</p>\n\t\t\t\t</mat-list-item>\n\t\t\t\t<mat-list-item>\n\t\t\t\t\t<p><strong>Pages: </strong>{{book.numberOfPages}}</p>\n\t\t\t\t</mat-list-item>\n\t\t\t</mat-list>\n\t\t</mat-grid-tile>\n\t\t\t\t<mat-grid-tile [colspan]=\"3\" [rowspan]=\"3\" class=\"mat-primary\"  >\n\t\t\t<mat-list>\n\t\t\t\t<mat-list-item>\n\t\t\t\t\t<p><strong>Format: </strong>{{book.format}}</p>\n\t\t\t\t</mat-list-item>\n\t\t\t\t<mat-list-item>\n\t\t\t\t\t<p><strong>ISBN: </strong>{{book.isbn}}</p>\n\t\t\t\t</mat-list-item>\n\t\t\t\t<mat-list-item>\n\t\t\t\t\t<p><strong>Shipping Weight: </strong>{{book.shippingWeight}}</p>\n\t\t\t\t</mat-list-item>\n\t\t\t\t<mat-list-item>\n\t\t\t\t\t<p><strong>List Price: </strong>{{book.listPrice}}</p>\n\t\t\t\t</mat-list-item>\n\t\t\t\t<mat-list-item>\n\t\t\t\t\t<p><strong>Our Price: </strong>{{book.ourPrice}}</p>\n\t\t\t\t</mat-list-item>\n\t\t\t\t<mat-list-item>\n\t\t\t\t\t<p><strong>Number in Stock: </strong>{{book.inStockNumber}}</p>\n\t\t\t\t</mat-list-item>\n\t\t\t</mat-list>\n\t\t</mat-grid-tile>\n\t\t<mat-grid-tile [colspan]=\"6\">\n\t\t\t<p><strong>Description: </strong>{{book.description}}</p>\n\t\t</mat-grid-tile>\n\t</mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/components/view-book/view-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_get_book_service__ = __webpack_require__("./src/app/services/get-book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_book__ = __webpack_require__("./src/app/models/book.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewBookComponent = (function () {
    function ViewBookComponent(getBookService, route, router) {
        this.getBookService = getBookService;
        this.route = route;
        this.router = router;
        this.book = new __WEBPACK_IMPORTED_MODULE_3__models_book__["a" /* Book */]();
    }
    ViewBookComponent.prototype.onSelect = function (book) {
        this.router.navigate(['/editBook', this.book.id]);
    };
    ViewBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.bookId = Number.parseInt(params['id']);
        });
        this.getBookService.getBook(this.bookId).subscribe(function (res) {
            _this.book = res.json();
        }, function (error) {
            console.log(error);
        });
    };
    return ViewBookComponent;
}());
ViewBookComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-view-book',
        template: __webpack_require__("./src/app/components/view-book/view-book.component.html"),
        styles: [__webpack_require__("./src/app/components/view-book/view-book.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_get_book_service__["a" /* GetBookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_get_book_service__["a" /* GetBookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ViewBookComponent);

var _a, _b, _c;
//# sourceMappingURL=view-book.component.js.map

/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogModule */]
        ]
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "./src/app/models/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book() {
    }
    return Book;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ "./src/app/services/add-book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddBookService = (function () {
    function AddBookService(http) {
        this.http = http;
    }
    AddBookService.prototype.sendBook = function (book) {
        var url = "/book/add";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, JSON.stringify(book), { headers: headers });
    };
    return AddBookService;
}());
AddBookService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AddBookService);

var _a;
//# sourceMappingURL=add-book.service.js.map

/***/ }),

/***/ "./src/app/services/edit-book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditBookService = (function () {
    function EditBookService(http) {
        this.http = http;
    }
    EditBookService.prototype.sendBook = function (book) {
        var url = "/book/update";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, JSON.stringify(book), { headers: headers });
    };
    return EditBookService;
}());
EditBookService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EditBookService);

var _a;
//# sourceMappingURL=edit-book.service.js.map

/***/ }),

/***/ "./src/app/services/get-book-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetBookListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetBookListService = (function () {
    function GetBookListService(http) {
        this.http = http;
    }
    GetBookListService.prototype.getBookList = function () {
        var url = "/book/bookList";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: headers });
    };
    return GetBookListService;
}());
GetBookListService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GetBookListService);

var _a;
//# sourceMappingURL=get-book-list.service.js.map

/***/ }),

/***/ "./src/app/services/get-book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetBookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetBookService = (function () {
    function GetBookService(http) {
        this.http = http;
    }
    GetBookService.prototype.getBook = function (id) {
        var url = "/book/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: headers });
    };
    return GetBookService;
}());
GetBookService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GetBookService);

var _a;
//# sourceMappingURL=get-book.service.js.map

/***/ }),

/***/ "./src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.sendCredential = function (username, password) {
        var url = "/token";
        var encodedCredentials = btoa(username + ":" + password);
        var basicHeader = "Basic " + encodedCredentials;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': basicHeader
        });
        return this.http.get(url, { headers: headers });
    };
    LoginService.prototype.checkSession = function () {
        var url = "/checkSession";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.get(url, { headers: headers });
    };
    LoginService.prototype.logout = function () {
        var url = "/user/logout";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, '', { headers: headers });
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "./src/app/services/remove-book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveBookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveBookService = (function () {
    function RemoveBookService(http) {
        this.http = http;
    }
    RemoveBookService.prototype.sendBook = function (bookId) {
        var url = "/book/remove";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });
        return this.http.post(url, bookId, { headers: headers });
    };
    return RemoveBookService;
}());
RemoveBookService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RemoveBookService);

var _a;
//# sourceMappingURL=remove-book.service.js.map

/***/ }),

/***/ "./src/app/services/upload-image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadImageService = (function () {
    function UploadImageService() {
        this.filesToUpload = [];
    }
    UploadImageService.prototype.upload = function (bookId) {
        this.makeFileRequest("/book/add/image?id=" + bookId, [], this.filesToUpload).then(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    UploadImageService.prototype.modify = function (bookId) {
        console.log(this.filesToUpload);
        if (this.filesToUpload.length > 0) {
            this.makeFileRequest("/book/update/image?id=" + bookId, [], this.filesToUpload).then(function (result) {
                console.log(result);
            }, function (error) {
                console.log(error);
            });
        }
    };
    UploadImageService.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    UploadImageService.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        console.log("image uploaded successfully");
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.setRequestHeader("x-auth-token", localStorage.getItem("xAuthToken"));
            xhr.send(formData);
        });
    };
    return UploadImageService;
}());
UploadImageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UploadImageService);

//# sourceMappingURL=upload-image.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map