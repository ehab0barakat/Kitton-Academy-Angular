import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/Models/posts';
import { TeacherComments } from 'src/app/Models/teacher-comments';
import { UserComments } from 'src/app/Models/user-comments';
import { UserLikes } from 'src/app/Models/user-likes';
import { AuthService } from 'src/app/Services/auth.service';
import { UserlikesApiService } from 'src/app/Services/userlikes-api.service';
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
  userLikes:UserLikes ={} as UserLikes;

  allcoments:UserComments[]=[];
  allteachercoments:TeacherComments[]=[];
  alllikes:UserLikes[]=[];
  data:any;
  auth:any = localStorage.getItem("role");
  id:number =0;
  likestatus:any;
  numberOfLikes:any=0;
  constructor(private activatedRoute:ActivatedRoute, private postApiService:ApiPostsService,
    private router:Router,
    private commentApiService:CommentsApiService, private authService:AuthService,
    private userLikeService:UserlikesApiService ) {


  }

  post = Number(this.activatedRoute.snapshot.paramMap.get("id"));

  ngOnInit(): void {

    // this.commentApiService.getjoin(this.post).subscribe(res=>{
    //   console.log(res);
      
    // })
    this.userLikeService.getAllLikes(this.post).subscribe(res=>{
     this.numberOfLikes=res
      //  console.log(this.numberOfLikes);
    })

    if(this.auth == 3){
      this.router.navigate([`/admin/single-post/${this.post}`])
    }
  // to get post by id
    this.postApiService.getPostById(this.post).subscribe(response=>{
      this.singlePost = response ;
      console.log(this.singlePost.id);
      
      this.userLikeService.getuserId(this.singlePost.id).subscribe(res=>{
        console.log(res);
        this.likestatus=res;
        })

      // get all comments of users
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

//




}
// user add comments
send_comment(postId:any,userId:any,userName:any){
  if(this.data.role==1){
  this.userComment.user_id=userId;
  this.userComment.post_id=postId;
  this.userComment.name=userName;
this.commentApiService.sendComments(this.userComment).subscribe(response=>{
  console.log(this.userComment.name);
  console.log(this.userComment.comment);

  if(response){
    this.userComment.name=" ";
    this.userComment.comment=" ";

    this.commentApiService.getComments().subscribe(response=>{
      this.allcoments=response;
      console.log(this.allcoments[0].post_id);


    })

    
  //  this.router.navigate([`/single-post/${this.singlePost?.id}`]);
 

  }
})
}
}

// teacher add comments
teacherSend_comment(postId:any,teacherId:any,teacherName:any){
  this.teaherComment.post_id=postId;
  this.teaherComment.name=teacherName;
  this.teaherComment.teacher_id=teacherId
  if(this.data.role==2){

    // teacher send comments
  
   this.commentApiService.teacherSendComments(this.teaherComment).subscribe(response=>{
    console.log(this.teaherComment);
    // this.router.navigate(['single-post/:singlePost.id'])
    // .then(() => {
    //   window.location.reload();
    // });

   })


   }

}


// user add like
addlike(postId:any,userId:any){
this.userLikes.post_id=postId;
this.userLikes.user_id=userId;

if(this.likestatus.liked==true)
{
  this.likestatus.liked=!this.likestatus.liked;

this.userLikeService.deletelike(this.userLikes.post_id).subscribe(res=>{
  this.userLikeService.getAllLikes(this.post).subscribe(res=>{
    this.numberOfLikes=res
     //  console.log(this.numberOfLikes);
   })

  console.log(res);

})
}

else{
  this.likestatus.liked=!this.likestatus.liked;
  this.userLikeService.addlike(this.userLikes).subscribe(res=>{

    console.log(res);
    this.userLikeService.getAllLikes(this.post).subscribe(res=>{
      this.numberOfLikes=res
       //  console.log(this.numberOfLikes);
     })
 






  })
}



}








}
