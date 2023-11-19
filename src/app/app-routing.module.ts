import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesSearchComponent } from './components/properties-search/properties-search.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/propiedades', pathMatch: 'full' },
  { path: 'propiedades', component: PropertiesSearchComponent },
  { path: 'detalle/:province/:city/:ref', component: PropertyDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
