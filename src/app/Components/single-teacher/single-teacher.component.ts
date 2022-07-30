import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ITeacherDetails } from 'src/app/Models/ITeacherDetails';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-single-teacher',
  templateUrl: './single-teacher.component.html',
  styleUrls: ['./single-teacher.component.css'],
})
export class SingleTeacherComponent implements OnInit,OnDestroy {
   teacherId: number | undefined;
   teacherDetails!: ITeacherDetails;
   singleTeacherSubsciption:Subscription = new Subscription();
  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService
  ) {}
 


  ngOnInit(): void {
    this.teacherId = this.route.snapshot.params['id'];     
    if (this.teacherId) {
      this.getTeacherDetials(this.teacherId);
    }

  }

  ngOnDestroy(): void {
    this.singleTeacherSubsciption.unsubscribe();
  }

  getTeacherDetials(teacherId:number): void {
    this.singleTeacherSubsciption = this.teacherService.getTeacherDetails(teacherId). subscribe ({
      next: data => this.teacherDetails = data
      });
  }

}
