import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { Question } from "../models/question"
import { Answer } from "../models/answer"

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  private _question: Question
  answer: Answer = null
  state: number = 0

  @Input()
  set question(question: Question) {
    if (question && this._question !== question) {
      this.state = 0
      this._question = question
    }
  }

  @Output() nextQuestion: EventEmitter<number> = new EventEmitter()
  constructor() {}

  get question(): Question {
    return this._question
  }

  answers(): Answer[] {
    return this.question && this.question.answers
  }

  setAnswer(answer: Answer) {
    if (this.answer === null) this.answer = answer
  }

  handleTimeDown() {
    this.nextQuestion.emit(this.answer && this.answer.isTrue ? 1 : 0)
    this.state = 1
  }

  isStateAnswering() {
    return this.state === 0
  }

  isStateShowAnswer() {
    return this.state === 1
  }

  ngOnInit() {}
}
