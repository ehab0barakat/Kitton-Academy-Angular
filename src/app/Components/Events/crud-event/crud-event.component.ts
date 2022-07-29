import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/Services/events.service';
import { Event } from 'src/app/Models/event'
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-crud-event',
  templateUrl: './crud-event.component.html',
  styleUrls: ['./crud-event.component.css']
})
export class CrudEventComponent implements OnInit {

  constructor( private router:Router,
    private eventService:EventsService,
    private activatedRoute : ActivatedRoute,
    private authService : AuthService) { }


    AllEvents:Event[] = [];


    auth:any = localStorage.getItem("role");

    ngOnInit(): void {


  this.authService.Auth().subscribe(response=>{
    this.auth = response ;
    if(this.auth.role != 2 ){
      this.router.navigate(['/not-auth']);
    }else{
      this.eventService.getTeacher_events({"id" : this.auth.id }).subscribe(response=>{
        this.AllEvents=response ;
      })
    }
  });

  if(this.auth != 2){
    this.router.navigate(['/not-auth']);
  }
  }



}
