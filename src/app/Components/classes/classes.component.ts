import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ClassesService } from 'src/app/Services/classes.service';
import { classes } from 'src/app/Models/classes';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})

export class ClassesComponent implements OnInit {
  classListOfCat:classes[]=[];
currentPrdID:number =0;
  constructor( private router:Router,
    private classService:ClassesService) {

    }

  ngOnChanges(): void {
  this.classService.getById(this.currentPrdID).subscribe(response=>{
    console.log(response);
  });

  }

  ngOnInit(): void {
    this.classService.getAll().subscribe(response=>{
      this.classListOfCat=response;
      console.log(this.classListOfCat);
    });

}

}

