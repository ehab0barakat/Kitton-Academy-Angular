import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { classComment } from 'src/app/Models/classcomment';
import { AuthService } from 'src/app/Services/auth.service';
import { ClassesService } from 'src/app/Services/classes.service';
import { MyclassesService } from 'src/app/Services/myclasses.service';
@Component({
  selector: 'app-pay-class',
  templateUrl: './pay-class.component.html',
  styleUrls: ['./pay-class.component.css']
})
export class PayClassComponent implements OnInit {
  data: any;
  TargetResponse: any;
  allcomments:classComment[]=[];
  constructor(private authService:AuthService,private activatedRoute : ActivatedRoute,public router: Router ,
    private classService:ClassesService,
    private MyclassesService:MyclassesService
    ) { }

    auth:any = localStorage.getItem("role");
    selected= Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
    classComment:classComment={} as classComment;
    AllClasses:any ;

    ngOnInit(): void {
      this.authService.Auth().subscribe(response=>{
        this.data=response;
      })

        this.classService.getById(this.selected).subscribe(response=>{
          this.TargetResponse = response
          this.AllClasses = this.TargetResponse.classes
        })
         // get all comments of users
    this.MyclassesService.getComments().subscribe(response=>{
      this.allcomments=response;
    })

      }
      currentRate:number=0;
      onRateChange(event: number){
        this.MyclassesService.rateChange({'class_id':`${this.selected}`,'rate':`${event}`}).subscribe(response=>{
          // this.AllmyClasses =response;
          // console.log(this.selected);
          // console.log(`${event}`);
          // console.log(response);

      })
        // alert(`rate is ${event}`);
      }
      classSend_comment(classId:any,userId:any){
        this.classComment.class_id=classId;

        this.classComment.user_id=userId;
         this.MyclassesService.classSendComments(this.classComment).subscribe(response=>{
          this.router.navigate([`/classes/${this.AllClasses?.id}`]);


          if (response){
            this.classComment.comment=" ";
            this.classComment.user_name=" ";
            this.MyclassesService.getComments().subscribe(response=>{
              this.allcomments=response;
              // console.log(this.allcomments[0].class_id);
          })
         }})
      }}

