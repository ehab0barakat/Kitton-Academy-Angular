import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { classes } from 'src/app/Models/classes';
import { AuthService } from 'src/app/Services/auth.service';
import { ClassesService } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-crud-class',
  templateUrl: './crud-class.component.html',
  styleUrls: ['./crud-class.component.css']
})
export class CrudClassComponent implements OnInit {
  classListOfCat:classes[]=[];
currentPrdID:number =0;
  constructor(private classService:ClassesService,
    private authService : AuthService,
    private router:Router) { }
    auth:any = localStorage.getItem("role");


  ngOnInit(): void {
    this.authService.Auth().subscribe(response=>{
      this.auth = response ;
      if(this.auth.role != 3 ){
        this.router.navigate(['/not-auth']);
      }else{
    this.classService.getAll().subscribe(response=>{
      this.classListOfCat=response;
      console.log(this.classListOfCat);
    })
  }
});

if(this.auth != 3){
  this.router.navigate(['/not-auth']);
}
}
}

