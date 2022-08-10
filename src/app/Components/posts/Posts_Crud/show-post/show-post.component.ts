import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPostsService } from 'src/app/Components/Services/api-posts.service';
import { Posts } from 'src/app/Models/posts';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  posts:Posts[]=[];
  auth:any = localStorage.getItem("role");


  constructor(private postApiService:ApiPostsService,private authService : AuthService,
    private router:Router ) { }

  ngOnInit(): void {

    this.authService.Auth().subscribe(response=>{
      this.auth = response ;
      console.log(this.auth.id);
      
      if(this.auth.role != 2 ){
          this.router.navigate(['/not-auth']);
        }
        else{
          this.postApiService.AllteacherPosts().subscribe(response=>{
            this.posts=response;
            console.log(this.posts[0].teacher_id);
          });
        }
      });
        if(this.auth != 2){
          this.router.navigate(['/not-auth']);
        }


  }

}
