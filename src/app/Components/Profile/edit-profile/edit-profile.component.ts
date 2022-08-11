import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { NormaluserApiService } from 'src/app/Services/normaluser-api.service';
import { TeacherService } from 'src/app/Services/teacher.service';
import { UploadService } from 'src/app/Services/upload.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
data:any;
  image: any;
  constructor(private authService:AuthService,private normalUserApi:NormaluserApiService,
    private router:Router, private teacherService:TeacherService,private _uploadService: UploadService) { }

  ngOnInit(): void {

    // / get data of  login user
this.authService.Auth().subscribe(response=>{
  this.data=response;
  console.log(this.data.role);
})


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





   
  //  user update profile
  update(){


  if(this.image?.secure_url){
    this.data.image=this.image.secure_url
  }

 
    this.normalUserApi.editProfile(this.data,this.data.id).subscribe(res=>{
      

       if(Response){

        this.router.navigate(['/profile'])

     }

    }

      )

    


  }




  // teacher  update
  teacherUpdate(){
    if(this.image?.secure_url){
      this.data.image=this.image.secure_url
    }

    this.teacherService.editProfile(this.data,this.data.id).subscribe(res=>{

      if(res){

        this.router.navigate(['/profile'])

     }

    })


  }

}
