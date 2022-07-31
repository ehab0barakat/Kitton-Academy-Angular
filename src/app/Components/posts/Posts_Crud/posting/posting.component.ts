import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPostsService } from 'src/app/Components/Services/api-posts.service';
import { Posts } from 'src/app/Models/posts';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {
  NewPost :Posts ={} as Posts ;
  allPosts:Posts[]=[];
  auth:any = localStorage.getItem("role");

  constructor(private postApiService:ApiPostsService,private authService : AuthService,
    private router:Router) { }

  ngOnInit(): void {


    this.postApiService.getAllPosts().subscribe(response=>{
      this.allPosts=response ;
    })


    this.authService.Auth().subscribe(response=>{
      this.auth = response ;
      if(this.auth.role != 2){
          this.router.navigate(['/not-auth']);
        }
      });
        if(this.auth != 2){
          this.router.navigate(['/not-auth']);
        }
        
  }



  addPost(){
    this.postApiService.addPost(this.NewPost).subscribe(post=>{
    console.log(post);
   
     if(post){
      this.router.navigate(['/post-index']);
 
     }
     
 
 
 })
    
   }
}
