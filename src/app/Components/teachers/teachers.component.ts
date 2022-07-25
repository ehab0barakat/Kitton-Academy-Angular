import { Component, OnInit } from '@angular/core';
import { ITeacher } from 'src/app/Models/ITeacher';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers: ITeacher[]| undefined;

  constructor(private teacherSrevice: TeacherService ) { }

  ngOnInit(): void {
    this.teacherSrevice.getAllTeacher().subscribe({
      next: data => this.draw(data),
      error: err =>  this.error(err)
    })
  }
  draw(data: ITeacher[]): void {
    this.teachers = data;
    console.log(data);
    
  }
  error(err: any): void {
    console.log(err);

  }
}
