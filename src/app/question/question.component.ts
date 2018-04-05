import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { Question } from "../models/question"
import { Answer } from "../models/answer"
import { StateQuestion } from "../models/enums/state-question.enum"
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

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
    const isQuestionDifferent = question && this._question !== question
    if (isQuestionDifferent) {
      this.state = StateQuestion.answering
      this._question = question
      this.answer = null
    }
  }

  @Output() nextQuestion: EventEmitter<number> = new EventEmitter()
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'next',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/next.svg'));
  }

  get question(): Question {
    return this._question
  }

  get answers(): Answer[] {
    return this.question && this.question.answers
  }

  setAnswer(answer: Answer) {
    const isAnswerValid = this.answer === null
    if (isAnswerValid) {
      this.answer = answer
    }
  }

  handleTimeDown() {
    this.state = StateQuestion.showing
  }

  handleNextQuestion() {
    this.nextQuestion.emit(this.answer && this.answer.isTrue ? 1 : 0)
  }

  get isStateAnswering(): boolean {
    return this.state === StateQuestion.answering
  }

  get isStateShowAnswer(): boolean {
    return this.state === StateQuestion.showing
  }

  get hasAnswered(): boolean {
    return this.answer !== null
  }

  ngOnInit() {}
}
