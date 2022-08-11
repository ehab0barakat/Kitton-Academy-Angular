import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from 'src/app/Models/posts';
import {  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiPostsService {
  newPost:Posts[]=[];
  private httpOptions={};
  constructor(private httpclient: HttpClient ,private router:Router) {
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json' ,
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
      })
    }
   }


  // to get all posts
  getAllPosts():Observable<Posts[]>{
    return  this.httpclient.get<Posts[]>(`${environment.APIBaseURL}/api/post`, this.httpOptions)

  }
  // get post by id
  getPostById(id:number):Observable<Posts>{
    return  this.httpclient.get<Posts>(`${environment.APIBaseURL}/api/post/${id}`, this.httpOptions)


  }
// add post
  addPost(newPost:Posts):Observable<Posts>{
      return this.httpclient.post<Posts>(`${environment.APIBaseURL}/api/post`,
                                                JSON.stringify(newPost),
                                                this.httpOptions)
                                              }



// edit post
  editPost(newPost:Posts , id:number ):Observable<Posts>{
      return this.httpclient.put<Posts>(`${environment.APIBaseURL}/api/post/${id}`,
                                                JSON.stringify(newPost),
                                                this.httpOptions)
                                              }



// delete post
  deletePost( id:number ):Observable<Posts>{
      return this.httpclient.delete<Posts>(`${environment.APIBaseURL}/api/post/${id}`,
                                                this.httpOptions)
                                              }




teacherNotify(newPrd:any):Observable<any>{
  return this.httpclient.post<any>(`${environment.APIBaseURL}/api/post-notification/create`,
                                            JSON.stringify(newPrd),
                                            this.httpOptions)
                                          }


showNotifyToTeacher():Observable<any>{
  return this.httpclient.get<any>(`${environment.APIBaseURL}/api/post-notification/show`,this.httpOptions);

}


teacherCheckNotify( id:number ):Observable<any>{
  return this.httpclient.get<any>(`${environment.APIBaseURL}/api/post-notification/update/${id}`,
                                            this.httpOptions)
                                          }





ActivationeditPost(param: any , id: any ): Observable<any> {
  return this.httpclient.put<any>(`${environment.APIBaseURL}/api/post/activate/${id}`, JSON.stringify(param), this.httpOptions)

}


  // to get all posts
  getactiveposts():Observable<Posts[]>{
    return  this.httpclient.get<Posts[]>(`${environment.APIBaseURL}/api/active-posts`, this.httpOptions)

  }




    // to get all posts
    AllteacherPosts():Observable<Posts[]>{
      return  this.httpclient.get<Posts[]>(`${environment.APIBaseURL}/api/teacher-posts`, this.httpOptions)

    }
}
