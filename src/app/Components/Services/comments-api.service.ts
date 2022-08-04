import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TeacherComments } from 'src/app/Models/teacher-comments';
import { UserComments } from 'src/app/Models/user-comments';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsApiService {
newComment:UserComments[]=[];
newTeacherComment:TeacherComments[]=[];
private httpOptions={};
  constructor(private httpclient: HttpClient ,private router:Router) { 

    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json' ,

      })
    }
  }


  // get all comments of user

  getComments():Observable<UserComments[]>{
   
      return  this.httpclient.get<UserComments[]>(`${environment.APIBaseURL}/api/comment`)
   
    }

  
  //  user send comment
sendComments(newComment:UserComments):Observable<UserComments>{
  return this.httpclient.post<UserComments>(`${environment.APIBaseURL}/api/comment`,
  JSON.stringify(newComment),
  this.httpOptions)


}

 // get all comments of teacher

 getTeacherComments():Observable<TeacherComments[]>{
   
  return  this.httpclient.get<TeacherComments[]>(`${environment.APIBaseURL}/api/teachercomment`)

}


 //  teacher send comment
 teacherSendComments(newTeacherComment:TeacherComments):Observable<TeacherComments>{
  return this.httpclient.post<TeacherComments>(`${environment.APIBaseURL}/api/teachercomment`,
  JSON.stringify(newTeacherComment),
  this.httpOptions)


}
// getjoin(id:number):Observable<UserComments[]>{
//   return this.httpclient.get<UserComments[]>(`${environment.APIBaseURL}/api/comment/join/${id}`,
//   this.httpOptions)

// }

}

