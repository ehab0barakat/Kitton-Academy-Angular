import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsApiService } from 'src/app/Components/Services/posts-api.service';
import { Posts } from 'src/app/Models/posts';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  NewPost :Posts ={} as Posts ;
  
  constructor( private postApiService:PostsApiService,
   private router:Router,private httpclient: HttpClient ) { }

  ngOnInit(): void {
  }

  

  // function to add post 
  addPost(){
   this.postApiService.addPost(this.NewPost).subscribe(post=>{
  console.log(post);
  
    if(post){
     this.router.navigate(['/post-index']);

    }
   })
   
  }

 
}
