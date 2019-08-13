import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

// 3. Create a JSON header to be attached to outbound post requests
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // 4. Set the domain portion of the url
  private url:string 

  constructor(private http: HttpClient) {
    let l = window.location;
    let host:string;
    
    if(l.port == '8100'){
      host = 'localhost:3000';
    }else{
      host = l.hostname + ((l.port.length>0)?':' + l.port:'');
    }
   // console.log('    - host in UserService');
   // console.log(host);
    this.url = `${l.protocol}//${host}/api/auth/`;
   // console.log('    - this.url in UserService');
   // console.log(this.url);
   // console.log('');
  }
  
  
  logIn(user: User): Observable<User>{
    return this.http.post<User>(this.url + 'login', user, httpOptions);
  }
}