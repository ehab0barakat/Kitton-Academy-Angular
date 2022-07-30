import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassCatsService } from 'src/app/Services/class-cats.service';

@Component({
  selector: 'app-delete-cat-class',
  templateUrl: './delete-cat-class.component.html',
  styleUrls: ['./delete-cat-class.component.css']
})
export class DeleteCatClassComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute,private router:Router,private classcatsService:ClassCatsService) { }
  targetId = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
  ngOnInit(): void {
    this.classcatsService.delete(this.targetId).subscribe(response =>{
      if(response){
        this.router.navigate(['/classescat-index']);
      }
    }
  )
  }

}
