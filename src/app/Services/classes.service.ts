import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { classes } from '../Models/classes';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(param: any): Observable<classes> {
    return this.httpClient.post<classes>(this.apiServer + '/classes/', JSON.stringify(param), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getById(id: number): Observable<classes> {
    return this.httpClient.get<classes>(this.apiServer + '/classes/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
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
    return throwError(errorMessage);
 }
  getAll(): Observable<classes[]> {
    return this.httpClient.get<classes[]>(this.apiServer + '/classes/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id: number, classes: any): Observable<classes> {
    return this.httpClient.put<classes>(this.apiServer + '/classes/' + id, JSON.stringify(classes), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: number){
    return this.httpClient.delete<classes>(this.apiServer + '/classes/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

}
