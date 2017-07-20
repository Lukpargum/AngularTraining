import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationComponent } from './animation/animation.component';
import { BooksComponent } from './books/books.component';
import { GrammarComponent } from './grammar/grammar.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BookItemComponent } from './books/books-list/book-item/book-item.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';

const appRoutes: Routes = [
  { path: 'grammar', component: GrammarComponent },
  { path: 'books', component: BooksComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    AnimationComponent,
    BooksComponent,
    GrammarComponent,
    BooksListComponent,
    BookItemComponent,
    BookDetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
