import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'; // import router from angular router
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-signup-asteacher',
  templateUrl: './signup-asteacher.component.html',
  styleUrls: ['./signup-asteacher.component.css']
})
export class SignupAsteacherComponent implements OnInit {
  pass:any
  conpass:any
  max:any
  httpOptions: { headers: HttpHeaders; };
  constructor( private route:Router,
    private httpclient: HttpClient) {

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



  mysubmit(myform:NgForm){
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
