import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UploadService } from 'src/app/Services/upload.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UploadService],
})
export class SignUpComponent implements OnInit {

  title = 'angular-cloudinary';


  pass:any
  conpass:any
  age:any
  error: any;
  constructor( private route:Router,
    private httpclient: HttpClient,
    private _uploadService: UploadService) {

      this.httpOptions={
        headers:new HttpHeaders({
          'Content-Type': 'application/json' ,
          // "Authorization": "Bearer {P6z5dUpeoHbUH0z4KjEtdLCHloT4PQpk9wtyiDxl}",

        })
      };
  }

  ngOnInit(): void {
  }


  onKeypassword(event:any){
    this.conpass = event.target.value
  }

  onKey(event: any) {
    this.pass = event.target.value
  }

  onKeyage(event: any) {
    this.age = event.target.value

  }
  message:any = {
    message : ""
  } ;

  private httpOptions={};






  image:any

  files: File[] = [];

  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onload() {
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






  mysubmit(myform:NgForm){
    return this.httpclient.post<object>(`${environment.APIBaseURL}/api/auth/signupuser`,
                                        JSON.stringify(myform.value),
                                        this.httpOptions).subscribe( data =>{
      this.message= data
      this.route.navigate(['/home'])
    })
  }


}







