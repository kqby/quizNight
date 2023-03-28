import { Component } from '@angular/core';
import {PlayerService} from "../services/player.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string | undefined;
  playerName: string | undefined;
  categoryId: number = 0;

  constructor(private playerService: PlayerService) { }

  onSubmit(form: { valid: any; }) {
    if (form.valid) {
      this.playerService.setPlayerName(this.name);
      this.playerName = this.name;
    }
  }


  onCategorySelected(categoryId: number) {
    this.categoryId = categoryId;
  }


}
