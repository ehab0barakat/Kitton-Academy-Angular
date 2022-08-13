import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { classes } from 'src/app/Models/classes';
import { myClasses } from 'src/app/Models/myclasses';
import { ClassesService } from 'src/app/Services/classes.service';
import { MyclassesService } from 'src/app/Services/myclasses.service';

@Component({
  selector: 'app-myclasses',
  templateUrl: './myclasses.component.html',
  styleUrls: ['./myclasses.component.css']
})
export class MyclassesComponent implements OnInit {
  TargetRespone: any;
  AllTeachersData: any;

  constructor(private myclassService:MyclassesService,private router: Router,private activatedRoute : ActivatedRoute,
    private classService:ClassesService) { }
    auth:any = localStorage.getItem("role");
  ID= Number(this.activatedRoute.snapshot.paramMap.get("id")) ;

  myClass:classes[] = [];
  ngOnInit(): void {



      this.classService.getMyClasses(this.ID ).subscribe(response=>{
        this.TargetRespone = response
        this.myClass = this.TargetRespone.classes
        this.AllTeachersData = this.TargetRespone.teachers
      })
};

}
// addtoMyclasses(event:any){
// console.log(event);
// }



