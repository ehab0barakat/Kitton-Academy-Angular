import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/Services/events.service';
import { Event } from 'src/app/Models/event'
import { Eventcats } from 'src/app/Models/eventcats'
import { EventCatsService } from 'src/app/Services/event-cats.service';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {

  constructor( private router:Router,
    private eventService:EventsService,
    private eventcatsService:EventCatsService,
    private activatedRoute : ActivatedRoute) {
  }


  editEvent : Event = {} as Event ;
  targetId = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
  AllEventCats:Eventcats[] = [] ;


  ngOnInit(): void {

    this.eventcatsService.getAlleventCats().subscribe(response=>{
      this.AllEventCats=response ;
    })


    this.eventService.geteventByID(this.targetId).subscribe(response=>{
      this.editEvent = response ;

      }
    )

  }



  EditEvent(){
    this.eventService.editEvent(this.editEvent , this.targetId ).subscribe(response =>{
        if(response){
          this.router.navigate(['/event-index']);
        }
      }
    )
  }



  

}
