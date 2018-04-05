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

  get notSelectedNotShow(): boolean {
    return !this.show && !this.selected
  }

  get selectedNotShow(): boolean {
    return !this.show && this.selected
  }

  get selectedGood(): boolean {
    return this.show && this.selected && this.good
  }

  get selectedWrong(): boolean {
    return this.show && this.selected && !this.good
  }

  get notSelectedGood(): boolean {
    return this.show && !this.selected && this.good
  }

  get other(): boolean {
    return this.show && !this.selected && !this.good
  }

  handleAnswer() {
    if (!this.questionAnswered) {
      this.selected = true
      this.makeAnswer.emit(this.answer)
    }
  }

}
