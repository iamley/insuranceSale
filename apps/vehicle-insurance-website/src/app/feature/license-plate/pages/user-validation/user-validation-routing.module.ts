import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserValidationComponent } from './user-validation/user-validation.component';

const routes: Routes = [
  {
    path: '',
    component: UserValidationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserValidationRoutingModule { }
