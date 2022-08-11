import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { classComment } from '../Models/classcomment';
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
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
    })

  }}
  getMyClasses(id:number):Observable<classes[]>{
    return this.httpClient.get<classes[]>(`${environment.APIBaseURL}/api/myclasses/${id}`,this.httpOptions);

  }
  storemyclasses(data:any):Observable<classes>{
    return this.httpClient.post<any>(`${environment.APIBaseURL}/api/myclasses`,
                                              JSON.stringify(data),
                                              this.httpOptions)
                                            }

  user_own_class_check(id:number): Observable<any> {
    return this.httpClient.get<any>(`${environment.APIBaseURL}/api/myclasses/user-class-owner-check/${id}`,this.httpOptions)
  }

  user_own_video_check(id:number): Observable<any> {
    return this.httpClient.get<any>(`${environment.APIBaseURL}/api/myclasses/user-video-owner-check/${id}`,this.httpOptions)
  }
  rateChange(newPrd:any):Observable<myClasses>{
    return this.httpClient.post<myClasses>(`${environment.APIBaseURL}/api/myclasses/rate`,
                                              JSON.stringify(newPrd),
                                              this.httpOptions)
                                            }


 totalRate(id:number):Observable<any>{
  return this.httpClient.get<any>(`${environment.APIBaseURL}/api/myclasses/totalRate/${id}`,this.httpOptions)
 }
 classSendComments(Classe:classComment):Observable<classComment>{
  return this.httpClient.post<classComment>(`${environment.APIBaseURL}/api/class/comment`,
  JSON.stringify(Classe),
  this.httpOptions)


}
 getComments():Observable<classComment[]>{

  return  this.httpClient.get<classComment[]>(`${environment.APIBaseURL}/api/classComment`,
  this.httpOptions)

}// get count of likes
getCountComments(id:number):Observable<any>{
  return this.httpClient.get<any>(`${environment.APIBaseURL}/api/classComment/${id}`,
  this.httpOptions)

}
}
