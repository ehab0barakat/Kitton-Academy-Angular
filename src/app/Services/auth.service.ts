import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class AuthService  {
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

    Auth():Observable<any> {
      return this.httpclient.get<any>(
        `${environment.APIBaseURL}/api/auth/me`,this.httpOptions);}
}
