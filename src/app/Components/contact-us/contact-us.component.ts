import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
 
  submitted = false;
  constructor( private http: HttpClient, private formBuilder: FormBuilder) { 
    

    //Mail User form validations
   
  }

  
  //Mail user form actions

onSubmit(username:any,usermail:any,usermessage:any) {
  
  this.submitted = true;

  //True if all the fields are filled
  if(this.submitted)
  {
    

  
    var myFormData = new FormData();
  
    
   
       myFormData.append('myUsername', username) 
       myFormData.append('myEmail', usermail);
       myFormData.append('textMessage', usermessage);
    
   
    
         
  return this.http.post(`${environment.APIBaseURL}/api/normaluser/sendemail`,myFormData).subscribe((res) => {
      
      
        //sweetalert message popup
        Swal.fire({
        title: 'Hurray!!',
        text:   "Mail has been send successfully.",
        icon: 'success'
      });
        
        
      
  });
  }
 
}
  ngOnInit(): void {
    
    
    }
  

}
