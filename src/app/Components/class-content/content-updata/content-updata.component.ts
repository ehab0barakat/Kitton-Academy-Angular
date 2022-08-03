import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { classCats } from 'src/app/Models/classcats';
import { classes } from 'src/app/Models/classes';
import { AuthService } from 'src/app/Services/auth.service';
import { ClassCatsService } from 'src/app/Services/class-cats.service';
import { ClassContentService } from 'src/app/Services/class-content.service';
import { ClassesService } from 'src/app/Services/classes.service';
import { UploadService } from 'src/app/Services/upload.service';

@Component({
  selector: 'app-content-updata',
  templateUrl: './content-updata.component.html',
  styleUrls: ['./content-updata.component.css']
})

export class ContentUpdataComponent implements OnInit {
  editVideo:any = {
    title : "" ,
    description : "" ,
    link : ""
  }

  link:any = true;
  browse:any = false;
  VideotId = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;



  constructor(private classService:ClassesService,
    private _uploadService: UploadService,
    private router:Router,
    private activatedRoute : ActivatedRoute,
    private ClassContent: ClassContentService,
    private authService : AuthService) { }

  auth:any = localStorage.getItem("role");
  valid:any;

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

    this.ClassContent.ValidationForClass(this.VideotId).subscribe(response=>{
      this.valid = response
      if(!this.valid.valid){
        this.router.navigate(['/not-auth']);
      }
    });

    this.ClassContent.GetVideoById(this.VideotId).subscribe(response=>{
      this.editVideo = response
      console.log(response)
    });

  }


  reverse(){
   this.link= !this.link
   this.browse= !this.browse
  }


  Video:any;
  files: File[] = [];


  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.loadingImage = true
    this.onUpload();
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onUpload() {
    //Scape empty array
    if (!this.files[0]) {
      alert('Please upload an Video first.');
    }

    //Upload my Video to cloudinary
    const file_data = this.files[0];
    const data = new FormData();
    data.append('file', file_data);
    data.append('upload_preset', 'ml_default');
    data.append('cloud_name', 'el-safwa');

    this._uploadService.uploadVideo(data).subscribe((response) => {
      if (response) {
        this.loadingVideo = false
        this.done = true
        this.Video = response
        console.log(response.secure_url);
      }
    });
  }



//image

image:any
file1: File[] = [];
loadingImage:any = false
done:any = false
loadingVideo:any = false

onSelectt(event:any) {
  console.log(event);
  this.file1.push(...event.addedFiles);
  this.loadingImage = true
  this.onUploadd();
}

onRemovee(event:any) {
  console.log(event);
  this.file1.splice(this.file1.indexOf(event), 1);
}

onUploadd() {
  //Scape empty array
  if (!this.file1[0]) {
    alert('Please upload an image first.');
  }

  //Upload my image to cloudinary
  const file_data = this.file1[0];
  const data = new FormData();
  data.append('file', file_data);
  data.append('upload_preset', 'ml_default');
  data.append('cloud_name', 'el-safwa');

  this._uploadService.uploadImage(data).subscribe((response) => {
    if (response) {
      this.image = response
      this.loadingImage = false
      this.done = true
      console.log(response.secure_url);
    }
  });

}


  create(){

     this.editVideo.image=this.image.secure_url

  if(!this.editVideo.link){
    this.editVideo.link=this.Video.secure_url
  }
    this.ClassContent.updateVideoToClass(this.editVideo , this.VideotId).subscribe(response=> {
      if (response){
        this.router.navigate([`/content-index/${this.VideotId}`]);
      }
    })
  }
}
