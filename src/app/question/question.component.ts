import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { Question } from "../models/question"
import { Answer } from "../models/answer"

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  @Input() question: Question
  answer: Answer = null

  @Output() nextQuestion: EventEmitter<number> = new EventEmitter()
  constructor() {}

  answers(): Answer[] {
    return this.question && this.question.answers
  }

  setAnswer(answer: Answer) {
    if (this.answer === null) this.answer = answer

    console.log(this.answer)
    // this.nextQuestion.emit(answer.isTrue ? 1 : 0)
  }

  ngOnInit() {}
}
