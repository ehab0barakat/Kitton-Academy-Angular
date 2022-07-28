import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Event } from '../Models/event';

@Injectable({
  providedIn: 'root'
})


export class EventsService {
  private httpOptions={};
  constructor(private httpclient: HttpClient) {
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json' ,
<<<<<<< HEAD
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
=======

>>>>>>> 84ed171b019c358504da43fd210fe2f948277e29
      })
    };
   }

   
   getAllevents():Observable<Event[]>{
    return this.httpclient.get<Event[]>(`${environment.APIBaseURL}/api/event`,this.httpOptions);

  }


  geteventByID(claID:number):Observable<Event>{
    return this.httpclient.get<Event>(`${environment.APIBaseURL}/api/event/${claID}`,this.httpOptions);
  }




  // -----------------------------  ( event crud )  -----------------------------


  addEvent(newPrd:Event):Observable<Event>{
      return this.httpclient.post<Event>(`${environment.APIBaseURL}/api/event`,
                                                JSON.stringify(newPrd),
                                                this.httpOptions)
                                              }




  editEvent(newPrd:Event , id:number ):Observable<Event>{
      return this.httpclient.put<Event>(`${environment.APIBaseURL}/api/event/${id}`,
                                                JSON.stringify(newPrd),
                                                this.httpOptions)
                                              }




  deleteEvent( id:number ):Observable<Event>{
      return this.httpclient.delete<Event>(`${environment.APIBaseURL}/api/event/${id}`,
                                                this.httpOptions)
                                              }






















}
