import { Component, Input } from '@angular/core';
import { NavbarService } from './navbar.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any[];
  reposFound: boolean = false;

  handleSuccess(data) {
    this.reposFound = true;
    this.users = data;
    console.log(data);
  }

  handleError(error) {
    console.log(error);
  }


  constructor(private _NavbarService : NavbarService) { }

  searchUsers(query: string = 't-boya') {
    return this._NavbarService.getUser(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => console.log("Creator Repos Requested")
    )
  }

  ngOnInit() {
    this.searchUsers('t-boya');
  }

}
