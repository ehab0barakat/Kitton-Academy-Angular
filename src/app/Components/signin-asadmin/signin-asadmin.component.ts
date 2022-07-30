
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'; // import router from angular router
import { timeout } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signin-asadmin',
  templateUrl: './signin-asadmin.component.html',
  styleUrls: ['./signin-asadmin.component.css']
})


export class SigninAsadminComponent implements OnInit {
  httpOptions: { headers: HttpHeaders; };

  constructor( private route:Router,
    private httpclient: HttpClient ,
    private authService: AuthService) {

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

  token:any
  userData:any
  message:any = ""
  data:any


  // mysubmit(myform:NgForm){
  //   localStorage.clear()
  //   setTimeout(()=>{
  //     this.message= "Email or password is wrong"
  //   },1500)

  //   return this.httpclient.post(`${environment.APIBaseURL}/api/auth/login`,JSON.stringify(myform.value),this.httpOptions).subscribe( data =>{
  //     this.message= data;
  //     window.localStorage.setItem("token" ,this.message.token );
  //     this.authService.Auth().subscribe(response=>{

  //       window.localStorage.setItem("role" , `${response.role}` );

  //       if(response.role != 3){
  //         localStorage.clear();
  //         this.message = "THis Account is not authorized "
  //       }else{
  //         this.route.navigate(['/admin'])
  //       }
  //     });
  //   })



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
        if(this.userData.role == 3){
          window.localStorage.setItem("token" ,this.token.token );
          window.localStorage.setItem("role",`${this.userData.role}`)
          this.route.navigate(['/admin'])
        }else{
          this.message = "Email or Password is Not Valid";
        }

      })



    })

  }




}
