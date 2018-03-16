import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import {
  MatButtonModule,
  MatListModule,
  MatToolbarModule
} from "@angular/material"
import { RouterModule, Routes } from "@angular/router"

import { ServiceWorkerModule } from "@angular/service-worker"
import { AppComponent } from "./app.component"

import { environment } from "../environments/environment"
import { AnswerComponent } from "./answer/answer.component"
import { QuestionComponent } from "./question/question.component"
import { GameComponent } from "./game/game.component"
import { GameManagerComponent } from "./game-manager/game-manager.component"
import { CoutdownTimerComponent } from "./coutdown-timer/coutdown-timer.component";
import { HomeComponent } from './home/home.component'

const appRoutes: Routes = [
  { path: "game", component: GameManagerComponent },
  { path: "", component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    QuestionComponent,
    GameComponent,
    GameManagerComponent,
    CoutdownTimerComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
