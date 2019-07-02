import { Component } from '@angular/core';

import { QuizService } from '../../services/quiz.services';

import { QuizStruct } from '../../models/quiz.struct.model';
import { PropAns } from '../../models/quiz.propans.model';
import { QA } from '../../models/quiz.qa.model';

@Component({
    selector: 'quizadd',
    templateUrl: 'quizadd.html'
})
export class QuizAdd {
    // the structure that will be added into the
    // database
    quizStruct: QuizStruct = {
        name: "",
        subject: "",
        q_a: []
    };
    state: string = "general";
    statenumber: number = 0;

    // One question of the quiz. When a question is ready
    // then it will be added into "q_a" of the quiz
    qa: QA = {
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
    pa: PropAns[] = [];

    constructor(public quizServices: QuizService) { }

    // add one question (and its proposed answers) to quiz
    addQA2Quiz(): void {
        this.quizStruct.q_a.push(this.qa);
    }

    // add all proposed answers to one question 
    addListPropAns(): void {
        this.qa.propAnswers = this.pa;
        // reset proposed answers for next question
        this.pa = [];
    }

    onNofity(message: string): void {
        this.state = message;
    }
}
