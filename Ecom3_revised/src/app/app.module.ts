import { StoreModule } from './store/store.module';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { CouponPageComponent } from './coupon-page/coupon-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path:'',
        component:CouponPageComponent
      },
      {
        path: "store",
        component: StoreComponent,
      },
      {
        path: 'product/:id',
        component: ProductDescriptionComponent
      },
      {
        path: "cart",
        component: CartDetailComponent,
      },
      {
        path: "checkout",
        component: CheckoutComponent,
      },

      {
        path: "admin",
        loadChildren: () =>
          import("./admin/admin.module").then((m) => m.AdminModule),
      },

      { path: "**", redirectTo: "coupon" },
    ]),
  ],
  providers: [],
  declarations: [AppComponent, CouponPageComponent, ProductDescriptionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
