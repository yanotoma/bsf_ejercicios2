import { BooksService } from './books.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [ BooksService]
})
export class BooksComponent implements OnInit, OnChanges {

  books: MyApp.Models.IBooks[] = []

  filters: MyApp.Models.IBookFilterParam = {
    sortBy: '',
    pageSize: 0,
    pageNumber: 0,
    searchText: '',
  };

  @Input() set sortBy(value: string){
    this.filters.sortBy = value;
    //this.updateList();
  }

  constructor(  private booksService: BooksService) { }

  ngOnInit() {
    this.updateList();
  }

  updateList(){
    this.booksService.getList(this.filters).subscribe( res => {
      this.books = res;
    });
  }


    public ngOnChanges(): void {
        this.updateList();
    }
}
