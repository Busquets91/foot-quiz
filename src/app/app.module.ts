import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AnswerComponent } from './answer/answer.component';
import { QuestionComponent } from './question/question.component';
import { GameComponent } from './game/game.component';
import { GameManagerComponent } from './game-manager/game-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    QuestionComponent,
    GameComponent,
    GameManagerComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
