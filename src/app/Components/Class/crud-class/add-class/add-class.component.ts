import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { classCats } from 'src/app/Models/classcats';
import { classes } from 'src/app/Models/classes';
import { AuthService } from 'src/app/Services/auth.service';
import { ClassCatsService } from 'src/app/Services/class-cats.service';
import { ClassesService } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {
  class:classes[]=[];
  NewClass :classes ={} as classes ;
  AllClassCats:classCats[] = []
  constructor(private classService:ClassesService,private router:Router,private classcatsService:ClassCatsService ,private authService : AuthService) { }

  auth:any = localStorage.getItem("role");
  ngOnInit(): void {

    this.classcatsService.getAllClassCats().subscribe(response=>{
      this.AllClassCats=response ;
    })
    this.authService.Auth().subscribe(response=>{
      this.auth = response ;
      if(this.auth.role != 3 ){
          this.router.navigate(['/not-auth']);
        }
      });
        if(this.auth != 3){
          this.router.navigate(['/not-auth']);
        }

  }

  create(){
    this.classService.create(this.NewClass).subscribe(response=> {
      console.log(response);
      if (response){
        this.router.navigate(['/classes-index']);
      }
    })
  }
}
