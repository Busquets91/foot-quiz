import { Injectable } from "@angular/core"
import { Game } from "../models/game"
import { Question } from "../models/question"

@Injectable()
export class GameService {
  questions: Question[] = [
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
      question:
        "En quelle année Jacques Chirac dissout-il l'assemblée nationale?",
      answers: [
        { answer: "1997", isTrue: true },
        { answer: "1999", isTrue: false },
        { answer: "1994", isTrue: false },
        { answer: "1996", isTrue: false }
      ]
    },
    {
      id: 3,
      question:
        "Comment s'appelait le personnage qui jouait du Synthé dans la série Hélène et les garçons?",
      answers: [
        { answer: "Mat", isTrue: false },
        { answer: "José", isTrue: true },
        { answer: "Alex", isTrue: false },
        { answer: "Nicolas", isTrue: false }
      ]
    }
  ]

  constructor() {}

  protected getQuestions(nb:number): Question[] {
    const array = []
    for(let i = 0; i < nb; i++) {
      array.push(this.questions[Math.floor(Math.random() * this.questions.length)])
    }
    return array
  }

  public getGame(): Game {
    const game = {
      id: 1,
      score: 0,
      questions: this.getQuestions(1)
    }
    return game
  }
}
