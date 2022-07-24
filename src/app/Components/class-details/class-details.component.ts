import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ClassesService } from 'src/app/Services/classes.service';
import { Location } from '@angular/common';
import { classes } from 'src/app/Models/classes';
@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {

  id:number =0;
  cla: classes | undefined;
  constructor( private router:Router,
    private classService:ClassesService,
    private activatedRoute: ActivatedRoute,
    private location:Location) { }


      
prod = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
   
  ngOnInit(): void {


    this.classService.getClassByID(this.prod).subscribe(response=>{
      this.cla = response ;
      console.log(this.cla);
  })


  }
}



