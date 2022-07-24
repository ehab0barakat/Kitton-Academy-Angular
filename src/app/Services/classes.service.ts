import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { classes } from '../Models/classes';
@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  private httpOptions = {};
  constructor(private httpclient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getAllclass(): Observable<classes[]> {
    return this.httpclient.get<classes[]>(`${environment.APIBaseURL}/classes`);
  }
  getClassByID(claID: number): Observable<classes> {
    return this.httpclient.get<classes>(
      `${environment.APIBaseURL}/classes/${claID}`
    );
  }
}
