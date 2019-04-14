import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import {OverviewComponent} from './overview/overview.component';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/:id', component: OverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
