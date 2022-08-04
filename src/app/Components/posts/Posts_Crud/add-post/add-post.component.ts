import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from 'src/app/Models/posts';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
import { ApiPostsService } from 'src/app/Components/Services/api-posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  NewPost :Posts ={} as Posts ;



  constructor( private postApiService:ApiPostsService,
   private router:Router,private httpclient: HttpClient ,
  private fb:FormBuilder,
    ) {

  }



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
