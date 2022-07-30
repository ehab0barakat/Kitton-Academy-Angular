import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { PostsApiService } from 'src/app/Components/Services/posts-api.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute, private router:Router,
    private postApiService:PostsApiService ) { }


  targetPostId=Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
 
 
  ngOnInit(): void {
    this.postApiService.deletePost(this.targetPostId).subscribe(response =>{
      console.log(response);
      
      if(response){
        this.router.navigate(['/post-index']);
      }
    }
  )
  }


}
