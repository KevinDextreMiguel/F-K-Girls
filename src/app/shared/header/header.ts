import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { DrawerModule } from 'primeng/drawer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,    
  //para el enrutamiento
  imports: [
    RouterModule,
    DrawerModule,
    CommonModule
  ],

  templateUrl: './header.html',
  styleUrl: './header.css'
})



export class Header implements OnInit,OnDestroy{
  sidebarVisible: boolean = false;
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
