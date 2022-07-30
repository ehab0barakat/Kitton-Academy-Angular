import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassesService } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-delete-class',
  templateUrl: './delete-class.component.html',
  styleUrls: ['./delete-class.component.css']
})
export class DeleteClassComponent implements OnInit {

  constructor( private activatedRoute : ActivatedRoute,
    private classService:ClassesService,
    private router:Router) { }
    targetId = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
  ngOnInit(): void {
    this.classService.delete(this.targetId).subscribe(response =>{
      if(response){
        this.router.navigate(['/classes-index']);
      }
    }
  )
  }

}
