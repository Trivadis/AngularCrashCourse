import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatchesByCountryComponent } from './components/matches-by-country/matches-by-country.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, MatCardModule],
  declarations: [AppComponent, MatchesByCountryComponent],
  providers: [],
  entryComponents: [MatchesByCountryComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el1 = createCustomElement(MatchesByCountryComponent, { injector: this.injector });
    customElements.define('app-matches-by-country', el1);
  }
}
