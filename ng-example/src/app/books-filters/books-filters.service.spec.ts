/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BooksFiltersService } from './books-filters.service';

describe('Service: BooksFilters', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksFiltersService]
    });
  });

  it('should ...', inject([BooksFiltersService], (service: BooksFiltersService) => {
    expect(service).toBeTruthy();
  }));
});