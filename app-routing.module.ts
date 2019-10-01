import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth-login', pathMatch: 'full' },
  { path: 'auth-login', loadChildren: './pages/auth-login/auth-login.module#AuthLoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'auth-signup', loadChildren: './pages/auth-signup/auth-signup.module#AuthSignupPageModule' },
  { path: 'auth-register', loadChildren: './pages/auth-register/auth-register.module#AuthRegisterPageModule' },
  { path: 'auth-forgot-password', loadChildren: './pages/auth-forgot-password/auth-forgot-password.module#AuthForgotPasswordPageModule' },
  { path: 'cart-list', loadChildren: './pages/cart-list/cart-list.module#CartListPageModule' },
  { path: 'cart-delivery-address', loadChildren: './pages/cart-delivery-address/cart-delivery-address.module#CartDeliveryAddressPageModule' },
  { path: 'cart-delivery-options', loadChildren: './pages/cart-delivery-options/cart-delivery-options.module#CartDeliveryOptionsPageModule' },
  { path: 'cart-payment', loadChildren: './pages/cart-payment/cart-payment.module#CartPaymentPageModule' },
  { path: 'cart-order-status', loadChildren: './pages/cart-order-status/cart-order-status.module#CartOrderStatusPageModule' },
  { path: 'user-change-password', loadChildren: './pages/user-change-password/user-change-password.module#UserChangePasswordPageModule' },
  { path: 'user-orders', loadChildren: './pages/user-orders/user-orders.module#UserOrdersPageModule' },
  { path: 'faq', loadChildren: './pages/faq/faq.module#FaqPageModule' },
  { path: 'feedback', loadChildren: './pages/feedback/feedback.module#FeedbackPageModule' },
  { path: 'product-list/:UID', loadChildren: './pages/product-list/product-list.module#ProductListPageModule' },
  { path: 'user-wish-list', loadChildren: './pages/user-wish-list/user-wish-list.module#UserWishListPageModule' },
  { path: 'about-us', loadChildren: './pages/about-us/about-us.module#AboutUsPageModule' },
  { path: 'term-and-condition', loadChildren: './pages/term-and-condition/term-and-condition.module#TermAndConditionPageModule' },
  { path: 'privacy-polices', loadChildren: './pages/privacy-polices/privacy-polices.module#PrivacyPolicesPageModule' },
  { path: 'profile-shop', loadChildren: './pages/profile-shop/profile-shop.module#ProfileShopPageModule' },
  { path: 'shop', loadChildren: './pages/shop/shop.module#ShopPageModule' },
  { path: 'shop-account', loadChildren: './pages/shop-account/shop-account.module#ShopAccountPageModule' },
  { path: 'post', loadChildren: './pages/post/post.module#PostPageModule' },
  { path: 'logout', loadChildren: './pages/logout/logout.module#LogoutPageModule' },
  { path: 'post-form', loadChildren: './pages/post-form/post-form.module#PostFormPageModule' },
  { path: 'shop-address', loadChildren: './pages/shop-address/shop-address.module#ShopAddressPageModule' },
  { path: 'shop-notifications', loadChildren: './pages/shop-notifications/shop-notifications.module#ShopNotificationsPageModule' },
  { path: 'shop-payment', loadChildren: './pages/shop-payment/shop-payment.module#ShopPaymentPageModule' },
  { path: 'shop-menu', loadChildren: './pages/shop-menu/shop-menu.module#ShopMenuPageModule' },
  { path: 'shop-register', loadChildren: './pages/shop-register/shop-register.module#ShopRegisterPageModule' },
  { path: 'cart-order', loadChildren: './pages/cart-order/cart-order.module#CartOrderPageModule' },
  { path: 'shop-payment-form', loadChildren: './pages/shop-payment-form/shop-payment-form.module#ShopPaymentFormPageModule' },
  { path: 'order/:Key_order', loadChildren: './pages/order/order.module#OrderPageModule' },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
