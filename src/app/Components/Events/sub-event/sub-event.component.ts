import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Event} from "../../../Models/event"
import { EventsService } from 'src/app/Services/events.service';
import { EventCatsService } from 'src/app/Services/event-cats.service';


@Component({
  selector: 'app-sub-event',
  templateUrl: './sub-event.component.html',
  styleUrls: ['./sub-event.component.css']
})


export class SubEventComponent implements OnInit , OnChanges{


  constructor(public router: Router ,
              private eventService:EventsService,
              private eventcatsService:EventCatsService ) {
};



  @Input() selectedCat:number = 0 ;


  AllEvents:Event[] = [];

  ngOnInit(): void {

  }


  ngOnChanges(changes: SimpleChanges): void {

    console.log(this.selectedCat)

    if(this.selectedCat != 0 ){

      this.eventcatsService.geteventByCatID(this.selectedCat).subscribe(response=>{
        this.AllEvents = response
        console.log(this.AllEvents)
      })
    }else{
      this.eventService.getAllActiveEvents().subscribe(response=>{
      this.AllEvents = response
    })

    }

};



}







