import { PropAns } from './quiz.propans.model';

export interface QA {
    subject: string;
    question: {
        txt:string;
        img:string;
    }
    refs:string;
    propAnswers:PropAns[];
}