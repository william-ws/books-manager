import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css']
})
export class BooksViewComponent implements OnInit {

  books: Array<any>;

  constructor(private bookService: BookService) {
    this.books = [];
  }
  ngOnInit() {
    this.books = this.bookService.books;
    
  }

  onClickSwitchAllBooksStatus(newStatus: string) {
    this.bookService.switchAllBooksStatus(newStatus);
    
  }
}
