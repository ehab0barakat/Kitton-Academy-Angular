import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
          "Authorization": `Bearer${localStorage.getItem('token')}`,
        })
      };
  }
  ngOnInit(): void {

    console.log(this.httpOptions)
    console.log(localStorage.getItem('token'))

    this.httpclient.post<object>(`${environment.APIBaseURL}/api/auth/me`,
    this.httpOptions).subscribe( data =>{
      console.log(data)
    })

    this.httpclient.post(`${environment.APIBaseURL}/api/auth/me`, {headers: new HttpHeaders().set('Authorization', `${localStorage.getItem('token')}`)})
    .subscribe(data => {
      console.log(data)
   })
  }

}
