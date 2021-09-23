import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSchoolComponent } from './home-school/home-school.component';

const routes: Routes = [
  { path: '' , component:HomeSchoolComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
