import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PropAns } from '../models/quiz.propans.model';
import { PropAnsPlay } from '../models/quiz.propansplay.model';
import { QA } from '../models/quiz.qa.model';
import { QAPlay } from '../models/quiz.qaplay.model';
import { QuizStruct } from '../models/quiz.struct.model';
import { QuizStructPlay } from '../models/quiz.structplay.model';

@Injectable()
export class QuizService {
    apiKey: string;
    quizUrl: string;
    playingPosition: number = 0;
    randomIndex: number[] = [];
    playingQuiz: QuizStructPlay = null;
    // new Quiz must be initiated first ...
    newQuiz2Add: QuizStruct = {
        name: "",
        subject: "",
        q_a: []
    };
    playingQuestion: QAPlay = null;

    constructor(private _http: Http) {
        this.apiKey = "jXgmde_ktbMrDBddTn78j5DQycO5gTni";
        this.quizUrl = "https://api.mlab.com/api/1/databases/quiz/collections/quizanswer?apiKey=" + this.apiKey;
        // build a default Quiz
        this._http.put(this.quizUrl, sample).subscribe();

        // get ready for the first question to play
        this._http.get(this.quizUrl).map(res => res.json()).subscribe(res => {
            this.setQuizPlay(this.rawData2QuizStruct(res));
        });
    }

    setInit(): void {
        this.playingPosition = 0;
        this.playingQuestion = null;
    }

    ///////////////////////////////////////////////////////////////////////////////////
    //                            Start of Add new Quiz                              //
    ///////////////////////////////////////////////////////////////////////////////////
    setQuizInfo(name: string, subject: string): void {
        this.newQuiz2Add.name = name;
        this.newQuiz2Add.subject = subject;
    }

    addOneQuestion(q_a: QA): void {
        this.newQuiz2Add.q_a.push(q_a);
    }

    getQuestion2Check(): QAPlay {
        return this.playingQuestion;
    }

    // add new quiz into the database
    saveQuiz(q_a: QA): void {
        this._http.put(this.quizUrl, this.newQuiz2Add).subscribe();
    }
    ///////////////////////////////////////////////////////////////////////////////////
    //                              End of Add new Quiz                              //
    ///////////////////////////////////////////////////////////////////////////////////


    ///////////////////////////////////////////////////////////////////////////////////
    //                                 Start of Play                                 //
    ///////////////////////////////////////////////////////////////////////////////////
    // set (randomly) one question to play
    setQuestion2Play(): void {
        this.playingQuestion = this.playingQuiz.q_a[this.randomIndex[this.playingPosition]];
        // set the next position: taking care of "out of range" problem ;-)
        this.playingPosition = (this.playingPosition + 1) % this.randomIndex.length;
    }

    // when the user has given its answers: we record it to check later ...
    updatePlayingQuestion(q: QAPlay): void { this.playingQuestion = q; }

    // get (randomly) one question to play
    getQuestion2Play(): QAPlay { return this.playingQuestion;  }

    // get (randomly) one question to play
    getNewQuestion2Play(): QAPlay {
        this.setQuestion2Play();
        return this.playingQuestion;
    }

    getGeneralInfo(): string[] {
        return [this.playingQuiz.name, this.playingQuiz.subject];
    }

    // get new quiz from the databse
    getQuizStruct(): Observable<any> {
        return this._http.get(this.quizUrl).map(res => res.json());
    }

    // set up a list of random index of the question, so we don't have
    // always the same chronological order of question when we play
    setRandomIndex(length: number): void {
        var isTaken: boolean[] = [];
        for (let i = 0; i < length; i++)
            isTaken[i] = false;

        for (let i = 0; i < length; i++) {
            let count = 0;
            let num = Math.floor(Math.random() * length);
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
    }

    // to transform data from the database into a Quiz's structure
    // For now, we are getting ride of the Quiz's ID (which is created by "mLab")
    //    because we don't need the Id (very important, but not while playing)
    rawData2QuizStruct(data: any): QuizStruct {
        // as soon as we get a new quiz (to play)
        // we set up the random index's list
        this.setRandomIndex(data[0].q_a.length);
        var quiz: QuizStruct = {
            name: data[0].name,
            subject: data[0].subject,
            q_a: data[0].q_a
        }
        return quiz;
    }

    // Transformation of Quiz's structure into a QuizStructPlay
    // (by adding the field "isSelected" to each proposed answer)
    setQuizPlay(quiz: QuizStruct): void {
        var quizPlay: QuizStructPlay = {
            name: quiz.name,
            subject: quiz.subject,
            q_a: this.qa2qaPlay(quiz.q_a)
        }
        this.playingQuiz = quizPlay;
        this.setQuestion2Play();
    }

    // a "proposed answer" should be converted into a structure that we could play ("PropAnsPlay")    
    // by adding the field "isSeleted" to "record" the user's choice
    pa2paPlay(pa: PropAns[]): PropAnsPlay[] {
        // Need to initiate the variable, otherwise, it will be "undefined"
        var result: PropAnsPlay[] = [];
        for (let i = 0; i < pa.length; i++) {
            var pap: PropAnsPlay = {
                txt: pa[i].txt,
                img: pa[i].img,
                isSelected: false,
                isCorrect: pa[i].isCorrect
            };
            result.push(pap);
        }
        return result;
    }

    // a "proposed answer" of "playing" should be converted into a structure that we could persist
    // to the database (which only know under the structure of "PropAns"). We could just delete
    // the field "isSeleted" in to get back into the "PropAns" structure
    paPlay2pa(pap: PropAnsPlay[]): PropAns[] {
        // Need to initiate the variable, otherwise, it will be "undefined"
        var result: PropAns[] = [];
        for (let i = 0; i < pap.length; i++) {
            let pa: PropAns = {
                txt: pap[i].txt, 
                img: pap[i].img,
                isCorrect: pap[i].isCorrect
            };
            result.push(pa);
        }
        return result;
    }

    qa2qaPlay(qa: QA[]): QAPlay[] {
        // Need to initiate the variable, otherwise, it will be "undefined"
        var lqaPlay: QAPlay[] = [];

        for (let i = 0; i < qa.length; i++) {
            let qap: QAPlay = {
                subject: qa[i].subject,
                question: qa[i].question,
                refs: qa[i].refs,
                propAnswers: this.pa2paPlay(qa[i].propAnswers)
            }
            lqaPlay.push(qap);
        }
        return lqaPlay;
    }

    qaPlay2qa(qap: QAPlay[]): QA[] {
        // Need to initiate the variable, otherwise, it will be "undefined"
        var lqa: QA[] = [];
        for (let i = 0; i < qap.length; i++) {
            let qa: QA = {
                subject: qap[i].subject,
                question: qap[i].question,
                refs: qap[i].refs,
                propAnswers: this.paPlay2pa(qap[i].propAnswers)
            }
            lqa.push(qa);
        }
        return lqa;
    }
    ///////////////////////////////////////////////////////////////////////////////////
    //                                 End of Play                                   //
    ///////////////////////////////////////////////////////////////////////////////////
}

const sample: QuizStruct = {
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
}