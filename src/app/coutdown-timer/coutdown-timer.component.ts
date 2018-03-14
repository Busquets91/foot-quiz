import { Component, OnInit, Output, EventEmitter } from "@angular/core"

@Component({
  selector: "app-coutdown-timer",
  templateUrl: "./coutdown-timer.component.html",
  styleUrls: ["./coutdown-timer.component.css"]
})
export class CoutdownTimerComponent implements OnInit {
  intervalId = 0
  seconds = 3

  @Output() onTimeDown = new EventEmitter()
  constructor() {}

  clearTimer() {
    clearInterval(this.intervalId)
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
  // stop() {this.clearTimer()}

  private countDown() {
    this.clearTimer()
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1
      if (this.seconds === 0) {
        this.onTimeDown.emit()
        // console.log("coco")
        // this.message = "Blast off!"
      } else {
        if (this.seconds < 0) {
          this.seconds = 3
        } // reset
        // this.message = `T-${this.seconds} seconds and counting`
      }
    }, 1000)
  }
}
