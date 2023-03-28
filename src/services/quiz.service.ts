import {Injectable} from '@angular/core';
import {environments} from "../environments/environments";
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs';
import {Quizquestion} from "../interface/quizquestion";

@Injectable({
  providedIn: 'root'
})
export class QuizService  {

  private readonly quizUrl = environments.quizUrl
  quizResults: { quizId: number, score: number , quizName:string }[] = [];


  addQuizResult(quizId: number, score: number, quizName:string) {
    const quizIndex = this.quizResults.findIndex(q => q.quizId === quizId);

    if (quizIndex !== -1) {
        this.quizResults[quizIndex].score = score;
    }
    else {
      this.quizResults.push({ quizId, score , quizName });
    }
  }

  getAllQuizResults() {
    return this.quizResults;
  }

  restartQuizAll(){
    for (const category of this.quizResults){
      category.score = 0;
    }
  }


  constructor(private http:HttpClient) {}
  getQuizQuestions(category: number){
    const url = `${this.quizUrl}&category=${category}`;
    return this.http.get(url).pipe(map((resp:any) => {
      const questions = resp.results;
      questions.forEach((q: any) => {
        const answers = [q.correct_answer, ...q.incorrect_answers];
        this.shuffle(answers);
        q.answers = answers;
      });
      return questions as Quizquestion[];
  }))}


    //A válaszokat összekeverjük.
    shuffle(array: string[]){
    let currentIndex = array.length,randomIndex;

    //ameddig van elemen shufflezni
    while (currentIndex != 0){

      //pick a remaning element..
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      //swap it with the current element
      [array[currentIndex],array[randomIndex]] = [array[randomIndex],array[currentIndex]]
    }
    }


}
