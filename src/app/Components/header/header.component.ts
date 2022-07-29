import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  httpOptions: { headers: HttpHeaders; };

  constructor( private route:Router,
    private httpclient: HttpClient ) {

      this.httpOptions={
        headers:new HttpHeaders({
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
        })
      };
  }

  userData:any  = "0" ;

  ngOnInit(): void {
    this.httpclient.get<any>(`${environment.APIBaseURL}/api/auth/me`,this.httpOptions).subscribe( data =>{
      this.userData = data ;
      console.log(this.userData)
    })

    console.log(this.userData)
  }



  ngOnChanges() {

  }



}
