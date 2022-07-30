import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { classes } from '../Models/classes';
import { myClasses } from '../Models/myclasses';

@Injectable({
  providedIn: 'root'
})
export class MyclassesService {
  private httpOptions={};
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json' ,


    })

  }}
  getMyClasses(id:number):Observable<classes[]>{
    return this.httpClient.get<classes[]>(`${environment.APIBaseURL}/api/myclasses/${id}`,this.httpOptions);

  }
  storemyclasses(newPrd:classes):Observable<classes>{
    return this.httpClient.post<classes>(`${environment.APIBaseURL}/api/myclasses`,
                                              JSON.stringify(newPrd),
                                              this.httpOptions)
                                            }

  // getMyClasses(): Observable<classes[]> {
  //   return this.httpClient.get<classes[]>(`${environment.APIBaseURL}/api/myclasses`)
  // }
}
