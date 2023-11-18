import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/propiedades', pathMatch: 'full' },
  { path: 'propiedades', component: DashboardComponent },
  { path: 'detalle/:province/:city/:ref', component: PropertyDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
