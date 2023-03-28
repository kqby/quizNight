import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quizquestion} from "../../interface/quizquestion";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements  OnInit{
    @Input() question: Quizquestion | undefined;
    @Input() category: number | undefined;
    @Input() showCorrectAnswer = false
    selectedAnswer: string |undefined
    @Output() selectedAnswerChange = new EventEmitter<string>()

  ngOnInit() {
      this.showCorrectAnswer = false
  }


  selectAnswer(answer:string){
      this.selectedAnswer = answer
      this.selectedAnswerChange.emit(this.selectedAnswer)

  }
}
