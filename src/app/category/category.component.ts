import {Component, EventEmitter, Output} from '@angular/core';
import {Category} from "../../interface/category";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  selectedCategoryId = 0
  selectedCategoryIndex = 0;
  category :  any
  categories : Category[];
  @Output() categoryClick = new EventEmitter<number>();


constructor(private  categoryService:CategoryService ) {
  this.categories = this.categoryService.getCategories()

}

  onSelect(categoryId: number) {
    this.category = this.categoryService.getCategoryById(categoryId);
  }

  onCategoryClick(categoryId: number) {
    this.categoryClick.emit(categoryId);
    this.onSelect(categoryId)
  }
  onCategoryChange(event: any) {
    const categoryId = event.target.value;
    if (categoryId) {
      this.selectedCategoryId = parseInt(categoryId);
      this.onCategoryClick(this.selectedCategoryId);
    }

  }
}
