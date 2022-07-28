import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { classCats } from 'src/app/Models/classCats';
import { classes } from 'src/app/Models/classes';
import { ClassCatsService } from 'src/app/Services/class-cats.service';
import { ClassesService } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-add-cat-class',
  templateUrl: './add-cat-class.component.html',
  styleUrls: ['./add-cat-class.component.css']
})
export class AddCatClassComponent implements OnInit {

  class:classes[]=[];
  NewCatClass :classCats ={} as classCats ;
  AllClassCats:classCats[] = []
  constructor(private classService:ClassesService,private router:Router,private classcatsService:ClassCatsService ) { }

  ngOnInit(): void {
    // this.classcatsService.getAllClassCats().subscribe(response=>{
    //   this.AllClassCats=response ;
    // })

  }
  create(){
    this.classcatsService.create(this.NewCatClass).subscribe(response=> {
      console.log(response);
      if (response){
        this.router.navigate(['/classescat-index']);
      }
    })
  }

}
