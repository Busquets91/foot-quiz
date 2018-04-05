import { Component, OnInit, Input } from "@angular/core"
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: "app-end-game",
  templateUrl: "./end-game.component.html",
  styleUrls: ["./end-game.component.css"]
})
export class EndGameComponent implements OnInit {
  @Input() score: number
  @Input() nbQuestions: number
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'replay',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/replay.svg'));
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'));
  }

  ngOnInit() {}

  getValue(){
    return 100*this.score/this.nbQuestions;
  }
}
