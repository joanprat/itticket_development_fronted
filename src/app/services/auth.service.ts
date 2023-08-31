import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  $currentUser: BehaviorSubject<User|null> = new BehaviorSubject<User|null>(null);
  constructor(private http: HttpClient) { }

  public login(body): Observable<object>{
    return this.http.post(`${environment.backend}/Auth/Login`, body);
  }

  public userIsAuthenticated(){
    return this.$currentUser.value ? true : false;
  }
}
