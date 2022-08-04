import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/Services/events.service';
import { Event } from 'src/app/Models/event'
import { Eventcats } from 'src/app/Models/eventcats'
import { EventCatsService } from 'src/app/Services/event-cats.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-event-cats-add',
  templateUrl: './event-cats-add.component.html',
  styleUrls: ['./event-cats-add.component.css']
})

export class EventCatsAddComponent implements OnInit {

  constructor( private router:Router,
    private eventService:EventsService,
    private eventcatsService:EventCatsService,
    private activatedRoute : ActivatedRoute,
    private authService : AuthService) {

}


  NewEvent :Eventcats ={} as Eventcats ;
  auth:any = localStorage.getItem("role");


  ngOnInit(): void {

    this.authService.Auth().subscribe(response=>{
      this.auth = response ;
      if(this.auth.role != 3 ){
          this.router.navigate(['/not-auth']);
        }
      });
        if(this.auth != 3 ){
          this.router.navigate(['/not-auth']);
        }
  }


  AddEvent(){

    this.eventcatsService.addEventCat(this.NewEvent).subscribe(data => {
      console.log(data);
      if (data){
        this.router.navigate(['/admin/eventcats-index']);
      }
    })

  }

}
