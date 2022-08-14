import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ITeacher } from 'src/app/Models/ITeacher';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  teachers: ITeacher[]| undefined;
  teacherSubscription:Subscription = new Subscription();

  constructor(private teacherSrevice: TeacherService ,
    private router:Router) { }

  ngOnInit(): void {
    this.getAllTeacher();
  }

  draw(data: ITeacher[]): void {
    this.teachers = data;
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
