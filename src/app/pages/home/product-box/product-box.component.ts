import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css'],
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Output() addToCartEmitter = new EventEmitter<Product>();

  product: Product | undefined = {
    id: 1,
    title: 'Lina statyczna',
    price: 350,
    category: 'liny',
    description: 'lorem ipsum',
    image: 'https://via.placeholder.com/150',
  };

  ngOnInit(): void {}

  onAddToCart(): void {
    this.addToCartEmitter.emit(this.product);
  }
}
