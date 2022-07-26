
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gamecats } from '../Models/gamecats';

@Injectable({
  providedIn: 'root'
})

export class GameCatsService {
  private httpOptions={};
  constructor(private httpclient: HttpClient) {
}

  getAllgamecats():Observable<Gamecats[]>{
  return this.httpclient.get<Gamecats[]>(`${environment.APIBaseURL}/gamecats`);
}

getgamecatsByID(claID:number):Observable<Gamecats>{
  return this.httpclient.get<Gamecats>(`${environment.APIBaseURL}/gamecats/${claID}`);
}


}
