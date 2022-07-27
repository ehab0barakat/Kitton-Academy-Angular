import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/Services/events.service';
import { Event } from 'src/app/Models/event'
@Component({
  selector: 'app-crud-event',
  templateUrl: './crud-event.component.html',
  styleUrls: ['./crud-event.component.css']
})
export class CrudEventComponent implements OnInit {

  constructor( private router:Router,
    private eventService:EventsService,
    private activatedRoute : ActivatedRoute) { }


    AllEvents:Event[] = [];


    ngOnInit(): void {

      this.eventService.getAllevents().subscribe(response=>{
        this.AllEvents=response ;
        console.log(this.AllEvents);

      })
    }




}
