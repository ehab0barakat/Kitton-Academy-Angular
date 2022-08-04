import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , retry } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ClassContentService {
  private httpOptions={};
constructor(private httpclient: HttpClient) {
  this.httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json' ,
      "Authorization": `Bearer ${localStorage.getItem('token')}`,
    })
  };
}








GetAllVideosForThisClass(id:any):Observable<any>{
  return this.httpclient.get<any>(`${environment.APIBaseURL}/api/class-content/all-videos-class/${id}`,
                                            this.httpOptions)
                                          }

GetAllVideosForThisClassByVideoId(id:any):Observable<any>{
  return this.httpclient.get<any>(`${environment.APIBaseURL}/api/class-content/all-videos-class-by_vid-id/${id}`,
                                            this.httpOptions)
                                          }



AddVideoToClass(newPrd:any):Observable<any>{
  return this.httpclient.post<any>(`${environment.APIBaseURL}/api/class-content/add-on-class`,
                                            JSON.stringify(newPrd),
                                            this.httpOptions)
                                          }


updateVideoToClass(newPrd:any , id:any):Observable<any>{
  return this.httpclient.put<any>(`${environment.APIBaseURL}/api/class-content/update-video/${id}`,
                                            JSON.stringify(newPrd),
                                            this.httpOptions)
                                          }


deleteVideofromClass( id:any):Observable<any>{
  return this.httpclient.delete<any>(`${environment.APIBaseURL}/api/class-content/delete-video/${id}`,
                                            this.httpOptions)
                                          }



ValidationForVideo(id:any):Observable<any>{
return this.httpclient.get<any>(`${environment.APIBaseURL}/api/class-content/video/${id}`,
                                          this.httpOptions)
                                        }



ValidationForClass(id:any):Observable<any>{
return this.httpclient.get<any>(`${environment.APIBaseURL}/api/class-content/ccllaass/${id}`,
                                          this.httpOptions)
                                        }






GetVideoById(id:any):Observable<any>{
  return this.httpclient.get<any>(`${environment.APIBaseURL}/api/class-content/show-video/${id}`,
                                            this.httpOptions)
                                          }





// --------------------------------- user class content table ----------------

AddView(newPrd:any ,id:any):Observable<any>{
  return this.httpclient.put<any>(`${environment.APIBaseURL}/api/update-content/${id}`,
                                            JSON.stringify(newPrd),
                                            this.httpOptions)
                                          }

CheckUserVideos(id:any):Observable<any>{
  return this.httpclient.get<any>(`${environment.APIBaseURL}/api/get-user-videos/${id}`,
                                            this.httpOptions)
                                          }





// --------------------------------- user class content table ----------------




}


