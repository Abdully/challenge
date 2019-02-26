import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }



registerUser(userinfor){
console.log('getuser register');
return this.http.post('http://localhost:8080/Angular_Test_2019-master/slim_api/public/register',userinfor);

}
viewUsers() {
  console.log('get all user request started!');
  return this.http.get('http://localhost:8080/Angular_Test_2019-master/slim_api/public/viewuser');
  
}

deleteUser(username) {
  console.log('getUser request started!');
  return this.http.delete('http://localhost:8080/Angular_Test_2019-master/slim_api/public/delete ' + username);
}
signIn(username, password){
  console.log('Sign In started!');
  console.log('username: ' + username + ", password: " + password);
  return this.http.get('http://localhost:8080/Angular_Test_2019-master/slim_api/public/signin?username=' + username + '&password=' + password);
}
}
