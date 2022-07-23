import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from 'src/app/Models/posts';



@Injectable({
  providedIn: 'root'
})
export class PostsApiService {
//  teacherPosts:Posts[]=[];

  constructor(private httpclient: HttpClient) { }
}

// to get all posts
