import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { EventsService } from 'src/app/Services/events.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  httpOptions: { headers: HttpHeaders };

  constructor(
    private route: Router,
    private httpclient: HttpClient,
    private eventservice: EventsService
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
  }

  userData: any = '0';
  notification: any;
  ngOnInit(): void {
    this.httpclient
      .get<any>(`${environment.APIBaseURL}/api/auth/me`, this.httpOptions)
      .subscribe((data) => {
        this.userData = data;
        window.localStorage.setItem('role', `${this.userData.role}`);
        console.log(data);
      });
    console.log(this.userData);

    this.eventservice.showNotifyToTeacher().subscribe((response) => {
      this.notification = response;
      console.log(this.notification);
    });
  }

  ngOnChanges() {}

  check(id: number) {
    this.eventservice.teacherCheckNotify(id).subscribe((response) => {
      console.log(response);
    });
  }
}
