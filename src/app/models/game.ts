import { Question } from "./question"

export interface Game {
  id: number
  score: number 
  questions: Question[]
}
