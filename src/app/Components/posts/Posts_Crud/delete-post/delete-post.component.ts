import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { ApiPostsService } from 'src/app/Components/Services/api-posts.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {
  auth:any = localStorage.getItem("role");
  constructor(private activatedRoute:ActivatedRoute, private router:Router,
    private postApiService:ApiPostsService,private authService : AuthService ) { }


  targetPostId=Number(this.activatedRoute.snapshot.paramMap.get("id")) ;


  ngOnInit(): void {

  this.authService.Auth().subscribe(response=>{
    this.auth = response ;
    if(this.auth.role != 2 && this.auth.role != 3 ){
        this.router.navigate(['/not-auth']);
      }
      else{
        this.postApiService.deletePost(this.targetPostId).subscribe(response =>{
          if( this.auth.role == 3){
            this.router.navigate(['/admin/post-control']);
          }
          if( this.auth.role == 2){
            this.router.navigate(['/show-post']);
          }
        }
      )
      }
    });
      if(this.auth != 2 && this.auth != 3){
        this.router.navigate(['/not-auth']);
      }


  }



}
