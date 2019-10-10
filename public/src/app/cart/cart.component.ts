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

}
