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

  get currentQuestion(): Question {
    const validQuestion = this.game && this.game.questions
    return (
      validQuestion &&
      this.game.questions[this.indexQuestion]
    )
  }

  incrementScore(added: number) {
    this.score += added
  }

  next(score: number) {
    this.incrementScore(score)
    console.log(this.game.questions)
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
