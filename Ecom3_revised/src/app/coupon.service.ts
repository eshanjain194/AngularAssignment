import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  private couponCode: string = '';
  private couponSaved: boolean = false;

  setCoupon(coupon: string) {
    this.couponCode = coupon;
    this.couponSaved = true;
  }

  getCoupon() {
    return this.couponCode;
  }
  isCouponSaved() {
    return this.couponSaved;
  }
}
