import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users-data/user-modal';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http:HttpClient) { }
  getUser():Observable<User[]>{
   return this.http.get<User[]>('http://localhost:3000/users');
  }
}
