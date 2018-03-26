import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchPageService } from './search-page.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  users: any[];
  reposFound: boolean = false;
  searchQuery: any = ''

  handleSuccess(data) {
    this.reposFound = true;
    this.users = data;
    console.log(data);
  }

  handleError(error) {
    console.log(error);
  }

  // input:string = ''
  // inputSubmitted:boolean = false;

  constructor(private _SearchPageService : SearchPageService) { }

  searchUsers(query: string) {
    return this._SearchPageService.getUser(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => console.log("User Requested")
    )
  }

  ngOnInit() {
  }

  // changeComponent(event: Event) {
  // this.inputSubmitted = true;
  // this.input = (<HTMLInputElement>event.target).value;
  // }
}
