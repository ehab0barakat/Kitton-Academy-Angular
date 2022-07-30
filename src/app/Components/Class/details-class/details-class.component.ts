import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { classes } from 'src/app/Models/classes';
import { ClassCatsService } from 'src/app/Services/class-cats.service';
import { ClassesService } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-details-class',
  templateUrl: './details-class.component.html',
  styleUrls: ['./details-class.component.css']
})
export class DetailsClassComponent implements OnInit {

  constructor(public router: Router ,
    private classService:ClassesService,
    private classcatsService:ClassCatsService) { }

    @Input() data:any ={};
@Output() item=new EventEmitter();
    @Input() selected:number = 0 ;


    AllClasses:classes[] = [];

    ngOnInit(): void {




    // ngOnChanges(changes: SimpleChanges): void {



      if(this.selected != 0 ){

        this.classcatsService.getClassByCatID(this.selected).subscribe(response=>{
          this.AllClasses = response
          console.log(this.AllClasses)
        })
      }else{
        this. classService.getAll().subscribe(response=>{
        this.AllClasses = response
      })

      }

  }


}
