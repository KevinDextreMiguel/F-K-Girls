import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { ProductVariant } from '../../models/product-variant';
import { toast } from 'ngx-sonner';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ProductsService } from '../../services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-oferta',
    imports: [CommonModule,
    DialogModule,ButtonModule,RouterLink
    ],
  templateUrl: './oferta.html',
  styleUrl: './oferta.css'
})
export class Oferta implements OnInit{
  productsOnSale: Product[] = [];

  showTallaDialog: boolean = false;
  selectedProduct: Product | null = null;
  selectedTalla: string | null = null;
  confirmSuccess: boolean = false;

  selectedVariant: { [productId: number]: ProductVariant | undefined } = {};

  constructor(private cartService: CartService,private productsService: ProductsService) {}

  ngOnInit(): void {
    //filtrar todo los que estàn en descuento
    this.productsOnSale = this.productsService.getProducts().filter(p => p.onSale);
  }

  selectVariant(productId: number, variant: ProductVariant): void {
    this.selectedVariant[productId] = variant;
  }

  openTallaDialog(product: Product) {
    this.selectedProduct = product;
    this.selectedTalla = null;
    this.showTallaDialog = true;
  }

  confirmAddToCart() {
    if (this.selectedProduct && this.selectedTalla) {
      const product = { ...this.selectedProduct, talla: this.selectedTalla };
      const variant = this.selectedVariant[product.id] || product.variants[0];
      this.cartService.addToCart(product, variant);

      this.confirmSuccess = true;
      //para mostrar un mesaje emergente
      toast.success(this.selectedProduct.name + ' agregado al carrito con talla ' + this.selectedTalla);
    }
  }

  resetDialog() {
  this.showTallaDialog = false;
  this.selectedProduct = null;
  this.selectedTalla = null;
  this.confirmSuccess = false;
  }

  getDiscountedPrice(product: Product): number {
  if (!product.discountPercent) return product.price;
  return product.price * (1 - product.discountPercent / 100);
  }

}
