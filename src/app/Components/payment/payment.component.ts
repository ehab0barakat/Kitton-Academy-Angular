import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { MyclassesService } from 'src/app/Services/myclasses.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
name:any;
  cardID:any;
  expirDate:any;
  securityCode:any;
  data: any;

  constructor(private router:Router,
    private activatedRoute : ActivatedRoute,
    private myClass : MyclassesService ,
    private auth: AuthService) { }

  classId = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
  ngOnInit(): void {

    this.auth.Auth().subscribe(response=>{
      this.data = response
     });
//     if (location.href.indexOf('reload')==-1)
// {
//    location.href=location.href+'?reload';
// }


  }

  keyFunc(x:any,type:string) { // appending the updated value to the variable
   if(type=='name'){
    this.name = x.target.value;
    console.log(this.name)
   }else if(type=='card'){
    this.cardID = x.target.value;
    console.log(this.cardID)
   }else if(type=='expire'){
    this.expirDate = x.target.value;
    console.log(this.expirDate)
   }else{
    this.securityCode = x.target.value;
    console.log(this.securityCode)
   }
  }


  pay(){

    if(this.name==undefined  || this.expirDate==undefined || this.securityCode==undefined){
   console.log("PLEASE ADD ALL DATA",localStorage.getItem('cardnumber'));

    }else if(this.cardID==undefined){
      console.log("PLEASE card",localStorage.getItem('cardnumber'));
      this.cardID=localStorage.getItem('cardnumber');
      console.log('ALL DATA From CARD STRORAGE',`${this.name}  ${this.cardID}  ${this.expirDate}  ${this.securityCode}`);
      alert("SUCCEED")
    }

    else{
      console.log('ALL DATA',`${this.name}  ${this.cardID}  ${this.expirDate}  ${this.securityCode}`);
      alert("SUCCEED")

      this.myClass.storemyclasses({"class_id": this.classId}).subscribe(data => {
        // console.log(data) ;
        this.router.navigate([`/myclasses/${this.data.id}`]);
      });

    }
  }

}

