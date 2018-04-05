import { Injectable } from "@angular/core"
import { Game } from "../models/game"
import { Question } from "../models/question"
import { GameConfig } from "../models/game-config"
import { UtilService } from "./util.service"
import questions from "../data/questions"

@Injectable()
export class GameService {
  constructor() {}

  protected getQuestions(nb: number): Question[] {
    return UtilService.pickRandomArray(questions, 2)
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
