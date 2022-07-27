import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  pass:any
  conpass:any
  age:any
  error: any;
  constructor( private route:Router,
    private httpclient: HttpClient) {

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

  mysubmit(myform:NgForm){
    return this.httpclient.post<object>(`${environment.APIBaseURL}/api/auth/signupuser`,
                                        JSON.stringify(myform.value),
                                        this.httpOptions).subscribe( data =>{
      this.message= data
    })
  }

    // this.route.navigate(['/teachers'])



  }







