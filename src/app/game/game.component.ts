import { Component, OnInit, Input } from '@angular/core';
import { Game } from "../models/game"
import { Question } from "../models/question"

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() game: Game

  constructor() { }

  questions(): Question[] {
    return this.game && this.game.questions
  }

  ngOnInit() {
  }

}
