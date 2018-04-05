import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { Game } from "../models/game"
import { Question } from "../models/question"

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  private score: number = 0
  private _game: Game
  indexQuestion: number = 0

  @Input()
  set game(game: Game) {
    const isGameDifferent = game && this._game !== game
    if (isGameDifferent) {
      this._game = game
      this.score = 0
      this.indexQuestion = 0
    }
  }

  @Output() gameOver: EventEmitter<number> = new EventEmitter()
  constructor() {}

  get currentQuestion(): Question {
    const validQuestion = this.game && this.game.questions
    return validQuestion && this.game.questions[this.indexQuestion]
  }

  get game(): Game {
    return this._game
  }

  incrementScore(added: number) {
    this.score += added
  }

  next(score: number) {
    this.incrementScore(score)
    const isOver = this.indexQuestion === this.game.questions.length - 1
    if (isOver) {
      this.gameOver.emit(this.score)
    } else {
      const isLastQuestion = this.indexQuestion >= this.game.questions.length
      !isLastQuestion && this.indexQuestion++
    }
  }

  ngOnInit() {}
}
