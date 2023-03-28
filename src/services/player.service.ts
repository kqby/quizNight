import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playerName: string | undefined = '';
  constructor() { }
  setPlayerName(name: string | undefined): void {
    this.playerName = name;
  }
  getPlayerName(): string {
    return <string>this.playerName;
  }



}
