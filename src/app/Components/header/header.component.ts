import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ClassesService } from 'src/app/Services/classes.service';
import { EventsService } from 'src/app/Services/events.service';
import { environment } from 'src/environments/environment';
import { ApiPostsService } from '../Services/api-posts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  httpOptions: { headers: HttpHeaders; };
  notificationClass: any;
  notificationPost: any;

  constructor( private route:Router,
    private httpclient: HttpClient,
    private eventservice : EventsService,
    private classService : ClassesService,
    private PostService : ApiPostsService
      ) {

      this.httpOptions={
        headers:new HttpHeaders({
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
        })
      };
  }

  userData:any  = "0" ;
  notification:any
  ngOnInit(): void {

    this.httpclient.get<any>(`${environment.APIBaseURL}/api/auth/me`,this.httpOptions).subscribe({
      next: (data) => {
                        this.userData = data;
                        window.localStorage.setItem("role",`${this.userData.role}`)
      },
      // error: err =>  console.log(err)

      // console.log(data)
    })
    // console.log(this.userData)

    this.eventservice.showNotifyToTeacher().subscribe({
        next: data => this.notification =data,
        error: err =>  console.log(err)
      });
      this.classService.showNotifyToTeacher().subscribe({
          next: data => this.notificationClass =data,
          error: err =>  console.log(err)
      });

      this.PostService.showNotifyToTeacher().subscribe({
          next: data => this.notificationPost =data,
          error: err =>  console.log(err)
      });





  }



  ngOnChanges() {

  }


  check(id:number){
    this.eventservice.teacherCheckNotify(id).subscribe(response=>{
      // console.log(response)
    });
  }
  checkClass(id:number){
    this.classService.teacherCheckNotify(id).subscribe(response=>{
      // console.log(response)
    });

  }
  checkPost(id:number){
    this.PostService.teacherCheckNotify(id).subscribe(response=>{
      // console.log(response)
    });

  }

}
