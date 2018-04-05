import { Component, OnInit } from "@angular/core"
import { GameService } from "../services/game.service"
import { Game } from "../models/game"

@Component({
  selector: "app-game-manager",
  templateUrl: "./game-manager.component.html",
  styleUrls: ["./game-manager.component.css"]
})
export class GameManagerComponent implements OnInit {
  game: Game
  isOver: boolean = false
  score: number = 0

  constructor(private gameService: GameService) {}

  over(score: number) {
    this.score = score
    this.isOver = true
  }

  doRestart() {
    this.initialize()
  }

  get isGameOver(): boolean {
    return this.isOver
  }

  get nbQuestions(): number {
    return this.game.questions.length
  }

  initialize() {
    this.game = this.gameService.getGame()
    this.isOver = false
    this.score = 0
  }

  ngOnInit() {
    this.initialize()
  }
}
