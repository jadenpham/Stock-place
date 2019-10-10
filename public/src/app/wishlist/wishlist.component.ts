import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  //setting wish list to accept service's wishlist
  public wishlist: Array<Object> = [];
  //output to httpservice to update cart when clicked
  @Output() public child_wishlist = new EventEmitter();
  public cart: Array<Object> = [];

  //connecting to service
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.cart = this._httpService.cart;
    this.wishlist = this._httpService.wishlist;
    console.log(this._httpService.total);
  }
  //to add to cart
  addToCart(item){
    //cart is an array so just need to push item into it
    this._httpService.cart.push(item);
    //updating httpservice number of items to the cart's length
    this._httpService.numOfItems = this.cart.length;
    //updating httpservice total amount
    this._httpService.total += item.price;
    //remove item after added to cart
    this.removeItemAfterAdded(item);
  }
  //after added to cart, remove item from wishlist array
  removeItemAfterAdded(item){
    for(let i in this._httpService.wishlist){
      //if item id matches the id in wishlist, remove it
      if(this._httpService.wishlist[i]['_id'] === item['_id']){
        this._httpService.wishlist.splice(Number(i),1)
      }
    }
  }


}
