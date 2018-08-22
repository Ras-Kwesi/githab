import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {GithabService} from '../githab/githab.service';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
  providers:[GithabService]
})
export class LandingpageComponent implements OnInit {
  githabService: User;
  constructor(public http:HttpClient, public _serviceme: GithabService) {

   }

  ngOnInit() {
    //this.githabService = this._serviceme();
  }

}
