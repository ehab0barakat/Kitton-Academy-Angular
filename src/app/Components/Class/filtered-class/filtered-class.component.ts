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

  constructor( private classService:ClassesService,
    public router: Router,
    private classcatsService:ClassCatsService ) { }

    @Input() selected:number = 0 ;
    AllClasses:classes[] = [];
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log(this.selected)

    if(this.selected!= 0 ){

      this.classcatsService.getClassByCatID(this.selected).subscribe(response=>{
        this.AllClasses = response
        console.log(this.AllClasses)
      })
    }else{
      this.classService.getAll().subscribe(response=>{
      this.AllClasses = response
      console.log(this.AllClasses)
    })

    }

};

}
