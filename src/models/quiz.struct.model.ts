import { QA } from '../models/quiz.qa.model';

export interface QuizStruct {
    name: string;
    subject: string;
    q_a:QA[];
}