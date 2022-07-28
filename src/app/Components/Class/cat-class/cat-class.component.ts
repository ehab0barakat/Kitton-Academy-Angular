import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { classCats } from 'src/app/Models/classcats';
import { classes } from 'src/app/Models/classes';
import { ClassCatsService } from 'src/app/Services/class-cats.service';
import { ClassesService } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-cat-class',
  templateUrl: './cat-class.component.html',
  styleUrls: ['./cat-class.component.css']
})
export class CatClassComponent implements OnInit, OnChanges  {


  constructor(
    private classService:ClassesService,
    private classcatsService:ClassCatsService) { }
    allClasses:classes[]=[];
    AllClassCats:classCats[] = [];
    selected:number = 0 ;
  ngOnInit(): void {
    this.classService.getAll().subscribe(response=>{
      this. allClasses=response ;
      console.log(this.allClasses);
    })

    this.classcatsService.getAllClassCats().subscribe(response=>{
      this.AllClassCats= response ;
      console.log(this.AllClassCats);
    });
  }

  GetCatId(id:number){
    this.selected = id
    }


  ngOnChanges(changes: SimpleChanges): void {
  }

}
