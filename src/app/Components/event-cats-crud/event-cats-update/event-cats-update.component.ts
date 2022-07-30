import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/Services/events.service';
import { Event } from 'src/app/Models/event'
import { Eventcats } from 'src/app/Models/eventcats'
import { EventCatsService } from 'src/app/Services/event-cats.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-event-cats-update',
  templateUrl: './event-cats-update.component.html',
  styleUrls: ['./event-cats-update.component.css']
})

export class EventCatsUpdateComponent implements OnInit {

  constructor( private router:Router,
    private eventService:EventsService,
    private eventcatsService:EventCatsService,
    private activatedRoute : ActivatedRoute,
    private authService : AuthService) {
  }

  auth:any = localStorage.getItem("role");


  editEvent : Eventcats = {} as Eventcats ;
  targetId = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
  AllEventCats:Eventcats[] = [] ;


  ngOnInit(): void {

    this.authService.Auth().subscribe(response=>{
      this.auth = response ;
      if(this.auth.role != 3 ){
          this.router.navigate(['/not-auth']);
        }else{
          this.eventcatsService.geteventcatByID(this.targetId).subscribe(response=>{
            this.editEvent = response ;
            }
          )
        }
      });
      if(this.auth != 3 ){
        this.router.navigate(['/not-auth']);
      }




  }



  EditEvent(){
    this.eventcatsService.editEventCat(this.editEvent , this.targetId ).subscribe(response =>{
        if(response){
          this.router.navigate(['/eventcats-index']);
        }
      }
    )
  }





}

