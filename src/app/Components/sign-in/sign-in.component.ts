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
          // "Authorization": `Bearer ${this.token}`

        })
      };
  }
  ngOnInit(): void {
  }


  message:any

  token:any
  userData:any
  mysubmit(myform:NgForm){

    return this.httpclient.post(`${environment.APIBaseURL}/api/auth/login`,JSON.stringify(myform.value),this.httpOptions).subscribe( data =>{
      this.token = data
      this.httpclient.get<any>(`${environment.APIBaseURL}/api/auth/me`, {
        headers:new HttpHeaders({
          'Content-Type': 'application/json' ,
          "Authorization": `Bearer ${this.token.token}`

        })
      }).subscribe( data =>{
        this.userData = data ;
        if(this.userData.role != 3){
          window.localStorage.setItem("token" ,this.token.token );
          window.localStorage.setItem("role",`${this.userData.role}`)
          this.route.navigate(['/slachpage'])
        }else{
          this.message = "Email or Password is Not Valid";
        }

      })



    })

  }




}
