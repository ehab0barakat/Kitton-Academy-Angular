import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITeacherDetails } from 'src/app/Models/ITeacherDetails';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-single-teacher',
  templateUrl: './single-teacher.component.html',
  styleUrls: ['./single-teacher.component.css'],
})
export class SingleTeacherComponent implements OnInit {
   teacherId: number | undefined;
   teacherDetails: ITeacherDetails | undefined;
  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.teacherId = params['id'];
      if (this.teacherId) {
        this.teacherDetails = this.teacherService.getTeacherDetails(this.teacherId);
        debugger
      }
    });
  }
}
