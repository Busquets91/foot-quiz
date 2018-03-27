import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { Question } from "../models/question"
import { Answer } from "../models/answer"
import { StateQuestion } from "../models/enums/state-question.enum"

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  private _question: Question
  answer: Answer = null
  state: StateQuestion

  @Input()
  set question(question: Question) {
    if (question && this._question !== question) {
      this.state = StateQuestion.answering
      this._question = question
      this.answer = null
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
	this.state = StateQuestion.showing
	console.log("Show answer", this.state)
    //this.nextQuestion.emit(this.answer && this.answer.isTrue ? 1 : 0)
  }

  isStateAnswering() {
    return this.state === StateQuestion.answering
  }

  isStateShowAnswer() {
    return this.state === StateQuestion.showing
  }

  ngOnInit() {}
}
