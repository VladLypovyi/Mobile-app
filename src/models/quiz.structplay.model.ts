import { QAPlay } from '../models/quiz.qaplay.model';

export interface QuizStructPlay {
    name: string;
    subject: string;
    q_a:QAPlay[];
}