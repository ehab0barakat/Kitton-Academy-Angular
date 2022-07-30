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
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllTeacher(): Observable<ITeacher[]> {
    return this.httpClient.get<ITeacher[]>(`http://localhost:8000/api/teacher`).pipe(
      map(m => m as ITeacher[])
    );
  }
  getTeacherDetails(id: number): Observable<ITeacherDetails>{ 
    return this.httpClient.get<ITeacherDetails>(`http://localhost:8000/api/teacher/${id}`).pipe(
      map(m => m as ITeacherDetails)
    );
}

}



