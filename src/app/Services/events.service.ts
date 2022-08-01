import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Event } from '../Models/event';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private httpOptions = {};
  constructor(private httpclient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
  }

  getAllActiveEvents(): Observable<Event[]> {
    return this.httpclient.get<Event[]>(
      `${environment.APIBaseURL}/api/event/active`,
      this.httpOptions
    );
  }

  getAllNONActiveEvents(): Observable<Event[]> {
    return this.httpclient.get<Event[]>(
      `${environment.APIBaseURL}/api/event/nonactive`,
      this.httpOptions
    );
  }

  getAllevents(): Observable<Event[]> {
    return this.httpclient.get<Event[]>(
      `${environment.APIBaseURL}/api/event`,
      this.httpOptions
    );
  }

  getTeacher_events(newPrd: any): Observable<Event[]> {
    return this.httpclient.post<Event[]>(
      `${environment.APIBaseURL}/api/event/teacher_events`,
      JSON.stringify(newPrd),
      this.httpOptions
    );
  }

  geteventByID(claID: number): Observable<Event> {
    return this.httpclient.get<Event>(
      `${environment.APIBaseURL}/api/event/${claID}`,
      this.httpOptions
    );
  }

  usersCount(claID: number): Observable<any> {
    return this.httpclient.get<any>(
      `${environment.APIBaseURL}/api/event/userscount/${claID}`,
      this.httpOptions
    );
  }

  searchForTeacherByName(newPrd: any): Observable<any> {
    return this.httpclient.post<any>(
      `${environment.APIBaseURL}/api/event/search_for_teacher_events/`,
      JSON.stringify(newPrd),
      this.httpOptions
    ); //search for teacher by email
  }

  // search_inrollement(newPrd: any): Observable<any> {
  //   return this.httpclient.post<any>(
  //     `${environment.APIBaseURL}/api/event/search_inrollement/`,
  //     JSON.stringify(newPrd),
  //     this.httpOptions
  //   );
  // }

  search_inrollement(newPrd: any): Observable<any> {
    return this.httpclient.post<any>(
      `${environment.APIBaseURL}/api/event/search_inrollement/`,
      JSON.stringify(newPrd),
      this.httpOptions
    );
  }

  addEnrollEvent(newPrd: any): Observable<any> {
    return this.httpclient.post<any>(
      `${environment.APIBaseURL}/api/event/inroll_add`,
      JSON.stringify(newPrd),
      this.httpOptions
    );
  }

  // -----------------------------  ( event crud )  -----------------------------

  addEvent(newPrd: Event): Observable<Event> {
    return this.httpclient.post<Event>(
      `${environment.APIBaseURL}/api/event`,
      JSON.stringify(newPrd),
      this.httpOptions
    );
  }

  // addEvent(newPrd:Event):Observable<Event>{
  //     return this.httpclient.post<Event>(`${environment.APIBaseURL}/api/event`,
  //                                               JSON.stringify(newPrd),
  //                                               this.httpOptions)
  //                                             }

  editEvent(newPrd: Event, id: number): Observable<Event> {
    return this.httpclient.put<Event>(
      `${environment.APIBaseURL}/api/event/${id}`,
      JSON.stringify(newPrd),
      this.httpOptions
    );
  }

  ActivationeditEvent(newPrd: any, id: number): Observable<any> {
    return this.httpclient.put<any>(
      `${environment.APIBaseURL}/api/event/${id}`,
      JSON.stringify(newPrd),
      this.httpOptions
    );
  }

  deleteEvent(id: number): Observable<Event> {
    return this.httpclient.delete<Event>(
      `${environment.APIBaseURL}/api/event/${id}`,
      this.httpOptions
    );
  }

  getTeacherName(id: number): Observable<any> {
    return this.httpclient.get<any>(
      `${environment.APIBaseURL}/api/event/teacherbyid/${id}`,
      this.httpOptions
    );
  }

  // ------------------------------------------------------------------------------
  // (notification)

  teacherNotify(newPrd: any): Observable<any> {
    return this.httpclient.post<any>(
      `${environment.APIBaseURL}/api/event-notification/create`,
      JSON.stringify(newPrd),
      this.httpOptions
    );
  }

  showNotifyToTeacher(): Observable<any> {
    return this.httpclient.get<any>(
      `${environment.APIBaseURL}/api/event-notification/show`,
      this.httpOptions
    );
  }

  teacherCheckNotify(id: number): Observable<any> {
    return this.httpclient.get<any>(
      `${environment.APIBaseURL}/api/event-notification/update/${id}`,
      this.httpOptions
    );
  }

  // ActivationeditEvent(newPrd: any, id: number): Observable<any> {
  //   return this.httpclient.put<any>(
  //     `${environment.APIBaseURL}/api/event/${id}`,
  //     JSON.stringify(newPrd),
  //     this.httpOptions
  //   );
  // }

  // deleteEvent(id: number): Observable<Event> {
  //   return this.httpclient.delete<Event>(
  //     `${environment.APIBaseURL}/api/event/${id}`,
  //     this.httpOptions
  //   );
  // }

  // getTeacherName(id: number): Observable<any> {
  //   return this.httpclient.get<any>(
  //     `${environment.APIBaseURL}/api/event/teacherbyid/${id}`,
  //     this.httpOptions
  //   );
  // }
}
