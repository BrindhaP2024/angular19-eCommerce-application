import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/products.service';

@Component({
    selector: 'app-search',
    imports:[FormsModule],
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    searchQuery: string = '';

    constructor(private router: Router,private product:ProductService) {}

    onSearch() {

        if(this.searchQuery){
          this.router.navigate(['/productpage'],{queryParams:{ search:this.searchQuery }});
        }
    }
}
