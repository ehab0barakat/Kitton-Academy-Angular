import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from 'src/app/Models/posts';
import { ApiPostsService } from '../../Services/api-posts.service';

@Component({
  selector: 'app-admin-post-control',
  templateUrl: './admin-post-control.component.html',
  styleUrls: ['./admin-post-control.component.css']
})

export class AdminPostControlComponent implements OnInit {
posts:Posts[]=[];
  constructor(private postApiService:ApiPostsService,
    private router : Router  ) { }



  ngOnInit(): void {
    this.postApiService.getAllPosts().subscribe(response=>{
      this.posts=response;
      // console.log(this.posts);
    });


  }



  toggle(id:any ,isActive:any , teacher_id:any){
    isActive == 0 ? isActive = 1 : isActive = 0 ;
    this.postApiService.ActivationeditPost({"isActive":isActive},id).subscribe(data =>{
      this.router.navigate(["admin/post-control"])
    });

    this.postApiService.teacherNotify({"post_id" : id  , "teacher_id" : teacher_id}).subscribe(data =>{
      this.router.navigate(["admin/post-control"])
      console.log(data)

    });
  }

}
