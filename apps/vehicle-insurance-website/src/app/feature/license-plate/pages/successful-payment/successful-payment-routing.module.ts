import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessfulPaymentComponent } from './successful-payment/successful-payment.component';

const routes: Routes = [
  {
    path: '',
    component: SuccessfulPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessfulPaymentRoutingModule { }
