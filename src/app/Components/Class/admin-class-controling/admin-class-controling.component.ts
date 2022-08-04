import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { ClassesService } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-admin-class-controling',
  templateUrl: './admin-class-controling.component.html',
  styleUrls: ['./admin-class-controling.component.css']
})

export class AdminClassControlingComponent implements OnInit {

  constructor( private router:Router,
    private classService:ClassesService,
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

          this.classService.admingetall().subscribe(res =>{
            this.AllEvents = res;
            console.log(  this.AllEvents)
          });

        }
      });
        if(this.auth != 3 ){
          this.router.navigate(['/not-auth']);
        }
  }


  toggle(id:any ,isActive:any , teacher_id:any){
    isActive == 0 ? isActive = 1 : isActive = 0 ;

    this.classService.ActivationeditClass({"isActive":isActive},id).subscribe(data =>{
      this.router.navigate(["admin/classes-index"])
      console.log(data);
    });

    this.classService.teacherNotify({"class_id" : id  , "teacher_id" : teacher_id}).subscribe(data =>{
      this.router.navigate(["admin/classes-index"])
      console.log(data);
    });



    this.all()
  }


  delete(id:any){


  }

  all(){

  }


  nonactive(){

  }



  teacherEmail:any;
  message:string = "";

  search(email:any){
    console.log(email)
    // this.eventService.searchForTeacherByName({"email":email}).subscribe(res =>{
      // console.log(res)
      // this.message = res.message ;
      // this.AllEvents = res ;
    // });

  }


  }


