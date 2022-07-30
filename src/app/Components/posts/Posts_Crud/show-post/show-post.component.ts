import { Component, OnInit } from '@angular/core';
import { PostsApiService } from 'src/app/Components/Services/posts-api.service';
import { Posts } from 'src/app/Models/posts';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  posts:Posts[]=[];

  constructor(private postApiService:PostsApiService ) { }

  ngOnInit(): void {
    this.postApiService.getAllPosts().subscribe(response=>{
      this.posts=response;
      // console.log(this.posts);
    });

  }

}
