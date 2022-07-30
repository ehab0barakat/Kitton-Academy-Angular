import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Eventcats} from "../../../Models/eventcats";
import { EventCatsService } from 'src/app/Services/event-cats.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-event-cats-index',
  templateUrl: './event-cats-index.component.html',
  styleUrls: ['./event-cats-index.component.css']
})

export class EventCatsIndexComponent implements OnInit {


  constructor(public router: Router ,
              private eventcatsService:EventCatsService ,
              private authService: AuthService) {
};



  @Input() selectedCat:number = 0 ;


  AllEvents:Eventcats[] = [];

      NewEvent :Eventcats ={} as Eventcats ;
      auth:any = localStorage.getItem("role");

  ngOnInit(): void {


      this.authService.Auth().subscribe(response=>{
        this.auth = response ;
        if(this.auth.role != 3 ){
            this.router.navigate(['/not-auth']);
          }else{
            this.eventcatsService.getAlleventCats().subscribe(response=>{
              this.AllEvents = response
              console.log(this.AllEvents)
            })
          }
        });
          if(this.auth != 3 ){
            this.router.navigate(['/not-auth']);
          }




    }

};










