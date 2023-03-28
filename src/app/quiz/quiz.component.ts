import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {QuizService} from "../../services/quiz.service";
import {Quizquestion} from "../../interface/quizquestion";
import {CategoryService} from "../../services/category.service";



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnChanges,OnInit{

  @Input() category: number | undefined

  questions: Quizquestion[] = [];
  selectedAnswers: (string | undefined)[]  = []

  result_show = false
  isGameEnded  = false

  result: number | undefined
  category_name : any;



constructor(private quizService:QuizService,
            private  categoryService:CategoryService) {

}
ngOnInit() {
  this.result_show = false
}

  ngOnChanges() {
      this.loadQuestions()
      this.result = undefined
      this.isGameEnded = false
      this.result_show = false
  }
  loadQuestions() {
    if (this.category) {
      this.quizService.getQuizQuestions(this.category).subscribe({
        next: resp => this.questions = resp
      })
    }
  }
  questionAnswer(answer:string,index:number){
    this.selectedAnswers[index] = answer
    this.isGameEnded = this.selectedAnswers.filter(a => a === undefined).length === 0;

  }
  sendAnswers(){

    this.isGameEnded = true
    const points = this.selectedAnswers.filter(
      (a, i) =>
        this.questions[i].correct_answer === a).length;
    this.result = points
    if(this.category){
      this.getCategoryNameById(this.category)
      this.quizService.addQuizResult(this.category,this.result,this.category_name)
    }
    this.result_show = true
}
   getCategoryNameById(id: number): string | undefined {
    const category = this.categoryService.categories.find((c) => c.id === id);
     this.category_name = category ? category.name : undefined;
      return category ? category.name : undefined;
  }


}
