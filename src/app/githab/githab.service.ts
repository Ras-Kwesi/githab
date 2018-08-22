import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class GithabService {
  githabService : User;

  constructor(private http:HttpClient) {
    this.githabService = new User ("","","","","","");
   }

   userReturn() {
    interface ApiResponse{
      avatar_url: string,
      login: string,
      url: string,
      name: string,
      following_url: string,
      followers_url: string,
    }
    const promise = new Promise((resolve)=>
    this.http.get<ApiResponse>("https://api.github.com/users/ras-kwesi?access_token=2e20d9f699505a0f0d26c8591ff727e051f85c03").toPromise().then(response=>{
      this.githabService.avatar_url = response.avatar_url;
      this.githabService.login =response.login;
      this.githabService.url =response.url;
      this.githabService.name = response.name;
      this.githabService.following_url = response.following_url;
      this.githabService.followers_url = response.followers_url;
      console.log(response);
      resolve();
    })
  );
    return promise
  }

}