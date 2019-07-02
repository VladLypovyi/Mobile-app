import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { QuizService } from '../../services/quiz.services';

import { PropAns } from '../../models/quiz.propans.model';
import { QA } from '../../models/quiz.qa.model';

@Component({
  selector: 'questionanswer',
  templateUrl: `./add.questionsanswers.html`,
})
export class QuestionInfo {
  q_a: QA = {
    subject: "",
    question: { txt: "", img: "" },
    refs: "",
    propAnswers: []
  };

  numProposedAnswers: number;

  constructor(public navCtrl: NavController, public _addService: QuizService) { }

  @Output() stateChange: EventEmitter<string> = new EventEmitter<string>();

  createPA(event: number): void {
    if (this.numProposedAnswers > 0)
      this.q_a.propAnswers = [];
    for (let i = 0; i < this.numProposedAnswers; i++) {
      let onePA: PropAns = { txt: "", img: "", isCorrect: false };
      this.q_a.propAnswers.push(onePA)
    }
  }

  quizDone(): void {
    // save the last "q_a"
    this._addService.addOneQuestion(this.q_a);
    this._addService.saveQuiz(this.q_a);
    this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
  }

  setNewQuestion(): void {
    this._addService.addOneQuestion(this.q_a);
    this.q_a = {
      subject: "",
      question: { txt: "", img: "" },
      refs: "",
      propAnswers: []
    };
    this.createPA(this.numProposedAnswers);
    this.stateChange.emit("general");
  }
}
