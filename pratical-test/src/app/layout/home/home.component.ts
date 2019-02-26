import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../shaired/service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alluser: Object;
  private usersObservable : Observable<any[]>;
  constructor(private ServiceService:ServiceService)  { }

  ngOnInit() {
    this.getUsersFromService();
  }
  private getUsersFromService(){
    this.ServiceService.viewUsers().subscribe(data => {
      console.log('getUser request completed!');
      
      this.alluser = data;
      console.log(this.alluser);
    })
  }

  onClickDeleteUser(username){
    console.log('User to delete: ' + username);
    this.ServiceService.deleteUser(username).subscribe(respose => {
      console.log(respose);

      this.alluser = [];
      this.getUsersFromService();
    })
    

  }
}
