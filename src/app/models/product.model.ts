import { ProductVariant } from "./product-variant";

export interface Product {
  id: number;
  name: string;
  price: number;
  talla: string;
  image?: string;
  onSale: boolean;
  discountPercent:number;
  variants: ProductVariant[];
  tallas?: string[];
}
