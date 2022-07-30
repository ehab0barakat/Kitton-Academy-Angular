import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiPostsService } from 'src/app/Components/Services/api-posts.service';
import { Posts } from 'src/app/Models/posts';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
 editPost:Posts={} as Posts;
 auth:any = localStorage.getItem("role");
  constructor(private postApiService:ApiPostsService,
    private router:Router, private activatedRoute : ActivatedRoute,private authService : AuthService) { }

  targetPostId = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
  ngOnInit(): void {
    this.authService.Auth().subscribe(response=>{
      this.auth = response ;
      if(this.auth.role != 2 ){
          this.router.navigate(['/not-auth']);
        }
      });
        if(this.auth != 2){
          this.router.navigate(['/not-auth']);
        }
  }




EditPost(){
this.postApiService.editPost(this.editPost,this.targetPostId).subscribe(Response=>{
  console.log(Response);
  
 if(Response){
   
    this.router.navigate(['/post-index'])
 }

})

  }
}
