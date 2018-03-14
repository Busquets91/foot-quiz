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
  // @Input() question: Question
  @Input()
  set question(question: Question) {
    console.log("prev value: ", this._question)
    console.log("got name: ", question)
    if (question && this._question !== question) {
      this.state = 0
      this._question = question
    }
  }

  answer: Answer = null
  state: number = 0

  @Output() nextQuestion: EventEmitter<number> = new EventEmitter()
  constructor() {}

  get question(): Question {
    // transform value for display
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
    console.log(this.state, this.state === 0)
    return this.state === 0
  }

  isStateShowAnswer() {
    return this.state === 1
  }

  ngOnInit() {
    console.log("onint")
    this.state = 0
  }
}
