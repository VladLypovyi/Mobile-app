import { PropAnsPlay } from './quiz.propansplay.model';

export interface QAPlay {
    subject: string;
    question: {
        txt:string;
        img:string;
    }
    refs:string;
    propAnswers:PropAnsPlay[];
}