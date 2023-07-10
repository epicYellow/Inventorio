import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.scss'],
})
export class FilterSearchComponent {
  @Input() 'NumberItems';
  @Input() 'FilterItems';

  searchTerm = '';

  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
      }
    });
  }

  ngOnInit(): void {}

  //search method
  search(term: string): void {
    if (term) {
      this.router.navigateByUrl('Inventory/search/' + term);
    } else {
      this.router.navigateByUrl('Inventory/');
    }
  }
}
