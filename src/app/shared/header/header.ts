import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  //para el enrutamiento
  imports: [RouterModule],

  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit,OnDestroy{

  total:number = 0;
  private subscription: Subscription = new Subscription();

  constructor(private cart: CartService){}

  ngOnInit(): void {
    this.subscription = this.cart.getTotalQuantity().subscribe(quantity => {
      this.total = quantity;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
