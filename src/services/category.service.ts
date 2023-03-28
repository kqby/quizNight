import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories =  [
    {id: 11, name: 'Film'},
    {id: 12, name: 'Music'},
  ];

  getCategories() {
    return this.categories;
  }

  getCategoryById(id: number) {
    return this.categories.find(category => category.id === id);
  }
  constructor() { }
}
