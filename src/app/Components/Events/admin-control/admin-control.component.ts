import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { EventCatsService } from 'src/app/Services/event-cats.service';
import { EventsService } from 'src/app/Services/events.service';

@Component({
  selector: 'app-admin-control',
  templateUrl: './admin-control.component.html',
  styleUrls: ['./admin-control.component.css']
})
export class AdminControlComponent implements OnInit {

  constructor( private router:Router,
    private eventService:EventsService,
    private eventcatsService:EventCatsService,
    private activatedRoute : ActivatedRoute,
    private authService : AuthService) { }


  AllEvents:any ;
  auth:any = localStorage.getItem("role");


  ngOnInit(): void {

    this.authService.Auth().subscribe(response=>{
      this.auth = response ;
      if(this.auth.role != 3 ){
          this.router.navigate(['/not-auth']);
        }else{

          this.eventService.getAllevents().subscribe(res =>{
            this.AllEvents = res;
          });

        }
      });
        if(this.auth != 3 ){
          this.router.navigate(['/not-auth']);
        }
  }







  toggle(id:any ,isActive:any , teacher_id:any){
    isActive == 0 ? isActive = 1 : isActive = 0 ;
    this.eventService.ActivationeditEvent({"isActive":isActive},id).subscribe(data =>{
      this.router.navigate(["admin/event-control"])
    });

    this.eventService.teacherNotify({"event_id" : id  , "teacher_id" : teacher_id}).subscribe(data =>{
      this.router.navigate(["admin/event-control"])
    });




    this.all()
  }


  delete(id:any){
    this.eventService.deleteEvent(id).subscribe(data =>{
      this.router.navigate(["/admin/event-control"])
      this.all()
    });

  }




  all(){
    this.eventService.getAllevents().subscribe(res =>{
      this.AllEvents = res;
    });
  }


  nonactive(){
    this.eventService.getAllNONActiveEvents().subscribe(res =>{
      this.AllEvents = res;
    });
  }



  teacherEmail:any;
  message:string = "";
  search(email:any){
    console.log(email)
    this.eventService.searchForTeacherByName({"email":email}).subscribe(res =>{
      console.log(res)
      this.message = res.message ;
      this.AllEvents = res ;
    });

  }


  }


