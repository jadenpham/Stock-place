import { Component, OnInit, ɵɵcontainerRefreshEnd } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  userLoggedIn = true;
  isLoggedIn:boolean;
  constructor(private _httpService: HttpService,private _route:Router) {}
  ngOnInit() {
    this.isUserLoggedIn();
  }
  ngDoCheck(){
    if(this._httpService.userid){
      this.isLoggedIn = true;
    }
    else{
      this.isLoggedIn = false;
    }
  }
  refresh(): void{
    console.log("refreshed")
    window.location.reload();
  }
  //checking if user logged in, hides features if not
  isUserLoggedIn(){
    if(this._httpService.userid){
      this.isLoggedIn = true;
      console.log("user is logged in")
    }
    else{
      console.log("user has not signed on")
      this.isLoggedIn = false;
    }
  }
  //logout func, clears sess and httpservice.userid
  LogOut(){
    console.log("logging out");
    this._httpService.logOut().subscribe(data => { console.log(data);
    })
    this._httpService.userid = null;
  }
}
