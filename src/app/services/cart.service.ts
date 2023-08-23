import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });
  constructor(private _snackBar: MatSnackBar) {}

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this.showMessage('1 item added to cart');
  }

  getTotal(items: CartItem[]): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
  }

  onClearCart() {
    this.cart.next({ items: [] });
    this.showMessage('Cart is clear');
  }

  removeFromCart(item: CartItem) {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id != item.id
    );
    this.cart.next({ items: filteredItems });
    this.removedItemMessage();
  }

  onRemoveQuantity(item: CartItem): void {
    const updatedItems = this.cart.value.items
      .map((_item) => this.reduceQuantity(_item, item.id))
      .filter((_item) => _item.quantity > 0);

    this.cart.next({ items: updatedItems });
    this.removedItemMessage();
  }

  private reduceQuantity(item: CartItem, id: number): CartItem {
    if (item.id === id) {
      item.quantity--;
    }
    return item;
  }

  private showMessage(msg: string) {
    this._snackBar.open(msg, 'OK', { duration: 1000 });
  }

  private removedItemMessage() {
    this.showMessage('1 item removed from cart');
  }
}
