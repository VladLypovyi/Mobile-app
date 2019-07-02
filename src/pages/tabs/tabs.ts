import { Component } from '@angular/core';

import { QuizPlay } from '../quizplay/quizplay';
import { QuizAdd } from '../quizadd/quizadd';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  addRoot = QuizAdd;
  playRoot = QuizPlay;

  constructor() {

  }
}
