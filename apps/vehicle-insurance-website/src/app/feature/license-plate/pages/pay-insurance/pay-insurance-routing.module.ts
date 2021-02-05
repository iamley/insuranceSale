import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayInsuranceComponent } from './pay-insurance/pay-insurance.component';

const routes: Routes = [
  {
    path: '',
    component: PayInsuranceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayInsuranceRoutingModule { }
