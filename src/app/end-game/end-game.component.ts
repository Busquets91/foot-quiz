import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.css']
})
export class EndGameComponent implements OnInit {
  @Input() score: number
  constructor() { }

  ngOnInit() {
  }

}
