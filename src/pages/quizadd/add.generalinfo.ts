import { Component, EventEmitter, Output } from '@angular/core';

import { QuizService } from '../../services/quiz.services';

@Component({
  selector: 'generalinfo',
  templateUrl: `./add.generalinfo.html`,
})
export class GeneralInfo {
  name: string;
  subject: string;

  @Output() stateChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _addService: QuizService) { }

  changeStateAtParent() {
    this._addService.setQuizInfo(this.name, this.subject);
    this.stateChange.emit("questionsanswers");
  }
}
