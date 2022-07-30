import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'; // import router from angular router
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  httpOptions: { headers: HttpHeaders; };

  constructor( private route:Router,
    private httpclient: HttpClient ) {

      this.httpOptions={
        headers:new HttpHeaders({
          'Content-Type': 'application/json' ,
          "responseType": 'text'
          // "Authorization": "Bearer {P6z5dUpeoHbUH0z4KjEtdLCHloT4PQpk9wtyiDxl}",

        })
      };
  }
  ngOnInit(): void {
  }


  message:any = {
    message : ""
  } ;



  mysubmit(myform:NgForm){

    return this.httpclient.post(`${environment.APIBaseURL}/api/auth/login`,
    JSON.stringify(myform.value),
    this.httpOptions).subscribe( data =>{
      this.message= data;
      window.localStorage.setItem("token" ,this.message.token );
      this.route.navigate(['/slachpage'])
    })

  }




}
