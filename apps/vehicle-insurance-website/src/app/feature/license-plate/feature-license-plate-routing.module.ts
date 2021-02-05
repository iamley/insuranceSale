import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LicensePlateGuard } from '../../core/guards/license-plate.guard';
import { LicensePlateResolver } from '../../core/license-plate.resolver';
import { VehicleResolver } from '../../core/vehicle.resolver';
import { LicensePlatePaymentResolver } from '../../core/license-plate-payment.resolver';
import { AuthEntelGuard } from '../../core/guards/auth-entel.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing-page/landing-page.module')
      .then(m => m.LandingPageModule),
  },
  {
    path: 'datos',
    canActivate: [LicensePlateGuard],
    children: [
      {
        path: 'vehiculo',
        resolve: { vehicle: VehicleResolver, licensePlate: LicensePlateResolver },
        loadChildren: () => import('./pages/vehicle/vehicle.module')
          .then(m => m.VehicleModule)
      },
      {
        path: 'propietario',
        loadChildren: () => import('./pages/owner/owner.module')
          .then(m => m.OwnerModule)
      }
    ]
  },
  {
    path: 'pago',
    canActivate: [LicensePlateGuard],
    children: [
      {
        path: '',
        resolve: { licensePlatePrice: LicensePlatePaymentResolver },
        loadChildren: () => import('./pages/pay-insurance/pay-insurance.module')
          .then(m => m.PayInsuranceModule)
      },
      {
        path: 'validacion-de-usuario',
        loadChildren: () => import('./pages/user-validation/user-validation.module')
          .then(m => m.UserValidationModule)
      },
      {
        path: 'confirmar',
        canActivate: [AuthEntelGuard],
        loadChildren: () => import('./pages/confirm-payment/confirm-payment.module')
          .then(m => m.ConfirmPaymentModule)
      },
      {
        path: 'exitoso',
        loadChildren: () => import('./pages/successful-payment/successful-payment.module')
          .then(m => m.SuccessfulPaymentModule)
      },
      {
        path: 'validacion-de-usuario-fallida',
        loadChildren: () => import('./pages/user-validation-failure/user-validation-failure.module')
          .then(m => m.UserValidationFailureModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureLicensePlateRoutingModule {}
