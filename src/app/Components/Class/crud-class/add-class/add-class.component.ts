import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { classCats } from 'src/app/Models/classcats';
import { classes } from 'src/app/Models/classes';
import { AuthService } from 'src/app/Services/auth.service';
import { ClassCatsService } from 'src/app/Services/class-cats.service';
import { ClassesService } from 'src/app/Services/classes.service';
import { UploadService } from 'src/app/Services/upload.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})


export class AddClassComponent implements OnInit {
  class:classes[]=[];
  NewClass :classes ={} as classes ;
  AllClassCats:classCats[] = []
  constructor(private classService:ClassesService,
    private _uploadService: UploadService,private router:Router,private classcatsService:ClassCatsService ,private authService : AuthService) { }

  auth:any = localStorage.getItem("role");
  ngOnInit(): void {

    this.classcatsService.getAllClassCats().subscribe(response=>{
      this.AllClassCats=response ;
      // console.log(this.AllClassCats);
    })
    this.authService.Auth().subscribe(response=>{
      this.auth = response ;
      // console.log(response)
      if(this.auth.role != 2 ){
          this.router.navigate(['/not-auth']);
        }
      });
        if(this.auth != 2){
          this.router.navigate(['/not-auth']);
        }

  }

  image:any
  files: File[] = [];

  onSelect(event:any) {
    // console.log(event);
    this.files.push(...event.addedFiles);
    this.onUpload()
  }

  onRemove(event:any) {
    // console.log(event);
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


  create(){

    this.NewClass.teacher_id = this.auth.id
    this.NewClass.image = this.image.secure_url
    this.classService.create(this.NewClass).subscribe(response=> {
      // console.log(response);
      if (response){
        this.router.navigate(['/classes-index']);
      }
    })
  }
}
