import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Eventcats } from '../Models/eventcats';
import { Event } from '../Models/event';

@Injectable({
  providedIn: 'root'
})


  export class EventCatsService {
    private httpOptions={};
    constructor(private httpclient: HttpClient) {
      this.httpOptions={
        headers:new HttpHeaders({
          'Content-Type': 'application/json' ,
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
        })
      };
     }




  getAlleventCats():Observable<Eventcats[]>{
    
  return this.httpclient.get<Eventcats[]>(`${environment.APIBaseURL}/api/eventcats`);
  }


  geteventByCatID(claID:number):Observable<Event[]>{
    return this.httpclient.get<Event[]>(`${environment.APIBaseURL}/api/eventcats/${claID}`);
  }



  geteventcatByID(claID:number):Observable<Eventcats>{
    return this.httpclient.get<Eventcats>(`${environment.APIBaseURL}/api/eventcat/${claID}`);
  }


  // -----------------------------  ( event crud )  -----------------------------


  addEventCat(newPrd:Eventcats):Observable<Eventcats>{
    return this.httpclient.post<Eventcats>(`${environment.APIBaseURL}/api/eventcats/`,
                                              JSON.stringify(newPrd),
                                              this.httpOptions)
                                            }




editEventCat(newPrd:Eventcats , id:number ):Observable<Eventcats>{
    return this.httpclient.put<Eventcats>(`${environment.APIBaseURL}/api/eventcats/${id}`,
                                              JSON.stringify(newPrd),
                                              this.httpOptions)
                                            }




deleteEventCat( id:number ):Observable<Eventcats>{
    return this.httpclient.delete<Eventcats>(`${environment.APIBaseURL}/api/eventcats/${id}`,
                                              this.httpOptions)
                                            }





}
