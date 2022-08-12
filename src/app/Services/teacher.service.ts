import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ITeacher } from '../Models/ITeacher';
import { catchError, filter, map, Observable, throwError } from 'rxjs';
import { ITeacherDetails } from '../Models/ITeacherDetails';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  // allTeacherUrl = './assets/Data/teachers.json';
  // teachersDetailsUrl = './assets/Data/teachers-details.json';
  teachersDetails: ITeacherDetails | undefined;
 private httpOptions={};

  constructor(private httpClient: HttpClient) {


    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json' ,

      })
    }
   }

  getAllTeacher(): Observable<ITeacher[]> {
    return this.httpClient.get<ITeacher[]>(`${environment.APIBaseURL}/api/teacher`).pipe(
      map(m => m as ITeacher[])
    );
  }
  getTeacherDetails(id: number): Observable<ITeacherDetails>{
    return this.httpClient.get<ITeacherDetails>(`${environment.APIBaseURL}/api/teacher/${id}`).pipe(
      map(m => m as ITeacherDetails)
    );
}

// edit teacher profile

editProfile( data:any, id:number ):Observable<any>{
  return this.httpClient.put<any>(`${environment.APIBaseURL}/api/teacher/${id}`,
                                            JSON.stringify(data),
                                            this.httpOptions)
                                          }

}



