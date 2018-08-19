import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import {GithabService} from '../githab/githab.service.spec';

@Injectable({
  providedIn: 'root'
})
export class GithabService {
  githabService = GithabService;

  constructor(private http:HttpClient) {
    //this.githabService = new GithabService ("","","","");
   }
}
