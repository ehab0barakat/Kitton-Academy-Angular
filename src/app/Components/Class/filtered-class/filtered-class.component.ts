import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { classes } from 'src/app/Models/classes';
import { ClassCatsService } from 'src/app/Services/class-cats.service';
import { ClassesService } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-filtered-class',
  templateUrl: './filtered-class.component.html',
  styleUrls: ['./filtered-class.component.css']
})
export class FilteredClassComponent implements OnInit, OnChanges {
  TargetRespone: any;
  AllTeachersData: any;

  constructor( private classService:ClassesService,
    public router: Router,
    private classcatsService:ClassCatsService ) { }

    @Input() selected:number = 0 ;
    AllClasses:classes[] = [];
  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {

    if(this.selected!= 0 ){

      this.classcatsService.getClassByCatID(this.selected).subscribe(response=>{
        // console.log(response)
        this.TargetRespone = response
        this.AllClasses = this.TargetRespone.classes
        this.AllTeachersData = this.TargetRespone.teachers
      })
    }else{
      this.classService.getAll().subscribe(response=>{
        this.TargetRespone = response
        this.AllClasses = this.TargetRespone.classes
        this.AllTeachersData = this.TargetRespone.teachers
    })

    }

};

}
