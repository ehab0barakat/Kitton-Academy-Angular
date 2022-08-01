import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/Models/posts';
import { TeacherComments } from 'src/app/Models/teacher-comments';
import { UserComments } from 'src/app/Models/user-comments';
import { AuthService } from 'src/app/Services/auth.service';
import { ApiPostsService } from '../../Services/api-posts.service';
import { CommentsApiService } from '../../Services/comments-api.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  singlePost: Posts | undefined;
  userComment :UserComments ={} as UserComments;
  teaherComment:TeacherComments ={} as TeacherComments;
  allcoments:UserComments[]=[];
  allteachercoments:TeacherComments[]=[];

  data:any;
  auth:any = localStorage.getItem("role");


  id:number =0;
  constructor(private activatedRoute:ActivatedRoute, private postApiService:ApiPostsService,
    private router:Router,
    private commentApiService:CommentsApiService, private authService:AuthService ) { 

    
  }

  post = Number(this.activatedRoute.snapshot.paramMap.get("id"));
 
  ngOnInit(): void {

    this.postApiService.getPostById(this.post).subscribe(response=>{
      this.singlePost = response ;
      console.log(this.singlePost.id);
      
      // get all comments
    this.commentApiService.getComments().subscribe(response=>{
      this.allcoments=response;
      console.log(this.allcoments[0].post_id);
     
      
    })
    // teacher section 
// show all comments
this.commentApiService.getTeacherComments().subscribe(res=>{
  this.allteachercoments=res;
 
 })


  })

// get data of  login user
this.authService.Auth().subscribe(response=>{
  this.data=response;
  console.log(this.data.role);
})

}

send_comment(postId:any,userId:any){
  if(this.data.role==1){
  this.userComment.user_id=userId;
  this.userComment.post_id=postId;
this.commentApiService.sendComments(this.userComment).subscribe(response=>{
  console.log(this.userComment);
  
  if(response){
  //  this.router.navigate([`/single-posts/${this.userComment.post_id}`]);

  }


})

}

}


teacherSend_comment(postId:any,teacherId:any){
  this.teaherComment.post_id=postId;

  this.teaherComment.teacher_id=teacherId
  if(this.data.role==2){

    // teacher send comments
  ;
   this.commentApiService.teacherSendComments(this.teaherComment).subscribe(response=>{
    console.log(this.teaherComment);
  
   })
  
  
   }
  
}






}