import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './services/http.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { ThousandsSeparatorPipe } from './utils/pipes/thousands-separator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PropertyDetailComponent,
    CardComponent,
    ButtonComponent,
    ThousandsSeparatorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
