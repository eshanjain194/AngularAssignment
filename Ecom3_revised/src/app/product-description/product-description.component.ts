import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'product',
  templateUrl: './product-description.component.html',
})
export class ProductDescriptionComponent implements OnInit{
  public id : number =0;
  public product:Product=new Product;
  constructor(private route: ActivatedRoute,private repo:ProductRepository, private cart : Cart) { }
  ngOnInit(){
    this.route.paramMap.subscribe({
      next:(parse) =>{
        this.id = Number(parse.get('id'));
        console.log(this.id);
        this.getDescription();
      }
    })
  }
  getDescription(){
    const product =this.repo.getProduct(this.id);
    if(product)
    {
      this.product=product;
    }else{
      alert("Product not found!");
    }
  }

  addToCart(prod:Product){
    this.cart.addLine(prod);
  }
}
