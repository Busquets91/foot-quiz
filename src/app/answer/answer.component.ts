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

  @Input() answer: Answer
  @Input()
  set show(bool: boolean) {
    this._show = bool
  }

  @Output() makeAnswer: EventEmitter<Answer> = new EventEmitter()

  constructor() {}

  ngOnInit() {
  }

  get selected(): boolean {
    return this._selected
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
    this.selected = true
    this.makeAnswer.emit(this.answer)
  }

}
