import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Answer } from "../models/answer"

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() answer: Answer
  @Input() show: boolean = false

  @Output() makeAnswer: EventEmitter<Answer> = new EventEmitter()

  constructor() {}

  ngOnInit() {
  }

  getShow() {
    return this.show
  }

  handleAnswer() {
    this.makeAnswer.emit(this.answer)
  }

}
