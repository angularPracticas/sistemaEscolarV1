import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'homeSchool', loadChildren:() => import('./home/home.module').then((h) => h.HomeModule) },
  { path: 'listStudents', loadChildren:() => import('./list-students/list-students.module').then((m) => m.ListStudentsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
