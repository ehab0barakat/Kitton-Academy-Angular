import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { EventsService } from 'src/app/Services/events.service';
import { Event} from "../../../Models/event"
import { ApiPostsService } from '../../Services/api-posts.service';

@Component({
  selector: 'app-events-single',
  templateUrl: './events-single.component.html',
  styleUrls: ['./events-single.component.css']
})
export class EventsSingleComponent implements OnInit {

  constructor( private router:Router,
    private eventService:EventsService,
    private activatedRoute : ActivatedRoute,
    private authService : AuthService,
    private postApiService:ApiPostsService) { }


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

date:any
timeLeft:any;
days:any = "00";
hours:any = "00";
minutes:any = "00";
seconds:any = "00";
teacher:any ;
gonnaGo:any ;
alreadyEnroller:any = false ;
posts:any ;

  auth:any = localStorage.getItem("role");

  prod = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;


  ngOnInit(): void {
    if(this.auth == 3){
      this.router.navigate([`/admin/event/${this.prod}`])
    }


    this.postApiService.getAllPosts().subscribe(response=>{
      this.posts=response.slice(0,3);
    });


    this.eventService.usersCount(this.prod).subscribe(response=>{
      this.gonnaGo = response ;
    });


    this.eventService.geteventByIDforGuest(this.prod).subscribe(response=>{
      this.SingleEvents = response ;
      console.log(response)

      // if(response?.valid == false){this.router.navigate(['/not-auth'])}

      this.eventService.getTeacherName(this.SingleEvents.teacher_id).subscribe(response=>{
      console.log(response)
      this.teacher = response;
    })

    var x = setInterval(()=>{
      this.date = new Date(this.SingleEvents.date)
      this.timeLeft = this.date.getTime()  -   new Date().getTime()   ;
        if(this.timeLeft > 0 ){
          this.days = Math.floor(this.timeLeft  / (1000 * 60 * 60 * 24));
          this.hours = Math.floor((this.timeLeft  % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          this.minutes = Math.floor((this.timeLeft  % (1000 * 60 * 60)) / (1000 * 60));
          this.seconds = Math.floor((this.timeLeft  % (1000 * 60)) / 1000);
        }else{
          clearInterval(x)
        }
    }, 1000);
  })

  setTimeout(()=>{
    if(this.SingleEvents.id == 0){
      // this.router.navigate(['/not-auth']);
    }
  },1500)

}

message:string = ""

inroll(){

  this.authService.Auth().subscribe(response=>{
    this.auth = response ;
    if(this.auth.role != 1 ){
      this.message = 'U R NOT ALLOWED TO INROLL THIS EVENT'
    }else{

    this.eventService.search_inrollement({"user_id": this.auth.id , "event_id" : this.SingleEvents.id}).subscribe(response=>{
      if(response.length > 0 ){
        this.alreadyEnroller = true ;
        this.message = 'U R ALREADY ENROLLED TO THIS EVENT'

      }else{
        this.eventService.addEnrollEvent({"user_id": this.auth.id , "event_id" : this.SingleEvents.id}).subscribe(response=>{
          this.eventService.usersCount(this.prod).subscribe(response=>{
            this.gonnaGo = response ;
            this.message = 'U R ENROLLED ;) '

          });
        })
      }
    })

    }
  });

    if(this.auth == "" ){
      this.router.navigate(['/sign-up']);
    }


}


}
