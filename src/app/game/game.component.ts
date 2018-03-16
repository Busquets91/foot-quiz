import { Component, OnInit, Input, Output, EventEmitter  } from "@angular/core"
import { Game } from "../models/game"
import { Question } from "../models/question"

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  @Input() game: Game
  private score: number = 0
  indexQuestion: number = 0

  @Output() gameOver: EventEmitter<number> = new EventEmitter()
  constructor() {}

  /** @deprecated */
  questions(): Question[] {
    return this.game && this.game.questions
  }

  currentQuestion(): Question {
    return (
      this.game &&
      this.game.questions &&
      this.game.questions[this.indexQuestion]
    )
  }

  // @deprecated
  public isGameOver(): boolean {
    return this.indexQuestion === this.game.questions.length - 1
  }

  incrementScore(added: number) {
    this.score += added
  }

  next(score: number) {
    this.incrementScore(score)
    if (this.indexQuestion === this.game.questions.length - 1) {
      this.gameOver.emit(this.score)
    } else {
      this.indexQuestion < this.game.questions.length && this.indexQuestion++
    }
    console.log("Score :", this.score)
  }

  ngOnInit() {}
}
