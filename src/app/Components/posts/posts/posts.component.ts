import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/Models/posts';
import { PostsApiService } from '../../Services/posts-api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:Posts[]=[];
  constructor(private postApiService:PostsApiService ) { }

  

  ngOnInit(): void {
    this.postApiService.getAllPosts().subscribe(response=>{
      this.posts=response;
      // console.log(this.posts);
    });


  }
}
