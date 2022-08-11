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
    if(this.auth.role != 3 && this.auth.role != 2 ){
      this.router.navigate(['/not-auth']);
    }else{
      this.classService.GetTeachersClasses().subscribe(response=>{
        this.classListOfCat=response;
      })
    }
  });


  if(this.auth != 2 &&this.auth != 3){
    this.router.navigate(['/not-auth']);
  }
}

valid:any={
  id:"",
  valid:"",
  message:""
}  ;

Delete(id:number){
  if(this.auth.role == 3){
    this.router.navigate([`/classes-delete/${id}`]);
  }else{
    this.classService.checkdelete(id).subscribe(data =>{
      this.valid = data  ;
      if(this.valid.valid){
        this.router.navigate([`/classes-delete/${id}`]);
      }
    })
  }
}

}

