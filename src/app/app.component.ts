import { Component } from '@angular/core';
import {SpacyapiService, spacyAppli} from './spacyapi.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spacy-app';
  language = new FormControl();
  text = new FormControl();
  datafrompost: spacyAppli[] | undefined;

  constructor(private spacy: SpacyapiService) {
  }
  postMethode(text: string, language: string): void{
    this.spacy.sendPostrequest(text, language).subscribe(data => {
      console.log(data);
    this.datafrompost=data.words });

  }
}
