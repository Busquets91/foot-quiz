import { Component, OnInit, Input } from "@angular/core"
import { GameConfig } from "../models/game-config"

@Component({
  selector: "app-end-game",
  templateUrl: "./end-game.component.html",
  styleUrls: ["./end-game.component.css"]
})
export class EndGameComponent implements OnInit {
  @Input() score: number
  @Input() nbQuestions: number
  constructor() {}

  ngOnInit() {}
}
