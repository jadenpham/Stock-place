import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any;
  numOfItems: any;
  total: any;
  totalItem: Number;

  constructor(private _httpService: HttpService,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.cart = this._httpService.cart;
    this.total = this._httpService.total;
    this.totalItem = this._httpService.numOfItems;
  }

  removeItem(item){
    //remove item by id
    for(let i in this.cart){
      if(this.cart[i]['_id'] === item['_id']){
        this.cart.splice(Number(i), 1);
        this._httpService.cart = this.cart;
        this.totalItem = this.cart.length;
        this._httpService.total -= item.price;
        this.total = this._httpService.total;
      }
    }
  }
}
