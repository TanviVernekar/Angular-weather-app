import { Component } from '@angular/core';
import { RecentsearchService } from 'src/app/services/recentsearch.service';

@Component({
  selector: 'app-clear-all',
  templateUrl: './clear-all.component.html',
  styleUrls: ['./clear-all.component.css']
})
export class ClearAllComponent {
  constructor( public recentsearchServices: RecentsearchService) { }

  ngOnInit(): void {
  }
  clearRecentSearch() {
    this.recentsearchServices.clearRecentSearchList();
  }
}
