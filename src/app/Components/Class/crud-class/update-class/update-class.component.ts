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
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.css']
})
export class UpdateClassComponent implements OnInit {
  valid: any;
  image: any;
  TargetResponse: any;

  constructor( private activatedRoute : ActivatedRoute,
    private classService:ClassesService,
    private router:Router,
    private classcatsService:ClassCatsService,
    private ClassContent:ClassContentService,
    private authService:AuthService,
    private _uploadService : UploadService) { }
    editClass :classes ={} as classes ;

    AllClassCats:classCats[] = []
    currentPrdID= Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
    auth:any = localStorage.getItem("role");

  ngOnInit(): void {
    // this.authService.Auth().subscribe(response=>{
    //   this.auth = response ;
    //   if(this.auth.role != 2 ){
    //     this.router.navigate(['/not-auth']);
    //   }
    // });

    // if(this.auth != 2){
    //   this.router.navigate(['/not-auth']);
    // }

    this.ClassContent.ValidationForClass(this.currentPrdID).subscribe(response=>{
      this.valid = response
      if(!this.valid.valid){
        this.router.navigate(['/not-auth']);
      }
    });


    this.classcatsService.getAllClassCats().subscribe(response=>{
      this.AllClassCats=response ;
    })

    this.classService.getById(this.currentPrdID).subscribe(response=>{
      this.TargetResponse = response ;
      this.editClass = this.TargetResponse.classes ;
      console.log(response);
    });
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



update(){

  if(this.image?.secure_url){
    this.editClass.image=this.image.secure_url
  }

   this.classService.update(this.editClass, this.currentPrdID).subscribe(response =>{
    console.log(response);

  if(response){
    this.router.navigate(['/classes-index']);
  }
}
)
}
}
