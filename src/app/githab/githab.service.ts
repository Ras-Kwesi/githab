import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class GithabService {
  githabService = User;

  constructor(private http:HttpClient) {
    this.githabService = new GithabService ("","","","");
   }
}
