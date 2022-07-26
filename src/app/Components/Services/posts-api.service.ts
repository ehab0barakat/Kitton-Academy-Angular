import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Posts } from 'src/app/Models/posts';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PostsApiService {
//  teacherPosts:Posts[]=[];

  constructor(private httpclient: HttpClient) { }

// to get all posts
  getAllPosts():Observable<Posts[]>{
    return  this.httpclient.get<Posts[]>(`${environment.APIBaseURL}/posts`)
 
  }
  // get post by id 
  getPostById(id:number):Observable<Posts>{
    return  this.httpclient.get<Posts>(`${environment.APIBaseURL}/posts/${id}`)


  }
}




