import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/Models/posts';
import { PostsApiService } from '../../Services/posts-api.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  singlePost: Posts | undefined;
  id:number =0;
  constructor(private activatedRoute:ActivatedRoute, private postApiService:PostsApiService,
    private router:Router,) { 

    
  }

  post = Number(this.activatedRoute.snapshot.paramMap.get("id"));

  ngOnInit(): void {


  
    this.postApiService.getPostById(this.post).subscribe(response=>{
      this.singlePost = response ;
      console.log(this.singlePost);
      
    


  })

}

}