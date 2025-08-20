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
  selector: 'app-products',
  imports: [CommonModule,
    DialogModule,ButtonModule,RouterLink
    ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit{

  products: Product[] = [];
  showTallaDialog: boolean = false;
  selectedProduct: Product | null = null;
  selectedTalla: string | null = null;
  confirmSuccess: boolean = false;

  selectedVariant: { [productId: number]: ProductVariant | undefined } = {};

  constructor(private cartService: CartService,private productsService: ProductsService) {}

    ngOnInit() {
    // Aquí cargamos los productos desde el servicio
    //filtrar todos los que no estàn en descuento
    this.products = this.productsService.getProducts().filter(p => !p.onSale);
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

}
