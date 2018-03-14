import { Component, OnInit, Input } from '@angular/core';
import { Question } from "../models/question"
import { Answer } from "../models/answer"

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question

  constructor() { }

  answers(): Answer[] {
    return this.question && this.question.answers
  }

  setAnswer(answer: Answer) {
    console.log(answer)
  }

  ngOnInit() {
  }

}
