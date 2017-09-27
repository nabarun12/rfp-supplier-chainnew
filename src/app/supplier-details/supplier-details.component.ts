import { Component, OnInit } from '@angular/core';
import { StarRatingModule } from 'angular-star-rating';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.scss']
})
export class SupplierDetailsComponent implements OnInit {

  private avgRating : any;
         publisher : string;
         price: number;
         quality: number;
         bid_response: number;
         message_response: number;
         technical: number;
         total: number;

  constructor() { 
    this.avgRating = 0;
    this.publisher = '';
    this.price = 0;
    this.quality= 0;
    this.bid_response= 0;
    this.message_response= 0;
    this.technical= 0;
    this.total = 0;
  }

  ngOnInit() {
  }

  /**
   * checkRating
   */
  public checkRating() {
    
  }

}
