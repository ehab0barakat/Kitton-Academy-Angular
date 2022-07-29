import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { EventCatsService } from 'src/app/Services/event-cats.service';
import { EventsService } from 'src/app/Services/events.service';

@Component({
  selector: 'app-event-delete',
  templateUrl: './event-delete.component.html',
  styleUrls: ['./event-delete.component.css']
})
export class EventDeleteComponent implements OnInit {

  constructor( private router:Router,
    private eventService:EventsService,
    private eventcatsService:EventCatsService,
    private activatedRoute : ActivatedRoute,
    private authService : AuthService) {

  }


  targetId = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;



  auth:any = localStorage.getItem("role");

  ngOnInit(): void {


this.authService.Auth().subscribe(response=>{
  this.auth = response ;
  if(this.auth.role != 2 ){
    this.router.navigate(['/not-auth']);
  }else{
    this.eventService.deleteEvent(this.targetId).subscribe(response =>{
      if(response){
        this.router.navigate(['/event-index']);
      }
    }
  )

  }
});

if(this.auth != 2){
  this.router.navigate(['/not-auth']);
}
}









}
