import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit, OnChanges {

  @Input() id: number;
  @Input() title: string;
  @Input() author: string;
  @Input() status: string;

  nextStatus: string;
  detailsUrl: string;

  constructor(private booksService: BookService) {
    this.id = 0;
    this.title = '';
    this.author = '';
    this.status = '';

    this.nextStatus = '';
    this.detailsUrl = '';
  }

  ngOnChanges(): void {
    this.nextStatus = this.status === 'Libre' ? 'Pris' : 'Libre';
  }

  ngOnInit(): void {
    this.detailsUrl = '/book/' + this.id;
    
  }

  onClickSwitchAllBooksStatus(newStatus: string) {
    this.booksService.switchBookStatus(+this.id, newStatus);
  }

}
