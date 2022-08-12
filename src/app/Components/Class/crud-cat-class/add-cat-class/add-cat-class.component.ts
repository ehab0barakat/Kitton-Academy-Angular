import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { classCats } from 'src/app/Models/classcats';
import { classes } from 'src/app/Models/classes';
import { AuthService } from 'src/app/Services/auth.service';
import { ClassCatsService } from 'src/app/Services/class-cats.service';
import { ClassesService } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-add-cat-class',
  templateUrl: './add-cat-class.component.html',
  styleUrls: ['./add-cat-class.component.css']
})
export class AddCatClassComponent implements OnInit {
  auth:any = localStorage.getItem("role");
  class:classes[]=[];
  NewCatClass :classCats ={} as classCats ;
  AllClassCats:classCats[] = []
  constructor(private classService:ClassesService,private router:Router,private classcatsService:ClassCatsService,private authService : AuthService ) { }

  ngOnInit(): void {

    this.authService.Auth().subscribe(response=>{
      this.auth = response ;
      console.log(response)
      if(this.auth.role != 3 ){
          this.router.navigate(['/not-auth']);
        }
      });
        if(this.auth != 3){
          this.router.navigate(['/not-auth']);
        }

  }
  create(){
    this.classcatsService.create(this.NewCatClass).subscribe(response=> {
      console.log(response);
      if (response){
        this.router.navigate(['/admin/classescat-index']);
      }
    })
  }

}
