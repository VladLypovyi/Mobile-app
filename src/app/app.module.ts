import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { QuizAdd } from '../pages/quizadd/quizadd';
import { GeneralInfo } from '../pages/quizadd/add.generalinfo';
import { QuestionInfo } from '../pages/quizadd/add.questionsanswers';
import { QuizPlay } from '../pages/quizplay/quizplay';
import { QuizCheck } from '../pages/quizplay/quizplaycheck';
import { QuizQuestion } from '../pages/quizplay/quizplayquestion';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { QuizService } from '../services/quiz.services';

@NgModule({
  declarations: [
    MyApp,

    QuizAdd,
    GeneralInfo,
    QuestionInfo,

    QuizPlay,
    QuizCheck,
    QuizQuestion,

    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { tabsPlacement: 'bottom' }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QuizAdd,
    QuizPlay,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    QuizService
  ]
})
export class AppModule { }
