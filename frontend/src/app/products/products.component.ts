import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service:AppServiceService) { }
productData:any;
  ngOnInit(): void {
    this.productData = this.service.productDetails;

  }
  // addtocart(p: any){
  //   this.service.addtoCart(p);
  // }

}
