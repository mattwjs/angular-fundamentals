import { Component, OnInit } from '@angular/core';
import { GitSearchService, GitUsersService } from './git-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (private GitSearchService : GitSearchService, private GitUsersService : GitUsersService) {

  }

  ngOnInit() {
  //   this.GitSearchService.gitSearch('angular').then( (response) => {
  //     alert("Total Libraries Found:" + response.total_count);
  //   }, (error) => {
  //     alert("Error: " + error.statusText)
  //   })

  //   this.GitUsersService.gitUsers('test').then ((response) => {
  //     alert("Total Users Found:" + response.total_count);
  //   }, (error) => {
  //     alert("Error: " + error.statusText)
  //   })
  }
  // title = 'Angular-Fundamentals';
}
