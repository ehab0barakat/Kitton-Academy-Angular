import { Component, OnInit } from '@angular/core';
import { classCats } from 'src/app/Models/classcats';
import { ClassCatsService } from 'src/app/Services/class-cats.service';

@Component({
  selector: 'app-crud-cat-class',
  templateUrl: './crud-cat-class.component.html',
  styleUrls: ['./crud-cat-class.component.css']
})
export class CrudCatClassComponent implements OnInit {
  classListOfCat:classCats[]=[];
  currentPrdID:number =0;
    constructor(private classCatService:ClassCatsService) { }

    ngOnInit(): void {
      this.classCatService. getAllClassCats().subscribe(response=>{
        this.classListOfCat=response;
        console.log(this.classListOfCat);
      });

    }

}
