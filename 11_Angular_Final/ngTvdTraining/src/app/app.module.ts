import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ComponentComponent } from './exercise/component/component.component';
import { DatabindingComponent } from './exercise/databinding/databinding.component';
import { DetailComponent } from './exercise/detail/detail.component';
import { ExerciseListComponent } from './exercise/list/list.component';
import { NgForComponent } from './exercise/ngFor/ngfor.component';
import { NgifComponent } from './exercise/ngif/ngif.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule.forRoot(),
    LayoutModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ExerciseListComponent,
    DatabindingComponent,
    NgifComponent,
    NgForComponent,
    ComponentComponent,
    DetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
