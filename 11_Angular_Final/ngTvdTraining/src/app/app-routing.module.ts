import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCustomPreloader } from './core/app-custom-preloader';
import { ComponentComponent } from './exercise/component/component.component';
import { DatabindingComponent } from './exercise/databinding/databinding.component';
import { ExerciseListComponent } from './exercise/list/list.component';
import { NgForComponent } from './exercise/ngFor/ngfor.component';
import { NgifComponent } from './exercise/ngif/ngif.component';
import { StandardLayoutComponent } from './layout/standard-layout/standard-layout.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: StandardLayoutComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'employees',
        loadChildren: './employee/employee.module#EmployeeModule',
        data: { preload: false }
      },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
      },
      {
        path: 'exercise',
        component: ExerciseListComponent
      },
      {
        path: 'exercise/databinding',
        component: DatabindingComponent
      },
      {
        path: 'exercise/component',
        component: ComponentComponent
      },
      {
        path: 'exercise/ngfor',
        component: NgForComponent
      },
      {
        path: 'exercise/ngif',
        component: NgifComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
