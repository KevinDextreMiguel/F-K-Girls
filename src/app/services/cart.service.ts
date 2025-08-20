import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ProductVariant } from '../models/product-variant';

const CART_KEY = 'cart_items';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cart: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  constructor() {
    this.loadCart();
    this.cartSubject.next(this.cart);
  }

  // Guardar carrito en localStorage
  private saveCart(): void {
    localStorage.setItem(CART_KEY, JSON.stringify(this.cart));
    this.cartSubject.next([...this.cart]); // Emitimos copia para evitar mutaciones externas
  }

  // Cargar carrito desde localStorage
  private loadCart(): void {
    const savedCart = localStorage.getItem(CART_KEY);
    this.cart = savedCart ? JSON.parse(savedCart) : [];
  }

  // Observable del carrito completo
  getCart(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  // Total de productos (unidades)
  getTotalQuantity(): Observable<number> {
    return this.cartSubject.asObservable().pipe(
      map(cart => cart.reduce((sum, item) => sum + item.quantity, 0))
    );
  }

  // Total en dinero (no observable)
  getTotal(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Agregar producto + variante al carrito
  addToCart(product: Product, variant: ProductVariant): void {
    const existing = this.cart.find(item =>
      item.productId === product.id &&
      item.variant.hex === variant.hex &&
      item.talla === product.talla 
    );
  
    // ✅ Calcular el precio final (con o sin descuento)
    const discountedPrice = product.discountPercent
      ? product.price * (1 - product.discountPercent / 100)
      : product.price;
  
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({
        productId: product.id,
        discountPercent: product.discountPercent, // solo para referencia
        name: product.name,
        price: discountedPrice, // ✅ Guardamos precio ya con descuento si aplica
        talla: product.talla,
        quantity: 1,
        variant: variant
      });
    }
  
    this.saveCart();
  }


  // Eliminar un producto con una variante específica
  removeFromCart(productId: number, variantHex: string, talla: string): void {
    this.cart = this.cart.filter(item =>
    !(item.productId === productId && item.variant.hex === variantHex && item.talla === talla)
    );
    this.saveCart();
  }


  // Actualizar cantidad de un producto con variante
  updateQuantity(productId: number, variantHex: string, talla: string, quantity: number): void {
    const item = this.cart.find(item =>
      item.productId === productId && item.variant.hex === variantHex && item.talla === talla
    );

    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId, variantHex, talla);
      } else {
        item.quantity = quantity;
        this.saveCart();
      }
    }
  }


  // Vaciar carrito completo
  clearCart(): void {
    this.cart = [];
    this.saveCart();
  }

}
