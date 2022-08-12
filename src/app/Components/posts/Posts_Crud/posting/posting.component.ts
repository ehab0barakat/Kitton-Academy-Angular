import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPostsService } from 'src/app/Components/Services/api-posts.service';
import { Posts } from 'src/app/Models/posts';
import { AuthService } from 'src/app/Services/auth.service';
import { UploadService } from 'src/app/Services/upload.service';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {
  NewPost :Posts ={} as Posts ;
  allPosts:Posts[]=[];
  auth:any = localStorage.getItem("role");
  image: any;

  constructor(private postApiService:ApiPostsService,private authService : AuthService,
    private router:Router,private _uploadService: UploadService) { }

  ngOnInit(): void {


    this.postApiService.getAllPosts().subscribe(response=>{
      this.allPosts=response ;
    })


    this.authService.Auth().subscribe(response=>{
      this.auth = response ;
      if(this.auth.role != 2){
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




  addPost(){
    this.NewPost.image=this.image.secure_url
    this.postApiService.addPost(this.NewPost).subscribe(post=>{
    console.log(post);
   
     if(post){
      this.router.navigate(['/show-post']);
 
     }
     
 
 
 })
    
   }


}
