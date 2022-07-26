import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/Services/events.service';
import { Event} from "../../../Models/event"

@Component({
  selector: 'app-events-single',
  templateUrl: './events-single.component.html',
  styleUrls: ['./events-single.component.css']
})
export class EventsSingleComponent implements OnInit {

  constructor( private router:Router,
    private eventService:EventsService,
    private activatedRoute : ActivatedRoute) { }


  SingleEvents : Event = {
    id: 0,
    title: '',
    description: '',
    image: '',
    date: '',
    location: '',
    time: '',
    eventCat_id: 0,
    teacher_id: 0,
    isActive: 0
  } ;


  prod = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;


  ngOnInit(): void {

    this.eventService.geteventByID(this.prod).subscribe(response=>{
      this.SingleEvents = response ;
      console.log(this.SingleEvents)
  })

  }
}
