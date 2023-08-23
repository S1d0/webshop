import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  @Output() showCategoryEmitter = new EventEmitter<string>();
  categories = ['shoes', 'sports', 'tents'];

  ngOnInit(): void {}
  onShowCategoryUpdate(category: string): void {
    this.showCategoryEmitter.emit(category);
  }
}
