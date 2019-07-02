import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { QuizService } from '../../services/quiz.services';

import { QAPlay } from '../../models/quiz.qaplay.model';
import { PropAnsPlay } from '../../models/quiz.propansplay.model';

@Component({
  selector: 'quiz-play-check',
  templateUrl: `./quizplaycheck.html`,
})
export class QuizCheck implements OnInit {
  qa: QAPlay = null;
  isMore: boolean = true;

  @Output() stateChange: EventEmitter<any> = new EventEmitter();

  constructor(public navCtrl: NavController, private _playservice: QuizService) { }

  ngOnInit() {
    this.qa = this._playservice.getQuestion2Play();
  }

  quizStopPlaying(): void {
    this._playservice.setInit();
    this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
  }

  playAgain(): void {
    this.stateChange.emit();
  }

  getCorrectForm(oneqa: PropAnsPlay): string {
    if (oneqa.isCorrect) {
      return "<b><font color='green'>" + oneqa.txt + "</font></b>";
    }
    else {
      if (oneqa.isSelected)
        return "<b><font color='red'><strike>" + oneqa.txt + "</strike></font></b>";
      else
        return oneqa.txt;
    }
  }

  isDefinedQA(): boolean {
    return typeof (this.qa) !== null;
  }
}
