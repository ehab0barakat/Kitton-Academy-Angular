import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { classes } from '../Models/classes';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  private httpOptions = {};
  constructor(private httpclient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem('token')}`,

      }),
    };
  }

  admingetall(): Observable<classes[]> {
    return this.httpclient.get<classes[]>(`${environment.APIBaseURL}/api/classes/allclasses`, this.httpOptions);
  }

  getAllclass(): Observable<classes[]> {
    return this.httpclient.get<classes[]>(`${environment.APIBaseURL}/classes`, this.httpOptions);
  }


  GetTeachersClasses(): Observable<classes[]> {
    return this.httpclient.get<classes[]>(`${environment.APIBaseURL}/api/teachers-classes`, this.httpOptions);
  }

  getClassByID(cal:number):Observable<classes>{
    return this.httpclient.get<classes>(`${environment.APIBaseURL}api/classes/${cal}`);
  }


  getAll(): Observable<classes[]> {
    return this.httpclient.get<classes[]>(`${environment.APIBaseURL}/api/classes`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getById(id: number): Observable<classes> {
    return this.httpclient.get<classes>(`${environment.APIBaseURL}/api/classes/${id}`)

  }


//   create(param: classes): Observable<classes> {
//     return this.httpclient.post<classes>(`${environment.APIBaseURL}/api/classes`,
//      JSON.stringify(param)
// , this.httpOptions)
//    .pipe(
//       catchError(this.errorHandler)
//     )
//   }

create(newPrd:classes):Observable<classes>{
  return this.httpclient.post<classes>(`${environment.APIBaseURL}/api/classes`,
                                            JSON.stringify(newPrd),
                                            this.httpOptions)
                                          }

  update(param: classes , id: number ): Observable<classes> {
    return this.httpclient.put<classes>(`${environment.APIBaseURL}/api/classes/${id}`, JSON.stringify(param), this.httpOptions)

  }

  ActivationeditClass(param: any , id: any ): Observable<any> {
    return this.httpclient.put<any>(`${environment.APIBaseURL}/api/classes/activate/${id}`, JSON.stringify(param), this.httpOptions)

  }

  delete(id: number){
    return this.httpclient.delete<classes>(`${environment.APIBaseURL}/api/classes/${id}`, this.httpOptions)

  }
  checkdelete(id: number){
    return this.httpclient.delete<classes>(`${environment.APIBaseURL}/api/classes/check-destroy/${id}`, this.httpOptions)

  }
  getMyClasses(id:number):Observable<classes[]>{
    return this.httpclient.get<classes[]>(`${environment.APIBaseURL}/api/myclasses/${id}`,this.httpOptions);

  }

  teacherNotify(newPrd:any):Observable<any>{
    return this.httpclient.post<any>(`${environment.APIBaseURL}/api/class-notification/create`,
                                              JSON.stringify(newPrd),
                                              this.httpOptions)
                                            }


  showNotifyToTeacher():Observable<any>{
    return this.httpclient.get<any>(`${environment.APIBaseURL}/api/class-notification/show`,this.httpOptions);

  }


  teacherCheckNotify( id:number ):Observable<any>{
    return this.httpclient.get<any>(`${environment.APIBaseURL}/api/class-notification/update/${id}`,
                                              this.httpOptions)
                                            }




  // insertToMyclasses(id: number, classItemId: number, cartQuantity: number): Observable<classes> {
  //   try {
  //     const params = new HttpParams().set('quantity', cartQuantity.toString());
  //     const urlById = `${environment.APIBaseURL}/${id}/myclasses/${classItemId}`;
  //     return this.httpclient.post<classes>(urlById, null, {
  //       params
  //     });
  //   }
  // }

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
