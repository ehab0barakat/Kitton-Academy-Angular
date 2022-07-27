import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { classCats } from '../Models/classcats';
import { classes } from '../Models/classes';
@Injectable({
  providedIn: 'root'
})
export class ClassCatsService {
  private apiServer = "http://localhost:8000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}

  constructor(private httpClient: HttpClient) { }
  getAllClassCats(): Observable<classCats[]> {
    return this.httpClient.get<classCats[]>(this.apiServer + '/api/classescats')
  
  }
  
  
    getClassByCatID(id: number): Observable<classes[]> {
      return this.httpClient.get<classes[]>(this.apiServer + '/api/classescats/' + id)
    }
  
}
