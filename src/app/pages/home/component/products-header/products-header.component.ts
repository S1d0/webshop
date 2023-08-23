import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css'],
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();

  sort = 'desc';
  itemsShowCount = 10;

  onSortUpdate(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdatede(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNumb: number): void {
    this.columnsCountChange.emit(colsNumb);
  }
}
