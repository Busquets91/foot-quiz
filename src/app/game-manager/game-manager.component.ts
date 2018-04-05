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

  get isGameOver(): boolean {
    return this.isOver
  }

  get nbQuestions(): number {
    return this.game.questions.length
  }

  ngOnInit() {
    this.game = this.gameService.getGame()
  }
}
