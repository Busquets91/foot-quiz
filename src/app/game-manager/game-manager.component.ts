import { Component, OnInit } from "@angular/core"
import { Game } from "../models/game"

@Component({
  selector: "app-game-manager",
  templateUrl: "./game-manager.component.html",
  styleUrls: ["./game-manager.component.css"]
})
export class GameManagerComponent implements OnInit {
  game: Game
  isOver: boolean = false

  constructor() {}

  over(score: number) {
    this.isOver = true
  }

  isGameOver() {
    return this.isOver
  }

  ngOnInit() {
    // On recupe la liste de question ici
    this.game = {
      id: 1,
      score: 0,
      questions: [
        {
          id: 1,
          question: "Question 1",
          answers: [
            { answer: "Reponse 1", isTrue: false },
            { answer: "Reponse 2", isTrue: false },
            { answer: "Reponse 3", isTrue: true },
            { answer: "Reponse 4", isTrue: false }
          ]
        },
        {
          id: 1,
          question: "Question 2",
          answers: [
            { answer: "Reponse 1", isTrue: false },
            { answer: "Reponse 2", isTrue: false },
            { answer: "Reponse 3", isTrue: true },
            { answer: "Reponse 4", isTrue: false }
          ]
        }
      ]
    }
  }
}
