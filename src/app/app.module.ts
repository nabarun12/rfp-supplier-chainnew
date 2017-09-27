import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { SupplierChainService } from './common/services/supplierchain.service';
import { SupplierMetaService } from './common/services/suppliersmeta.service';
import { ConfigurationProvider } from './config/configuration.provider';

import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    NavigationBarComponent,
    ProjectsPageComponent,
    SupplierDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StarRatingModule.forRoot(),
    FormsModule
  ],
  providers: [ConfigurationProvider,SupplierChainService, SupplierMetaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
