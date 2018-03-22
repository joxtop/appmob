webpackJsonp([0],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__issue_list_issue_list__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__issue_map_issue_map__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tuto_tuto__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(auth, navCtrl, navParams, storage) {
        var _this = this;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        // If the tuto is not yet done, redirect the user to the tuto page
        this.storage.get('tuto-done').then(function (done) {
            if (!done) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tuto_tuto__["a" /* TutoPage */]);
            }
        });
        // set the root page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__issue_map_issue_map__["a" /* IssueMapPage */];
        this.auth.getUser().subscribe(function (user) {
            _this.profile = user;
            // set our app's pages
            _this.pages = [
                { title: 'Mon profile', component: __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */], user: _this.profile },
                { title: 'Problèmes reportés', component: __WEBPACK_IMPORTED_MODULE_5__issue_list_issue_list__["a" /* IssueListPage */], user: _this.profile },
                { title: 'Liste des problèmes', component: __WEBPACK_IMPORTED_MODULE_5__issue_list_issue_list__["a" /* IssueListPage */] }
            ];
        });
    }
    HomePage.prototype.logOut = function () {
        this.auth.logOut();
    };
    HomePage.prototype.openPage = function (page) {
        this.navCtrl.push(page.component, {
            user: page.user,
            title: page.title
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\home\home.html"*/'<ion-menu [content]="mycontent">\n\n  <ion-content>\n\n    <ion-list>\n\n      <button *ngFor="let page of pages" ion-item (click)="openPage(page)">\n\n        {{page.title}}\n\n      </button>\n\n\n\n      <!-- Logout button -->\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="logOut()">\n\n          <ion-icon name="log-out"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        this.profile = this.navParams.data.user;
    };
    ProfilePage.prototype.loadUserRole = function (user) {
        if (user.roles.indexOf('manager')) {
            this.role = {
                name: 'Gestionnaire',
                icon: 'build'
            };
        }
        else {
            this.role = {
                name: 'Citoyen',
                icon: 'person'
            };
        }
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="!profile">Loading...</ion-title>\n    <ion-title *ngIf="profile">{{ profile.firstname }} {{ profile.lastname }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding *ngIf="profile">\n  <img src="assets/imgs/empty-profile.png" id="profileImage">\n  <ion-grid>\n      <ion-row>\n        <ion-col>Nom d\'utilisateur</ion-col>\n        <ion-col>{{ profile.name }}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Prénom</ion-col>\n        <ion-col>{{ profile.firstname }}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Nom</ion-col>\n        <ion-col>{{ profile.lastname }}</ion-col>\n      </ion-row>\n      <ion-row *ngIf="profile.phone">\n        <ion-col>Téléphone</ion-col>\n        <ion-col>{{ profile.phone }}</ion-col>\n      </ion-row>\n      <ion-row *ngIf="profile.roles.includes(\'staff\')">\n        <ion-col>Droits</ion-col>\n        <ion-col>Administrateur</ion-col>\n      </ion-row>\n      <ion-row *ngIf="!profile.roles.includes(\'staff\')">\n        <ion-col>Droits</ion-col>\n        <ion-col>Utilisateur standard</ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_issue_issue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_issue_action__ = __webpack_require__(711);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams, issueService, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.issueService = issueService;
        this.auth = auth;
        this.loadState = issueService.loadIssueState;
        this.startMap = issueService.startExternalMap;
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadIssueDetails(this.navParams.data.id);
        this.auth.getUser().subscribe(function (user) {
            _this.profile = user;
        });
    };
    DetailsPage.prototype.loadIssueDetails = function (id) {
        var _this = this;
        this.issueService.getIssueById(id, ['actions', 'assignee', 'creator', 'issueType']).subscribe(function (issue) {
            _this.issue = issue;
            _this.issueService.reverseGeocode(issue.location.coordinates[1], issue.location.coordinates[0]).then(function (issueAddress) {
                _this.issueAddress = issueAddress;
            }).catch(function (error) {
                _this.issueAddress = 'Adresse inconnue';
            });
        });
    };
    DetailsPage.prototype.goToUser = function (user) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], {
            user: user
        });
    };
    DetailsPage.prototype.changeStatus = function (newStatus, fab) {
        var _this = this;
        fab.close();
        var issueAction = new __WEBPACK_IMPORTED_MODULE_5__models_issue_action__["a" /* IssueAction */]();
        issueAction.reason = "\u00ECssue " + newStatus;
        issueAction.type = newStatus;
        this.issueService.addIssueAction(this.issue.id, issueAction).subscribe(function (issue) {
            switch (issue.type) {
                case 'start':
                    _this.issue.state = 'inProgress';
                    break;
                case 'reject':
                    _this.issue.state = 'rejected';
                    break;
                case 'resolve':
                    _this.issue.state = 'resolved';
                    break;
            }
        }, function (err) {
            console.warn("Couldn't change the issue status", err);
        });
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\details\details.html"*/'<!--\n\n  Generated template for the DetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title *ngIf="!issue">Chargement...</ion-title>\n\n    <ion-title *ngIf="issue">{{ issue.description }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n <!-- this fab is placed at bottom right -->\n\n <ion-fab top right *ngIf="issue?.state != \'resolved\' && issue?.state != \'rejected\' && profile?.roles.includes(\'staff\')" #fab>\n\n  <button ion-fab><ion-icon name="create"></ion-icon></button>\n\n    <ion-fab-list side="bottom" *ngIf="issue?.state == \'new\'">\n\n      <button ion-fab (click)="changeStatus(\'start\', fab)"><ion-icon name="build"></ion-icon></button>\n\n      <button ion-fab (click)="changeStatus(\'reject\', fab)"><ion-icon name="trash"></ion-icon></button>\n\n    </ion-fab-list>\n\n    <ion-fab-list side="bottom" *ngIf="issue?.state == \'inProgress\'">\n\n      <button ion-fab (click)="changeStatus(\'resolve\', fab)"><ion-icon name="checkmark-circle-outline"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n  <ion-spinner *ngIf="!issue"></ion-spinner>\n\n  <ion-card *ngIf=\'issue\'>\n\n    <img *ngIf=\'issue.imageUrl\' src="{{issue.imageUrl}}"/>\n\n    <img *ngIf=\'!issue.imageUrl\' src="assets/imgs/placeholder.png"/>\n\n    <ion-card-content>\n\n      <ion-card-title class="truncate" >{{ issue.description }}</ion-card-title>\n\n      <p>{{ issue.description }}</p>\n\n      <ion-row class="vertical-align-content">\n\n        <ion-col>\n\n          <button ion-button icon-left clear small (click)=\'startMap(issue.location.coordinates[1], issue.location.coordinates[0])\'>\n\n            <ion-icon name="pin"></ion-icon>\n\n            <div *ngIf=\'issueAddress\'>{{ issueAddress }}</div>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <div><ion-icon [name]="loadState(issue)?.icon"></ion-icon> {{ loadState(issue)?.name }}</div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="vertical-align-content">\n\n        <ion-col>\n\n          <button ion-button icon-left clear small (click)=\'goToUser(issue.creator)\'>\n\n            <ion-icon name="person"></ion-icon>\n\n            <div>{{ issue.creator.firstname }} {{ issue.creator.lastname }}</div>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <div><ion-icon name="md-calendar"></ion-icon> {{ issue.createdAt | date:\'dd.MM.yyyy HH:mm\' }}</div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <issue-comment-form [issue]="issue"></issue-comment-form>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\details\details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_issue_issue__["a" /* IssueProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_auth_request__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(auth, navCtrl, navParams) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authRequest = new __WEBPACK_IMPORTED_MODULE_3__models_auth_request__["a" /* AuthRequest */]();
    }
    /**
     * Called when the login form is submitted.
     */
    LoginPage.prototype.onSubmit = function ($event) {
        var _this = this;
        // Prevent default HTML form behavior.
        $event.preventDefault();
        // Do not do anything if the form is invalid.
        if (this.form.invalid) {
            return;
        }
        // Hide any previous login error.
        this.loginError = false;
        // Perform the authentication request to the API.
        this.auth.logIn(this.authRequest).subscribe(undefined, function (err) {
            _this.loginError = true;
            console.warn("Authentication failed: " + err.message);
        });
    };
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */])
    ], LoginPage.prototype, "form", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Connexion</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!-- Error message displayed if the login failed -->\n\n  <p *ngIf="this.navParams.data?.info" ion-text class="info">{{ this.navParams.data.info }}</p>\n\n  <form (submit)="onSubmit($event)">\n\n    <ion-list>\n\n\n\n      <!-- Name input -->\n\n      <ion-item>\n\n        <ion-label floating>Nom d\'utilisateur</ion-label>\n\n        <ion-input type="text" name="name" #nameInput="ngModel" [(ngModel)]="authRequest.name" required></ion-input>\n\n      </ion-item>\n\n\n\n      <!-- Error message displayed if the name is invalid -->\n\n      <ion-item *ngIf="nameInput.invalid && nameInput.dirty" no-lines>\n\n        <p ion-text color="danger">Le nom d\'utilisateur est requis.</p>\n\n      </ion-item>\n\n\n\n      <!-- Password input -->\n\n      <ion-item>\n\n        <ion-label floating>Mot de passe</ion-label>\n\n        <ion-input type="password" name="password" #passwordInput="ngModel" [(ngModel)]="authRequest.password" required></ion-input>\n\n      </ion-item>\n\n\n\n      <!-- Error message displayed if the password is invalid -->\n\n      <ion-item *ngIf="passwordInput.invalid && passwordInput.dirty" no-lines>\n\n        <p ion-text color="danger">Le mot de passe est requis.</p>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <div padding>\n\n\n\n      <!-- Submit button -->\n\n      <button type="submit" [disabled]="form.invalid" ion-button block>Se connecter</button>\n\n\n\n      <!-- Error message displayed if the login failed -->\n\n      <p *ngIf="loginError" ion-text color="danger">Nom d\'utilisateur ou mot de passe invalide.</p>\n\n\n\n      <p>Vous n\'êtes pas encore inscrit ? <a (click)="goToRegister()">Inscrivez-vous maintenant</a></p>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 176:
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
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 222:
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
webpackEmptyAsyncContext.id = 222;

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_issue_issue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_details__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the IssueListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IssueListPage = (function () {
    function IssueListPage(navCtrl, navParams, issueService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.issueService = issueService;
        this.loadState = issueService.loadIssueState;
        this.page = 1;
        this.totalPage = 2;
    }
    IssueListPage.prototype.ionViewDidLoad = function () {
        this.loadIssues();
        this.pageTitle = this.navParams.data.title ? this.navParams.data.title : 'Liste des problèmes';
    };
    IssueListPage.prototype.onInput = function (event) {
        // set val to the value of the searchbar
        var searchedValue = event.target.value;
        // if the value is an empty string don't fetch the issues
        if (searchedValue && searchedValue.trim() != '') {
            this.filterIssueList(searchedValue);
        }
        else {
            this.filteredIssues = this.issues;
        }
    };
    IssueListPage.prototype.onCancel = function () {
        this.filteredIssues = this.issues;
    };
    IssueListPage.prototype.loadIssues = function (search) {
        var _this = this;
        var searchedValue = search ? search : undefined;
        this.issueService.getIssues(['creator'], searchedValue, ['-createdAt']).subscribe(function (issues) {
            if (_this.navParams.data.user) {
                _this.issues = _this.filterByCreator(_this.navParams.data.user, issues);
            }
            else {
                _this.issues = issues;
            }
            _this.filteredIssues = _this.issues;
        });
    };
    IssueListPage.prototype.filterIssueList = function (input) {
        this.filteredIssues = this.issues.filter(function (issue) { return issue.description.toLowerCase().indexOf(input.toLowerCase()) !== -1; });
    };
    IssueListPage.prototype.filterByCreator = function (creator, issues) {
        return issues.filter(function (issue) { return issue.creator.name == creator.name; });
    };
    IssueListPage.prototype.goToDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__details_details__["a" /* DetailsPage */], {
            id: id
        });
    };
    IssueListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        this.issueService.getIssues(['creator'], undefined, ['-createdAt'], this.page).subscribe(function (newIssues) {
            if (newIssues.length == 20)
                _this.totalPage++;
            if (_this.navParams.data.user) {
                _this.issues = _this.issues.concat(_this.filterByCreator(_this.navParams.data.user, newIssues));
            }
            else {
                _this.issues = _this.issues.concat(newIssues);
            }
            _this.filteredIssues = _this.issues;
            infiniteScroll.complete();
        });
    };
    IssueListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-issue-list',template:/*ion-inline-start:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\issue-list\issue-list.html"*/'<!--\n\n  Generated template for the IssueListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ pageTitle }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-searchbar showCancelButton (ionInput)="onInput($event)" (ionCancel)="onCancel($event)" disabled="{{!filteredIssues}}" placeholder="Rechercher..."></ion-searchbar>\n\n  <ion-spinner *ngIf="!filteredIssues"></ion-spinner>\n\n  <ion-list *ngIf="filteredIssues">\n\n    <button ion-item *ngFor=\'let issue of filteredIssues\' (click)=\'goToDetails(issue.id)\'>\n\n      <ion-thumbnail item-start>\n\n        <img *ngIf=\'issue.imageUrl\' src="{{issue.imageUrl}}">\n\n        <img *ngIf=\'!issue.imageUrl\' src="assets/imgs/placeholder.png">\n\n      </ion-thumbnail>\n\n      <h2>{{issue.description}}</h2>\n\n      <p><ion-icon [name]="loadState(issue)?.icon"></ion-icon> {{loadState(issue)?.name}} • \n\n      <ion-icon name="person"></ion-icon> {{ issue.creator.firstname }} {{ issue.creator.lastname }}</p>\n\n    </button>\n\n  </ion-list>\n\n\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="page < totalPage">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\issue-list\issue-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_issue_issue__["a" /* IssueProvider */]])
    ], IssueListPage);
    return IssueListPage;
}());

//# sourceMappingURL=issue-list.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_issue_create_issue__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_issue_issue__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the IssueMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IssueMapPage = (function () {
    function IssueMapPage(navCtrl, navParams, issueService, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.issueService = issueService;
        this.geolocation = geolocation;
        this.mapMarkers = [];
    }
    IssueMapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadIssues();
        this.geolocation.getCurrentPosition().then(function (position) {
            console.log("User is at " + position.coords.latitude + ", " + position.coords.longitude);
            var tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            var tileLayerOptions = { maxZoom: 18 };
            _this.mapOptions = {
                layers: [
                    Object(__WEBPACK_IMPORTED_MODULE_3_leaflet__["tileLayer"])(tileLayerUrl, tileLayerOptions)
                ],
                zoom: 13,
                center: Object(__WEBPACK_IMPORTED_MODULE_3_leaflet__["latLng"])(position.coords.latitude, position.coords.longitude)
            };
        }).catch(function (err) {
            console.warn("Could not retrieve user position because: " + err.message);
        });
    };
    IssueMapPage.prototype.loadIssues = function (search) {
        var _this = this;
        var searchedValue = search ? search : undefined;
        this.issueService.getIssues(['creator'], searchedValue, ['createdAt']).subscribe(function (issues) {
            _this.issues = issues;
            issues.forEach(function (issue) {
                _this.mapMarkers.push(Object(__WEBPACK_IMPORTED_MODULE_3_leaflet__["marker"])([issue.location.coordinates[1], issue.location.coordinates[0]]).bindTooltip(issue.description));
            });
        });
    };
    IssueMapPage.prototype.openCreateIssuePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__create_issue_create_issue__["a" /* CreateIssuePage */]);
    };
    IssueMapPage.prototype.onMapReady = function (map) {
        this.map = map;
    };
    IssueMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-issue-map',template:/*ion-inline-start:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\issue-map\issue-map.html"*/'<!--\n\n  Generated template for the IssueMapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle><ion-icon name="menu"></ion-icon></button>\n\n    <ion-title>Citizen Engagement</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div *ngIf="!mapOptions">\n\n    <ion-spinner></ion-spinner>\n\n    <p text-center>Géolocalisation en cours...</p>\n\n  </div>\n\n  <div *ngIf="mapOptions" class="map" leaflet [leafletOptions]="mapOptions" [leafletLayers]="mapMarkers"></div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button color="dark" clear (click)="openCreateIssuePage()">\n\n      <ion-icon name="add-circle" margin-right></ion-icon>\n\n      Reporter un problème\n\n    </button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\issue-map\issue-map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_issue_issue__["a" /* IssueProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], IssueMapPage);
    return IssueMapPage;
}());

//# sourceMappingURL=issue-map.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateIssuePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_issue_issue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_picture_picture__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CreateIssuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateIssuePage = (function () {
    function CreateIssuePage(navCtrl, navParams, geolocation, issueService, pictureService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.issueService = issueService;
        this.pictureService = pictureService;
        this.newIssue = {
            location: {
                coordinates: [0, 0],
                type: "Point"
            },
            description: '',
            tags: [],
            imageUrl: '',
            issueTypeHref: ''
        };
    }
    CreateIssuePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.issueService.getIssueTypes().subscribe(function (issueTypes) {
            _this.issueTypes = issueTypes;
        });
        var geolocationPromise = this.geolocation.getCurrentPosition();
        geolocationPromise.then(function (position) {
            _this.newIssue.location.coordinates[1] = position.coords.latitude;
            _this.newIssue.location.coordinates[0] = position.coords.longitude;
            console.log("User is at " + _this.newIssue.location.coordinates[1] + ", " + _this.newIssue.location.coordinates[0]);
            _this.issueService.reverseGeocode(_this.newIssue.location.coordinates[1], _this.newIssue.location.coordinates[0]).then(function (myAddress) {
                _this.myAddress = myAddress;
            }).catch(function (error) {
                _this.myAddress = 'Adresse inconnue';
            });
        }).catch(function (err) {
            console.warn("Could not retrieve user position because: " + err.message);
        });
    };
    CreateIssuePage.prototype.takePicture = function () {
        var _this = this;
        this.pictureService.takeAndUploadPicture().subscribe(function (picture) {
            _this.newIssue.imageUrl = picture.url;
        }, function (err) {
            console.warn('Could not take picture', err);
        });
    };
    CreateIssuePage.prototype.createIssue = function (form) {
        var _this = this;
        if (form.valid) {
            this.issueService.createIssue(this.newIssue).subscribe(function (newIssue) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* DetailsPage */], {
                    id: newIssue.id
                });
            }, function (err) {
                console.warn('Could not create the new issue', err);
            });
        }
    };
    CreateIssuePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-issue',template:/*ion-inline-start:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\create-issue\create-issue.html"*/'<!--\n\n  Generated template for the CreateIssuePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Reporter un problème</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div *ngIf="!issueTypes || !myAddress">\n\n    <ion-spinner></ion-spinner>\n\n    <p text-center>Géolocalisation en cours...</p>\n\n  </div>\n\n\n\n  <form #issueForm="ngForm" *ngIf="issueTypes && myAddress" (ngSubmit)="createIssue(issueForm)">\n\n    <ion-item *ngIf="issueTypes">\n\n      <ion-label>Type de problème</ion-label>\n\n      <ion-select [(ngModel)]="newIssue.issueTypeHref" name="issueType" required #issueTypeSelect="ngModel">\n\n        <ion-option *ngFor="let issueType of issueTypes" [value]="issueType.href">{{ issueType.name }}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf=\'myAddress\'>\n\n      <p><ion-icon name="pin"></ion-icon> {{ myAddress }}</p>\n\n    </ion-item>\n\n\n\n    <p *ngIf=\'issueDescriptionInput?.invalid && issueDescriptionInput?.dirty\' class="formError">\n\n      La description est requise et sa longueur doit être supérieur à 5 caractères.\n\n    </p>\n\n    <ion-item>\n\n      <ion-textarea rows="5" type="text" name="description" required [(ngModel)]="newIssue.description" required minlength=5 placeholder="Description" #issueDescriptionInput="ngModel"></ion-textarea>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-tags-input [canEnterAdd]="false" type="text" name="tags" [(ngModel)]="newIssue.tags" placeholder="Tags"></ion-tags-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img *ngIf="newIssue.imageUrl" [src]=newIssue.imageUrl>\n\n        <img *ngIf=\'!newIssue.imageUrl\' src="assets/imgs/placeholder.png">\n\n      </ion-thumbnail>\n\n      <button ion-button round outline block type="button" (click)=\'takePicture()\'>Prendre une photo</button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <button ion-button color="light" type="submit" block [disabled]=\'issueForm.invalid\'>Créer</button>\n\n    </ion-item>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\create-issue\create-issue.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__providers_issue_issue__["a" /* IssueProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_picture_picture__["a" /* PictureProvider */]])
    ], CreateIssuePage);
    return CreateIssuePage;
}());

//# sourceMappingURL=create-issue.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Service to take pictures and upload them to the qimg API.
 */
var PictureProvider = (function () {
    function PictureProvider(camera, http) {
        this.camera = camera;
        this.http = http;
    }
    /**
     * Takes a picture, uploads it to the qimg API, and returns the created image.
     *
     * Returns an observable that will emit the created QimgObject if the picture
     * has been taken and successfully uploaded to the qimg API. An error may be
     * emitted instead if the user does not take a picture of if the upload fails.
     */
    PictureProvider.prototype.takeAndUploadPicture = function () {
        var _this = this;
        // Take a picture.
        // This creates an observable of picture data.
        var pictureData$ = this.takePicture();
        // Once the picture has been taken, upload it to the qimg API.
        // This returns a new observable of the resulting QimgImage object.
        var uploadedImage$ = pictureData$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["switchMap"])(function (data) { return _this.uploadPicture(data); }));
        // Once the picture has been uploaded, log a message to the console
        // indicating that all went well.
        // This does not change the observable stream.
        var debug$ = uploadedImage$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["tap"])(function (image) { return console.log("Successfully uploaded picture to " + image.url); }));
        // Return the observable stream.
        return debug$;
    };
    /**
     * Launches the camera to take a picture.
     *
     * Returns an observable that will emit the raw picture data as a string
     * once the picture has been taken. An error may be emitted instead if the
     * user does not take a picture.
     */
    PictureProvider.prototype.takePicture = function () {
        // Prepare camera options.
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        // Start taking a picture.
        // The promise will be resolved when the user has snapped and validated the picture.
        // It may be rejected if the user does not take a picture.
        var pictureDataPromise = this.camera.getPicture(options);
        // Convert the promise to an observable and return it.
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromPromise(pictureDataPromise);
    };
    /**
     * Uploads raw picture data to the qimg API.
     *
     * Returns an observable that will emit the created QimgImage object.
     * An error may be emitted instead if the upload fails.
     */
    PictureProvider.prototype.uploadPicture = function (pictureData) {
        var requestBody = {
            data: pictureData
        };
        var requestOptions = {
            headers: {
                Authorization: "Bearer " + __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* config */].qimgSecret
            }
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* config */].qimgUrl + "/images", requestBody, requestOptions);
    };
    PictureProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], PictureProvider);
    return PictureProvider;
}());

//# sourceMappingURL=picture.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TutoPage = (function () {
    function TutoPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    TutoPage.prototype.navHome = function () {
        this.storage.set('tuto-done', true);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    TutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tuto',template:/*ion-inline-start:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\tuto\tuto.html"*/'<!--\n\n  Generated template for the TutoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Comment utiliser l\'application</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-slides pager="true" parallax="true" padding>\n\n    <ion-slide>\n\n      <img src="assets/tuto/youhere.svg" class="slide-image">\n\n      <h1>Welcome to\n\n        <br/> Citizen Engagement\n\n      </h1>\n\n      <img src="assets/tuto/search-problem.svg" class="slide-image">\n\n      <p>Votre application pour reporter les anomalies de votre ville</p>\n\n    </ion-slide>\n\n\n\n    <ion-slide id="map">\n\n        <img src="assets/tuto/map.png" class="slide-image"/>\n\n        <ion-title class="slide-title" > Naviguez sur la carte </ion-title>\n\n        <p>Naviguez sur la carte et regardez les issues qui sont dans votre région et <b>reportez un problème</b> ou vous êtes</p>\n\n\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n\n\n        <img src="assets/tuto/issue.png" class="slide-image"/>\n\n        <ion-title class="slide-title" > Reportez un problème </ion-title>\n\n        <p>Remplisez au moins <b> le type et la description</b> de votre problème</p>\n\n\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n        <img src="assets/tuto/liste.png" class="slide-image"/>\n\n        <ion-title class="slide-title" > Commentez les problèmes </ion-title>\n\n        <p></p>\n\n\n\n      <button ion-button outline small (click)="navHome()">\n\n        Commencer à utiliser l\'app\n\n      </button>\n\n    \n\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\tuto\tuto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TutoPage);
    return TutoPage;
}());

//# sourceMappingURL=tuto.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_new_user__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.newUser = new __WEBPACK_IMPORTED_MODULE_3__models_new_user__["a" /* NewUser */]();
        this.subscribeError = false;
    }
    /**
     * Called when the register form is submitted.
     */
    RegisterPage.prototype.onSubmit = function ($event) {
        var _this = this;
        // Prevent default HTML form behavior.
        $event.preventDefault();
        // Do not do anything if the form is invalid.
        if (this.registerForm.invalid) {
            return;
        }
        this.subscribeError = false;
        this.newUser.roles = ['citizen'];
        // Create a new user.
        this.userService.createUser(this.newUser).subscribe(function (user) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */], {
                info: "L'utilisateur à été créé avec succès"
            });
        }, function (err) {
            _this.subscribeError = true;
            console.warn("Could not create the user: " + err.message);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
    ], RegisterPage.prototype, "registerForm", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>S\'enregistrer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (submit)="onSubmit($event)" #registerForm="ngForm">\n      <ion-list>\n  \n        <!-- Name input -->\n        <ion-item>\n          <ion-label floating>Nom d\'utilisateur</ion-label>\n          <ion-input type="text" name="name" [(ngModel)]="newUser.name" required max-length=25 #nameInput="ngModel"></ion-input>\n        </ion-item>\n  \n        <!-- Error message displayed if the name is invalid -->\n        <ion-item *ngIf="nameInput.invalid && nameInput.dirty" no-lines>\n          <p ion-text color="danger">Le nom d\'utilisateur est requis.</p>\n        </ion-item>\n  \n        <!-- Password input -->\n        <ion-item>\n          <ion-label floating>Mot de passe</ion-label>\n          <ion-input type="password" name="password" [(ngModel)]="newUser.password" required minlength=4 #passwordInput="ngModel"></ion-input>\n        </ion-item>\n\n        <!-- Error message displayed if the password is invalid -->\n        <ion-item *ngIf="passwordInput.invalid && passwordInput.dirty" no-lines>\n          <p ion-text color="danger">Le mot de passe est invalide.</p>\n        </ion-item>\n\n        <!-- Firstname input -->\n        <ion-item>\n          <ion-label floating>Prénom</ion-label>\n          <ion-input type="text" name="firstname" [(ngModel)]="newUser.firstname" required minlength=2 maxlength=25 #firstnameInput="ngModel"></ion-input>\n        </ion-item>\n\n        <!-- Error message displayed if the firstname is invalid -->\n        <ion-item *ngIf="firstnameInput.invalid && firstnameInput.dirty" no-lines>\n          <p ion-text color="danger">Le prénom est invalide.</p>\n        </ion-item>\n\n        <!-- Lastname input -->\n        <ion-item>\n          <ion-label floating>Nom</ion-label>\n          <ion-input type="text" name="lastname" [(ngModel)]="newUser.lastname" required minlength=2 maxlength=25 #lastnameInput="ngModel"></ion-input>\n        </ion-item>\n\n        <!-- Error message displayed if the lastname is invalid -->\n        <ion-item *ngIf="lastnameInput.invalid && lastnameInput.dirty" no-lines>\n          <p ion-text color="danger">Le nom est invalide.</p>\n        </ion-item>\n\n        <!-- Phone input -->\n        <ion-item>\n          <ion-label floating>Téléphone</ion-label>\n          <ion-input type="phone" name="phone" #phoneInput="ngModel" [(ngModel)]="newUser.phone" required maxlength=20></ion-input>\n        </ion-item>\n\n        <!-- Error message displayed if the phone is invalid -->\n        <ion-item *ngIf="phoneInput.invalid && phoneInput.dirty" no-lines>\n          <p ion-text color="danger">Le numéro de téléphone est invalide.</p>\n        </ion-item>\n  \n      </ion-list>\n  \n      <div padding>\n  \n        <!-- Submit button -->\n        <button type="submit" [disabled]="registerForm.invalid" ion-button block>S\'enregistrer</button>\n\n        <!-- Error message displayed if the registration failed -->\n        <p *ngIf="subscribeError" ion-text color="danger">Erreur lors de l\'enregistrement. Il se peut que ce nom d\'utilisateur existe déjà.</p>\n  \n      </div>\n    </form>\n  </ion-content>\n  \n'/*ion-inline-end:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = (function () {
    function UserProvider(http) {
        this.http = http;
        console.log('Hello UserProvider Provider');
    }
    UserProvider.prototype.getUserById = function (id) {
        var userUrl = __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* config */].apiUrl + "/users/" + id;
        return this.http.get(userUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (user) {
            console.log(user);
            return user;
        }));
    };
    UserProvider.prototype.createUser = function (user) {
        var userUrl = __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* config */].apiUrl + "/users";
        return this.http.post(userUrl, user).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (user) {
            console.log(user);
            return user;
        }));
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Issue; });
var Issue = (function () {
    function Issue() {
    }
    return Issue;
}());

//# sourceMappingURL=issue.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(374);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__asymmetrik_ngx_leaflet__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_launch_navigator__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_tags_input__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_interceptor_auth_interceptor__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_user_user__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_issue_issue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_home__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_create_issue_create_issue__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_issue_list_issue_list__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_issue_map_issue_map__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_details_details__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_profile_profile__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_picture_picture__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_issue_comments_issue_comments__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_register_register__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_tuto_tuto__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_issue_comment_form_issue_comment_form__ = __webpack_require__(716);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_create_issue_create_issue__["a" /* CreateIssuePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_issue_list_issue_list__["a" /* IssueListPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_issue_map_issue_map__["a" /* IssueMapPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_issue_comments_issue_comments__["a" /* IssueComments */],
                __WEBPACK_IMPORTED_MODULE_28__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_tuto_tuto__["a" /* TutoPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_issue_comment_form_issue_comment_form__["a" /* IssueCommentForm */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__asymmetrik_ngx_leaflet__["a" /* LeafletModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13_ionic_tags_input__["a" /* IonTagsInputModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_create_issue_create_issue__["a" /* CreateIssuePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_issue_list_issue_list__["a" /* IssueListPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_issue_map_issue_map__["a" /* IssueMapPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_issue_comments_issue_comments__["a" /* IssueComments */],
                __WEBPACK_IMPORTED_MODULE_28__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_tuto_tuto__["a" /* TutoPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_issue_comment_form_issue_comment_form__["a" /* IssueCommentForm */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_auth_auth__["a" /* AuthProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_16__providers_auth_interceptor_auth_interceptor__["a" /* AuthInterceptorProvider */], multi: true },
                __WEBPACK_IMPORTED_MODULE_17__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_issue_issue__["a" /* IssueProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_26__providers_picture_picture__["a" /* PictureProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the IssueProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var IssueProvider = (function () {
    function IssueProvider(http, geocoder) {
        this.http = http;
        this.geocoder = geocoder;
    }
    // Get issue list
    IssueProvider.prototype.getIssues = function (include, search, sort, page, pageSize, image) {
        var issuesUrl = __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* config */].apiUrl + "/issues";
        //Create new HttpParams
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
        params = search ? params.append('search', search) : params;
        if (include) {
            include.forEach(function (item) {
                params = params.append('include', item);
            });
        }
        if (sort) {
            sort.forEach(function (item) {
                params = params.append('sort', item);
            });
        }
        params = page ? params.append('page', page.toString()) : params;
        params = pageSize ? params.append('pageSize', pageSize.toString()) : params;
        params = image ? params.append('image', image.toString()) : params;
        var httpOptions = {
            params: params,
        };
        return this.http.get(issuesUrl, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (issues) {
            console.log(issues);
            return issues;
        }));
    };
    IssueProvider.prototype.getIssueById = function (id, include) {
        var issueUrl = __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* config */].apiUrl + "/issues/" + id;
        //Create new HttpParams
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
        if (include) {
            include.forEach(function (item) {
                params = params.append('include', item);
            });
        }
        var httpOptions = {
            params: params,
        };
        return this.http.get(issueUrl, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (issue) {
            console.log(issue);
            return issue;
        }));
    };
    IssueProvider.prototype.loadIssueState = function (issue) {
        var state;
        switch (issue.state) {
            case 'new':
                state = {
                    name: 'Nouveau',
                    icon: 'star'
                };
                break;
            case 'inProgress':
                state = {
                    name: 'En cours',
                    icon: 'build'
                };
                break;
            case 'rejected':
                state = {
                    name: 'Rejeté',
                    icon: 'trash'
                };
                break;
            case 'resolved':
                state = {
                    name: 'Résolu',
                    icon: 'checkmark-circle-outline'
                };
                break;
        }
        return state;
    };
    IssueProvider.prototype.reverseGeocode = function (latitude, longitude) {
        return this.geocoder.reverseGeocode(latitude, longitude)
            .then(function (result) {
            if (!result[0].postalCode || !result[0].locality) {
                throw "Address unknown";
            }
            var address = result[0].thoroughfare && result[0].subThoroughfare ? result[0].thoroughfare + " " + result[0].subThoroughfare + ", " : '';
            address += result[0].postalCode + " " + result[0].locality;
            return address;
        })
            .catch(function (error) {
            console.log(error);
            return Promise.reject("Error geocoding");
        });
    };
    IssueProvider.prototype.startExternalMap = function (latitude, longitude) {
        var launchNavigator = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__["a" /* LaunchNavigator */]();
        var options = {
            destinationName: name,
            transportMode: "driving",
        };
        launchNavigator.navigate([latitude, longitude], options).then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
    };
    IssueProvider.prototype.getIssueTypes = function (page, pageSize) {
        var issueTypesUrl = __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* config */].apiUrl + "/issueTypes";
        //Create new HttpParams
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
        params = page ? params.append('page', page.toString()) : params;
        params = pageSize ? params.append('pageSize', pageSize.toString()) : params;
        var httpOptions = {
            params: params,
        };
        return this.http.get(issueTypesUrl, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (issueTypes) {
            console.log(issueTypes);
            return issueTypes;
        }));
    };
    IssueProvider.prototype.createIssue = function (newIssue) {
        var newIssueUrl = __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* config */].apiUrl + "/issues";
        return this.http.post(newIssueUrl, newIssue).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (issue) {
            console.log(issue);
            return issue;
        }));
    };
    IssueProvider.prototype.getIssueCommentsById = function (id) {
        var issueCommentsUrl = __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* config */].apiUrl + "/issues/" + id + "/comments?include=author";
        return this.http.get(issueCommentsUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (issueComments) {
            console.log(issueComments);
            return issueComments;
        }));
    };
    IssueProvider.prototype.createIssueComment = function (issueId, newComment) {
        var newIssueCommentUrl = __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* config */].apiUrl + "/issues/" + issueId + "/comments";
        return this.http.post(newIssueCommentUrl, newComment).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (comment) {
            console.log(comment);
            return comment;
        }));
    };
    IssueProvider.prototype.addIssueAction = function (issueId, issueAction) {
        var editIssueUrl = __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* config */].apiUrl + "/issues/" + issueId + "/actions";
        return this.http.post(editIssueUrl, issueAction).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (issue) {
            console.log(issue);
            return issue;
        }));
    };
    IssueProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], IssueProvider);
    return IssueProvider;
}());

//# sourceMappingURL=issue.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(auth, platform, statusBar, splashScreen) {
        var _this = this;
        this.auth = auth;
        // Direct the user to the correct page depending on whether he or she is logged in.
        this.auth.isAuthenticated().subscribe(function (authenticated) {
            if (authenticated) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Authentication service for login/logout.
 */
var AuthProvider = (function () {
    function AuthProvider(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.authSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["ReplaySubject"](1);
        this.auth$ = this.authSource.asObservable();
        this.storage.get('auth').then(function (auth) {
            _this.authSource.next(auth);
        });
    }
    AuthProvider.prototype.isAuthenticated = function () {
        return this.auth$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (auth) { return !!auth; }));
    };
    AuthProvider.prototype.getUser = function () {
        return this.auth$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (auth) { return auth ? auth.user : undefined; }));
    };
    AuthProvider.prototype.getToken = function () {
        return this.auth$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (auth) { return auth ? auth.token : undefined; }));
    };
    AuthProvider.prototype.logIn = function (authRequest) {
        var _this = this;
        var authUrl = __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* config */].apiUrl + "/auth";
        return this.http.post(authUrl, authRequest).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["delayWhen"])(function (auth) {
            return _this.saveAuth(auth);
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (auth) {
            _this.authSource.next(auth);
            console.log("User " + auth.user.name + " logged in");
            return auth.user;
        }));
    };
    AuthProvider.prototype.logOut = function () {
        this.authSource.next(null);
        this.storage.remove('auth');
        console.log('User logged out');
    };
    AuthProvider.prototype.saveAuth = function (auth) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].fromPromise(this.storage.set('auth', auth));
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueAction; });
var IssueAction = (function () {
    function IssueAction() {
    }
    return IssueAction;
}());

//# sourceMappingURL=issue-action.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRequest; });
var AuthRequest = (function () {
    function AuthRequest() {
    }
    return AuthRequest;
}());

//# sourceMappingURL=auth-request.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUser; });
var NewUser = (function () {
    function NewUser() {
    }
    return NewUser;
}());

//# sourceMappingURL=new-user.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthInterceptorProvider = (function () {
    function AuthInterceptorProvider(injector) {
        this.injector = injector;
    }
    AuthInterceptorProvider.prototype.intercept = function (req, next) {
        // Retrieve AuthProvider at runtime from the injector.
        // (Otherwise there would be a circular dependency:
        //  AuthInterceptorProvider -> AuthProvider -> HttpClient -> AuthInterceptorProvider).
        var auth = this.injector.get(__WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthProvider */]);
        // Get the bearer token (if any).
        return auth.getToken().pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["first"])(), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["switchMap"])(function (token) {
            // Add it to the request if it doesn't already have an Authorization header.
            if (token && !req.headers.has('Authorization')) {
                req = req.clone({
                    headers: req.headers.set('Authorization', "Bearer " + token)
                });
            }
            return next.handle(req);
        }));
    };
    AuthInterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], AuthInterceptorProvider);
    return AuthInterceptorProvider;
}());

//# sourceMappingURL=auth-interceptor.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueComments; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_issue__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_issue_issue__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the IssueComments page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IssueComments = (function () {
    function IssueComments(navCtrl, navParams, issueService, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.issueService = issueService;
        this.events = events;
        events.subscribe('comment:created', function () {
            _this.loadIssueComments();
        });
    }
    IssueComments.prototype.ngOnInit = function () {
        this.loadIssueComments();
    };
    IssueComments.prototype.loadIssueComments = function () {
        var _this = this;
        this.issueService.getIssueCommentsById(this.issue.id).subscribe(function (issueComments) {
            _this.comments = issueComments.reverse();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_issue__["a" /* Issue */])
    ], IssueComments.prototype, "issue", void 0);
    IssueComments = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'issue-comments',template:/*ion-inline-start:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\issue-comments\issue-comments.html"*/'<ion-list *ngIf="comments?.length>0">\n  <ion-item *ngFor="let comment of comments" no-lines>\n    <ion-avatar item-start>\n      <img src="assets/imgs/empty-profile.png">\n    </ion-avatar>\n    <h2>{{ comment.author.firstname }} {{ comment.author.lastname }}</h2>\n    <h3>{{ comment.createdAt | date:\'dd.MM.yyyy HH:mm\' }}</h3>\n    <p>{{ comment.text }}</p>\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\issue-comments\issue-comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_issue_issue__["a" /* IssueProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], IssueComments);
    return IssueComments;
}());

//# sourceMappingURL=issue-comments.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueCommentForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_issue__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_issue_comment__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_issue_issue__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the IssueCommentFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IssueCommentForm = (function () {
    function IssueCommentForm(navCtrl, navParams, issueService, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.issueService = issueService;
        this.events = events;
        this.newComment = new __WEBPACK_IMPORTED_MODULE_4__models_issue_comment__["a" /* IssueComment */]();
        this.subscribeError = false;
    }
    IssueCommentForm.prototype.onCommentSubmit = function ($event) {
        var _this = this;
        // Prevent default HTML form behavior.
        $event.preventDefault();
        // Do not do anything if the form is invalid.
        if (this.commentForm.invalid) {
            return;
        }
        this.subscribeError = false;
        this.issueService.createIssueComment(this.issue.id, this.newComment).subscribe(function (newComment) {
            _this.events.publish('comment:created');
            _this.commentForm.reset();
        }, function (err) {
            console.warn("Could not create the comment: " + err.message);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
    ], IssueCommentForm.prototype, "commentForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_issue__["a" /* Issue */])
    ], IssueCommentForm.prototype, "issue", void 0);
    IssueCommentForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'issue-comment-form',template:/*ion-inline-start:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\issue-comment-form\issue-comment-form.html"*/'<h2>Commentaires</h2>\n<form (submit)="onCommentSubmit($event)" #commentForm="ngForm">\n  <ion-list>\n\n    <!-- Comment input -->\n    <ion-item no-lines>\n      <ion-textarea rows="3" type="text" name="comment" required [(ngModel)]="newComment.text" required minlength=2 maxlength=1000 #issueCommentInput="ngModel" placeholder="Nouveau commentaire"></ion-textarea>\n    </ion-item>\n\n    <!-- Error message displayed if the name is invalid -->\n    <ion-item *ngIf="issueCommentInput.invalid && issueCommentInput.dirty" no-lines>\n      <p ion-text color="danger">Ce champ est obligatoire.</p>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n\n    <!-- Submit button -->\n    <button ion-button icon-left small type="submit" [disabled]="commentForm.invalid">\n      <ion-icon name="send"></ion-icon>\n      Envoyer\n    </button>\n\n    <!-- Error message displayed if the registration failed -->\n    <p *ngIf="commentError" ion-text color="danger">Erreur lors de l\'envoi du commentaire.</p>\n\n  </div>\n</form>\n<issue-comments [issue]="issue"></issue-comments>\n'/*ion-inline-end:"C:\Users\Florian\Ecole\HEIG-VD\AppMob\citizen-engagement-app\src\pages\issue-comment-form\issue-comment-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_issue_issue__["a" /* IssueProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], IssueCommentForm);
    return IssueCommentForm;
}());

//# sourceMappingURL=issue-comment-form.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueComment; });
var IssueComment = (function () {
    function IssueComment() {
    }
    return IssueComment;
}());

//# sourceMappingURL=issue-comment.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
// Copy this file to config.ts and fill in appropriate values.
var config = {
    apiUrl: 'https://comem-appmob-2018g.herokuapp.com/api',
    qimgUrl: 'https://comem-qimg.herokuapp.com/api',
    qimgSecret: 'Gu1qbLccQloYrD6/OnQCRyqtWP7tB3m9zS3nHzrPbhIKKJQXk4l7kXVTxcYBqoXMVhBmNVW7FdYXsrxfr//H3NGjYug/0FMtqIW1Ng+nTL1g55sUHqWBRWPAOyuwo3mDIb47nKh5QY2ZTXnmPo4qZoPnKLOOY01aUaDNL/GxmsA='
};
//# sourceMappingURL=config.js.map

/***/ })

},[369]);
//# sourceMappingURL=main.js.map