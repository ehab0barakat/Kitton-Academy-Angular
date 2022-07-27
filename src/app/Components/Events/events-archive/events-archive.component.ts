import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Eventcats } from 'src/app/Models/eventcats';
import { EventCatsService } from 'src/app/Services/event-cats.service';
import { EventsService } from 'src/app/Services/events.service';
import { Event} from "../../../Models/event"

@Component({
  selector: 'app-events-archive',
  templateUrl: './events-archive.component.html',
  styleUrls: ['./events-archive.component.css'],
})
export class EventsArchiveComponent implements OnInit , OnChanges  {

  constructor( private router:Router,
    private eventService:EventsService,
    private eventCatsService:EventCatsService) {
  }

  AllEvents:Event[] = [];

  AllEventCats:Eventcats[] = [];

  selectedCat:number = 0 ;

  ngOnInit(): void {

    this.eventService.getAllevents().subscribe(response=>{
      this.AllEvents=response ;
      console.log(this.AllEvents);
    })

    this.eventCatsService.getAlleventCats().subscribe(response=>{
      this.AllEventCats = response ;
    });
  }

  GetTaretCatId(id:number){
  this.selectedCat = id
  }

  ngOnChanges(changes: SimpleChanges): void {
  }



}
