import { Component, OnInit } from '@angular/core';
import { classes } from 'src/app/Models/classes';
import { ClassesService } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-crud-class',
  templateUrl: './crud-class.component.html',
  styleUrls: ['./crud-class.component.css']
})
export class CrudClassComponent implements OnInit {
  classListOfCat:classes[]=[];
currentPrdID:number =0;
  constructor(private classService:ClassesService) { }

  ngOnInit(): void {
    this.classService.getAll().subscribe(response=>{
      this.classListOfCat=response;
      console.log(this.classListOfCat);
    });

  }

}
