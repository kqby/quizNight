import {Component} from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {QuizService} from "../../services/quiz.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string | undefined;
  playerName: string | undefined;
  categoryId: number = 0;
  isShow = false
  score : number | undefined

  constructor(private playerService: PlayerService  ,
              private  quizService:QuizService) { }

  onSubmit(form: { valid: any; }) {
    if (form.valid) {
      this.playerService.setPlayerName(this.name);
      this.playerName = this.name;
    }
  }

  showSummary() {
    this.isShow = (!this.isShow)

    // Megjelenítjük a pontszám összesítést
  }


  onCategorySelected(categoryId: number) {
    this.categoryId = categoryId;
  }

  resetQuiz() {
    this.quizService.restartQuizAll()
  }
}
