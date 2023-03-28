import {Component, OnChanges, OnInit} from '@angular/core';
import {QuizService} from "../../services/quiz.service";

@Component({
  selector: 'app-quiz-summary',
  templateUrl: './quiz-summary.component.html',
  styleUrls: ['./quiz-summary.component.css']
})
export class QuizSummaryComponent implements OnInit,OnChanges{

  quizResults: { quizId: number, score: number,quizName:string }[] = [];
  constructor(private  quizService:QuizService) {

  }
  ngOnInit() {
    this.quizResults = this.quizService.getAllQuizResults();
    console.log(this.quizResults)
  }
  ngOnChanges() {

  }

}
