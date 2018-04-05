import { Component, OnInit, Output, EventEmitter } from "@angular/core"
import { GameConfig } from "../models/game-config"

@Component({
  selector: "app-coutdown-timer",
  templateUrl: "./coutdown-timer.component.html",
  styleUrls: ["./coutdown-timer.component.css"]
})
export class CoutdownTimerComponent implements OnInit {
  static TIME = GameConfig.DURATION_QUESTION
  intervalId = 0
  seconds = CoutdownTimerComponent.TIME

  @Output() onTimeDown = new EventEmitter()
  constructor() {}

  clearTimer() {
    clearInterval(this.intervalId)
  }

  getSeconds(): number {
    return this.seconds
  }

  ngOnInit() {
    this.start()
  }
  ngOnDestroy() {
    this.clearTimer()
  }

  start() {
    this.countDown()
  }

  get value(): number {
    return this.getSeconds() / 10 * 100
  }

  private countDown() {
    this.clearTimer()
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1
      if (this.seconds === 0) {
        this.onTimeDown.emit()
      } else {
        if (this.seconds < 0) {
          this.seconds = CoutdownTimerComponent.TIME
        }
      }
    }, 1000)
  }
}
