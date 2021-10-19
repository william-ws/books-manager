import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  getElementById(bookId: number): any {
    for (const book of this.books) {
      if (book.id === bookId) {
        return book;
      } 
    }
    return null;
  }
  books: Array<any>;

  constructor() {
    
    this.books = [];

    for (let i = 1; i <= 10; i++){
      
      this.books.push({
        id: i,
        title: 'Livre' + i,
        author: 'Auteur' + i,
        description: 'Lorem ipsum',
        status: 'Libre'
      })

    }
  }

  switchAllBooksStatus(newStatus: string) {
    for (const book of this.books) {
      book.status = newStatus;
    }
  }

  switchBookStatus(bookId: number, newStatus: string) {
    for (const book of this.books) {
      if (book.id === bookId) {
        book.status = newStatus;
        break;
      }
     
    }
    
  }

  
}
