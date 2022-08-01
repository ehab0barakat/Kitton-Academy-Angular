import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/Services/events.service';
import { Event } from 'src/app/Models/event'
import { Eventcats } from 'src/app/Models/eventcats'
import { EventCatsService } from 'src/app/Services/event-cats.service';
import { AuthService } from 'src/app/Services/auth.service';
import { UploadService } from 'src/app/Services/upload.service';



@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css'],
  providers: [UploadService],
})
export class EventAddComponent implements OnInit {
  title = 'angular-cloudinary';

  constructor( private router:Router,
               private eventService:EventsService,
               private eventcatsService:EventCatsService,
               private activatedRoute : ActivatedRoute,
               private authService : AuthService,
               private _uploadService: UploadService) {

}


  AllEventCats:Eventcats[] = []

  NewEvent :Event ={
    id: 0,
    title: '',
    location: '',
    isActive: 0,
    date: '',
    time: '',
    image: '',
    description: '',
    teacher_id: 0,
    eventCat_id: 0
  } ;

  auth:any = localStorage.getItem("role");
  image:any

  ngOnInit(): void {
    this.eventcatsService.getAlleventCats().subscribe(response=>{
      this.AllEventCats=response ;
    })


    this.authService.Auth().subscribe(response=>{
      this.auth = response ;
      if(this.auth.role != 2){
          this.router.navigate(['/not-auth']);
        }
      });
        if(this.auth != 2){
          this.router.navigate(['/not-auth']);
        }

  }


  files: File[] = [];

  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.onUpload();
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onUpload() {
    //Scape empty array
    if (!this.files[0]) {
      alert('Please upload an image first.');
    }

    //Upload my image to cloudinary
    const file_data = this.files[0];
    const data = new FormData();
    data.append('file', file_data);
    data.append('upload_preset', 'ml_default');
    data.append('cloud_name', 'el-safwa');

    this._uploadService.uploadImage(data).subscribe((response) => {
      if (response) {
        this.image = response
        console.log(response.secure_url);
      }
    });
  }

  AddEvent(){

    this.NewEvent.image=this.image.secure_url
    
    this.NewEvent.teacher_id = this.auth.id

    this.eventService.addEvent(this.NewEvent).subscribe(data => {
      if (data){
        this.router.navigate(['/event-index']);
      }
    })
  }


}
