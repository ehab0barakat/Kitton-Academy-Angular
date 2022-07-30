
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
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json' ,
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
      })
    };
   }



  getAllgamecats():Observable<Gamecats[]>{
  return this.httpclient.get<Gamecats[]>(`${environment.APIBaseURL}/gamecats`);
}


getgamecatsByID(claID:number):Observable<Gamecats>{
  return this.httpclient.get<Gamecats>(`${environment.APIBaseURL}/gamecats/${claID}`);
}





  // -----------------------------  ( event crud )  -----------------------------


  addEvent(newPrd:Gamecats):Observable<Gamecats>{
    return this.httpclient.post<Gamecats>(`${environment.APIBaseURL}/api/eventcats/`,
                                              JSON.stringify(newPrd),
                                              this.httpOptions)
                                            }




editEvent(newPrd:Gamecats , id:number ):Observable<Gamecats>{
    return this.httpclient.put<Gamecats>(`${environment.APIBaseURL}/api/eventcats/${id}`,
                                              JSON.stringify(newPrd),
                                              this.httpOptions)
                                            }




deleteEvent( id:number ):Observable<Gamecats>{
    return this.httpclient.delete<Gamecats>(`${environment.APIBaseURL}/api/eventcats/${id}`,
                                              this.httpOptions)
                                            }




















}
