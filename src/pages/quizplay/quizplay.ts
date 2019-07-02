import { Component } from '@angular/core';

import { QuizService } from '../../services/quiz.services';

import { QAPlay } from '../../models/quiz.qaplay.model';

@Component({
  selector: 'quizplay',
  templateUrl: 'quizplay.html'
})
export class QuizPlay {
  // We need just one question to play at a given time
  // We should let "services" deals with logic
  qaPlay: QAPlay = null;
  quizName: string;
  quizSubject: string;

  isQuestion: boolean = true;
  isDone: boolean = false;

  constructor(public _quizServices: QuizService) { 
    this._quizServices.getQuizStruct().subscribe(res => {
      this._quizServices.setQuizPlay(this._quizServices.rawData2QuizStruct(res));
      this.qaPlay = this._quizServices.getNewQuestion2Play();

      var info: string[] = this._quizServices.getGeneralInfo();
      this.quizName = info[0];
      this.quizSubject = info[1];
    });
  }

  goCheckAnswers(){
    this._quizServices.updatePlayingQuestion(this.qaPlay);
    this.isQuestion = false;
  }

  getNewQuestion(): void {
    this.isQuestion = true;
    this.qaPlay = this._quizServices.getNewQuestion2Play();
  }

  isDefinedQA(): boolean {
    return typeof (this.qaPlay) !== null;
  }
}
