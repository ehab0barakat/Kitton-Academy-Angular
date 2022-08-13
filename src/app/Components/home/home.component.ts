import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { classes } from 'src/app/Models/classes';
import { ITeacher } from 'src/app/Models/ITeacher';
import { Posts } from 'src/app/Models/posts';
import { ClassCatsService } from 'src/app/Services/class-cats.service';
import { ClassesService } from 'src/app/Services/classes.service';
import { TeacherService } from 'src/app/Services/teacher.service';
import { ApiPostsService } from '../Services/api-posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teachers: any;
  teacherSubscription:Subscription = new Subscription();
  TargetResponse: any;
  AllTeachersData: any;


  constructor(private classService:ClassesService,
    public router: Router,
    private classcatsService:ClassCatsService ,
    private teacherSrevice: TeacherService,
    private postApiService:ApiPostsService ) { }


  AllClasses:classes[] = [];
  posts:Posts[]=[];


  ngOnInit(): void {

   this.getAllTeacher();

   this.postApiService.getAllPosts().subscribe(response=>{
    this.posts=response.slice(0,3);
  });

    this.classService.getAll().subscribe(response=>{
      this.TargetResponse = response;
      this.AllClasses = this.TargetResponse.classes.slice(0 , 3);
      this.AllTeachersData = this.TargetResponse.teachers.slice(0 , 3);
    })

  }

  draw(data:any): void {
    this.teachers = data.slice(0 , 4);
    console.log(data);


  }
  error(err: any): void {
    console.log(err);

  }

    getAllTeacher():void {
      this.teacherSubscription = this.teacherSrevice.getAllTeacher().subscribe({
        next: data => this.draw(data),
        error: err =>  this.error(err)
      })
    }

    ngOnDestroy(): void {
      this.teacherSubscription.unsubscribe();
    }

    viewTeacherDetails(teacherId:number):void{
      this.router.navigate(['/single-teacher/'+ teacherId]);
    }



}
