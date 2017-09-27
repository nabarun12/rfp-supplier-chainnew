import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/supplier-details', pathMatch: 'full'
  },
  {
    path: 'projects', component: ProjectsPageComponent
  },
  {
    path: 'supplier-details', component: SupplierDetailsComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
