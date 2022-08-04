import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ClassContentService } from 'src/app/Services/class-content.service';

@Component({
  selector: 'app-content-delete',
  templateUrl: './content-delete.component.html',
  styleUrls: ['./content-delete.component.css']
})
export class ContentDeleteComponent implements OnInit {
  valid: any;

  constructor(private location:Location,
              private ClassContent: ClassContentService,
              private activatedRoute : ActivatedRoute,
              private router : Router
    ) { }


    VideotId = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;



  ngOnInit(): void {

    this.ClassContent.ValidationForClass(this.VideotId).subscribe(response=>{
      this.valid = response
      if(!this.valid.valid){
        this.router.navigate(['/not-auth']);
      }
    });
    this.ClassContent.deleteVideofromClass(this.VideotId).subscribe(data => {
    }) ;
    this.location.back()



  }

}
