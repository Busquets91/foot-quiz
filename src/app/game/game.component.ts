import { Component, OnInit, Input } from "@angular/core"
import { Game } from "../models/game"
import { Question } from "../models/question"

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  @Input() game: Game
  // @deprecated
  private score: number = 0

  constructor() {}

  questions(): Question[] {
    return this.game && this.game.questions
  }

  // @deprecated
  incrementScore(added: number) {
    this.score += added
  }

  next(score: number) {
    this.incrementScore(score)
    console.log(this.score)
  }

  ngOnInit() {}
}
