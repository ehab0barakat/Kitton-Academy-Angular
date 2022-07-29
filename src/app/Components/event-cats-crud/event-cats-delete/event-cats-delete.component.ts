import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventCatsService } from 'src/app/Services/event-cats.service';
import { EventsService } from 'src/app/Services/events.service';

@Component({
  selector: 'app-event-cats-delete',
  templateUrl: './event-cats-delete.component.html',
  styleUrls: ['./event-cats-delete.component.css']
})

export class EventCatsDeleteComponent implements OnInit {

  constructor( private router:Router,
    private eventService:EventsService,
    private eventcatsService:EventCatsService,
    private activatedRoute : ActivatedRoute) {

  }

  targetId = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
  ngOnInit(): void {
    this.eventcatsService.deleteEventCat(this.targetId).subscribe(response =>{
      if(response){
        this.router.navigate(['/eventcats-index']);
      }
    }
  )
}

}
