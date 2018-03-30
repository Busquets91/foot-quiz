import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Answer } from "../models/answer"

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  private _selected: boolean = false
  private _show: boolean = false
  private _isQuestionAnswered: boolean = false

  @Input() answer: Answer
  @Input()
  set show(bool: boolean) {
    this._show = bool
  }

  @Input()
  set questionAnswered(bool: boolean) {
    this._isQuestionAnswered = bool
  }

  @Output() makeAnswer: EventEmitter<Answer> = new EventEmitter()

  constructor() {}

  ngOnInit() {
  }

  get selected(): boolean {
    return this._selected
  }

  get questionAnswered(): boolean {
    return this._isQuestionAnswered
  }

  set selected(bool: boolean) {
    this._selected = bool
  }

  get show(): boolean {
    return this._show
  }

  get good(): boolean {
    return this.answer.isTrue
  }

  handleAnswer() {
    if (!this.questionAnswered) {
      this.selected = true
      this.makeAnswer.emit(this.answer)
    }
  }

}
