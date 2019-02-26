import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../shaired/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 username="";
 password="";

  constructor(private ServiceService: ServiceService,private router:Router) { }

  ngOnInit() {
  }

  onClickSignIn(){
    this.ServiceService.signIn(this.username, this.password).subscribe(Response =>{
        console.log(Response);
        if(Response['state']===true){
          this.router.navigate(['/home'])
        }else{
          
        }
      })
  }

  onClick(){
    this.ServiceService.viewUsers().subscribe(response => {
      console.log(response);
    })
  }
}
