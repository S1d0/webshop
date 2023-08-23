import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [] };

  dataSource: Array<CartItem> = [];
  displayedColums: Array<string> = [
    'product',
    'name',
    'prize',
    'quantinty',
    'total',
    'action',
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  getTotalForItem(item: CartItem): number {
    return item.price * item.quantity;
  }

  onClearCart(): void {
    this.cartService.onClearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: any) {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem) {
    this.cartService.onRemoveQuantity(item);
  }
}
