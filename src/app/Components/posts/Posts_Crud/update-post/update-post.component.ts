import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsApiService } from 'src/app/Components/Services/posts-api.service';
import { Posts } from 'src/app/Models/posts';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
 editPost:Posts={} as Posts;
  constructor(private postApiService:PostsApiService,
    private router:Router, private activatedRoute : ActivatedRoute) { }

  targetPostId = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
  ngOnInit(): void {
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
