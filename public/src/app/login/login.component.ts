import { HttpService } from './../http.service';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnChanges {

  constructor(private _httpService: HttpService,private _route:Router) { }
  // @Input() loggedIn: boolean;
  @Input() loggedIn: boolean;
  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }
  // ngOnInit() {
  //   this.userinfo = {username: "", password: ""};
  // }
  userinfo:any={};
  err:any;
  loginerror:any;
  userid: any;

  login(){
    this._httpService.login(this.userinfo).subscribe(data=>{
      if(data['userid']){
        //store session to service to be acessible in app component
        this._httpService.userid = data['userid'];
        this._route.navigate(['']);
      }
      else if(data['err']){
        this.err = data['errors'];
        console.log(this.err, "this is the error message");
      }
      else{
        this.loginerror = data['message']
      }
    })
  }
}
