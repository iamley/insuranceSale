import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entel/soap',
    pathMatch: 'full'
  },
  {
    path: 'entel',
    children: [
      {
        path: '',
        redirectTo: 'soap',
        pathMatch: 'full'
      },
      {
        path: 'soap',
        loadChildren: () => import('./feature/license-plate/feature-license-plate.module')
          .then(m => m.FeatureLicensePlateModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'entel/soap',
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
