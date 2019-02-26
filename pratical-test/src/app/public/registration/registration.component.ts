import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../shaired/service.service';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
      private username= "";
      private firstname = "";
      private lastname = "";
      private password = "";
  constructor(private service : ServiceService, private router : Router) { }

  ngOnInit() {
  }
  
  onClickRegister(){
    let userinfor= {
      "username": this.username,
      "firstname": this.firstname,
      "lastname": this.lastname,
      "password": this.password
    }
    this.service.registerUser(userinfor).subscribe(Response =>
      {
        if(Response['state']===true)
        {
          this.router.navigate(['/login'])
        }
        
      })
  }

}
