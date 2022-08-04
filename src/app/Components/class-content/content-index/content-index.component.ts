import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { ClassContentService } from 'src/app/Services/class-content.service';
import { ClassesService } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-content-index',
  templateUrl: './content-index.component.html',
  styleUrls: ['./content-index.component.css']
})

export class ContentIndexComponent implements OnInit {

  constructor( private router:Router,
    private activatedRoute : ActivatedRoute,
    private authService : AuthService,
    private ClassContent: ClassContentService,
    private ClassService : ClassesService) { }


    AllEvents:any ;
    classId = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
    Class:any
    auth:any = localStorage.getItem("role");

    valid:any;


    ngOnInit(): void {

    this.ClassService.getById(this.classId).subscribe(response=>{
      this.Class = response
    });

    this.ClassContent.ValidationForClass(this.classId).subscribe(response=>{
      this.valid = response
      if(this.valid.valid == false){
        this.router.navigate(['/not-auth']);
      }
    });

  this.authService.Auth().subscribe(response=>{
    this.auth = response ;
    if(this.auth.role != 2 && this.auth.role != 3){
      this.router.navigate(['/not-auth']);
    }else{
      this.ClassContent.GetAllVideosForThisClass(this.classId).subscribe(response=>{
        this.AllEvents=response ;
      })
    }
  });

  if(this.auth != 2 && this.auth != 3){
    this.router.navigate(['/not-auth']);
  }
  }



}
