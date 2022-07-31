import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/Models/posts';
import { ApiPostsService } from '../../Services/api-posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:Posts[]=[];
  constructor(private postApiService:ApiPostsService ) { }

  

  ngOnInit(): void {
    this.postApiService.getAllPosts().subscribe(response=>{
      this.posts=response;
      // console.log(this.posts);
    });


  }
}
