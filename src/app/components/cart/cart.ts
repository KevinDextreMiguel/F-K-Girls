import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../models/cart-item.model';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DialogModule
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit, OnDestroy{
    // Modelo para datos del formulario
  checkoutData = {
    departamento: '',
    provincia: '',
    distrito: '',
    nombres: '',
    apellidos: '',
    direccion:''
  };

  cart: CartItem[] = [];
  total: number = 0;
  showCheckoutDialog: boolean = false;

  private cartSub!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSub = this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
      this.total = this.cartService.getTotal();
    });
  }

  ngOnDestroy(): void {
    if (this.cartSub) {
      this.cartSub.unsubscribe();
    }
  }

  remove(productId: number, variantHex: string,talla:string): void {
    this.cartService.removeFromCart(productId, variantHex,talla);
  }

  updateQuantity(productId: number, variantHex: string, talla:string ,quantity: number): void {
    this.cartService.updateQuantity(productId, variantHex, talla,quantity);
  }

  increaseQuantity(item: CartItem): void {
    this.cartService.updateQuantity(item.productId, item.variant.hex,item.talla ,item.quantity + 1);
  }

  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      this.cartService.updateQuantity(item.productId, item.variant.hex,item.talla, item.quantity - 1);
    } else {
      this.cartService.removeFromCart(item.productId, item.variant.hex,item.talla);
    }
  }

  getOriginalPrice(item: CartItem): number {
    const discount = item.discountPercent ?? 0;
    if (discount > 0) {
      return item.price / (1 - discount / 100);
    }
    return item.price;
  }

  //  Verifica si hay descuento
  hasDiscount(item: CartItem): boolean {
    return item.discountPercent > 0;
  }

  //  Extrae una marca ficticia del nombre del producto
  getBrand(name: string): string {
    const parts = name.trim().split(' ');
    return parts.length > 1 ? parts[parts.length - 1].toUpperCase() : 'GENÉRICO';
  }

  //  Simula un stock máximo para la visualización
  getMaxStock(item: CartItem): number {
    return 10; // Puedes personalizar este valor según producto
  }



  //para realizar el pedido
  get subtotal(): number {
  return this.cart.reduce((sum, item) => sum + (this.getOriginalPrice(item) * item.quantity), 0);
}

get discountTotal(): number {
  return this.subtotal - this.total;
}

get discountedItems(): any[] {
  return this.cart.filter(item => this.hasDiscount(item));
}

getItemDiscount(item: CartItem): number {
  return (this.getOriginalPrice(item) - item.price) * item.quantity;
}

// para pedir los datos: 
// Método para abrir el diálogo
  openCheckoutDialog() {
    this.showCheckoutDialog = true;
  }

  // Método para procesar la compra
confirmPurchase() {
  const { departamento, provincia, distrito, direccion, nombres, apellidos } = this.checkoutData;

  if (!departamento || !provincia || !distrito || !direccion || !nombres || !apellidos) {
    alert('Por favor completa todos los campos.');
    return;
  }

  const doc = new jsPDF();

  // Encabezado
  doc.setFontSize(16);
  doc.text('Confirmación de Compra', 20, 20);

  doc.setFontSize(12);
  const lineSpacing = 6;
  let y = 32;

  doc.text(`Envío a:`, 20, y);
  y += lineSpacing;
  doc.text(`Nombres: ${nombres}`, 20, y);
  y += lineSpacing;
  doc.text(`Apellidos: ${apellidos}`, 20, y);
  y += lineSpacing;
  doc.text(`Departamento: ${departamento}`, 20, y);
  y += lineSpacing;
  doc.text(`Provincia: ${provincia}`, 20, y);
  y += lineSpacing;
  doc.text(`Distrito: ${distrito}`, 20, y);
  y += lineSpacing;
  doc.text(`Dirección: ${direccion}`, 20, y);
  y += lineSpacing + 4;

  // Productos con tabla organizada
  const productos = this.cart.map(item => {
    const subtotal = item.price * item.quantity;
    return [
      item.name,
      item.talla || '-',
      item.variant.color || '-',
      item.quantity.toString(),
      `S/ ${item.price.toFixed(2)}`,
      `S/ ${subtotal.toFixed(2)}`
    ];
  });

  autoTable(doc, {
    startY: y,
    head: [['Producto', 'Talla', 'Color', 'Cantidad', 'P. Unitario', 'Subtotal']],
    body: productos,
    styles: {
      fontSize: 10,
      halign: 'center',
      valign: 'middle',
    },
    headStyles: {
      fillColor: [41, 128, 185], // azul moderno
      textColor: 255,
      fontStyle: 'bold',
    },
    columnStyles: {
      0: { cellWidth: 50, halign: 'left' },
      1: { cellWidth: 15 },
      2: { cellWidth: 20 },
      3: { cellWidth: 20 },
      4: { cellWidth: 25 },
      5: { cellWidth: 25 },
    }
  });

  // Cálculo de totales
  const total = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const subtotal = this.cart.reduce((sum, item) => {
    const original = item.discountPercent
      ? item.price / (1 - item.discountPercent / 100)
      : item.price;
    return sum + original * item.quantity;
  }, 0);
  const descuento = subtotal - total;

  const finalY = (doc as any).lastAutoTable.finalY + 10;

  doc.setFontSize(12);
  doc.text(`Subtotal: S/ ${subtotal.toFixed(2)}`, 140, finalY, { align: 'right' });
  doc.text(`Descuento: - S/ ${descuento.toFixed(2)}`, 140, finalY + 6, { align: 'right' });

  doc.setFont('helvetica', 'bold');
  doc.text(`Total: S/ ${total.toFixed(2)}`, 140, finalY + 12, { align: 'right' });

  // Guardar PDF
  const fileName = `Pedido.pdf`;
  doc.save(fileName);

  // WhatsApp
  this.enviarPorWhatsapp();
}




  enviarPorWhatsapp() {
  if (
    !this.checkoutData.departamento ||
    !this.checkoutData.provincia ||
    !this.checkoutData.distrito ||
    !this.checkoutData.direccion
  ) {
    alert('Por favor completa todos los campos.');
    return;
  }

  const productosTexto = this.cart.map(item =>
    `${item.name} (${item.quantity} u)`
  ).join(', ');

  const mensaje = `
  Confirmación de compra
  Productos: ${productosTexto}
  Envío a:
  Nombres: ${this.checkoutData.nombres}
  Apellidos: ${this.checkoutData.apellidos}
  Departamento: ${this.checkoutData.departamento}
  Provincia: ${this.checkoutData.provincia}
  Distrito: ${this.checkoutData.distrito}
  Direcciòn: ${this.checkoutData.direccion}
  `;

  const telefono = '51910467314';
  const mensajeCodificado = encodeURIComponent(mensaje.trim());
  const url = `https://wa.me/${telefono}?text=${mensajeCodificado}`;

  window.open(url, '_blank');

  this.showCheckoutDialog = false;
}

}
