import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {* as bcrypt} from "bcrypt";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  public cart: Array<Object>=[]; //setting array here so components can grab it
  public numOfItems: Number;
  public total = 0;
  public wishlist: Array<object> = [];

  register(user){
    return this._http.post('/register', user)
  }
  sell(item){
    return this._http.post('/create', item);
  }
  getAll(){
    return this._http.get('/all');
  }
  one_item(id){
    return this._http.get(`/one/${id}`);
  }
  login(user){
    console.log(user,'testing User Infor');
    return this._http.post('/login',user)
  }
  addItemToDb(item){
    console.log(item, "this is the item in service", item);
    return this._http.post('/addItemToDb', item);
  }

}

