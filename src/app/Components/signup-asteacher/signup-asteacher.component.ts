import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'; // import router from angular router
import { UploadService } from 'src/app/Services/upload.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-signup-asteacher',
  templateUrl: './signup-asteacher.component.html',
  styleUrls: ['./signup-asteacher.component.css'],
  providers: [UploadService],
})
export class SignupAsteacherComponent implements OnInit {

  title = 'angular-cloudinary';

  pass:any
  conpass:any
  max:any
  httpOptions: { headers: HttpHeaders; };
  constructor( private route:Router,
    private httpclient: HttpClient,
    private _uploadService: UploadService) {

      this.httpOptions={
        headers:new HttpHeaders({
          'Content-Type': 'application/json' ,
          // "Authorization":"Bearer {P6z5dUpeoHbUH0z4KjEtdLCHloT4PQpk9wtyiDxl}",

        })
      };
  }


  ngOnInit(): void {
  }

  onKeypassword(event:any){
    this.conpass = event.target.value
  }
  onKeymax(event:any){
    this.max = event.target.value
  }

  onKey(event: any) {
    this.pass = event.target.value
  }




  message:any = {
    message : ""
  } ;






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
    myform.value.image = this.image.secure_url ;
    localStorage.clear();
    console.log(myform.value);
    return this.httpclient.post<object>(`${environment.APIBaseURL}/api/auth/signupteacher`,
                                        JSON.stringify(myform.value),
                                        this.httpOptions).subscribe( data =>{
      this.message= data
      console.log(data)
      this.route.navigate(['/home'])
    })
  }



}
