import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { ClassContentService } from 'src/app/Services/class-content.service';
import { ClassesService } from 'src/app/Services/classes.service';
import { MyclassesService } from 'src/app/Services/myclasses.service';

@Component({
  selector: 'app-content-single',
  templateUrl: './content-single.component.html',
  styleUrls: ['./content-single.component.css']
})
export class ContentSingleComponent implements OnInit {

  constructor( private router:Router,
    private activatedRoute : ActivatedRoute,
    private authService : AuthService,
    private ClassContent: ClassContentService,
    private ClassService : ClassesService,
    private myClassServices : MyclassesService,

  ) { }


  AllEvents:any ;
  VideoId = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
  Class:any
  auth:any = localStorage.getItem("role");
  TargetVideo:any
  valid:any;
  SeenForAll:any = []
  HowManyViews:any = 0
  canRate:any = false ;

  ngOnInit(): void {

    this.myClassServices.user_own_video_check(this.VideoId).subscribe(response=>{
      this.valid = response ;
      if(this.valid.valid == false || this.valid.own == false ){
        this.router.navigate(['/not-auth'])
      }else{
        this.ClassContent.GetAllVideosForThisClassByVideoId(this.VideoId).subscribe(response=>{
          this.AllEvents=response ;
          this.ClassContent.CheckUserVideos(this.VideoId).subscribe(response=>{
            this.AllEvents.map((el:any) => {
              response.map((nt: any) => {
                if( el.id == nt.video_id){
                   nt.seen > 0 ? this.SeenForAll.push(true): this.SeenForAll.push(false) ;
                }else if (this.AllEvents.length == this.SeenForAll.length ){
                  this.canRate = true;
                }
              });
            });
            response.forEach((el:any) => {
              this.HowManyViews += el.seen ;
            });
          })
        })
        
        this.ClassContent.GetVideoById(this.VideoId).subscribe(response=>{
          this.TargetVideo=response ;
        })
      }
    });
  }


  change(id:number){
     this.ClassContent.GetVideoById(id).subscribe(response=>{
      this.TargetVideo=response ;
    })
  }




  watch(){
    this.VideoId = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
    this.ClassContent.AddView({},this.VideoId).subscribe(response=>{
    })
  }



}