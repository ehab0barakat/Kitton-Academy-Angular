import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserComments } from 'src/app/Models/user-comments';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsApiService {
newComment:UserComments[]=[];
private httpOptions={};
  constructor(private httpclient: HttpClient ,private router:Router) { 

    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json' ,

      })
    }
  }


  // get all comments

  getComments():Observable<UserComments[]>{
   
      return  this.httpclient.get<UserComments[]>(`${environment.APIBaseURL}/api/comment`)
   
    }

  
  // send comment
sendComments(newComment:UserComments):Observable<UserComments>{
  return this.httpclient.post<UserComments>(`${environment.APIBaseURL}/api/comment`,
  JSON.stringify(newComment),
  this.httpOptions)


}


}

