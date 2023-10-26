import { Component,Input } from "@angular/core";

import { Cart } from "../model/cart.model";
import { CouponService } from "../coupon.service";

@Component({
    selector:'cart',
  templateUrl: "cartDetail.component.html",
})
export class CartDetailComponent {
  discount: number = 0.1; // 10% discount
  couponCode: string='';
  grossTotal: number = 0;
  couponApplied: boolean = false;

  constructor(public cart: Cart,private couponService: CouponService) {
    this.couponCode=couponService.getCoupon();
  }
  isCouponSaved(){
    return this.couponService.isCouponSaved();
  }

  applyCoupon(couponCode: string) {
    if(couponCode == 'SUMMERSALE10')
    {
      this.couponApplied=true;
    }
    if(this.couponApplied)
    {
    const discountAmount = parseInt(couponCode, 10);
    this.cart.applyCoupon(discountAmount);
    console.log(this.couponCode);
    }
  }

  calculateGrossTotal() {
    this.grossTotal = this.cart.cartPrice - this.cart.cartPrice * this.discount;
  }

  updateGrossTotal() {
    if (this.couponApplied) {
      this.calculateGrossTotal();
    }
  }
}
