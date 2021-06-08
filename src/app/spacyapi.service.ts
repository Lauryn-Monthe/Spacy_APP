import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SpacyapiService {

  constructor(private http: HttpClient) {
  }


  sendPostrequest(text: string, language: string): Observable<responseApi> {
    return this.http.post<responseApi>('/spacy', {
      model: language,
      text
    });
  }

}

export interface spacyAppli{
  'tag': string;
  'text': number;
}
export interface responseApi{
  words: spacyAppli[];
}
