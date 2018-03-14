import { Component } from "@angular/core"
import { Game } from "./models/game"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app"

  getExampleGame(): Game {
    // TEST
    const game = {
      id: 1,
      questions: [
        {
          id: 1,
          question: "Question 1",
          answers: [
            { answer: "Reponse 1", isTrue: false },
            { answer: "Reponse 2", isTrue: false },
            { answer: "Reponse 3", isTrue: true },
            { answer: "Reponse 4", isTrue: false }
          ]
        }
      ]
    }
    return game
  }
}
