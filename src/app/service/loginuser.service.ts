import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs'
import { User } from 'src/app/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private baseUrl = 'http://localhost:8080/user/login'; //Esto es la API
  currentUserSubject: BehaviorSubject<any>;
  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<object>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));
  }

  loginUser(user: User):Observable<object> {
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`, user).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }));
  }
}
