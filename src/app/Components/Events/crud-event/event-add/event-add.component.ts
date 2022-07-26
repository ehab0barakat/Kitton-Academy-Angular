import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/Services/events.service';
import { Event } from 'src/app/Models/event'
import { Eventcats } from 'src/app/Models/eventcats'
import { EventCatsService } from 'src/app/Services/event-cats.service';


@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  constructor( private router:Router,
    private eventService:EventsService,
    private eventcatsService:EventCatsService,
    private activatedRoute : ActivatedRoute) {

}



  AllEventCats:Eventcats[] = []


  NewEvent :Event ={} as Event ;



  ngOnInit(): void {
    this.eventcatsService.getAlleventCats().subscribe(response=>{
      this.AllEventCats=response ;
    })
  }



  AddEvent(){
    this.eventService.addEvent(this.NewEvent).subscribe(data => {
      if (data){
        this.router.navigate(['/event-index']);
      }
    })
  }
}
