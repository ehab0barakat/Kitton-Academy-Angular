import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { count } from 'rxjs';
import { classComment } from 'src/app/Models/classcomment';
import { classes } from 'src/app/Models/classes';
import { AuthService } from 'src/app/Services/auth.service';
import { ClassCatsService } from 'src/app/Services/class-cats.service';
import { ClassContentService } from 'src/app/Services/class-content.service';
import { ClassesService } from 'src/app/Services/classes.service';
import { MyclassesService } from 'src/app/Services/myclasses.service';

@Component({
  selector: 'app-details-class',
  templateUrl: './details-class.component.html',
  styleUrls: ['./details-class.component.css']
})
export class DetailsClassComponent implements OnInit {
  numberOfComments: number =2;
  data: any;

  constructor(private authService:AuthService,private activatedRoute : ActivatedRoute,public router: Router ,
    private classService:ClassesService,
    private MyclassesService:MyclassesService,
    private ClassContent: ClassContentService,
    private ClassService : ClassesService,
    private myClassServices : MyclassesService,
) { }

    currentRate:number =2;
    selected= Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
 totalRate:number=0;
    AllClasses:any ;
    auth:any = localStorage.getItem("role");
    valid:any
    AllEvents:any
    firstEvents:any;
    allcomments:classComment[]=[];
    ngOnInit(): void {

    if(this.auth == 3){
      this.router.navigate([`/admin/classes/${this.selected}`])
    }

    this.myClassServices.user_own_class_check(this.selected).subscribe(response=>{
      this.valid = response ;
      console.log(response) ;
      if(this.valid.valid == false ){this.router.navigate(['/not-auth'])}


    });

    this.ClassContent.GetAllVideosForThisClass(this.selected).subscribe(response=>{
      this.AllEvents=response ;
      this.firstEvents =this.AllEvents[0]
    })

        this.classService.getById(this.selected).subscribe(response=>{
          this.AllClasses = response
          // console.log(this.AllClasses)
        })

        this.MyclassesService.totalRate(this.selected).subscribe(response=>{
          console.log(response);
       this.totalRate=response;
        })
        this.MyclassesService.getComments().subscribe(response=>{
          this.allcomments=response;
          console.log(this.allcomments);
        })
          this.authService.Auth().subscribe(response=>{
            this.data=response;
            console.log(this.data);

        })
        this.MyclassesService.getCountComments(this.selected).subscribe(response=>{
          this.numberOfComments=response
           //  console.log(this.numberOfLikes);
         });

      }
getCountComments(){

}
      }







