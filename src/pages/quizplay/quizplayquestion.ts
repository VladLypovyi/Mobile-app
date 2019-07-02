import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { QuizService } from '../../services/quiz.services';

import { QAPlay } from '../../models/quiz.qaplay.model';

@Component({
  selector: 'quiz-question-play',
  templateUrl: `./quizplayquestion.html`,
})
export class QuizQuestion implements OnInit {
  qa: QAPlay = null;

  @Output() stateChange: EventEmitter<any> = new EventEmitter();

  constructor(private _quizServices: QuizService) { }

  ngOnInit() {
    this._quizServices.getQuizStruct().subscribe(res => {
      this.qa = this._quizServices.getQuestion2Play();
    });
  }

  goCheckAnswers() {
    this._quizServices.updatePlayingQuestion(this.qa);
    this.stateChange.emit();
  }

  isDefinedQA(): boolean {
    return this.qa !== null;
  }
}