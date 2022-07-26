import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Games } from '../Models/games';


@Injectable({
  providedIn: 'root'
})

export class GamesService {
  private httpOptions={};
  constructor(private httpclient: HttpClient) {
}

  getAllgames():Observable<Games[]>{
  return this.httpclient.get<Games[]>(`${environment.APIBaseURL}/games`);
}

getgamecatsByID(claID:number):Observable<Games>{
  return this.httpclient.get<Games>(`${environment.APIBaseURL}/games/${claID}`);
}


}
