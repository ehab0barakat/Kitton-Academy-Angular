import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/Services/events.service';
import { Event } from 'src/app/Models/event'
import { Eventcats } from 'src/app/Models/eventcats'
import { EventCatsService } from 'src/app/Services/event-cats.service';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  constructor( private router:Router,
               private eventService:EventsService,
               private eventcatsService:EventCatsService,
               private activatedRoute : ActivatedRoute,
               private authService : AuthService) {

}


  AllEventCats:Eventcats[] = []

  NewEvent :Event ={} as Event ;

  auth:any = localStorage.getItem("role");


  ngOnInit(): void {
    this.eventcatsService.getAlleventCats().subscribe(response=>{
      this.AllEventCats=response ;
    })


    this.authService.Auth().subscribe(response=>{
      this.auth = response ;
      if(this.auth.role != 2 ){
          this.router.navigate(['/not-auth']);
        }
      });
        if(this.auth != 2){
          this.router.navigate(['/not-auth']);
        }
        
  }



  AddEvent(){
    this.NewEvent.teacher_id = this.auth.id
    this.eventService.addEvent(this.NewEvent).subscribe(data => {
      if (data){
        this.router.navigate(['/event-index']);
      }
    })
  }
}
