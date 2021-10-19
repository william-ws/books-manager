import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './services/book/book.service';
import { TableRowComponent } from './components/table-row/table-row.component';
import { BooksViewComponent } from './views/books-view/books-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { BookViewComponent } from './views/book-view/book-view.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    TableRowComponent,
    BooksViewComponent,
    ErrorViewComponent,
    BookViewComponent,
    HeaderComponent,
    AuthViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
