import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ITeacher } from '../Models/ITeacher';
import { catchError, filter, Observable, throwError } from 'rxjs';
import { ITeacherDetails } from '../Models/ITeacherDetails';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  allTeacherUrl = './assets/Data/teachers.json';
  teachersDetailsUrl = './assets/Data/teachers-details.json'
  teachersDetails: ITeacherDetails[] | undefined;
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllTeacher(): Observable<ITeacher[]> {
    return this.httpClient.get<ITeacher[]>(this.allTeacherUrl).pipe(catchError(this.handleError));
  }
  getTeacherDetails(id: number): ITeacherDetails | any {
    if (!this.teachersDetails) {
      this.getAllTeacherDetails().subscribe({
        next: data => {
          this.teachersDetails = data;
          return this.findTeacherDetails(id);
        },
        error: err => {
          console.log(err);
          return undefined;
        }
      });
    } else {
      return this.findTeacherDetails(id);
    }
  }
  private getAllTeacherDetails(): Observable<ITeacherDetails[]> {
    return this.httpClient.get<ITeacherDetails[]>(this.teachersDetailsUrl);
  }
  private findTeacherDetails(id: number): ITeacherDetails | undefined {
    return this.teachersDetails?.find(x => x.id== id);
  }
  private handleError(err: HttpErrorResponse): Observable<never> {
    debugger
    return throwError(err)
  }
}



