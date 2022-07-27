import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { classes } from '../Models/classes';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  private httpOptions={};
  constructor(private httpclient: HttpClient) {
    this.httpOptions={
      headers:new HttpHeaders({
        'Authorization': 'Your Token',
        'Content-Type': 'application/json' ,

 
    })


  };
  }


  getAll(): Observable<classes[]> {
    return this.httpclient.get<classes[]>(`${environment.APIBaseURL}/api/classes`)
    // .pipe(
    //   catchError(this.errorHandler)
    // )
  }

  getById(id: number): Observable<classes> {
    return this.httpclient.get<classes>(`${environment.APIBaseURL}/api/classes/${id}`)
 
  }

  create(param: classes): Observable<classes> {
    return this.httpclient.post<classes>(`${environment.APIBaseURL}/api/classes`,
     JSON.stringify(param)
, this.httpOptions)
   .pipe(
      catchError(this.errorHandler)
    )
  }

  update(param: classes , id: number ): Observable<classes> {
    return this.httpclient.put<classes>(`${environment.APIBaseURL}/api/classes/${param}`, JSON.stringify(param), this.httpOptions)
  
  }

  delete(id: number){
    return this.httpclient.delete<classes>(`${environment.APIBaseURL}/api/classes/${id}`, this.httpOptions)
  
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
