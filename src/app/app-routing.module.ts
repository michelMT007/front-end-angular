import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashcoardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {path:'', component:DashcoardPageComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
