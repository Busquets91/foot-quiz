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
  score: number = 0

  constructor() {}

  over(score: number) {
    this.score = score
    this.isOver = true
  }

  isGameOver() {
    return this.isOver
  }

  getScore(): number {
    return this.score
  }

  ngOnInit() {
    // On recupe la liste de question ici
    this.game = {
      id: 1,
      score: 0,
      questions: [
        {
          id: 1,
          question: "A quel animal l’adjectif «hippique » se rapporte-t-il ?",
          answers: [
            { answer: "Au canard", isTrue: false },
            { answer: "Au cheval", isTrue: true },
            { answer: "Au chien", isTrue: false },
            { answer: "Au hibou", isTrue: false }
          ]
        },
        {
          id: 2,
          question: "En quelle année Jacques Chirac dissout-il l'assemblée nationale?",
          answers: [
            { answer: "1997", isTrue: true },
            { answer: "1999", isTrue: false },
            { answer: "1994", isTrue: false },
            { answer: "1996", isTrue: false }
          ]
        },
        {
          id: 3,
          question: "Comment s'appelait le personnage qui jouait du Synthé dans la série Hélène et les garçons?",
          answers: [
            { answer: "Mat", isTrue: false },
            { answer: "José", isTrue: true },
            { answer: "Alex", isTrue: false },
            { answer: "Nicolas", isTrue: false }
          ]
        }
      ]
    }
  }
}
