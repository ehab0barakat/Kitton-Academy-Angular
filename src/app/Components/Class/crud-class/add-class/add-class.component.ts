import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { classCats } from 'src/app/Models/classcats';
import { classes } from 'src/app/Models/classes';
import { ClassCatsService } from 'src/app/Services/class-cats.service';
import { ClassesService } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {
  class:classes[]=[];
  NewClass :classes ={} as classes ;
  AllClassCats:classCats[] = []
  constructor(private classService:ClassesService,private router:Router,private classcatsService:ClassCatsService ) { }

  ngOnInit(): void {
    this.classcatsService.getAllClassCats().subscribe(response=>{
      this.AllClassCats=response ;
    })

  }
  create(){
    this.classService.create(this.NewClass).subscribe(response=> {
      console.log(response);
      if (response){
        this.router.navigate(['/classes-index']);
      }
    })
  }
}
