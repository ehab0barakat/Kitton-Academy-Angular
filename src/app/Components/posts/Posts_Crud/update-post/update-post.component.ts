import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiPostsService } from 'src/app/Components/Services/api-posts.service';
import { Posts } from 'src/app/Models/posts';
import { AuthService } from 'src/app/Services/auth.service';
import { UploadService } from 'src/app/Services/upload.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
 editPost:Posts={} as Posts;
 auth:any = localStorage.getItem("role");
  image: any;
  constructor(private postApiService:ApiPostsService,
    private router:Router, private activatedRoute : ActivatedRoute,
    private authService : AuthService,private _uploadService: UploadService) { }

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


  files: File[] = [];

  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.onUpload();
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onUpload() {
    //Scape empty array
    if (!this.files[0]) {
      alert('Please upload an image first.');
    }

    //Upload my image to cloudinary
    const file_data = this.files[0];
    const data = new FormData();
    data.append('file', file_data);
    data.append('upload_preset', 'ml_default');
    data.append('cloud_name', 'el-safwa');

    this._uploadService.uploadImage(data).subscribe((response) => {
      if (response) {
        this.image = response
        console.log(response.secure_url);
      }
    });

   }


EditPost(){
  this.editPost.image=this.image.secure_url
this.postApiService.editPost(this.editPost,this.targetPostId).subscribe(Response=>{
  console.log(Response);
  
 if(Response){
   
    this.router.navigate(['/post-index'])
 }

})

  }
}
