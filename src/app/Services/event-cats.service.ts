import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Eventcats } from '../Models/eventcats';
import { Event } from '../Models/event';

@Injectable({
  providedIn: 'root',
})
export class EventCatsService {
  private httpOptions = {};
  constructor(private httpclient: HttpClient) {}

  getAlleventCats(): Observable<Eventcats[]> {
    return this.httpclient.get<Eventcats[]>(
      `${environment.APIBaseURL}/api/eventcats`
    );
  }

  geteventByCatID(claID: number): Observable<Event[]> {
    return this.httpclient.get<Event[]>(
      `${environment.APIBaseURL}/api/eventcats/${claID}`
    );
  }
}
