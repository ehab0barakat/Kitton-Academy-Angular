import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/Models/posts';
import { UserComments } from 'src/app/Models/user-comments';
import { CommentsApiService } from '../../Services/comments-api.service';
import { PostsApiService } from '../../Services/posts-api.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  singlePost: Posts | undefined;
  userComment :UserComments ={} as UserComments;
  allcoments:UserComments[]=[];

  id:number =0;
  constructor(private activatedRoute:ActivatedRoute, private postApiService:PostsApiService,
    private router:Router,
    private commentApiService:CommentsApiService ) { 

    
  }

  post = Number(this.activatedRoute.snapshot.paramMap.get("id"));

  ngOnInit(): void {


  
    this.postApiService.getPostById(this.post).subscribe(response=>{
      this.singlePost = response ;
      // console.log(this.singlePost);
      // get all comments
    this.commentApiService.getComments().subscribe(response=>{
      this.allcoments=response;
      console.log(this.allcoments);
      
    })


  })

}

send_comment(){
  
this.commentApiService.sendComments(this.userComment).subscribe(response=>{
  console.log(this.userComment);
  
  if(response){
   this.router.navigate(['/single-posts']);

  }


})

}

}