import { Injectable } from "@angular/core"
import { Game } from "../models/game"
import { Question } from "../models/question"
import { GameConfig } from "../models/game-config"
import questions from "../data/questions"

@Injectable()
export class GameService {

  constructor() {}

  protected getQuestions(nb: number): Question[] {
    const array = []
    for (let i = 0; i < nb; i++) {
      array.push(
        questions[Math.floor(Math.random() * questions.length)]
      )
    }
    return array
  }

  public getGame(): Game {
    const game = {
      id: 1,
      score: 0,
      questions: this.getQuestions(GameConfig.NB_QUESTIONS)
    }
    return game
  }
}
