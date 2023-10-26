import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'coupon',
  templateUrl: './coupon-page.component.html',
})
export class CouponPageComponent {
  couponCode:string='';
  isCouponApplied: boolean = false;
  constructor(private router: Router,private couponService: CouponService){}
  
  saveCoupon(coupon:string){
    this.couponCode = coupon;
    this.couponService.setCoupon(coupon);
    alert('Coupon saved successfully!');
    console.log(`Coupon code saved:${this.couponCode}`);
    
    this.router.navigate(['/store']);
    }
    redirectToCart(){
      this.router.navigate(['/store']);
}
}
