import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})

export class AdminHeaderComponent implements OnInit {
  httpOptions: { headers: HttpHeaders; };

  constructor( private router:Router,
    private httpclient: HttpClient,
    private authService: AuthService ) {

      this.httpOptions={
        headers:new HttpHeaders({
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
        })
      };
  }

  auth:any = localStorage.getItem("role");

  userData:any  = "0" ;

  ngOnInit(): void {
    if(this.auth != 3 ){
      this.router.navigate(['/not-auth']);
    }

    this.httpclient.get<any>(`${environment.APIBaseURL}/api/auth/me`,this.httpOptions).subscribe( data =>{
      this.userData = data ;
      console.log(data)
      if(this.userData.role != 3 ){
          this.router.navigate(['/not-auth']);
        }
    })
  }

  }
