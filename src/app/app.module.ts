import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchResultsPageComponent } from './search-results-page/search-results-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

import { SearchPageService } from './search-page/search-page.service';
import { NavbarService } from './navbar.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchResultsPageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [SearchPageService, NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
