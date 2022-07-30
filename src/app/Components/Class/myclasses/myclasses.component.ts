import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { classes } from 'src/app/Models/classes';
import { myClasses } from 'src/app/Models/myclasses';
import { MyclassesService } from 'src/app/Services/myclasses.service';

@Component({
  selector: 'app-myclasses',
  templateUrl: './myclasses.component.html',
  styleUrls: ['./myclasses.component.css']
})
export class MyclassesComponent implements OnInit {

  constructor(private myclassService:MyclassesService,private router: Router) { }


  myClass:classes[] = [];
  ngOnInit(): void {


      this.myclassService.getMyClasses().subscribe(response=>{
        this.myClass = response
        console.log(this.myClass)
      })
};
  }


