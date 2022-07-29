import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { classes } from '../Models/classes';
import { classCats } from '../Models/classcats';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClassCatsService {
  private httpOptions={};
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json' ,


    })

  }}
  getAllClassCats(): Observable<classCats[]> {
    return this.httpClient.get<classCats[]>(`${environment.APIBaseURL}/api/classescats`)

  }


    getClassByCatID(id: number): Observable<classes[]> {
      return this.httpClient.get<classes[]>(`${environment.APIBaseURL}/api/classescats/${id}`)
    }
    getClassCatID(id: number): Observable<classCats[]> {
      return this.httpClient.get<classCats[]>(`${environment.APIBaseURL}/api/classescats/${id}`)
    }

create(newPrd:classCats):Observable<classCats>{
  return this.httpClient.post<classCats>(`${environment.APIBaseURL}/api/classescats`,
                                            JSON.stringify(newPrd),
                                            this.httpOptions)
                                          }

  update(param: classCats, id: number ): Observable<classCats> {
    return this.httpClient.put<classCats>(`${environment.APIBaseURL}/api/classescats/${id}`, JSON.stringify(param), this.httpOptions)

  }

  delete(id: number){
    return this.httpClient.delete<classCats>(`${environment.APIBaseURL}/api/classescats/${id}`, this.httpOptions)

  }


  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage); }

}
