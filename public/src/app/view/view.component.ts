import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Route } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  // bag: boolean;
  count = 0;
  //connecting to httpservice to get info
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }
  this_id: any;
  item_data: any;
  public cart: Array<Object>= [];
  //declaring wish list here as array of objects
  public wishlist: Array<Object>  = [];
  alert: any;
  numOfItems: any;
  total=0;
  public itemToCart: any;
  ngOnInit() {
    //on init, set this wishlist to the one in service
    this.wishlist = this._httpService.wishlist;
    this.cart=this._httpService.cart;
    this._route.params.subscribe((params: Params)=>{
      this.this_id = params['id'];
      this._httpService.one_item(params['id']).subscribe( data =>{
        this.item_data = data;
      })
    })
    // this.bag = false;
  }
  addToCart(item){
    this._httpService.cart.push(item);
    this._httpService.total += item.price;
    this._httpService.numOfItems = this._httpService.cart.length;
    // this.bag = true;
    this.count += 1;
    //when add to cart, also add to db to save all items
    // this._httpService.addItemToDb(item).subscribe(data => this.itemToCart = data);
  }
  //adding to wish list by pushing the item into array of objects
  addToWishList(item){
    //now just need to push item into the wishlist
    this._httpService.wishlist.push(item);
  }





  //dont need this function anymore, doing it directly when adding to cart
  // itemInCart(){
  //   // console.log(this.cart, "items in cart")
  //   this.numOfItems= this.cart.length;
  //   // console.log(this.numOfItems);
  //   this._httpService.numOfItems = this.numOfItems;
  //   this.total = 0; //sets total back to 0 when function is called, else it will compound all of the items
  //   for(let x of this.cart){
  //     // console.log(x['price'], "this is x result");
  //     this.total = this.total + x['price'];
  //     // console.log(this.total);
  //     this._httpService.total = this.total;
  //     console.log(this._httpService.total);
  //   }
  // }
}
