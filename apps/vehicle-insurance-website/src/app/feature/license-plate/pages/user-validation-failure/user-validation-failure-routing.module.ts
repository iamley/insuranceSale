import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserValidationFailureComponent } from './user-validation-failure/user-validation-failure.component';

const routes: Routes = [
  {
    path: '',
    component: UserValidationFailureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserValidationFailureRoutingModule { }
