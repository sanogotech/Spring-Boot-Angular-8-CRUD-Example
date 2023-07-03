import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})


export class ProductCreateComponent implements OnInit {
	
  //PropertyName: Data type = "Default value"
  pageTitle: string = "Products Page In Action .."

  constructor() { }

  ngOnInit() {
  }

}
