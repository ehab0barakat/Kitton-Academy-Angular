import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { classes } from 'src/app/Models/classes';
import { ClassCatsService } from 'src/app/Services/class-cats.service';
import { ClassesService } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-details-class',
  templateUrl: './details-class.component.html',
  styleUrls: ['./details-class.component.css']
})
export class DetailsClassComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute,public router: Router ,
    private classService:ClassesService,) { }


    selected= Number(this.activatedRoute.snapshot.paramMap.get("id")) ;

    AllClasses:any ;

    ngOnInit(): void {


        this.classService.getById(this.selected).subscribe(response=>{
          this.AllClasses = response
          console.log(this.AllClasses)
        })

      }

  };

