import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatchesByCountryComponent } from './components/matches-by-country/matches-by-country.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, MatCardModule],
  declarations: [AppComponent, MatchesByCountryComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
