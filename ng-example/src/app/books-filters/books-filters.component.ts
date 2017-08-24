import { BooksFiltersService } from './books-filters.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'books-filters',
  templateUrl: './books-filters.component.html',
  styleUrls: ['./books-filters.component.css'],
  providers: [ BooksFiltersService ]
})
export class BooksFiltersComponent implements OnInit {

  bookFilter: MyApp.Models.IBooksFilter = {
    sortOptions: []
  };

  filters: MyApp.Models.IBookFilterParam = {
    sortBy: '',
    pageSize: 0,
    pageNumber: 0,
    searchText: '',
  };

  @Output() onUpdate = new EventEmitter();

  constructor( private booksFiltersService: BooksFiltersService) { }

  ngOnInit() {
    this.booksFiltersService.getSortByOptions().subscribe( res => {
      this.bookFilter.sortOptions = res;
    });

    this.onSelectSortBy('year_published');
  }

  onSelectSortBy(sortById:string = "year"){
    this.filters.sortBy = sortById;
    console.log(sortById);
    this.updateList();
  }

  updateList(){
    this.onUpdate.emit(this.filters);
  }
}
