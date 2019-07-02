webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quizplay_quizplay__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quizadd_quizadd__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.homeRoot = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.addRoot = __WEBPACK_IMPORTED_MODULE_2__quizadd_quizadd__["a" /* QuizAdd */];
        this.playRoot = __WEBPACK_IMPORTED_MODULE_1__quizplay_quizplay__["a" /* QuizPlay */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/vlad/Projects/Quiz-App/quiz_MobileApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="homeRoot" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="addRoot" tabTitle="Add" tabIcon="add"></ion-tab>\n  <ion-tab [root]="playRoot" tabTitle="Play" tabIcon="play"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/vlad/Projects/Quiz-App/quiz_MobileApp/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizPlay; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quiz_services__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizPlay = (function () {
    function QuizPlay(_quizServices) {
        var _this = this;
        this._quizServices = _quizServices;
        // We need just one question to play at a given time
        // We should let "services" deals with logic
        this.qaPlay = null;
        this.isQuestion = true;
        this.isDone = false;
        this._quizServices.getQuizStruct().subscribe(function (res) {
            _this._quizServices.setQuizPlay(_this._quizServices.rawData2QuizStruct(res));
            _this.qaPlay = _this._quizServices.getNewQuestion2Play();
            var info = _this._quizServices.getGeneralInfo();
            _this.quizName = info[0];
            _this.quizSubject = info[1];
        });
    }
    QuizPlay.prototype.goCheckAnswers = function () {
        this._quizServices.updatePlayingQuestion(this.qaPlay);
        this.isQuestion = false;
    };
    QuizPlay.prototype.getNewQuestion = function () {
        this.isQuestion = true;
        this.qaPlay = this._quizServices.getNewQuestion2Play();
    };
    QuizPlay.prototype.isDefinedQA = function () {
        return typeof (this.qaPlay) !== null;
    };
    return QuizPlay;
}());
QuizPlay = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'quizplay',template:/*ion-inline-start:"/home/vlad/Projects/Quiz-App/quiz_MobileApp/src/pages/quizplay/quizplay.html"*/'<ion-content padding *ngIf="isDefinedQA()">\n  <div *ngIf="!isDone">\n    <br/>\n    <div class="propaganda">\n      <span align="center">{{quizName}}</span><br/>\n      <span align="center">({{quizSubject}})</span>\n    </div>\n    <div *ngIf="isQuestion">\n      <quiz-question-play (stateChange)=goCheckAnswers()></quiz-question-play>\n    </div>\n    <div *ngIf="!isQuestion">\n      <quiz-play-check (stateChange)=getNewQuestion()></quiz-play-check>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/vlad/Projects/Quiz-App/quiz_MobileApp/src/pages/quizplay/quizplay.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_quiz_services__["a" /* QuizService */]])
], QuizPlay);

//# sourceMappingURL=quizplay.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizAdd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quiz_services__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizAdd = (function () {
    function QuizAdd(quizServices) {
        this.quizServices = quizServices;
        // the structure that will be added into the
        // database
        this.quizStruct = {
            name: "",
            subject: "",
            q_a: []
        };
        this.state = "general";
        this.statenumber = 0;
        // One question of the quiz. When a question is ready
        // then it will be added into "q_a" of the quiz
        this.qa = {
            subject: "",
            question: {
                txt: "",
                img: ""
            },
            refs: "",
            propAnswers: []
        };
        // List of all proposed answers of a question
        // When all of them are set, it will be add into
        // the question structure ("propAnswers")
        this.pa = [];
    }
    // add one question (and its proposed answers) to quiz
    QuizAdd.prototype.addQA2Quiz = function () {
        this.quizStruct.q_a.push(this.qa);
    };
    // add all proposed answers to one question 
    QuizAdd.prototype.addListPropAns = function () {
        this.qa.propAnswers = this.pa;
        // reset proposed answers for next question
        this.pa = [];
    };
    QuizAdd.prototype.onNofity = function (message) {
        this.state = message;
    };
    return QuizAdd;
}());
QuizAdd = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'quizadd',template:/*ion-inline-start:"/home/vlad/Projects/Quiz-App/quiz_MobileApp/src/pages/quizadd/quizadd.html"*/'<!--<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <h1 align="center">Add New Quiz</h1>\n    </ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-content padding>\n  <div class="container">\n    <div *ngIf="state == \'general\'">\n      <generalinfo (stateChange)=onNofity($event)>general</generalinfo>\n    </div>\n    <div *ngIf="state == \'questionsanswers\'">\n      <h1>Questions Answers</h1>\n      <questionanswer>questioninfo</questionanswer>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/vlad/Projects/Quiz-App/quiz_MobileApp/src/pages/quizadd/quizadd.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_quiz_services__["a" /* QuizService */]])
], QuizAdd);

//# sourceMappingURL=quizadd.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_quizadd_quizadd__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_quizadd_add_generalinfo__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_quizadd_add_questionsanswers__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_quizplay_quizplay__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_quizplay_quizplaycheck__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_quizplay_quizplayquestion__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_quiz_services__ = __webpack_require__(27);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_quizadd_quizadd__["a" /* QuizAdd */],
            __WEBPACK_IMPORTED_MODULE_6__pages_quizadd_add_generalinfo__["a" /* GeneralInfo */],
            __WEBPACK_IMPORTED_MODULE_7__pages_quizadd_add_questionsanswers__["a" /* QuestionInfo */],
            __WEBPACK_IMPORTED_MODULE_8__pages_quizplay_quizplay__["a" /* QuizPlay */],
            __WEBPACK_IMPORTED_MODULE_9__pages_quizplay_quizplaycheck__["a" /* QuizCheck */],
            __WEBPACK_IMPORTED_MODULE_10__pages_quizplay_quizplayquestion__["a" /* QuizQuestion */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { tabsPlacement: 'bottom' }, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_quizadd_quizadd__["a" /* QuizAdd */],
            __WEBPACK_IMPORTED_MODULE_8__pages_quizplay_quizplay__["a" /* QuizPlay */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__services_quiz_services__["a" /* QuizService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/vlad/Projects/Quiz-App/quiz_MobileApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/vlad/Projects/Quiz-App/quiz_MobileApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quiz_services__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeneralInfo = (function () {
    function GeneralInfo(_addService) {
        this._addService = _addService;
        this.stateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    GeneralInfo.prototype.changeStateAtParent = function () {
        this._addService.setQuizInfo(this.name, this.subject);
        this.stateChange.emit("questionsanswers");
    };
    return GeneralInfo;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], GeneralInfo.prototype, "stateChange", void 0);
GeneralInfo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'generalinfo',template:/*ion-inline-start:"/home/vlad/Projects/Quiz-App/quiz_MobileApp/src/pages/quizadd/add.generalinfo.html"*/'<!--<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <h1 align="center">Quiz\'s Information</h1>\n    </ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-list>\n    <ion-item>\n        <h1 align="center">Quiz\'s Information</h1>\n    </ion-item>\n    <ion-item>\n        <ion-label color="primary">Name: </ion-label>\n        <ion-input type="text" [(ngModel)]="name" name="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label color="primary">Subject: </ion-label>\n        <ion-input type="text" [(ngModel)]="subject" name="subject"></ion-input>\n    </ion-item>\n    <ion-item>\n        <button ion-button round (click)="changeStateAtParent()">Add Questions Now</button>\n    </ion-item>\n</ion-list>'/*ion-inline-end:"/home/vlad/Projects/Quiz-App/quiz_MobileApp/src/pages/quizadd/add.generalinfo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_quiz_services__["a" /* QuizService */]])
], GeneralInfo);

//# sourceMappingURL=add.generalinfo.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_quiz_services__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionInfo = (function () {
    function QuestionInfo(navCtrl, _addService) {
        this.navCtrl = navCtrl;
        this._addService = _addService;
        this.q_a = {
            subject: "",
            question: { txt: "", img: "" },
            refs: "",
            propAnswers: []
        };
        this.stateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    QuestionInfo.prototype.createPA = function (event) {
        if (this.numProposedAnswers > 0)
            this.q_a.propAnswers = [];
        for (var i = 0; i < this.numProposedAnswers; i++) {
            var onePA = { txt: "", img: "", isCorrect: false };
            this.q_a.propAnswers.push(onePA);
        }
    };
    QuestionInfo.prototype.quizDone = function () {
        // save the last "q_a"
        this._addService.addOneQuestion(this.q_a);
        this._addService.saveQuiz(this.q_a);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {}, { animate: true, direction: 'forward' });
    };
    QuestionInfo.prototype.setNewQuestion = function () {
        this._addService.addOneQuestion(this.q_a);
        this.q_a = {
            subject: "",
            question: { txt: "", img: "" },
            refs: "",
            propAnswers: []
        };
        this.createPA(this.numProposedAnswers);
        this.stateChange.emit("general");
    };
    return QuestionInfo;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], QuestionInfo.prototype, "stateChange", void 0);
QuestionInfo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'questionanswer',template:/*ion-inline-start:"/home/vlad/Projects/Quiz-App/quiz_MobileApp/src/pages/quizadd/add.questionsanswers.html"*/'<ion-item>\n    <ion-label color="primary">Subject: </ion-label>\n    <ion-input type="text" [(ngModel)]="q_a.subject" name="q_a.subject"></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label color="primary">Question (text)</ion-label>\n    <ion-input type="text" [(ngModel)]="q_a.question.txt" name="q_a.question.txt"></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label color="primary">Question (image)</ion-label>\n    <ion-input type="text" [(ngModel)]="q_a.question.img" name="q_a.question.img"></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label color="primary">Number of Proposed Answers</ion-label>\n    <ion-input type="number" [(ngModel)]="numProposedAnswers" name="numProposedAnswers" (ngModelChange)="createPA($event)"></ion-input>\n</ion-item>\n<div *ngIf="numProposedAnswers > 0">\n    <div *ngFor="let oneqa of q_a.propAnswers">\n        <ion-item>\n            <input type="checkbox" [(ngModel)]="oneqa.isCorrect">\n            <label>(Correct Answer)</label>\n        </ion-item>\n        <ion-item>\n            <ion-input type="text" [(ngModel)]="oneqa.txt" name="oneqa.txt" placeholder="Enter Text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input type="text" [(ngModel)]="oneqa.img" name="oneqa.img" placeholder="Enter Image (URL)"></ion-input>\n        </ion-item>\n    </div>\n</div>\n<ion-item>\n    <button ion-button round (click)="quizDone()">Save Quiz</button>\n    <button ion-button round (click)="setNewQuestion()">More Question</button>\n</ion-item>'/*ion-inline-end:"/home/vlad/Projects/Quiz-App/quiz_MobileApp/src/pages/quizadd/add.questionsanswers.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_quiz_services__["a" /* QuizService */]])
], QuestionInfo);

//# sourceMappingURL=add.questionsanswers.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizCheck; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_quiz_services__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizCheck = (function () {
    function QuizCheck(navCtrl, _playservice) {
        this.navCtrl = navCtrl;
        this._playservice = _playservice;
        this.qa = null;
        this.isMore = true;
        this.stateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    QuizCheck.prototype.ngOnInit = function () {
        this.qa = this._playservice.getQuestion2Play();
    };
    QuizCheck.prototype.quizStopPlaying = function () {
        this._playservice.setInit();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {}, { animate: true, direction: 'forward' });
    };
    QuizCheck.prototype.playAgain = function () {
        this.stateChange.emit();
    };
    QuizCheck.prototype.getCorrectForm = function (oneqa) {
        if (oneqa.isCorrect) {
            return "<b><font color='green'>" + oneqa.txt + "</font></b>";
        }
        else {
            if (oneqa.isSelected)
                return "<b><font color='red'><strike>" + oneqa.txt + "</strike></font></b>";
            else
                return oneqa.txt;
        }
    };
    QuizCheck.prototype.isDefinedQA = function () {
        return typeof (this.qa) !== null;
    };
    return QuizCheck;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], QuizCheck.prototype, "stateChange", void 0);
QuizCheck = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'quiz-play-check',template:/*ion-inline-start:"/home/vlad/Projects/Quiz-App/quiz_MobileApp/src/pages/quizplay/quizplaycheck.html"*/'<ion-list *ngIf="isDefinedQA()">\n    <ion-item>\n        <h3 align="center" class="questionTxt">Question: {{qa.question.txt}}</h3>\n    </ion-item>\n    <ion-item *ngIf="qa.question.img.length>0">\n        <p align="center">\n            <ion-img width="80" height="80" src="qa.question.img"> </ion-img>\n        </p>\n    </ion-item>\n    <div *ngFor="let oneqa of qa.propAnswers; let i = index">\n        <ion-item>\n            <input type="checkbox" [(ngModel)]="oneqa.isSelected" disabled>\n            <label *ngIf="true" [innerHTML]="getCorrectForm(oneqa)"></label>\n        </ion-item>\n        <ion-item *ngIf="oneqa.img.length>0">\n            <p align="center">\n                <ion-img width="80" height="80" src="oneqa.img"></ion-img>\n            </p>\n        </ion-item>\n    </div>\n    <ion-item>\n        <button ion-button round (click)="playAgain()">More</button>&nbsp;&nbsp;\n        <button ion-button round (click)="quizStopPlaying()">Stop</button>\n    </ion-item>\n</ion-list>'/*ion-inline-end:"/home/vlad/Projects/Quiz-App/quiz_MobileApp/src/pages/quizplay/quizplaycheck.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_quiz_services__["a" /* QuizService */]])
], QuizCheck);

//# sourceMappingURL=quizplaycheck.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizService = (function () {
    function QuizService(_http) {
        var _this = this;
        this._http = _http;
        this.playingPosition = 0;
        this.randomIndex = [];
        this.playingQuiz = null;
        // new Quiz must be initiated first ...
        this.newQuiz2Add = {
            name: "",
            subject: "",
            q_a: []
        };
        this.playingQuestion = null;
        this.apiKey = "jXgmde_ktbMrDBddTn78j5DQycO5gTni";
        this.quizUrl = "https://api.mlab.com/api/1/databases/quiz/collections/quizanswer?apiKey=" + this.apiKey;
        // build a default Quiz
        this._http.put(this.quizUrl, sample).subscribe();
        // get ready for the first question to play
        this._http.get(this.quizUrl).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.setQuizPlay(_this.rawData2QuizStruct(res));
        });
    }
    QuizService.prototype.setInit = function () {
        this.playingPosition = 0;
        this.playingQuestion = null;
    };
    ///////////////////////////////////////////////////////////////////////////////////
    //                            Start of Add new Quiz                              //
    ///////////////////////////////////////////////////////////////////////////////////
    QuizService.prototype.setQuizInfo = function (name, subject) {
        this.newQuiz2Add.name = name;
        this.newQuiz2Add.subject = subject;
    };
    QuizService.prototype.addOneQuestion = function (q_a) {
        this.newQuiz2Add.q_a.push(q_a);
    };
    QuizService.prototype.getQuestion2Check = function () {
        return this.playingQuestion;
    };
    // add new quiz into the database
    QuizService.prototype.saveQuiz = function (q_a) {
        this._http.put(this.quizUrl, this.newQuiz2Add).subscribe();
    };
    ///////////////////////////////////////////////////////////////////////////////////
    //                              End of Add new Quiz                              //
    ///////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////
    //                                 Start of Play                                 //
    ///////////////////////////////////////////////////////////////////////////////////
    // set (randomly) one question to play
    QuizService.prototype.setQuestion2Play = function () {
        this.playingQuestion = this.playingQuiz.q_a[this.randomIndex[this.playingPosition]];
        // set the next position: taking care of "out of range" problem ;-)
        this.playingPosition = (this.playingPosition + 1) % this.randomIndex.length;
    };
    // when the user has given its answers: we record it to check later ...
    QuizService.prototype.updatePlayingQuestion = function (q) { this.playingQuestion = q; };
    // get (randomly) one question to play
    QuizService.prototype.getQuestion2Play = function () { return this.playingQuestion; };
    // get (randomly) one question to play
    QuizService.prototype.getNewQuestion2Play = function () {
        this.setQuestion2Play();
        return this.playingQuestion;
    };
    QuizService.prototype.getGeneralInfo = function () {
        return [this.playingQuiz.name, this.playingQuiz.subject];
    };
    // get new quiz from the databse
    QuizService.prototype.getQuizStruct = function () {
        return this._http.get(this.quizUrl).map(function (res) { return res.json(); });
    };
    // set up a list of random index of the question, so we don't have
    // always the same chronological order of question when we play
    QuizService.prototype.setRandomIndex = function (length) {
        var isTaken = [];
        for (var i = 0; i < length; i++)
            isTaken[i] = false;
        for (var i = 0; i < length; i++) {
            var count = 0;
            var num = Math.floor(Math.random() * length);
            while (count < length) {
                if (!isTaken[num]) {
                    this.randomIndex.push(num);
                    isTaken[num] = true;
                    break;
                }
                num = (num + 1) % length;
                count++;
            }
        }
    };
    // to transform data from the database into a Quiz's structure
    // For now, we are getting ride of the Quiz's ID (which is created by "mLab")
    //    because we don't need the Id (very important, but not while playing)
    QuizService.prototype.rawData2QuizStruct = function (data) {
        // as soon as we get a new quiz (to play)
        // we set up the random index's list
        this.setRandomIndex(data[0].q_a.length);
        var quiz = {
            name: data[0].name,
            subject: data[0].subject,
            q_a: data[0].q_a
        };
        return quiz;
    };
    // Transformation of Quiz's structure into a QuizStructPlay
    // (by adding the field "isSelected" to each proposed answer)
    QuizService.prototype.setQuizPlay = function (quiz) {
        var quizPlay = {
            name: quiz.name,
            subject: quiz.subject,
            q_a: this.qa2qaPlay(quiz.q_a)
        };
        this.playingQuiz = quizPlay;
        this.setQuestion2Play();
    };
    // a "proposed answer" should be converted into a structure that we could play ("PropAnsPlay")    
    // by adding the field "isSeleted" to "record" the user's choice
    QuizService.prototype.pa2paPlay = function (pa) {
        // Need to initiate the variable, otherwise, it will be "undefined"
        var result = [];
        for (var i = 0; i < pa.length; i++) {
            var pap = {
                txt: pa[i].txt,
                img: pa[i].img,
                isSelected: false,
                isCorrect: pa[i].isCorrect
            };
            result.push(pap);
        }
        return result;
    };
    // a "proposed answer" of "playing" should be converted into a structure that we could persist
    // to the database (which only know under the structure of "PropAns"). We could just delete
    // the field "isSeleted" in to get back into the "PropAns" structure
    QuizService.prototype.paPlay2pa = function (pap) {
        // Need to initiate the variable, otherwise, it will be "undefined"
        var result = [];
        for (var i = 0; i < pap.length; i++) {
            var pa = {
                txt: pap[i].txt,
                img: pap[i].img,
                isCorrect: pap[i].isCorrect
            };
            result.push(pa);
        }
        return result;
    };
    QuizService.prototype.qa2qaPlay = function (qa) {
        // Need to initiate the variable, otherwise, it will be "undefined"
        var lqaPlay = [];
        for (var i = 0; i < qa.length; i++) {
            var qap = {
                subject: qa[i].subject,
                question: qa[i].question,
                refs: qa[i].refs,
                propAnswers: this.pa2paPlay(qa[i].propAnswers)
            };
            lqaPlay.push(qap);
        }
        return lqaPlay;
    };
    QuizService.prototype.qaPlay2qa = function (qap) {
        // Need to initiate the variable, otherwise, it will be "undefined"
        var lqa = [];
        for (var i = 0; i < qap.length; i++) {
            var qa = {
                subject: qap[i].subject,
                question: qap[i].question,
                refs: qap[i].refs,
                propAnswers: this.paPlay2pa(qap[i].propAnswers)
            };
            lqa.push(qa);
        }
        return lqa;
    };
    return QuizService;
}());
QuizService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], QuizService);

var sample = {
    "name": "Writing Number with Words",
    "subject": "Write Number",
    "q_a": [{
            "subject": "Transforming Number into Corresponding Word",
            "question": {
                "txt": "How to Write '1' with Word?",
                "img": ""
            },
            "propAnswers": [{
                    "txt": "One",
                    "img": "",
                    "isCorrect": true
                },
                {
                    "txt": "Two",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Three",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Four",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Five",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Six",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Seven",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Eight",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Nine",
                    "img": "",
                    "isCorrect": false
                }
            ],
            "refs": ""
        },
        {
            "subject": "Transforming Number into Corresponding Word",
            "question": {
                "txt": "How to Write '2' with Word?",
                "img": ""
            },
            "propAnswers": [{
                    "txt": "One",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Two",
                    "img": "",
                    "isCorrect": true
                },
                {
                    "txt": "Three",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Four",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Five",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Six",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Seven",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Eight",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Nine",
                    "img": "",
                    "isCorrect": false
                }
            ],
            "refs": ""
        },
        {
            "subject": "Transforming Number into Corresponding Word",
            "question": {
                "txt": "How to Write '3' with Word?",
                "img": ""
            },
            "propAnswers": [{
                    "txt": "One",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Two",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Three",
                    "img": "",
                    "isCorrect": true
                },
                {
                    "txt": "Four",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Five",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Six",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Seven",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Eight",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Nine",
                    "img": "",
                    "isCorrect": false
                }
            ],
            "refs": ""
        },
        {
            "subject": "Transforming Number into Corresponding Word",
            "question": {
                "txt": "How to Write '4' with Word?",
                "img": ""
            },
            "propAnswers": [{
                    "txt": "One",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Two",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Three",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Four",
                    "img": "",
                    "isCorrect": true
                },
                {
                    "txt": "Five",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Six",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Seven",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Eight",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Nine",
                    "img": "",
                    "isCorrect": false
                }
            ],
            "refs": ""
        },
        {
            "subject": "Transforming Number into Corresponding Word",
            "question": {
                "txt": "How to Write '5' with Word?",
                "img": ""
            },
            "propAnswers": [{
                    "txt": "One",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Two",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Three",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Four",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Five",
                    "img": "",
                    "isCorrect": true
                },
                {
                    "txt": "Six",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Seven",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Eight",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Nine",
                    "img": "",
                    "isCorrect": false
                }
            ],
            "refs": ""
        },
        {
            "subject": "Transforming Number into Corresponding Word",
            "question": {
                "txt": "How to Write '6' with Word?",
                "img": ""
            },
            "propAnswers": [{
                    "txt": "One",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Two",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Three",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Four",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Five",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Six",
                    "img": "",
                    "isCorrect": true
                },
                {
                    "txt": "Seven",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Eight",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Nine",
                    "img": "",
                    "isCorrect": false
                }
            ],
            "refs": ""
        },
        {
            "subject": "Transforming Number into Corresponding Word",
            "question": {
                "txt": "How to Write '7' with Word?",
                "img": ""
            },
            "propAnswers": [{
                    "txt": "One",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Two",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Three",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Four",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Five",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Six",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Seven",
                    "img": "",
                    "isCorrect": true
                },
                {
                    "txt": "Eight",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Nine",
                    "img": "",
                    "isCorrect": false
                }
            ],
            "refs": ""
        },
        {
            "subject": "Transforming Number into Corresponding Word",
            "question": {
                "txt": "How to Write '8' with Word?",
                "img": ""
            },
            "propAnswers": [{
                    "txt": "One",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Two",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Three",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Four",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Five",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Six",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Seven",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Eight",
                    "img": "",
                    "isCorrect": true
                },
                {
                    "txt": "Nine",
                    "img": "",
                    "isCorrect": false
                }
            ],
            "refs": ""
        },
        {
            "subject": "Transforming Number into Corresponding Word",
            "question": {
                "txt": "How to Write '9' with Word?",
                "img": ""
            },
            "propAnswers": [{
                    "txt": "One",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Two",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Three",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Four",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Five",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Six",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Seven",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Eight",
                    "img": "",
                    "isCorrect": false
                },
                {
                    "txt": "Nine",
                    "img": "",
                    "isCorrect": true
                }
            ],
            "refs": ""
        }
    ]
};
//# sourceMappingURL=quiz.services.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quiz_services__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizQuestion = (function () {
    function QuizQuestion(_quizServices) {
        this._quizServices = _quizServices;
        this.qa = null;
        this.stateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    QuizQuestion.prototype.ngOnInit = function () {
        var _this = this;
        this._quizServices.getQuizStruct().subscribe(function (res) {
            _this.qa = _this._quizServices.getQuestion2Play();
        });
    };
    QuizQuestion.prototype.goCheckAnswers = function () {
        this._quizServices.updatePlayingQuestion(this.qa);
        this.stateChange.emit();
    };
    QuizQuestion.prototype.isDefinedQA = function () {
        return this.qa !== null;
    };
    return QuizQuestion;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], QuizQuestion.prototype, "stateChange", void 0);
QuizQuestion = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'quiz-question-play',template:/*ion-inline-start:"/home/vlad/Projects/Quiz-App/quiz_MobileApp/src/pages/quizplay/quizplayquestion.html"*/'<ion-list *ngIf="isDefinedQA()">\n    <ion-item>\n        <h3 align="center" class="questionTxt">Question: {{qa.question.txt}}</h3>\n    </ion-item>\n    <ion-item *ngIf="qa.question.img.length>0">\n        <p align="center">\n            <ion-img width="80" height="80" src="qa.question.img"></ion-img>\n        </p>\n    </ion-item>\n    <div *ngFor="let oneqa of qa.propAnswers; let i = index">\n        <ion-item>\n            <input type="checkbox" [(ngModel)]="oneqa.isSelected">\n            <label *ngIf="true" [innerHTML]="oneqa.txt"></label>\n        </ion-item>\n        <ion-item *ngIf="oneqa.img.length>0">\n            <p align="center">\n                <ion-img width="80" height="80" src="oneqa.img"></ion-img>\n            </p>\n        </ion-item>\n    </div>\n    <ion-item>\n        <button ion-button round (click)="goCheckAnswers()">Check</button>\n    </ion-item>\n</ion-list>'/*ion-inline-end:"/home/vlad/Projects/Quiz-App/quiz_MobileApp/src/pages/quizplay/quizplayquestion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_quiz_services__["a" /* QuizService */]])
], QuizQuestion);

//# sourceMappingURL=quizplayquestion.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/vlad/Projects/Quiz-App/quiz_MobileApp/src/pages/home/home.html"*/'<ion-content padding>\n  <br/><br/><br/><br/><br/>\n  <div class="slogan">Learn More With Quizzes</div>\n</ion-content>\n'/*ion-inline-end:"/home/vlad/Projects/Quiz-App/quiz_MobileApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map