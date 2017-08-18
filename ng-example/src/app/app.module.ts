
import { CanActivateAuthGuard } from './shared/can-activate.service';
import { UserProfileService } from './shared/user-profile.service';
import { RouteComponent } from './shared/route.component';
import { ElipsisPipe } from './_Pipes/elipsis.pipe';
import { HighlightDirective } from './_Directives/highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksComponent } from './books/books.component';

import { WeatherService } from './home/home.service'
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    WeatherCardComponent,
    HighlightDirective,
    ElipsisPipe,
    LoginComponent,
    RouteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    WeatherService,
    UserProfileService,
    CanActivateAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
