import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandFormComponent } from './demand-form/demand-form.component';


const routes: Routes = [
  {path: 'demand-form', component: DemandFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
