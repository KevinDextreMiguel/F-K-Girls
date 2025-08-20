import { ProductVariant } from "./product-variant";

export interface CartItem{
  productId: number;
  name: string;
  price: number;
  talla: string;
  quantity: number;
  discountPercent:number;
  variant: ProductVariant;
}