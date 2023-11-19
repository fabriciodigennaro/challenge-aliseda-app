import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './services/http.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PropertiesSearchComponent } from './components/properties-search/properties-search.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { ThousandsSeparatorPipe } from './utils/pipes/thousands-separator.pipe';
import { CarouselComponent } from './components/shared/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertiesSearchComponent,
    PropertyDetailComponent,
    CardComponent,
    ButtonComponent,
    ThousandsSeparatorPipe,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
